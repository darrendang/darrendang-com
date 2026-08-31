import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

export const metadata = {
  title: "The Way in Motion",
  description: "The Way in Motion: case studies and demonstrated practice showing what happens when ideas meet reality, evidence, consequences, limits, and revision.",
};

export default function TheWayInMotionPage() {
  return (
    <InteriorPage eyebrow="The Way in Motion" title="What happens when an idea meets reality." wide>
      <div className="genome-lead-grid">
        <div>
          <p className="lead">Ideas become more useful when they encounter evidence, constraints, consequences, other people, and conditions we did not control.</p>
          <p>The Way in Motion is where those encounters are preserved as cases—not as proof that an idea always works, but as evidence about what happened, what did not, and what should change next.</p>
        </div>
        <aside className="steward-card">
          <div className="eyebrow bronze">Demonstrated practice</div>
          <h2>Context → Intervention → Observed Change → Evidence &amp; Limits → Interpretation</h2>
          <p>A case should make the evidence and the boundary of the evidence visible. Interpretation may follow the facts; it should not silently replace them.</p>
        </aside>
      </div>

      <section className="genome-layers">
        <div className="eyebrow bronze">Why a separate stream</div>
        <h2>A story, an argument, and a case are not the same thing.</h2>
        <div className="layer-grid">
          <article><div className="book-movement">BOOKS</div><h3>Preserve what has matured.</h3><p>Books hold sustained stories, principles, lessons, and methods in durable form.</p><Link className="text-link" href="/books/">Explore the books →</Link></article>
          <article><div className="book-movement">THE WAY PAPERS</div><h3>Develop the idea.</h3><p>Papers examine propositions, frameworks, tensions, evidence, and open questions.</p><Link className="text-link" href="/papers/">Explore Papers →</Link></article>
          <article><div className="book-movement">LETTERS</div><h3>Stay close to the human experience.</h3><p>Letters begin with lived moments and what Darren is still learning from them.</p><Link className="text-link" href="/letters/">Read Letters →</Link></article>
          <article><div className="book-movement">THE WAY IN MOTION</div><h3>Examine what actually happened.</h3><p>Cases preserve practice, consequences, counterevidence, limits, and what the experience changed.</p></article>
        </div>
      </section>

      <section className="genome-boundary">
        <div className="eyebrow bronze">Publication discipline</div>
        <h2>Cases appear when the evidence has earned a case.</h2>
        <p className="lead">There is no case-study content treadmill. A case is released only after its evidence, provenance, privacy, interpretation, and public/private boundaries have been reviewed.</p>
        <p>No unpublished case is being previewed here. When the first public case is ready, it will appear on this page with the evidence and limitations that belong with it.</p>
      </section>

      <section className="genome-boundary">
        <div className="eyebrow bronze">Explore the connected ecosystem</div>
        <h2>Follow the idea in the direction that is useful to you.</h2>
        <div className="actions">
          <Link className="button button-dark" href="/explore/">Explore The Way</Link>
          <Link className="text-link" href="/papers/">Explore Papers &amp; Talks →</Link>
        </div>
      </section>
    </InteriorPage>
  );
}
