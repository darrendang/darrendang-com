import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Why These Letters",
  description: "An introduction to Letters from Darren and why Darren writes them as part of The Way.",
};

export default function WhyTheseLettersPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="section">
          <div className="container">
            <div className="section-intro compact">
              <div className="eyebrow bronze">Letters from Darren · Introduction</div>
              <h1>Why These Letters</h1>
              <p className="lead">I started writing because I knew there would come a day when someone I love might want to ask me a question and I would not be there to answer it.</p>
            </div>

            <article style={{ maxWidth: "760px" }}>
              <p>That thought became <em>For Those Who Come After Us</em>. I could not leave an answer for every situation, so I tried to leave some of the thinking that helped me find my way.</p>

              <p>But writing a book taught me something else: the thinking does not stop when the book is finished.</p>

              <p>Life keeps adding new evidence. My children teach me things I did not understand when they were younger. Work presents problems that make an old principle look different. Technology changes the choices in front of us. A conversation with someone from another field can expose a connection I had missed for years.</p>

              <p>Sometimes an idea becomes stronger. Sometimes it needs to be revised. Sometimes the most useful thing I can say is that I am still working through the question.</p>

              <p>That is what these Letters are for.</p>

              <p>They are a place for ideas that are alive: stories, observations, questions, connections, and lessons I think may be worth carrying forward. Some will come from family. Some from leadership, technology, public service, failure, travel, or people I did not expect to teach me. The useful ones will rarely stay confined to the place where I first found them.</p>

              <p>I do not expect you to agree with every Letter.</p>

              <p>I hope you do something better with them.</p>

              <p>Use what helps. Question what does not. Connect it to what you already know. Improve it when your experience gives you a reason to. Then, when you find something worth preserving, pass that forward too.</p>

              <p>That is the larger idea behind The Way.</p>

              <p>We should not try to give the next generation a finished script. We should give them a stronger starting point.</p>

              <p>These Letters are one way I can keep adding to that starting point while I am still here to learn, revise, and listen.</p>

              <p>— Darren</p>
            </article>

            <div className="actions" style={{ marginTop: "3rem" }}>
              <Link className="button button-dark" href="/letters/">All Letters</Link>
              <Link className="text-link" href="/share/">Share what you&apos;ve learned →</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
