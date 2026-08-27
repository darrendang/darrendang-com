import Link from 'next/link';
import { InteriorPage } from '@/components/InteriorPage';

export const metadata = {
  title: 'Shared Wisdom',
  description: 'A curated collection of lessons, stories, reflections, and short videos people want to pass forward.'
};

export default function SharedWisdomPage(){
  return <InteriorPage eyebrow="Shared Wisdom" title="What others are passing forward." wide>
    <link rel="stylesheet" href="/shared-wisdom-public.css" />

    <div className="shared-intro-grid">
      <div>
        <p className="lead">Wisdom does not belong to one person. Some lessons come from parents or children. Some from work, failure, service, migration, friendship, culture, faith, loss, rebuilding, or a life very different from our own.</p>
        <p>This collection is for selected contributions that are useful enough to preserve and thoughtful enough to carry forward. Every contribution retains its own provenance. A reader&apos;s story does not become Darren&apos;s story simply because it appears here.</p>
      </div>
      <aside className="curation-card">
        <strong>Curated, not open comments.</strong>
        <p>Nothing appears automatically. Contributions pass an editorial review and a separate publishing review for relevance, clarity, permission, privacy, attribution, public presentation, and whether there is a real lesson worth passing forward.</p>
      </aside>
    </div>

    <section id="shared-wisdom-collection">
      <div className="eyebrow bronze">The collection</div>
      <h2>Selected wisdom, published intentionally.</h2>
      <p>These contributions appear only after publication approval. If an item is later removed, its private record remains preserved while the public version disappears from this collection.</p>
      <div id="published-shared-wisdom" className="shared-wisdom-feed" aria-live="polite">
        <div className="shared-wisdom-loading">Loading the published collection…</div>
      </div>
      <noscript><p>JavaScript is required to load the published Shared Wisdom collection.</p></noscript>
    </section>

    <section>
      <div className="eyebrow bronze">What you&apos;ll find</div>
      <h2>Different forms. The same question: what is worth passing forward?</h2>
      <div className="wisdom-format-grid">
        <article><span>01</span><h3>Wisdom Notes</h3><p>Short observations, principles, or reflections that can stand on their own.</p></article>
        <article><span>02</span><h3>Stories</h3><p>Experiences with enough context to understand what happened, what changed, and what was learned.</p></article>
        <article><span>03</span><h3>In Their Own Voice</h3><p>Brief video contributions that preserve the human voice behind the lesson.</p></article>
      </div>
    </section>

    <section>
      <div className="eyebrow bronze">How contributions connect</div>
      <h2>Shared wisdom can add context without erasing authorship.</h2>
      <p>A selected contribution may connect to an existing idea such as <em>Wisdom Has No Rank</em>, <em>Family Is the Long Game</em>, <em>Have a North Star</em>, or <em>Make Knowledge Travel</em>. That relationship is editorial context—not a claim that the contributor&apos;s experience originated with Darren.</p>
      <p>Over time, meaningful themes will emerge from the contributions themselves. The public taxonomy should grow from what people actually share rather than from empty categories created in advance.</p>
    </section>

    <section className="shared-callout">
      <div className="eyebrow bronze">What would you pass forward?</div>
      <h2>One story can become someone else&apos;s starting point.</h2>
      <p className="lead">Share a written reflection, attach a longer story, or submit a short video for Darren to review.</p>
      <Link className="button button-dark" href="/share/">Share what you&apos;ve learned</Link>
    </section>

    <script src="/shared-wisdom-public.js" defer></script>
  </InteriorPage>
}
