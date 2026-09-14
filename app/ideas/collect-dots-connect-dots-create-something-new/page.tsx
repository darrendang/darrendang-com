import type { Metadata } from "next";
import { IdeaDetailPage } from "@/components/IdeaDetailPage";

export const metadata: Metadata = {
  title: "D.O.T.S. is a way of seeing problems",
  description: "Explore the D.O.T.S. idea, its relationship to the full D.O.T.S. method, Book 3, cases, and The Way.",
  alternates: { canonical: "/ideas/collect-dots-connect-dots-create-something-new/" },
};

export default function DotsIdeaPage() {
  return <IdeaDetailPage
    eyebrow="Learning & Innovation"
    title="D.O.T.S. is a way of seeing problems."
    thesis="The label attached to a problem can quietly limit where we look for answers. D.O.T.S. widens the search by moving from label to structure, then asking where else the same underlying problem has appeared."
    quote="D.O.T.S. finds possibility. CREATE earns a possibility."
    meaningTitle="The idea is the doorway. The full D.O.T.S. page is the method."
    meaning={[
      "The origin line was simple: Collect Dots. Connect Dots. Create Something New. Over time, the discipline inside that instinct became clearer: deconstruct the label, observe the underlying structure, transfer what genuinely travels, synthesize it for the new context, then create something reality can test.",
      "This Ideas page preserves D.O.T.S. as a durable intellectual entity. The deeper /dots/ destination carries the extensive public framework, examples, limits, and practical model. Book 3 develops the same way of seeing through stories, cases, reader transfer, and the recursive relationship between D.O.T.S. and CREATE."
    ]}
    principles={[
      { title: "Label → Structure → Search Space", copy: "A category can organize a problem while still narrowing the search for useful answers. Seeing the structure underneath expands where you can look." },
      { title: "Transfer is disciplined", copy: "A useful connection is not permission to copy blindly. Ask what transfers, where the analogy breaks, and what must be adapted." },
      { title: "CREATE closes the loop", copy: "Possibility becomes useful only when it is given form, tested against reality, evaluated, adapted, and allowed to generate new evidence." },
      { title: "The reader eventually owns the lens", copy: "The goal is not dependence on Darren's examples. The method succeeds when the reader begins noticing structures and connections independently." }
    ]}
    boundaries={[
      { title: "Not The Way itself", copy: "D.O.T.S. is one signature method within The Way, especially useful when Connect requires a wider search across perspectives, structures, and domains." },
      { title: "Not clever analogy", copy: "Surface resemblance is weak evidence. Structural fit matters more than novelty or surprise." },
      { title: "Not endless exploration", copy: "Widening the search space is valuable only if judgment eventually narrows toward action, testing, or deliberate non-action." }
    ]}
    applications={[
      { title: "Technology portfolios", copy: "An AI initiative can also be seen as an allocation, uncertainty, capability, governance, trust, and adoption problem." },
      { title: "Public planning", copy: "A planning problem can borrow from tools developed for preference, configuration, and tradeoff analysis when the underlying structure fits." },
      { title: "Personal decisions", copy: "A life problem may become easier to think about when its current label is replaced by a more accurate structural description." },
      { title: "Organizational design", copy: "Look across fields for how other systems handle incentives, feedback, bottlenecks, resilience, ownership, and learning." }
    ]}
    primary={{ title: "Explore the full D.O.T.S. method", label: "Explore the full D.O.T.S. page", href: "/dots/", copy: "The extensive public framework, cases, guardrails, and method." }}
    connections={[
      { title: "D.O.T.S. — full method", href: "/dots/", copy: "The extensive public treatment of Deconstruct → Observe → Transfer → Synthesize → CREATE." },
      { title: "Book 3 · D.O.T.S.", href: "/books/dots/", copy: "The book-length expression, now in first hard-copy proof." },
      { title: "Connect the Dots · Book 1", href: "/books/for-those-who-come-after-us/connect-the-dots/", copy: "An earlier lived example of cross-domain transfer before the larger method was fully named." },
      { title: "From AI Experiments to Institutional Capability", href: "/papers/from-ai-experiments-to-institutional-capability/", copy: "A public example of widening an AI problem into a stewardship and institutional-capability problem." },
      { title: "Generative Dialogue", href: "/ideas/generative-dialogue/", copy: "A complementary discovery mechanism that can expose new dots, patterns, contradictions, and frames." },
      { title: "The Way", href: "/the-way/", copy: "The larger philosophy within which D.O.T.S. is one method rather than the whole system." }
    ]}
  />;
}