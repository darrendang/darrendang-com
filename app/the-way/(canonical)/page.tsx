import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { MusicCompanion } from "@/components/MusicCompanion";
import { carryItForwardLyrics } from "@/lib/songLyrics";

const philosophicalCycle = [
  ["Learn", "Receive experience, perspective, and what came before."],
  ["Know", "Reflect deeply enough to form judgment while remaining revisable."],
  ["Discover", "Widen the frame beyond what is already visible or familiar."],
  ["Create", "Turn possibility into something that can meet reality."],
  ["Transmit", "Pass forward what is worth carrying so others can begin farther ahead."],
];

export const metadata: Metadata = {
  title: "The Way",
  description: "The Way → Your Way → The Way Forward: a living philosophy of learning, knowing, discovering, creating, and transmitting without prescribing a predetermined destination.",
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

        <section className="section system-section">
          <div className="container">
            <div className="section-intro compact">
              <div className="eyebrow bronze">The living cycle</div>
              <h2>Learning → Knowing → Discovering → Creating → Transmitting</h2>
              <p className="lead">The Way is not only about what we inherit. It is about what we do with it: learn from it, understand it well enough to act, widen beyond it, create something that can meet reality, and pass forward what proves worth carrying.</p>
            </div>
            <div className="genome-cycle" aria-label="Learning, knowing, discovering, creating, transmitting">
              {philosophicalCycle.map(([title, copy], index) => (
                <div key={title}><span>{String(index + 1).padStart(2, "0")}</span><strong>{title}</strong><p>{copy}</p></div>
              ))}
            </div>
            <blockquote className="trilogy-map-quote">Open enough to discover. Commit enough to learn. Humble enough to revise.</blockquote>
            <p className="map-not-script">Knowing is not certainty. It is provisional understanding strong enough to orient action, but humble enough to be changed by evidence, experience, or a better question.</p>
          </div>
        </section>

        <section className="section genome-purpose-home">
          <div className="container">
            <div className="section-intro compact">
              <div className="eyebrow bronze">The philosophical spine</div>
              <h2>Inherit wisdom. Keep your agency. Create what comes next.</h2>
              <p className="lead">The Way becomes useful when what we inherit is allowed to meet reality, difference, reflection, discovery, creation, and human choice.</p>
            </div>
            <div className="purpose-grid home-purpose-grid">
              <article><span>01 · The Way</span><h3>Receive a stronger starting point.</h3><p>Learn from what others experienced, discovered, built, questioned, lost, corrected, and passed forward.</p><Link className="text-link" href="/explore/">Explore the inheritance →</Link></article>
              <article><span>02 · Your Way</span><h3>Interpret, test, adapt, and live it.</h3><p>Keep what helps. Challenge what does not. Let evidence, context, relationships, consequences, and your lived experience refine the map.</p><Link className="text-link" href="/your-way/">Make it Your Way →</Link></article>
              <article><span>03 · The Way Forward</span><h3>Create the direction your context requires.</h3><p>Progress may mean building, healing, serving, changing direction, deepening, simplifying, waiting, letting go, beginning again—or making something no inherited map could have anticipated.</p><Link className="text-link" href="/the-way-forward/">Explore The Way Forward →</Link></article>
            </div>
            <blockquote className="trilogy-map-quote">Leave those who come after a stronger starting point and the freedom to go farther.</blockquote>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <MusicCompanion
              eyebrow="The Way · In music"
              title="Carry It Forward"
              description="The Way began in lived experience and only later acquired a name. This song is one musical expression of the pattern: receive what came before, examine it, make it your own, and leave greater possibility behind."
              tracks={[
                {
                  title: "Carry It Forward",
                  src: "/audio/Song-Carry-It-Forward.mp3",
                  description: "A cross-generational interpretation of inheritance without prescription: carry the light, choose your own dawn, and leave the next person a stronger beginning with more freedom.",
                  lyrics: carryItForwardLyrics,
                },
              ]}
              note="This is an artistic expression of The Way, not a substitute for the philosophy or Constitution."
            />
          </div>
        </section>

        <section className="section shared-wisdom-home">
          <div className="container shared-wisdom-home-grid">
            <div>
              <div className="eyebrow bronze">The constitutional guardrails</div>
              <h2>Guidance without control.</h2>
              <p className="lead">The Way should widen what the next person can see, not narrow what they are allowed to become.</p>
              <p>Its purpose is not to reproduce Darren&apos;s life, preserve one family&apos;s conclusions unchanged, or turn inherited wisdom into dogma. A stronger inheritance includes the capacity to question the inheritance itself.</p>
              <Link className="text-link" href="/the-way/constitution/">Read all fifteen Articles →</Link>
            </div>
            <div className="shared-wisdom-principles">
              <article><span>Agency</span><strong>Wisdom should expand agency, not replace it.</strong></article>
              <article><span>Teachability</span><strong>Reality has the right to change our minds.</strong></article>
              <article><span>Discovery</span><strong>A frame can be useful and still be too small.</strong></article>
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
              <div className="eyebrow bronze">Practice The Way</div>
              <h2>Receive. Examine. Connect. Practice. Pass Forward.</h2>
              <p className="lead">The Five Movements are a practical layer beneath the larger philosophical cycle. They translate The Way into portable questions and feedback loops without turning it into a prescribed life.</p>
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
