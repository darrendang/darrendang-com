import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

export const metadata: Metadata = {
  title: "The Making of The Way",
  description: "The Making of The Way: How Conversation Becomes Discovery is a companion work in development by Darren Dang exploring Generative Dialogue and the emergence of ideas through sustained conversation.",
  alternates: { canonical: "/books/the-making-of-the-way/" },
  openGraph: {
    title: "The Making of The Way | Darren Dang",
    description: "A companion work in development exploring Generative Dialogue and how sustained conversation can become a mode of discovery.",
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
    <InteriorPage eyebrow="Companion Work · In Development" title="The Making of The Way" wide>
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
          <p className="book-caption">Current approved cover. <em>The Path Forward</em> remains a three-book trilogy; this volume is presented here as a companion work in development.</p>
        </div>

        <div className="development-copy">
          <div className="book-status">In Development</div>
          <p className="book-hook">How Conversation Becomes Discovery</p>
          <p className="lead"><em>The Making of The Way</em> documents an unexpected discovery.</p>
          <p>What began as an effort to develop and refine a set of books became a sustained human–AI dialogue through which patterns, language, and larger principles gradually emerged.</p>
          <p>This work examines that process and the idea of <strong>Generative Dialogue</strong>—disciplined conversation through which observation becomes pattern, pattern becomes discovery, and discovery becomes something that can be practiced and passed forward.</p>
          <div className="development-actions">
            <Link className="button button-dark" href="/ideas/generative-dialogue/">Explore Generative Dialogue</Link>
            <Link className="text-link" href="/books/">Return to Books →</Link>
          </div>
        </div>
      </div>

      <section className="development-themes">
        <div className="eyebrow bronze">How this work fits</div>
        <h2>A companion to the trilogy, and a case study in how ideas emerge.</h2>
        <div className="theme-grid">
          <article>
            <h3>The Path Forward</h3>
            <p>Books 1–3 remain the original trilogy: INHERIT → BECOME → CREATE.</p>
          </article>
          <article>
            <h3>A companion work</h3>
            <p>Book 4 looks at how the larger philosophy and method became visible through sustained inquiry rather than extending the trilogy into a four-book sequence.</p>
          </article>
          <article>
            <h3>A living case study</h3>
            <p>The work follows corrections, contradictions, reframing, pattern recognition, and changes in architecture as the thinking developed.</p>
          </article>
          <article>
            <h3>Generative Dialogue</h3>
            <p>The book is the primary longitudinal case study behind the public idea: disciplined conversation can become a mode of discovery.</p>
          </article>
        </div>
      </section>

      <section className="development-question">
        <div className="eyebrow bronze">The central question</div>
        <h2>What changes when conversation becomes part of the discovery process?</h2>
        <p className="lead">Some conversations exchange what participants already know. Others alter what they are capable of seeing next.</p>
        <p><em>The Making of The Way</em> examines the second kind. The story is not simply about artificial intelligence. It is about disciplined dialogue: asking, reflecting, challenging, refining, noticing patterns, correcting errors, preserving provenance, and allowing a better question to replace the one that started the exchange.</p>
        <p>In the human–AI case documented here, AI can expand the search space and help test coherence. Human judgment still retains responsibility for purpose, truth, meaning, correction, privacy, canonization, publication, and final direction.</p>
        <p style={{ marginTop: "30px" }}><Link className="text-link" href="/ideas/generative-dialogue/">Read the public Generative Dialogue idea →</Link></p>
      </section>

      <aside className="development-status-note">
        <strong>Development status</strong>
        <p><em>The Making of The Way</em> is in development. Its title, subtitle, public thesis, and current cover are established enough to share selectively. Manuscript structure, wording, examples, and publication timing may continue to evolve. No release date or preorder has been announced.</p>
      </aside>
    </InteriorPage>
  );
}
