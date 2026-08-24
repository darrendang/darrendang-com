#!/usr/bin/env python3
"""Generate the three 30-second DarrenDang.com book films.

Public-safe, deterministic production source for the MP4 files checked into
public/videos/. Visuals follow the DarrenDang.com navy / ivory / legacy-gold
system. Scores are synthesized from scratch so no third-party music is used.
"""

from __future__ import annotations

from PIL import Image, ImageDraw, ImageFont, ImageFilter
import argparse
import math
import os
import subprocess
import tempfile
import wave

import numpy as np

W, H = 960, 540
FPS = 30
SCENE_SECONDS = 5
NAVY = (13, 31, 49)
NAVY2 = (20, 40, 59)
IVORY = (245, 239, 228)
GOLD = (199, 154, 69)
MUTED = (190, 194, 193)
SERIF = "/usr/share/fonts/truetype/noto/NotoSerif-Regular.ttf"
SANS = "/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf"
SR = 44100
DURATION = 30.0


def run(cmd: list[str]) -> None:
    subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)


def fnt(path: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size=size)


def base(horizon: bool = True) -> Image.Image:
    im = Image.new("RGB", (W, H), NAVY)
    draw = ImageDraw.Draw(im)
    for y in range(H):
        t = y / max(H - 1, 1)
        color = tuple(int(NAVY[i] * (1 - t) + NAVY2[i] * t) for i in range(3))
        draw.line((0, y, W, y), fill=color)
    if horizon:
        glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        gd = ImageDraw.Draw(glow)
        for radius, alpha in ((390, 8), (290, 12), (210, 17), (135, 22)):
            cy = int(H * 0.57)
            gd.ellipse((W // 2 - radius, cy - int(radius * .35), W // 2 + radius, cy + int(radius * .35)), fill=(230, 183, 98, alpha))
        glow = glow.filter(ImageFilter.GaussianBlur(34))
        im = Image.alpha_composite(im.convert("RGBA"), glow).convert("RGB")
    return im


def star(draw: ImageDraw.ImageDraw, x: int, y: int, radius: int = 9) -> None:
    points = []
    for i in range(16):
        angle = -math.pi / 2 + i * math.pi / 8
        r = radius if i % 2 == 0 else radius * .28
        points.append((x + math.cos(angle) * r, y + math.sin(angle) * r))
    draw.polygon(points, fill=GOLD)


def wrap(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.FreeTypeFont, max_width: int) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        test = (current + " " + word).strip()
        if draw.textbbox((0, 0), test, font=font)[2] <= max_width:
            current = test
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def centered(draw: ImageDraw.ImageDraw, text: str, y: int, font: ImageFont.FreeTypeFont, fill=IVORY, max_width=810, spacing=8) -> None:
    lines = wrap(draw, text, font, max_width)
    heights = [draw.textbbox((0, 0), line, font=font)[3] - draw.textbbox((0, 0), line, font=font)[1] for line in lines]
    yy = y - (sum(heights) + spacing * (len(lines) - 1)) / 2
    for line, height in zip(lines, heights):
        box = draw.textbbox((0, 0), line, font=font)
        draw.text(((W - (box[2] - box[0])) / 2, yy), line, font=font, fill=fill)
        yy += height + spacing


def label(draw: ImageDraw.ImageDraw, text: str, y: int) -> None:
    font = fnt(SANS, 14)
    width = draw.textbbox((0, 0), text, font=font)[2]
    draw.text(((W - width) / 2, y), text, font=font, fill=GOLD)


def footer(draw: ImageDraw.ImageDraw) -> None:
    font = fnt(SANS, 13)
    text = "DARRENDANG.COM"
    width = draw.textbbox((0, 0), text, font=font)[2]
    draw.text((W - width - 38, H - 35), text, font=font, fill=(177, 181, 183))


def curve(start, end, bend=0, steps=70):
    x0, y0 = start
    x2, y2 = end
    cx = (x0 + x2) / 2 + bend
    cy = (y0 + y2) / 2 - 52
    pts = []
    for i in range(steps + 1):
        t = i / steps
        u = 1 - t
        x = u * u * x0 + 2 * u * t * cx + t * t * x2
        y = u * u * y0 + 2 * u * t * cy + t * t * y2
        pts.append((int(x), int(y)))
    return pts


def path(im: Image.Image, pts, width=5) -> Image.Image:
    glow = Image.new("RGBA", im.size, (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.line(pts, fill=(199, 154, 69, 105), width=14, joint="curve")
    glow = glow.filter(ImageFilter.GaussianBlur(10))
    im = Image.alpha_composite(im.convert("RGBA"), glow).convert("RGB")
    ImageDraw.Draw(im).line(pts, fill=GOLD, width=width, joint="curve")
    return im


def common(title: str, subtitle: str | None, eyebrow: str, visual=None) -> Image.Image:
    im = base(True)
    if visual:
        im = visual(im)
    d = ImageDraw.Draw(im)
    star(d, W - 83, 69, 8)
    label(d, eyebrow, 66)
    centered(d, title, 218, fnt(SERIF, 43), IVORY, 760, 9)
    if subtitle:
        centered(d, subtitle, 326, fnt(SANS, 19), MUTED, 700, 6)
    footer(d)
    return im


def one_path(im: Image.Image) -> Image.Image:
    return path(im, curve((105, 488), (480, 315), 52) + curve((480, 315), (758, 225), -30)[1:], 6)


def two_paths(im: Image.Image, crossed: bool) -> Image.Image:
    if crossed:
        p1 = curve((135, 488), (480, 285), 90) + curve((480, 285), (790, 195), -52)[1:]
        p2 = curve((825, 488), (480, 285), -90) + curve((480, 285), (810, 215), 60)[1:]
    else:
        p1 = curve((135, 488), (405, 240), 60)
        p2 = curve((825, 488), (555, 240), -60)
    im = path(im, p1, 5)
    return path(im, p2, 5)


def dots(im: Image.Image, connected: int) -> Image.Image:
    d = ImageDraw.Draw(im)
    pts = [(172, 390), (296, 248), (458, 382), (611, 214), (780, 375), (488, 158), (686, 435), (240, 142)]
    pairs = [(0, 1), (1, 2), (2, 3), (3, 4), (1, 5), (5, 3), (2, 6), (4, 6), (7, 1), (7, 5)]
    for a, b in pairs[:connected]:
        d.line([pts[a], pts[b]], fill=(199, 154, 69, 150), width=2)
    for i, (x, y) in enumerate(pts):
        r = 5 if i < 5 else 4
        d.ellipse((x - r, y - r, x + r, y + r), fill=GOLD if i < 5 else (145, 133, 108))
    return im


def book1_scenes() -> list[Image.Image]:
    scenes = []
    im = base(False)
    d = ImageDraw.Draw(im)
    for y, color in ((375, (18, 49, 70)), (416, (15, 43, 62)), (458, (11, 35, 51))):
        points = [(0, y)]
        for x in range(0, W + 60, 60):
            points.append((x, y + int(14 * math.sin(x / 72))))
        points += [(W, H), (0, H)]
        d.polygon(points, fill=color)
    star(d, W - 90, 64, 8)
    label(d, "BOOK 1 · INHERIT", 62)
    centered(d, "Twelve days at sea.", 208, fnt(SERIF, 48), IVORY, 680)
    centered(d, "Sometimes the first lesson is what other people carried for us.", 315, fnt(SANS, 18), MUTED, 665)
    footer(d)
    scenes.append(im)
    scenes.append(common("We inherit more than stories.", "We inherit sacrifice, judgment, opportunity—and unfinished maps.", "WHAT WE RECEIVE", one_path))
    im = common("INHERIT · BECOME · CONNECT", None, "THE JOURNEY", one_path)
    centered(ImageDraw.Draw(im), "Learn where you came from. Decide what to become. Connect what others keep separate.", 352, fnt(SANS, 18), MUTED, 735)
    scenes.append(im)
    im = common("LEAD · LIVE · PASS FORWARD", None, "THE JOURNEY", one_path)
    centered(ImageDraw.Draw(im), "Build people. Spend time deliberately. Leave something useful enough to be improved.", 352, fnt(SANS, 18), MUTED, 735)
    scenes.append(im)
    scenes.append(common("The road we walk today becomes a path for those who follow.", "A life in lessons about what we inherit—and what we choose to carry forward.", "FOR THOSE WHO COME AFTER US", one_path))
    im = base(True)
    d = ImageDraw.Draw(im)
    star(d, W // 2, 94, 11)
    label(d, "DARREN DANG · BOOK 1", 130)
    centered(d, "For Those Who Come After Us", 244, fnt(SERIF, 47), IVORY, 800)
    centered(d, "A Life in Lessons", 311, fnt(SERIF, 26), GOLD, 680)
    centered(d, "I hope you go farther than I did.", 390, fnt(SANS, 18), MUTED, 680)
    footer(d)
    scenes.append(im)
    return scenes


def book2_scenes() -> list[Image.Image]:
    return [
        common("Experience matters.", "So do expertise, responsibility, and rank.", "BOOK 2 · BECOME", lambda im: two_paths(im, False)),
        common("But wisdom can arrive from any direction.", "Sometimes the person you taught becomes someone you need to learn from.", "THE REVERSAL", lambda im: two_paths(im, False)),
        common("Who can I still learn from?", "Children. Colleagues. Protégés. People with fresh eyes.", "THE QUESTION", lambda im: two_paths(im, True)),
        common("WISDOM FLOWS BOTH WAYS", "Teach. Listen. Revise. Keep becoming.", "RECIPROCITY", lambda im: two_paths(im, True)),
        common("Wisdom has no rank.", "Useful insight does not become less true because it came from an unexpected voice.", "THE IDEA", lambda im: two_paths(im, True)),
        book2_end(),
    ]


def book2_end() -> Image.Image:
    im = base(True)
    im = two_paths(im, True)
    d = ImageDraw.Draw(im)
    star(d, W // 2, 88, 11)
    label(d, "DARREN DANG · BOOK 2", 124)
    centered(d, "Wisdom Has No Rank", 248, fnt(SERIF, 52), IVORY, 740)
    centered(d, "Teach it back to me.", 335, fnt(SERIF, 29), GOLD, 620)
    footer(d)
    return im


def book3_scenes() -> list[Image.Image]:
    return [
        common("You cannot connect a dot you never collected.", "Ideas. Experiences. Tools. Questions. Patterns.", "BOOK 3 · CREATE", lambda im: dots(im, 0)),
        common("The world organizes knowledge into disciplines.", "Problems do not.", "SEE PAST THE LABEL", lambda im: dots(im, 3)),
        common("Find the structure beneath the category.", "Then expand where you look for answers.", "LABEL · STRUCTURE · SEARCH SPACE", lambda im: dots(im, 6)),
        common("Collect Dots. Connect Dots.", "Transfer carefully. Test what fits.", "CURIOSITY WITH JUDGMENT", lambda im: dots(im, 10)),
        common("Create Something New.", "Novelty is not the goal. Usefulness is.", "SYNTHESIS", lambda im: dots(im, 10)),
        book3_end(),
    ]


def book3_end() -> Image.Image:
    im = base(True)
    im = dots(im, 10)
    d = ImageDraw.Draw(im)
    star(d, W // 2, 79, 11)
    label(d, "DARREN DANG · BOOK 3", 115)
    centered(d, "D.O.T.S.", 226, fnt(SERIF, 68), IVORY, 680)
    centered(d, "Collect Dots. Connect Dots. Create Something New.", 323, fnt(SERIF, 26), GOLD, 790)
    centered(d, "A way of seeing problems.", 390, fnt(SANS, 18), MUTED, 680)
    footer(d)
    return im


def envelope(n: int, attack=.08, release=.35) -> np.ndarray:
    e = np.ones(n, dtype=np.float32)
    a = min(n, max(1, int(attack * SR)))
    r = min(n, max(1, int(release * SR)))
    if a + r > n:
        a = max(1, n // 2)
        r = max(1, n - a)
    e[:a] = np.linspace(0, 1, a, endpoint=False)
    e[-r:] = np.linspace(1, 0, r)
    return e


def tone(buf: np.ndarray, start: float, duration: float, freq: float, amp=.1, kind="pad") -> None:
    i0 = int(start * SR)
    n = min(int(duration * SR), len(buf) - i0)
    if n <= 0:
        return
    t = np.arange(n, dtype=np.float32) / SR
    if kind == "piano":
        sig = np.sin(2 * np.pi * freq * t) + .35 * np.sin(2 * np.pi * 2 * freq * t) + .12 * np.sin(2 * np.pi * 3 * freq * t)
        env = envelope(n, .015, min(.55, duration * .4)) * np.exp(-2 * t / max(duration, .2))
    elif kind == "glass":
        sig = np.sin(2 * np.pi * freq * t) + .25 * np.sin(2 * np.pi * 2.01 * freq * t) + .12 * np.sin(2 * np.pi * 3.99 * freq * t)
        env = envelope(n, .01, min(.8, duration * .5)) * np.exp(-1.5 * t / max(duration, .2))
    else:
        sig = np.sin(2 * np.pi * freq * t) + .22 * np.sin(2 * np.pi * 2 * freq * t)
        env = envelope(n, .35, min(.8, duration * .3))
    buf[i0:i0 + n] += amp * sig * env


def score(book: str, path_out: str) -> None:
    buf = np.zeros(int(SR * DURATION), dtype=np.float32)
    if book == "book1":
        bpm, chords = 72, [[220, 277.18, 329.63], [196, 246.94, 293.66], [174.61, 220, 261.63], [196, 246.94, 329.63]]
        beat = 60 / bpm
        for bar in range(9):
            start = bar * 4 * beat
            chord = chords[bar % 4]
            for fr in chord:
                tone(buf, start, 4 * beat, fr, .035, "pad")
            for b in range(4):
                tone(buf, start + b * beat, .9, chord[0 if b % 2 == 0 else 1] * 2, .055, "piano")
    elif book == "book2":
        bpm, chords = 82, [[220, 261.63, 329.63], [196, 246.94, 293.66], [174.61, 220, 261.63], [196, 246.94, 329.63]]
        beat = 60 / bpm
        for bar in range(11):
            start = bar * 4 * beat
            chord = chords[bar % 4]
            for fr in chord:
                tone(buf, start, 4 * beat, fr, .03, "pad")
            for b in range(4):
                tone(buf, start + b * beat, .55, chord[(b + 1) % 3] * 2, .045, "piano")
                if b in (1, 3):
                    tone(buf, start + b * beat + beat / 2, .35, chord[0] * 3, .022, "glass")
    else:
        bpm, chords = 96, [[220, 277.18, 329.63], [246.94, 293.66, 369.99], [196, 246.94, 329.63], [220, 261.63, 329.63]]
        beat = 60 / bpm
        for bar in range(12):
            start = bar * 4 * beat
            chord = chords[bar % 4]
            for fr in chord:
                tone(buf, start, 4 * beat, fr, .024, "pad")
            for b in range(4):
                tone(buf, start + b * beat, .35, chord[b % 3] * 2, .036, "glass")
                tone(buf, start + b * beat + beat / 2, .25, chord[(b + 1) % 3] * 3, .02, "glass")
    tone(buf, 27.5, 2.2, 440, .04, "glass")
    fade_in = int(.8 * SR)
    fade_out = int(1.3 * SR)
    master = np.ones(len(buf), dtype=np.float32)
    master[:fade_in] = np.linspace(0, 1, fade_in)
    master[-fade_out:] = np.linspace(1, 0, fade_out)
    buf = np.tanh(buf * master * 1.25)
    buf = buf / (np.max(np.abs(buf)) or 1) * .72
    with wave.open(path_out, "wb") as wav:
        wav.setnchannels(2)
        wav.setsampwidth(2)
        wav.setframerate(SR)
        stereo = np.column_stack([buf, buf])
        wav.writeframes((stereo * 32767).astype(np.int16).tobytes())


def render_book(work: str, output_dir: str, book: str, scenes: list[Image.Image], filename: str) -> None:
    book_dir = os.path.join(work, book)
    os.makedirs(book_dir, exist_ok=True)
    clip_paths = []
    for index, scene in enumerate(scenes, 1):
        png = os.path.join(book_dir, f"scene-{index}.png")
        clip = os.path.join(book_dir, f"clip-{index}.mp4")
        scene.save(png)
        frames = SCENE_SECONDS * FPS
        zoom = f"zoompan=z='min(zoom+0.00035,1.035)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d={frames}:s={W}x{H}:fps={FPS}"
        vf = f"{zoom},fade=t=in:st=0:d=.35,fade=t=out:st=4.62:d=.38,format=yuv420p"
        run(["ffmpeg", "-y", "-loop", "1", "-i", png, "-t", str(SCENE_SECONDS), "-vf", vf, "-r", str(FPS), "-c:v", "libx264", "-preset", "medium", "-crf", "27", "-pix_fmt", "yuv420p", clip])
        clip_paths.append(clip)
    concat = os.path.join(book_dir, "concat.txt")
    with open(concat, "w", encoding="utf-8") as handle:
        for clip in clip_paths:
            handle.write(f"file '{clip}'\n")
    silent = os.path.join(book_dir, "silent.mp4")
    run(["ffmpeg", "-y", "-f", "concat", "-safe", "0", "-i", concat, "-c", "copy", silent])
    wav = os.path.join(book_dir, "score.wav")
    score(book, wav)
    out = os.path.join(output_dir, filename)
    run(["ffmpeg", "-y", "-i", silent, "-i", wav, "-c:v", "libx264", "-preset", "medium", "-crf", "29", "-c:a", "aac", "-b:a", "96k", "-shortest", "-movflags", "+faststart", out])
    poster = scenes[-1].convert("RGB")
    poster.save(os.path.join(output_dir, filename.replace(".mp4", "-poster.jpg")), quality=88, optimize=True)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", default="public/videos")
    args = parser.parse_args()
    os.makedirs(args.output, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix="darren-book-films-") as work:
        render_book(work, args.output, "book1", book1_scenes(), "for-those-who-come-after-us-book-film.mp4")
        render_book(work, args.output, "book2", book2_scenes(), "wisdom-has-no-rank-book-film.mp4")
        render_book(work, args.output, "book3", book3_scenes(), "dots-book-film.mp4")
    print("Generated DarrenDang.com book films in", args.output)


if __name__ == "__main__":
    main()
