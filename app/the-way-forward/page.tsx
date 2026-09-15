import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

export const metadata = {
  title: "The Way Forward",
  description: "The Way Forward is Darren Dang's fifth book: a reader-facing synthesis that asks what you will do with what you inherit, learn, discover, create, and choose to pass forward.",
};

export default function TheWayForwardPage() {
  return (
    <InteriorPage eyebrow="Book 5 · In Development" title="What will you do with all of this?" wide>
      <div className="genome-lead-grid">
        <div>
          <p className="lead"><em>The Way Forward</em> turns the question toward the reader. After inheritance, unexpected teachers, new ways of seeing, and the making of the work itself, what do you do with what you have learned?</p>
          <p>The answer cannot simply be Darren&apos;s next answer. Your context, relationships, responsibilities, opportunities, losses, constraints, and hopes are different. The book is meant to help bring the earlier ideas into relationship without deciding your destination for you.</p>
          <p>Your way forward may involve building, healing, learning, serving, changing course, strengthening a relationship, choosing less, waiting, letting go, or beginning again.</p>
        </div>
        <aside className="steward-card">
          <div className="eyebrow bronze">The handoff</div>
          <h2>The books can offer a stronger starting point. They cannot choose your destination.</h2>
          <p>The fifth book gathers what came before, then gives the responsibility for the next move back to the reader.</p>
        </aside>
      </div>

      <section>
        <div className="eyebrow bronze">From reflection to direction</div>
        <h2>See clearly. Choose deliberately. Learn from what happens next.</h2>
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
        <div className="eyebrow bronze">Pass forward</div>
        <h2>What you learn may eventually become part of someone else&apos;s starting point.</h2>
        <p>When you act—or deliberately do not act—reality answers. Reflection can turn consequence into learning. Some learning may later be worth preserving as a story, correction, question, practice, discovery, or new connection.</p>
        <p>Passing something forward is optional. The Way Forward begins with living, not publishing.</p>
      </section>

      <section className="genome-invitation">
        <div className="eyebrow bronze">The wider journey</div>
        <h2>Want to see how the five books connect?</h2>
        <p className="lead">The book journey begins with lived experience and gradually widens toward your own choices and what you may one day pass forward.</p>
        <div className="actions"><Link className="button button-dark" href="/books/">Explore all five books</Link><Link className="text-link" href="/the-way/">Discover The Way →</Link></div>
      </section>
    </InteriorPage>
  );
}
