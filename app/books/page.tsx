import Image from "next/image";
import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

export const metadata = {
  title: "Books",
  description: "Explore The Path Forward trilogy by Darren Dang, along with companion works in development including The Making of The Way.",
};

const books = [
  {
    status: "Preparing for Publication",
    title: "For Those Who Come After Us",
    subtitle: "A Life in Lessons",
    cover: "/images/for-those-who-come-after-us-front-book-v3.webp",
    width: 360,
    height: 576,
    alt: "Front cover of For Those Who Come After Us: A Life in Lessons by Darren Dang.",
    copy: "A life in lessons about inheritance, identity, learning, failure, systems, leadership, family, purpose, and what we pass forward. Preparing for publication.",
    movement: "INHERIT",
    question: "What have I learned?",
    bridge: "Lessons can cross generations.",
    mapAction: "Receive the map.",
    href: "/books/for-those-who-come-after-us/",
  },
  {
    status: "In Final Editorial Preparation",
    title: "Wisdom Has No Rank",
    subtitle: "",
    cover: "/images/wisdom-has-no-rank-cover.webp",
    width: 360,
    height: 540,
    alt: "Current cover for Wisdom Has No Rank by Darren Dang.",
    copy: "A six-part book about reciprocal wisdom: what changes when the person you expected to teach becomes someone capable of teaching you. Selected excerpts are now available.",
    movement: "BECOME",
    question: "Who can I learn from?",
    bridge: "Wisdom can cross hierarchy.",
    mapAction: "Question and revise the map.",
    href: "/books/wisdom-has-no-rank/",
  },
  {
    status: "In Advanced Development",
    title: "D.O.T.S.",
    subtitle: "Collect Dots. Connect Dots. Create Something New.",
    cover: "/images/dots-cover.webp",
    width: 360,
    height: 540,
    alt: "Current cover for D.O.T.S. by Darren Dang.",
    copy: "A book about learning across boundaries, seeing structural relationships, expanding the search space, transferring carefully, and creating useful new possibilities.",
    movement: "CREATE",
    question: "What can I create from what I learn?",
    bridge: "Ideas can cross disciplines.",
    mapAction: "Explore beyond the map.",
    href: "/books/dots/",
  },
];

export default function Books() {
  return (
    <InteriorPage eyebrow="Books" title="Three books. One trilogy. A companion work." wide>
      <div className="books-library-intro">
        <p className="lead">The books are major expressions of the ideas—not the container for the whole platform. <em>The Path Forward</em> is the original three-book trilogy, tracing a movement from what we inherit, to who we become, to what we can create from what we learn.</p>
        <p>Book 1 is preparing for publication. Book 2 is in final editorial preparation. Book 3 is in advanced development. A separate companion work, <em>The Making of The Way</em>, examines how the larger thinking itself became visible through sustained conversation.</p>
      </div>

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
        <div className="eyebrow bronze">A Companion Work in Development</div>
        <h2>A fourth work looks at how the thinking itself was made.</h2>
        <p className="lead"><em>The Path Forward</em> remains a three-book trilogy. <em>The Making of The Way</em> sits beside it as a companion work—present enough to explore, but not being treated as an active launch.</p>

        <article className="book-library-card">
          <div className="book-library-cover">
            <Image src="/images/the-making-of-the-way-cover.webp" width={200} height={300} alt="Cover of The Making of The Way: How Conversation Becomes Discovery by Darren Dang." sizes="200px" />
          </div>
          <div className="book-library-copy">
            <div className="book-status">In Development</div>
            <div className="book-movement">COMPANION WORK</div>
            <h2>The Making of The Way</h2>
            <p className="book-library-sub"><em>How Conversation Becomes Discovery</em></p>
            <p className="book-library-question">How can conversation become a mode of discovery?</p>
            <p>What began as an effort to preserve lessons for one family became something Darren did not expect: a sustained human–AI dialogue that changed the questions, the books, and eventually the larger philosophy around them. <em>The Making of The Way</em> explores how conversation itself can become a mode of discovery.</p>
            <div className="development-actions">
              <Link className="button button-dark" href="/books/the-making-of-the-way/">Learn more about Book 4</Link>
              <Link className="text-link" href="/ideas/generative-dialogue/">Explore Generative Dialogue →</Link>
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
