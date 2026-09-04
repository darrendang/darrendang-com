import Image from "next/image";
import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";
import { ConnectedDots } from "@/components/ConnectedDots";

export const metadata = {
  title: "For Those Who Come After Us",
  description: "Explore For Those Who Come After Us — A Life in Lessons, including selected reading, the Book 1 companion song, and the ideas behind the book.",
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

export default function Book() {
  return (
    <InteriorPage eyebrow="Book 1 · Preparing for Publication" title="For Those Who Come After Us">
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
          <p className="book-caption">Front and back cover artwork for <em>For Those Who Come After Us — A Life in Lessons</em>.</p>
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
            <p><em>For Those Who Come After Us</em> is preparing for publication. Paperback, hardcover, and ebook editions are prepared for Amazon KDP. Completed Vietnamese, Mandarin Chinese, Korean, and Spanish translations are being reviewed by friends and family for tone and language before release decisions are finalized.</p>
          </aside>

          <h2>Beyond the book</h2>
          <p>What we inherit is not a script. It is a starting map—routes others traveled, hazards they discovered, landmarks worth remembering, and questions they could not answer for us. The next generation still has to decide where to go.</p>
          <p>The book is the first major book-length artifact in a larger body of work. DarrenDang.com connects its lessons to evolving ideas, future writing, talks, and other artifacts.</p>
          <div className="book-detail-actions">
            <Link className="button button-light" href="#inside-the-book">Read Inside the Book</Link>
            <Link className="text-link" href="/books/">Explore The Path Forward trilogy →</Link>
          </div>
        </div>
      </div>

      <section className="book-song" id="song" aria-labelledby="book-song-title">
        <div className="book-song-grid">
          <div>
            <div className="eyebrow">A small companion to Book 1 · just for fun</div>
            <h2 id="book-song-title">For Those Who Come After Us — The Song</h2>
            <p className="lead-light">Books are where I develop the ideas. This one found its way into a song.</p>
            <p>I made this as a small companion to <em>For Those Who Come After Us</em>—not a new direction for the site, just another way to experience the story and the idea of what we carry forward.</p>
            <div className="song-relationship" aria-label="Book to ideas to story to song">Book → Ideas → Story → Song</div>
          </div>
          <div className="song-player">
            <div className="song-player-label">
              <strong>For Those Who Come After Us</strong>
              <span>4:05</span>
            </div>
            <audio controls preload="metadata" aria-label="Listen to For Those Who Come After Us — The Song">
              <source src="/audio/for-those-who-come-after-us.mp3" type="audio/mpeg" />
              Your browser does not support the audio player. <a href="/audio/for-those-who-come-after-us.mp3">Open the song.</a>
            </audio>
            <small>A companion to the book. No autoplay—press play when you feel like listening.</small>
          </div>
        </div>
      </section>

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
