import Image from "next/image";
import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

export const metadata = {
  title: "About Darren",
  description: "About Darren Dang: family, Vietnamese-American experience, technology, public service, systems thinking, books, and the lived experiences behind The Way.",
};

export default function About() {
  return (
    <InteriorPage eyebrow="About Darren" title="A life between worlds." wide>
      <div className="about-grid about-human-grid">
        <Image
          src="/images/darren-headshot.webp"
          width={360}
          height={540}
          alt="Portrait of Darren Dang."
          priority
          sizes="(max-width: 900px) 100vw, 40vw"
          style={{ width: "100%", height: "auto", maxWidth: "520px" }}
        />
        <div>
          <p className="lead">I have spent much of my life moving between worlds: Vietnam and America; engineering and business; technology and public institutions; analysis and judgment; leadership and family; one generation and the next.</p>
          <p>I did not set out to turn that into a philosophy. I was trying to solve problems, raise a family, understand what my parents had given me, make better decisions, help people grow, and learn from the moments when my first answer turned out to be incomplete.</p>
          <p>Professionally, I currently serve as Chief Technology Officer at the Orange County Employees Retirement System. My career has crossed private technology, consulting, education, courts, and public pensions. The common thread has been less about one industry than about how systems work, how people make decisions, and how useful ideas can travel across boundaries.</p>
          <div className="actions">
            <Link className="button button-dark" href="/books/">Begin with the books</Link>
            <Link className="text-link" href="/the-way/">Discover The Way →</Link>
          </div>
        </div>
      </div>

      <section className="genome-layers about-movements">
        <div className="eyebrow bronze">The places my thinking comes from</div>
        <h2>Different worlds taught me to notice different things.</h2>
        <div className="layer-grid">
          <article>
            <div className="book-movement">COUNTRIES &amp; CULTURES</div>
            <h3>Vietnam and America</h3>
            <p>Family, migration, sacrifice, language, gratitude, adaptation, and the experience of carrying roots without letting them become chains.</p>
          </article>
          <article>
            <div className="book-movement">DISCIPLINES</div>
            <h3>Engineering, business, analytics, and systems</h3>
            <p>Different fields trained me to see constraints, tradeoffs, interfaces, incentives, evidence, and recurring structures beneath different labels.</p>
          </article>
          <article>
            <div className="book-movement">INSTITUTIONS &amp; PEOPLE</div>
            <h3>Technology and public service</h3>
            <p>Ideas become more honest when they have to work inside real organizations with limited resources, real consequences, and people who see the problem differently.</p>
          </article>
          <article>
            <div className="book-movement">GENERATIONS</div>
            <h3>Parents, partnership, children, and what comes next</h3>
            <p>I inherited more than I understood at the time. Becoming a husband and father changed how I understood what was given to me—and what I wanted to pass forward.</p>
          </article>
        </div>
      </section>

      <section className="genome-boundary about-human-texture">
        <div className="eyebrow bronze">Still learning</div>
        <h2>The moments that change me are not always the serious-looking ones.</h2>
        <p className="lead">A daughter laughing and telling me I have confirmation bias. A technology pilot failing after weeks of work. A restaurant that cost us our savings. A driverless car taking the long way through Austin. A word in Vietnamese carrying something English could not quite hold.</p>
        <p>Those experiences are different on the surface. What interests me is the question underneath: <strong>what did I think I knew, what did reality show me, and what should change because of it?</strong></p>
        <p>That is why the work on this site moves between family, technology, culture, travel, leadership, public service, books, music, and ordinary life. I do not experience them as separate worlds. They keep teaching one another.</p>
      </section>

      <section className="genome-boundary">
        <div className="eyebrow bronze">Why this work exists</div>
        <h2>Preserve what may help. Leave room for the next person to go farther.</h2>
        <p className="lead">I began writing because I wanted some of the thinking behind my choices to remain available to my children after the conversation ended. The books grew into a larger body of work, and eventually I needed a name for the pattern underneath it. I call that pattern <strong>The Way</strong>.</p>
        <p>The North Star is simple: <strong>leave those who come after a stronger starting point and the freedom to go farther.</strong> That means preserving stories, lessons, questions, methods, failures, and context without pretending that my conclusions should become someone else&apos;s script.</p>
        <p>The Dang Genome is the living connected body through which that learning can be preserved and related. DarrenDang.com is the public doorway into it. Other voices belong here too, because a living body of learning should be able to add, correct, disagree, and continue.</p>
        <div className="actions">
          <Link className="button button-dark" href="/explore/">Explore what speaks to you</Link>
          <Link className="text-link" href="/shared-wisdom/">Explore Shared Wisdom →</Link>
          <Link className="text-link" href="/independence/">Editorial independence →</Link>
        </div>
      </section>

      <div className="independence-callout">The views and ideas expressed on DarrenDang.com are my own and do not necessarily represent OCERS or any other institution with which I am affiliated.</div>
    </InteriorPage>
  );
}
