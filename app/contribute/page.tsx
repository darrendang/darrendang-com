import Link from 'next/link';
import { InteriorPage } from '@/components/InteriorPage';

export const metadata = {
  title: 'Pass It Forward',
  description: 'Understand contribution and stewardship in The Way: add stories, corrections, questions, practices, counterexamples, connections, and creations without surrendering ownership or agency.'
};

export default function ContributePage(){
  return <InteriorPage eyebrow="Pass It Forward" title="What might your lived experience add for someone who comes after you?" wide>
    <div className="genome-lead-grid">
      <div>
        <p className="lead">Contribution is optional. It is what may happen when lived experience becomes specific enough to preserve, correct, question, connect, or offer as a stronger starting point for someone else.</p>
        <p>Your contribution remains yours. Offering something does not make it Darren&apos;s idea, does not make it canon, does not transfer ownership, and does not authorize publication automatically.</p>
        <p>If you are still deciding what your own next direction requires, begin with <Link className="text-link" href="/the-way-forward/">The Way Forward</Link>.</p>
      </div>
      <aside className="steward-card">
        <div className="eyebrow bronze">A possible human journey</div>
        <h2>Curiosity → Connection → Discovery → Transformation → Contribution → Stewardship</h2>
        <p>This is a map of relationship and responsibility—not a required sequence, score, or ladder of people.</p>
      </aside>
    </div>

    <section className="genome-purpose" aria-labelledby="contribution-types-title">
      <div className="eyebrow bronze">What contribution can mean</div>
      <h2 id="contribution-types-title">Add knowledge or perspective without surrendering your story.</h2>
      <div className="purpose-grid">
        <article><span>Experience</span><h3>Story · Reflection · Practice</h3><p>What happened, what changed your thinking, and what did living it reveal?</p></article>
        <article><span>Challenge</span><h3>Correction · Question · Counterexample</h3><p>Where might an inherited idea, Darren&apos;s interpretation, or existing public understanding be incomplete?</p></article>
        <article><span>Creation</span><h3>Connection · Creation · Source Referral</h3><p>What new relationship, artifact, method, source, or perspective may help someone see more clearly?</p></article>
      </div>
    </section>

    <section className="shared-wisdom-home">
      <div className="shared-wisdom-home-grid">
        <div>
          <div className="eyebrow bronze">Production gate</div>
          <h2>Rich public contribution intake is temporarily closed.</h2>
          <p className="lead">The earlier private-review workflow remains preserved, but the public intake surface is paused while the governance catches up to the newly canonical Contribution Architecture 1.0.</p>
          <p>Before reopening, the system must complete contribution permission, review, minor/vulnerable contributor, acceptance and safety, correction/representation challenge/withdrawal, storage and AI-analysis, public notice, and appropriate legal controls.</p>
          <div className="actions">
            <Link className="button button-dark" href="/shared-wisdom/">Explore Shared Wisdom</Link>
            <Link className="text-link" href="/use-the-way/">Use the Five Movements →</Link>
          </div>
        </div>
        <div className="shared-wisdom-principles">
          <article><span>OWNERSHIP</span><strong>Contribution is not surrender.</strong><p>Submission must never silently transfer identity, authorship, or future control.</p></article>
          <article><span>AUTHORITY</span><strong>Possession is not ownership.</strong><p>The system must distinguish who supplied material, who created or experienced it, what authority exists, and what uses are allowed.</p></article>
          <article><span>PUBLICATION</span><strong>Canonization and publication are separate.</strong><p>A contribution can be useful, private, or canonical without becoming public.</p></article>
        </div>
      </div>
    </section>

    <section className="genome-boundary">
      <div className="eyebrow bronze">The constitutional test</div>
      <h2>Does this help someone start stronger without narrowing their future?</h2>
      <p>Disagreement with Darren, existing canon, family memory, community consensus, or AI must not reduce a contribution&apos;s eligibility for fair review. Correction and dissent are part of teachability.</p>
      <p>The goal is not agreement. The goal is responsible learning that can travel with attribution, privacy, dignity, and freedom intact.</p>
    </section>
  </InteriorPage>
}
