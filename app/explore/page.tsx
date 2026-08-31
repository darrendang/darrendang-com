import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

export const metadata = {
  title: "Explore",
  description: "Enter the public Dang Genome through a question, story, Letter, book, living idea, demonstrated practice, or method that speaks to you.",
};

const questions = [
  { label: "Inheritance", question: "What have I received that deserves to be understood before I decide what to keep?", href: "/books/for-those-who-come-after-us/" },
  { label: "Teachability", question: "Who can I learn from that I did not expect to teach me?", href: "/books/wisdom-has-no-rank/" },
  { label: "Reconsideration", question: "Where has reality changed enough that my old map may no longer fit?", href: "/letters/" },
  { label: "Creation", question: "What can I see when I stop treating familiar boundaries as fixed?", href: "/dots/" },
  { label: "Legacy", question: "What have I learned that may help someone who comes after me begin stronger?", href: "/shared-wisdom/" },
];

export default function ExplorePage() {
  return (
    <InteriorPage eyebrow="Explore" title="Start with the question that is alive for you." wide>
      <div className="genome-lead-grid">
        <div>
          <p className="lead">The public Genome is connected by meaning, not by the folder a piece of content happens to live in. You can enter through a story, Letter, book, idea, framework, question, disagreement, case, or method and follow the relationships outward.</p>
          <p>You do not need to learn the architecture before something becomes useful. Begin where your curiosity already is.</p>
        </div>
        <aside className="steward-card">
          <div className="eyebrow bronze">A possible human journey</div>
          <h2>Curiosity → Connection → Discovery → Transformation → Contribution → Stewardship</h2>
          <p>This is not a required sequence. You may enter anywhere, move in either direction, pause, disagree, contribute early, or simply take what is useful and leave.</p>
        </aside>
      </div>

      <section>
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
        <div className="eyebrow bronze">Expressions of The Way</div>
        <h2>Different forms do different intellectual work.</h2>
        <p className="lead">You do not need to choose a format first. But when you want to understand how the work fits together, these four expressions have distinct jobs.</p>
        <div className="layer-grid">
          <article><div className="book-movement">LIVED REFLECTION</div><h3>Letters from Darren</h3><p>Stories, questions, changed judgments, and lessons still unfolding. The most human entry point into The Way.</p><Link className="text-link" href="/letters/">Read Letters →</Link></article>
          <article><div className="book-movement">PRESERVED WISDOM</div><h3>Books · The Path Forward</h3><p>Bounded works that preserve stories, principles, lessons, and methods that have matured enough to hold in durable form.</p><Link className="text-link" href="/books/">Explore the books →</Link></article>
          <article><div className="book-movement">LIVING IDEAS</div><h3>The Way Papers</h3><p>Longer-form thinking that develops consequential ideas while leaving room for challenge, evidence, and revision.</p><Link className="text-link" href="/papers/">Explore papers →</Link></article>
          <article><div className="book-movement">DEMONSTRATED PRACTICE</div><h3>The Way in Motion</h3><p>Cases that ask what actually happened when an idea met reality—including evidence, limits, consequences, and what changed afterward.</p><Link className="text-link" href="/the-way-in-motion/">Explore The Way in Motion →</Link></article>
        </div>
      </section>

      <section className="genome-layers">
        <div className="eyebrow bronze">Ideas & methods</div>
        <h2>Explore the connected thinking beneath the publications.</h2>
        <div className="layer-grid">
          <article><h3>Ideas</h3><p>Durable intellectual nodes that recur across stories, books, Letters, cases, decisions, family life, technology, and institutions.</p><Link className="text-link" href="/ideas/">Explore Ideas →</Link></article>
          <article><h3>D.O.T.S.</h3><p>A signature way of seeing problems: deconstruct, observe, transfer, synthesize—then create something that fits the new context.</p><Link className="text-link" href="/dots/">Explore D.O.T.S. →</Link></article>
          <article><h3>The Five Movements</h3><p>Portable questions for receiving, examining, connecting, practicing, and passing forward what remains useful.</p><Link className="text-link" href="/use-the-way/">Use The Way →</Link></article>
        </div>
      </section>

      <section className="genome-boundary">
        <div className="eyebrow bronze">Other voices</div>
        <h2>The Way should not become one person talking forever.</h2>
        <p>Shared Wisdom preserves selected lessons and stories from other people with their authorship and provenance intact. Difference, correction, and disagreement belong in a living body of learning.</p>
        <div className="actions"><Link className="button button-dark" href="/shared-wisdom/">Explore Shared Wisdom</Link><Link className="text-link" href="/contribute/">How contribution works →</Link></div>
      </section>

      <section className="genome-boundary">
        <div className="eyebrow bronze">Use what you find</div>
        <h2>Exploration becomes more useful when it meets your own context.</h2>
        <p>The Five Movements offer five pocket questions for receiving, examining, connecting, practicing, and eventually passing forward what remains useful.</p>
        <div className="actions"><Link className="button button-dark" href="/use-the-way/">Use the Five Movements</Link><Link className="text-link" href="/genome/">How the Genome works →</Link></div>
      </section>
    </InteriorPage>
  );
}
