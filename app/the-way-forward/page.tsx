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
          <p>Your direction may involve building, healing, learning, serving, changing course, strengthening a relationship, becoming more independent, becoming more connected, pursuing greater achievement, choosing less, letting go, or beginning again.</p>
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
          <article><h3>Begin again</h3><p>A stronger starting point does not eliminate failure. It can make rebuilding more informed, more humane, and more possible.</p></article>
        </div>
      </section>

      <section className="genome-boundary">
        <div className="eyebrow bronze">The recursive model</div>
        <h2>The Way Forward can become part of someone else&apos;s starting point.</h2>
        <p>When you act, reality answers. When you reflect on what happened, experience can become learning. If that learning is worth preserving, you may eventually pass it forward as a story, correction, question, practice, discovery, or new connection.</p>
        <p>That contribution is a later movement. The Way Forward begins with living, not publishing.</p>
      </section>

      <section className="genome-invitation">
        <div className="eyebrow bronze">Pass it forward</div>
        <h2>What did life teach you that may help someone else begin stronger?</h2>
        <p className="lead">Contribution is optional. When something has been lived, tested, and reflected upon long enough to become useful to another person, the public Genome can preserve selected learning with attribution, consent, and context intact.</p>
        <div className="actions"><Link className="button button-dark" href="/contribute/">Pass Something Forward</Link><Link className="text-link" href="/shared-wisdom/">Explore Shared Wisdom →</Link></div>
      </section>
    </InteriorPage>
  );
}
