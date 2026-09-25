import Image from "next/image";
import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";
import { ConnectedDots } from "@/components/ConnectedDots";
import { MusicCompanion } from "@/components/MusicCompanion";
import { shapeBeneathLyrics } from "@/lib/songLyrics";

export const metadata = {
  title: "D.O.T.S. — Book 3",
  description: "Explore Darren Dang's Book 3, D.O.T.S. — Collect Dots. Connect Dots. Create Something New. A reader-first book about seeing connections across experience and disciplines and turning them into useful possibilities.",
};

const themes = [
  ["Collect", "Notice ideas, experiences, tools, patterns, and questions before you know exactly where they will matter."],
  ["See", "Look beneath a problem's label for the structure that is actually making it hard."],
  ["Connect", "Search across disciplines, roles, cultures, and lived experience for places where the same structure appears."],
  ["Create", "Combine what fits into a new possibility, then give it enough form for reality to answer back."],
  ["Learn again", "What happens next becomes a new dot: evidence for the next round of seeing and creating."],
];

const samples = [
  {
    number: "01",
    stage: "Beginning",
    type: "Selected Prologue · Discovery",
    title: "The Idea That Did Not Belong",
    copy: "A preschool planning problem becomes clearer when a marketing idea reveals the same decision structure beneath a completely different surface.",
    href: "/books/dots/the-idea-that-did-not-belong/",
    cta: "Read the selected passage →",
  },
  {
    number: "02",
    stage: "Middle",
    type: "Selected Chapter · Search",
    title: "Who Has No Choice But to Be Good at This?",
    copy: "Instead of benchmarking only peers, D.O.T.S. asks where the same underlying problem has forced people to develop hard-earned discipline under consequence.",
    href: "/books/dots/who-has-no-choice-but-to-be-good-at-this/",
    cta: "Read the selected passage →",
  },
  {
    number: "03",
    stage: "Later",
    type: "Selected Chapter · Reality",
    title: "What Did Reality Actually Say?",
    copy: "A connection is only a candidate until evidence is allowed to challenge it. CREATE turns clever possibility into something reality can accept, change, or reject.",
    href: "/books/dots/what-did-reality-actually-say/",
    cta: "Read the selected passage →",
  },
];

export default function DotsBook() {
  return (
    <InteriorPage eyebrow="Book 3 · Physical Proof Ordered" title="D.O.T.S." wide>
      <div className="development-book-grid">
        <div className="development-cover-wrap">
          <Image src="/images/dots-cover.webp" width={480} height={720} alt="Current cover for D.O.T.S. by Darren Dang." className="development-cover" sizes="(max-width: 900px) 76vw, 34vw" priority />
          <p className="book-caption">Physical proof ordered. v6.5.4 has passed local QA and KDP Previewer; physical proof review remains the final print gate before any Gold Master or publication decision.</p>
        </div>
        <div className="development-copy">
          <div className="book-status">Physical Proof Ordered</div>
          <p className="dots-line">Collect Dots. Connect Dots. Create Something New.</p>
          <p className="lead">What can I make from everything I have learned?</p>
          <p>Book 1 begins with what life and the people before us can leave behind. Book 2 widens the circle of teachers. Book 3 asks what happens when we connect all of those dots—along with ideas from other disciplines, roles, cultures, and problems—and try to create something useful from them.</p>
          <p>D.O.T.S. is the name I eventually gave to a pattern I had been using for years: look past the label, find the underlying structure, search more widely than the obvious domain, transfer carefully, and make something new enough for reality to test.</p>
          <div className="development-actions">
            <Link className="button button-dark" href="#inside-book-3">Look Inside Book 3</Link>
            <Link className="text-link" href="/dots/">Explore the D.O.T.S. method →</Link>
          </div>
        </div>
      </div>

      <section className="development-question">
        <div className="eyebrow bronze">Why this book exists</div>
        <h2>Learning becomes more powerful when we can do something new with it.</h2>
        <p className="lead">The goal is not to collect clever analogies. It is to become better at seeing connections that matter—and disciplined enough to know when a connection does not transfer.</p>
        <p>A familiar problem label can quietly limit where we look for answers. D.O.T.S. helps widen the search before narrowing toward a choice.</p>
        <blockquote className="trilogy-map-quote">D.O.T.S. finds possibility. CREATE earns a possibility.</blockquote>
      </section>

      <MusicCompanion
        eyebrow="Listen · Hear the pattern"
        title="The Shape Beneath"
        description="A musical interpretation of the Book 3 lens: look beneath the label, notice structural resemblance across different contexts, transfer carefully, and let reality answer back."
        tracks={[
          {
            title: "The Shape Beneath",
            src: "/audio/Song-The-Shape-Beneath.mp3",
            description: "The song follows the movement from collected fragments to structure, transfer, synthesis, experimentation, and the next dot. It is an artistic interpretation; the adjacent Book 3 text remains the authority for the D.O.T.S. and CREATE methods.",
            lyrics: shapeBeneathLyrics,
          },
        ]}
        note="The song intentionally compresses and interprets the method. For the canonical D.O.T.S. and CREATE definitions, use the book and method pages."
      />

      <section className="development-themes">
        <div className="eyebrow bronze">The journey</div>
        <h2>Collect. See. Connect. Create. Learn again.</h2>
        <div className="theme-grid theme-grid-five">
          {themes.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="development-principles">
        <div className="eyebrow bronze">The method underneath</div>
        <h2>Deconstruct → Observe → Transfer → Synthesize</h2>
        <p className="lead">The technical method is available for readers who want it. But the human move comes first: describe the problem better, look somewhere new, notice what genuinely transfers, and let judgment decide what is worth making real.</p>
        <div className="principle-grid">
          <article><blockquote>The label narrows where you look. The structure expands where you can look.</blockquote><p>D.O.T.S. expands the search space before narrowing toward a solution.</p></article>
          <article><blockquote>Human judgment asks whether it is worth doing.</blockquote><p>A possibility can work technically and still fail the larger test of purpose, consequence, responsibility, or care.</p></article>
        </div>
      </section>

      <section className="book-samples" id="inside-book-3" aria-labelledby="inside-book-3-title">
        <div className="book-samples-intro">
          <div className="eyebrow bronze">Inside Book 3</div>
          <h2 id="inside-book-3-title">Three glimpses at how a connection earns the right to travel.</h2>
          <p className="lead">The book moves from discovering a useful connection outside the obvious field, to searching more deliberately, and then to letting evidence decide whether the possibility deserves to survive.</p>
        </div>
        <div className="sample-path">
          {samples.map((sample) => (
            <article className="sample-card" key={sample.number}>
              <div className="sample-marker" aria-hidden="true"><span>{sample.number}</span></div>
              <div className="sample-stage">{sample.stage}</div>
              <div className="sample-type">{sample.type}</div>
              <h3>{sample.title}</h3>
              <p>{sample.copy}</p>
              <Link className="text-link" href={sample.href}>{sample.cta}</Link>
            </article>
          ))}
        </div>
        <p className="sample-note">These are intentionally selective chapter glimpses. The fuller cases and final sequencing remain in the book.</p>
      </section>

      <section className="development-question">
        <div className="eyebrow bronze">The handoff</div>
        <h2>The point is not that you learn Darren&apos;s connections. It is that you begin seeing your own.</h2>
        <p className="lead">The late movement of the book shifts from explanation toward ownership. The reader becomes the one who notices the dots, widens the search, tests the transfer, and decides what deserves to be created.</p>
        <div className="development-actions"><Link className="button button-dark" href="/books/the-making-of-the-way/">Continue to Book 4</Link><Link className="text-link" href="/books/">Explore the five-book journey →</Link></div>
      </section>

      <ConnectedDots
        intro="Book 3 grows from dots collected across earlier life, unexpected teachers, applied work, other disciplines, and the reader's own context."
        question="What problem in your life or work may be described too narrowly by the label you currently use for it?"
        connections={[
          { label: "METHOD", title: "D.O.T.S. — the public model", copy: "Go deeper into the reusable method beneath the book.", href: "/dots/" },
          { label: "BOOK 1 CASE", title: "Connect the Dots", copy: "A real cross-domain planning case that shows the behavior before the larger method was fully named.", href: "/books/for-those-who-come-after-us/connect-the-dots/" },
          { label: "BOOK 2", title: "Wisdom Has No Rank", copy: "Book 2 widens who or what can teach us. Book 3 asks what we can create from what we learn.", href: "/books/wisdom-has-no-rank/" },
          { label: "BOOK 4", title: "The Making of The Way", copy: "The next book opens the workshop and shows how discovery itself emerged through sustained dialogue.", href: "/books/the-making-of-the-way/" },
        ]}
      />

      <aside className="development-status-note">
        <strong>Development status</strong>
        <p><em>D.O.T.S.</em> v6.5.4 is the current canonical manuscript. Local QA and KDP Previewer are complete for both print bindings; the physical proof is pending review. The book is not yet a Gold Master, and publication remains a separate decision after physical-proof acceptance.</p>
      </aside>
    </InteriorPage>
  );
}
