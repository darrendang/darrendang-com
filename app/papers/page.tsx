import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

export const metadata = {
  title: "Papers & Talks",
  description: "Explore The Way Papers and Darren Dang's applied papers and talks on technology, AI, governance, institutional capability, judgment, trust, and public service.",
};

const aiPaperPdf = "/docs/From_AI_Experiments_to_Institutional_Capability_Darren_Dang.pdf";

export default function Papers() {
  return <InteriorPage eyebrow="Papers & Talks" title="Different kinds of longer-form thinking." wide>
    <p className="lead">Some writing develops the living ideas of The Way. Other work applies ideas to professional and institutional questions. They can inform one another without becoming the same publication stream.</p>

    <section className="genome-boundary">
      <div className="eyebrow bronze">The Way Papers</div>
      <h2>Living ideas and evolving thought.</h2>
      <p className="lead">The Way Papers give consequential ideas room for disciplined examination: observation, tension, proposition, mechanism, testing, challenge, and open questions.</p>
      <p>The opening collection is being prepared for individual public release. No unpublished Paper is posted here merely as a teaser. A Paper appears when its publication review is complete.</p>
      <div className="boundary-stack">
        <article><span>Foundation</span><strong>A consequential proposition worth establishing clearly.</strong></article>
        <article><span>Framework</span><strong>A useful structure for seeing or working with a problem.</strong></article>
        <article><span>Inquiry</span><strong>A consequential question whose boundary deserves examination.</strong></article>
        <article><span>Synthesis</span><strong>Connections that reveal a new proposition or way of seeing.</strong></article>
      </div>
    </section>

    <section className="genome-layers">
      <div className="eyebrow bronze">Applied papers & talks</div>
      <h2>Ideas meeting professional and institutional questions.</h2>
      <p>These are independent educational and strategic works, not consulting materials or official positions of Darren&apos;s employer. Applied work remains distinct from The Way Papers even when the underlying ideas connect.</p>
      <div className="paper-index-card">
        <div className="book-status">August 2026 · Public-sector AI</div>
        <h2>From AI Experiments to Institutional Capability</h2>
        <p className="paper-subtitle">A Stewardship Agenda for Public Pension Boards and Executive Leaders</p>
        <p>How can a public pension system turn AI possibility into durable public value without outrunning trust?</p>
        <p>The paper examines mission, value, trust, risk, readiness, portfolio stewardship, governance at decision moments, institutional capability, and the need to reassess as evidence changes.</p>
        <div className="actions">
          <Link className="button button-dark" href="/papers/from-ai-experiments-to-institutional-capability/">Read the web edition</Link>
          <a className="text-link" href={aiPaperPdf} target="_blank" rel="noreferrer">View the PDF →</a>
        </div>
      </div>
    </section>

    <section className="genome-boundary">
      <div className="eyebrow bronze">A related expression</div>
      <h2>What happens after the idea leaves the page?</h2>
      <p>The Way in Motion is the case-study stream: evidence, consequences, limits, and revision when an idea meets reality.</p>
      <Link className="text-link" href="/the-way-in-motion/">Explore The Way in Motion →</Link>
    </section>
  </InteriorPage>;
}
