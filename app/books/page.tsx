import Image from "next/image";
import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

export const metadata = {
  title: "Books",
  description: "Explore Darren Dang's five-book journey from lived experience and inherited wisdom to teachability, creation, human-AI collaboration, and the reader's own way forward.",
};

const books = [
  {
    number: "01",
    status: "Published",
    title: "For Those Who Come After Us",
    subtitle: "A Life in Lessons",
    cover: "/images/for-those-who-come-after-us-front-book-v3.webp",
    width: 360,
    height: 576,
    alt: "Front cover of For Those Who Come After Us: A Life in Lessons by Darren Dang.",
    role: "THE PERSONAL DOORWAY",
    question: "What has life taught me—and what might be worth passing forward?",
    copy: "The journey begins with one life: family, identity, education, failure, work, leadership, money, purpose, relationships, and the lessons that became clearer only in retrospect.",
    bridge: "A life can leave something useful behind without leaving instructions for how another person must live.",
    href: "/books/for-those-who-come-after-us/",
  },
  {
    number: "02",
    status: "Final Proof",
    title: "Wisdom Has No Rank",
    subtitle: "",
    cover: "/images/wisdom-has-no-rank-cover.webp",
    width: 360,
    height: 540,
    alt: "Current cover for Wisdom Has No Rank by Darren Dang.",
    role: "THE CIRCLE WIDENS",
    question: "Who else might have something to teach me?",
    copy: "The second book turns outward. Children can teach parents. Teams can teach leaders. Younger people, different cultures, mistakes, ordinary experiences, and unexpected relationships can all reveal what our own experience missed.",
    bridge: "Experience matters. So does remaining teachable enough to let another person change the map.",
    href: "/books/wisdom-has-no-rank/",
  },
  {
    number: "03",
    status: "First Print Proof",
    title: "D.O.T.S.",
    subtitle: "Collect Dots. Connect Dots. Create Something New.",
    cover: "/images/dots-cover.webp",
    width: 360,
    height: 540,
    alt: "Current cover for D.O.T.S. by Darren Dang.",
    role: "MAKE SOMETHING NEW",
    question: "What can I make from everything I have learned?",
    copy: "The third book asks what becomes possible when we connect experience, ideas, disciplines, and patterns that are usually kept apart. D.O.T.S. gives that way of seeing a practical form.",
    bridge: "What we inherit and learn becomes most useful when we can recombine it, test it, and create something that meets reality.",
    href: "/books/dots/",
  },
  {
    number: "04",
    status: "In Development",
    title: "The Making of The Way",
    subtitle: "How Conversation Becomes Discovery",
    cover: "/images/the-making-of-the-way-cover.webp",
    width: 1024,
    height: 1536,
    alt: "Cover of The Making of The Way: How Conversation Becomes Discovery by Darren Dang.",
    role: "SEE HOW THE WORK WAS MADE",
    question: "What happens when a human and AI think together over time?",
    copy: "The fourth book opens the workshop. It follows the conversations, memories, corrections, questions, failures, and discoveries through which the books and the larger idea of The Way took shape.",
    bridge: "The story is not that AI wrote the work. It is that sustained dialogue helped surface connections that neither side held in finished form at the start.",
    href: "/books/the-making-of-the-way/",
  },
  {
    number: "05",
    status: "In Development",
    title: "The Way Forward",
    subtitle: "Learning, Discovering, Creating, and Passing It On",
    cover: "/images/the-way-forward.webp",
    width: 1024,
    height: 1536,
    alt: "Cover of The Way Forward: Learning, Discovering, Creating, and Passing It On by Darren Dang.",
    role: "TURN THE LENS TOWARD YOUR LIFE",
    question: "What will you do with what you inherit, learn, and discover?",
    copy: "The fifth book brings the earlier journeys into relationship, then gives the question back to the reader. It is less about Darren's next answer than about helping someone else decide what responsible progress means in their own context.",
    bridge: "The books can offer a stronger starting point. They cannot choose another person's destination.",
    href: "/the-way-forward/",
  },
];

export default function Books() {
  return (
    <InteriorPage eyebrow="Books" title="Five works. One widening journey." wide>
      <div className="books-library-intro">
        <p className="lead">The books are the clearest doorway into this body of work because that is where it began: with lived experience, relationships, questions, mistakes, and things I wanted to preserve for those who came after me.</p>
        <p>Only later did a larger pattern become visible across them. The first three move from inheritance, to teachability, to creation. The fourth makes the making visible. The fifth turns the work toward the reader's own life.</p>
      </div>

      <div className="books-library">
        {books.map((book) => (
          <article className="book-library-card" key={book.title}>
            <div className="book-library-cover">
              <Image src={book.cover} width={book.width} height={book.height} alt={book.alt} sizes="(max-width: 900px) 70vw, 27vw" />
            </div>
            <div className="book-library-copy">
              <div className="book-status">{book.status}</div>
              <div className="book-movement">{book.number} · {book.role}</div>
              <h2>{book.title}</h2>
              {book.subtitle && <p className="book-library-sub"><em>{book.subtitle}</em></p>}
              <p className="book-library-question">{book.question}</p>
              <p>{book.copy}</p>
              <p className="book-library-bridge">{book.bridge}</p>
              <Link className="text-link" href={book.href}>Explore the book →</Link>
            </div>
          </article>
        ))}
      </div>

      <section className="books-system-note">
        <div className="eyebrow bronze">What connects them</div>
        <h2>The books widen the question before they ever become a system.</h2>
        <p className="lead">Book 1 asks what a life can pass forward. Book 2 asks who else belongs in the conversation. Book 3 asks what we can create from all those dots. Book 4 asks how discovery itself can emerge through dialogue. Book 5 asks what the reader will do next.</p>
        <blockquote className="book-quote">A stronger starting point. The freedom to go farther.</blockquote>
        <p>The larger philosophy called <strong>The Way</strong> emerged from this progression. It is useful because it names the pattern underneath the books—not because the books exist to illustrate a prewritten system.</p>
        <div className="actions"><Link className="button button-dark" href="/the-way/">Discover The Way</Link><Link className="text-link" href="/letters/why-these-letters/">Read why the writing continues →</Link></div>
      </section>
    </InteriorPage>
  );
}
