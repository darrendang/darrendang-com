import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "The Watch Goes On — A Tribute to Rear Admiral Robert C. Nowakowski",
  description:
    "A Letter from Darren Dang about Rear Admiral Robert C. Nowakowski, the example he gave the Dang family across three children, and watching the colors pass to a younger generation aboard USS Iowa.",
  alternates: { canonical: "/letters/the-watch-goes-on/" },
  openGraph: {
    title: "The Watch Goes On — A Tribute to Rear Admiral Robert C. Nowakowski | Darren Dang",
    description:
      "A reflection on service, example, and the generations who carry the watch forward.",
    type: "article",
    url: "/letters/the-watch-goes-on/",
    images: [
      {
        url: "/images/nowakowski-retirement-color-guard.jpg",
        width: 2048,
        height: 1153,
        alt: "Rear Admiral Robert Nowakowski with the ceremonial Color Guard aboard USS Iowa at his retirement ceremony.",
      },
    ],
  },
};

const lyrics = [
  {
    title: "Verse 1",
    text: `You answered when your country called,
And made the ocean home.
Through distant nights and changing tides,
You never stood alone.

You learned that rank is borrowed,
That command is something earned,
And the strongest mark of leadership
Is what the next ones learn.`,
  },
  {
    title: "Pre-Chorus",
    text: `The ribbons tell a story,
The stars can name the role,
But neither tells the quiet ways
A leader shapes a soul.`,
  },
  {
    title: "Chorus",
    text: `So fair winds, Admiral, fair winds,
Let the harbor lead you home.
You have stood the watch with honor
Through every sea you've known.

And though today one watch is ending,
What you gave is never gone.
You stand relieved with honor—
The watch goes on.`,
  },
  {
    title: "Verse 2",
    text: `You showed up for the young ones
Before they knew how far they'd go,
With a word, a hand, an example
That gave them room to grow.

Some will wear the uniform,
Some will choose another way,
But all can carry something forward
From the life you lived each day.`,
  },
  {
    title: "Pre-Chorus 2",
    text: `For example is a compass,
And presence lights the way.
A life of faithful service
Can outlast its final day.`,
  },
  {
    title: "Chorus 2",
    text: `So fair winds, Admiral, fair winds,
Let the harbor lead you home.
You have stood the watch with honor
Through every sea you've known.

And though today one watch is ending,
What you gave is never gone.
You stand relieved with honor—
The watch goes on.`,
  },
  {
    title: "Bridge",
    text: `On Iowa beneath the colors,
With the sunlight on the bay,
Old Glory rests in younger hands
As one watch ends today.

And maybe that's the measure
Of what a lifetime leaves behind:
Not only stars upon the shoulder,
But the courage passed through time.`,
  },
  {
    title: "Final Chorus",
    text: `Fair winds, Admiral, fair winds,
Now let the long watch turn toward home.
For the ones you helped inspire
Will stand watches of their own.

And long after this day is over,
Your example travels on.

You stand relieved with honor—

We have the watch.

The watch goes on.`,
  },
  {
    title: "Outro",
    text: `Fair winds...
Following seas...
The watch goes on.`,
  },
];

export default function TheWatchGoesOnPage() {
  return (
    <InteriorPage eyebrow="Letter / Song · September 26, 2026" title="The Watch Goes On" wide>
      <section className={styles.intro}>
        <p className={styles.kicker}>A tribute to Rear Admiral Robert C. Nowakowski</p>
        <p className="lead">
          Yesterday, aboard the USS Iowa, I watched my youngest son carry the American flag as Rear Admiral Robert C. Nowakowski brought more than three decades of service to a close.
        </p>
        <p>I thought I understood what that moment would mean before I arrived.</p>
        <p>I did not quite understand it until I saw the colors pass in front of me.</p>
      </section>

      <blockquote className={styles.dedication}>
        He never needed to tell our children what their paths should be. His example was enough.
      </blockquote>

      <figure className={styles.heroFigure}>
        <Image
          src="/images/nowakowski-retirement-color-guard.jpg"
          width={2048}
          height={1153}
          alt="Rear Admiral Robert Nowakowski with the ceremonial Color Guard aboard USS Iowa at his retirement ceremony."
          className={styles.heroImage}
          sizes="(max-width: 900px) 100vw, 1120px"
          priority
        />
        <figcaption className={styles.caption}>
          USS Iowa · September 26, 2026 — Rear Admiral Nowakowski with the ceremonial Color Guard.
        </figcaption>
      </figure>

      <section className={styles.letter}>
        <div className="eyebrow bronze">Across three journeys</div>
        <h2>Three children. Different paths. One example.</h2>

        <p>Admiral Nowakowski has been present at meaningful points in the journeys of all three of our children.</p>

        <p>
          Years ago, he was there when Zack received his appointment to the United States Naval Academy. We saw him again later, with Zack and Pia, as Zack continued through Annapolis. Zack has since graduated and begun the next chapter of his own service.
        </p>

        <p>
          Madison later had the honor of carrying the American flag aboard the USS Iowa at a Freedom of the Seas event with Admiral Nowakowski there. Today she is a youngster at USNA, still learning what service and leadership will mean in her own life.
        </p>

        <p>And yesterday it was Nathan&apos;s turn.</p>

        <p>
          Nathan is still a junior at Troy High School. We do not know whether Annapolis will become part of his story. That choice is his. But he had the extraordinary honor of serving with the ceremonial Color Guard and carrying the American flag at Admiral Nowakowski&apos;s retirement.
        </p>

        <p>Three children. Three different points in their lives. One example that kept appearing along the way.</p>
      </section>

      <section className={styles.familyGrid} aria-label="Admiral Nowakowski across the Dang children's journeys">
        <figure>
          <Image
            src="/images/nowakowski-zack-usna-appointment.jpg"
            width={1334}
            height={2048}
            alt="Zack Dang with Rear Admiral Robert Nowakowski when Zack received his appointment to the United States Naval Academy."
            sizes="(max-width: 800px) 100vw, 430px"
          />
          <figcaption>Zack — receiving his appointment to the United States Naval Academy.</figcaption>
        </figure>
        <figure>
          <Image
            src="/images/nowakowski-zack-pia-vsa-gala.jpg"
            width={2048}
            height={1536}
            alt="Zack and Pia with Rear Admiral Robert Nowakowski at the VSA Gala in Garden Grove."
            sizes="(max-width: 800px) 100vw, 560px"
          />
          <figcaption>Years later — Zack and Pia with Admiral Nowakowski at the VSA Gala.</figcaption>
        </figure>
        <figure>
          <Image
            src="/images/nowakowski-madison-uss-iowa.jpg"
            width={2048}
            height={1299}
            alt="Madison Dang with Rear Admiral Robert Nowakowski and others aboard USS Iowa at the Freedom of the Seas event."
            sizes="(max-width: 800px) 100vw, 560px"
          />
          <figcaption>Madison — aboard USS Iowa, where she served as the American flag bearer.</figcaption>
        </figure>
        <figure>
          <Image
            src="/images/nowakowski-nathan-family-vsa-gala.jpg"
            width={2048}
            height={1888}
            alt="Nathan Dang with his parents Darren and Chrystina and Rear Admiral Robert Nowakowski at the VSA Gala."
            sizes="(max-width: 800px) 100vw, 560px"
          />
          <figcaption>Nathan — with Admiral Nowakowski before Nathan&apos;s own path was written.</figcaption>
        </figure>
      </section>

      <section className={styles.letter}>
        <div className="eyebrow bronze">The quiet work of example</div>
        <h2>What rank and medals cannot fully record.</h2>

        <p>
          Rank and medals can record responsibility and achievement. They do not fully record the quieter ways a leader affects the people around him.
        </p>

        <p>
          Admiral Nowakowski never sat our children down and prescribed their futures. He did something more durable: he let them see a life of service up close.
        </p>

        <p>That matters.</p>

        <p className={styles.question}>
          A good example does not narrow someone else&apos;s future. It widens what they can imagine for themselves.
        </p>

        <p>
          Our children still have to make their own choices, carry their own weight, make their own mistakes, and discover what service means in their own lives. But they begin with something they would not have had otherwise: a person they can point to and say, <em>That is one way a life of service can look.</em>
        </p>

        <p>I suspect our family is only one of many that Admiral Nowakowski has influenced this way.</p>
      </section>

      <section className={styles.videoSection} aria-labelledby="tribute-video-title">
        <div className={styles.videoIntro}>
          <div className="eyebrow bronze">The song</div>
          <h2 id="tribute-video-title">The Watch Goes On</h2>
          <p>
            Before the ceremony, I wrote a song for Admiral Nowakowski. One passage felt meaningful when I wrote it:
          </p>
          <blockquote className={styles.songQuote}>
            <em>
              On Iowa beneath the colors,<br />
              With the sunlight on the bay,<br />
              Old Glory rests in younger hands<br />
              As one watch ends today.
            </em>
          </blockquote>
          <p>Yesterday I watched those words become literal.</p>
          <p>
            Nathan stood with the Color Guard. The flag moved past us. Admiral Nowakowski sat before them at the close of his career.
          </p>
          <p>For a few seconds, the idea behind the song was no longer an idea. It was simply happening in front of me.</p>
        </div>

        <div className={styles.videoFrame}>
          <video
            controls
            preload="metadata"
            playsInline
            poster="/images/nowakowski-retirement-color-guard.jpg"
            aria-label="The Watch Goes On — tribute video for Rear Admiral Robert Nowakowski"
          >
            <source src="/videos/The-Watch-Goes-On-RADM-Nowakowski-Web_24mb.mp4" type="video/mp4" />
            Your browser does not support video playback.
          </video>
        </div>

        <article className={styles.audioCard}>
          <div className="eyebrow bronze">Listen without the film</div>
          <h3>The Watch Goes On</h3>
          <audio controls preload="metadata" aria-label="Listen to The Watch Goes On">
            <source src="/audio/Song-The-Watch-Goes-On-RADM-Nowakowski.mp3" type="audio/mpeg" />
            Your browser does not support audio playback.
          </audio>

          <details className={styles.lyrics}>
            <summary>Read the full lyrics</summary>
            <div className={styles.lyricBody}>
              {lyrics.map((section) => (
                <section key={section.title}>
                  <h4>{section.title}</h4>
                  <p>{section.text}</p>
                </section>
              ))}
            </div>
          </details>
        </article>
      </section>

      <section className={styles.moments}>
        <div className={styles.momentsIntro}>
          <div className="eyebrow bronze">A few moments across the years</div>
          <h2>Service is also remembered in the people who were there.</h2>
        </div>

        <div className={styles.gallery}>
          <figure>
            <Image
              src="/images/nowakowski-usna-mids-vsa-gala.jpg"
              width={2047}
              height={1077}
              alt="Rear Admiral Robert Nowakowski with United States Naval Academy midshipmen at the VSA Gala."
              sizes="(max-width: 800px) 100vw, 560px"
            />
            <figcaption>Admiral Nowakowski with USNA midshipmen at the VSA Gala.</figcaption>
          </figure>
          <figure>
            <Image
              src="/images/nowakowski-del-toro-lauper-darren-chrystina.jpg"
              width={2048}
              height={1153}
              alt="Darren and Chrystina Dang with CDR Lauper and former Secretary of the Navy Carlos Del Toro at the retirement event."
              sizes="(max-width: 800px) 100vw, 560px"
            />
            <figcaption>A day surrounded by service — with CDR Lauper and former Secretary of the Navy Carlos Del Toro.</figcaption>
          </figure>
        </div>

        <div className={styles.coinGrid}>
          <figure>
            <Image
              src="/images/nowakowski-challenge-coin-front.jpg"
              width={2566}
              height={2609}
              alt="Front of the challenge coin from Rear Admiral Robert Nowakowski's retirement event."
              sizes="(max-width: 700px) 80vw, 400px"
            />
            <figcaption>The retirement challenge coin.</figcaption>
          </figure>
          <figure>
            <Image
              src="/images/nowakowski-challenge-coin-back.jpg"
              width={2091}
              height={2167}
              alt="Back of the challenge coin from Rear Admiral Robert Nowakowski's retirement event."
              sizes="(max-width: 700px) 80vw, 400px"
            />
            <figcaption>A small artifact from a long watch.</figcaption>
          </figure>
        </div>

        <figure className={styles.closingFigure}>
          <Image
            src="/images/nowakowski-darren-chrystina-retirement.jpg"
            width={1256}
            height={1536}
            alt="Darren and Chrystina Dang with Rear Admiral Robert Nowakowski after his retirement ceremony."
            sizes="(max-width: 800px) 90vw, 640px"
          />
          <figcaption>With gratitude — Chrystina and me with Admiral Nowakowski after the ceremony.</figcaption>
        </figure>
      </section>

      <section className={styles.ending}>
        <div className="eyebrow bronze">What remains</div>
        <h2>The part I keep thinking about is not the ending.</h2>

        <p>It is what continues.</p>

        <p>
          A leader can leave behind commands, awards, programs, and accomplishments. Those matter. But there is another kind of legacy that is harder to count: the people who saw the example and carried something useful from it into their own lives.
        </p>

        <p>That is what I am grateful for.</p>

        <p>
          Admiral Nowakowski, thank you for your service to our country. Thank you for the example you gave our children. And thank you for all the young people who can see a little farther because you showed them one honorable way to serve.
        </p>

        <blockquote className={styles.finalWords}>
          <strong>You stand relieved with honor.</strong><br />
          <strong>We have the watch.</strong><br />
          <strong>The watch goes on.</strong>
        </blockquote>

        <p className={styles.signoff}>Fair winds and following seas, Admiral.<br />— Darren</p>
      </section>

      <section className={styles.links}>
        <Link className="text-link" href="/letters/">More Letters →</Link>
        <Link className="text-link" href="/the-way/">The Way →</Link>
      </section>
    </InteriorPage>
  );
}
