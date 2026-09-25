import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

export const metadata = {
  title: "Explore",
  description: "Start with a question that matters to you, then explore Darren Dang's books, Letters, ideas, practice, music, Shared Wisdom, and the Dang Genome.",
};

const questions = [
  { label: "Inheritance", question: "What have I received that deserves to be understood before I decide what to keep?", href: "/books/for-those-who-come-after-us/" },
  { label: "Teachability", question: "Who can I learn from that I did not expect to teach me?", href: "/books/wisdom-has-no-rank/" },
  { label: "Reconsideration", question: "Where has reality changed enough that my old map may no longer fit?", href: "/letters/" },
  { label: "Creation", question: "What can I see when I stop treating familiar boundaries as fixed?", href: "/books/dots/" },
  { label: "Legacy", question: "What have I learned that may help someone who comes after me begin stronger?", href: "/shared-wisdom/" },
];

const paths = [
  { label: "BOOKS", title: "Follow the widening journey.", copy: "Begin with lived experience, widen who can teach you, connect what you learn, and turn the final question toward your own life.", href: "/books/", cta: "Explore the books →" },
  { label: "LETTERS", title: "Begin with a story still unfolding.", copy: "Family, work, culture, mistakes, changed judgments, and questions that do not need to pretend they are finished.", href: "/letters/", cta: "Read Letters →" },
  { label: "IDEAS", title: "Start with a concept you can use.", copy: "Explore durable ideas about judgment, systems, learning, leadership, technology, stewardship, and passing knowledge forward.", href: "/ideas/", cta: "Explore Ideas →" },
  { label: "PRACTICE", title: "See what happened when ideas met reality.", copy: "Cases and methods become more trustworthy when evidence, tradeoffs, limits, and consequences remain visible.", href: "/the-way-in-motion/", cta: "Explore The Way in Motion →" },
  { label: "MUSIC", title: "Hear the same inheritance become something different.", copy: "Original songs carry The Way through different languages, cultures, relationships, and emotional forms.", href: "/the-way/music/", cta: "Experience The Way in Music →" },
];

export default function ExplorePage() {
  return (
    <InteriorPage eyebrow="Explore" title="Start with the question that is alive for you." wide>
      <div className="books-library-intro">
        <p className="lead">You do not need to learn the architecture of this site before something becomes useful. Begin with a question, a story, a book, an idea, or a piece of practice that already connects to your life.</p>
        <p>Take what helps. Follow the connections that interest you. Leave what does not. You can always go deeper later.</p>
      </div>

      <section className="explore-question-first">
        <div className="eyebrow bronze">Explore by question</div>
        <h2>Questions travel farther than categories.</h2>
        <div className="layer-grid">
          {questions.map((item) => (
            <article key={item.label}>
              <div className="book-movement">{item.label}</div>
              <h3>{item.question}</h3>
              <Link className="text-link" href={item.href}>Follow this question →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="genome-layers">
        <div className="eyebrow bronze">Or choose a form</div>
        <h2>Different forms invite different kinds of attention.</h2>
        <p className="lead">Sometimes you want a complete book. Sometimes a five-minute story, a practical case, a single idea, or a song is the better doorway.</p>
        <div className="layer-grid">
          {paths.map((item) => (
            <article key={item.label}>
              <div className="book-movement">{item.label}</div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <Link className="text-link" href={item.href}>{item.cta}</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="genome-boundary">
        <div className="eyebrow bronze">Make it useful</div>
        <h2>The point is not to learn Darren&apos;s map. It is to see your own context more clearly.</h2>
        <p className="lead">The Five Movements offer five portable questions for receiving, examining, connecting, practicing, and eventually passing forward what remains useful.</p>
        <div className="actions">
          <Link className="button button-dark" href="/use-the-way/">Use the Five Movements</Link>
          <Link className="text-link" href="/your-way/">Explore Your Way →</Link>
        </div>
      </section>

      <section className="genome-boundary">
        <div className="eyebrow bronze">Go deeper when you want to</div>
        <h2>The connected body behind the public work.</h2>
        <p>The Dang Genome preserves relationships among stories, people, works, ideas, sources, corrections, and contributions. Shared Wisdom leaves room for learning that did not begin with Darren.</p>
        <div className="actions">
          <Link className="button button-dark" href="/genome/">Explore the Dang Genome</Link>
          <Link className="text-link" href="/shared-wisdom/">Explore Shared Wisdom →</Link>
        </div>
      </section>
    </InteriorPage>
  );
}
