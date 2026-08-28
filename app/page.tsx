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
    movement: "LEARN FROM LIFE",
    mapAction: "Receive the map.",
    question: "What have I learned?",
    bridge: "Lessons can cross generations.",
    copy: "A life in lessons about inheritance, identity, learning, failure, systems, leadership, family, purpose, and what we pass forward.",
  },
  {
    number: "02",
    status: "Final editorial stage",
    title: "Wisdom Has No Rank",
    subtitle: "",
    cover: "/images/wisdom-has-no-rank-cover.webp",
    alt: "Current cover for Wisdom Has No Rank by Darren Dang.",
    href: "/books/wisdom-has-no-rank/",
    movement: "REMAIN TEACHABLE",
    mapAction: "Question and revise the map.",
    question: "Who can I learn from?",
    bridge: "Wisdom can cross hierarchy.",
    copy: "A book about remaining teachable when wisdom comes from someone younger, more junior, closer to us, or simply unexpected.",
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
    mapAction: "Explore beyond the map.",
    question: "What can I create from what I learn?",
    bridge: "Ideas can cross disciplines.",
    copy: "A book about seeing past labels, recognizing structural relationships, transferring carefully, and creating useful new possibilities.",
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
              <div className="eyebrow">The Way</div>
              <h1>Pass down a way of thinking.</h1>
              <p>We cannot leave the people who come after us an answer for every situation. We can leave them better stories, better questions, useful ideas, and a stronger place from which to begin.</p>
              <div className="actions">
                <Link className="button button-gold" href="/letters/">Read Letters from Darren</Link>
                <Link className="button button-outline" href="/the-way/">Explore The Way</Link>
              </div>
            </div>
            <HeroNetwork />
          </div>
          <div className="container hero-note">
            <strong>DarrenDang.com is the public expression of The Way.</strong>
            <span>Ideas, stories, letters, books, talks, media, and shared wisdom can be preserved, connected, tested, improved, and passed forward.</span>
          </div>
        </section>

        <section className="section genome-purpose-home">
          <div className="container">
            <div className="section-intro compact">
              <div className="eyebrow bronze">A stronger starting point</div>
              <h2>Inheritance should create possibility, not obligation.</h2>
              <p className="lead">The goal is not to freeze one generation&apos;s answers in time. It is to preserve enough context, experience, judgment, and useful thinking that the next generation can begin farther ahead—and still choose its own path.</p>
            </div>
            <div className="purpose-grid home-purpose-grid">
              <article><span>Purpose</span><h3>Pass down a way of thinking.</h3></article>
              <article><span>Mission</span><h3>Help people preserve, connect, and pass forward wisdom, so those who come after inherit a stronger starting point.</h3></article>
              <article><span>North Star</span><h3>Strengthen the starting point for someone who comes after.</h3></article>
            </div>
            <blockquote className="trilogy-map-quote">Each generation should inherit a stronger starting point, not a narrower future.</blockquote>
            <div className="section-link"><Link className="text-link" href="/the-way/">Explore The Way →</Link></div>
          </div>
        </section>

        <section className="section shared-wisdom-home">
          <div className="container shared-wisdom-home-grid">
            <div>
              <div className="eyebrow bronze">Letters from Darren</div>
              <h2>Things I am still learning.</h2>
              <p className="lead">Books hold developed bodies of thought. Letters make room for ideas that are still moving: a conversation, a story, a question, a failure, an unexpected connection, or something I understand differently now than I did before.</p>
              <p>The Letters are meant to be useful without pretending to be final. Take what helps. Question what does not. Improve what you can.</p>
              <div className="actions">
                <Link className="button button-dark" href="/letters/why-these-letters/">Read the introduction</Link>
                <Link className="text-link" href="/letters/">Explore all Letters →</Link>
              </div>
            </div>
            <div className="shared-wisdom-principles">
              <article><span>STORY</span><strong>Begin with something real.</strong><p>An experience gives the idea human stakes.</p></article>
              <article><span>INSIGHT</span><strong>Ask what changed.</strong><p>The useful lesson is often the shift in judgment.</p></article>
              <article><span>HANDOFF</span><strong>Leave room for revision.</strong><p>A lesson should become someone else&apos;s starting point, not their script.</p></article>
            </div>
          </div>
        </section>

        <section className="section worldview-section">
          <div className="container worldview-grid">
            <div>
              <div className="eyebrow bronze">Ideas worth carrying forward</div>
              <h2>The useful ones rarely stay in one part of life.</h2>
              <p className="lead">Some ideas began in technology or public institutions. Some came from family, failure, education, or people I did not expect to teach me. The deeper test is whether an idea helps us see a choice, system, relationship, or responsibility more clearly.</p>
              <Link className="text-link" href="/ideas/">Explore the Ideas →</Link>
            </div>
            <div className="boundary-stack">
              <article><span>Direction</span><strong>Have a North Star.</strong></article>
              <article><span>Teachability</span><strong>Wisdom Has No Rank.</strong></article>
              <article><span>Learning & creation</span><strong>D.O.T.S. is a way of seeing problems.</strong></article>
              <article><span>Scale</span><strong>Make Knowledge Travel.</strong></article>
              <article><span>Technology</span><strong>Automate the Repetition. Preserve Human Judgment.</strong></article>
              <article><span>Legacy</span><strong>Leave something others can question, improve, and carry farther.</strong></article>
            </div>
          </div>
        </section>

        <section className="section book-showcase">
          <div className="container">
            <div className="section-intro compact">
              <div className="eyebrow bronze">Books · The Path Forward</div>
              <h2>Three books. Three movements in The Way.</h2>
              <p className="lead">Receive a map from what came before. Remain teachable enough to question and revise it. Then look beyond its boundaries and create something useful.</p>
            </div>
            <blockquote className="trilogy-map-quote">The people who go before us give us a map. The people who come after us show us where the map is incomplete.</blockquote>
            <div className="book-cards">
              {books.map((book) => (
                <article className="book-card" key={book.title}>
                  <Link href={book.href} className="book-card-cover">
                    <Image src={book.cover} width={360} height={540} alt={book.alt} sizes="(max-width: 800px) 70vw, 26vw" />
                  </Link>
                  <div className="book-card-copy">
                    <div className="book-status">{book.status}</div>
                    <div className="book-movement">{book.movement}</div>
                    <h3>{book.title}</h3>
                    {book.subtitle && <p className="book-card-sub">{book.subtitle}</p>}
                    <p className="book-card-hook">{book.question}</p>
                    <p>{book.copy}</p>
                    <div className="map-action">{book.mapAction}</div>
                    <div className="book-detail">{book.bridge}</div>
                    <div className="book-card-actions"><Link className="text-link" href={book.href}>Explore the book →</Link></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section shared-wisdom-home">
          <div className="container shared-wisdom-home-grid">
            <div>
              <div className="eyebrow bronze">Shared Wisdom</div>
              <h2>Wisdom does not belong to one person.</h2>
              <p className="lead">Some lessons come from parents, children, colleagues, strangers, cultures, professions, failures, and lives very different from our own. The Way should grow by listening.</p>
              <p>You can submit a reflection, story, lesson, or brief video for review. Selected contributions remain attributed to their source. Nothing publishes automatically, and publication does not turn someone else&apos;s wisdom into Darren&apos;s canon.</p>
              <div className="actions">
                <Link className="button button-dark" href="/share/">Share What You&apos;ve Learned</Link>
                <Link className="text-link" href="/shared-wisdom/">Explore Shared Wisdom →</Link>
              </div>
            </div>
            <div className="shared-wisdom-principles">
              <article><span>01</span><strong>Nothing publishes automatically.</strong><p>Every contribution is reviewed.</p></article>
              <article><span>02</span><strong>Authorship stays visible.</strong><p>A contributor&apos;s story remains the contributor&apos;s story.</p></article>
              <article><span>03</span><strong>Useful beats numerous.</strong><p>The collection grows through editorial judgment, not volume.</p></article>
            </div>
          </div>
        </section>

        <section className="section genome-purpose-home">
          <div className="container">
            <div className="section-intro compact">
              <div className="eyebrow bronze">The Dang Genome</div>
              <h2>A living legacy, not a static archive.</h2>
              <p className="lead">Stories connect to lessons. Lessons become ideas. Ideas appear in Letters, books, talks, frameworks, papers, and media. Other people add what life has taught them. New experience challenges old assumptions. The Genome preserves those relationships without pretending every item is equally final—or equally public.</p>
            </div>
            <div className="system-arc">
              <article><span>01</span><div className="book-movement">EXPERIENCE</div><h3>Notice what life teaches.</h3><p>People, events, decisions, failures, and relationships create the raw material.</p></article>
              <article><span>02</span><div className="book-movement">CONNECT</div><h3>Find the lesson and relationship.</h3><p>Stories, ideas, frameworks, and shared wisdom gain meaning through context and provenance.</p></article>
              <article><span>03</span><div className="book-movement">PASS FORWARD</div><h3>Make it useful to someone else.</h3><p>Publication is intentional. The aim is a stronger starting point, not more content.</p></article>
            </div>
            <div className="section-link"><Link className="text-link" href="/genome/">How The Dang Genome works →</Link></div>
          </div>
        </section>

        <section className="section dots-feature">
          <div className="container dots-feature-grid">
            <div>
              <div className="eyebrow">One important method inside the ecosystem</div>
              <h2>D.O.T.S. is a way of seeing problems.</h2>
              <p className="lead-light">Collect dots. See past the label. Find the structure. Connect what others keep separate. Transfer what fits. Create something new.</p>
              <p>D.O.T.S. is not The Way itself. It is one method for learning across boundaries and seeing possibilities that a familiar label may hide.</p>
              <div className="actions">
                <Link className="button button-light" href="/dots/">Explore D.O.T.S.</Link>
                <Link className="text-link light" href="/books/dots/">Explore Book 3 →</Link>
              </div>
            </div>
            <div className="perception-panel">
              <div><small>LABEL</small><strong>What category is this?</strong><p>The label can narrow where we look.</p></div>
              <span>→</span>
              <div><small>STRUCTURE</small><strong>What kind of problem is underneath?</strong><p>Structure reveals transferable patterns.</p></div>
              <span>→</span>
              <div><small>CONNECTION</small><strong>Where else has this problem appeared?</strong><p>A larger search space creates new possibilities.</p></div>
            </div>
          </div>
        </section>

        <section className="section worldview-section">
          <div className="container worldview-grid">
            <div>
              <div className="eyebrow bronze">Ideas in practice</div>
              <h2>Thinking should eventually change something.</h2>
              <p className="lead">Papers, talks, public-service work, and institutional frameworks are places where ideas meet real constraints: mission, risk, trust, governance, technology, people, and consequences.</p>
            </div>
            <div className="boundary-stack">
              <article><span>Paper</span><strong>From AI Experiments to Institutional Capability</strong><p><Link className="text-link" href="/papers/from-ai-experiments-to-institutional-capability/">Read the paper →</Link></p></article>
              <article><span>Speaking</span><strong>Ideas examined together in a room.</strong><p><Link className="text-link" href="/speaking/">Explore speaking →</Link></p></article>
              <article><span>About</span><strong>The person and experiences behind the ideas.</strong><p><Link className="text-link" href="/about/">About Darren →</Link></p></article>
            </div>
          </div>
        </section>

        <section className="section system-section">
          <div className="container">
            <div className="section-intro compact">
              <div className="eyebrow bronze">Your turn</div>
              <h2>Take what is useful. Carry it farther.</h2>
              <p className="lead">Read a Letter. Follow an idea. Share something life taught you. The point is not to preserve Darren&apos;s conclusions unchanged. The point is to strengthen the starting point for whoever comes next.</p>
            </div>
            <div className="actions">
              <Link className="button button-dark" href="/letters/">Read Letters from Darren</Link>
              <Link className="text-link" href="/share/">Share what you&apos;ve learned →</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
