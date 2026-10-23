import { pageMetadata } from "@/lib/seo";
import { WorkStructuredData } from "@/components/WorkStructuredData";
import type { Metadata } from "next";
import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

export const metadata: Metadata = pageMetadata("/letters/the-way-is-not-my-way/", {
  title: "The Way Is Not My Way — Letter 001",
  description: "A small change from when to if opened a larger question: how do we pass wisdom forward while leaving another person free to choose? A letter from Darren Dang.",
  alternates: { canonical: "/letters/the-way-is-not-my-way/" },
  openGraph: {
    title: "The Way Is Not My Way | Letters from Darren",
    description: "What am I really trying to pass forward? My answers—or the ability to find better ones?",
    type: "article",
    publishedTime: "2026-10-14",
    url: "/letters/the-way-is-not-my-way/",
  },
});

export default function Letter001() {
  return (
    <InteriorPage path="/letters/the-way-is-not-my-way/" eyebrow="Letters from Darren · Letter 001" title="The Way Is Not My Way">
      <WorkStructuredData kind="Article" name="The Way Is Not My Way — Letter 001" path="/letters/the-way-is-not-my-way/" description={metadata.description} datePublished="2026-10-14" />
      <p className="note"><time dateTime="2026-10-14">October 14, 2026</time></p>
      <article className="letter-reading">
          <p>{"There are moments when a single word reveals more than we intended."}</p>
          <p>{"I was talking about the future of one of my children and heard myself say when."}</p>
          <p>{"When you do this."}</p>
          <p>{"When you choose that."}</p>
          <p>{"When your life reaches the next thing I imagined for you."}</p>
          <p>{"Nothing about the conversation felt harsh. I thought I was being encouraging."}</p>
          <p>{"Then I heard the word differently."}</p>
          <p>{"When."}</p>
          <p>{"Not if."}</p>
          <p>{"It was a small word, but it carried an assumption: that the future I could see was the future they should want."}</p>
          <p>{"I changed it."}</p>
          <p>{"If."}</p>
          <p>{"If that is what you choose."}</p>
          <p>{"The difference was only one word."}</p>
          <p>{"The difference in meaning was much larger."}</p>
          <p>{"Parents are supposed to know things their children do not know yet."}</p>
          <p>{"Experience matters."}</p>
          <p>{"We have made mistakes they have not made. We have watched certain choices unfold over years instead of days. We know consequences that can be hard to see from the beginning."}</p>
          <p>{"So there is nothing wrong with saying:"}</p>
          <p>{"I know something you may not know."}</p>
          <p>{"The danger begins when that becomes:"}</p>
          <p>{"Therefore I know what you should do."}</p>
          <p>{"There is a small distance between those two ideas."}</p>
          <p>{"I am still learning that boundary. I suspect I always will be."}</p>
          <p>{"The same problem appears whenever we try to pass wisdom forward."}</p>
          <p>{"If I have learned something the hard way, naturally I want to spare someone I love from learning it the same way. If a path worked for me, naturally I want to point toward it. If I can see a risk, naturally I want to warn them."}</p>
          <p>{"That instinct can come from love."}</p>
          <p>{"But love can still become pressure."}</p>
          <p>{"Advice can become expectation."}</p>
          <p>{"A starting point can quietly become a destination."}</p>
          <p>{"And the person receiving our wisdom can begin living inside a future we designed for them."}</p>
          <p>{"That is one reason I keep returning to a question:"}</p>
          <p>{"What am I really trying to pass forward? My answers—or the ability to find better ones?"}</p>
          <p>{"I have lived one life."}</p>
          <p>{"It has taught me things."}</p>
          <p>{"Some lessons feel durable. Some are still changing. Some may prove useful to my children. Some may belong mostly to the circumstances that produced them."}</p>
          <p>{"None of that gives me ownership of another person’s future."}</p>
          <p>{"The Way should never become my way imposed on you."}</p>
          <p>{"That sentence matters to me because any philosophy about inheritance carries a risk."}</p>
          <p>{"The more carefully we preserve something, the easier it is to begin protecting it. The more valuable we believe it is, the easier it is to expect others to value it in the same way."}</p>
          <p>{"Then preservation becomes obedience without anyone announcing the change."}</p>
          <p>{"I do not want that."}</p>
          <p>{"There are things I hope my children inherit."}</p>
          <p>{"Curiosity. Integrity. A willingness to learn. The habit of looking beyond the immediate problem. A sense that people matter more than titles. An appreciation for where they came from. The courage to change direction when reality changes."}</p>
          <p>{"But even those are things I hope they examine, not merely repeat."}</p>
          <p>{"The important question is not:"}</p>
          <p>{"Does this sound like Dad?"}</p>
          <p>{"It is:"}</p>
          <p>{"Does this help me see my own life more clearly?"}</p>
          <p>{"If it does, use it. If it does not, question it. If something I pass forward is incomplete, improve it. If I am wrong, correct me. If the world you inherit requires something I never learned, learn it."}</p>
          <p>{"This is harder to live than it is to write."}</p>
          <p>{"There are decisions my children can make that I may disagree with. There may be paths that make me nervous. There may be moments when I think experience has given me a better answer."}</p>
          <p>{"Sometimes I may even be right."}</p>
          <p>{"But being right about a risk is not the same as owning someone else’s choice."}</p>
          <p>{"Maybe that is the real test."}</p>
          <p>{"Can I give someone what I learned without requiring them to become the person who learned it?"}</p>
          <p>{"Can I offer a map while remembering that they are the one walking?"}</p>
          <p>{"That is the kind of inheritance I want to leave."}</p>
          <p>{"Not a destination. A starting point."}</p>
          <p>{"So if you are reading this years from now, I hope you do not ask only what I would have done."}</p>
          <p>{"Ask what you see. Ask what has changed. Ask what matters to you. Ask what consequences you are willing to carry."}</p>
          <p>{"Use anything I left that helps."}</p>
          <p>{"Then do the harder thing:"}</p>
          <p>{"Make the decision yours."}</p>
          <p>{"And I want to leave you with one question:"}</p>
          <p>{"What have you inherited that deserves to be carried forward, and what should you be willing to reconsider?"}</p>
          <p>{"I may have a view. I may even tell you what it is."}</p>
          <p>{"But in the end, this is your life."}</p>
          <p>{"I would rather see you go farther than see you agree with me."}</p>
          <p>{"— Darren"}</p>
      </article>
      <nav className="actions" aria-label="Continue reading" style={{ marginTop: "3rem" }}>
        <Link className="button button-dark" href="/letters/">All Letters</Link>
        <Link className="text-link" href="/your-way/">Reflect through Your Way →</Link>
        <Link className="text-link" href="/letters/why-these-letters/">Why These Letters →</Link>
      </nav>
    </InteriorPage>
  );
}
