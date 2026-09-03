import type { Metadata } from "next";
import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

export const metadata: Metadata = {
  title: "DANG Generative Dialogue",
  description: "DANG Generative Dialogue™ is a disciplined, recursive way of creating insight through question, conversation, reflection, challenge, refinement, discovery, and human judgment.",
  alternates: { canonical: "/ideas/generative-dialogue/" },
  openGraph: {
    title: "DANG Generative Dialogue™ | Darren Dang",
    description: "A disciplined dialogue that creates insight through question, challenge, reflection, refinement, and human judgment.",
    type: "article",
    url: "/ideas/generative-dialogue/",
  },
};

const dialogueStages = [
  ["01", "QUESTION", "Begin with something worth examining", "The dialogue starts with a real question, tension, uncertainty, or possibility—not a request for a polished answer."],
  ["02", "CONVERSATION", "Expose the current thinking", "Ideas become visible enough to examine. Assumptions, examples, evidence, and competing interpretations enter the conversation."],
  ["03", "REFLECTION", "Notice what the exchange revealed", "The participants look again at what they thought they knew, including patterns, gaps, contradictions, and unexpected connections."],
  ["04", "CHALLENGE", "Test the emerging idea", "Agreement is not the goal. Useful challenge asks what is missing, what does not fit, what has been assumed, and what would change the conclusion."],
  ["05", "REFINEMENT", "Make the idea more precise", "Language, boundaries, relationships, and implications are revised until the idea better matches the evidence and the larger whole."],
  ["06", "DISCOVERY", "Recognize what did not exist at the start", "The result can be a new distinction, framework, principle, question, or connection that neither participant brought fully formed into the dialogue."],
  ["07", "PRACTICE / CANON", "Decide what deserves to endure", "Discovery becomes useful only when it is tested, applied, preserved with provenance, revised when necessary, and—when warranted—approved as something worth carrying forward."],
  ["08", "PASS FORWARD", "Let the next dialogue begin stronger", "What was learned becomes a better starting point for another person, another context, or another generation—not a predetermined destination."],
];

const humanAuthority = [
  ["Purpose", "The human decides what the work is ultimately for."],
  ["Truth & meaning", "The human remains responsible for what is accepted as true, meaningful, or consequential."],
  ["Correction", "AI inference must not silently override primary evidence or an explicit human correction."],
  ["Judgment", "The human decides which connections matter, which risks are acceptable, and which conclusions deserve action."],
  ["Privacy & boundaries", "The human determines what should remain private, what may be shared, and what should never be published."],
  ["Canon & publication", "AI can propose and structure; the human retains approval, canonization, and publication authority."],
];

const contexts = [
  ["Human ↔ Human", "A mentor and learner, parent and child, colleagues, partners, or generations can create new understanding by questioning and revising one another rather than merely exchanging positions."],
  ["Human ↔ AI", "AI can retrieve, compare, connect, challenge, synthesize, draft, and test coherence while the human supplies purpose, judgment, correction, meaning, and authority."],
  ["Team ↔ System", "Groups can use the same discipline to surface assumptions, reconcile perspectives, test decisions, and preserve what they learn for others."],
];

export default function GenerativeDialoguePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DefinedTerm",
        "@id": "https://darrendang.com/ideas/generative-dialogue/#idea",
        name: "DANG Generative Dialogue",
        description: "A disciplined, recursive dialogue that creates insight through question, conversation, reflection, challenge, refinement, discovery, and human judgment.",
        url: "https://darrendang.com/ideas/generative-dialogue/",
        inDefinedTermSet: {
          "@type": "DefinedTermSet",
          name: "Ideas by Darren Dang",
          url: "https://darrendang.com/ideas/",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://darrendang.com/" },
          { "@type": "ListItem", position: 2, name: "Ideas", item: "https://darrendang.com/ideas/" },
          { "@type": "ListItem", position: 3, name: "DANG Generative Dialogue", item: "https://darrendang.com/ideas/generative-dialogue/" },
        ],
      },
    ],
  };

  return (
    <>
      <InteriorPage eyebrow="Human–AI Collaboration & Discovery" title="DANG Generative Dialogue™" wide>
        <section className="idea-canonical-intro">
          <p className="lead">A disciplined dialogue that creates insight through question, conversation, reflection, challenge, refinement, and human judgment.</p>
          <blockquote className="book-quote">The purpose is not to get an answer faster. It is to think more deeply than either participant might have thought alone.</blockquote>
        </section>

        <section className="development-question">
          <div className="eyebrow bronze">What it is</div>
          <h2>Dialogue can do more than exchange what people already know.</h2>
          <p>Some conversations simply transfer information. Others negotiate, persuade, brainstorm, or solve a defined problem. Generative Dialogue is different: the conversation itself becomes part of the discovery process.</p>
          <p>The participants do not need to begin with the answer. They bring questions, experience, evidence, assumptions, patterns, and partial ideas into a recursive exchange. Each round can expose something that was previously invisible: a contradiction, a missing distinction, a connection across domains, or a better way to frame the problem.</p>
          <p>The result is not merely a better version of the first response. At its best, the dialogue produces understanding that did not exist in finished form when the conversation began.</p>
        </section>

        <section className="development-question">
          <div className="eyebrow bronze">The movement</div>
          <h2>Discovery emerges through recursion.</h2>
          <div className="map-sequence" aria-label="The DANG Generative Dialogue sequence">
            {dialogueStages.map(([number, label, title, copy]) => (
              <article key={number}>
                <span>{number}</span>
                <small>{label}</small>
                <strong>{title}</strong>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <p className="map-not-script">This is a recursive movement, not a rigid eight-step procedure. A useful dialogue may move backward, repeat stages, or open an entirely new question.</p>
        </section>

        <section className="development-principles">
          <div className="eyebrow bronze">What it is not</div>
          <h2>Generative Dialogue is not sophisticated prompting.</h2>
          <div className="principle-grid">
            <article>
              <blockquote>Not answer extraction</blockquote>
              <p>The objective is not to discover the perfect prompt that causes another intelligence to produce the desired answer on command.</p>
            </article>
            <article>
              <blockquote>Not passive agreement</blockquote>
              <p>A dialogue that merely confirms the user&apos;s existing beliefs may feel productive while producing very little new understanding.</p>
            </article>
            <article>
              <blockquote>Not outsourced judgment</blockquote>
              <p>AI can contribute extraordinary breadth and synthesis. It does not inherit the human&apos;s responsibility for truth, meaning, consequences, or final direction.</p>
            </article>
            <article>
              <blockquote>Not AI-only</blockquote>
              <p>The mechanism is older and broader than artificial intelligence. Human–human dialogue can be generative whenever the exchange creates insight through disciplined reciprocity.</p>
            </article>
          </div>
        </section>

        <section className="development-themes">
          <div className="eyebrow bronze">Where it happens</div>
          <h2>The participants can change. The discipline remains.</h2>
          <div className="theme-grid">
            {contexts.map(([title, copy]) => (
              <article key={title}><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </section>

        <section className="development-themes">
          <div className="eyebrow bronze">Human authority</div>
          <h2>AI can expand the thinking without becoming the authority.</h2>
          <p className="lead">In human–AI Generative Dialogue, the asymmetry matters. AI may help search the space; the human remains accountable for where the work goes and what is ultimately accepted.</p>
          <div className="theme-grid">
            {humanAuthority.map(([title, copy]) => (
              <article key={title}><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </section>

        <section className="development-question">
          <div className="eyebrow bronze">A demonstrated case</div>
          <h2>The Way itself emerged through Generative Dialogue.</h2>
          <p>The development of The Way became an unusually visible case of this mechanism in practice. Individual stories, book chapters, family lessons, frameworks, website architecture, questions about inheritance, and conversations about human–AI collaboration began as separate dots.</p>
          <p>Through repeated dialogue, those dots were questioned, connected, reorganized, challenged, and placed against a larger whole. The architecture changed when the evidence no longer supported the earlier frame. Contradictions were surfaced. Language became more precise. Ideas that first appeared incidental became foundational, while other ideas were narrowed or discarded.</p>
          <p>That process eventually revealed something larger than the artifacts that started it: a philosophy about inheriting wisdom without inheriting dogma, developing Your Way, creating The Way Forward, and leaving those who come after a stronger starting point without narrowing their future.</p>
          <p>The case matters because it makes the process inspectable. Generative Dialogue is not a theory invented after the fact; it is a name for a pattern that became visible through the work itself.</p>
        </section>

        <section className="development-principles">
          <div className="eyebrow bronze">Relationship to the larger system</div>
          <h2>Generative Dialogue is a discovery and refinement mechanism inside The Way.</h2>
          <div className="related-idea-links">
            <Link href="/dots/"><strong>D.O.T.S.</strong><span>Collect dots, observe patterns, transfer principles across contexts, and synthesize something useful.</span></Link>
            <Link href="/the-way/"><strong>The Way</strong><span>The larger philosophy that asks what is worth learning, adapting, living, and passing forward.</span></Link>
            <Link href="/ideas/living-legacy/"><strong>Living Legacy</strong><span>Preserve what is learned without freezing it into a script for the next generation.</span></Link>
            <Link href="/ideas/make-knowledge-travel/"><strong>Make Knowledge Travel</strong><span>Turn discovery into knowledge another person can question, use, improve, and carry farther.</span></Link>
            <Link href="/papers/"><strong>The Way Papers</strong><span>Develop living ideas in public while allowing the thinking to keep evolving.</span></Link>
          </div>
        </section>

        <section className="development-principles">
          <div className="eyebrow bronze">The standard</div>
          <h2>A generative conversation should leave the thinking stronger.</h2>
          <blockquote className="book-quote">Question deeply. Challenge respectfully. Preserve provenance. Keep human judgment intact. Pass forward what survives the dialogue.</blockquote>
          <p>Generative Dialogue is useful when it increases clarity without pretending certainty, expands perspective without erasing authorship, and creates something that can withstand another round of questioning.</p>
          <p style={{ marginTop: "30px" }}><Link className="text-link" href="/ideas/">Explore related ideas →</Link></p>
        </section>
      </InteriorPage>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
