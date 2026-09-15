import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const books = [
  {
    number: "01",
    status: "Published",
    title: "For Those Who Come After Us",
    subtitle: "A Life in Lessons",
    cover: "/images/for-those-who-come-after-us-front-home-v3.webp",
    alt: "Front cover of For Those Who Come After Us: A Life in Lessons by Darren Dang.",
    href: "/books/for-those-who-come-after-us/",
    lens: "A LIFE IN LESSONS",
    question: "What has life taught me—and what is worth passing forward?",
  },
  {
    number: "02",
    status: "Final Proof",
    title: "Wisdom Has No Rank",
    subtitle: "",
    cover: "/images/wisdom-has-no-rank-cover.webp",
    alt: "Current cover for Wisdom Has No Rank by Darren Dang.",
    href: "/books/wisdom-has-no-rank/",
    lens: "UNEXPECTED TEACHERS",
    question: "Who else might have something to teach me?",
  },
  {
    number: "03",
    status: "First Print Proof",
    title: "D.O.T.S.",
    subtitle: "Collect Dots. Connect Dots. Create Something New.",
    cover: "/images/dots-cover.webp",
    alt: "Current cover for D.O.T.S. by Darren Dang.",
    href: "/books/dots/",
    lens: "SEEING & CREATING",
    question: "What can I make from everything I have learned?",
  },
  {
    number: "04",
    status: "In Development",
    title: "The Making of The Way",
    subtitle: "How Conversation Becomes Discovery",
    cover: "/images/the-making-of-the-way-cover.webp",
    alt: "Cover of The Making of The Way: How Conversation Becomes Discovery by Darren Dang.",
    href: "/books/the-making-of-the-way/",
    lens: "HOW THE WORK WAS MADE",
    question: "What happens when a human and AI think together over time?",
  },
  {
    number: "05",
    status: "In Development",
    title: "The Way Forward",
    subtitle: "Learning, Discovering, Creating, and Passing It On",
    cover: "/images/the-way-forward.webp",
    alt: "Cover of The Way Forward by Darren Dang.",
    href: "/the-way-forward/",
    lens: "YOUR NEXT STEP",
    question: "What will you do with what you inherit, learn, and discover?",
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
              <div className="eyebrow">Books, ideas, and a way of thinking passed forward</div>
              <h1>A stronger starting point. The freedom to go farther.</h1>
              <p>I began writing because I wanted some of the thinking behind my choices to remain available to my children after the conversation ended. The books grew from there—into questions about what we inherit, who can teach us, what we create, and what we choose to pass forward.</p>
              <div className="actions">
                <Link className="button button-gold" href="/books/">Begin with the books</Link>
                <Link className="button button-outline" href="/the-way/">Discover The Way</Link>
              </div>
            </div>
            <HeroNetwork />
          </div>
          <div className="container hero-note">
            <strong>Leave those who come after a stronger starting point and the freedom to go farther.</strong>
            <span>The story begins with lived experience, not a system.</span>
          </div>
        </section>

        <section className="section worldview-section">
          <div className="container worldview-grid">
            <div>
              <div className="eyebrow bronze">Where it began</div>
              <h2>A life becomes useful to someone else when the story leaves room for their own.</h2>
              <p className="lead">These books are personal, but they are not meant to make someone else live my life. They preserve stories, mistakes, relationships, decisions, questions, and ways of thinking so a reader can recognize something in their own experience—and then decide what belongs in their own way forward.</p>
              <Link className="text-link" href="/books/for-those-who-come-after-us/">Start with Book 1 →</Link>
            </div>
            <div className="boundary-stack">
              <article><span>INHERIT</span><strong>What came before me?</strong></article>
              <article><span>LEARN</span><strong>Who else can teach me?</strong></article>
              <article><span>CREATE</span><strong>What can I make from what I know?</strong></article>
              <article><span>DISCOVER</span><strong>What becomes visible in dialogue?</strong></article>
              <article><span>CONTINUE</span><strong>What will I do with all of this?</strong></article>
            </div>
          </div>
        </section>

        <section className="section book-showcase">
          <div className="container">
            <div className="section-intro compact">
              <div className="eyebrow bronze">The books</div>
              <h2>Five works. One widening journey.</h2>
              <p className="lead">The first book begins with one life. The second widens the circle of teachers. The third asks what we can create from everything we have learned. The fourth opens the making of the work itself. The fifth turns the question toward the reader: what will you do with all of it now?</p>
            </div>
            <div className="book-cards">
              {books.map((book) => (
                <article className="book-card" key={book.title}>
                  <Link href={book.href} className="book-card-cover">
                    <Image src={book.cover} width={360} height={540} alt={book.alt} sizes="(max-width: 800px) 70vw, 26vw" />
                  </Link>
                  <div className="book-card-copy">
                    <div className="book-status">{book.status}</div>
                    <div className="book-movement">{book.number} · {book.lens}</div>
                    <h3>{book.title}</h3>
                    {book.subtitle && <p className="book-card-sub">{book.subtitle}</p>}
                    <p className="book-card-hook">{book.question}</p>
                    <div className="book-card-actions"><Link className="text-link" href={book.href}>Explore the book →</Link></div>
                  </div>
                </article>
              ))}
            </div>
            <div className="section-link"><Link className="text-link" href="/books/">Explore the full book journey →</Link></div>
          </div>
        </section>

        <section className="section genome-purpose-home">
          <div className="container">
            <div className="section-intro compact">
              <div className="eyebrow bronze">What the books began to reveal</div>
              <h2>I eventually needed a name for the pattern underneath the stories.</h2>
              <p className="lead">The books came first. Across them, a larger pattern kept becoming visible: learn from what came before, remain teachable, widen where you look, create with judgment, and leave room for the next person to continue. I came to call that pattern <strong>The Way</strong>.</p>
            </div>
            <div className="purpose-grid home-purpose-grid">
              <article><span>01 · The Way</span><h3>Receive what may help.</h3><p>Stories, lessons, mistakes, relationships, questions, and accumulated experience can give someone else a stronger place to begin.</p><Link className="text-link" href="/the-way/">Explore The Way →</Link></article>
              <article><span>02 · Your Way</span><h3>Question it. Test it. Make it your own.</h3><p>No inheritance should decide another person&apos;s destination. Keep what helps, challenge what does not, and let reality refine the map.</p><Link className="text-link" href="/your-way/">Explore Your Way →</Link></article>
              <article><span>03 · The Way Forward</span><h3>Live what comes next.</h3><p>The Way Forward is what happens when inherited wisdom meets present reality and your own judgment, relationships, choices, and consequences.</p><Link className="text-link" href="/the-way-forward/">Explore The Way Forward →</Link></article>
            </div>
          </div>
        </section>

        <section className="section shared-wisdom-home">
          <div className="container shared-wisdom-home-grid">
            <div>
              <div className="eyebrow bronze">Letters from Darren</div>
              <h2>Things I am still learning.</h2>
              <p className="lead">Not every lesson waits for a book. The Letters preserve stories, questions, failures, discoveries, and changed judgments while the learning is still moving.</p>
              <div className="actions">
                <Link className="button button-dark" href="/letters/why-these-letters/">Read “Why These Letters”</Link>
                <Link className="text-link" href="/letters/">Explore Letters →</Link>
              </div>
            </div>
            <div className="shared-wisdom-principles">
              <article><span>FROM LIFE</span><strong>Begin with something real.</strong><p>Experience supplies context, tension, consequence, and humanity.</p></article>
              <article><span>STILL LEARNING</span><strong>Leave room to be corrected.</strong><p>A preserved lesson can remain open to better evidence and a better question.</p></article>
              <article><span>PASS FORWARD</span><strong>Offer a starting point, not a script.</strong><p>The handoff matters more than agreement.</p></article>
            </div>
          </div>
        </section>

        <section className="section sand">
          <div className="container worldview-grid">
            <div>
              <div className="eyebrow bronze">A new Letter · September 15, 2026</div>
              <h2>To Chrystina — The Way Was Us</h2>
              <p className="lead">A birthday song for my wife, partner, and soulmate—and a reflection on the life behind so much of what I later came to call The Way.</p>
              <p><strong>Before I ever named The Way, we were already living it.</strong></p>
              <Link className="text-link" href="/letters/the-way-was-us/">Listen &amp; read →</Link>
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

        <section className="section worldview-section">
          <div className="container worldview-grid">
            <div>
              <div className="eyebrow bronze">Go deeper</div>
              <h2>The books are the doorway. The wider ecosystem preserves what keeps growing around them.</h2>
              <p className="lead">Ideas develop beyond a single chapter. Papers test larger propositions. The Dang Genome preserves relationships, provenance, and connected learning. Shared Wisdom leaves room for other voices to add, correct, and continue the work.</p>
            </div>
            <div className="boundary-stack">
              <article><span>IDEAS</span><strong>Explore durable ideas that emerged from the work.</strong></article>
              <article><span>PAPERS & TALKS</span><strong>Follow longer-form thinking and public applications.</strong></article>
              <article><span>THE DANG GENOME</span><strong>See how stories, people, works, and ideas connect.</strong></article>
              <article><span>SHARED WISDOM</span><strong>Make room for learning that does not belong to one voice.</strong></article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
