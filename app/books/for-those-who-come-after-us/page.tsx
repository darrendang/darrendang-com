import Image from "next/image";
import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

export const metadata = {
  title: "For Those Who Come After Us",
  description: "Explore For Those Who Come After Us — A Life in Lessons, including the full Prologue, a complete middle chapter, and a selected excerpt near the end.",
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
    <InteriorPage eyebrow="Book" title="For Those Who Come After Us">
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

          <h2>Beyond the book</h2>
          <p>The book is the first major published artifact in a larger body of work. DarrenDang.com connects its lessons to evolving ideas, future writing, talks, and other artifacts.</p>
          <div className="book-detail-actions">
            <Link className="button button-light" href="#inside-the-book">Read Inside the Book</Link>
            <Link className="text-link" href="/ideas/">Explore the Ideas →</Link>
          </div>
        </div>
      </div>

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
    </InteriorPage>
  );
}
