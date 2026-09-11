import Image from "next/image";
import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";
import { ConnectedDots } from "@/components/ConnectedDots";

export const metadata = {
  title: "D.O.T.S. — Book 3",
  description: "Explore Darren Dang's Book 3 in advanced development, D.O.T.S. — a way of seeing problems that widens the search space, discovers possibilities across domains, and uses CREATE to test what deserves to become real.",
};

const themes = [
  ["See past labels", "A problem's category can be useful for organization and still be a poor guide to where the best solution might come from."],
  ["Find structure", "Look beneath the surface for the underlying allocation, uncertainty, tradeoff, feedback, adoption, incentive, or system pattern."],
  ["Expand the search space", "Once the structure is visible, look across disciplines and lived experience for other places where the same shape appears."],
  ["Transfer carefully", "Ask what travels, where the analogy breaks, what must be adapted, and what does not belong."],
  ["Create and test", "A possibility earns its place when it is given form, tested against reality, and allowed to generate new evidence."],
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

const selectedChapters = [
  ["01", "The Pattern I Lived Before I Named It", "The origin story: the behavior came before the label."],
  ["02", "The Label Is Not the Problem", "Why a category can organize a problem while still narrowing the search for answers."],
  ["03", "Who Has No Choice But to Be Good at This?", "A practical question for finding useful expertise in unexpected places."],
  ["04", "A Map Is Not a Script", "How to borrow direction without surrendering judgment."],
  ["05", "Now You Look", "The reader's turn: the lens is handed over rather than closed around a final lesson."],
];

const progression = [
  ["COLLECT", "Notice useful ideas, experiences, tools, patterns, and questions before you know exactly where they will matter."],
  ["D.O.T.S.", "Deconstruct, observe, transfer, and synthesize to widen the space of possible answers."],
  ["POSSIBILITY", "Hold more than one plausible path long enough to see what the original frame excluded."],
  ["CREATE", "Give one possibility form, test it, evaluate it, adapt it, and make what works repeatable."],
  ["NEW DOTS", "Consequences and evidence become new material for the next round of seeing."],
];

export default function DotsBook() {
  return (
    <InteriorPage eyebrow="Book 3 · CREATE · In Advanced Development" title="D.O.T.S." wide>
      <div className="development-book-grid">
        <div className="development-cover-wrap">
          <Image src="/images/dots-cover.webp" width={480} height={720} alt="Current cover for D.O.T.S. by Darren Dang." className="development-cover" sizes="(max-width: 900px) 76vw, 34vw" priority />
          <p className="book-caption">Current cover direction. The book is in advanced development.</p>
        </div>
        <div className="development-copy">
          <div className="book-status">In Advanced Development</div>
          <p className="dots-line">Collect Dots. Connect Dots. Create Something New.</p>
          <p className="lead">D.O.T.S. is a way of seeing problems.</p>
          <p>The world organizes knowledge into disciplines. Problems do not. The book explores what becomes possible when we stop letting a problem&apos;s label decide where we are allowed to look for answers.</p>
          <p>The core move is perceptual before it is methodological: <strong>LABEL → STRUCTURE → SEARCH SPACE.</strong> See the structure beneath the category, widen where you look, discover possibilities the original frame excluded, then use CREATE to let reality test what deserves to remain.</p>
          <div className="development-actions">
            <Link className="button button-dark" href="#inside-book-3">Look Inside Book 3</Link>
            <Link className="text-link" href="/dots/">Explore the public D.O.T.S. idea →</Link>
          </div>
        </div>
      </div>

      <section className="development-themes">
        <div className="eyebrow bronze">Key themes</div>
        <h2>Better solutions often begin with a better description of the problem.</h2>
        <div className="theme-grid theme-grid-five">
          {themes.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="development-principles">
        <div className="eyebrow bronze">The public high-level model</div>
        <h2>Deconstruct → Observe → Transfer → Synthesize</h2>
        <p className="map-bridge-text">Sometimes the existing map is useful. Sometimes the terrain has changed. And sometimes we enter territory no existing map describes very well. D.O.T.S. begins by helping us see what the existing map may have missed.</p>
        <p className="lead">The method identifies what kind of problem is actually present, looks for the same structure elsewhere, tests what genuinely transfers, and synthesizes new possibilities for the current context.</p>
        <div className="principle-grid">
          <article><blockquote>The label narrows where you look. The structure expands where you can look.</blockquote><p>D.O.T.S. expands the search space before narrowing toward a solution.</p></article>
          <article><blockquote>D.O.T.S. finds possibility. CREATE earns a possibility.</blockquote><p>Discovery is not enough. Creation gives an idea form so consequence, evidence, and reality can answer back.</p></article>
        </div>
      </section>

      <section className="book-samples" id="inside-book-3" aria-labelledby="inside-book-3-title">
        <div className="book-samples-intro">
          <div className="eyebrow bronze">Inside Book 3</div>
          <h2 id="inside-book-3-title">Three glimpses at how a connection becomes a new way of seeing.</h2>
          <p className="lead">Book 3&apos;s narrative engine is discovery: an unexpected problem, a hidden structure, a surprising connection, and then the judgment required to turn possibility into something real.</p>
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
        <p className="sample-note">These are intentionally selective chapter glimpses rather than full excerpts. The manuscript is still developing, so wording and sequence may continue to evolve.</p>
      </section>

      <section className="development-themes">
        <div className="eyebrow bronze">Selected chapter signals</div>
        <h2>The reader is not only being taught a method. The reader is gradually being handed the lens.</h2>
        <p className="lead">The current architecture moves from recognizing the pattern, to seeing beneath labels, to widening and testing connections, and finally to the reader taking ownership of the act of looking.</p>
        <div className="theme-grid theme-grid-five">
          {selectedChapters.map(([number, title, copy]) => (
            <article key={number}>
              <small>{number}</small>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="development-themes">
        <div className="eyebrow bronze">The recursive engine</div>
        <h2>Open enough to discover. Commit enough to learn. Humble enough to revise.</h2>
        <div className="theme-grid theme-grid-five">
          {progression.map(([title, copy]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="development-principles">
        <div className="eyebrow bronze">Questions that expand the search</div>
        <h2>Sometimes the better question is where else to look.</h2>
        <div className="principle-grid">
          <article><blockquote>Who has no choice but to be good at this problem?</blockquote><p>Look for environments where the underlying challenge is unavoidable and competence is earned through repeated exposure.</p></article>
          <article><blockquote>Where else has this problem already been solved?</blockquote><p>Search by structure rather than category, then test carefully whether the borrowed principle fits the new context.</p></article>
        </div>
      </section>

      <section className="example-panel">
        <div className="eyebrow bronze">D.O.T.S. in practice</div>
        <h3>AI experimentation looked like a technology problem.</h3>
        <p>Look beneath the label and the structure also includes allocation, uncertainty, evidence, governance, capability, trust, and rebalancing. That opens a larger search space—while still requiring judgment about which analogies genuinely transfer.</p>
        <Link className="text-link" href="/papers/from-ai-experiments-to-institutional-capability/">Read From AI Experiments to Institutional Capability →</Link>
      </section>

      <ConnectedDots
        intro="Book 3 sits at the discovery-and-creation edge of the trilogy, but the method depends on dots collected from earlier experience, unexpected teachers, applied work, and the reader's own context."
        question="What problem in your life or work may be described too narrowly by the label you currently use for it?"
        connections={[
          { label: "METHOD", title: "D.O.T.S. — the public model", copy: "Explore the method as a reusable way of seeing problems beyond the book manuscript.", href: "/dots/" },
          { label: "BOOK 1 CASE", title: "Connect the Dots", copy: "A real cross-domain planning case that shows the behavior before the larger method was fully named.", href: "/books/for-those-who-come-after-us/connect-the-dots/" },
          { label: "BOOK 2", title: "Wisdom Has No Rank", copy: "Book 2 widens who or what can teach us. Book 3 widens where possibilities and solutions can come from.", href: "/books/wisdom-has-no-rank/" },
          { label: "COMPANION", title: "The Making of The Way", copy: "The companion work examines how new understanding can emerge through Generative Dialogue rather than inside one mind alone.", href: "/books/the-making-of-the-way/" },
        ]}
      />

      <aside className="development-status-note">
        <strong>Development status</strong>
        <p><em>D.O.T.S.</em> is in advanced development. The title, core line, central thesis, public high-level model, and reader-centered direction are established enough to share selectively. The manuscript, exact chapter wording and sequence, detailed method, case studies, excerpts, and publication timing may still change as the book develops.</p>
      </aside>
    </InteriorPage>
  );
}
