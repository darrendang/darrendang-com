import Image from "next/image";
import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

export const metadata = { title: "For Those Who Come After Us" };

export default function Book() {
  return (
    <InteriorPage eyebrow="Book" title="For Those Who Come After Us">
      <div className="book-detail-grid">
        <div>
          <div className="book-covers" aria-label="Front and back covers of For Those Who Come After Us">
            <Image
              src="/images/for-those-who-come-after-us-front-v2.webp"
              width={600}
              height={959}
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
            <Link className="button button-light" href="/ideas/">Explore the Ideas</Link>
            <Link className="text-link" href="/">Return to the homepage →</Link>
          </div>
        </div>
      </div>
    </InteriorPage>
  );
}
