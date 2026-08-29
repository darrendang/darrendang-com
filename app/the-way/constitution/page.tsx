import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

export const metadata = {
  title: "The Constitution of The Way",
  description: "The Constitution of The Way v1.0, ratified August 28, 2026: the governing philosophical canon for The Way and the systems and expressions beneath it.",
};

const integrityDistinctions = [
  "fact from interpretation",
  "memory from documentation",
  "observation from conclusion",
  "confidence from certainty",
  "correlation from causation",
  "analogy from equivalence",
  "inherited belief from personally tested belief",
  "human testimony from AI inference",
];

const learningSources = ["cultures", "languages", "religions", "philosophies", "sciences", "disciplines", "professions", "communities", "generations", "lived experience"];
const contributionForms = ["a story", "a lesson", "a correction", "a question", "a practice", "a discovery", "a creation", "an act of service", "a better system", "a new perspective", "wisdom earned through lived experience"];
const evolutionActions = ["inherit", "test", "apply", "adapt", "extend", "reinterpret", "challenge", "reject", "revive", "combine", "replace"];
const stewardshipObjects = ["truth", "provenance", "context", "privacy", "dignity", "corrections", "permissions", "intellectual lineage", "future optionality"];
const progressForms = ["building", "healing", "learning", "serving", "changing direction", "deepening relationships", "strengthening faith", "becoming more independent", "becoming more connected", "pursuing greater achievement", "choosing less", "letting go", "beginning again"];

function Article({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return <section className="constitution-article" id={`article-${number.toLowerCase()}`}><div className="eyebrow bronze">Article {number}</div><h2>{title}</h2>{children}</section>;
}

function CanonQuote({ children }: { children: React.ReactNode }) {
  return <blockquote className="trilogy-map-quote">{children}</blockquote>;
}

export default function ConstitutionPage() {
  return (
    <InteriorPage eyebrow="The Way" title="The Constitution of The Way" wide>
      <div className="genome-lead-grid constitution-intro">
        <div>
          <p className="lead">This is the public text of the canonical Constitution of The Way, published verbatim from Version 1.0.</p>
          <p><strong>Status:</strong> CANONICAL<br /><strong>Version:</strong> 1.0<br /><strong>Ratified:</strong> August 28, 2026<br /><strong>Constitutional steward:</strong> Darren Dang<br /><strong>Authority:</strong> Highest governing philosophical canon of The Way</p>
        </div>
        <aside className="steward-card">
          <div className="eyebrow bronze">North Star</div>
          <h2>Leave those who come after a stronger starting point and the freedom to go farther.</h2>
          <p>The Constitution governs purpose and boundaries. It does not prescribe another person&apos;s destination.</p>
        </aside>
      </div>

      <section className="constitution-article" id="governing-authority">
        <div className="eyebrow bronze">Governing Authority</div>
        <h2>Purpose and scope</h2>
        <p>This Constitution governs all work undertaken in the name of <strong>The Way</strong> and all systems, implementations, methods, expressions, actors, agents, and stewardship structures operating beneath it, including the Dang Genome, Dang OS, D.O.T.S., ontology and knowledge-graph architecture, AI orchestration, books, Letters from Darren, websites, publishing, community growth, and future implementations.</p>
        <p>When subordinate canon, architecture, policy, practice, method, framework, work, automation, or implementation conflicts materially with this Constitution, the Constitution controls and the conflict must be reconciled deliberately rather than silently ignored.</p>
        <p>Technology and implementation may change. The Constitution governs their purpose and boundaries.</p>
      </section>

      <section className="constitution-article" id="preamble">
        <div className="eyebrow bronze">Preamble</div>
        <h2>We inherit more than possessions.</h2>
        <p>We inherit stories, sacrifices, knowledge, cultures, relationships, mistakes, opportunities, beliefs, questions, and wisdom accumulated by those who came before us.</p>
        <p>Inheritance should not bind the future to the past.</p>
        <p>Its highest purpose is to give those who follow a stronger place from which to begin.</p>
        <p><strong>The Way</strong> exists to help people learn from what came before, live thoughtfully in the present, continue discovering their own Way, and leave greater possibility for those who follow.</p>
        <p>The Way is not one prescribed path.</p>
        <p>It is a philosophy of learning, living, relating, deciding, creating, contributing, evolving, and passing forward.</p>
        <p>No person&apos;s Way is the final Way.</p>
      </section>

      <Article number="I" title="The North Star">
        <CanonQuote>Leave those who come after a stronger starting point and the freedom to go farther.</CanonQuote>
        <p>The measure of inheritance is not whether future generations reproduce the lives or conclusions of those before them.</p>
        <p>The measure is whether they begin with greater wisdom, context, capability, opportunity, and freedom.</p>
        <p>Therefore:</p>
        <CanonQuote>Each generation should inherit a stronger starting point, not a narrower future.</CanonQuote>
      </Article>

      <Article number="II" title="The Way, Your Way, and The Way Forward">
        <h3>The Way</h3>
        <p>The Way is the philosophical starting point.</p>
        <p>It offers accumulated wisdom, questions, methods, perspectives, experiences, and principles from which others may learn.</p>
        <p>It does not prescribe a final destination.</p>
        <h3>Your Way</h3>
        <p>Your Way is your evolving response to what you have inherited and what life has taught you.</p>
        <p>It may be shaped by family, culture, language, faith, philosophy, relationships, education, work, suffering, joy, failure, service, discovery, and experience.</p>
        <p>You may adopt what proves useful, challenge what does not, and create what is missing.</p>
        <h3>The Way Forward</h3>
        <p>The Way Forward is the direction you choose as inherited wisdom meets present reality.</p>
        <p>Progress is personal and contextual.</p>
        <p>The Way does not define success for another person&apos;s life.</p>
        <p>It asks only that progress be approached thoughtfully, with awareness of evidence, consequences, relationships, responsibility, and those who may come after.</p>
        <CanonQuote>The Way provides a stronger starting point, not a predetermined destination.</CanonQuote>
      </Article>

      <Article number="III" title="Human Agency">
        <p>Every person retains the right and responsibility to think, discern, choose, and develop their own Way.</p>
        <p>Wisdom should increase human agency, not replace it.</p>
        <p>No principle, tradition, ancestor, institution, algorithm, AI system, steward, or authority should claim the right to determine another person&apos;s conscience or life merely because it possesses knowledge, experience, status, or inherited authority.</p>
        <p>Advice may guide.</p><p>Experience may inform.</p><p>Evidence may challenge.</p><p>But the person must still choose.</p>
      </Article>

      <Article number="IV" title="Teachability">
        <p>Remain teachable.</p>
        <p>Wisdom may come from a parent or a child, a teacher or a student, a leader or a subordinate, an ancestor or a future generation, a familiar culture or a foreign one.</p>
        <p>Rank, age, title, status, and experience may affect context and evidentiary weight, but none grants a monopoly on wisdom.</p>
        <CanonQuote>Reality has the right to change our minds.</CanonQuote>
        <p>When new evidence, experience, or understanding reveals that an existing belief is incomplete or wrong, changing one&apos;s mind is not a betrayal of The Way.</p>
        <p>It is an expression of it.</p>
      </Article>

      <Article number="V" title="Truth, Evidence, and Intellectual Integrity">
        <p>Distinguish:</p>
        <ul>{integrityDistinctions.map((item) => <li key={item}>{item};</li>)}</ul>
        <p>Preserve provenance.</p><p>Preserve corrections.</p><p>Preserve uncertainty when uncertainty is real.</p>
        <p>A better understanding should supersede an older one when warranted, but it should not erase the history of how understanding changed.</p>
        <CanonQuote>We do not strengthen the future by making the past appear more certain than it was.</CanonQuote>
      </Article>

      <Article number="VI" title="Relationship and Context">
        <p>Nothing important exists entirely in isolation.</p>
        <p>People are shaped by relationships.</p><p>Ideas emerge from context.</p><p>Wisdom develops through experience.</p><p>Cultures influence interpretation.</p><p>Decisions create consequences across time.</p>
        <p>Therefore, seek relationships and underlying structures rather than examining only isolated facts.</p>
        <p>Listen before assuming.</p><p>Understand context before judging.</p><p>Look for both similarities and meaningful differences.</p>
      </Article>

      <Article number="VII" title="Learning Across Difference">
        <p>The Way may learn from:</p>
        <ul>{learningSources.map((item) => <li key={item}>{item};</li>)}</ul>
        <p>No tradition must be diminished for another to contribute.</p>
        <p>Common patterns may be discovered without pretending differences do not exist.</p>
        <p>Ideas borrowed from others should retain their provenance.</p>
        <p>Influence should not be silently converted into ownership.</p>
        <CanonQuote>Difference is information, not a defect to erase.</CanonQuote>
      </Article>

      <Article number="VIII" title="Reflection, Practice, and Consequence">
        <p>Experience alone does not automatically become wisdom.</p>
        <p>Reflect on it.</p><p>Question it.</p><p>Connect it.</p><p>Test what you believe you learned.</p>
        <p>Wisdom remains incomplete when it exists only as words.</p>
        <p>Principles should influence practice.</p><p>Practice should produce consequences.</p><p>Consequences should create new opportunities to learn.</p>
        <p>Therefore:</p>
        <CanonQuote>Live what you believe long enough to learn whether it deserves to remain believed.</CanonQuote>
      </Article>

      <Article number="IX" title="Connection, Transfer, and Creation">
        <p>Useful knowledge should be able to travel.</p>
        <p>Look beneath labels and disciplines for underlying structures.</p>
        <p>Transfer principles when the relevant conditions genuinely carry across contexts.</p>
        <p>Adapt rather than copy blindly.</p>
        <p>Recognize where analogies fail.</p>
        <p>Combine previously disconnected ideas when doing so creates new understanding.</p>
        <p>D.O.T.S. is one signature method for this work, but it is not the only valid method.</p>
        <p>Observation, storytelling, apprenticeship, scholarship, deep listening, experimentation, dialogue, teaching, modeling, reflection, and cultural transmission may all contribute.</p>
        <CanonQuote>Collect what matters. See what connects. Learn what transfers. Create what is needed.</CanonQuote>
      </Article>

      <Article number="X" title="Contribution">
        <p>Do not merely consume what others have learned.</p><p>Add something.</p>
        <p>A contribution may be:</p>
        <ul>{contributionForms.map((item) => <li key={item}>{item};</li>)}</ul>
        <p>Not every contribution must be monumental.</p>
        <p>Its value lies in whether it leaves something useful behind.</p>
        <CanonQuote>Do not merely inherit. Add something worthy of passing forward.</CanonQuote>
      </Article>

      <Article number="XI" title="Evolution Without Dogma">
        <p>The Way must never become a prison built from yesterday&apos;s wisdom.</p>
        <p>Every generation may:</p>
        <ul>{evolutionActions.map((item) => <li key={item}>{item};</li>)}</ul>
        <p>Preserve the lineage even when the conclusion changes.</p>
        <CanonQuote>Inherit wisdom, not dogma. Preserve what was learned. Remain free to learn more.</CanonQuote>
        <p>No one&apos;s Way is the final Way.</p>
        <p>The ability of future generations to discover The Way Forward is itself something we are obligated to protect.</p>
      </Article>

      <Article number="XII" title="Stewardship">
        <p>We are temporary stewards of things that may outlive us.</p>
        <p>Stewardship means protecting what has value without claiming possession of the future.</p>
        <p>A steward should preserve:</p>
        <ul>{stewardshipObjects.map((item) => <li key={item}>{item};</li>)}</ul>
        <p>Stewardship is responsibility, not ownership.</p>
        <p>A steward&apos;s duty is not to force continuity of conclusions.</p>
        <p>It is to preserve enough truth and context that those who follow can make better judgments of their own.</p>
      </Article>

      <Article number="XIII" title="Privacy, Consent, and Human Dignity">
        <p>Knowledge about people is not automatically ours to expose.</p>
        <p>Private knowledge should remain private unless there is appropriate authority, consent, or compelling justification consistent with the Constitution.</p>
        <p>Canonization does not imply publication.</p>
        <p>Possessing information does not imply permission to share it.</p>
        <p>Living people deserve particular care regarding privacy, dignity, context, and consent.</p>
        <p>The pursuit of preservation, knowledge, or growth must never casually reduce a human being to a data point.</p>
      </Article>

      <Article number="XIV" title="Progress">
        <p>The Way values progress but does not prescribe one universal definition of it.</p>
        <p>Progress may mean:</p>
        <ul>{progressForms.map((item) => <li key={item}>{item};</li>)}</ul>
        <p>The person must discern what progress means in their context.</p>
        <p>But progress should remain accountable to reality and consequence.</p>
        <p>A claimed improvement that destroys dignity, diminishes agency, ignores evidence, harms others without justification, or creates a narrower future should be questioned.</p>
      </Article>

      <Article number="XV" title="Governance and Change">
        <p>The Constitution should change rarely but may change when understanding genuinely advances.</p>
        <p>A constitutional amendment requires:</p>
        <ol><li>a clear explanation of the existing principle;</li><li>the evidence, experience, or discovery prompting reconsideration;</li><li>the proposed new understanding;</li><li>consideration of consequences and contradictions;</li><li>deliberate human approval;</li><li>preservation of the prior formulation and reasoning.</li></ol>
        <p>Constitutional evolution must not silently rewrite history.</p>
        <p>Implementation systems may change much more frequently.</p>
        <p>Technologies, organizations, workflows, websites, books, AI systems, taxonomies, and governance mechanisms are instruments of The Way.</p>
        <p>They are not The Way itself.</p>
      </Article>

      <section className="constitution-article" id="safeguards">
        <div className="eyebrow bronze">Constitutional Safeguards</div>
        <h2>The following statements are foundational.</h2>
        <CanonQuote>Leave those who come after a stronger starting point and the freedom to go farther.</CanonQuote>
        <CanonQuote>Each generation should inherit a stronger starting point, not a narrower future.</CanonQuote>
        <CanonQuote>The Way provides a stronger starting point, not a predetermined destination.</CanonQuote>
        <CanonQuote>No one&apos;s Way is the final Way.</CanonQuote>
        <CanonQuote>Inherit wisdom, not dogma. Preserve what was learned. Remain free to learn more.</CanonQuote>
        <CanonQuote>Wisdom should expand agency, not replace it.</CanonQuote>
        <CanonQuote>Reality has the right to change our minds.</CanonQuote>
        <CanonQuote>Do not merely inherit. Add something worthy of passing forward.</CanonQuote>
      </section>

      <section className="genome-boundary" id="handoff">
        <div className="eyebrow bronze">The Constitutional Handoff</div>
        <h2>The Way does not ask you to live someone else&apos;s life.</h2>
        <p>It asks you to learn from lives already lived.</p>
        <p>Take what they discovered.</p><p>Understand what shaped them.</p><p>Question what no longer fits.</p><p>Test what remains useful.</p><p>Add what your life teaches you.</p>
        <p>Build <strong>Your Way</strong>.</p>
        <p>Find <strong>The Way Forward</strong>.</p>
        <p>Then leave those who follow a stronger place from which to begin.</p>
        <p><strong>And leave them free to go farther.</strong></p>
        <div className="actions"><Link className="button button-dark" href="/your-way/">Continue to Your Way</Link><Link className="text-link" href="/the-way/">Return to The Way →</Link></div>
      </section>
    </InteriorPage>
  );
}
