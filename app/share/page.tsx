import Link from 'next/link';
import { InteriorPage } from '@/components/InteriorPage';

export const metadata = {
  title: 'Contribution Intake Temporarily Closed',
  description: 'Rich public contribution intake is temporarily closed while the production governance required by The Way Contribution Architecture 1.0 is completed.'
};

export default function ShareWisdomPage(){
  return <InteriorPage eyebrow="Pass It Forward · Contribution Intake" title="Public contribution intake is temporarily closed." wide>
    <div className="genome-lead-grid">
      <div>
        <p className="lead">The earlier private-review workflow remains preserved, but new rich public submissions are paused while the contribution system is reconciled to The Way Contribution Architecture 1.0.</p>
        <p>This is a governance pause, not a retreat from Shared Wisdom. The objective is to reopen only when the process can protect contributor ownership, authority, privacy, minors and vulnerable contributors, correction and withdrawal rights, storage and AI-analysis boundaries, and publication permission with the rigor the philosophy now requires.</p>
      </div>
      <aside className="steward-card">
        <div className="eyebrow bronze">Why pause?</div>
        <h2>Contribution is not acquisition.</h2>
        <p>People are not content sources. The system should be ready to receive a story before asking someone to entrust it.</p>
      </aside>
    </div>

    <section className="genome-purpose">
      <div className="eyebrow bronze">Before reopening</div>
      <h2>The production gate requires eight controls.</h2>
      <div className="layer-grid">
        <article><h3>Permission Schema</h3><p>Granular authority and permitted-use choices.</p></article>
        <article><h3>Review Protocol</h3><p>Clear acceptance, restriction, decline, preservation, review, and decision rules.</p></article>
        <article><h3>Minor / Vulnerable Policy</h3><p>Heightened consent, privacy, retention, and withdrawal safeguards.</p></article>
        <article><h3>Acceptance & Safety</h3><p>Handling for unlawful, unsafe, abusive, malicious, or disproportionately harmful material.</p></article>
        <article><h3>Public UX & Notices</h3><p>Plain-language explanation of rights, choices, risks, and boundaries.</p></article>
        <article><h3>Correction & Withdrawal</h3><p>A route to challenge representation and withdraw future controlled publication.</p></article>
        <article><h3>Storage & AI Controls</h3><p>Enforceable privacy, retention, access, and analysis boundaries.</p></article>
        <article><h3>Legal Review</h3><p>Appropriate review of licensing, privacy, copyright, retention, deletion, terms, and jurisdiction.</p></article>
      </div>
    </section>

    <section className="genome-boundary">
      <div className="eyebrow bronze">Existing work remains preserved</div>
      <h2>The private review infrastructure is not being discarded.</h2>
      <p>The review console, storage pathway, publication workflow, and prior permission records remain part of the implementation history. They can be upgraded and reused once the complete production gate is satisfied.</p>
      <p>No new public submission form is exposed on this page while the gate remains open.</p>
    </section>

    <section className="genome-invitation">
      <div className="eyebrow bronze">In the meantime</div>
      <h2>Explore what has already been shared—or use The Way in your own life.</h2>
      <div className="actions">
        <Link className="button button-dark" href="/shared-wisdom/">Explore Shared Wisdom</Link>
        <Link className="text-link" href="/use-the-way/">Use the Five Movements →</Link>
      </div>
    </section>
  </InteriorPage>
}
