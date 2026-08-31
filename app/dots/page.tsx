import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

export const metadata = {
  title: "D.O.T.S. — A Way of Seeing Problems",
  description: "D.O.T.S. is Darren Dang's way of seeing problems: deconstruct the label, observe underlying structure, transfer carefully, synthesize for context, then create something useful.",
};

const labels = [
  ["The label says", "AI problem", "The category points you toward AI vendors, models, tools, and benchmarks."],
  ["The structure asks", "Allocation · uncertainty · tradeoffs · adoption", "The problem becomes broader than the technology attached to it."],
  ["The search space expands", "Portfolio management · venture capital · governance · decision science", "Now there are more places to look for principles that may transfer."],
];

const sequence = [
  ["D", "Deconstruct", "What kind of problem is this underneath the label?"],
  ["O", "Observe", "Who else has faced a problem with the same underlying structure?"],
  ["T", "Transfer", "What principle actually travels—and where does the analogy stop?"],
  ["S", "Synthesize", "What must change so the transferred insight fits this context?"],
];

export default function DotsPage() {
  return <InteriorPage eyebrow="D.O.T.S." title="A way of seeing problems." wide>
    <section className="dots-intro">
      <p className="dots-line">Deconstruct → Observe → Transfer → Synthesize → Create</p>
      <p className="lead">The world organizes knowledge into disciplines. Problems do not.</p>
      <p>D.O.T.S. starts with a perceptual shift: do not let the label attached to a problem decide where you are allowed to look for answers. Deconstruct the label, observe the underlying structure, transfer only what genuinely travels, synthesize for the new context—then create something useful.</p>
      <p className="note"><strong>Origin line:</strong> “Collect Dots. Connect Dots. Create Something New.” That phrase remains part of the idea&apos;s lineage. The current public model makes the discipline inside the connection more explicit.</p>
    </section>

    <section className="genome-boundary">
      <div className="eyebrow bronze">Where this fits</div>
      <h2>D.O.T.S. is one signature method within The Way—not The Way itself.</h2>
      <p>D.O.T.S. is especially useful inside <strong>Connect</strong>, where the Five Movements ask what relationships, perspectives, structures, and consequences may be missing. It can also be useful on its own for professional, analytical, systems, and cross-disciplinary problems.</p>
      <div className="actions"><Link className="button button-dark" href="/use-the-way/">Use the Five Movements</Link><Link className="text-link" href="/the-way/">How it connects to The Way →</Link></div>
    </section>

    <section className="dots-perception-section">
      <div className="eyebrow bronze">The perceptual shift</div>
      <h2>LABEL → STRUCTURE → SEARCH SPACE</h2>
      <p className="lead">The label narrows where you look. The structure expands where you can look.</p>
      <div className="perception-cards">
        {labels.map(([eyebrow,title,copy]) => <article key={title}><small>{eyebrow}</small><h3>{title}</h3><p>{copy}</p></article>)}
      </div>
    </section>

    <section className="dots-questions-section">
      <div className="eyebrow bronze">The four D.O.T.S. moves</div>
      <h2>See differently before solving differently.</h2>
      <div className="framework-sequence dots-sequence">
        {sequence.map(([letter,title,copy]) => <article key={title}><span>{letter}</span><h3>{title}</h3><p>{copy}</p></article>)}
      </div>
      <p className="dots-line">Then: CREATE — turn the synthesis into a decision, system, practice, or possibility that fits the new context.</p>
      <p className="method-note">This is the public thesis, not a proprietary implementation manual. The point is disciplined transfer, not clever analogy. CREATE follows D.O.T.S.; it is the outcome stage rather than another letter in the acronym.</p>
    </section>

    <section className="dots-cases-section">
      <div className="eyebrow bronze">Different surface. Same shape.</div>
      <h2>A few places the search space can expand.</h2>
      <div className="dots-case-grid">
        <article><span>Marketing → public planning</span><h3>Preference and tradeoff problems</h3><p>A tool developed to understand consumer preferences can become useful in a public planning problem when the deeper structure involves competing configurations, preferences, and tradeoffs.</p></article>
        <article><span>Investment management → technology</span><h3>Allocation and portfolio problems</h3><p>Technology initiatives are not securities, but leaders still make choices about scarce capital, time horizons, concentration, risk, evidence, and rebalancing.</p></article>
        <article><span>AI experimentation → institutional stewardship</span><h3>Uncertainty and capability problems</h3><p>An AI pilot may look like a technology experiment. At scale, the deeper questions include mission, evidence, readiness, governance, trust, ownership, and the ability to keep deciding as conditions change.</p><Link className="text-link" href="/papers/from-ai-experiments-to-institutional-capability/">Read the AI paper →</Link></article>
      </div>
    </section>

    <section className="dots-guardrail">
      <div className="eyebrow bronze">The guardrail</div>
      <h2>Structural fit matters more than surface similarity.</h2>
      <p className="lead">A useful analogy is never permission to copy blindly. The discipline is to identify what transfers, what breaks, what must be adapted, and what does not belong.</p>
      <blockquote>Do not ask what field a tool belongs to. Ask what problem it can solve.</blockquote>
    </section>

    <section className="dots-book-bridge">
      <div className="eyebrow bronze">Book 3 · In development</div>
      <h2>D.O.T.S.</h2>
      <p className="lead">The book develops this way of seeing through stories, cases, principles, limits, and the deeper discipline of deconstructing, observing, transferring, synthesizing, and creating usefully.</p>
      <div className="actions"><Link className="button button-dark" href="/books/dots/">Explore Book 3</Link><Link className="text-link" href="/ideas/collect-dots-connect-dots-create-something-new/">Explore the origin idea →</Link></div>
    </section>
  </InteriorPage>;
}
