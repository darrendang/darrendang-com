import Image from "next/image";
import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

export const metadata = {
  title: "Books",
  description: "Explore Darren Dang's published and developing body of work: For Those Who Come After Us, Wisdom Has No Rank, and D.O.T.S.",
};

const books = [
  {
    status: "Preparing for publication",
    title: "For Those Who Come After Us",
    subtitle: "A Life in Lessons",
    cover: "/images/for-those-who-come-after-us-front-book-v3.webp",
    width: 360,
    height: 576,
    alt: "Front cover of For Those Who Come After Us: A Life in Lessons by Darren Dang.",
    copy: "A life in lessons about inheritance, identity, learning, failure, systems, leadership, family, purpose, and what we pass forward. Publication is targeted for September 2026.",
    movement: "PASS FORWARD",
    href: "/books/for-those-who-come-after-us/",
  },
  {
    status: "In development",
    title: "Wisdom Has No Rank",
    subtitle: "",
    cover: "/images/wisdom-has-no-rank-cover.webp",
    width: 360,
    height: 540,
    alt: "Current cover for Wisdom Has No Rank by Darren Dang.",
    copy: "An exploration of reciprocal wisdom: what changes when the person you expected to teach becomes someone capable of teaching you.",
    movement: "REMAIN TEACHABLE",
    href: "/books/wisdom-has-no-rank/",
  },
  {
    status: "In development",
    title: "D.O.T.S.",
    subtitle: "Collect Dots. Connect Dots. Create Something New.",
    cover: "/images/dots-cover.webp",
    width: 360,
    height: 540,
    alt: "Current cover for D.O.T.S. by Darren Dang.",
    copy: "A book about learning across boundaries, seeing structural relationships, and synthesizing separate ideas into useful new possibilities.",
    movement: "CONNECT & CREATE",
    href: "/books/dots/",
  },
];

export default function Books() {
  return (
    <InteriorPage eyebrow="Books" title="Three books. One evolving body of thought." wide>
      <div className="books-library-intro">
        <p className="lead">Books are major expressions of the ideas—not the container for the whole platform. Together, these three works explore how wisdom is inherited, exchanged, connected, tested, and carried forward.</p>
        <p>Book 1 is in final publication preparation, with publication targeted for September 2026. Books 2 and 3 are active works in development. Their ideas are strong enough to share now; their manuscripts, excerpts, and publication timing are still taking shape.</p>
      </div>

      <div className="book-system-strip" aria-label="Three-book intellectual progression">
        <span>PASS FORWARD</span><b>→</b><span>REMAIN TEACHABLE</span><b>→</b><span>CONNECT &amp; CREATE</span>
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
              <p>{book.copy}</p>
              <Link className="text-link" href={book.href}>Explore the book →</Link>
            </div>
          </article>
        ))}
      </div>

      <section className="books-system-note">
        <div className="eyebrow bronze">The larger system</div>
        <h2>Ideas move. Roles reverse. Connections multiply.</h2>
        <p className="lead">The books are connected by a larger conviction: useful wisdom should not remain trapped in one person, one rank, one discipline, or one generation. It should be tested, shared, improved, recombined, and put to work.</p>
        <Link className="text-link" href="/ideas/">Explore the Ideas →</Link>
      </section>
    </InteriorPage>
  );
}
