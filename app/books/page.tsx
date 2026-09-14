import Image from "next/image";
import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

export const metadata = {
  title: "Books",
  description: "Explore The Path Forward trilogy by Darren Dang, along with The Making of The Way and The Way Forward as the wider body of work continues to develop.",
};

const books = [
  {
    status: "Published",
    title: "For Those Who Come After Us",
    subtitle: "A Life in Lessons",
    cover: "/images/for-those-who-come-after-us-front-book-v3.webp",
    width: 360,
    height: 576,
    alt: "Front cover of For Those Who Come After Us: A Life in Lessons by Darren Dang.",
    copy: "A published life in lessons about inheritance, identity, learning, failure, systems, leadership, family, purpose, and what we pass forward.",
    movement: "INHERIT",
    question: "What have I learned?",
    bridge: "Lessons can cross generations.",
    mapAction: "Receive the map.",
    href: "/books/for-those-who-come-after-us/",
  },
  {
    status: "Final Proof",
    title: "Wisdom Has No Rank",
    subtitle: "",
    cover: "/images/wisdom-has-no-rank-cover.webp",
    width: 360,
    height: 540,
    alt: "Current cover for Wisdom Has No Rank by Darren Dang.",
    copy: "A complete six-part book about reciprocal wisdom and what changes when we stop pre-ranking who or what can teach us. The manuscript and print Gold Masters are locked; final physical proof review remains the print-release gate.",
    movement: "BECOME",
    question: "Who can I learn from?",
    bridge: "Wisdom can cross hierarchy.",
    mapAction: "Question and revise the map.",
    href: "/books/wisdom-has-no-rank/",
  },
  {
    status: "First Print Proof",
    title: "D.O.T.S.",
    subtitle: "Collect Dots. Connect Dots. Create Something New.",
    cover: "/images/dots-cover.webp",
    width: 360,
    height: 540,
    alt: "Current cover for D.O.T.S. by Darren Dang.",
    copy: "A book about learning across boundaries, seeing structural relationships, expanding the search space, transferring carefully, and creating useful new possibilities. The first hard-copy proof is now in review.",
    movement: "CREATE",
    question: "What can I create from what I learn?",
    bridge: "Ideas can cross disciplines.",
    mapAction: "Explore beyond the map.",
    href: "/books/dots/",
  },
];

const currentState = [
  ["01", "For Those Who Come After Us", "Published", "The first completed public book-length expression of The Way."],
  ["02", "Wisdom Has No Rank", "Final Proof", "The manuscript and print Gold Masters are locked; final physical proof review remains the release gate."],
  ["03", "D.O.T.S.", "First Print Proof", "The first hard-copy proof has been produced and is now being reviewed."],
  ["04", "The Making of The Way", "Collaboration / Provenance Emerging", "The collaboration that helped reveal The Way becomes part of the work itself."],
  ["05", "The Way Forward", "Integration Layer", "The wider body of work is brought together without replacing the reader&apos;s ownership of what comes next."],
];

export default function Books() {
  return (
    <InteriorPage eyebrow="Books" title="A body of work in motion." wide>
      <div className="books-library-intro">
        <p className="lead">The books are major expressions of The Way—not the container for the whole philosophy. The first three form <em>The Path Forward</em> trilogy, progressively widening where learning can come from. Books 4 and 5 widen the frame again: first toward the collaboration and provenance behind the work, then toward integration.</p>
        <p>The public state now reflects where the work actually is: Book 1 is published. Book 2 is in final physical proof. Book 3 has reached its first hard-copy proof. Book 4 is where the collaboration and provenance are emerging. Book 5 is the integration layer.</p>
      </div>

      <section className="development-themes" aria-labelledby="current-state-title">
        <div className="eyebrow bronze">Current state · September 2026</div>
        <h2 id="current-state-title">The work is moving from inheritance toward integration.</h2>
        <div className="theme-grid theme-grid-five">
          {currentState.map(([number, title, status, copy]) => (
            <article key={number}>
              <small>{number}</small>
              <h3>{title}</h3>
              <div className="book-status">{status}</div>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="book-system-strip" aria-label="The Path Forward trilogy intellectual progression">
        <span>INHERIT</span><b>→</b><span>BECOME</span><b>→</b><span>CREATE</span>
      </div>

      <div className="books-library">
        {books.map((book) => (
          <article className="book-library-card" key={book.title}>
            <div className="book-library-cover">
              <Image src={book.cover} width={book.width} height={book.height} alt={book.alt} sizes="(max-width: 900px) 70vw, 27vw" />
            </div>
            <div className="book-library-copy">
              <div className="book-status">{book.status}</div>
              <div className="book-movement">{book.movement}</div>
              <h2>{book.title}</h2>
              {book.subtitle && <p className="book-library-sub"><em>{book.subtitle}</em></p>}
              <p className="book-library-question">{book.question}</p>
              <p>{book.copy}</p>
              <p className="book-library-bridge">{book.bridge}</p>
              <p className="book-library-map-action">{book.mapAction}</p>
              <Link className="text-link" href={book.href}>Explore the book →</Link>
            </div>
          </article>
        ))}
      </div>

      <section className="development-themes">
        <div className="eyebrow bronze">Book 4 · Collaboration / Provenance Emerging</div>
        <h2>The fourth work looks at how the thinking itself was made.</h2>
        <p className="lead"><em>The Path Forward</em> remains a three-book trilogy. <em>The Making of The Way</em> sits beside it as a companion work, examining the sustained human–AI dialogue through which questions changed, patterns became visible, and the larger architecture emerged.</p>

        <article className="book-library-card">
          <div className="book-library-cover">
            <Image src="/images/the-making-of-the-way-cover.webp" width={200} height={300} alt="Cover of The Making of The Way: How Conversation Becomes Discovery by Darren Dang." sizes="200px" />
          </div>
          <div className="book-library-copy">
            <div className="book-status">Collaboration / Provenance Emerging</div>
            <div className="book-movement">COMPANION WORK</div>
            <h2>The Making of The Way</h2>
            <p className="book-library-sub"><em>How Conversation Becomes Discovery</em></p>
            <p className="book-library-question">How can conversation become a mode of discovery?</p>
            <p>What began as an effort to preserve lessons for one family became something Darren did not expect: a sustained human–AI dialogue that changed the questions, the books, and eventually the larger philosophy around them. <em>The Making of The Way</em> makes that collaboration and provenance visible.</p>
            <div className="development-actions">
              <Link className="button button-dark" href="/books/the-making-of-the-way/">Explore Book 4</Link>
              <Link className="text-link" href="/ideas/generative-dialogue/">Explore Generative Dialogue →</Link>
            </div>
          </div>
        </article>
      </section>

      <section className="development-themes">
        <div className="eyebrow bronze">Book 5 · Integration Layer</div>
        <h2>The Way Forward gathers the wider body of work into a reader-owned practice.</h2>
        <p className="lead">The fifth book is not simply the next installment. It is the integration layer: where inheritance, teachability, discovery, creation, dialogue, and stewardship can be brought together without turning The Way into a prescribed destination.</p>

        <article className="book-library-card">
          <div className="book-library-cover">
            <Image src="/images/the-way-forward.webp" width={1024} height={1536} alt="Cover of The Way Forward: Learning, Discovering, Creating, and Passing It On by Darren Dang." sizes="(max-width: 900px) 70vw, 27vw" />
          </div>
          <div className="book-library-copy">
            <div className="book-status">Integration Layer</div>
            <div className="book-movement">BOOK 5</div>
            <h2>The Way Forward</h2>
            <p className="book-library-sub"><em>Learning, Discovering, Creating, and Passing It On</em></p>
            <p className="book-library-question">How do the lessons, methods, and discoveries become something you can actually live?</p>
            <p><em>The Way Forward</em> brings the first four books into relationship. Book 1 preserves what was learned. Book 2 expands who and what can teach us. Book 3 widens where we look and what we can create. Book 4 makes the collaboration and discovery process visible. Book 5 asks the integrative question: what do you do with all of that now?</p>
            <p>The answer is deliberately not Darren&apos;s destination for the reader. The book is designed as a compass and integration layer—helping readers connect what they inherit, what they discover, what they create, and what they may one day choose to pass forward.</p>
            <div className="development-actions">
              <Link className="button button-dark" href="/the-way-forward/">Explore The Way Forward</Link>
              <Link className="text-link" href="/the-way/">Return to The Way →</Link>
            </div>
          </div>
        </article>
      </section>

      <section className="books-system-note">
        <div className="eyebrow bronze">The trilogy connection</div>
        <h2>Lessons cross generations. Wisdom crosses hierarchy. Ideas cross disciplines.</h2>
        <blockquote className="book-quote">The people who go before us give us a map. The people who come after us show us where the map is incomplete.</blockquote>
        <p className="lead">The deeper conviction is that useful learning should not remain trapped in one person, one rank, one discipline, or one generation. It should be tested, shared, improved, recombined, and passed forward.</p>
        <p>Book 1 gives us a starting map. Book 2 asks whether we are teachable enough to question and revise it. Book 3 carries the same openness across disciplines, asking what becomes possible when we explore beyond the boundaries of the existing map.</p>
        <p className="system-loop">Receive the map → Question and revise the map → Explore beyond the map</p>
        <div className="actions"><Link className="text-link" href="/books/wisdom-has-no-rank/">Read inside Book 2 →</Link><Link className="text-link" href="/dots/">Explore D.O.T.S. →</Link></div>
      </section>
    </InteriorPage>
  );
}