import Image from "next/image";
import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

export const metadata = {
  title: "D.O.T.S.",
  description: "Explore D.O.T.S. — Collect Dots. Connect Dots. Create Something New. Darren Dang's developing book about cross-disciplinary learning, structural relationships, transfer, systems thinking, and synthesis.",
};

const themes = [
  ["Collect widely", "Build a larger inventory of tools, disciplines, experiences, stories, and patterns instead of learning only inside one professional boundary."],
  ["See structure", "Look beneath surface similarity. The useful connection is often a shared underlying structure, tradeoff, or problem pattern."],
  ["Transfer selectively", "Ask what travels, what breaks, what must be adapted, and what does not belong."],
  ["Synthesize usefully", "Novelty is not the objective. A connection matters when it produces a clearer decision, stronger system, or genuinely useful new possibility."],
];

const sequence = [
  ["01", "Deconstruct", "Understand the real structure of the problem rather than accepting its surface description."],
  ["02", "Observe", "Look across disciplines and experience for other places where that structure appears."],
  ["03", "Transfer", "Identify which principles travel—and where the analogy stops working."],
  ["04", "Synthesize", "Adapt what is useful and create something appropriate for the actual context."],
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
          <p className="lead">The world organizes knowledge into disciplines. Problems do not.</p>
          <p>The hardest problems rarely belong neatly to technology, business, design, psychology, finance, government, education, or any other single field. <em>D.O.T.S.</em> explores what becomes possible when we learn widely enough to recognize that a problem in one domain may share an underlying structure with a problem somewhere completely different.</p>
          <p>The goal is not to find clever similarities. It is to find structural ones—and then test whether the connection survives contact with the real problem.</p>
          <div className="development-actions">
            <Link className="button button-dark" href="/ideas/collect-dots-connect-dots-create-something-new/">Explore the core idea</Link>
            <Link className="text-link" href="/books/">All Books →</Link>
          </div>
        </div>
      </div>

      <section className="development-themes">
        <div className="eyebrow bronze">Key themes</div>
        <h2>Broad learning becomes useful when connection is disciplined.</h2>
        <div className="theme-grid">
          {themes.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="development-principles">
        <div className="eyebrow bronze">A high-level thinking sequence</div>
        <h2>Deconstruct → Observe → Transfer → Synthesize</h2>
        <p className="lead">This is the public thesis, not the full method. The discipline is to understand the problem, look beyond the expected domain, test structural fit, and adapt rather than copy.</p>
        <div className="framework-sequence">
          {sequence.map(([number, title, copy]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="development-question">
        <div className="eyebrow bronze">Two principles at the center</div>
        <h2>Collect broadly. Transfer carefully.</h2>
        <div className="principle-grid">
          <article><blockquote>Collect Dots. Connect Dots. Create Something New.</blockquote><p>Broad learning creates a larger inventory of tools, patterns, experiences, and analogies to draw from.</p></article>
          <article><blockquote>Do not ask what field a tool belongs to. Ask what problem it can solve.</blockquote><p>The useful question is whether the underlying structure fits—not whether a method comes from the expected discipline.</p></article>
        </div>
      </section>

      <section className="example-panel">
        <div className="eyebrow bronze">An unlikely connection</div>
        <h3>Marketing + preschool planning</h3>
        <p>A tool used to understand consumer preferences can also help people make difficult public-policy choices when the underlying problem involves competing preferences, tradeoffs, and configurations. The disciplines are different. The structure of the problem may not be.</p>
        <Link className="text-link" href="/ideas/collect-dots-connect-dots-create-something-new/">Explore the origin idea →</Link>
      </section>

      <aside className="development-status-note">
        <strong>Development status</strong>
        <p><em>D.O.T.S.</em> is an active work in progress. The title, core line, intellectual territory, and public high-level model are established, while the manuscript, chapter sequence, detailed method, case studies, excerpts, and publication timing are still being developed.</p>
      </aside>
    </InteriorPage>
  );
}
