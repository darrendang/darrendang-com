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
    lens: "INHERITANCE",
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
    lens: "TEACHABILITY",
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
    lens: "STRUCTURAL SEEING",
    question: "What becomes possible when I see beyond familiar labels?",
  },
];

const fiveMovements = [
  ["Receive", "What am I carrying into this?"],
  ["Examine", "What might I be wrong or uncertain about?"],
  ["Connect", "Who or what am I not seeing?"],
  ["Practice", "What is the next responsible action—or non-action?"],
  ["Pass Forward", "What will this leave behind?"],
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

        <section className="section worldview-section">
          <div className="container worldview-grid">
            <div>
              <div className="eyebrow bronze">Start with a human question</div>
              <h2>You do not need to understand the whole system before something becomes useful.</h2>
              <p className="lead">Begin with what is already alive in your life. Questions can lead into stories, Letters, books, ideas, methods, and other perspectives without forcing you through a prescribed sequence.</p>
              <Link className="text-link" href="/explore/">Explore by question →</Link>
            </div>
            <div className="boundary-stack">
              <article><span>Inheritance</span><strong>What am I carrying into this?</strong></article>
              <article><span>Perspective</span><strong>What might I be wrong or uncertain about?</strong></article>
              <article><span>Relationship</span><strong>Who or what am I not seeing?</strong></article>
              <article><span>Decision</span><strong>What is the next responsible action—or non-action?</strong></article>
              <article><span>Legacy</span><strong>What will this leave behind?</strong></article>
            </div>
          </div>
        </section>

        <section className="section shared-wisdom-home">
          <div className="container shared-wisdom-home-grid">
            <div>
              <div className="eyebrow bronze">Letters from Darren</div>
              <h2>Things I am still learning.</h2>
              <p className="lead">The Way begins in lived experience, not doctrine. Letters preserve a story, question, failure, discovery, changed judgment, or connection while the learning is still moving.</p>
              <div className="actions">
                <Link className="button button-dark" href="/letters/why-these-letters/">Read “Why These Letters”</Link>
                <Link className="text-link" href="/letters/">All Letters →</Link>
              </div>
            </div>
            <div className="shared-wisdom-principles">
              <article><span>FROM LIFE</span><strong>Begin with something real.</strong><p>Experience supplies context, tension, and consequence.</p></article>
              <article><span>STILL REVISABLE</span><strong>Reality keeps the right to change the map.</strong><p>Learning can be preserved without pretending the question is closed.</p></article>
              <article><span>FOR YOUR WAY</span><strong>Take what helps. Question what does not.</strong><p>The handoff matters more than agreement.</p></article>
            </div>
          </div>
        </section>

        <section className="section genome-purpose-home">
          <div className="container">
            <div className="section-intro compact">
              <div className="eyebrow bronze">The philosophical spine</div>
              <h2>Learn from what came before. Make it your own. Choose what comes next.</h2>
              <p className="lead">The Way is a stronger starting point. Your Way is the lived expression that becomes yours. The Way Forward is the direction you choose.</p>
            </div>
            <div className="purpose-grid home-purpose-grid">
              <article><span>01 · The Way</span><h3>Learn from what came before.</h3><p>Stories, lessons, principles, mistakes, questions, methods, relationships, and accumulated experience can give us a stronger place to begin.</p><Link className="text-link" href="/the-way/">Explore The Way →</Link></article>
              <article><span>02 · Your Way</span><h3>Question it. Test it. Make it your own.</h3><p>Inherited wisdom is a starting point, not a script. Keep what helps, challenge what does not, and learn from your own context.</p><Link className="text-link" href="/your-way/">Explore Your Way →</Link></article>
              <article><span>03 · The Way Forward</span><h3>Choose the direction your context requires.</h3><p>Progress is personal and contextual. It may mean building, healing, changing direction, serving, creating, simplifying, waiting, or beginning again.</p><Link className="text-link" href="/the-way-forward/">Explore The Way Forward →</Link></article>
            </div>
          </div>
        </section>

        <section className="section system-section">
          <div className="container">
            <div className="section-intro compact">
              <div className="eyebrow bronze">Use The Way</div>
              <h2>Receive. Examine. Connect. Practice. Pass Forward.</h2>
              <p className="lead">The Five Movements turn the philosophy into portable questions without turning it into commandments or a productivity system.</p>
            </div>
            <div className="genome-cycle" aria-label="Receive, examine, connect, practice, pass forward">
              {fiveMovements.map(([title, question], index) => (
                <div key={title}><span>{String(index + 1).padStart(2, "0")}</span><strong>{title}</strong><p>{question}</p></div>
              ))}
            </div>
            <div className="section-link"><Link className="button button-dark" href="/use-the-way/">Use the Five Movements</Link></div>
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
                    <div className="book-movement">{book.number} · {book.lens}</div>
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

        <section className="section shared-wisdom-home">
          <div className="container shared-wisdom-home-grid">
            <div>
              <div className="eyebrow bronze">Pass Forward</div>
              <h2>The Way should not become one person talking forever.</h2>
              <p className="lead">Other people&apos;s lives can add stories, corrections, questions, counterexamples, practices, and new connections. Contribution is optional, remains attributable to its source, and is separate from canonization or publication.</p>
              <div className="actions">
                <Link className="button button-dark" href="/shared-wisdom/">Explore Shared Wisdom</Link>
                <Link className="text-link" href="/contribute/">How contribution works →</Link>
              </div>
              <p className="note">Rich public contribution intake is temporarily closed while the permission, safety, minor/vulnerable, withdrawal, storage/AI, and legal production controls are completed.</p>
            </div>
            <div className="shared-wisdom-principles">
              <article><span>OWNERSHIP</span><strong>Your contribution remains yours.</strong><p>Offering a story does not surrender identity, authorship, or future control.</p></article>
              <article><span>DIFFERENCE</span><strong>Correction and disagreement belong.</strong><p>The system should learn from perspectives that challenge Darren or existing canon.</p></article>
              <article><span>STEWARDSHIP</span><strong>Contribution is not acquisition.</strong><p>People are not content sources. Participation remains optional.</p></article>
            </div>
          </div>
        </section>

        <section className="section worldview-section">
          <div className="container worldview-grid">
            <div>
              <div className="eyebrow bronze">Go deeper</div>
              <h2>The philosophy is simple enough to use before you learn the architecture behind it.</h2>
              <p className="lead">When you want the deeper layer, the Constitution protects the boundaries of The Way and the Dang Genome preserves the connected body of learning beneath the public experience.</p>
              <div className="actions">
                <Link className="button button-dark" href="/the-way/constitution/">Read the Constitution</Link>
                <Link className="text-link" href="/genome/">How the Dang Genome works →</Link>
              </div>
            </div>
            <div className="boundary-stack">
              <article><span>North Star</span><strong>Leave those who come after a stronger starting point and the freedom to go farther.</strong></article>
              <article><span>Agency</span><strong>The Way provides a stronger starting point, not a predetermined destination.</strong></article>
              <article><span>Evolution</span><strong>Inherit wisdom, not dogma. Preserve what was learned. Remain free to learn more.</strong></article>
              <article><span>Teachability</span><strong>Reality has the right to change our minds.</strong></article>
            </div>
          </div>
        </section>

        <section className="section final">
          <div className="container">
            <div className="final-star">✦</div>
            <h2>What will you do with what you inherit?</h2>
            <p>The Way can give you a stronger starting point. Your Way is what emerges as you live and learn. The Way Forward is yours to choose.</p>
            <div className="actions center">
              <Link className="button button-light" href="/use-the-way/">Use The Way</Link>
              <Link className="text-link light" href="/the-way-forward/">Explore The Way Forward →</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
