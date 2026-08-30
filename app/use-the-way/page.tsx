import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

export const metadata = {
  title: "Use The Way",
  description: "Use The Way through five recursive movements: Receive, Examine, Connect, Practice, and Pass Forward.",
};

const movements = [
  ["01", "Receive", "What am I carrying into this?", "Notice what you inherited and what present life is teaching you. Receiving does not mean accepting."],
  ["02", "Examine", "What might I be wrong or uncertain about?", "Separate evidence from interpretation. Questioning may strengthen, revise, suspend, or reject an inherited conclusion."],
  ["03", "Connect", "Who or what am I not seeing?", "Widen the frame across people, relationships, systems, cultures, consequences, and other perspectives. Connection is not proof."],
  ["04", "Practice", "What is the next responsible action—or non-action?", "Let an idea meet real life. Waiting, listening, gathering evidence, declining, or preserving optionality can be responsible practice."],
  ["05", "Pass Forward", "What will this leave behind?", "Preserve, correct, add, teach, create, or protect what is worth carrying forward while leaving the next person free to go farther."],
];

export default function UseTheWayPage() {
  return (
    <InteriorPage eyebrow="Use The Way" title="Five movements for thinking and living without turning wisdom into a script." wide>
      <div className="genome-lead-grid">
        <div>
          <p className="lead">The Way is a philosophical starting point. The Five Movements are a portable practice for using it in a decision, relationship, transition, problem, or season of life.</p>
          <p>They are recursive questions and feedback loops—not commandments, a productivity system, or a test of whether you are living correctly.</p>
        </div>
        <aside className="steward-card">
          <div className="eyebrow bronze">Canonical practice</div>
          <h2>Receive → Examine → Connect → Practice → Pass Forward</h2>
          <p>You may move backward, pause, repeat a movement, or discover that responsible practice is not to act yet.</p>
        </aside>
      </div>

      <section>
        <div className="eyebrow bronze">The five pocket questions</div>
        <h2>Use the question that helps you see more clearly.</h2>
        <div className="genome-cycle" aria-label="Receive, examine, connect, practice, pass forward">
          {movements.map(([number, title, question, copy]) => (
            <div key={title}><span>{number}</span><strong>{title}</strong><p><b>{question}</b></p><p>{copy}</p></div>
          ))}
        </div>
      </section>

      <section className="genome-layers">
        <div className="eyebrow bronze">Four scales of practice</div>
        <h2>The same movements can serve a moment or a lifetime.</h2>
        <div className="layer-grid">
          <article><h3>The Moment</h3><p>Use the five questions around one consequential choice.</p></article>
          <article><h3>Reflection</h3><p>Ask what happened, what changed, what deserves to remain, and what should be corrected.</p></article>
          <article><h3>Transition</h3><p>Use the movements deliberately through major changes in work, family, belief, identity, leadership, or direction.</p></article>
          <article><h3>Legacy</h3><p>Ask what should survive you and whether it creates greater possibility rather than greater obligation.</p></article>
        </div>
      </section>

      <section className="genome-boundary">
        <div className="eyebrow bronze">Two safeguards</div>
        <h2>Your Way is not a sixth movement. The Way Forward is not a required outcome.</h2>
        <p><strong>Your Way</strong> is the evolving lived pattern that emerges as you repeatedly receive, examine, connect, practice, and pass forward across life.</p>
        <p><strong>The Way Forward</strong> is the direction you choose when inherited wisdom meets present reality. It may mean continuing, changing, repairing, creating, simplifying, waiting, declining, or reconsidering later.</p>
        <blockquote>Action is not inherently progress.</blockquote>
      </section>

      <section className="genome-invitation">
        <div className="eyebrow bronze">Make it yours</div>
        <h2>The practice is useful only if it leaves the choice with you.</h2>
        <div className="actions">
          <Link className="button button-dark" href="/your-way/">Explore Your Way</Link>
          <Link className="text-link" href="/explore/">Explore by question →</Link>
        </div>
      </section>
    </InteriorPage>
  );
}
