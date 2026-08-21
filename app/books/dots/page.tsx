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
  ["Transfer selectively", "Do not import an idea because it is clever. Ask what transfers, what breaks, what must be adapted, and what does not belong."],
  ["Synthesize usefully", "The goal is not novelty for its own sake. A connection matters when it produces a clearer decision, stronger system, or genuinely useful new possibility."],
];

export default function DotsBook() {
  return (
    <InteriorPage eyebrow="Book 3 · In development" title="D.O.T.S." wide>
      <div className="development-book-grid">
        <div className="development-cover-wrap">
          <Image src="/images/dots-cover.svg" width={480} height={720} alt="Cover concept for D.O.T.S. by Darren Dang." className="development-cover" sizes="(max-width: 900px) 76vw, 34vw" priority />
          <p className="book-caption">Current cover direction. The book remains in development.</p>
        </div>
        <div className="development-copy">
          <div className="book-status">In development</div>
          <p className="dots-line">Collect Dots. Connect Dots. Create Something New.</p>
          <p className="lead">Problems do not care where we learned our tools.</p>
          <p>Disciplines are useful ways to organize knowledge. Real problems are under no obligation to respect those boundaries.</p>
          <p><em>D.O.T.S.</em> explores the habit of learning across domains, recognizing hidden structural relationships, testing what can transfer, adapting what cannot, and synthesizing useful new possibilities from ideas that were originally taught apart.</p>
          <div className="development-actions">
            <Link className="button button-dark" href="/ideas/collect-dots-connect-dots-create-something-new/">Explore the core idea</Link>
            <Link className="text-link" href="/books/">All Books →</Link>
          </div>
        </div>
      </div>

      <section className="development-themes">
        <div className="eyebrow bronze">Key themes</div>
        <h2>Connections are useful when they survive contact with the real problem.</h2>
        <div className="theme-grid">
          {themes.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="development-question">
        <div className="eyebrow bronze">The larger question</div>
        <h2>How do we create something new without pretending it came from nowhere?</h2>
        <p className="lead">The book treats synthesis as disciplined work: learn widely, preserve provenance, recognize structural fit, understand breakpoints, adapt selectively, and create value that can be tested in practice.</p>
      </section>

      <aside className="development-status-note">
        <strong>Development status</strong>
        <p><em>D.O.T.S.</em> is an active work in progress. The title, core line, and intellectual territory are established, while the manuscript, chapter sequence, excerpts, and publication timing are still being developed.</p>
      </aside>
    </InteriorPage>
  );
}
