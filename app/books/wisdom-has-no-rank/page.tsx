import Image from "next/image";
import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

export const metadata = {
  title: "Wisdom Has No Rank",
  description: "Explore Wisdom Has No Rank, Darren Dang's Book 2 in final editorial review, including selected excerpts, its six-part structure, and its place in the INHERIT → BECOME → CREATE trilogy.",
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
  ["01", "INHERIT", "Receive the map.", "For Those Who Come After Us", "What have I learned?"],
  ["02", "BECOME", "Question and revise the map.", "Wisdom Has No Rank", "Who can I learn from?"],
  ["03", "CREATE", "Explore beyond the map.", "D.O.T.S.", "What can I create from what I learn?"],
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
    <InteriorPage eyebrow="Book 2 · BECOME · Final Editorial Stage" title="Wisdom Has No Rank" wide>
      <div className="development-book-grid">
        <div className="development-cover-wrap">
          <Image src="/images/wisdom-has-no-rank-cover.webp" width={480} height={720} alt="Current cover for Wisdom Has No Rank by Darren Dang." className="development-cover" sizes="(max-width: 900px) 76vw, 34vw" priority />
          <p className="book-caption">Current cover direction. The manuscript is in final editorial review.</p>
        </div>
        <div className="development-copy">
          <div className="book-status">Final Editorial Stage</div>
          <p className="book-hook">Who can I still learn from?</p>
          <p className="lead">Experience matters. Expertise matters. Responsibility matters. Rank matters. But none gives us a monopoly on wisdom.</p>
          <p><em>Wisdom Has No Rank</em> begins where <em>For Those Who Come After Us</em> leaves off. Book 1 asks what we can learn from the lives that came before us. Book 2 asks whether we remain teachable when wisdom comes from someone younger, more junior, closer to us, or simply unexpected.</p>
          <p>The book follows the moments when familiar roles reverse—when children teach parents, teams teach leaders, protégés become people worth calling for advice, and the person who thought he was teaching realizes he still has something to learn.</p>
          <div className="development-actions">
            <Link className="button button-dark" href="#inside-book-2">Read Inside Book 2</Link>
            <Link className="text-link" href="/ideas/wisdom-has-no-rank/">Explore the core idea →</Link>
          </div>
        </div>
      </div>

      <section className="development-themes book2-trilogy-section">
        <div className="eyebrow bronze">The hinge in the trilogy</div>
        <h2>Receive what came before. Stay teachable enough to revise it. Then create what comes next.</h2>
        <p className="lead">The trilogy moves from inheritance, to teachability, to creation. Book 2 is the hinge: accumulated experience becomes more useful when it stays open to correction.</p>
        <blockquote className="trilogy-map-quote">The people who go before us give us a map. The people who come after us show us where the map is incomplete.</blockquote>
        <div className="book2-trilogy-flow" aria-label="Three-book progression from inheritance to creation">
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
        <p className="map-not-script">A map helps us navigate. It does not tell us exactly where to go.</p>
      </section>

      <section className="development-themes">
        <div className="eyebrow bronze">Inside the structure</div>
        <h2>Six movements from seeing yourself more clearly to letting wisdom flow both ways.</h2>
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
          <article><blockquote>Wisdom has no rank.</blockquote><p>Useful insight can arrive from a direction the hierarchy did not predict.</p></article>
          <article><blockquote>To teach well, sometimes you have to become a student first.</blockquote><p>Responsibility can require learning before leading, explaining, or teaching.</p></article>
          <article><blockquote>Experience is useful only if it makes you better prepared without making you too certain.</blockquote><p>What worked before should become context, not a script for the next person.</p></article>
          <article><blockquote>A map can show you where someone else has been. It cannot tell you exactly where another person should go.</blockquote><p>The next traveler still has to exercise judgment—and may reveal where the inherited map is incomplete.</p></article>
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
        <h2>The next question is not only who can teach us. It is where else we should look for ideas.</h2>
        <p className="lead">Book 2 widens the direction from which wisdom can arrive. Book 3 widens the places from which useful solutions can come.</p>
        <p><strong>INHERIT → BECOME → CREATE</strong> becomes a continuing practice: receive what is useful, question what no longer fits, connect what you learn, create something better, and pass it forward.</p>
        <div className="development-actions">
          <Link className="button button-dark" href="/books/dots/">Continue to D.O.T.S.</Link>
          <Link className="text-link" href="/books/">Explore all three books →</Link>
        </div>
      </section>

      <aside className="development-status-note">
        <strong>Editorial status</strong>
        <p><em>Wisdom Has No Rank</em> has entered final editorial review. The central thesis, six-part structure, and manuscript are established; selected wording and sequencing may still receive final editorial or copyediting refinement before publication.</p>
      </aside>
    </InteriorPage>
  );
}
