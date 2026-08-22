import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

export const metadata = {
  title: "From AI Experiments to Institutional Capability",
  description: "A Stewardship Agenda for Public Pension Boards and Executive Leaders by Darren Dang. A public leadership lens on AI experimentation, evidence, governance, readiness, trust, and institutional capability.",
};

const fiveQuestions = [
  ["Mission", "Does the use materially advance institutional purpose or member value?"],
  ["Value", "What measurable organizational return should it create?"],
  ["Trust", "How will it affect confidence, fairness, transparency, reliability, and responsible use?"],
  ["Risk", "What could fail, who could be harmed, and what exposure would remain?"],
  ["Readiness", "Can the people, processes, data, governance, architecture, capacity, and ownership support responsible execution?"],
];

const capability = [
  ["Accountable leadership", "A named executive owns the outcome and responsibility is clear across affected functions."],
  ["Process clarity", "The work, exceptions, downstream effects, decision rights, and points of human judgment are understood."],
  ["Trusted data", "Quality, provenance, access, privacy, retention, representativeness, and fitness for use are known."],
  ["Adaptable architecture", "The institution can integrate, secure, monitor, update, and if necessary replace the capability."],
  ["Workforce capability", "Employees understand appropriate use, limitations, verification, escalation, and continuing accountability."],
  ["Proportional governance", "Oversight arrives when it can still improve the decision and rises with materiality and irreversibility."],
  ["Measurement and learning", "The institution can observe performance and consequences over time and act when the thesis changes."],
];

export default function PaperPage(){return <InteriorPage eyebrow="Public-sector AI white paper · August 2026" title="From AI Experiments to Institutional Capability" wide>
  <section className="paper-hero-copy">
    <p className="paper-subtitle">A Stewardship Agenda for Public Pension Boards and Executive Leaders</p>
    <div className="paper-governing-question"><small>Governing question</small><strong>How can a public pension system turn AI possibility into durable public value without outrunning trust?</strong></div>
    <div className="actions"><a className="button button-dark" href="/papers/From_AI_Experiments_to_Institutional_Capability_Darren_Dang.pdf">Download PDF</a><Link className="text-link" href="/dots/">See the D.O.T.S. connection →</Link></div>
  </section>

  <section className="paper-independence-note">
    <strong>Independent public writing</strong>
    <p>This paper offers a public leadership lens—not a proprietary implementation manual. The views expressed are Darren&apos;s own and do not necessarily represent the official position of OCERS, NCPERS, or any other institution. It is educational and strategic in nature, not legal, investment, cybersecurity, procurement, or regulatory advice.</p>
    <p><strong>Public thesis. Private method.</strong> Teach the logic generously. Protect implementation selectively.</p>
  </section>

  <section className="paper-section">
    <div className="eyebrow bronze">The answer first</div>
    <h2>Activity is not capability.</h2>
    <p className="lead">Public institutions do not need more AI activity. They need the institutional capability to decide what to explore, what to stop, what to scale, and when to rebalance—and to explain those decisions with evidence.</p>
    <p>An experiment can demonstrate possibility. It cannot, by itself, establish value, accountability, readiness, or trust. A successful pilot may still depend on fragile data, unclear ownership, vendor promises, informal workarounds, or a few unusually capable people. Scaling those conditions does not create institutional capability. It scales uncertainty.</p>
    <blockquote className="paper-pullquote">A pilot proves that something can work. Institutional capability proves that the organization can make it work repeatedly, responsibly, and without heroic intervention.</blockquote>
  </section>

  <section className="paper-section">
    <div className="eyebrow bronze">Five questions before scale</div>
    <h2>Structure should improve judgment—not pretend to replace it.</h2>
    <div className="paper-question-grid">{fiveQuestions.map(([title,copy])=><article key={title}><span>{title}</span><p>{copy}</p></article>)}</div>
    <p>Together, these questions form the public logic of the Dang Decision Test™. A score can organize evidence. It cannot accept accountability. Leaders still need to understand evidence quality, residual risk, reversibility, institutional capacity, ownership, and rationale.</p>
  </section>

  <section className="paper-section">
    <div className="eyebrow bronze">A different frame</div>
    <h2>AI as fiduciary infrastructure.</h2>
    <p className="lead">Public pension systems already understand portfolio thinking: allocate scarce capital, compare unlike opportunities, distinguish time horizons, evaluate risk and return, monitor changing conditions, and rebalance when evidence changes.</p>
    <p>AI initiatives are not securities, and public value cannot be reduced to financial return. But the transferable structure is useful: leaders still allocate limited capital, talent, attention, data, and leadership capacity across competing opportunities under uncertainty.</p>
    <blockquote className="paper-pullquote">Technology is fiduciary infrastructure. Technology investment is fiduciary capital.</blockquote>
  </section>

  <section className="paper-section">
    <div className="eyebrow bronze">Build the conditions for capability</div>
    <h2>AI capability is an institutional condition, not a product that can simply be purchased.</h2>
    <div className="paper-capability-grid">{capability.map(([title,copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>
  </section>

  <section className="paper-section">
    <div className="eyebrow bronze">Govern the decision moments</div>
    <h2>Governance should accelerate responsible innovation.</h2>
    <p>Just-in-Time Governance™ places oversight at moments when a decision changes the institution&apos;s exposure or commitment: intent, exploration, commitment, deployment, scaling, and reassessment. The level of oversight should rise with consequence, dependency, exposure, irreversibility, and institutional unreadiness.</p>
    <blockquote className="paper-pullquote">The purpose of governance is not to make decisions slower. It is to make consequential decisions clearer, earlier, and more accountable.</blockquote>
  </section>

  <section className="paper-section">
    <div className="eyebrow bronze">Value without trust is incomplete</div>
    <h2>Measure dual return.</h2>
    <div className="dual-return"><article><h3>Organizational Return</h3><p>Service, decision quality, accuracy, timeliness, workforce capacity, productivity, resilience, cost avoidance, financial value, compliance, and other mission-specific results.</p></article><span>+</span><article><h3>Trust Return™</h3><p>Confidence, credibility, transparency, fairness, reliability, accountability, responsible use, stewardship, security, privacy, accessibility, and public value.</p></article></div>
    <p>Trust is not sentimental goodwill. It is an institutional outcome. It is built when people can rely on the service, understand appropriate parts of the decision, see who is accountable, challenge an error, and observe that the institution acts responsibly when evidence changes.</p>
  </section>

  <section className="paper-section">
    <div className="eyebrow bronze">Rebalance as evidence changes</div>
    <h2>Manage AI as a living portfolio.</h2>
    <p className="lead">The portfolio should support five legitimate decisions: continue, condition, pause, stop, or scale. Scaling is not the default reward for activity; stopping is not automatic evidence of failure.</p>
    <div className="stewardship-cycle">ASSESS → ALIGN → PRIORITIZE → ALLOCATE → GOVERN → EXECUTE → MEASURE → REBALANCE</div>
  </section>

  <section className="paper-section paper-closing">
    <div className="eyebrow bronze">Stewardship before spectacle</div>
    <h2>The institution is the enduring advantage.</h2>
    <p className="lead">Models will change. Vendors will change. The language of the market will change. The enduring advantage is an institution capable of learning, choosing, governing, executing, measuring, and adapting with purpose.</p>
    <p><strong>Technology changes. Principles endure.</strong></p>
    <p>The standard is not whether technology was delivered. The standard is whether the institution became stronger.</p>
    <blockquote className="paper-pullquote">Make technology a force that elevates people and mission.</blockquote>
    <div className="actions"><a className="button button-dark" href="/papers/From_AI_Experiments_to_Institutional_Capability_Darren_Dang.pdf">Download the full paper</a><Link className="text-link" href="/papers/">All Papers →</Link></div>
  </section>
</InteriorPage>}
