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
              <p>The Way is accumulated wisdom, experience, stories, questions, tools, relationships, mistakes, and discoveries offered as a starting point—not a destination someone else has the authority to choose for you.</p>
              <div className="actions">
                <Link className="button button-gold" href="/use-the-way/">Use The Way</Link>
                <Link className="button button-outline" href="/explore/">Explore what speaks to you</Link>
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
              <div className="eyebrow bronze">The philosophical spine</div>
              <h2>Inherit wisdom. Keep your agency. Choose what comes next.</h2>
              <p className="lead">The Way becomes useful when what we inherit is allowed to meet reality, difference, reflection, and human choice.</p>
            </div>
            <div className="purpose-grid home-purpose-grid">
              <article><span>01 · The Way</span><h3>Receive a stronger starting point.</h3><p>Learn from what others experienced, discovered, built, questioned, lost, corrected, and passed forward.</p><Link className="text-link" href="/explore/">Explore the inheritance →</Link></article>
              <article><span>02 · Your Way</span><h3>Interpret, test, adapt, and live it.</h3><p>Keep what helps. Challenge what does not. Let evidence, context, relationships, consequences, and your lived experience refine the map.</p><Link className="text-link" href="/your-way/">Make it Your Way →</Link></article>
              <article><span>03 · The Way Forward</span><h3>Choose the direction your context requires.</h3><p>Progress may mean building, healing, serving, changing direction, deepening, simplifying, waiting, letting go, or beginning again.</p><Link className="text-link" href="/the-way-forward/">Explore The Way Forward →</Link></article>
            </div>
            <blockquote className="trilogy-map-quote">Leave those who come after a stronger starting point and the freedom to go farther.</blockquote>
          </div>
        </section>

        <section className="section shared-wisdom-home">
          <div className="container shared-wisdom-home-grid">
            <div>
              <div className="eyebrow bronze">The constitutional guardrails</div>
              <h2>Guidance without control.</h2>
              <p className="lead">The Way should widen what the next person can see, not narrow what they are allowed to become.</p>
              <p>Its purpose is not to reproduce Darren&apos;s life, preserve one family&apos;s conclusions unchanged, or turn inherited wisdom into dogma.</p>
              <Link className="text-link" href="/the-way/constitution/">Read all fifteen Articles →</Link>
            </div>
            <div className="shared-wisdom-principles">
              <article><span>Agency</span><strong>Wisdom should expand agency, not replace it.</strong></article>
              <article><span>Teachability</span><strong>Reality has the right to change our minds.</strong></article>
              <article><span>Evolution</span><strong>Inherit wisdom, not dogma. Preserve what was learned. Remain free to learn more.</strong></article>
              <article><span>Contribution</span><strong>Do not merely inherit. Add something worthy of passing forward.</strong></article>
            </div>
          </div>
        </section>

        <section className="section worldview-section">
          <div className="container worldview-grid">
            <div>
              <div className="eyebrow bronze">How The Way becomes visible</div>
              <h2>The philosophy is larger than any one artifact.</h2>
              <p className="lead">The Dang Genome is the first living family implementation through which stories, ideas, relationships, books, Letters, frameworks, evidence, and governed contributions can be preserved and connected.</p>
              <p>DarrenDang.com is the public experience layer. Dang OS privately governs provenance, permissions, privacy, review, contribution controls, and publication.</p>
            </div>
            <div className="boundary-stack">
              <article><span>THE WAY</span><strong>Philosophical root and constitutional guardrails.</strong></article>
              <article><span>DANG GENOME</span><strong>First living family implementation and connected body of learning.</strong></article>
              <article><span>DANG OS</span><strong>Private governance and stewardship engine.</strong></article>
              <article><span>DARRENDANG.COM</span><strong>Governed public experience—not the canonical source of truth.</strong></article>
            </div>
          </div>
        </section>

        <section className="section system-section">
          <div className="container">
            <div className="section-intro compact">
              <div className="eyebrow bronze">Use The Way</div>
              <h2>Receive. Examine. Connect. Practice. Pass Forward.</h2>
              <p className="lead">The Five Movements translate the philosophy into portable questions and feedback loops without turning it into a prescribed life.</p>
            </div>
            <div className="actions">
              <Link className="button button-dark" href="/use-the-way/">Use the Five Movements</Link>
              <Link className="text-link" href="/your-way/">See how Your Way emerges →</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
