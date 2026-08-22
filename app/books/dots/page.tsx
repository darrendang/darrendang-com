import Image from "next/image";
import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

export const metadata = {
  title: "D.O.T.S. — Book 3",
  description: "Explore Darren Dang's developing Book 3, D.O.T.S. — Collect Dots. Connect Dots. Create Something New. D.O.T.S. is a way of seeing problems.",
};

const themes = [
  ["See past labels", "A problem's category can be useful for organization and still be a poor guide to where the best solution might come from."],
  ["Find structure", "Look beneath the surface for the underlying allocation, uncertainty, tradeoff, feedback, adoption, incentive, or system pattern."],
  ["Expand the search space", "Once the structure is visible, look across disciplines and lived experience for other places where the same shape appears."],
  ["Transfer carefully", "Ask what travels, where the analogy breaks, what must be adapted, and what does not belong."],
  ["Create usefully", "Novelty is not the objective. The connection matters when it produces a clearer decision, stronger system, or genuinely useful new possibility."],
];

export default function DotsBook() {
  return (
    <InteriorPage eyebrow="Book 3 · In development" title="D.O.T.S." wide>
      <div className="development-book-grid">
        <div className="development-cover-wrap">
          <Image src="/images/dots-cover.webp" width={480} height={720} alt="Current cover for D.O.T.S. by Darren Dang." className="development-cover" sizes="(max-width: 900px) 76vw, 34vw" priority />
          <p className="book-caption">Current cover direction. The book remains in development.</p>
        </div>
        <div className="development-copy">
          <div className="book-status">In development</div>
          <p className="dots-line">Collect Dots. Connect Dots. Create Something New.</p>
          <p className="lead">D.O.T.S. is a way of seeing problems.</p>
          <p>The world organizes knowledge into disciplines. Problems do not. The book explores what becomes possible when we stop letting a problem's label decide where we are allowed to look for answers.</p>
          <p>The core move is perceptual before it is methodological: <strong>LABEL → STRUCTURE → SEARCH SPACE.</strong> See the structure beneath the category, expand where you look, then transfer carefully enough to create something that actually fits.</p>
          <div className="development-actions">
            <Link className="button button-dark" href="/dots/">Explore D.O.T.S.</Link>
            <Link className="text-link" href="/books/">All Books →</Link>
          </div>
        </div>
      </div>

      <section className="development-themes">
        <div className="eyebrow bronze">Key themes</div>
        <h2>Better solutions often begin with a better description of the problem.</h2>
        <div className="theme-grid theme-grid-five">
          {themes.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="development-principles">
        <div className="eyebrow bronze">The public high-level model</div>
        <h2>Deconstruct → Observe → Transfer → Synthesize</h2>
        <p className="lead">The method begins by identifying what kind of problem is actually present, looks for the same structure elsewhere, tests what genuinely transfers, and adapts the insight for the new context.</p>
        <div className="principle-grid">
          <article><blockquote>The label narrows where you look. The structure expands where you can look.</blockquote><p>D.O.T.S. expands the search space before narrowing toward a solution.</p></article>
          <article><blockquote>Do not ask what field a tool belongs to. Ask what problem it can solve.</blockquote><p>Disciplinary origin matters less than structural fit—and structural fit still has to be tested.</p></article>
        </div>
      </section>

      <section className="example-panel">
        <div className="eyebrow bronze">D.O.T.S. in practice</div>
        <h3>AI experimentation looked like a technology problem.</h3>
        <p>Look beneath the label and the structure also includes allocation, uncertainty, evidence, governance, capability, trust, and rebalancing. That opens a larger search space—while still requiring judgment about which analogies genuinely transfer.</p>
        <Link className="text-link" href="/papers/from-ai-experiments-to-institutional-capability/">Read From AI Experiments to Institutional Capability →</Link>
      </section>

      <aside className="development-status-note">
        <strong>Development status</strong>
        <p><em>D.O.T.S.</em> is an active work in progress. The title, core line, central thesis, and public high-level model are established, while the manuscript, chapter sequence, detailed method, case studies, excerpts, and publication timing are still being developed.</p>
      </aside>
    </InteriorPage>
  );
}
