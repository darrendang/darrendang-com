import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Letters from Darren",
  description: "Letters from Darren: observations, stories, questions, and lessons offered as part of The Way and the living Dang Genome.",
};

export default function LettersPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="hero brand-hero genome-hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Letters from Darren</div>
              <h1>Things I am still learning.</h1>
              <p>These letters are not answers from someone who has finished figuring things out. They are observations, stories, questions, and lessons collected along the way—and offered for someone else to test, challenge, improve, and carry farther.</p>
              <div className="actions">
                <Link className="button button-gold" href="/letters/why-these-letters/">Read the introduction</Link>
                <Link className="button button-outline" href="/the-way/">Explore The Way</Link>
              </div>
            </div>
          </div>
          <div className="container hero-note">
            <strong>A living editorial practice.</strong>
            <span>Letters connect lived experience to ideas without pretending every question has a finished answer.</span>
          </div>
        </section>

        <section className="section genome-purpose-home">
          <div className="container">
            <div className="section-intro compact">
              <div className="eyebrow bronze">Why letters</div>
              <h2>Some ideas need room to stay unfinished.</h2>
              <p className="lead">Books preserve thought that has matured into a bounded work. The Way Papers develop living ideas. The Way in Motion examines demonstrated practice. A Letter can do something different: begin with a moment, follow the question it creates, and leave the reader with something useful without forcing the experience into a final doctrine.</p>
            </div>
            <div className="purpose-grid home-purpose-grid">
              <article><span>Story</span><h3>Start with something that actually happened, not a slogan.</h3></article>
              <article><span>Insight</span><h3>Ask what the experience changed or made clearer.</h3></article>
              <article><span>Handoff</span><h3>Offer the lesson without demanding that someone else reach the same conclusion.</h3></article>
            </div>
          </div>
        </section>

        <section className="section worldview-section">
          <div className="container worldview-grid">
            <div>
              <div className="eyebrow bronze">Letter 00 · Introduction</div>
              <h2>Why These Letters</h2>
              <p className="lead">I began writing books because I wanted some of the thinking behind my decisions to survive the conversation. These letters give me a way to keep doing that while the thinking is still moving.</p>
              <Link className="text-link" href="/letters/why-these-letters/">Read the letter →</Link>
            </div>
            <div className="boundary-stack">
              <article><span>From life</span><strong>Family, work, failure, technology, service, culture, and ordinary moments.</strong></article>
              <article><span>Across boundaries</span><strong>A useful lesson may travel from one part of life into another.</strong></article>
              <article><span>Still revisable</span><strong>New experience can change the map without erasing where it came from.</strong></article>
              <article><span>Passed forward</span><strong>Take what helps. Question what does not. Improve what you can.</strong></article>
            </div>
          </div>
        </section>

        <section className="section sand">
          <div className="container worldview-grid">
            <div>
              <div className="eyebrow bronze">Special Letter / Song · 25 Years After September 14, 2001</div>
              <h2>Bố Ơi</h2>
              <p className="lead">Twenty-five years after my father&apos;s passing, I return to the promise I made in his funeral booklet and ask a harder question: what did I do with what he gave me?</p>
              <p><strong>In 2001, I made a promise in grief. In 2026, I owe him an accounting.</strong></p>
              <Link className="text-link" href="/letters/bo-oi/">Listen &amp; read →</Link>
            </div>
            <div className="boundary-stack">
              <article><span>2001 · CON NHỚ BỐ</span><strong>A promise written at twenty-eight.</strong></article>
              <article><span>2026 · BỐ ƠI</span><strong>An accounting twenty-five years later.</strong></article>
              <article><span>THE SONG</span><strong>A Vietnamese memorial for the family that carries him forward.</strong></article>
            </div>
          </div>
        </section>

        <section className="section worldview-section">
          <div className="container worldview-grid">
            <div>
              <div className="eyebrow bronze">Special Letter / Song · 2004 → 2026</div>
              <h2>Mẹ Ơi</h2>
              <p className="lead">I could not write to Bố without writing to Mẹ. Twenty-two years after her passing, I return to the memories and five words I wrote in 2004 and ask what they became after a life lived forward.</p>
              <p><strong>The hand that steadied a frightened child. A marriage I watched deepen. Five words I am still learning.</strong></p>
              <Link className="text-link" href="/letters/me-oi/">Listen &amp; read →</Link>
            </div>
            <figure style={{ margin: 0 }}>
              <Image
                src="/images/me_profile_beautiful.webp"
                width={1536}
                height={2048}
                alt="Portrait of Darren Dang's mother, Lê Thị Chất."
                sizes="(max-width: 900px) 100vw, 520px"
                style={{ width: "100%", height: "auto", borderRadius: "22px", boxShadow: "0 20px 54px rgba(13,31,49,.12)" }}
              />
              <figcaption className="note" style={{ marginTop: "10px" }}>Mẹ.</figcaption>
            </figure>
          </div>
        </section>

        <section className="section sand">
          <div className="container worldview-grid">
            <div>
              <div className="eyebrow bronze">Letter · To My Parents</div>
              <h2>Bố Mẹ</h2>
              <p className="lead">I wrote to each of my parents separately. This letter is about something neither individual letter could hold by itself: the marriage, family, and shared life they built together.</p>
              <p><strong>What they passed forward was not a script. It was a stronger starting point.</strong></p>
              <Link className="text-link" href="/letters/bo-me/">Read the letter →</Link>
            </div>
            <figure style={{ margin: 0 }}>
              <Image
                src="/images/bo_me_classic_bw.webp"
                width={3712}
                height={2763}
                alt="A young Đặng Văn Phi and Lê Thị Chất together."
                sizes="(max-width: 900px) 100vw, 520px"
                style={{ width: "100%", height: "auto", borderRadius: "22px", boxShadow: "0 20px 54px rgba(13,31,49,.12)" }}
              />
              <figcaption className="note" style={{ marginTop: "10px" }}>Bố and Mẹ, when they were young.</figcaption>
            </figure>
          </div>
        </section>

        <section className="section worldview-section">
          <div className="container worldview-grid">
            <div>
              <div className="eyebrow bronze">Special Letter / Song · September 15, 2026</div>
              <h2>To Chrystina — The Way Was Us</h2>
              <p className="lead">A birthday song for my wife, partner, and soulmate—and a reflection on the life and family that existed long before I ever had language for The Way.</p>
              <p><strong>Before I ever named The Way, we were already living it.</strong></p>
              <Link className="text-link" href="/letters/the-way-was-us/">Listen and read →</Link>
            </div>
            <figure style={{ margin: 0 }}>
              <Image
                src="/images/darren-chrystina-vow-renewal-santorini.webp"
                width={3236}
                height={1960}
                alt="Darren and Chrystina during their vow renewal in Santorini on June 19, 2019."
                sizes="(max-width: 900px) 100vw, 520px"
                style={{ width: "100%", height: "auto", borderRadius: "22px", boxShadow: "0 20px 54px rgba(13,31,49,.12)" }}
              />
              <figcaption className="note" style={{ marginTop: "10px" }}>Santorini, June 19, 2019.</figcaption>
            </figure>
          </div>
        </section>

        <section className="section shared-wisdom-home">
          <div className="container shared-wisdom-home-grid">
            <div>
              <div className="eyebrow bronze">The opening collection</div>
              <h2>Twelve Letters. Released one at a time.</h2>
              <p className="lead">The first twelve-Letter collection has been developed and preserved. Individual Letters will appear here only after each one clears its public-release review. The collection is curated rather than filled; publication cadence should never become a reason to manufacture certainty or content.</p>
              <p>The opening collection moves through three quiet arcs. You do not need to read them as a course, and the unpublished Letters are not being posted as teasers. The structure simply shows how the conversation develops.</p>
            </div>
            <div className="shared-wisdom-principles">
              <article><span>01–04</span><strong>Orientation</strong><p>Agency · Inheritance · Humility · Stewardship</p></article>
              <article><span>05–08</span><strong>Formation</strong><p>Practice · Example · Culture · Release</p></article>
              <article><span>09–12</span><strong>Learning &amp; Legacy</strong><p>Questions · Interpretation · Perspective · Transmission</p></article>
            </div>
          </div>
        </section>

        <section className="section genome-purpose-home">
          <div className="container">
            <div className="section-intro compact">
              <div className="eyebrow bronze">Publication discipline</div>
              <h2>A steady rhythm without a content treadmill.</h2>
              <p className="lead">Letters are intended to arrive with enough space to be read, considered, and connected to the larger body of thought. New work appears because it is ready—not because an empty slot needs to be filled.</p>
            </div>
            <div className="purpose-grid home-purpose-grid">
              <article><span>01</span><h3>No artificial certainty.</h3><p>Questions and tensions may remain visible.</p></article>
              <article><span>02</span><h3>No isolated posts.</h3><p>Letters can connect to related Ideas, books, Papers, and Motion cases while remaining their own work.</p></article>
              <article><span>03</span><h3>Public release is earned.</h3><p>Private preservation and public publication are separate decisions.</p></article>
            </div>
          </div>
        </section>

        <section className="section system-section">
          <div className="container">
            <div className="section-intro compact">
              <div className="eyebrow bronze">A two-way conversation</div>
              <h2>What have you learned?</h2>
              <p className="lead">The Way is not supposed to become one person talking forever. If a Letter brings to mind a lesson, story, correction, or piece of wisdom from your own life, Shared Wisdom shows how other voices can become part of the larger conversation.</p>
            </div>
            <div className="actions">
              <Link className="button button-dark" href="/shared-wisdom/">Explore Shared Wisdom</Link>
              <Link className="text-link" href="/contribute/">How contribution works →</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
