import Image from "next/image";
import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";
import { ConnectedDots } from "@/components/ConnectedDots";

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
    type: "Selected Chapter · Origin",
    title: "The Pattern I Lived Before I Named It",
    copy: "For years, Darren kept borrowing ideas from places that seemed unrelated to the problem in front of him. Only later did he recognize the pattern: sometimes you live a way of thinking before you know how to name it.",
  },
  {
    number: "02",
    stage: "Middle",
    type: "Selected Chapter · Transfer",
    title: "A Map Is Not a Script",
    copy: "Experience can give us a map. Another discipline can give us a map. Neither tells us exactly what to do in new terrain. The useful question is where the underlying structure matches, where it breaks, and what must change.",
  },
  {
    number: "03",
    stage: "Later",
    type: "Selected Chapter · Ownership",
    title: "Now You Look",
    copy: "The method matters only if the reader begins seeing on their own. The late-book movement gradually transfers the act of looking, testing, and creating from author to reader.",
  },
];

export default function DotsBook() {
  return (
    <InteriorPage eyebrow="Book 3 · First Print Proof" title="D.O.T.S." wide>
      <div className="development-book-grid">
        <div className="development-cover-wrap">
          <Image src="/images/dots-cover.webp" width={480} height={720} alt="Current cover for D.O.T.S. by Darren Dang." className="development-cover" sizes="(max-width: 900px) 76vw, 34vw" priority />
          <p className="book-caption">First hard-copy proof. The physical book is now being reviewed before final production files are locked.</p>
        </div>
        <div className="development-copy">
          <div className="book-status">First Print Proof</div>
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
          <h2 id="inside-book-3-title">Three glimpses at how a connection becomes a new way of seeing.</h2>
          <p className="lead">The book moves from recognizing a pattern Darren had lived before naming it, to learning how to transfer ideas carefully, and finally to handing the lens to the reader.</p>
        </div>
        <div className="sample-path">
          {samples.map((sample) => (
            <article className="sample-card" key={sample.number}>
              <div className="sample-marker" aria-hidden="true"><span>{sample.number}</span></div>
              <div className="sample-stage">{sample.stage}</div>
              <div className="sample-type">{sample.type}</div>
              <h3>{sample.title}</h3>
              <p>{sample.copy}</p>
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
        <p><em>D.O.T.S.</em> is in first hard-copy proof. The title, core line, central thesis, high-level method, and reader-centered direction are established. Proof review may still refine final manuscript wording, sequencing, and production files before publication authority is locked.</p>
      </aside>
    </InteriorPage>
  );
}
