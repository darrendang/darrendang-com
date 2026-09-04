import Link from 'next/link';
import { InteriorPage } from '@/components/InteriorPage';

export const metadata = {
  title: 'The Dang Genome',
  description: 'The living body of knowledge, wisdom, experience, relationships, ideas, and creations through which The Way is preserved, connected, tested, expanded, and passed forward.'
};

const cycle = ['Curiosity','Connection','Discovery','Transformation','Contribution','Stewardship'];

export default function GenomePage(){
  return <InteriorPage eyebrow="The Dang Genome" title="A living body of wisdom, built to evolve." wide>
    <div className="genome-lead-grid">
      <div>
        <p className="lead">The Dang Genome is the first living family implementation of The Way: a governed body of knowledge, wisdom, experience, relationships, ideas, lineage, and creations. DarrenDang.com is the public experience layer—not the Genome itself and not the entirety of The Way.</p>
        <p>The Genome begins with Darren&apos;s ideas, stories, relationships, books, Letters, frameworks, and lived experience. It may grow through carefully governed contributions from other people while preserving authorship, provenance, context, privacy, permission, correction, and editorial status.</p>
      </div>
      <aside className="steward-card">
        <div className="eyebrow bronze">The constitutional relationship</div>
        <h2>The Way → Dang Genome → DarrenDang.com</h2>
        <p>The Way is the philosophical root. The Genome is one living implementation. Dang OS privately governs provenance, review, permissions, privacy, and publication. DarrenDang.com is a governed public projection.</p>
      </aside>
    </div>

    <section className="genome-purpose" aria-labelledby="genome-purpose-title">
      <div className="eyebrow bronze">Why the Genome exists</div>
      <h2 id="genome-purpose-title">Preserve useful learning without freezing it in place.</h2>
      <div className="purpose-grid">
        <article><span>North Star</span><h3>Leave those who come after a stronger starting point and the freedom to go farther.</h3></article>
        <article><span>Guardrail</span><h3>Each generation should inherit a stronger starting point, not a narrower future.</h3></article>
        <article><span>Safeguard</span><h3>The Way provides a stronger starting point, not a predetermined destination.</h3></article>
      </div>
    </section>

    <section>
      <div className="eyebrow bronze">A possible human journey</div>
      <h2>From curiosity toward responsibility—without becoming a ladder.</h2>
      <p>People may enter through a story, idea, Letter, book, framework, disagreement, or question; move in either direction; occupy several stages at once; pause; contribute early; or leave. The journey is a map of relationship and responsibility, not a required sequence.</p>
      <div className="genome-cycle" aria-label="Curiosity, connection, discovery, transformation, contribution, stewardship">
        {cycle.map((item,index)=><div key={item}><span>{String(index+1).padStart(2,'0')}</span><strong>{item}</strong></div>)}
      </div>
    </section>

    <section className="genome-layers">
      <div className="eyebrow bronze">The knowledge graph</div>
      <h2>The Genome is defined by relationships, not folders.</h2>
      <p>One experience may become a story. A story may reveal a lesson. A lesson may become a principle, framework, Letter, book chapter, talk, or new question. A contribution may challenge an existing idea or improve it. The value is in the connections and the preserved context.</p>
      <div className="layer-grid">
        <article><h3>Ideas</h3><p>Durable principles, tensions, and questions that recur across domains.</p><Link className="text-link" href="/ideas/">Explore Ideas →</Link></article>
        <article><h3>Stories & Lessons</h3><p>Lived experiences that give ideas provenance, tension, context, and human consequence.</p></article>
        <article><h3>Books</h3><p>Major artifacts where connected ideas are developed into sustained bodies of thought.</p><Link className="text-link" href="/books/">Explore Books →</Link></article>
        <article><h3>Letters</h3><p>Ongoing reflections that preserve voice, context, unfinished questions, and learning still in motion.</p><Link className="text-link" href="/letters/">Read Letters →</Link></article>
        <article><h3>D.O.T.S.</h3><p>One signature method inside the ecosystem for seeing structural relationships and creating adapted responses.</p><Link className="text-link" href="/dots/">Explore D.O.T.S. →</Link></article>
        <article><h3>Contributions</h3><p>Stories, reflections, corrections, questions, practices, counterexamples, connections, creations, and source referrals from other people—kept distinct in provenance and governed separately from publication.</p><Link className="text-link" href="/contribute/">How contribution works →</Link></article>
      </div>
    </section>

    <section className="genome-boundary">
      <div className="eyebrow bronze">Public experience. Private stewardship.</div>
      <h2>Dang OS governs what the public should not have to see.</h2>
      <p>Private family records, unpublished manuscripts, internal governance, confidential institutional material, proprietary methods, permissions, editorial review notes, and sensitive source material do not belong on the public site merely because they exist.</p>
      <p>Dang OS is the private operating system beneath the Genome: governance, taxonomy, provenance, workflows, AI processes, review, permissions, and publishing controls. That boundary protects people and makes public material more trustworthy.</p>
    </section>

    <section className="genome-invitation">
      <div className="eyebrow bronze">Pass It Forward</div>
      <h2>Contribution belongs in the architecture—but intake should not outrun governance.</h2>
      <p className="lead">Rich public contribution intake is temporarily closed while the permission, safety, minor/vulnerable, correction and withdrawal, storage/AI, and legal production controls are completed. The principle of contribution remains active even while the intake surface is paused.</p>
      <div className="actions"><Link className="button button-dark" href="/contribute/">Understand Pass Forward</Link><Link className="text-link" href="/the-way-forward/">The Way Forward is your direction →</Link></div>
    </section>
  </InteriorPage>
}
