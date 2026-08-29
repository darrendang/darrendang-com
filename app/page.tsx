import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const books = [
  {
    number: "01",
    status: "Production-ready",
    title: "For Those Who Come After Us",
    subtitle: "A Life in Lessons",
    cover: "/images/for-those-who-come-after-us-front-home-v3.webp",
    alt: "Front cover of For Those Who Come After Us: A Life in Lessons by Darren Dang.",
    href: "/books/for-those-who-come-after-us/",
    movement: "INHERIT",
    question: "What have I learned that is worth passing forward?",
  },
  {
    number: "02",
    status: "Final editorial stage",
    title: "Wisdom Has No Rank",
    subtitle: "",
    cover: "/images/wisdom-has-no-rank-cover.webp",
    alt: "Current cover for Wisdom Has No Rank by Darren Dang.",
    href: "/books/wisdom-has-no-rank/",
    movement: "BECOME",
    question: "Who can I learn from that I did not expect to teach me?",
  },
  {
    number: "03",
    status: "In development",
    title: "D.O.T.S.",
    subtitle: "Collect Dots. Connect Dots. Create Something New.",
    cover: "/images/dots-cover.webp",
    alt: "Current cover for D.O.T.S. by Darren Dang.",
    href: "/books/dots/",
    movement: "CREATE",
    question: "What becomes possible when I see beyond familiar labels?",
  },
];

function HeroNetwork() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <svg viewBox="0 0 760 650" role="presentation">
        <defs>
          <radialGradient id="sun" cx="50%" cy="72%" r="35%">
            <stop offset="0" stopColor="#ffe8a6" stopOpacity="1" />
            <stop offset=".18" stopColor="#c79a45" stopOpacity=".55" />
            <stop offset="1" stopColor="#0D1F31" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="760" height="650" fill="url(#sun)" />
        <g className="net-lines" fill="none">
          <path d="M20 220 Q210 90 370 430 Q535 100 740 230" />
          <path d="M55 330 Q205 145 370 430 Q520 180 700 335" />
          <path d="M0 430 Q180 260 370 430 Q560 250 760 430" />
          <path d="M80 525 Q230 340 370 430 Q500 340 680 520" />
        </g>
        <g className="net-dots">
          {[[85,255],[145,365],[210,210],[270,335],[370,430],[470,360],[535,200],[600,330],[675,250],[255,470],[485,490]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r={i % 4 === 0 ? 6 : 3} />
          ))}
        </g>
        <path className="hero-path-shadow" d="M335 650 C320 585 420 560 365 515 C320 478 330 452 370 430" />
        <path className="hero-path" d="M335 650 C320 585 420 560 365 515 C320 478 330 452 370 430" />
        <circle cx="370" cy="430" r="11" className="hero-sun" />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="hero brand-hero genome-hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">The Way → Your Way → The Way Forward</div>
              <h1>A stronger starting point. The freedom to go farther.</h1>
              <p>Learn from what came before. Question it. Test it against your life. Make it your own. Then decide what comes next.</p>
              <div className="actions">
                <Link className="button button-gold" href="/the-way/">Begin with The Way</Link>
                <Link className="button button-outline" href="/explore/">Explore what speaks to you</Link>
              </div>
            </div>
            <HeroNetwork />
          </div>
          <div className="container hero-note">
            <strong>Leave those who come after a stronger starting point and the freedom to go farther.</strong>
            <span>The Way offers inheritance without prescribing a destination.</span>
          </div>
        </section>

        <section className="section genome-purpose-home">
          <div className="container">
            <div className="section-intro compact">
              <div className="eyebrow bronze">The three movements</div>
              <h2>Receive. Make it your own. Choose what comes next.</h2>
              <p className="lead">The philosophy is simple enough to remember and open enough to evolve with each person who lives it.</p>
            </div>
            <div className="purpose-grid home-purpose-grid">
              <article><span>01 · The Way</span><h3>Learn from what came before.</h3><p>Stories, lessons, principles, mistakes, questions, methods, relationships, and accumulated experience can give us a stronger place to begin.</p><Link className="text-link" href="/the-way/">Explore The Way →</Link></article>
              <article><span>02 · Your Way</span><h3>Question it. Test it. Make it your own.</h3><p>Inherited wisdom is a starting point, not a script. Keep what helps, challenge what does not, and learn from your own context.</p><Link className="text-link" href="/your-way/">Explore Your Way →</Link></article>
              <article><span>03 · The Way Forward</span><h3>Decide what your next direction requires.</h3><p>Progress is personal and contextual. It may mean building, healing, changing direction, serving, creating, letting go, or beginning again.</p><Link className="text-link" href="/the-way-forward/">Explore The Way Forward →</Link></article>
            </div>
          </div>
        </section>

        <section className="section worldview-section">
          <div className="container worldview-grid">
            <div>
              <div className="eyebrow bronze">Start where you are</div>
              <h2>You do not need to understand the whole system before something becomes useful.</h2>
              <p className="lead">Enter through the question that is alive for you. The Genome connects books, Letters, stories, ideas, frameworks, and other voices around the underlying learning.</p>
              <Link className="text-link" href="/explore/">Explore by question →</Link>
            </div>
            <div className="boundary-stack">
              <article><span>Inheritance</span><strong>What have I received that deserves to be understood before I decide what to keep?</strong></article>
              <article><span>Teachability</span><strong>Who might know something I have been too certain to hear?</strong></article>
              <article><span>Reconsideration</span><strong>Where has reality changed enough that my old map may no longer fit?</strong></article>
              <article><span>Creation</span><strong>What becomes possible when I connect things that are usually kept separate?</strong></article>
              <article><span>Legacy</span><strong>What have I learned that may give someone else a stronger starting point?</strong></article>
            </div>
          </div>
        </section>

        <section className="section shared-wisdom-home">
          <div className="container shared-wisdom-home-grid">
            <div>
              <div className="eyebrow bronze">Latest · Letters from Darren</div>
              <h2>Things I am still learning.</h2>
              <p className="lead">Books hold developed bodies of thought. Letters preserve learning while it is still moving: a story, question, failure, discovery, changed judgment, or connection that may be useful before it becomes final.</p>
              <div className="actions">
                <Link className="button button-dark" href="/letters/why-these-letters/">Read “Why These Letters”</Link>
                <Link className="text-link" href="/letters/">All Letters →</Link>
              </div>
            </div>
            <div className="shared-wisdom-principles">
              <article><span>FROM LIFE</span><strong>Begin with something real.</strong><p>Experience supplies context, tension, and consequence.</p></article>
              <article><span>STILL REVISABLE</span><strong>Reality keeps the right to change the map.</strong><p>A Letter can preserve learning without pretending to close the question.</p></article>
              <article><span>FOR YOUR WAY</span><strong>Take what helps. Question what does not.</strong><p>The handoff matters more than agreement.</p></article>
            </div>
          </div>
        </section>

        <section className="section book-showcase">
          <div className="container">
            <div className="section-intro compact">
              <div className="eyebrow bronze">Books · The Path Forward</div>
              <h2>Three books inside a philosophy larger than any book.</h2>
              <p className="lead"><strong>The Path Forward</strong> is Darren&apos;s three-book exploration within The Way. <strong>The Way Forward</strong> belongs to the reader.</p>
            </div>
            <div className="book-cards">
              {books.map((book) => (
                <article className="book-card" key={book.title}>
                  <Link href={book.href} className="book-card-cover">
                    <Image src={book.cover} width={360} height={540} alt={book.alt} sizes="(max-width: 800px) 70vw, 26vw" />
                  </Link>
                  <div className="book-card-copy">
                    <div className="book-status">{book.status}</div>
                    <div className="book-movement">{book.number} · {book.movement}</div>
                    <h3>{book.title}</h3>
                    {book.subtitle && <p className="book-card-sub">{book.subtitle}</p>}
                    <p className="book-card-hook">{book.question}</p>
                    <div className="book-card-actions"><Link className="text-link" href={book.href}>Explore the book →</Link></div>
                  </div>
                </article>
              ))}
            </div>
            <div className="section-link"><Link className="text-link" href="/books/">Explore The Path Forward →</Link></div>
          </div>
        </section>

        <section className="section genome-purpose-home">
          <div className="container">
            <div className="section-intro compact">
              <div className="eyebrow bronze">Your Way</div>
              <h2>Reading is only the beginning.</h2>
              <p className="lead">The constitutional center of the experience is human agency. The goal is not to reproduce Darren&apos;s conclusions. It is to help you see more clearly, test more honestly, and choose more deliberately.</p>
            </div>
            <div className="system-arc">
              <article><span>01</span><div className="book-movement">REFLECT</div><h3>What does this bring to mind?</h3><p>Connect an idea to your own experience before deciding whether it applies.</p></article>
              <article><span>02</span><div className="book-movement">TEST</div><h3>Where does it fit—and where does it fail?</h3><p>Use evidence, context, relationships, and consequences rather than inherited authority alone.</p></article>
              <article><span>03</span><div className="book-movement">ADAPT & ACT</div><h3>What would this look like in your life?</h3><p>Make the learning yours. The outcome may look different from the life that produced the lesson.</p></article>
            </div>
            <div className="section-link"><Link className="button button-dark" href="/your-way/">Make it Your Way</Link></div>
          </div>
        </section>

        <section className="section shared-wisdom-home">
          <div className="container shared-wisdom-home-grid">
            <div>
              <div className="eyebrow bronze">Shared Wisdom</div>
              <h2>The Way should not become one person talking forever.</h2>
              <p className="lead">Other people&apos;s lives can reveal what Darren&apos;s cannot. Selected contributions preserve authorship, context, privacy, and provenance while adding new perspectives to the public Genome.</p>
              <div className="actions">
                <Link className="button button-dark" href="/shared-wisdom/">Explore Shared Wisdom</Link>
                <Link className="text-link" href="/contribute/">Pass something forward →</Link>
              </div>
            </div>
            <div className="shared-wisdom-principles">
              <article><span>DIFFERENCE</span><strong>Different lives reveal different truths.</strong><p>Connection should add context without erasing meaningful difference.</p></article>
              <article><span>PROVENANCE</span><strong>A contributor&apos;s story remains theirs.</strong><p>Publication never silently converts another person&apos;s experience into Darren&apos;s canon.</p></article>
              <article><span>STEWARDSHIP</span><strong>Useful beats numerous.</strong><p>The collection grows through review, permission, and judgment rather than volume.</p></article>
            </div>
          </div>
        </section>

        <section className="section worldview-section">
          <div className="container worldview-grid">
            <div>
              <div className="eyebrow bronze">The Constitution of The Way</div>
              <h2>Guidance without control.</h2>
              <p className="lead">The Constitution protects the purpose and boundaries of The Way: stronger inheritance, human agency, teachability, evidence, dignity, privacy, contribution, evolution, and stewardship.</p>
              <Link className="text-link" href="/the-way/constitution/">Read the Constitution →</Link>
            </div>
            <div className="boundary-stack">
              <article><span>North Star</span><strong>Leave those who come after a stronger starting point and the freedom to go farther.</strong></article>
              <article><span>Guardrail</span><strong>Each generation should inherit a stronger starting point, not a narrower future.</strong></article>
              <article><span>Agency</span><strong>The Way provides a stronger starting point, not a predetermined destination.</strong></article>
              <article><span>Evolution</span><strong>Inherit wisdom, not dogma. Preserve what was learned. Remain free to learn more.</strong></article>
            </div>
          </div>
        </section>

        <section className="section genome-purpose-home">
          <div className="container">
            <div className="section-intro compact">
              <div className="eyebrow bronze">The Dang Genome</div>
              <h2>A connected body of learning, not a stack of folders.</h2>
              <p className="lead">A story can lead to an idea. An idea can appear in a Letter, book, talk, or contribution. A new voice can challenge the pattern. The value lives in the relationships and in knowing where each piece came from.</p>
            </div>
            <div className="actions">
              <Link className="button button-dark" href="/explore/">Explore the Genome</Link>
              <Link className="text-link" href="/genome/">How the Dang Genome works →</Link>
            </div>
          </div>
        </section>

        <section className="section final">
          <div className="container">
            <div className="final-star">✦</div>
            <h2>What will you do with what you inherit?</h2>
            <p>The Way can give you a stronger starting point. Your Way is what you make of it. The Way Forward is yours to choose.</p>
            <div className="actions center">
              <Link className="button button-light" href="/your-way/">Begin with Your Way</Link>
              <Link className="text-link light" href="/the-way-forward/">Choose The Way Forward →</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
