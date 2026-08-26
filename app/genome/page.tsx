import Link from 'next/link';
import { InteriorPage } from '@/components/InteriorPage';

export const metadata = {
  title: 'The Dang Genome',
  description: 'The public expression of a living body of ideas, stories, lessons, and wisdom preserved, connected, improved, and passed forward.'
};

const cycle = ['Receive','Learn','Question','Connect','Create','Apply','Improve','Pass Forward'];

export default function GenomePage(){
  return <InteriorPage eyebrow="The Dang Genome" title="A living body of wisdom, built to travel." wide>
    <div className="genome-lead-grid">
      <div>
        <p className="lead">DarrenDang.com is the public home of The Dang Genome: ideas, stories, lessons, frameworks, books, writing, talks, and shared wisdom connected so that useful learning can travel farther than the person who first had it.</p>
        <p>The Genome begins with Darren&apos;s lived experience and work, but it is not meant to end there. Its deeper purpose is stewardship: preserve what matters, connect what can teach us, improve what we can, and pass something better forward.</p>
      </div>
      <aside className="steward-card">
        <div className="eyebrow bronze">Identity</div>
        <h2>I am a steward of wisdom.</h2>
        <p>Stewardship is not ownership. It means caring for what was received, giving credit to its sources, testing it against experience, and leaving it in a form someone else can question and improve.</p>
      </aside>
    </div>

    <section className="genome-purpose" aria-labelledby="genome-purpose-title">
      <div className="eyebrow bronze">Why the Genome exists</div>
      <h2 id="genome-purpose-title">Preserve wisdom as intentionally as we preserve wealth.</h2>
      <div className="purpose-grid">
        <article><span>Mission</span><h3>Help people preserve, connect, and pass forward wisdom, so those who come after inherit a stronger starting point.</h3></article>
        <article><span>Vision</span><h3>A world where wisdom is preserved as intentionally as wealth and passed forward as naturally as love.</h3></article>
        <article><span>North Star</span><h3>Leave those who come after us with a stronger starting point.</h3></article>
      </div>
    </section>

    <section>
      <div className="eyebrow bronze">How wisdom moves</div>
      <h2>The Genome is a cycle, not an archive.</h2>
      <p>Life creates experience. Experience becomes story. Story can become a lesson, idea, framework, or question. Those ideas are applied, challenged, connected to other domains, and improved through conversation. What survives that process becomes more useful to pass forward.</p>
      <div className="genome-cycle" aria-label="Receive, learn, question, connect, create, apply, improve, pass forward">
        {cycle.map((item,index)=><div key={item}><span>{String(index+1).padStart(2,'0')}</span><strong>{item}</strong></div>)}
      </div>
    </section>

    <section className="genome-layers">
      <div className="eyebrow bronze">The public ecosystem</div>
      <h2>Different forms. One connected body of thought.</h2>
      <div className="layer-grid">
        <article><h3>Ideas</h3><p>Durable principles and questions that recur across domains.</p><Link className="text-link" href="/ideas/">Explore Ideas →</Link></article>
        <article><h3>Stories</h3><p>Lived experiences that give the ideas provenance, tension, and human consequence.</p></article>
        <article><h3>Books & Writing</h3><p>Longer expressions where ideas are developed, tested, and connected.</p><Link className="text-link" href="/books/">Explore Books →</Link></article>
        <article><h3>D.O.T.S.</h3><p>A way of seeing problems by moving from labels to structure and widening the search space.</p><Link className="text-link" href="/dots/">Explore D.O.T.S. →</Link></article>
        <article><h3>Practice</h3><p>Papers and institutional work show what happens when ideas meet real decisions and constraints.</p><Link className="text-link" href="/papers/">Explore Papers →</Link></article>
        <article><h3>Shared Wisdom</h3><p>Selected contributions from other people—kept distinct in provenance, but connected where the learning is real.</p><Link className="text-link" href="/shared-wisdom/">Explore Shared Wisdom →</Link></article>
      </div>
    </section>

    <section className="genome-boundary">
      <div className="eyebrow bronze">Public home. Private stewardship.</div>
      <h2>The website is the curated public expression—not the entire system.</h2>
      <p>Private family records, unpublished manuscripts, internal governance, confidential institutional material, proprietary methods, and editorial review notes do not belong in the public Genome merely because they exist. Publication is intentional.</p>
      <p>That boundary protects the people behind the stories and keeps public material useful, attributable, and worthy of trust.</p>
    </section>

    <section className="genome-invitation">
      <div className="eyebrow bronze">Add a dot</div>
      <h2>What have you learned that is worth passing forward?</h2>
      <p className="lead">The Genome should grow by listening. Readers can contribute a short reflection, a longer story, or a brief video for editorial review.</p>
      <div className="actions"><Link className="button button-dark" href="/share/">Share what you&apos;ve learned</Link><Link className="text-link" href="/shared-wisdom/">Explore Shared Wisdom →</Link></div>
    </section>
  </InteriorPage>
}
