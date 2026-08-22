import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

export const metadata = {
  title: "Papers",
  description: "Public papers by Darren Dang on technology, institutional capability, governance, judgment, trust, and public-sector leadership.",
};

export default function Papers(){return <InteriorPage eyebrow="Papers" title="Longer-form thinking on consequential problems." wide>
  <p className="lead">Papers are one way to test an idea against a real institutional question. They are offered as independent educational and strategic writing—not as consulting materials or official positions of Darren&apos;s employer.</p>
  <div className="paper-index-card">
    <div className="book-status">August 2026 · Public-sector AI</div>
    <h2>From AI Experiments to Institutional Capability</h2>
    <p className="paper-subtitle">A Stewardship Agenda for Public Pension Boards and Executive Leaders</p>
    <p>How can a public pension system turn AI possibility into durable public value without outrunning trust?</p>
    <p>The paper examines mission, value, trust, risk, readiness, portfolio stewardship, governance at decision moments, institutional capability, and the need to reassess as evidence changes.</p>
    <Link className="button button-dark" href="/papers/from-ai-experiments-to-institutional-capability/">Read the paper</Link>
  </div>
</InteriorPage>}
