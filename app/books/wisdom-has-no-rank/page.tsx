import Image from "next/image";
import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

export const metadata = {
  title: "Wisdom Has No Rank",
  description: "Explore Wisdom Has No Rank, Darren Dang's developing book about reciprocal wisdom, teachability, listening, reflection, and learning across age, title, role, and hierarchy.",
};

const themes = [
  ["Teachability", "Stay open to useful insight even after experience has given us reasons to trust ourselves."],
  ["Reciprocity", "Parents teach children and children teach parents. Leaders teach teams and teams teach leaders. Wisdom can move both ways."],
  ["Listening", "Hear what is being said before defending the role, title, or authority we occupy."],
  ["Reflection", "Separate discomfort from evidence that we may need to reconsider."],
  ["Change", "A lesson matters most when it can alter judgment, behavior, or the system we were previously defending."],
];

export default function WisdomHasNoRank() {
  return (
    <InteriorPage eyebrow="Book 2 · BECOME · In development" title="Wisdom Has No Rank" wide>
      <div className="development-book-grid">
        <div className="development-cover-wrap">
          <Image src="/images/wisdom-has-no-rank-cover.webp" width={480} height={720} alt="Current cover for Wisdom Has No Rank by Darren Dang." className="development-cover" sizes="(max-width: 900px) 76vw, 34vw" priority />
          <p className="book-caption">Current cover direction. The book remains in development.</p>
        </div>
        <div className="development-copy">
          <div className="book-status">In development</div>
          <p className="book-hook">Who can I still learn from?</p>
          <p className="lead">Experience matters. Expertise matters. Responsibility matters. Rank matters. But none gives us a monopoly on wisdom.</p>
          <p><em>Wisdom Has No Rank</em> explores what happens when familiar roles reverse—when children teach parents, teams teach leaders, students teach teachers, and the people we once helped become stronger become capable of making us stronger.</p>
          <p>The challenge is not simply to listen. It is to remain teachable enough to recognize when another person has seen something we missed—and humble enough to change when the lesson earns it.</p>
          <div className="development-actions">
            <Link className="button button-dark" href="/ideas/wisdom-has-no-rank/">Explore the core idea</Link>
            <Link className="text-link" href="/books/">All Books →</Link>
          </div>
        </div>
      </div>

      <section className="development-themes">
        <div className="eyebrow bronze">Key themes</div>
        <h2>Wisdom can move in any direction.</h2>
        <div className="theme-grid theme-grid-five">
          {themes.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="development-question">
        <div className="eyebrow bronze">The narrative engine</div>
        <h2>Sometimes the teacher has to become the student again.</h2>
        <p className="lead">The person you once taught may eventually have something to teach you. The person you led may see what you missed. The child you raised may become the person who changes your mind.</p>
        <blockquote className="book-quote">The people who go before us give us a map. The people who come after us show us where the map is incomplete.</blockquote>
        <p>Experience can give us a starting map without giving us the finished one. The people who follow may encounter terrain we never saw, revise what no longer fits, and teach us how to redraw the map.</p>
        <p>The point is not that hierarchy never matters. The point is that authority and wisdom are not the same thing.</p>
      </section>

      <section className="development-principles">
        <div className="eyebrow bronze">The bridge to Book 3</div>
        <h2>Book 2 expands the sources of wisdom. Book 3 expands the sources of solutions.</h2>
        <div className="principle-grid">
          <article><blockquote>Wisdom has no rank.</blockquote><p>Useful insight can come from a direction we did not expect.</p></article>
          <article><blockquote>To teach well, sometimes you have to become a student first.</blockquote><p>Remaining useful to others can require relearning, questioning, and becoming teachable again.</p></article>
        </div>
        <p style={{marginTop:"28px"}}><Link className="text-link" href="/dots/">See how D.O.T.S. carries the idea across disciplines →</Link></p>
      </section>

      <aside className="development-status-note">
        <strong>Development status</strong>
        <p><em>Wisdom Has No Rank</em> is an active work in progress. The central thesis and themes are established, while the manuscript, chapter sequence, excerpts, stories, and publication timing are still being developed.</p>
      </aside>
    </InteriorPage>
  );
}
