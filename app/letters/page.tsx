import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Letters from Darren",
  description: "Letters from Darren: observations, stories, questions, and lessons offered as part of The Way and the living Dang Genome.",
};

export default function LettersPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="hero brand-hero genome-hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Letters from Darren</div>
              <h1>Things I am still learning.</h1>
              <p>These letters are not answers from someone who has finished figuring things out. They are observations, stories, questions, and lessons collected along the way—and offered for someone else to test, challenge, improve, and carry farther.</p>
              <div className="actions">
                <Link className="button button-gold" href="/letters/why-these-letters/">Read the introduction</Link>
                <Link className="button button-outline" href="/the-way/">Explore The Way</Link>
              </div>
            </div>
          </div>
          <div className="container hero-note">
            <strong>A living editorial practice.</strong>
            <span>Letters connect lived experience to ideas without pretending every question has a finished answer.</span>
          </div>
        </section>

        <section className="section genome-purpose-home">
          <div className="container">
            <div className="section-intro compact">
              <div className="eyebrow bronze">Why letters</div>
              <h2>Some ideas need room to stay unfinished.</h2>
              <p className="lead">Books are developed artifacts. Frameworks organize thinking. A Letter can do something different: begin with a moment, follow the question it creates, and leave the reader with something useful without forcing the experience into a final doctrine.</p>
            </div>
            <div className="purpose-grid home-purpose-grid">
              <article><span>Story</span><h3>Start with something that actually happened, not a slogan.</h3></article>
              <article><span>Insight</span><h3>Ask what the experience changed or made clearer.</h3></article>
              <article><span>Handoff</span><h3>Offer the lesson without demanding that someone else reach the same conclusion.</h3></article>
            </div>
          </div>
        </section>

        <section className="section worldview-section">
          <div className="container worldview-grid">
            <div>
              <div className="eyebrow bronze">Letter 00 · Introduction</div>
              <h2>Why These Letters</h2>
              <p className="lead">I began writing books because I wanted some of the thinking behind my decisions to survive the conversation. These letters give me a way to keep doing that while the thinking is still moving.</p>
              <Link className="text-link" href="/letters/why-these-letters/">Read the letter →</Link>
            </div>
            <div className="boundary-stack">
              <article><span>From life</span><strong>Family, work, failure, technology, service, culture, and ordinary moments.</strong></article>
              <article><span>Across boundaries</span><strong>A useful lesson may travel from one part of life into another.</strong></article>
              <article><span>Still revisable</span><strong>New experience can change the map without erasing where it came from.</strong></article>
              <article><span>Passed forward</span><strong>Take what helps. Question what does not. Improve what you can.</strong></article>
            </div>
          </div>
        </section>

        <section className="section shared-wisdom-home">
          <div className="container shared-wisdom-home-grid">
            <div>
              <div className="eyebrow bronze">The collection</div>
              <h2>A growing series, curated rather than filled.</h2>
              <p className="lead">The first collection is being promoted from approved source drafts with provenance intact. New Letters will be added when they are ready—not to satisfy a publishing calendar, but because the idea is useful enough to preserve and share.</p>
              <p>Each Letter can connect to related Ideas, books, talks, stories, or Shared Wisdom while remaining its own piece of writing.</p>
            </div>
            <div className="shared-wisdom-principles">
              <article><span>01</span><strong>No content treadmill.</strong><p>Publish because there is something worth saying.</p></article>
              <article><span>02</span><strong>No artificial certainty.</strong><p>Questions and tensions may remain visible.</p></article>
              <article><span>03</span><strong>No isolated posts.</strong><p>Letters become part of the larger intellectual graph.</p></article>
            </div>
          </div>
        </section>

        <section className="section system-section">
          <div className="container">
            <div className="section-intro compact">
              <div className="eyebrow bronze">A two-way conversation</div>
              <h2>What have you learned?</h2>
              <p className="lead">The Way is not supposed to become one person talking forever. If a Letter brings to mind a lesson, story, correction, or piece of wisdom from your own life, you can pass it forward too.</p>
            </div>
            <div className="actions">
              <Link className="button button-dark" href="/share/">Share What You&apos;ve Learned</Link>
              <Link className="text-link" href="/shared-wisdom/">Explore Shared Wisdom →</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
