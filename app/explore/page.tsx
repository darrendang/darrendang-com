import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

export const metadata = {
  title: "Explore",
  description: "Enter the public Dang Genome through the question, story, Letter, book, idea, or method that speaks to you.",
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
          <p className="lead">The public Genome is connected by meaning, not by the folder a piece of content happens to live in. You can enter through a story, Letter, book, idea, framework, question, disagreement, or method and follow the relationships outward.</p>
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
        <div className="eyebrow bronze">Explore by form</div>
        <h2>Different forms hold different kinds of learning.</h2>
        <div className="layer-grid">
          <article><h3>Letters from Darren</h3><p>Learning in motion: observations, stories, questions, changed judgments, and ideas still open to revision.</p><Link className="text-link" href="/letters/">Read Letters →</Link></article>
          <article><h3>The Path Forward</h3><p>Three books that develop inheritance, reciprocal wisdom, and cross-domain creation into sustained bodies of thought.</p><Link className="text-link" href="/books/">Explore the books →</Link></article>
          <article><h3>Ideas</h3><p>Durable intellectual nodes that recur across stories, books, talks, decisions, family life, technology, and institutions.</p><Link className="text-link" href="/ideas/">Explore Ideas →</Link></article>
          <article><h3>D.O.T.S.</h3><p>A signature method inside The Way for seeing underlying structures, transferring carefully, and creating adapted responses.</p><Link className="text-link" href="/dots/">Explore D.O.T.S. →</Link></article>
          <article><h3>Papers & Talks</h3><p>Applied expressions of the ideas in technology, AI, governance, leadership, institutions, and public service.</p><Link className="text-link" href="/papers/">Explore papers →</Link></article>
          <article><h3>Shared Wisdom</h3><p>Selected lessons and stories from other people, preserved with their authorship and provenance intact.</p><Link className="text-link" href="/shared-wisdom/">Explore other voices →</Link></article>
        </div>
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
