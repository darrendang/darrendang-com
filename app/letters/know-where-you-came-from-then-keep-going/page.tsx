import { pageMetadata } from "@/lib/seo";
import { WorkStructuredData } from "@/components/WorkStructuredData";
import type { Metadata } from "next";
import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

export const metadata: Metadata = pageMetadata("/letters/know-where-you-came-from-then-keep-going/", {
  title: "Know Where You Came From. Then Keep Going. — Letter 002",
  description: "In Letter 002, Darren Dang revisits the letters he wrote after losing his parents, reflecting on family memory, gratitude, inheritance, and the freedom to keep going.",
  alternates: { canonical: "/letters/know-where-you-came-from-then-keep-going/" },
  openGraph: {
    title: "Know Where You Came From. Then Keep Going. | Letters from Darren",
    description: "In Letter 002, Darren Dang revisits the letters he wrote after losing his parents, reflecting on family memory, gratitude, inheritance, and the freedom to keep going.",
    type: "article",
    publishedTime: "2026-11-12",
    url: "/letters/know-where-you-came-from-then-keep-going/",
  },
});

export default function Letter002() {
  return (
    <InteriorPage path="/letters/know-where-you-came-from-then-keep-going/" eyebrow="Letters from Darren · Letter 002" title="Know Where You Came From. Then Keep Going.">
      <WorkStructuredData kind="Article" name="Know Where You Came From. Then Keep Going. — Letter 002" path="/letters/know-where-you-came-from-then-keep-going/" description={metadata.description} datePublished="2026-11-12" />
      <p className="note"><time dateTime="2026-11-12">November 12, 2026</time></p>
      <article className="letter-reading">
          <p>{"I recently reread letters I wrote more than twenty years ago."}</p>
          <p>{"They were connected to two of the hardest periods of my life: losing my father and, a few years later, losing my mother."}</p>
          <p>{"I recognized the person who wrote them."}</p>
          <p>{"But I was not exactly that person anymore."}</p>
          <p>{"The words belonged to me. So did the grief. So did the understanding I had at the time."}</p>
          <p>{"And yet I could see things now that I could not see then."}</p>
          <p>{"That creates an interesting problem."}</p>
          <p>{"What do we do with the earlier versions of ourselves?"}</p>
          <p>{"Do we correct them? Polish them? Rewrite the language so it sounds more like who we are today?"}</p>
          <p>{"I do not think I want to."}</p>
          <p>{"I would not change them because they tell the truth about who I was then."}</p>
          <p>{"That does not mean every conclusion in them must remain my conclusion forever."}</p>
          <p>{"It means the record deserves to remain honest."}</p>
          <p>{"I think families face the same question."}</p>
          <p>{"We inherit stories. Traditions. Expectations. Values. Ways of speaking. Ways of showing love. Ways of handling conflict. Ideas about work, money, education, religion, family, duty, success, and sacrifice."}</p>
          <p>{"Some of those things are precious. Some were shaped by conditions that no longer exist. Some carry wisdom. Some carry fear. Most carry both more complexity and more history than we realize."}</p>
          <p>{"So what does it mean to honor where we came from?"}</p>
          <p>{"For a long time, I think I treated preservation and loyalty as if they were almost the same thing."}</p>
          <p>{"Now I see a distinction that matters to me:"}</p>
          <p>{"The past deserves to be preserved honestly. It does not have to be obeyed forever."}</p>
          <p>{"My parents gave me a starting point."}</p>
          <p>{"Their lives were shaped by circumstances I did not fully understand as a child: war, loss, displacement, responsibility, immigration, work, family obligations, choices made under pressure."}</p>
          <p>{"By the time I inherited the lessons, I often inherited the conclusion without the full conditions that produced it."}</p>
          <p>{"That is normal."}</p>
          <p>{"It is also why context matters."}</p>
          <p>{"A lesson can be wise in one environment and incomplete in another."}</p>
          <p>{"A rule that protected one generation can become a constraint on the next if no one is allowed to ask why it existed."}</p>
          <p>{"This matters to me as a father."}</p>
          <p>{"I want my children to know where they came from. I want them to know our family stories. I want them to understand sacrifices that created opportunities they did not have to create for themselves. I want them to know the people whose lives became part of their starting point."}</p>
          <p>{"But I do not want where they came from to decide where they are allowed to go."}</p>
          <p>{"That is not gratitude."}</p>
          <p>{"That is confinement."}</p>
          <p>{"Sometimes I imagine one of my children reading something I wrote years from now and asking:"}</p>
          <p>{"Dad, do you still believe this?"}</p>
          <p>{"I hope the honest answer is sometimes:"}</p>
          <p>{"Yes."}</p>
          <p>{"And sometimes:"}</p>
          <p>{"Not exactly."}</p>
          <p>{"And sometimes:"}</p>
          <p>{"I understand it differently now."}</p>
          <p>{"And sometimes:"}</p>
          <p>{"You may see something I missed."}</p>
          <p>{"What do you see that I did not?"}</p>
          <p>{"That question protects the relationship between memory and freedom."}</p>
          <p>{"Preserving wisdom cannot mean protecting it from change."}</p>
          <p>{"It should mean protecting it from being lost long enough for someone else to examine it."}</p>
          <p>{"That is a very different kind of preservation."}</p>
          <p>{"It does not put the past behind glass."}</p>
          <p>{"It keeps the evidence. It preserves the voice. It remembers the conditions."}</p>
          <p>{"Then it allows another person to ask:"}</p>
          <p>{"Does this still hold? What part of it travels? What part belongs to that time? What should be carried forward? What should be changed?"}</p>
          <p>{"There are things I would never want erased simply because our family grows beyond them."}</p>
          <p>{"Our refugee history should not disappear because later generations become comfortable. The sacrifices of people before us should not disappear because we no longer face the same hardship. The values that helped people survive deserve to be remembered even if survival is no longer the immediate problem."}</p>
          <p>{"But remembrance is different from reenactment."}</p>
          <p>{"You do not have to reproduce someone’s suffering to prove you learned from it. You do not have to make the same choices to honor the people who made them. You do not have to remain inside an inherited answer to remain connected to the people who gave it to you."}</p>
          <p>{"That is why I increasingly think we do not have to choose between memory and freedom."}</p>
          <p>{"We can preserve the past without freezing the future. We can honor the people who came before without pretending they had the last word. We can know our roots without demanding that every branch grow in the same direction."}</p>
          <p>{"If these Letters survive me, I hope they are read that way."}</p>
          <p>{"They are records. They are invitations. They are some of the things I believed strongly enough to leave behind."}</p>
          <p>{"They are not a contract requiring the next generation to agree."}</p>
          <p>{"If you discover something better, I hope you write it down. If you learn that I was wrong, preserve the correction. If you find a way of living that fits your world better than mine would have, live it fully."}</p>
          <p>{"Just know enough of the path behind you to understand what you are carrying—and what you are choosing to put down."}</p>
          <p>{"Know where you came from. Then keep going."}</p>
          <p>{"— Darren"}</p>
      </article>
      <nav className="actions" aria-label="Continue reading" style={{ marginTop: "3rem" }}>
        <Link className="button button-dark" href="/letters/">All Letters</Link>
        <Link className="text-link" href="/letters/the-way-is-not-my-way/">Read Letter 001 →</Link>
        <Link className="text-link" href="/books/wisdom-has-no-rank/">Discover Wisdom Has No Rank →</Link>
      </nav>
    </InteriorPage>
  );
}
