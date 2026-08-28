import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "The Way",
  description: "The philosophical root of Darren Dang's work: pass down a way of thinking so those who come after inherit a stronger starting point.",
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
              <h1>Pass down a way of thinking.</h1>
              <p>We cannot leave the people who come after us an answer for every situation. We can leave them better stories, better questions, useful ideas, and a stronger place from which to begin.</p>
              <div className="actions">
                <Link className="button button-gold" href="/letters/">Read Letters from Darren</Link>
                <Link className="button button-outline" href="/share/">Share What You&apos;ve Learned</Link>
              </div>
            </div>
          </div>
          <div className="container hero-note">
            <strong>The Way is a philosophy, not a fixed doctrine.</strong>
            <span>Future generations should inherit a stronger starting point, not a narrower future.</span>
          </div>
        </section>

        <section className="section genome-purpose-home">
          <div className="container">
            <div className="section-intro compact">
              <div className="eyebrow bronze">Root direction</div>
              <h2>Steward wisdom. Strengthen the starting point.</h2>
              <p className="lead">The objective is not to preserve every answer unchanged. It is to preserve enough context, experience, judgment, and useful thinking that someone else can learn faster, decide better, improve what they inherit, and add wisdom of their own.</p>
            </div>
            <div className="purpose-grid home-purpose-grid">
              <article><span>Purpose</span><h3>Pass down a way of thinking.</h3></article>
              <article><span>Mission</span><h3>Help people preserve, connect, and pass forward wisdom, so those who come after inherit a stronger starting point.</h3></article>
              <article><span>North Star</span><h3>Strengthen the starting point for someone who comes after.</h3></article>
            </div>
            <blockquote className="trilogy-map-quote">Each generation should inherit a stronger starting point, not a narrower future.</blockquote>
          </div>
        </section>

        <section className="section worldview-section">
          <div className="container worldview-grid">
            <div>
              <div className="eyebrow bronze">What travels forward</div>
              <h2>Not a script. A better map.</h2>
              <p className="lead">A map can preserve what someone learned without deciding the route for the person who receives it. That is the tension at the heart of The Way: inheritance without rigidity, guidance without control, stewardship without ownership.</p>
            </div>
            <div className="boundary-stack">
              <article><span>Notice</span><strong>Pay attention to what life is actually teaching.</strong></article>
              <article><span>Learn</span><strong>Remain teachable across age, rank, discipline, culture, and experience.</strong></article>
              <article><span>Connect</span><strong>Look for relationships that labels and silos can hide.</strong></article>
              <article><span>Pass forward</span><strong>Leave something useful enough for someone else to question and improve.</strong></article>
            </div>
          </div>
        </section>

        <section className="section shared-wisdom-home">
          <div className="container shared-wisdom-home-grid">
            <div>
              <div className="eyebrow bronze">How it becomes visible</div>
              <h2>The Way lives through many expressions.</h2>
              <p className="lead">Letters are Darren&apos;s ongoing voice. Ideas capture durable principles. Books develop them. D.O.T.S. offers one method of seeing and creating. Shared Wisdom adds lessons from other lives. The Dang Genome preserves the relationships among all of it.</p>
              <div className="actions">
                <Link className="button button-dark" href="/letters/">Letters from Darren</Link>
                <Link className="text-link" href="/genome/">Explore The Dang Genome →</Link>
              </div>
            </div>
            <div className="shared-wisdom-principles">
              <article><span>01</span><strong>Letters</strong><p>The living voice: observations, stories, questions, and lessons still being tested.</p></article>
              <article><span>02</span><strong>The Genome</strong><p>The living body: ideas, stories, relationships, creations, and shared wisdom connected with provenance.</p></article>
              <article><span>03</span><strong>Dang OS</strong><p>The private operating system: governance, privacy, canon, review, and publication controls.</p></article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
