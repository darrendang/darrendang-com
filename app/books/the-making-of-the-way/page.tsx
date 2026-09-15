import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

export const metadata: Metadata = {
  title: "The Making of The Way",
  description: "The Making of The Way: How Conversation Becomes Discovery tells the story of how Darren Dang's books and The Way emerged through sustained human-AI dialogue, memory, correction, and discovery.",
  alternates: { canonical: "/books/the-making-of-the-way/" },
  openGraph: {
    title: "The Making of The Way | Darren Dang",
    description: "The story of how the books and The Way were made through sustained human-AI dialogue, memory, correction, and discovery.",
    type: "article",
    url: "/books/the-making-of-the-way/",
    images: [
      {
        url: "/images/the-making-of-the-way-cover.webp",
        width: 200,
        height: 300,
        alt: "Cover of The Making of The Way: How Conversation Becomes Discovery by Darren Dang.",
      },
    ],
  },
};

export default function TheMakingOfTheWayPage() {
  return (
    <InteriorPage eyebrow="Book 4 · In Development" title="The Making of The Way" wide>
      <div className="development-book-grid">
        <div className="development-cover-wrap">
          <Image
            src="/images/the-making-of-the-way-cover.webp"
            width={200}
            height={300}
            alt="Cover of The Making of The Way: How Conversation Becomes Discovery by Darren Dang."
            className="development-cover"
            sizes="200px"
            priority
          />
          <p className="book-caption">Current approved cover for <em>The Making of The Way — How Conversation Becomes Discovery</em>.</p>
        </div>

        <div className="development-copy">
          <div className="book-status">In Development</div>
          <p className="book-hook">How Conversation Becomes Discovery</p>
          <p className="lead">I had wanted to turn these experiences and lessons into books for years. What changed was not that AI suddenly had my story. It was that dialogue gave me a new way to work with the story I already carried.</p>
          <p>Memories led to questions. Questions exposed patterns. Old stories looked different beside new ones. Corrections changed conclusions. Conversations with people who had been part of the original experiences widened the record again.</p>
          <p><em>The Making of The Way</em> opens that workshop. It tells the story of how the books—and eventually The Way—were made, while asking a larger question: what can become visible when a human and AI think together over time?</p>
          <div className="development-actions">
            <Link className="button button-dark" href="/ideas/generative-dialogue/">Explore Generative Dialogue</Link>
            <Link className="text-link" href="/books/">Return to the books →</Link>
          </div>
        </div>
      </div>

      <section className="development-themes">
        <div className="eyebrow bronze">Inside the making</div>
        <h2>The interesting part is not a perfect process. It is how the thinking changed.</h2>
        <div className="theme-grid">
          <article>
            <h3>The human story</h3>
            <p>The raw material came from lived experience: family, work, relationships, memory, decisions, failures, unfinished questions, and people who remembered events differently.</p>
          </article>
          <article>
            <h3>The dialogue</h3>
            <p>AI became a thinking tool for asking, challenging, connecting, restructuring, and testing—not a substitute for having lived the life or deciding what it meant.</p>
          </article>
          <article>
            <h3>The corrections</h3>
            <p>The process becomes trustworthy only when contradictions, changed memories, stronger evidence, and better interpretations are allowed to alter the work.</p>
          </article>
          <article>
            <h3>The discovery</h3>
            <p>Some of the larger ideas were not present in finished form at the beginning. They became visible through the interaction itself.</p>
          </article>
        </div>
      </section>

      <section className="development-question">
        <div className="eyebrow bronze">The central question</div>
        <h2>What happens when conversation becomes part of how we discover?</h2>
        <p className="lead">Some conversations exchange what the participants already know. Others change what they are capable of seeing next.</p>
        <p>This book follows the second kind. It preserves the questions, reframing, discarded structures, corrections, remembered details, disagreements, and moments of connection that changed the work along the way.</p>
        <p>I use the term <strong>Generative Dialogue</strong> for disciplined conversation in which something new can emerge through the exchange—not because either participant began with the final answer, but because the dialogue changed the search space.</p>
        <p>In the human–AI case documented here, AI can help widen that search space and test coherence. Human judgment remains responsible for purpose, truth, meaning, correction, privacy, authorship, canonization, publication, and final direction.</p>
        <blockquote className="trilogy-map-quote">The tool can widen the conversation. The human still has to live, judge, choose, and care.</blockquote>
        <p style={{ marginTop: "30px" }}><Link className="text-link" href="/ideas/generative-dialogue/">Read the public Generative Dialogue idea →</Link></p>
      </section>

      <aside className="development-status-note">
        <strong>Current state</strong>
        <p><em>The Making of The Way</em> is in development. Its reader-first direction, title, subtitle, public thesis, and current cover are established; manuscript structure and final publication timing remain developmental.</p>
      </aside>
    </InteriorPage>
  );
}
