import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "The Way",
  description: "The Way → Your Way → The Way Forward: a philosophy for inheriting wisdom without inheriting a predetermined destination.",
};

export default function TheWayPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="hero brand-hero genome-hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">The Way</div>
              <h1>A stronger starting point. Freedom to go farther.</h1>
              <p>The Way is not a set of answers to inherit unchanged. It is accumulated wisdom, experience, stories, questions, tools, relationships, mistakes, and discoveries that can help someone begin with more—and still decide where to go.</p>
              <div className="actions">
                <Link className="button button-gold" href="/genome/">Explore the Dang Genome</Link>
                <Link className="button button-outline" href="/contribute/">Contribute to The Way Forward</Link>
              </div>
            </div>
          </div>
          <div className="container hero-note">
            <strong>The Way → Your Way → The Way Forward</strong>
            <span>The Way provides a stronger starting point, not a predetermined destination.</span>
          </div>
        </section>

        <section className="section genome-purpose-home">
          <div className="container">
            <div className="section-intro compact">
              <div className="eyebrow bronze">The constitution</div>
              <h2>Inherit wisdom. Keep your agency. Add what you learn.</h2>
              <p className="lead">The philosophy moves through three connected ideas. What we receive should help us begin stronger. What we make of it must remain ours. What we learn along the way can become part of the inheritance available to someone who comes next.</p>
            </div>
            <div className="purpose-grid home-purpose-grid">
              <article>
                <span>01 · The Way</span>
                <h3>Receive a stronger starting point.</h3>
                <p>Learn from accumulated stories, principles, questions, tools, experience, and wisdom without treating any of it as untouchable doctrine.</p>
              </article>
              <article>
                <span>02 · Your Way</span>
                <h3>Make the inheritance your own.</h3>
                <p>Keep what is useful. Question what does not fit. Test it against evidence, context, relationships, responsibility, and lived experience.</p>
              </article>
              <article>
                <span>03 · The Way Forward</span>
                <h3>Contribute what the next context requires.</h3>
                <p>Carry forward what proved useful, correct what no longer serves, create what is missing, and make the learning available to others.</p>
              </article>
            </div>
            <blockquote className="trilogy-map-quote">Leave those who come after a stronger starting point and the freedom to go farther.</blockquote>
          </div>
        </section>

        <section className="section worldview-section">
          <div className="container worldview-grid">
            <div>
              <div className="eyebrow bronze">The recursive model</div>
              <h2>The Way is meant to evolve.</h2>
              <p className="lead">The Way Forward does not end the sequence. Useful discoveries, corrections, stories, and new connections can become part of The Way inherited by those who come next.</p>
              <p>This is how a body of wisdom can become richer over time without becoming more restrictive.</p>
            </div>
            <div className="boundary-stack">
              <article><span>The Way</span><strong>Receive what others learned.</strong></article>
              <article><span>Your Way</span><strong>Interpret, test, adapt, and live it.</strong></article>
              <article><span>The Way Forward</span><strong>Add what experience teaches you.</strong></article>
              <article><span>Return</span><strong>Useful contributions become part of a stronger inheritance.</strong></article>
            </div>
          </div>
        </section>

        <section className="section shared-wisdom-home">
          <div className="container shared-wisdom-home-grid">
            <div>
              <div className="eyebrow bronze">The constitutional guardrails</div>
              <h2>Guidance without control.</h2>
              <p className="lead">The Way should widen what the next person can see, not narrow what they are allowed to become.</p>
              <p>Its purpose is not to reproduce Darren&apos;s life, preserve one family&apos;s conclusions unchanged, or turn inherited wisdom into dogma.</p>
            </div>
            <div className="shared-wisdom-principles">
              <article><span>North Star</span><strong>Leave those who come after a stronger starting point and the freedom to go farther.</strong></article>
              <article><span>Guardrail</span><strong>Each generation should inherit a stronger starting point, not a narrower future.</strong></article>
              <article><span>Evolution</span><strong>Inherit wisdom, not dogma. Preserve what was learned. Remain free to question, adapt, improve, and create.</strong></article>
            </div>
          </div>
        </section>

        <section className="section genome-purpose-home">
          <div className="container">
            <div className="section-intro compact">
              <div className="eyebrow bronze">How The Way becomes visible</div>
              <h2>The philosophy is larger than any one artifact.</h2>
              <p className="lead">The Dang Genome is the living body through which The Way is collected, connected, tested, expanded, and passed forward. DarrenDang.com is its public experience layer.</p>
            </div>
            <div className="system-arc">
              <article><span>01</span><div className="book-movement">THE WAY</div><h3>Philosophical root</h3><p>The inheritance: wisdom, experience, questions, tools, and accumulated learning.</p></article>
              <article><span>02</span><div className="book-movement">DANG GENOME</div><h3>Living body</h3><p>The connected ideas, stories, lessons, books, letters, frameworks, relationships, and contributions.</p></article>
              <article><span>03</span><div className="book-movement">DARRENDANG.COM</div><h3>Public experience</h3><p>The place where people encounter the work, explore connections, develop their own way, and contribute.</p></article>
            </div>
            <div className="section-link"><Link className="text-link" href="/genome/">How the Dang Genome works →</Link></div>
          </div>
        </section>

        <section className="section system-section">
          <div className="container">
            <div className="section-intro compact">
              <div className="eyebrow bronze">Your turn</div>
              <h2>Your Way is not a copy of someone else&apos;s.</h2>
              <p className="lead">Explore an idea. Read a Letter. Follow a story into a book. Test something against your own life. Then, if you have learned something worth carrying forward, add your voice.</p>
            </div>
            <div className="actions">
              <Link className="button button-dark" href="/ideas/">Explore the Ideas</Link>
              <Link className="text-link" href="/contribute/">Contribute to The Way Forward →</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
