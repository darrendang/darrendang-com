import Link from 'next/link';
import { InteriorPage } from '@/components/InteriorPage';

export const metadata = {
  title: 'Pass It Forward',
  description: 'Pass forward a story, lesson, question, correction, perspective, or new connection for private editorial review and possible preservation.'
};

export default function ContributePage(){
  return <InteriorPage eyebrow="Pass It Forward" title="What has life taught you that may help someone who comes after you?" wide>
    <div className="genome-lead-grid">
      <div>
        <p className="lead">The Way Forward begins with the direction you choose and live. Contribution comes later, when experience has taught you something specific enough that it may become a stronger starting point for someone else.</p>
        <p>Your contribution remains yours. Submission does not make it Darren&apos;s idea, does not make it canon, and does not publish it automatically. The purpose is stewardship: preserve useful learning with its source and context intact.</p>
        <p>If you are still deciding what your own next direction requires, begin with <Link className="text-link" href="/the-way-forward/">The Way Forward</Link>.</p>
      </div>
      <aside className="steward-card">
        <div className="eyebrow bronze">Reader journey</div>
        <h2>Curiosity → Connection → Discovery → Transformation → Contribution → Stewardship</h2>
        <p>Contribution is not an engagement tactic. It is the point where lived and reflected experience can become part of a stronger inheritance for someone else.</p>
      </aside>
    </div>

    <section className="genome-purpose" aria-labelledby="contribution-types-title">
      <div className="eyebrow bronze">What you can pass forward</div>
      <h2 id="contribution-types-title">Add something specific enough to be useful.</h2>
      <div className="purpose-grid">
        <article><span>Story or lesson</span><h3>What happened, and what changed your thinking?</h3><p>Specific experience gives a lesson context, limits, and human consequence.</p></article>
        <article><span>Question or correction</span><h3>Where might an inherited idea be incomplete?</h3><p>The Way should become more accurate and more useful when new evidence or perspective deserves to change it.</p></article>
        <article><span>New connection</span><h3>What dots belong together that others may keep separate?</h3><p>A contribution can connect an existing idea to another domain, experience, culture, or problem structure.</p></article>
      </div>
    </section>

    <section className="shared-wisdom-home">
      <div className="shared-wisdom-home-grid">
        <div>
          <div className="eyebrow bronze">Private review first</div>
          <h2>Stewardship before publication.</h2>
          <p className="lead">Every submission enters a private review process. Nothing publishes automatically. If something is selected, the proposed public version should return to the contributor for explicit publication approval before it appears as Shared Wisdom.</p>
          <div className="actions">
            <Link className="button button-dark" href="/share/">Submit for Private Review</Link>
            <Link className="text-link" href="/shared-wisdom/">Explore Shared Wisdom →</Link>
          </div>
        </div>
        <div className="shared-wisdom-principles">
          <article><span>01</span><strong>Provenance stays visible.</strong><p>A contributor&apos;s story remains the contributor&apos;s story.</p></article>
          <article><span>02</span><strong>Publication requires a second yes.</strong><p>Private review permission and public publication permission are separate decisions.</p></article>
          <article><span>03</span><strong>Useful beats numerous.</strong><p>The Genome grows through judgment, not volume.</p></article>
        </div>
      </div>
    </section>

    <section className="genome-boundary">
      <div className="eyebrow bronze">The constitutional test</div>
      <h2>Does this help someone start stronger without narrowing their future?</h2>
      <p>A contribution earns a place when it adds context, evidence, experience, a useful question, a meaningful correction, or a connection that helps another person see more clearly.</p>
      <p>The goal is not agreement. The goal is responsible learning that can travel.</p>
    </section>
  </InteriorPage>
}
