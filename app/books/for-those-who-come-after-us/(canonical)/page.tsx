import Image from "next/image";
import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";
import { ConnectedDots } from "@/components/ConnectedDots";
import { MusicCompanion } from "@/components/MusicCompanion";
import { takeTheBestLyrics } from "@/lib/songLyrics";

export const metadata = {
  title: "For Those Who Come After Us",
  description: "Explore the published Book 1, For Those Who Come After Us — A Life in Lessons, including selected reading, companion songs, and the ideas behind the book.",
};

const samples = [
  {
    number: "01",
    stage: "Beginning",
    type: "Full Prologue · Why",
    title: "When You Need Me",
    copy: "Why the book exists, what it can leave behind, and why the next generation still has to decide for itself.",
    href: "/books/for-those-who-come-after-us/prologue/",
    cta: "Read the full Prologue →",
  },
  {
    number: "02",
    stage: "Middle",
    type: "Complete Chapter · How",
    title: "Connect the Dots",
    copy: "A real-world example of borrowing tools across disciplines to break through a complex planning problem.",
    href: "/books/for-those-who-come-after-us/connect-the-dots/",
    cta: "Read the complete chapter →",
  },
  {
    number: "03",
    stage: "Near the end",
    type: "Selected Excerpt · What remains",
    title: "What I Hope You Keep. What I Hope You Change.",
    copy: "A closing reflection on inheritance, change, and the responsibility to improve what we receive before passing it forward.",
    href: "/books/for-those-who-come-after-us/chapter-29-excerpt/",
    cta: "Read the selected excerpt →",
  },
];

const forThoseWhoComeAfterUsLyrics = `Verse 1

I was just a child on a small boat, too young to know the cost.
Others carried what I couldn't when almost all was lost.
I didn't know what they had given or what they'd give for me.
I only knew they kept me moving toward a life I couldn't see.

Pre-Chorus

It took me years to understand how far they carried us.
Now I walk my part of the road for those who come after us.

Chorus

For those who come after us, we walk the road today.
Someone walked this road before us. We'll leave a path along the way.
You don't have to walk it like us. You don't have to end where we've been.
Take the best of what we give you. Then make the road your own again.

Verse 2

I found my way through changing roads, through victories and loss.
Some dreams were worth the journey. Some taught me what they cost.
Then came a wife, three children, and a place that we called home.
And somewhere on that road I learned we never walk it all alone.

Pre-Chorus

I used to ask where roads would lead.
Now I ask what road I'll leave.

Chorus

For those who come after us, we walk the road today.
Someone walked this road before us. We'll leave a path along the way.
You don't have to walk it like us. You don't have to end where we've been.
Take the best of what we give you. Then make the road your own again.

Bridge

Someday you'll see what I couldn't.
Someday you'll choose differently.
I hope you do.
Keep what is worth keeping. Change what needs to change.
I don't need you to live my life.
I only hope I helped you start.

Final Chorus

For those who come after us, this road was never ours alone.
Someone walked this way before us. Someday you'll carry it on.
Take the love. Take the lessons. See the things we could not see.
Make the road a little better. Then go farther than me.

Outro

And when your children ask someday where the road beneath them came from,
tell them someone walked before you.
Then go a little farther than me.`;

export default function Book() {
  return (
    <InteriorPage eyebrow="Book 1 · Published" title="For Those Who Come After Us">
      <div className="book-detail-grid">
        <div>
          <div className="book-covers" aria-label="Front and back covers of For Those Who Come After Us">
            <Image
              src="/images/for-those-who-come-after-us-front-book-v3.webp"
              width={360}
              height={576}
              alt="Front cover of For Those Who Come After Us: A Life in Lessons by Darren Dang."
              className="book-page-cover"
              sizes="(max-width: 900px) 47vw, 24vw"
              priority
            />
            <Image
              src="/images/for-those-who-come-after-us-back.webp"
              width={300}
              height={450}
              alt="Back cover of For Those Who Come After Us: A Life in Lessons."
              className="book-page-cover book-page-back"
              sizes="(max-width: 900px) 42vw, 21vw"
            />
          </div>
          <p className="book-caption">Published cover artwork for <em>For Those Who Come After Us — A Life in Lessons</em>.</p>
        </div>

        <div className="book-detail-copy">
          <p className="lead"><em>A Life in Lessons</em></p>
          <p>No one can leave the next generation an answer for every situation. The next best thing is to leave behind some of the thinking that helped us find our way.</p>

          <blockquote className="book-quote">The road we walk today becomes the path for those who follow.</blockquote>

          <h2>Six stages</h2>
          <p className="progression"><strong>INHERIT → BECOME → CONNECT → LEAD → LIVE → PASS FORWARD</strong></p>
          <p>Across twenty-nine short chapters, the book explores inheritance, identity, education, failure, curiosity, systems, leadership, family, money, purpose, and legacy.</p>

          <aside className="development-status-note">
            <strong>Publication status</strong>
            <p><em>For Those Who Come After Us</em> is published in hardcover, paperback, and Kindle editions through Dang Legacy Press. The published English first edition is locked; future revisions or translated editions remain separately governed.</p>
          </aside>

          <h2>Beyond the book</h2>
          <p>What we inherit is not a script. It is a starting map—routes others traveled, hazards they discovered, landmarks worth remembering, and questions they could not answer for us. The next generation still has to decide where to go.</p>
          <p>The book is the first completed book-length expression in a larger body of work. DarrenDang.com connects its lessons to evolving ideas, later books, Letters, talks, Papers, and The Way in Motion.</p>
          <div className="book-detail-actions">
            <Link className="button button-light" href="#inside-the-book">Read Inside the Book</Link>
            <Link className="text-link" href="/books/">Explore the wider body of work →</Link>
          </div>
        </div>
      </div>

      <MusicCompanion
        eyebrow="Listen · Songs from Book 1"
        title="Hear the book another way."
        description="The book carries the full stories and arguments. These songs are musical interpretations of two related movements: what one generation hopes to leave, and what the next generation must make its own."
        tracks={[
          {
            title: "For Those Who Come After Us",
            src: "/audio/for-those-who-come-after-us.mp3",
            description: "The emotional signature of Book 1: what we hope can remain useful after the conversation ends.",
            lyrics: forThoseWhoComeAfterUsLyrics,
          },
          {
            title: "Take the Best",
            src: "/audio/Song-Take-The-Best.mp3",
            description: "A parent-and-child conversation about inheritance with agency: keep your roots, choose your steps, and leave a little light for whoever comes next.",
            lyrics: takeTheBestLyrics,
          },
        ]}
        note="The songs are companion interpretations, not substitutes for the book. Nothing plays automatically."
      />

      <section className="book-samples" id="inside-the-book" aria-labelledby="inside-the-book-title">
        <div className="book-samples-intro">
          <div className="eyebrow bronze">Inside the Book</div>
          <h2 id="inside-the-book-title">Three glimpses into the journey.</h2>
          <p className="lead">Read the beginning, a complete chapter from the middle, and a selected passage near the end. Together they show why the book exists, how the ideas work in practice, and what I hope remains after the last page.</p>
        </div>

        <div className="sample-path">
          {samples.map((sample) => (
            <article className="sample-card" key={sample.number}>
              <div className="sample-marker" aria-hidden="true"><span>{sample.number}</span></div>
              <div className="sample-stage">{sample.stage}</div>
              <div className="sample-type">{sample.type}</div>
              <h3>{sample.title}</h3>
              <p>{sample.copy}</p>
              <Link className="text-link" href={sample.href}>{sample.cta}</Link>
            </article>
          ))}
        </div>
        <p className="sample-note">The final handoff remains in the book. These selections are meant to open the door, not replace the journey.</p>
      </section>

      <ConnectedDots
        intro="Book 1 is an artifact inside a wider graph. Its questions about inheritance, legacy, learning, and handoff continue in Letters, later books, and the constitutional agency of Your Way."
        question="What have you inherited that you want to understand well enough to keep, change, or deliberately leave behind?"
        connections={[
          { label: "LETTER", title: "Why These Letters", copy: "The book began a handoff that continues through shorter reflections while the thinking is still moving.", href: "/letters/why-these-letters/" },
          { label: "IDEA", title: "Living Legacy", copy: "The deeper architecture of preserving useful learning without turning it into a cage for the future.", href: "/ideas/living-legacy/" },
          { label: "BOOK 2", title: "Wisdom Has No Rank", copy: "Inheritance becomes stronger when the person receiving the map remains free—and willing—to revise it.", href: "/books/wisdom-has-no-rank/" },
          { label: "METHOD", title: "D.O.T.S.", copy: "The Connect the Dots chapter points toward the cross-domain way of seeing developed more fully in Book 3.", href: "/dots/" },
        ]}
      />
    </InteriorPage>
  );
}
