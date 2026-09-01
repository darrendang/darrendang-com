import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

export const metadata = {
  title: "From AI Experiments to Institutional Capability",
  description: "Version 1.1 of A Stewardship Agenda for Public Pension Boards and Executive Leaders by Darren Dang. A public leadership lens on AI experimentation, evidence, governance, readiness, trust, and institutional capability.",
};

const fiveQuestions = [
  ["Mission", "Does the use materially advance institutional purpose or member value?"],
  ["Value", "What measurable organizational return should it create?"],
  ["Trust", "How will it affect confidence, fairness, transparency, reliability, and responsible use?"],
  ["Risk", "What could fail, who could be harmed, and what exposure would remain?"],
  ["Readiness", "Can the people, processes, data, governance, architecture, capacity, and ownership support responsible execution?"],
];

const capability = [
  ["Accountable leadership", "A named executive owns the outcome and responsibility is clear across business, technology, data, security, legal, procurement, risk, and affected functions."],
  ["Process clarity", "The process being changed is understood, including exceptions, downstream effects, decision rights, records obligations, and the point at which human judgment must remain decisive."],
  ["Trusted data", "Source quality, provenance, access, retention, privacy, representativeness, and fitness for the intended decision are known well enough to support the use."],
  ["Adaptable architecture", "The institution can integrate, secure, monitor, update, and if necessary replace the capability without creating unacceptable fragility or lock-in."],
  ["Workforce capability", "Employees understand appropriate use, limitations, escalation, verification, and their continuing accountability for work supported by AI."],
  ["Proportional governance", "Oversight occurs when it can still improve the decision, and its intensity matches the materiality and reversibility of the use."],
  ["Measurement and learning", "The institution can observe both performance and consequences over time, learn from use, and act when the investment thesis no longer holds."],
];

const startingAgenda = [
  ["Name the institutional outcomes", "Identify the member, mission, service, risk, workforce, or decision outcomes AI might materially improve. Separate desired outcomes from attractive tools."],
  ["Build a visible use-case inventory", "Include sanctioned experiments, embedded vendor features, employee-created workflows, procured capabilities, and consequential uses."],
  ["Select a small portfolio of learning investments", "Choose uses that matter, can be bounded, and reduce different forms of uncertainty."],
  ["Define evidence before enthusiasm takes over", "State the baseline, intended return, trust implications, risk, readiness gaps, stop conditions, and next decision before the experiment begins."],
  ["Put governance at the decision moments", "Clarify who can authorize exploration, commitment, deployment, scaling, and continued use—and what conditions require broader review."],
  ["Prepare the workforce for accountable use", "Teach employees how to verify, protect information, preserve records, recognize limits, escalate concerns, and remain responsible for the work."],
  ["Review the portfolio on a regular cadence", "Continue, condition, pause, stop, or scale based on evidence, and capture what the institution learned."],
];

const discussionQuestions = [
  ["Mission", "Which member, fiduciary, service, workforce, or institutional outcomes are important enough to justify AI investment?"],
  ["Portfolio", "Where are we concentrating money, attention, data, vendor dependency, or specialized talent—and what are we choosing not to fund?"],
  ["Evidence", "What uncertainty is each material experiment intended to reduce, and what evidence would justify the next commitment?"],
  ["Trust", "How could the use affect reliability, fairness, accessibility, transparency, accountability, privacy, security, and public confidence?"],
  ["Readiness", "Which institutional conditions are strong enough today, which must be built, and which gaps are acceptable only because the use is bounded and reversible?"],
  ["Governance", "At which decision moments should the board, executive team, or control functions become involved?"],
  ["Workforce", "How will employees learn to use AI responsibly while remaining accountable for judgment, service, records, and outcomes?"],
  ["Vendors", "What rights, dependencies, performance obligations, data protections, monitoring access, and exit options are being created?"],
  ["Measurement", "How will we know whether the investment created Organizational Return and Trust Return?"],
  ["Rebalancing", "What conditions would cause us to continue, condition, pause, stop, or scale—and how often will we revisit the thesis?"],
];

export default function PaperPage(){return <InteriorPage eyebrow="Public-sector AI white paper · Version 1.1 · September 2026" title="From AI Experiments to Institutional Capability" wide>
  <section className="paper-hero-copy">
    <p className="paper-subtitle">A Stewardship Agenda for Public Pension Boards and Executive Leaders</p>
    <div className="paper-governing-question"><small>Governing question</small><strong>How can a public pension system turn AI possibility into durable public value without outrunning trust?</strong></div>
    <div className="actions"><Link className="button button-dark" href="/dots/">See the D.O.T.S. connection</Link><Link className="text-link" href="/papers/">All Papers →</Link></div>
  </section>

  <section className="paper-independence-note">
    <strong>About this paper</strong>
    <p>This white paper extends the public conversation begun in the July 30, 2026 NCPERS webinar, <em>From Experimentation to Enterprise: Building an AI Strategy for Public Pension Systems</em>, presented by Darren Dang and OCERS Chief Executive Officer Steve Delaney.</p>
    <p>The paper offers a public leadership lens—not a proprietary implementation manual. It shares principles and high-level architecture while protecting detailed scoring, weights, thresholds, diagnostic instruments, playbooks, and institution-specific methods.</p>
    <p>The views expressed are Darren&apos;s own and do not necessarily represent the official position of OCERS, NCPERS, or any other institution. This paper is educational and strategic in nature; it is not legal, investment, cybersecurity, procurement, or regulatory advice.</p>
    <p><strong>Public thesis. Private method.</strong> Teach the logic generously. Protect implementation selectively.</p>
    <p><strong>Version 1.1.</strong> The September 2026 alignment preserves the original thesis and structure while making explicit three institutional-AI principles sharpened through subsequent work.</p>
  </section>

  <section className="paper-section">
    <div className="eyebrow bronze">The answer first</div>
    <h2>Activity is not capability.</h2>
    <p className="lead">Public institutions do not need more AI activity. They need the institutional capability to decide what to explore, what to stop, what to scale, and when to rebalance—and to explain those decisions with evidence.</p>
    <p>An experiment can demonstrate possibility. It cannot, by itself, establish value, accountability, readiness, or trust. A successful pilot may still depend on fragile data, unclear ownership, vendor promises, informal workarounds, or a few unusually capable people. Scaling those conditions does not create institutional capability. It scales uncertainty.</p>
    <p>For public pension systems, the standard must be higher. These institutions operate across generations. They steward sensitive information, essential services, public resources, and promises that members may rely on for decades. The question is not whether an AI tool is impressive. The question is whether its use makes the institution more capable—and more worthy of trust.</p>
    <blockquote className="paper-pullquote">A pilot proves that something can work. Institutional capability proves that the organization can make it work repeatedly, responsibly, and without heroic intervention.</blockquote>
  </section>

  <section className="paper-section">
    <div className="eyebrow bronze">1. The institutional question</div>
    <h2>Mission before technology.</h2>
    <p>The question is intentionally larger than technology. AI touches member service, benefits administration, investments, actuarial work, finance, legal review, cybersecurity, procurement, records, workforce design, data governance, and public accountability.</p>
    <p>The unit of analysis must therefore be the institution—not the model, tool, project, or department in isolation. The relevant system includes people, process, technology, data, incentives, governance, culture, vendors, risk, and mission.</p>
    <p>The point is not to slow useful innovation. It is to make innovation durable enough to deserve public reliance.</p>
  </section>

  <section className="paper-section">
    <div className="eyebrow bronze">2. The false momentum of pilots</div>
    <h2>Design experiments as evidence-producing investments.</h2>
    <p>Pilots are valuable because they create a bounded place to learn. The problem begins when leaders treat pilot completion as evidence of enterprise readiness.</p>
    <p>Before an experiment begins, leaders should know what uncertainty it is intended to reduce, what evidence would justify the next commitment, what conditions would stop it, and what institutional capabilities would be required if it succeeds.</p>
  </section>

  <section className="paper-section">
    <div className="eyebrow bronze">3. A different frame</div>
    <h2>AI as fiduciary infrastructure.</h2>
    <p className="lead">Public pension systems already understand portfolio thinking: allocate scarce capital, compare unlike opportunities, distinguish time horizons, evaluate risk and return, monitor changing conditions, and rebalance when evidence changes.</p>
    <p>AI initiatives are not securities, and public value cannot be reduced to financial return. But the transferable structure is useful: leaders still make scarcity visible, compare unlike opportunities, understand dependencies, distinguish reversible experiments from consequential commitments, and allocate limited capital, talent, attention, data, and leadership capacity.</p>
    <blockquote className="paper-pullquote">Technology is fiduciary infrastructure. Technology investment is fiduciary capital.</blockquote>
    <p>A project list reports activity. A portfolio expresses choices. Portfolio stewardship also creates permission to stop when evidence no longer supports the thesis.</p>
  </section>

  <section className="paper-section">
    <div className="eyebrow bronze">4. Five questions before scale</div>
    <h2>Structure should improve judgment—not pretend to replace it.</h2>
    <div className="paper-question-grid">{fiveQuestions.map(([title,copy])=><article key={title}><span>{title}</span><p>{copy}</p></article>)}</div>
    <p>Together, these questions form the public logic of the Dang Decision Test. A score can organize evidence. It cannot accept accountability. Leaders still need to understand evidence quality, critical conditions, residual risk, reversibility, institutional capacity, ownership, and rationale.</p>
  </section>

  <section className="paper-section">
    <div className="eyebrow bronze">5. Build the conditions for capability</div>
    <h2>AI capability is an institutional condition, not a product that can simply be purchased.</h2>
    <div className="paper-capability-grid">{capability.map(([title,copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>
    <p>These conditions are not a reason to wait for perfection. They are a way to separate responsible learning from unmanaged dependence.</p>
  </section>

  <section className="paper-section">
    <div className="eyebrow bronze">6. Just-in-Time Governance</div>
    <h2>Govern the decision moments.</h2>
    <p>Governance often arrives too early and treats every idea like a production system, or too late—after a vendor has been selected, data has moved, users have formed dependencies, and schedule pressure has narrowed the available choices.</p>
    <p>Just-in-Time Governance places oversight at moments when a decision changes the institution&apos;s exposure or commitment: intent, exploration, commitment, deployment, scaling, and reassessment. The level of oversight should rise with member impact, data sensitivity, dependency, financial exposure, reputational risk, legal consequence, irreversibility, and institutional unreadiness.</p>
    <blockquote className="paper-pullquote">The purpose of governance is not to make decisions slower. It is to make consequential decisions clearer, earlier, and more accountable.</blockquote>
  </section>

  <section className="paper-section">
    <div className="eyebrow bronze">7. Value without trust is incomplete</div>
    <h2>Measure dual return.</h2>
    <div className="dual-return"><article><h3>Organizational Return</h3><p>Member service, decision quality, accuracy, timeliness, workforce capacity, productivity, resilience, cost avoidance, financial value, compliance, and other mission-specific results.</p></article><span>+</span><article><h3>Trust Return</h3><p>Confidence, credibility, transparency, fairness, reliability, accountability, responsible use, stewardship, security, privacy, accessibility, data integrity, resilience, and public value.</p></article></div>
    <p>Trust is not sentimental goodwill. It is an institutional outcome. It is built when people can rely on the service, understand appropriate parts of the decision, see who is accountable, challenge an error, and observe that the institution acts responsibly when evidence changes.</p>
  </section>

  <section className="paper-section">
    <div className="eyebrow bronze">8. Rebalance as evidence changes</div>
    <h2>Manage AI as a living portfolio.</h2>
    <p className="lead">AI changes too quickly for a static roadmap to remain sufficient. Models improve. Costs move. Vendors revise terms. Laws and policies evolve. Threats emerge. Employees learn. Data conditions change.</p>
    <p>The portfolio should support five legitimate decisions: <strong>continue, condition, pause, stop, or scale.</strong> Each is a stewardship choice. Scaling is not the default reward for activity; stopping is not automatic evidence of failure.</p>
    <div className="stewardship-cycle">ASSESS → ALIGN → PRIORITIZE → ALLOCATE → GOVERN → EXECUTE → MEASURE → REBALANCE</div>
  </section>

  <section className="paper-section">
    <div className="eyebrow bronze">9. The leadership agenda</div>
    <h2>Govern the portfolio, not the project plan.</h2>
    <p>Boards need a portfolio-level view of direction, concentration, material risk, expected value, trust implications, institutional readiness, and the decisions management is making as evidence changes.</p>
    <p>Trustees do not need to become model engineers. They need enough fluency to understand institutional consequence: what AI is being asked to do, who is affected, what evidence supports reliance, how human accountability is preserved, what concentration or dependency is being created, and how the institution will know when the use should change.</p>
  </section>

  <section className="paper-section">
    <div className="eyebrow bronze">10. A practical starting agenda</div>
    <h2>Build the capacity to keep deciding.</h2>
    <div className="starting-agenda">{startingAgenda.map(([title,copy],i)=><article key={title}><span>{i+1}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
    <blockquote className="paper-pullquote">Philosophy becomes practice when it changes the next decision.</blockquote>
    <p>The goal is not to build a perfect AI governance system before anyone learns. The goal is to create a disciplined loop in which learning improves governance, governance improves decisions, decisions build capability, and capability earns trust.</p>
  </section>

  <section className="paper-section paper-closing">
    <div className="eyebrow bronze">Stewardship before spectacle</div>
    <h2>The institution is the enduring advantage.</h2>
    <p className="lead">The most important AI advantage available to a public pension system is not early access to a model. Models will change. Vendors will change. The language of the market will change.</p>
    <p>The enduring advantage is an institution capable of learning, choosing, governing, executing, measuring, and adapting with purpose. Such an institution can use today&apos;s technology without becoming captive to it.</p>
    <p><strong>Technology changes. Principles endure.</strong></p>
    <p><strong>The standard is not whether AI was deployed. The standard is whether the institution became stronger.</strong></p>
    <blockquote className="paper-pullquote">Make technology a force that elevates people and mission.</blockquote>
  </section>

  <section className="paper-section">
    <div className="eyebrow bronze">Public discussion guide</div>
    <h2>Questions for the next board conversation.</h2>
    <div className="discussion-grid">{discussionQuestions.map(([title,copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>
  </section>

  <section className="paper-section paper-sources">
    <div className="eyebrow bronze">Authoritative public references</div>
    <h2>Sources and further reading.</h2>
    <ol>
      <li>National Conference on Public Employee Retirement Systems (NCPERS), <em>From Experimentation to Enterprise: Building an AI Strategy for Public Pension Systems</em>, July 30, 2026.</li>
      <li>Office of Management and Budget, Memorandum M-25-21, <em>Accelerating Federal Use of AI through Innovation, Governance, and Public Trust</em>, April 3, 2025.</li>
      <li>California State Teachers&apos; Retirement System, <em>CEO Report: Enterprise Technology Governance and Artificial Intelligence Oversight</em>, March 5, 2026.</li>
      <li>National Institute of Standards and Technology, <em>Artificial Intelligence Risk Management Framework (AI RMF 1.0)</em> and associated resources.</li>
      <li>U.S. Government Accountability Office, <em>Artificial Intelligence: An Accountability Framework for Federal Agencies and Other Entities</em>, GAO-21-519SP, June 30, 2021.</li>
      <li>National Institute of Standards and Technology, <em>Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile</em>, NIST AI 600-1, July 2024.</li>
      <li>State of California, Generative Artificial Intelligence portal and public-sector use cases.</li>
    </ol>
    <p>The public standards above provide context and corroboration. They do not define Darren Dang&apos;s institutional technology philosophy and public thought leadership.</p>
    <div className="actions"><Link className="button button-dark" href="/dots/">Explore D.O.T.S.</Link><Link className="text-link" href="/papers/">All Papers →</Link></div>
  </section>

  <section className="paper-section">
    <div className="eyebrow bronze">Version 1.1 · Institutional alignment</div>
    <h2>Three principles made explicit.</h2>
    <blockquote className="paper-pullquote">AI is decision support, not decision authority.</blockquote>
    <blockquote className="paper-pullquote">The goal is not AI that knows everything. It is an institution that can connect what it already knows.</blockquote>
    <blockquote className="paper-pullquote">AI capability is not principally a technology capability. It is an institutional capability enabled by technology.</blockquote>
    <p><strong>The standard is not whether AI was deployed. The standard is whether the institution became stronger.</strong></p>
  </section>
</InteriorPage>}