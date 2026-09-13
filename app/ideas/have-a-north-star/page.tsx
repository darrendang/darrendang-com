import type { Metadata } from "next";
import { IdeaDetailPage } from "@/components/IdeaDetailPage";

export const metadata: Metadata = {
  title: "Have a North Star.",
  description: "Explore Darren Dang's distinction between a stable purpose and the routes, plans, and tactics that should remain free to change.",
  alternates: { canonical: "/ideas/have-a-north-star/" },
};

export default function NorthStarIdeaPage() {
  return <IdeaDetailPage
    eyebrow="Judgment & Purpose"
    title="Have a North Star."
    thesis="A plan is a route. Purpose is the North Star. Good judgment changes the route when reality requires it without losing sight of what the effort is ultimately for."
    quote="Change the route without losing the reason for the journey."
    meaningTitle="Direction can remain stable while the path changes."
    meaning={[
      "Plans are useful because they coordinate action. They become dangerous when following the plan becomes more important than the purpose that justified the plan in the first place.",
      "A North Star is not a detailed answer. It is a durable orienting purpose that helps evaluate changing routes, competing opportunities, and unexpected evidence. In The Way, the constitutional North Star is to leave those who come after a stronger starting point and the freedom to go farther."
    ]}
    principles={[
      { title: "Purpose above plan", copy: "Use plans as instruments. When conditions change, ask whether the route still serves the purpose rather than defending the route because it was previously approved." },
      { title: "Stable enough to orient", copy: "A North Star should be durable enough to guide decisions across changing contexts without becoming a rigid prescription." },
      { title: "Specific enough to constrain", copy: "Purpose should rule out choices that look efficient or attractive but undermine what the effort is actually for." },
      { title: "Reality retains veto power", copy: "A good North Star does not excuse ignoring evidence. It helps distinguish the destination from assumptions about how to get there." }
    ]}
    boundaries={[
      { title: "Not a slogan", copy: "A North Star matters only if it changes tradeoffs, priorities, and behavior when choices become difficult." },
      { title: "Not a fixed destination for everyone", copy: "The Way can offer orientation without prescribing another person's life. Your Way and The Way Forward remain contextual and reader-owned." },
      { title: "Not permission for drift", copy: "Flexibility in route should increase accountability to purpose, not reduce it." }
    ]}
    applications={[
      { title: "Strategy", copy: "When technology, budgets, vendors, or organizational conditions change, preserve the mission while changing the implementation path." },
      { title: "Leadership", copy: "Use purpose to decide what deserves attention, what can be delegated, and which opportunities should be declined." },
      { title: "Family decisions", copy: "A shared purpose can help family members take different routes without requiring identical choices." },
      { title: "Personal change", copy: "A career, project, or life plan can change substantially while the deeper purpose remains intact." }
    ]}
    primary={{ title: "Explore The Way", label: "Explore The Way", href: "/the-way/", copy: "The philosophical root and constitutional North Star behind the wider body of work." }}
    connections={[
      { title: "The Way", href: "/the-way/", copy: "The philosophical root and its stronger-starting-point North Star." },
      { title: "The Way Forward", href: "/the-way-forward/", copy: "How inherited orientation becomes a context-specific direction chosen by the reader." },
      { title: "Use The Way", href: "/use-the-way/", copy: "A practical Five Movements layer for working real decisions without mistaking method for destination." },
      { title: "Living Legacy", href: "/ideas/living-legacy/", copy: "Why preservation should strengthen the next person's starting point without narrowing their future." },
      { title: "Letters from Darren", href: "/letters/", copy: "Reflections where purpose, route changes, and evolving judgment can be seen in lived context." }
    ]}
  />;
}
