import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

export const metadata = {
  title: "Your Way",
  description: "Your Way is the agency layer of The Way: reflect, question, test, adapt, and decide what inherited wisdom means in your own life.",
};

export default function YourWayPage() {
  return (
    <InteriorPage eyebrow="Your Way" title="Do not inherit someone else’s conclusions unchanged." wide>
      <div className="genome-lead-grid">
        <div>
          <p className="lead">The Way can give you a stronger starting point. It cannot decide your destination. Your Way is your evolving response to what you inherited, what reality teaches you, and what you choose to do with both.</p>
          <p>You do not need to agree with Darren. You do not need to reproduce his life, values, methods, career, family choices, or conclusions. The constitutional question is whether something here helps you see more clearly and choose more deliberately.</p>
        </div>
        <aside className="steward-card">
          <div className="eyebrow bronze">Constitutional safeguard</div>
          <h2>Wisdom should expand agency, not replace it.</h2>
          <p>Advice may guide. Experience may inform. Evidence may challenge. But the person must still choose.</p>
        </aside>
      </div>

      <section>
        <div className="eyebrow bronze">A simple practice</div>
        <h2>Reflect → Question → Test → Adapt → Act</h2>
        <div className="genome-cycle" aria-label="Reflect, question, test, adapt, act">
          <div><span>01</span><strong>Reflect</strong><p>What does this bring to mind from my own life?</p></div>
          <div><span>02</span><strong>Question</strong><p>What assumptions, values, or context shaped this lesson?</p></div>
          <div><span>03</span><strong>Test</strong><p>Where does it fit my reality—and where might it fail?</p></div>
          <div><span>04</span><strong>Adapt</strong><p>What must change for the principle to travel responsibly into my context?</p></div>
          <div><span>05</span><strong>Act</strong><p>What, if anything, should I now do differently?</p></div>
        </div>
      </section>

      <section className="genome-layers">
        <div className="eyebrow bronze">Questions for Your Way</div>
        <h2>Use the work as a mirror, not a script.</h2>
        <div className="layer-grid">
          <article><h3>After a story</h3><p>What part of this experience resembles mine? What important differences make the analogy weaker?</p></article>
          <article><h3>After a principle</h3><p>Where has this been true in my life? Where have I seen an exception?</p></article>
          <article><h3>After a Letter</h3><p>What would I see differently? What new evidence could change either of our minds?</p></article>
          <article><h3>After Book 1</h3><p>What have I inherited that deserves gratitude, testing, correction, or preservation?</p></article>
          <article><h3>After Book 2</h3><p>Who may be able to teach me something that rank, age, status, or familiarity has made me less willing to hear?</p></article>
          <article><h3>After D.O.T.S.</h3><p>What domain labels or organizational boundaries may be narrowing the solution space?</p></article>
        </div>
      </section>

      <section className="genome-boundary">
        <div className="eyebrow bronze">Reality has the right to change our minds</div>
        <h2>Changing your mind can be evidence that the system is working.</h2>
        <p>The Way does not reward loyalty to an old conclusion merely because it was inherited, published, respected, or once useful. Better evidence, deeper understanding, changed circumstances, and lived consequences can justify revision.</p>
        <p>Preserve what you learned from the old map. Then draw a better one for the terrain you actually face.</p>
      </section>

      <section className="genome-invitation">
        <div className="eyebrow bronze">Next movement</div>
        <h2>Your Way becomes The Way Forward when reflection becomes direction.</h2>
        <p className="lead">The Way Forward is not a submission form. It is the direction you choose when inherited wisdom meets present reality.</p>
        <div className="actions"><Link className="button button-dark" href="/the-way-forward/">Explore The Way Forward</Link><Link className="text-link" href="/explore/">Keep exploring →</Link></div>
      </section>
    </InteriorPage>
  );
}
