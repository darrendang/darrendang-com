import { pageMetadata } from "@/lib/seo";
import { WorkStructuredData } from "@/components/WorkStructuredData";
import type { Metadata } from "next";
import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";
import styles from "./page.module.css";

const route = "/letters/to-nathan-the-way-you-see/";
const title = "To Nathan: The Way You See";
const subtitle = "A letter to my son about finding his own voice and what he has taught me along the way.";

export const metadata: Metadata = pageMetadata(route, {
  title,
  description: "A father writes to his son Nathan about individuality, integrity, listening, and learning from the way his child sees the world. Includes the song and original written lyrics.",
  alternates: { canonical: route },
  openGraph: {
    title: "To Nathan: The Way You See | Darren Dang",
    description: "A father learning to listen. A son finding his own way. Read Darren Dang's letter and listen to The Way You See.",
    type: "article",
    url: route,
  },
});

const letterParagraphs = [
  "Dear Nathan,",
  "One of the great privileges of being a father is watching your children become who they are. One of the surprises is discovering how much they can teach you along the way.",
  "I have spent much of your life trying to share what I know, hoping my experiences might give you a stronger place to begin. But as you've grown, I've come to appreciate something just as important: you see the world in ways I sometimes don't.",
  "And I am learning to listen.",
  "I think about the day we were working on your room. Your mom and I had our own ideas about what would look good. We saw individual pieces: walls, pictures, shelves, furniture. You saw how everything belonged together.",
  "The charcoal walls, black-and-white artwork, and small touches of green came together into something distinctly yours. I remember walking in and finally understanding what you had been imagining all along.",
  "It was a small moment, but it taught me something.",
  "Sometimes, as parents, we are so eager to offer our experience that we forget to ask what our children are trying to create. I learned to ask about your vision before offering mine.",
  "Eventually, I trusted your eye enough to imagine you helping design our future home.",
  "You also taught me a lesson about balance.",
  "I remember our conversation about getting the work done and then giving yourself something to look forward to. Sometimes it was boba, a good meal, time with friends, or simply enjoying the day.",
  "It reminded me that responsibility and enjoyment are not opposites. We work hard to build a good life, but we also need to enjoy the life we are building.",
  "I needed that reminder.",
  "There are other moments that make me proud, especially the ones that reveal your character.",
  "I think about the time you recognized a mistake that had worked in your favor and chose to correct it, even though doing so meant giving something up. Nobody had to make that decision for you. You made it because you believed it was right.",
  "That quiet act of integrity told me more about the person you are becoming than any grade or award could.",
  "I see your confidence growing, too. In the way you lead, the way you connect with people, and the way you bring your personality and perspective into everything you do.",
  "You have your own sense of style, your own interests, your own humor, and your own way of approaching the world. I enjoy watching that individuality emerge.",
  "You have grown up with a brother and sister whose paths have given our family much to celebrate. But each of you has something different to contribute. There is no single measure of a meaningful life, and your journey does not need to resemble theirs or mine.",
  "You do not need to become a version of anyone else. You need room to discover who you want to be.",
  "As your father, I will always have advice. Probably more than you want to hear.",
  "But I am also learning when to speak, when to listen, when to trust your judgment, and when to give you room to figure things out for yourself.",
  "I hope you remain curious. I hope you hold on to your integrity, especially when doing the right thing costs you something. I hope you surround yourself with good people, pursue what interests you, and never become afraid to change your mind when life teaches you something new.",
  "Most of all, I hope you build a life that feels genuinely yours.",
  "I wrote a song for you called The Way You See.",
  "The title came from something I have been discovering through you. We often think of parenting as teaching our children how to see the world. But if we pay attention, our children can help us see it differently, too.",
  "The song is my way of telling you that I see you, I believe in you, and I am proud of the person you are becoming.",
  "I don't know exactly where life will take you. I look forward to discovering that with you.",
  "Keep finding your own voice, Nathan. Keep seeing the world in your own way. And know that you will always have a father who loves you, believes in you, and is still learning from you.",
  "I love you, son. And I love being your dad.",
  "Happy birthday. Boba is on me.",
  "Love,",
  "Dad"
];

type LyricSection = { title: string; text: string };
const writtenLyrics: LyricSection[] = [
  {
    "title": "Verse 1",
    "text": "You changed the blue to charcoal,\nPut the pictures where they fit.\nI was bringing you suggestions,\nYou were making sense of it.\nLittle green against the gray,\nRoom enough to let it breathe.\nI walked in and saw it your way,\nSomething changed in me."
  },
  {
    "title": "Pre-Chorus",
    "text": "Now I ask a little more,\nLet you finish what you mean.\nI love getting to discover\nAll the things that you can see."
  },
  {
    "title": "Chorus",
    "text": "I love the way you see\nThings that I was missing.\nEvery time you speak,\nI'm learning how to listen.\nTake your time with who you'll be,\nLet the future breathe.\nNathan, there's so much of you\nI'm still getting to know."
  },
  {
    "title": "Verse 2",
    "text": "On a drive to school you told me,\nGet the work done, then make time.\nBoba, games, a meal with friends,\nSomething good to keep in mind.\nThree voices round our table,\nEach one a different sound.\nYours is growing clearer,\nI love hearing it now."
  },
  {
    "title": "Pre-Chorus",
    "text": "There's a leader taking shape,\nWith a way that feels like you.\nI have watched you find the words,\nAnd say what matters to you."
  },
  {
    "title": "Chorus",
    "text": "I love the way you see\nThings that I was missing.\nEvery time you speak,\nI'm learning how to listen.\nTake your time with who you'll be,\nLet the future breathe.\nNathan, there's so much of you\nI'm still getting to know."
  },
  {
    "title": "Bridge",
    "text": "Those points you hadn't earned,\nYou gave them back that day.\nI saw the strength it took\nTo let the number change.\nWhatever road you choose,\nYou can call me on the way.\nI love being your dad,\nAnd I love you here today."
  },
  {
    "title": "Final Chorus",
    "text": "I love the way you see\nThings that I was missing.\nEvery time you speak,\nI'm learning how to listen.\nTake your time with who you'll be,\nLet the future breathe.\nNathan, there's so much of you\nI'm still getting to know."
  },
  {
    "title": "Outro",
    "text": "Happy birthday, Nathan.\nI love the way you see."
  }
];

export default function ToNathanPage() {
  return (
    <InteriorPage path={route} eyebrow="Special Letter / Song · November 2026" title={title} wide>
      <WorkStructuredData kind="Article" name={title} path={route} description={metadata.description} />
      <header className={styles.intro}>
        <p className="lead">{subtitle}</p>
        <p className={styles.byline}>Darren Dang <span aria-hidden="true">·</span> <time dateTime="2026-11">November 2026</time></p>
      </header>
      <article className={styles.letter} aria-label="A letter to Nathan">
        {letterParagraphs.map((paragraph, index) => {
          const isSignature = index >= letterParagraphs.length - 2;
          const isEmphasis = paragraph === "You do not need to become a version of anyone else. You need room to discover who you want to be.";
          return <p key={index} className={isSignature ? styles.signature : isEmphasis ? styles.emphasis : undefined}>{paragraph}</p>;
        })}
      </article>

      <section className={styles.song} aria-labelledby="song-heading">
        <div className="eyebrow bronze">Companion song</div>
        <h2 id="song-heading">The Way You See</h2>
        <p className={styles.songLead}>An original song for Nathan, from Dad. A different way of expressing the love and lessons behind this letter.</p>
        <audio controls preload="metadata" aria-label="Listen to The Way You See, a song for Nathan">
          <source src="/audio/Song-The-Way-You-See-Nathan.mp3" type="audio/mpeg" />
          Your browser does not support audio playback.
        </audio>
        <details className={styles.lyrics} id="lyrics">
          <summary>Read the original written lyrics</summary>
          <div className={styles.lyricsBody}>
            <p className={styles.lyricsNote}>These are the original written lyrics. The selected recording is a later performance, so words and phrasing may differ.</p>
            {writtenLyrics.map((section, index) => (
              <div className={styles.lyricsSection} key={index}>
                <h3>{section.title}</h3>
                <p>{section.text}</p>
              </div>
            ))}
          </div>
        </details>
      </section>

      <nav className={styles.links} aria-label="Continue exploring">
        <Link className="text-link" href="/letters/">More Letters</Link>
        <Link className="text-link" href="/the-way/music/#nathans-song">The Way in Music</Link>
        <Link className="text-link" href="/books/wisdom-has-no-rank/">Wisdom Has No Rank</Link>
      </nav>
    </InteriorPage>
  );
}
