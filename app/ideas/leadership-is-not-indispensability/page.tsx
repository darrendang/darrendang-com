import type { Metadata } from "next";
import { IdeaDetailPage } from "@/components/IdeaDetailPage";

export const metadata: Metadata = {
  title: "Leadership Is Not Indispensability.",
  description: "Explore the idea that strong leadership builds people, judgment, and systems that continue working when the leader is not in the room.",
  alternates: { canonical: "/ideas/leadership-is-not-indispensability/" },
};

export default function LeadershipIdeaPage() {
  return <IdeaDetailPage
    eyebrow="Leadership & Capability"
    title="Leadership Is Not Indispensability."
    thesis="A leader's value is not measured by how much stops when that leader leaves the room. Strong leadership builds people, judgment, relationships, and systems that can continue without constant rescue."
    quote="If everything depends on the leader, the system may be loyal—but it is not yet strong."
    meaningTitle="The goal is capability that survives the leader's absence."
    meaning={[
      "Being needed can feel like evidence of leadership. Sometimes it is evidence of a bottleneck. If decisions, relationships, knowledge, or confidence are concentrated in one person, short-term effectiveness can coexist with long-term fragility.",
      "The stronger measure is multiplication: whether other people become more capable of seeing, deciding, acting, learning, and leading responsibly. That does not make leadership less important. It moves leadership from personal centrality toward stewardship of collective capability."
    ]}
    principles={[
      { title: "Build judgment, not dependence", copy: "Teach people how to think through recurring decisions rather than becoming the permanent answer source." },
      { title: "Make knowledge portable", copy: "Preserve context, decision logic, relationships, and operating knowledge so continuity does not depend on one person's memory." },
      { title: "Create room to grow", copy: "Delegation should include real authority, feedback, and consequences—not just task transfer while the leader retains every meaningful decision." },
      { title: "Design succession before it is needed", copy: "A healthy system can absorb absence, turnover, promotion, and transition without interpreting continuity as disloyalty." }
    ]}
    boundaries={[
      { title: "Not leaderlessness", copy: "Some roles legitimately carry unique accountability. The principle is to avoid unnecessary dependence, not erase responsibility." },
      { title: "Not abdication", copy: "Delegating authority does not mean abandoning coaching, standards, escalation paths, or accountability for the system." },
      { title: "Not interchangeable people", copy: "Resilience does not require pretending expertise and relationships are fungible. It means the system can adapt when one person changes roles." }
    ]}
    applications={[
      { title: "Succession", copy: "Develop successors by exposing them to real decisions, ambiguity, and consequences before transition becomes urgent." },
      { title: "Teams", copy: "Distribute context and decision rights so work does not stall when the most senior person is unavailable." },
      { title: "Mentoring", copy: "A mature mentoring relationship eventually allows the learner to challenge, teach, and exceed the mentor." },
      { title: "Institutions", copy: "Build durable governance, documentation, relationships, and operating rhythms that outlive individual leaders." }
    ]}
    primary={{ title: "Explore Book 1", label: "Explore Book 1", href: "/books/for-those-who-come-after-us/", copy: "The published book contains Darren's broader lessons on leadership, systems, responsibility, and what we pass forward." }}
    connections={[
      { title: "For Those Who Come After Us", href: "/books/for-those-who-come-after-us/", copy: "Book 1's wider treatment of leadership, systems, learning, and legacy." },
      { title: "Wisdom Has No Rank", href: "/ideas/wisdom-has-no-rank/", copy: "Leadership becomes stronger when authority does not block useful insight from flowing upward or sideways." },
      { title: "Make Knowledge Travel", href: "/ideas/make-knowledge-travel/", copy: "Capability survives turnover when knowledge and reasoning can move beyond one person." },
      { title: "The Way in Motion", href: "/the-way-in-motion/", copy: "Cases where leadership and institutional ideas are tested against actual practice and consequence." },
      { title: "Speaking & Talks", href: "/speaking/", copy: "Public conversations about leadership, AI, governance, and institutional capability." }
    ]}
  />;
}
