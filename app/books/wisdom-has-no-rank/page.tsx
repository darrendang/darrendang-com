import Image from "next/image";
import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";
import { ConnectedDots } from "@/components/ConnectedDots";

export const metadata = {
  title: "Wisdom Has No Rank",
  description: "Explore Wisdom Has No Rank, Darren Dang's Book 2 in final editorial preparation: a book about teachability, expanding possible teachers, and learning across relationship, culture, experience, and unexpected sources.",
};

const parts = [
  ["I", "SEE YOURSELF MORE CLEARLY", "What can the people closest to me see that I cannot?"],
  ["II", "COMPLETE YOUR STRENGTHS", "What can another person's strengths protect or reveal that mine cannot?"],
  ["III", "MAKE BETTER DECISIONS", "What changes when I let another perspective test my judgment?"],
  ["IV", "MULTIPLY PEOPLE", "How do I give people room to grow—and let their growth change me?"],
  ["V", "DESIGN A TEACHABLE LIFE", "How do I make teachability intentional instead of accidental?"],
  ["VI", "WISDOM FLOWS BOTH WAYS", "What happens when what we teach comes back changed?"],
];

const trilogy = [
  ["01", "ACROSS TIME", "Learn from what came before.", "For Those Who Come After Us", "What can I learn from what was lived before me?"],
  ["02", "ACROSS SOURCE", "Expand who and what can teach you.", "Wisdom Has No Rank", "Who or what might teach me if I stop pre-ranking the teacher?"],
  ["03", "ACROSS DOMAIN", "Widen where you look.", "D.O.T.S.", "What becomes possible when I search beyond the familiar domain?"],
];

const samples = [
  {
    number: "01",
    stage: "Beginning",
    type: "Selected Prologue · Correction",
    title: "The Correction I Almost Left Out",
    copy: "A daughter corrects the story her father tells about himself—and the correction becomes the opening argument for teachability.",
    href: "/books/wisdom-has-no-rank/prologue-excerpt/",
    cta: "Read the selected passage →",
  },
  {
    number: "02",
    stage: "Middle",
    type: "Selected Chapter · Reversal",
    title: "The Person I Developed Developed Me",
    copy: "A relationship that began with Darren as the more senior teacher changes direction when Chris Lombardo becomes someone Darren needs to learn from.",
    href: "/books/wisdom-has-no-rank/person-i-developed/",
    cta: "Read the selected passage →",
  },
  {
    number: "03",
    stage: "Later",
    type: "Selected Chapter · Revised map",
    title: "The Test Child Gave Us a Map",
    copy: "Experience gives a family landmarks, not a script. Zachary goes first; Madison reveals where the map is incomplete.",
    href: "/books/wisdom-has-no-rank/test-child-map/",
    cta: "Read the selected passage →",
  },
];

export default function WisdomHasNoRank() {
  return (
    <InteriorPage eyebrow="Book 2 · BECOME · In Final Editorial Preparation" title="Wisdom Has No Rank" wide>
      <div className="development-book-grid">
        <div className="development-cover-wrap">
          <Image src="/images/wisdom-has-no-rank-cover.webp" width={480} height={720} alt="Current cover for Wisdom Has No Rank by Darren Dang." className="development-cover" sizes="(max-width: 900px) 76vw, 34vw" priority />
          <p className="book-caption">Current cover direction. The manuscript is in final editorial preparation.</p>
        </div>
        <div className="development-copy">
          <div className="book-status">In Final Editorial Preparation</div>
          <p className="book-hook">Who or what might I still learn from?</p>
          <p className="lead">Experience matters. Expertise matters. Responsibility matters. Rank can matter. But none gives us a monopoly on wisdom.</p>
          <p><em>Wisdom Has No Rank</em> begins where <em>For Those Who Come After Us</em> leaves off. Book 1 asks what we can learn from the lives that came before us. Book 2 asks a wider question: what happens when we stop pre-ranking the source of learning before we have examined what it can teach?</p>
          <p>The book begins with familiar reversals—children teaching parents, teams teaching leaders, protégés becoming trusted advisers—but the deeper idea is broader. Wisdom can arrive through relationships, cultures, ordinary experiences, mistakes, unfamiliar practices, and other sources that do not announce themselves as teachers.</p>
          <div className="development-actions">
            <Link className="button button-dark" href="#inside-book-2">Read Inside Book 2</Link>
            <Link className="text-link" href="/ideas/wisdom-has-no-rank/">Explore the core idea →</Link>
          </div>
        </div>
      </div>

      <section className="development-themes book2-trilogy-section">
        <div className="eyebrow bronze">The hinge in the trilogy</div>
        <h2>Book 1 widens time. Book 2 widens the teacher. Book 3 widens the search.</h2>
        <p className="lead">The trilogy progressively dismantles boundaries around where useful learning is allowed to come from. Book 2 is the hinge: inherited experience becomes more useful when we remain open to correction from sources we might otherwise dismiss too quickly.</p>
        <blockquote className="trilogy-map-quote">Wisdom itself may arrive unranked.</blockquote>
        <div className="book2-trilogy-flow" aria-label="Three-book progression across time, source, and domain">
          {trilogy.map(([number, movement, action, title, question]) => (
            <article key={number} className={number === "02" ? "current" : ""}>
              <span>{number}</span>
              <small>{movement}</small>
              <strong>{action}</strong>
              <h3>{title}</h3>
              <p>{question}</p>
            </article>
          ))}
        </div>
        <p className="map-not-script">Openness expands the pool. Discernment decides what is actually wise.</p>
      </section>

      <section className="development-themes">
        <div className="eyebrow bronze">Inside the structure</div>
        <h2>Six movements from seeing yourself more clearly to letting wisdom flow both ways.</h2>
        <p className="lead">The current six-part structure remains the narrative architecture. The broader lens is not a new checklist; it is the posture underneath the stories.</p>
        <div className="book2-part-grid">
          {parts.map(([number, title, question]) => (
            <article key={number}>
              <span>PART {number}</span>
              <h3>{title}</h3>
              <p>{question}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="development-principles">
        <div className="eyebrow bronze">Ideas emerging from the book</div>
        <h2>Teachability is not the absence of judgment. It is keeping judgment open long enough to be tested.</h2>
        <div className="principle-grid">
          <article><blockquote>Wisdom has no rank.</blockquote><p>Do not let age, title, familiarity, status, culture, or category decide in advance whether a source is worth examining.</p></article>
          <article><blockquote>The personal story is the doorway. The human pattern is the destination.</blockquote><p>A story becomes transferable when a reader can remove Darren from it and still recognize something true in their own life.</p></article>
          <article><blockquote>Your default is not universal.</blockquote><p>Different relationships, cultures, and everyday practices can reveal assumptions that remain invisible from inside a single frame.</p></article>
          <article><blockquote>Experience is context, not a script.</blockquote><p>What worked before can orient the next decision without predetermining it.</p></article>
        </div>
      </section>

      <section className="book-samples" id="inside-book-2" aria-labelledby="inside-book-2-title">
        <div className="book-samples-intro">
          <div className="eyebrow bronze">Inside Book 2</div>
          <h2 id="inside-book-2-title">Three glimpses at the changing direction of learning.</h2>
          <p className="lead">These selections show the book&apos;s narrative engine: a correction from someone close, a reversal between teacher and learner, and a family map that becomes more useful because it remains unfinished.</p>
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
        <p className="sample-note">These are intentionally selective passages. The fuller stories, relationships, and emotional turns remain in the book.</p>
      </section>

      <section className="development-question book2-next-question">
        <div className="eyebrow bronze">The bridge to Book 3</div>
        <h2>Once we widen who or what can teach us, the next question is where else we should look.</h2>
        <p className="lead">Book 2 expands possible teachers. Book 3 expands the search space itself.</p>
        <p>The handoff is intentionally unfinished. The aim is not to close every chapter with Darren&apos;s answer, but to help the reader begin noticing possible teachers and patterns in their own life before Book 3 gives that widening a more explicit method.</p>
        <div className="development-actions">
          <Link className="button button-dark" href="/books/dots/">Continue to D.O.T.S.</Link>
          <Link className="text-link" href="/books/">Explore The Path Forward trilogy →</Link>
        </div>
      </section>

      <ConnectedDots
        intro="Book 2 is where the inherited map becomes explicitly revisable. Its stories connect the trilogy, the constitutional principle of teachability, other people's wisdom, and the reader's own willingness to change."
        question="Who or what might be teaching you something that you have already decided not to count as a teacher?"
        connections={[
          { label: "IDEA", title: "Wisdom Has No Rank", copy: "Explore the durable idea beneath the book, including what the principle means and what it does not mean.", href: "/ideas/wisdom-has-no-rank/" },
          { label: "BOOK 1", title: "For Those Who Come After Us", copy: "Book 1 widens learning across time. Book 2 widens it across source and relationship.", href: "/books/for-those-who-come-after-us/" },
          { label: "BOOK 3", title: "D.O.T.S.", copy: "Book 2 widens who or what can teach us. Book 3 widens where useful possibilities can come from.", href: "/books/dots/" },
          { label: "OTHER VOICES", title: "Shared Wisdom", copy: "The public Genome preserves selected lessons from lives other than Darren's without erasing their authorship.", href: "/shared-wisdom/" },
        ]}
      />

      <aside className="development-status-note">
        <strong>Editorial status</strong>
        <p><em>Wisdom Has No Rank</em> is in final editorial preparation. The central thesis, six-part structure, and manuscript are established; the current editorial work is testing how clearly each personal story opens into a transferable human pattern without over-closing the reader&apos;s interpretation.</p>
      </aside>
    </InteriorPage>
  );
}
