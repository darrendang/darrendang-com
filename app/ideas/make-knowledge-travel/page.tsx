import type { Metadata } from "next";
import { IdeaDetailPage } from "@/components/IdeaDetailPage";

export const metadata: Metadata = {
  title: "Make Knowledge Travel.",
  description: "Explore the idea that knowledge becomes more valuable when another person can understand it, test it, improve it, and pass it forward.",
  alternates: { canonical: "/ideas/make-knowledge-travel/" },
};

export default function MakeKnowledgeTravelPage() {
  return <IdeaDetailPage
    eyebrow="Learning & Scale"
    title="Make Knowledge Travel."
    thesis="Knowledge compounds when it can leave the mind, meeting, team, or generation where it originated and become useful somewhere else."
    quote="What we learn becomes more valuable when another person can use it, test it, improve it, and pass it forward."
    meaningTitle="Transmission is part of the work, not an afterthought."
    meaning={[
      "A lesson that exists only in one person's memory disappears when that person leaves the room. A useful idea becomes more durable when its context, reasoning, examples, limits, and provenance are preserved well enough for someone else to reconstruct why it mattered.",
      "Making knowledge travel does not mean flattening everything into a template. Different forms carry different kinds of understanding: books preserve long arcs, letters preserve living reflection, papers develop ideas, cases preserve practice, and shared wisdom keeps other people's authorship visible."
    ]}
    principles={[
      { title: "Preserve context", copy: "Do not save only the answer. Preserve enough of the situation, evidence, tension, and reasoning for someone else to understand how the conclusion was earned." },
      { title: "Keep provenance", copy: "Who said it, where it came from, what changed, and what remains uncertain are part of the knowledge—not administrative debris." },
      { title: "Design for reuse", copy: "A useful artifact should help another person act, question, compare, teach, or adapt rather than merely admire the original insight." },
      { title: "Invite revision", copy: "Knowledge travels farther when the receiver is allowed to test it against new evidence and improve the map rather than simply inherit doctrine." }
    ]}
    boundaries={[
      { title: "Not everything should travel publicly", copy: "Privacy, consent, family boundaries, confidential work, and unpublished intellectual property still matter. Transmission requires judgment." },
      { title: "Not compression at any cost", copy: "Over-summarizing can destroy the context that made a lesson trustworthy or transferable." },
      { title: "Not ownership erasure", copy: "A system that makes knowledge travel should preserve attribution and the lineage of ideas rather than absorb every contribution into one voice." }
    ]}
    applications={[
      { title: "Families", copy: "Preserve stories, decisions, values, mistakes, and context so the next generation begins with more than isolated anecdotes." },
      { title: "Organizations", copy: "Turn tacit operating knowledge into durable artifacts, decisions, cases, and practices that survive turnover." },
      { title: "Teaching and mentoring", copy: "Give learners not only conclusions but the reasoning patterns and questions that help them navigate new situations." },
      { title: "Publishing", copy: "Use different public forms for timeless principles, living ideas, demonstrated practice, and other people's wisdom." }
    ]}
    primary={{ title: "Explore The Dang Genome", label: "Explore The Dang Genome", href: "/genome/", copy: "The connected knowledge architecture for preserving relationships among ideas, people, experiences, works, and evidence." }}
    connections={[
      { title: "The Dang Genome", href: "/genome/", copy: "The connected body of knowledge designed to preserve relationships, provenance, and transmission across generations." },
      { title: "Living Legacy", href: "/ideas/living-legacy/", copy: "The stewardship principle behind preserving wisdom without turning inheritance into a cage." },
      { title: "Letters from Darren", href: "/letters/", copy: "A lighter-weight form for preserving reflection while the learning is still moving." },
      { title: "Books", href: "/books/", copy: "Long-form expressions that preserve larger arcs of experience, philosophy, and method." },
      { title: "Shared Wisdom", href: "/shared-wisdom/", copy: "A public surface for carrying other people's wisdom without erasing their authorship." },
      { title: "The Way Papers", href: "/papers/", copy: "A place for living ideas to develop in public while remaining open to evidence and revision." }
    ]}
  />;
}
