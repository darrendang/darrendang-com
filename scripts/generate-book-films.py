#!/usr/bin/env python3
"""Generate three public-safe 30-second DarrenDang.com book films.

Visuals follow the canonical midnight-navy, warm-ivory and legacy-gold system.
All music is synthesized in this script so the site can use original, public-safe,
more upbeat scores without relying on third-party licensed media.
"""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import math, os, wave, subprocess
import numpy as np

OUT=None
W,H=960,540
FPS=12
SR=32000
NAVY=(13,31,49); NAVY2=(20,40,59); IVORY=(245,239,228); GOLD=(199,154,69); MUTED=(188,193,195)
SERIF='/usr/share/fonts/truetype/noto/NotoSerif-Regular.ttf' if os.path.exists('/usr/share/fonts/truetype/noto/NotoSerif-Regular.ttf') else '/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf'
SANS='/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf' if os.path.exists('/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf') else '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'


def font(path,size,bold=False):
    if bold and path==SANS:
        path='/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf' if os.path.exists('/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf') else '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
    return ImageFont.truetype(path,size)

def base():
    im=Image.new('RGB',(W,H),NAVY)
    d=ImageDraw.Draw(im)
    for y in range(H):
        t=y/(H-1)
        c=tuple(int(NAVY[i]*(1-t)+NAVY2[i]*t) for i in range(3))
        d.line((0,y,W,y),fill=c)
    glow=Image.new('RGBA',(W,H),(0,0,0,0)); gd=ImageDraw.Draw(glow)
    for r,a in [(360,10),(250,14),(155,22)]:
        gd.ellipse((W//2-r,245-r//3,W//2+r,245+r//3),fill=(220,170,85,a))
    glow=glow.filter(ImageFilter.GaussianBlur(28))
    return Image.alpha_composite(im.convert('RGBA'),glow).convert('RGB')

def star(d,x,y,r=10):
    pts=[]
    for i in range(16):
        a=-math.pi/2+i*math.pi/8
        rr=r if i%2==0 else r*.28
        pts.append((x+math.cos(a)*rr,y+math.sin(a)*rr))
    d.polygon(pts,fill=GOLD)

def wrap(d,text,f,maxw):
    words=text.split(); lines=[]; cur=''
    for w in words:
        t=(cur+' '+w).strip()
        if d.textbbox((0,0),t,font=f)[2] <= maxw: cur=t
        else:
            if cur: lines.append(cur)
            cur=w
    if cur: lines.append(cur)
    return lines

def center(d,text,y,f,fill=IVORY,maxw=810,space=8):
    lines=wrap(d,text,f,maxw)
    heights=[d.textbbox((0,0),ln,font=f)[3]-d.textbbox((0,0),ln,font=f)[1] for ln in lines]
    yy=y-(sum(heights)+space*(len(lines)-1))/2
    for ln,h in zip(lines,heights):
        b=d.textbbox((0,0),ln,font=f); tw=b[2]-b[0]
        d.text(((W-tw)/2,yy),ln,font=f,fill=fill)
        yy+=h+space

def frame(eyebrow,title,subtitle='',visual=None):
    im=base()
    if visual: visual(im)
    d=ImageDraw.Draw(im)
    star(d,W-72,56,8)
    f1=font(SANS,14,True); tw=d.textbbox((0,0),eyebrow,font=f1)[2]
    d.text(((W-tw)/2,52),eyebrow,font=f1,fill=GOLD)
    center(d,title,225,font(SERIF,43),IVORY,790,8)
    if subtitle: center(d,subtitle,333,font(SANS,18),MUTED,720,7)
    f2=font(SANS,11); txt='DARRENDANG.COM'; tw=d.textbbox((0,0),txt,font=f2)[2]
    d.text((W-tw-30,H-30),txt,font=f2,fill=(160,169,176))
    return im

def bez(p0,p1,p2,n=100):
    out=[]
    for i in range(n):
        t=i/(n-1); u=1-t
        out.append((int(u*u*p0[0]+2*u*t*p1[0]+t*t*p2[0]),int(u*u*p0[1]+2*u*t*p1[1]+t*t*p2[1])))
    return out

def gold_path(im,two=False):
    d=ImageDraw.Draw(im)
    if not two:
        pts=bez((110,500),(420,430),(800,385))
        d.line(pts,fill=(172,133,62),width=4)
    else:
        p1=bez((100,500),(330,450),(520,405)); p2=bez((860,500),(650,450),(520,405))
        tail=bez((520,405),(650,390),(795,365))
        d.line(p1,fill=(172,133,62),width=4); d.line(p2,fill=(172,133,62),width=4); d.line(tail,fill=(199,154,69),width=4)

def dotnet(im,connected=10):
    d=ImageDraw.Draw(im)
    pts=[(120,430),(230,385),(390,465),(570,425),(790,455),(520,405),(845,395),(95,385)]
    pairs=[(0,1),(1,2),(2,5),(5,3),(3,4),(5,6),(6,4),(7,1),(2,3),(1,5)]
    for a,b in pairs[:connected]: d.line((pts[a],pts[b]),fill=(151,119,58),width=2)
    for i,(x,y) in enumerate(pts):
        r=5 if i<5 else 4
        d.ellipse((x-r,y-r,x+r,y+r),fill=GOLD if i<5 else (145,133,108))

def endcard(book,title,tagline,visual=None):
    im=base()
    if visual: visual(im)
    d=ImageDraw.Draw(im); star(d,W//2,85,11)
    f=font(SANS,14,True); e=f'DARREN DANG · {book}'; tw=d.textbbox((0,0),e,font=f)[2]; d.text(((W-tw)/2,120),e,font=f,fill=GOLD)
    center(d,title,255,font(SERIF,51),IVORY,800,8)
    center(d,tagline,350,font(SERIF,25),GOLD,790,7)
    f2=font(SANS,11); txt='DARRENDANG.COM'; tw=d.textbbox((0,0),txt,font=f2)[2]; d.text((W-tw-30,H-30),txt,font=f2,fill=(160,169,176))
    return im

def score(path,bpm,root,mode='warm'):
    dur=30.0; n=int(SR*dur); y=np.zeros(n,dtype=np.float32)
    rng=np.random.default_rng(7)

    def add(start,duration,freq,amp,waveform='sine',attack=0.01,release=0.12):
        i0=int(start*SR); nn=min(int(duration*SR),n-i0)
        if nn<=0:return
        t=np.arange(nn,dtype=np.float32)/SR
        if waveform=='sine':
            sig=np.sin(2*np.pi*freq*t)
        elif waveform=='triangle':
            sig=2*np.abs(2*((freq*t)%1)-1)-1
        elif waveform=='saw':
            sig=2*((freq*t)%1)-1
        elif waveform=='bell':
            sig=np.sin(2*np.pi*freq*t)+0.45*np.sin(2*np.pi*2.01*freq*t)+0.2*np.sin(2*np.pi*3*freq*t)
        elif waveform=='kick':
            sweep=freq*(1.9*np.exp(-7*t)+0.55)
            sig=np.sin(2*np.pi*sweep*t)
        elif waveform=='snare':
            noise=rng.normal(0,1,nn).astype(np.float32)
            tone=np.sin(2*np.pi*freq*1.7*t)
            sig=0.78*noise+0.22*tone
        elif waveform=='hat':
            noise=rng.normal(0,1,nn).astype(np.float32)
            sig=noise-np.roll(noise,1)
        else:
            sig=np.sin(2*np.pi*freq*t)
        env=np.ones(nn,dtype=np.float32)
        a=min(max(int(attack*SR),1),nn)
        r=min(max(int(release*SR),1),nn)
        env[:a]=np.linspace(0,1,a,dtype=np.float32)
        env[-r:]=np.linspace(1,0,r,dtype=np.float32)
        if waveform in ('kick','snare','hat','bell'):
            env*=np.exp(-4.2*t/max(duration,0.06))
        else:
            sustain=max(duration-attack-release,0.02)
            env*=0.92+0.08*np.exp(-2*t/max(sustain,0.1))
        y[i0:i0+nn]+=amp*sig*env

    def hz(semi,octave=0):
        return root*(2**((semi+12*octave)/12))

    major_scale=[0,2,4,5,7,9,11]
    progressions={
        'warm':[(0,'maj'),(9,'min'),(5,'maj'),(7,'maj')],
        'bright':[(0,'maj'),(7,'maj'),(9,'min'),(5,'maj')],
        'spark':[(0,'maj'),(5,'maj'),(9,'min'),(7,'maj')],
    }
    melodies={
        'warm':[0,2,4,2,4,5,4,2,0,2,4,7,5,4,2,0],
        'bright':[4,5,7,9,7,5,4,2,4,5,7,11,9,7,5,4],
        'spark':[7,9,11,12,11,9,7,5,7,9,11,14,12,11,9,7],
    }
    chord_prog=progressions.get(mode,progressions['warm'])
    melody=melodies.get(mode,melodies['warm'])
    beat=60.0/bpm
    bar=beat*4
    bars=int(math.ceil(dur/bar))+1

    for bar_idx in range(bars):
        start=bar_idx*bar
        if start>=dur: break
        semi,quality=chord_prog[bar_idx%len(chord_prog)]
        intervals=[0,4,7] if quality=='maj' else [0,3,7]
        chord_len=min(bar+0.12,dur-start)
        for j,iv in enumerate(intervals):
            add(start,chord_len,hz(semi+iv,0),0.040/(1+j*0.15),'triangle',0.04,0.22)
            add(start,chord_len,hz(semi+iv,1),0.018/(1+j*0.10),'sine',0.04,0.24)
        for step,offset in enumerate([0,0,7,0]):
            note_dur=beat*(0.74 if step!=2 else 0.62)
            add(start+step*beat,note_dur,hz(semi+offset,-1),0.10,'saw',0.005,0.10)
        for step in range(4):
            t=start+step*beat
            if step in (0,2): add(t,0.32,58 if mode!='spark' else 64,0.23,'kick',0.001,0.16)
            if step in (1,3): add(t,0.22,185,0.11,'snare',0.001,0.10)
            add(t,0.05,6000,0.030,'hat',0.001,0.03)
            add(t+beat*0.5,0.04,7600,0.020 if step!=3 else 0.028,'hat',0.001,0.025)
        for step in range(8):
            t=start+step*(beat*0.5)
            if t>=dur: break
            idx=(bar_idx*2+step)%len(melody)
            degree=melody[idx]
            octave=1+degree//7
            scale_semi=major_scale[degree%7]+12*(octave-1)
            lead_semi=semi+scale_semi
            lead_wave='bell' if mode=='spark' and step%2==0 else 'sine'
            amp=0.050 if mode=='warm' else (0.058 if mode=='bright' else 0.062)
            add(t,beat*0.42,hz(lead_semi,0),amp,lead_wave,0.002,0.08)
        if bar_idx in (3,7):
            for k in range(4):
                tt=min(start+bar-0.4+k*0.09,dur-0.05)
                add(tt,0.16,hz(semi+7+k*2,1),0.038,'bell',0.002,0.06)

    swell_start=max(dur-4.0,0)
    for semi in (0,4,7,11):
        add(swell_start,3.8,hz(semi,0),0.022,'triangle',0.10,0.60)
        add(swell_start,3.8,hz(semi,1),0.012,'sine',0.10,0.60)

    peak=np.max(np.abs(y)); y=y/(peak if peak else 1)*0.78
    pcm=(y*32767).astype('<i2')
    with wave.open(path,'wb') as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes())

def encode(slides, audio, out):
    inputs=[]
    for p in slides:
        inputs += ["-loop", "1", "-framerate", str(FPS), "-t", "5", "-i", p]
    inputs += ["-i", audio]
    filters=[]; segs=[]
    for i in range(6):
        filters.append(f"[{i}:v]scale={W}:{H}:flags=lanczos,fade=t=in:st=0:d=0.35,fade=t=out:st=4.62:d=0.38,format=yuv420p[s{i}]")
        segs.append(f"[s{i}]")
    filters.append("".join(segs)+"concat=n=6:v=1:a=0[vout]")
    cmd=["ffmpeg","-y",*inputs,"-filter_complex",";".join(filters),"-map","[vout]","-map","6:a:0","-t","30","-r",str(FPS),"-c:v","libx264","-preset","medium","-crf","29","-pix_fmt","yuv420p","-movflags","+faststart","-c:a","aac","-b:a","72k","-ac","1",out]
    subprocess.run(cmd,check=True)

def build(slidespec,name,bpm,root,mode='warm'):
    d=os.path.join(OUT,name); os.makedirs(d,exist_ok=True)
    slidepaths=[]
    for i,im in enumerate(slidespec):
        p=os.path.join(d,f's{i}.jpg'); im.save(p,quality=91,subsampling=0); slidepaths.append(p)
    poster=os.path.join(OUT,name+'-poster.jpg'); slidespec[-1].save(poster,quality=90,subsampling=0)
    wav=os.path.join(d,'score.wav'); score(wav,bpm,root,mode)
    out=os.path.join(OUT,name+'.mp4'); encode(slidepaths,wav,out)
    return out,poster

book1=[
 frame('BOOK 1 · INHERIT','Twelve days at sea.','Sometimes the first lesson is what other people carried for us.',gold_path),
 frame('WHAT WE RECEIVE','We inherit more than stories.','We inherit sacrifice, judgment, opportunity—and unfinished maps.',gold_path),
 frame('THE JOURNEY','INHERIT · BECOME · CONNECT','Learn where you came from. Decide what to become. Connect what others keep separate.',gold_path),
 frame('THE JOURNEY','LEAD · LIVE · PASS FORWARD','Build people. Spend time deliberately. Leave something useful enough to be improved.',gold_path),
 frame('FOR THOSE WHO COME AFTER US','The road we walk today becomes a path for those who follow.','A life in lessons about what we inherit—and what we choose to carry forward.',gold_path),
 endcard('BOOK 1','For Those Who Come After Us','I hope you go farther than I did.',gold_path)
]
book2=[
 frame('BOOK 2 · BECOME','Experience matters.','So do expertise, responsibility, and rank.',lambda im:gold_path(im,True)),
 frame('THE REVERSAL','But wisdom can arrive from any direction.','Sometimes the person you taught becomes someone you need to learn from.',lambda im:gold_path(im,True)),
 frame('THE QUESTION','Who can I still learn from?','Children. Colleagues. Protégés. People with fresh eyes.',lambda im:gold_path(im,True)),
 frame('RECIPROCITY','WISDOM FLOWS BOTH WAYS','Teach. Listen. Revise. Keep becoming.',lambda im:gold_path(im,True)),
 frame('THE IDEA','Wisdom has no rank.','Useful insight does not become less true because it came from an unexpected voice.',lambda im:gold_path(im,True)),
 endcard('BOOK 2','Wisdom Has No Rank','Teach it back to me.',lambda im:gold_path(im,True))
]
book3=[
 frame('BOOK 3 · CREATE','You cannot connect a dot you never collected.','Ideas. Experiences. Tools. Questions. Patterns.',lambda im:dotnet(im,0)),
 frame('SEE PAST THE LABEL','The world organizes knowledge into disciplines.','Problems do not.',lambda im:dotnet(im,3)),
 frame('LABEL · STRUCTURE · SEARCH SPACE','Find the structure beneath the category.','Then expand where you look for answers.',lambda im:dotnet(im,6)),
 frame('CURIOSITY WITH JUDGMENT','Collect Dots. Connect Dots.','Transfer carefully. Test what fits.',lambda im:dotnet(im,10)),
 frame('SYNTHESIS','Create Something New.','Novelty is not the goal. Usefulness is.',lambda im:dotnet(im,10)),
 endcard('BOOK 3','D.O.T.S.','Collect Dots. Connect Dots. Create Something New.',lambda im:dotnet(im,10))
]

def main():
    import argparse
    global OUT
    parser=argparse.ArgumentParser(description="Generate DarrenDang.com trilogy book films")
    parser.add_argument("--output", default="public/videos")
    args=parser.parse_args()
    OUT=args.output
    os.makedirs(OUT, exist_ok=True)
    jobs=[
        (book1,"for-those-who-come-after-us-book-film",92,110,"warm"),
        (book2,"wisdom-has-no-rank-book-film",104,123,"bright"),
        (book3,"dots-book-film",116,131,"spark"),
    ]
    for job in jobs:
        video,poster=build(*job)
        print(video)
        print(poster)

if __name__ == "__main__":
    main()
