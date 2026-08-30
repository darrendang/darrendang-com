import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

export const metadata = {
  title: "The Way Forward",
  description: "The Way Forward is the direction you choose when inherited wisdom meets present reality—personal, contextual, and accountable to consequence.",
};

export default function TheWayForwardPage() {
  return (
    <InteriorPage eyebrow="The Way Forward" title="What does your next context require?" wide>
      <div className="genome-lead-grid">
        <div>
          <p className="lead">The Way Forward is the direction you choose when inherited wisdom meets present reality. It is not one universal definition of progress, and it is not the same thing as contributing content to this website.</p>
          <p>Your direction may involve building, healing, learning, serving, changing course, strengthening a relationship, becoming more independent, becoming more connected, pursuing greater achievement, choosing less, waiting, letting go, or beginning again.</p>
        </div>
        <aside className="steward-card">
          <div className="eyebrow bronze">The test</div>
          <h2>Progress is personal. Consequences are real.</h2>
          <p>A claimed improvement should still be questioned if it destroys dignity, diminishes agency, ignores evidence, harms others without justification, or leaves a narrower future.</p>
        </aside>
      </div>

      <section>
        <div className="eyebrow bronze">From reflection to direction</div>
        <h2>Choose deliberately, not mechanically.</h2>
        <div className="purpose-grid">
          <article><span>SEE</span><h3>What is actually true now?</h3><p>Separate the current terrain from the map you inherited. Notice evidence, relationships, constraints, opportunities, and consequences.</p></article>
          <article><span>CHOOSE</span><h3>What direction fits this context?</h3><p>Do not ask which path looks most like someone else&apos;s. Ask what responsible progress means here.</p></article>
          <article><span>LEARN</span><h3>What does the outcome teach you?</h3><p>Practice creates consequences. Consequences create new evidence. New evidence should be allowed to revise the direction.</p></article>
        </div>
      </section>

      <section className="genome-layers">
        <div className="eyebrow bronze">The Way Forward can look different</div>
        <h2>There is no single approved shape of progress.</h2>
        <div className="layer-grid">
          <article><h3>Build</h3><p>Create a capability, relationship, institution, work, system, or opportunity that did not exist before.</p></article>
          <article><h3>Repair</h3><p>Heal something damaged, correct an error, restore trust, or make amends where responsibility requires it.</p></article>
          <article><h3>Change direction</h3><p>Leave a path that no longer fits simply because it once made sense or others still expect it.</p></article>
          <article><h3>Deepen</h3><p>Become more capable, faithful, present, skilled, connected, disciplined, or thoughtful in something that already matters.</p></article>
          <article><h3>Choose less</h3><p>Progress can mean removing, simplifying, slowing down, declining an opportunity, or protecting what matters from unnecessary expansion.</p></article>
          <article><h3>Wait</h3><p>Responsible non-action can mean listening, gathering evidence, preserving optionality, letting another person choose, or revisiting later.</p></article>
        </div>
      </section>

      <section className="genome-boundary">
        <div className="eyebrow bronze">The recursive model</div>
        <h2>What you learn may eventually become part of someone else&apos;s starting point.</h2>
        <p>When you act—or deliberately do not act—reality answers. Reflection can turn consequence into learning. Some learning may later be worth preserving as a story, correction, question, practice, discovery, or new connection.</p>
        <p>Pass Forward is a separate, optional act. The Way Forward begins with living, not publishing.</p>
      </section>

      <section className="genome-invitation">
        <div className="eyebrow bronze">Use The Way</div>
        <h2>Need a practice for thinking through the decision?</h2>
        <p className="lead">Receive, Examine, Connect, Practice, and Pass Forward can help you work the question without deciding the answer for you.</p>
        <div className="actions"><Link className="button button-dark" href="/use-the-way/">Use the Five Movements</Link><Link className="text-link" href="/contribute/">Understand Pass Forward →</Link></div>
      </section>
    </InteriorPage>
  );
}
