import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "To Chrystina — The Way Was Us",
  description: "A birthday letter and two musical expressions from Darren Dang to his wife Chrystina about marriage, family, legacy, and the life behind The Way.",
  alternates: { canonical: "/letters/the-way-was-us/" },
  openGraph: {
    title: "To Chrystina — The Way Was Us | Darren Dang",
    description: "A birthday letter and songs about marriage, family, legacy, and the life behind The Way.",
    type: "article",
    url: "/letters/the-way-was-us/",
    images: [
      {
        url: "/images/darren-chrystina-vow-renewal-santorini.webp",
        width: 3236,
        height: 1960,
        alt: "Darren and Chrystina during their vow renewal in Santorini on June 19, 2019.",
      },
    ],
  },
};

type LyricSection = {
  title: string;
  text: string;
};

const popOperaLyrics: LyricSection[] = [
  {
    title: "Verse 1",
    text: `Before I ever found the words,\nbefore I ever named The Way,\nthere was you beside me,\nliving it with me day by day.\n\nWe built it in the ordinary—\nthe dinners, drives, the changing plans.\nYou were there when I was certain,\nand when I needed your steady hand.\n\nSomewhere through those years together,\nthrough every road life put us through,\nI learned that home was never a place.\n\nHome was you.`,
  },
  {
    title: "Pre-Chorus",
    text: `I spent a lifetime trying to understand\nwhat is worth holding\nand what we leave behind.\n\nBut the answer was beside me,\n\nholding my hand.`,
  },
  {
    title: "Chorus",
    text: `Before I ever named The Way,\nwe were already living it—\n\nlearning from yesterday,\nnever letting yesterday decide what’s next.\n\nWe gave our children roots to hold\nand all the sky they needed to fly.\n\nAnd if they ever ask me\nwhere The Way began—\n\nit was never mine alone.\n\nThe Way was us.`,
  },
  {
    title: "Verse 2",
    text: `Look at the three lives that we raised.\nLook at who they’ve grown to be.\n\nStrong enough to find their own roads,\nwise enough to question you and me.\n\nEvery early morning,\nevery worry you kept inside,\nevery quiet sacrifice you made\nso one of us could rise—\n\nwhen I look at everything I love in them,\n\nI see so much of you.`,
  },
  {
    title: "Pre-Chorus 2",
    text: `Long before I wrote of legacy,\nwe were building one.\n\nLove was what we started with.\n\nLove became\nwhat we passed on.`,
  },
  {
    title: "Chorus 2",
    text: `Before I ever named The Way,\nwe were already living it—\n\nlearning from yesterday,\nnever letting yesterday decide what’s next.\n\nWe gave our children roots to hold\nand all the sky they needed to fly.\n\nAnd if they ever ask me\nwhere The Way began—\n\nit was never mine alone.\n\nThe Way was us.`,
  },
  {
    title: "Bridge",
    text: `So on your birthday,\nI don’t want to count the years.\n\nI want you to know—\n\nI saw it.\n\nI see it.\n\nMy wife.\nMy partner.\nMy confidante.\nMy soulmate.\n\nMy home.\n\nAnd if I had another lifetime,\nknowing everything I know today,\n\nI would still find you.\n\nI would still choose you.\n\nTi sceglierei ancora.\n\nIn ogni vita.\n\nEvery time.\n\nEvery way.\n\nAmore mio.`,
  },
  {
    title: "Final Chorus",
    text: `Before I ever named The Way,\nyou were already part of it—\n\nevery lesson, every sacrifice,\nevery love that gave it breath.\n\nWe gave our children somewhere strong to stand\nand the freedom to go farther than we came.\n\nAnd after every road we’ve traveled,\nafter everything we’ve built and become,\n\nif they ask me where The Way began,\n\nI’ll tell them—\n\nnot in a book.\n\nNot in an idea.\n\nIt began in a life.\n\nIt began in a family.\n\nIt began with us.`,
  },
  {
    title: "Outro",
    text: `Of all the things\nI am proud to leave behind,\n\nthe life I built with you\nis the one I’m proudest of.\n\nHappy birthday,\n\namore mio.\n\nMy partner.\n\nMy soulmate.\n\nMy way home.\n\nTi sceglierei ancora.`,
  },
];

const originalLyrics: LyricSection[] = [
  {
    title: "Intro",
    text: `Before I ever found the words\nBefore I ever named The Way\nThere was you beside me\nLiving it with me\nDay by day`,
  },
  {
    title: "Verse 1",
    text: `We didn't start with answers\nWe started with a life\nTwo people choosing one another\nA husband and a wife\n\nWe built it in the ordinary\nThe dinners, drives, and late-night talks\nIn all the plans that changed around us\nAnd every road we had to walk\n\nYou were there when I was certain\nYou were there when I was wrong\nYou knew when I needed challenging\nAnd when I just needed someone strong\n\nAnd somewhere in those years together\nThrough everything that life put us through\nI learned that home was never a place\nHome was you`,
  },
  {
    title: "Pre-Chorus",
    text: `I have spent a lifetime\nTrying to understand\nWhat is worth holding\nAnd what we leave behind\n\nBut the answer was beside me\nHolding my hand`,
  },
  {
    title: "Chorus",
    text: `Before I ever named The Way\nWe were already living it\nLearning from yesterday\nBut never letting yesterday decide what's next\n\nBuilding something strong enough\nTo give our children room to fly\nA stronger place to start from\nAnd the freedom to choose their sky\n\nIf anything of me lives on\nIn something good that they become\nLet everyone who comes after know\nThe Way was never mine alone\nThe Way was us`,
  },
  {
    title: "Verse 2",
    text: `Look at the three lives that we raised\nLook at who they've grown to be\nSharp minds that know how to question\nStrong enough in heart and body to lead\n\nThey walk into a room with purpose\nThey carry themselves with quiet pride\nNot because we chose their futures\nBut because we stood there by their side\n\nWe taught them strength without hardness\nDiscipline without losing heart\nTo lead without needing the spotlight\nTo finish what they choose to start\n\nAnd when the world looks up to them\nI hope you see what I can see\nSo much of everything I admire in them\nCame from you and me\nBut so much came from you`,
  },
  {
    title: "Pre-Chorus 2",
    text: `Every early morning\nEvery worry you kept inside\nEvery time you carried more\nSo one of us could rise\n\nOur children know my stories\nBut you lived the chapters\nNo one else could write`,
  },
  {
    title: "Chorus 2",
    text: `Before I ever named The Way\nWe were already living it\nLearning from yesterday\nBut never letting yesterday decide what's next\n\nBuilding something strong enough\nTo give our children room to fly\nA stronger place to start from\nAnd the freedom to choose their sky\n\nIf anything of us lives on\nIn something good that they become\nLet everyone who comes after know\nThe Way was never mine alone\nThe Way was us`,
  },
  {
    title: "Verse 3",
    text: `And now I write about inheritance\nAbout wisdom passing through\nAbout the things a life can leave\nFor someone we may never know\n\nI write about stewardship\nAbout carrying forward what is true\nBut every time I follow that idea\nIt somehow leads me back to you\n\nBecause legacy isn't what we own\nIt isn't books upon a shelf\nIt's giving what we learned away\nSo someone else can become more fully themselves\n\nAnd love was our first inheritance\nAnd love became what we passed on\nYou and I were building the future\nLong before I knew\nThat's what we'd done`,
  },
  {
    title: "Bridge",
    text: `So on your birthday\nI don't want to count the years\n\nI want to count the lives you've touched\nThe laughter\nThe courage\nThe thousand quiet ways you've loved us\nThat no photograph could ever capture\n\nI want you to know\nI saw it\nI see it\n\nThe wife who stood beside me\nThe mother who helped shape three remarkable lives\nThe partner who carried dreams with me\nThe woman who could challenge me\nAnd still believe in me\n\nMy confidante\nMy partner\nMy soulmate\nMy home\n\nAnd if I had another lifetime\nKnowing everything I know today\nI would still find you\nI would still choose you\nEvery time\nEvery way`,
  },
  {
    title: "Final Chorus",
    text: `Before I ever named The Way\nYou were already part of it\nEvery lesson, every sacrifice\nEvery love that gave it breath\n\nWe gave our children roots strong enough\nThat they never needed chains\nWe gave them somewhere to begin\nAnd permission to go farther than we came\n\nAnd someday when we're older\nAnd the house is quiet again\nWhen the children have their own roads\nAnd their own stories to hand down\n\nI'll still reach across for you\nThe way I've always done\nBecause after every road we've traveled\nAfter everything we've built and become\n\nIf they ask me where The Way began\nI'll tell them—\n\nNot in a book\nNot in an idea\nNot in something I discovered\n\nIt began in a life\nIt began in a family\nIt began with us`,
  },
  {
    title: "Outro",
    text: `And if there is one thing\nI hope you always know\n\nOf all the things\nI am proud to leave behind\n\nThe life I built with you\nIs the one I'm proudest of\n\nHappy birthday, my love\nMy partner\nMy soulmate\nMy stronger starting point\nMy way home`,
  },
];

function LyricsDisclosure({
  summary,
  sections,
  note,
}: {
  summary: string;
  sections: LyricSection[];
  note?: string;
}) {
  return (
    <details className={styles.lyricDisclosure}>
      <summary>{summary}</summary>
      <div className={styles.lyricBody}>
        {note && <p className={styles.lyricNote}>{note}</p>}
        {sections.map((section) => (
          <div className={styles.lyricSection} key={section.title}>
            <h3>{section.title}</h3>
            <p>{section.text}</p>
          </div>
        ))}
      </div>
    </details>
  );
}

export default function TheWayWasUsPage() {
  return (
    <InteriorPage eyebrow="Letter / Song · September 15, 2026" title="To Chrystina" wide>
      <section className={styles.intro}>
        <p className={styles.kicker}><em>The Way Was Us</em></p>
        <p className="lead">Today is Chrystina&apos;s birthday.</p>
        <p>I have written a great deal about the lessons of a life, the people who teach us, what we inherit, and what we hope to pass forward. But none of those ideas exists apart from the life in which I learned them.</p>
        <p>Chrystina has been beside me through that life—as my wife, partner, confidante, challenger, and soulmate, and as the mother with whom I have had the extraordinary privilege of raising our three children.</p>
        <p>Looking at the family we built together, I realized something I had never quite said this way before.</p>
      </section>

      <blockquote className={styles.dedication}>Before I ever named The Way, we were already living it.</blockquote>

      <figure className={styles.heroFigure}>
        <Image
          src="/images/darren-chrystina-vow-renewal-santorini.webp"
          width={3236}
          height={1960}
          alt="Darren and Chrystina during their vow renewal in Santorini on June 19, 2019."
          className={styles.heroImage}
          sizes="(max-width: 900px) 100vw, 1120px"
          priority
        />
        <figcaption className={styles.caption}>Santorini, June 19, 2019 — renewing our vows with our three children there with us.</figcaption>
      </figure>

      <section className={styles.songVersions} aria-label="The Way Was Us recordings">
        <article className={`${styles.audioCard} ${styles.featuredAudio}`} aria-labelledby="the-way-was-us-pop-opera">
          <div className="eyebrow bronze">Featured arrangement · Pop-opera</div>
          <h2 id="the-way-was-us-pop-opera">The Way Was Us</h2>
          <p className={styles.versionLead}>A later, more intimate arrangement led by a deep baritone, Spanish classical guitar, cello, and answering voices. The music gives the words more room to breathe while keeping the same birthday promise at its center.</p>
          <audio controls preload="metadata" aria-label="Listen to the featured pop-opera arrangement of The Way Was Us">
            <source src="/audio/Song-The-Way-Was-Us-v2-pop-opera.mp3" type="audio/mpeg" />
            Your browser does not support audio playback.
          </audio>
          <LyricsDisclosure
            summary="Read the pop-opera lyrics"
            sections={popOperaLyrics}
            note="Italian phrases: Ti sceglierei ancora — I would choose you again. In ogni vita — In every life. Amore mio — My love."
          />
        </article>

        <article className={styles.audioCard} aria-labelledby="the-way-was-us-original">
          <div className="eyebrow bronze">Original birthday recording · September 15, 2026</div>
          <h2 id="the-way-was-us-original">The Way Was Us · Original</h2>
          <p>The first musical expression remains here as part of the birthday letter&apos;s history—the original, longer telling of the life, family, and partnership behind The Way.</p>
          <p className={styles.preservationNote}>Preserved as originally published. This recording ends before the complete written outro.</p>
          <audio controls preload="metadata" aria-label="Listen to the original recording of The Way Was Us">
            <source src="/audio/Song-You-Are-My-Way1.mp3" type="audio/mpeg" />
            Your browser does not support audio playback.
          </audio>
          <LyricsDisclosure summary="Read the original lyrics" sections={originalLyrics} />
        </article>
      </section>

      <section className={styles.storyGrid}>
        <div>
          <div className="eyebrow bronze">A promise renewed</div>
          <h2>Some promises become more meaningful after you have lived them.</h2>
          <p>On June 19, 2019, Chrystina and I renewed our wedding vows in Santorini. Our three children were there. By then, the words we were saying were no longer promises about a life we hoped to build. They were promises shaped by a life we had already built together—and by everything we still wanted to become.</p>
          <p>That is part of why this song matters to me. The Way did not begin when I found language for it. Long before there was a framework, there was a marriage, a family, years of learning from each other, and the responsibility of trying to give our children a stronger place to begin.</p>
        </div>
        <figure>
          <Image
            src="/images/darren-chrystina-rings.webp"
            width={1960}
            height={4032}
            alt="Darren and Chrystina's hands wearing their rings during their Santorini vow renewal."
            className={styles.ringsImage}
            sizes="(max-width: 800px) 78vw, 390px"
          />
          <figcaption className={styles.caption}>The rings we carried back into the same promise.</figcaption>
        </figure>
      </section>

      <section className={styles.songNote}>
        <div className="eyebrow bronze">For Chrystina</div>
        <p>I am proud of many things in my life. But when I think about what may matter most after accomplishments and titles fade, I keep returning to the life we built together and the three people we had the privilege of raising.</p>
        <p>This song is my way of saying what ordinary language sometimes cannot: thank you for being my wife, my partner, my soulmate, and my way home.</p>
      </section>

      <section className={styles.behind}>
        <div className="eyebrow">Behind this song</div>
        <h2>The family came before the philosophy.</h2>
        <p>Long before I had language for The Way, much of it was already being lived—in marriage, family, learning, sacrifice, partnership, correction, and the responsibility to leave the next generation a stronger starting point without choosing their destination for them.</p>
        <p>Chrystina is not an afterthought to that story. She is integral to the life from which so much of it emerged.</p>
        <div className={styles.links}>
          <Link className="text-link light" href="/letters/why-these-letters/">Why These Letters →</Link>
          <Link className="text-link light" href="/books/for-those-who-come-after-us/">For Those Who Come After Us →</Link>
          <Link className="text-link light" href="/books/wisdom-has-no-rank/">Wisdom Has No Rank →</Link>
          <Link className="text-link light" href="/letters/">More Letters →</Link>
        </div>
      </section>
    </InteriorPage>
  );
}
