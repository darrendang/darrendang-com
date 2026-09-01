import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

export const metadata = {
  title: "The Way Papers",
  description: "Explore The Way Papers: living ideas and evolving thought examined through evidence, challenge, revision, and open questions.",
};

export default function Papers() {
  return <InteriorPage eyebrow="The Way Papers" title="Living ideas and evolving thought." wide>
    <p className="lead">The Way Papers give consequential ideas room for disciplined examination without turning evolving thought into doctrine. Each paper should leave the reader with a stronger place from which to think and the freedom to reach a different conclusion.</p>

    <section className="genome-boundary">
      <div className="eyebrow bronze">Publication discipline</div>
      <h2>Ideas can be preserved without pretending they are finished.</h2>
      <p>The opening collection is being prepared for individual public release. No unpublished Paper appears here merely as a teaser. A Paper becomes public only after its own review and publication decision are complete.</p>
      <div className="boundary-stack">
        <article><span>Foundation</span><strong>A consequential proposition worth establishing clearly.</strong></article>
        <article><span>Framework</span><strong>A useful structure for seeing or working with a problem.</strong></article>
        <article><span>Inquiry</span><strong>A consequential question whose boundary deserves examination.</strong></article>
        <article><span>Synthesis</span><strong>Connections that reveal a new proposition or way of seeing.</strong></article>
      </div>
    </section>

    <section className="genome-layers">
      <div className="eyebrow bronze">Independent applied writing</div>
      <h2>Professional and institutional questions remain a separate category.</h2>
      <p>Applied writing can connect to The Way without becoming a Way Paper. These works are independent educational and strategic perspectives, not consulting materials or official positions of Darren&apos;s employer.</p>
      <div className="paper-index-card">
        <div className="book-status">Version 1.1 · September 2026 · Public-sector AI</div>
        <h2>From AI Experiments to Institutional Capability</h2>
        <p className="paper-subtitle">A Stewardship Agenda for Public Pension Boards and Executive Leaders</p>
        <p>How can a public pension system turn AI possibility into durable public value without outrunning trust?</p>
        <p>The paper examines mission, value, trust, risk, readiness, portfolio stewardship, governance at decision moments, institutional capability, and the need to reassess as evidence changes.</p>
        <div className="actions">
          <Link className="button button-dark" href="/papers/from-ai-experiments-to-institutional-capability/">Read version 1.1</Link>
        </div>
      </div>
      <p className="note">Talks and speaking are a different expression surface. <Link className="text-link" href="/speaking/">Explore Speaking &amp; Talks →</Link></p>
    </section>

    <section className="genome-boundary">
      <div className="eyebrow bronze">A related expression</div>
      <h2>What happens after the idea leaves the page?</h2>
      <p>The Way in Motion is the case-study stream: evidence, consequences, limits, and revision when an idea meets reality.</p>
      <Link className="text-link" href="/the-way-in-motion/">Explore The Way in Motion →</Link>
    </section>
  </InteriorPage>;
}
