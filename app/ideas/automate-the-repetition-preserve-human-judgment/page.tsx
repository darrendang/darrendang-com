import type { Metadata } from "next";
import { IdeaDetailPage } from "@/components/IdeaDetailPage";

export const metadata: Metadata = {
  title: "Automate the Repetition. Preserve Human Judgment.",
  description: "Explore Darren Dang's principle for using technology and AI to remove mechanical work while preserving accountable human judgment.",
  alternates: { canonical: "/ideas/automate-the-repetition-preserve-human-judgment/" },
};

export default function HumanJudgmentIdeaPage() {
  return <IdeaDetailPage
    eyebrow="Technology & AI"
    title="Automate the Repetition. Preserve Human Judgment."
    thesis="Technology is most valuable when it removes mechanical work without pretending that every consequential decision is mechanical."
    quote="Automate what repeats. Preserve the judgment that carries responsibility."
    meaningTitle="Efficiency and judgment are different kinds of work."
    meaning={[
      "Automation can compress search, formatting, reconciliation, summarization, routing, comparison, and other repeated work. That creates time and attention. But the hardest institutional questions usually remain: what matters, what evidence is sufficient, what tradeoff is acceptable, who is accountable, and what should happen next.",
      "The principle is therefore not anti-automation. It is a design rule for where automation should stop. The more consequential the decision, the clearer the human responsibility for purpose, interpretation, exception handling, ethics, and final authority should become."
    ]}
    principles={[
      { title: "Remove friction", copy: "Use technology aggressively where the work is repetitive, rules-based, searchable, comparable, or mechanically transformable." },
      { title: "Keep accountability visible", copy: "A faster workflow should not make it harder to know who owns the decision, the exception, or the consequence." },
      { title: "Escalate ambiguity", copy: "Good systems recognize where confidence drops, context matters, or policy and values must be interpreted rather than merely executed." },
      { title: "Design for learning", copy: "Automation should create evidence about what works and where human intervention remains necessary, not simply conceal complexity behind a smoother interface." }
    ]}
    boundaries={[
      { title: "Not human exceptionalism", copy: "Machines may outperform people in many analytical tasks. The point is responsibility, not preserving work for its own sake." },
      { title: "Not automation avoidance", copy: "Keeping humans in every loop can create delay, inconsistency, and false comfort. The human role should be purposeful." },
      { title: "Not a fixed boundary", copy: "As systems improve, the right allocation of work can change. Governance should be revisable as evidence changes." }
    ]}
    applications={[
      { title: "AI-assisted knowledge work", copy: "Let AI retrieve, compare, draft, summarize, and test coherence while people retain responsibility for purpose, truth, meaning, and consequential choice." },
      { title: "Operations", copy: "Automate repeatable routing and reconciliation, then route exceptions and ambiguous cases to accountable people." },
      { title: "Governance", copy: "Use tools to surface evidence and patterns without converting fiduciary, ethical, or policy judgment into a hidden scoring function." },
      { title: "Leadership", copy: "Free people from clerical repetition so more capacity can move toward judgment, relationships, problem framing, and learning." }
    ]}
    primary={{ title: "Read the AI capability paper", label: "Read the AI capability paper", href: "/papers/from-ai-experiments-to-institutional-capability/", copy: "A deeper institutional treatment of experimentation, governance, evidence, and capability." }}
    connections={[
      { title: "From AI Experiments to Institutional Capability", href: "/papers/from-ai-experiments-to-institutional-capability/", copy: "A deeper treatment of how AI moves from experiments into institutional stewardship." },
      { title: "Generative Dialogue", href: "/ideas/generative-dialogue/", copy: "A model for using AI to expand thinking while keeping human authority intact." },
      { title: "The Way in Motion", href: "/the-way-in-motion/", copy: "Cases where ideas meet practice, evidence, limitations, and consequence." },
      { title: "D.O.T.S.", href: "/dots/", copy: "A way to reframe a technology problem as a broader problem of structure, allocation, capability, or governance." },
      { title: "Speaking & Talks", href: "/speaking/", copy: "Public talks that connect AI, organizational capability, and governance." }
    ]}
  />;
}
