import Image from "next/image";
import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

export const metadata = {
  title: "Wisdom Has No Rank",
  description: "Explore Wisdom Has No Rank, Darren Dang's developing book about reciprocal wisdom, teachability, listening, reflection, and learning across age, title, role, and hierarchy.",
};

const themes = [
  ["Teachability", "Maturity requires remaining open to useful insight even when it comes from a direction we did not expect."],
  ["Reciprocity", "Parents teach children and children teach parents. Leaders teach teams and teams teach leaders. Wisdom can move both ways."],
  ["Recognition", "The difficult work is often not hearing advice. It is recognizing when another person's perspective exposes something we need to reconsider."],
  ["Change", "Listening matters most when it can alter judgment, behavior, or the system we were previously defending."],
];

export default function WisdomHasNoRank() {
  return (
    <InteriorPage eyebrow="Book 2 · In development" title="Wisdom Has No Rank" wide>
      <div className="development-book-grid">
        <div className="development-cover-wrap">
          <Image src="/images/wisdom-has-no-rank-cover.svg" width={480} height={720} alt="Cover concept for Wisdom Has No Rank by Darren Dang." className="development-cover" sizes="(max-width: 900px) 76vw, 34vw" priority />
          <p className="book-caption">Current cover direction. The book remains in development.</p>
        </div>
        <div className="development-copy">
          <div className="book-status">In development</div>
          <p className="book-hook">What happens when the person you expected to teach becomes someone capable of teaching you?</p>
          <p className="lead">Wisdom does not belong automatically to the oldest person, the highest-ranking person, the expert, the parent, or the leader.</p>
          <p>Experience, expertise, responsibility, and authority matter. They deserve respect. But none gives any one person a monopoly on wisdom.</p>
          <p>This book turns familiar relationships around. The person Darren helped, led, taught, mentored, or parented may later become the person who changes his mind. The recurring movement is assumption → another person's insight → reconsideration → change.</p>
          <div className="development-actions">
            <Link className="button button-dark" href="/ideas/wisdom-has-no-rank/">Explore the core idea</Link>
            <Link className="text-link" href="/books/">All Books →</Link>
          </div>
        </div>
      </div>

      <section className="development-themes">
        <div className="eyebrow bronze">Key themes</div>
        <h2>Wisdom can move in any direction.</h2>
        <div className="theme-grid">
          {themes.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="development-question">
        <div className="eyebrow bronze">The narrative engine</div>
        <h2>When the teacher has to become the student again.</h2>
        <p className="lead">The book is being built around moments of reversal: the people Darren was supposed to teach become the people who teach him. The value is not in pretending rank never matters. It is in refusing to confuse rank with a monopoly on insight.</p>
      </section>

      <aside className="development-status-note">
        <strong>Development status</strong>
        <p><em>Wisdom Has No Rank</em> is an active work in progress. The central thesis and themes are established, but the manuscript, chapter sequence, excerpts, and publication timing are still being developed.</p>
      </aside>
    </InteriorPage>
  );
}
