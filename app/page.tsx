import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const books = [
  {
    number: "01",
    status: "Preparing for publication",
    title: "For Those Who Come After Us",
    subtitle: "A Life in Lessons",
    cover: "/images/for-those-who-come-after-us-front-home-v3.webp",
    alt: "Front cover of For Those Who Come After Us: A Life in Lessons by Darren Dang.",
    href: "/books/for-those-who-come-after-us/",
    movement: "INHERIT",
    mapAction: "Receive the map.",
    question: "What have I learned?",
    bridge: "Lessons can cross generations.",
    copy: "A life in lessons about inheritance, identity, learning, failure, systems, leadership, family, purpose, and what we pass forward.",
    detail: "Target: September 2026",
  },
  {
    number: "02",
    status: "Final Editorial Stage",
    title: "Wisdom Has No Rank",
    subtitle: "",
    cover: "/images/wisdom-has-no-rank-cover.webp",
    alt: "Current cover for Wisdom Has No Rank by Darren Dang.",
    href: "/books/wisdom-has-no-rank/",
    movement: "BECOME",
    mapAction: "Question and revise the map.",
    question: "Who can I learn from?",
    bridge: "Wisdom can cross hierarchy.",
    copy: "Book 1 asks what we can learn from the lives before us. Book 2 asks whether we remain teachable when wisdom comes from someone younger, more junior, closer to us, or simply unexpected.",
    detail: "Six-part manuscript · Selected excerpts available",
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
    copy: "A book about learning across boundaries, seeing structural relationships, transferring carefully, and creating useful new possibilities.",
    detail: "Deconstruct → Observe → Transfer → Synthesize",
  },
];

const ideas = [
  ["Learning & Innovation", "D.O.T.S. is a way of seeing problems.", "The label narrows where you look. The structure expands where you can look."],
  ["Leadership", "Wisdom Has No Rank.", "Useful insight does not become less true because it came from someone younger, more junior, or outside the expected hierarchy."],
  ["Technology & AI", "Automate the Repetition. Preserve Human Judgment.", "Technology is most useful when it removes mechanical work without pretending that every decision is mechanical."],
  ["Learning & Scale", "Make Knowledge Travel.", "What we make understandable, reusable, and shareable can become someone else's starting point."],
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
          <linearGradient id="path" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#8e642b" />
            <stop offset=".6" stopColor="#d8aa55" />
            <stop offset="1" stopColor="#ffecad" />
          </linearGradient>
        </defs>
        <rect width="760" height="650" fill="url(#sun)" />
        <g className="net-lines" fill="none">
          <path d="M20 220 Q210 90 370 430 Q535 100 740 230" />
          <path d="M55 330 Q205 145 370 430 Q520 180 700 335" />
          <path d="M0 430 Q180 260 370 430 Q560 250 760 430" />
          <path d="M80 525 Q230 340 370 430 Q500 340 680 520" />
          <path d="M100 170 Q285 300 370 430 Q470 300 650 165" />
          <path d="M15 540 Q220 455 370 430 Q550 450 745 535" />
        </g>
        <g className="net-dots">
          {[[85,255],[145,365],[210,210],[270,335],[320,260],[370,430],[420,250],[470,360],[535,200],[600,330],[675,250],[155,495],[255,470],[485,490],[615,500]].map(([x,y],i) => (
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
              <div className="eyebrow">The Dang Genome</div>
              <h1>Useful ideas should travel farther than the person who first had them.</h1>
              <p>A living body of ideas, stories, lessons, and wisdom—preserved, connected, tested, improved, and passed forward so those who come after inherit a stronger starting point.</p>
              <div className="actions">
                <Link className="button button-gold" href="/genome/">Explore the Genome</Link>
                <Link className="button button-outline" href="/share/">Share What You&apos;ve Learned</Link>
              </div>
            </div>
            <HeroNetwork />
          </div>
          <div className="container hero-note">
            <strong>DarrenDang.com is the public home of The Dang Genome.</strong>
            <span>Books, ideas, papers, stories, talks, media, and shared wisdom are different ways learning is preserved, connected, tested, and carried forward.</span>
          </div>
        </section>

        <section className="section genome-purpose-home">
          <div className="container">
            <div className="section-intro compact">
              <div className="eyebrow bronze">Why the Genome exists</div>
              <h2>Wisdom should be treated as an inheritance.</h2>
              <p className="lead">Not a finished script. A stronger starting point: better context, better questions, useful stories, and lessons someone else can test, improve, and carry farther.</p>
            </div>
            <div className="purpose-grid home-purpose-grid">
              <article><span>Mission</span><h3>Help people preserve, connect, and pass forward wisdom, so those who come after inherit a stronger starting point.</h3></article>
              <article><span>Vision</span><h3>A world where wisdom is preserved as intentionally as wealth and passed forward as naturally as love.</h3></article>
              <article><span>North Star</span><h3>Leave those who come after us with a stronger starting point.</h3></article>
            </div>
            <div className="section-link"><Link className="text-link" href="/genome/">How The Dang Genome works →</Link></div>
          </div>
        </section>

        <section className="section worldview-section">
          <div className="container worldview-grid">
            <div>
              <div className="eyebrow bronze">A recurring worldview</div>
              <h2>The boundaries we use to organize the world are not always the boundaries that should determine where we learn or where we look.</h2>
              <p className="lead">Experience gives us a starting point, not the finished answer. The deeper question is whether we remain open enough to learn across generations, hierarchy, disciplines, and systems.</p>
            </div>
            <div className="boundary-stack">
              <article><span>Book 1</span><strong>Lessons cross generations.</strong></article>
              <article><span>Book 2</span><strong>Wisdom crosses hierarchy.</strong></article>
              <article><span>Book 3</span><strong>Ideas cross disciplines.</strong></article>
              <article><span>In practice</span><strong>Real problems cross organizational silos.</strong></article>
            </div>
          </div>
        </section>

        <section className="section system-section">
          <div className="container">
            <div className="section-intro compact">
              <div className="eyebrow bronze">Three books. One evolving body of thought.</div>
              <h2>INHERIT → BECOME → CREATE</h2>
              <p className="lead">The books trace a larger movement: receive a map from what came before, remain teachable enough to question and revise it, then look beyond its boundaries to create something useful.</p>
            </div>
            <blockquote className="trilogy-map-quote">The people who go before us give us a map. The people who come after us show us where the map is incomplete.</blockquote>
            <div className="system-arc">
              {books.map((book) => (
                <article key={book.title}>
                  <span>{book.number}</span>
                  <div className="book-movement">{book.movement}</div>
                  <div className="map-action">{book.mapAction}</div>
                  <h3>{book.question}</h3>
                  <p>{book.bridge}</p>
                </article>
              ))}
            </div>
            <p className="map-not-script">A map helps us navigate. It does not tell us exactly where to go.</p>
            <p className="system-loop">Learn → Receive → Question → Revise → Connect → Create → Share → Pass Forward → Learn Again</p>
          </div>
        </section>

        <section className="section shared-wisdom-home">
          <div className="container shared-wisdom-home-grid">
            <div>
              <div className="eyebrow bronze">Shared Wisdom</div>
              <h2>Wisdom does not belong to one person.</h2>
              <p className="lead">Some lessons come from books. Some from parents, children, colleagues, strangers, cultures, professions, failures, and lives very different from our own.</p>
              <p>The Dang Genome should grow by listening. Readers can submit a written reflection, attach a longer story, or share a brief video for review. Selected contributions will remain clearly attributed to their source and may be connected to related ideas without erasing authorship.</p>
              <div className="actions"><Link className="button button-dark" href="/share/">Share What You&apos;ve Learned</Link><Link className="text-link" href="/shared-wisdom/">Explore Shared Wisdom →</Link></div>
            </div>
            <div className="shared-wisdom-principles">
              <article><span>01</span><strong>Nothing publishes automatically.</strong><p>Every contribution is reviewed.</p></article>
              <article><span>02</span><strong>Authorship stays visible.</strong><p>A contributor&apos;s story remains the contributor&apos;s story.</p></article>
              <article><span>03</span><strong>Useful beats numerous.</strong><p>The collection grows through editorial judgment, not volume.</p></article>
            </div>
          </div>
        </section>

        <section className="section dots-feature">
          <div className="container dots-feature-grid">
            <div>
              <div className="eyebrow">A major method inside the Genome</div>
              <h2>D.O.T.S. is a way of seeing problems.</h2>
              <p className="lead-light">See past the label. Find the structure. Expand the search space. Transfer what fits. Create something new.</p>
              <p>Most organizations begin with the category already attached to a problem: an AI problem, a technology problem, a workforce problem, an education problem. D.O.T.S. asks what kind of problem it actually is underneath the label.</p>
              <div className="actions">
                <Link className="button button-light" href="/dots/">Explore D.O.T.S.</Link>
                <Link className="text-link light" href="/books/dots/">Explore Book 3 →</Link>
              </div>
            </div>
            <div className="perception-panel">
              <div><small>LABEL</small><strong>“AI problem”</strong><p>The label narrows where you look.</p></div>
              <span>→</span>
              <div><small>STRUCTURE</small><strong>Allocation · uncertainty · tradeoffs · adoption</strong><p>Structure reveals what is actually being decided.</p></div>
              <span>→</span>
              <div><small>SEARCH SPACE</small><strong>Portfolio management · VC · governance · decision science</strong><p>The structure expands where you can look.</p></div>
            </div>
          </div>
        </section>

        <section className="section book-showcase">
          <div className="container">
            <div className="section-intro compact">
              <div className="eyebrow bronze">Books · The Path Forward</div>
              <h2>Three different questions. One intellectual universe.</h2>
              <p className="lead">Book 1 is in final publication preparation. Book 2 has entered final editorial review, with selected passages now available. Book 3 remains in development. Together they make the movement from inheritance to teachability to creation visible.</p>
            </div>
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
                    <div className="book-detail">{book.detail}</div>
                    <div className="book-card-actions">
                      <Link className="text-link" href={book.href}>Explore the book →</Link>
                      {book.number === "01" && <Link className="text-link book-song-link" href="/books/for-those-who-come-after-us/#song">Listen to the song →</Link>}
                      {book.number === "02" && <Link className="text-link book-song-link" href="/books/wisdom-has-no-rank/#inside-book-2">Read excerpts →</Link>}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section paper-feature">
          <div className="container paper-feature-grid">
            <div>
              <div className="eyebrow bronze">Ideas in practice · Public-sector AI white paper</div>
              <h2>From AI Experiments to Institutional Capability</h2>
              <p className="paper-subtitle">A Stewardship Agenda for Public Pension Boards and Executive Leaders</p>
              <p className="lead">How can a public pension system turn AI possibility into durable public value without outrunning trust?</p>
              <p>This paper looks beyond AI activity to the institutional capability required to decide what to explore, what to stop, what to scale, and when to rebalance—and to explain those decisions with evidence.</p>
              <div className="paper-lenses"><span>Mission</span><span>Value</span><span>Trust</span><span>Risk</span><span>Readiness</span></div>
              <Link className="button button-dark" href="/papers/from-ai-experiments-to-institutional-capability/">Read the paper</Link>
            </div>
            <div className="paper-thesis">
              <div className="eyebrow bronze">A D.O.T.S. example in practice</div>
              <h3>The label said AI. The structure revealed a portfolio, stewardship, governance, capability, and trust problem.</h3>
              <p>That shift in perspective opened a larger search space without pretending the analogies were exact. The point is not to borrow blindly. It is to recognize structure, test what transfers, and preserve judgment.</p>
              <blockquote>Public thesis. Private method.</blockquote>
            </div>
          </div>
        </section>

        <section className="section ideas-section">
          <div className="container">
            <div className="ideas-head">
              <div><div className="eyebrow bronze">Ideas</div><h2>A few ideas worth carrying farther.</h2></div>
              <p>Some began in technical work. Some came from leadership. Some came from failure, family, or people I did not expect to teach me. The useful ones rarely stay in one part of life.</p>
            </div>
            <div className="idea-grid">
              <article className="idea-feature">
                <span>{ideas[0][0]}</span>
                <h3>{ideas[0][1]}</h3>
                <p>{ideas[0][2]}</p>
                <Link className="text-link" href="/dots/">Explore D.O.T.S. →</Link>
              </article>
              <div className="idea-list">
                {ideas.slice(1).map(([topic,title,copy]) => (
                  <article className="idea-mini" key={title}>
                    <span>{topic}</span>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="section-link"><Link className="text-link" href="/ideas/">Explore all Ideas →</Link></div>
          </div>
        </section>

        <section className="section about-brand">
          <div className="container about-brand-grid">
            <div className="about-portrait">
              <Image src="/images/darren-headshot.webp" width={480} height={720} alt="Portrait of Darren Dang." sizes="(max-width: 900px) 80vw, 35vw" />
            </div>
            <div>
              <div className="eyebrow bronze">About Darren</div>
              <h2>A practitioner, writer, and steward of wisdom.</h2>
              <p className="lead">Vietnam and America. Computer science and business. Technology and public institutions. Analysis and judgment. Leadership and family. One generation and the next.</p>
              <p>Darren Dang currently serves as Chief Technology Officer at the Orange County Employees Retirement System. His professional experience informs how he thinks, but DarrenDang.com is an independent place for his own ideas, writing, books, papers, reflections, and the public expression of The Dang Genome.</p>
              <p>Stewardship is not a claim to possess all the wisdom. It is a responsibility to preserve what matters, remain teachable, connect what can help, give credit to the people behind the lesson, and pass useful learning forward.</p>
              <p className="independence-callout">The views expressed here are Darren&apos;s own and do not necessarily represent OCERS or any other institution with which he is affiliated.</p>
              <div className="actions">
                <Link className="text-link" href="/about/">About Darren →</Link>
                <Link className="text-link" href="/genome/">The Dang Genome →</Link>
                <Link className="text-link" href="/independence/">Editorial independence →</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section navy speaking">
          <div className="container">
            <div className="eyebrow">Speaking & professional conversations</div>
            <h2>Some ideas become clearer when people examine them together.</h2>
            <p>Darren participates in conversations about AI, technology leadership, institutional stewardship, systems thinking, learning, and the ideas behind his books. The purpose is the same as the site: share useful thinking, invite scrutiny, and learn from the exchange.</p>
            <div className="talks">
              {["D.O.T.S. — A way of seeing problems", "From AI Experiments to Institutional Capability", "Wisdom Has No Rank"].map((x,i) => (
                <div className="talk" key={x}><span>0{i + 1}</span><strong>{x}</strong></div>
              ))}
            </div>
            <div className="actions">
              <Link className="button button-light" href="/speaking/">Explore Speaking</Link>
              <Link className="text-link light" href="/connect/">Discussion inquiry →</Link>
            </div>
          </div>
        </section>

        <section className="final brand-final">
          <div className="container">
            <div className="final-star">✦</div>
            <h2>Take what is useful. Carry it farther.</h2>
            <p>An idea becomes valuable when someone can use it, question it, improve it, connect it to something else, and pass something better forward.</p>
            <div className="actions center">
              <Link className="button button-gold" href="/genome/">Explore the Genome</Link>
              <Link className="button button-outline" href="/share/">Add a Dot</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
