import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

export const metadata = {
  title: "Your Way",
  description: "Your Way is the evolving lived expression that emerges as you receive, examine, connect, practice, and pass forward in your own context.",
};

export default function YourWayPage() {
  return (
    <InteriorPage eyebrow="Your Way" title="Do not inherit someone else’s conclusions unchanged." wide>
      <div className="genome-lead-grid">
        <div>
          <p className="lead">The Way can give you a stronger starting point. It cannot decide your destination. Your Way is the evolving lived pattern that emerges as inherited wisdom meets your experience, context, relationships, choices, and consequences.</p>
          <p>You do not need to agree with Darren. You do not need to reproduce his life, values, methods, career, family choices, or conclusions. The constitutional question is whether something here helps you see more clearly and choose more deliberately.</p>
        </div>
        <aside className="steward-card">
          <div className="eyebrow bronze">Constitutional safeguard</div>
          <h2>Wisdom should expand agency, not replace it.</h2>
          <p>Advice may guide. Experience may inform. Evidence may challenge. But the person must still choose.</p>
        </aside>
      </div>

      <section>
        <div className="eyebrow bronze">A portable practice</div>
        <h2>Receive → Examine → Connect → Practice → Pass Forward</h2>
        <p className="lead">These are recursive movements, not a checklist. Your Way is not a sixth movement; it is what develops as you use them across life.</p>
        <div className="genome-cycle" aria-label="Receive, examine, connect, practice, pass forward">
          <div><span>01</span><strong>Receive</strong><p>What has come to me, and what is life teaching me now?</p></div>
          <div><span>02</span><strong>Examine</strong><p>What is true, what is interpretation, and what deserves reconsideration?</p></div>
          <div><span>03</span><strong>Connect</strong><p>What relationships, perspectives, structures, or consequences am I missing?</p></div>
          <div><span>04</span><strong>Practice</strong><p>What happens when this meets real life—and should I continue, change, pause, or stop?</p></div>
          <div><span>05</span><strong>Pass Forward</strong><p>What is worth preserving, correcting, adding, and leaving with freedom?</p></div>
        </div>
        <div className="section-link"><Link className="text-link" href="/use-the-way/">Use the Five Movements in depth →</Link></div>
      </section>

      <section className="genome-layers">
        <div className="eyebrow bronze">Questions for Your Way</div>
        <h2>Use the work as a mirror, not a script.</h2>
        <div className="layer-grid">
          <article><h3>After a story</h3><p>What part of this experience resembles mine? What important differences make the analogy weaker?</p></article>
          <article><h3>After a principle</h3><p>Where has this been true in my life? Where have I seen an exception?</p></article>
          <article><h3>After a Letter</h3><p>What would I see differently? What new evidence could change either of our minds?</p></article>
          <article><h3>After Book 1</h3><p>What have I inherited that deserves gratitude, examination, correction, or preservation?</p></article>
          <article><h3>After Book 2</h3><p>Who may be able to teach me something that rank, age, status, or familiarity has made me less willing to hear?</p></article>
          <article><h3>After D.O.T.S.</h3><p>What domain labels or organizational boundaries may be narrowing the solution space?</p></article>
        </div>
      </section>

      <section className="genome-boundary">
        <div className="eyebrow bronze">Reality has the right to change our minds</div>
        <h2>Changing your mind can be evidence that the system is working.</h2>
        <p>The Way does not reward loyalty to an old conclusion merely because it was inherited, published, respected, or once useful. Better evidence, deeper understanding, changed circumstances, and lived consequences can justify revision.</p>
        <p>Thoughtful continuity is also legitimate. Examination can give you better reasons to preserve something rather than change it.</p>
        <blockquote>Action is not inherently progress.</blockquote>
      </section>

      <section className="genome-invitation">
        <div className="eyebrow bronze">One possible direction</div>
        <h2>Reflection may become direction when your context asks you to choose.</h2>
        <p className="lead">The Way Forward is not a reward for completing a sequence. It can emerge at any point and remains yours to choose.</p>
        <div className="actions"><Link className="button button-dark" href="/the-way-forward/">Explore The Way Forward</Link><Link className="text-link" href="/explore/">Keep exploring →</Link></div>
      </section>
    </InteriorPage>
  );
}
