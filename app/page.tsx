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
    question: "Who can I learn from that I did not expect to teach me?",
    copy: "A book about reciprocal learning and the wisdom that can move through real relationships regardless of age, title, or hierarchy.",
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
    copy: "A book about seeing hidden relationships, transferring useful principles across domains, and creating something new from a wider field of experience.",
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
              <p>We cannot leave the people who come after us an answer for every situation. We can preserve what experience taught us, leave room for them to make it their own, and invite them to add what the next context requires.</p>
              <div className="actions">
                <Link className="button button-gold" href="/the-way/">Explore The Way</Link>
                <Link className="button button-outline" href="/genome/">Explore the Dang Genome</Link>
              </div>
            </div>
            <HeroNetwork />
          </div>
          <div className="container hero-note">
            <strong>Leave those who come after a stronger starting point and the freedom to go farther.</strong>
            <span>DarrenDang.com is the public home where The Way becomes discoverable, connected, lived, questioned, and carried forward.</span>
          </div>
        </section>

        <section className="section genome-purpose-home">
          <div className="container">
            <div className="section-intro compact">
              <div className="eyebrow bronze">The constitution</div>
              <h2>Inheritance should create possibility, not obligation.</h2>
              <p className="lead">The Way gives us something useful to begin with. Your Way protects the freedom to test, adapt, and live what we inherit. The Way Forward turns new experience into contribution for someone who comes next.</p>
            </div>
            <div className="purpose-grid home-purpose-grid">
              <article><span>01 · The Way</span><h3>Receive a stronger starting point.</h3><p>Stories, principles, questions, tools, relationships, mistakes, discoveries, and accumulated learning.</p></article>
              <article><span>02 · Your Way</span><h3>Make the inheritance your own.</h3><p>Keep what helps. Question what does not. Test it against your context, evidence, responsibilities, and lived experience.</p></article>
              <article><span>03 · The Way Forward</span><h3>Add what you learn.</h3><p>Carry forward what proved useful, correct what no longer serves, create what is missing, and make the learning available to others.</p></article>
            </div>
            <blockquote className="trilogy-map-quote">Each generation should inherit a stronger starting point, not a narrower future.</blockquote>
            <div className="section-link"><Link className="text-link" href="/the-way/">Read the constitution of The Way →</Link></div>
          </div>
        </section>

        <section className="section shared-wisdom-home">
          <div className="container shared-wisdom-home-grid">
            <div>
              <div className="eyebrow bronze">The Dang Genome</div>
              <h2>The living body beneath the philosophy.</h2>
              <p className="lead">The Way is the philosophical root. The Dang Genome is the connected body of ideas, stories, lessons, books, letters, frameworks, relationships, and contributions through which that philosophy can be explored and expanded.</p>
              <p>DarrenDang.com is the public experience layer. Dang OS privately governs provenance, permissions, review, privacy, and publication.</p>
              <div className="actions">
                <Link className="button button-dark" href="/genome/">How the Genome works</Link>
                <Link className="text-link" href="/contribute/">Contribute to The Way Forward →</Link>
              </div>
            </div>
            <div className="shared-wisdom-principles">
              <article><span>EXPLORE</span><strong>Ideas</strong><p>Durable principles and questions connected to the stories and artifacts that shaped them.</p></article>
              <article><span>DISCOVER</span><strong>Books & Letters</strong><p>Developed bodies of thought and ongoing reflections still being tested.</p></article>
              <article><span>CONTRIBUTE</span><strong>Shared Wisdom</strong><p>New stories, lessons, corrections, and connections preserved with their source intact.</p></article>
            </div>
          </div>
        </section>

        <section className="section worldview-section">
          <div className="container worldview-grid">
            <div>
              <div className="eyebrow bronze">Ideas</div>
              <h2>The useful ones rarely stay in one part of life.</h2>
              <p className="lead">Some ideas began in technology or public institutions. Some came from family, failure, education, or people Darren did not expect to teach him. The deeper test is whether an idea helps us see a choice, system, relationship, or responsibility more clearly.</p>
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
              <h2>Three major artifacts inside The Way.</h2>
              <p className="lead">The trilogy remains The Path Forward: learning from what came before, staying teachable in real relationships, and seeing hidden connections well enough to create something useful for what comes next.</p>
            </div>
            <blockquote className="trilogy-map-quote">A map helps you navigate. It should never become a cage.</blockquote>
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
                    <p>{book.copy}</p>
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
              <div className="eyebrow bronze">Letters from Darren</div>
              <h2>Wisdom in motion.</h2>
              <p className="lead">Books hold developed bodies of thought. Letters make room for ideas that are still moving: a conversation, a story, a question, a failure, an unexpected connection, or something Darren understands differently now than he did before.</p>
              <p>A Letter can offer a starting point without pretending to be the final word.</p>
              <div className="actions">
                <Link className="button button-dark" href="/letters/">Read Letters from Darren</Link>
                <Link className="text-link" href="/letters/why-these-letters/">Why these Letters →</Link>
              </div>
            </div>
            <div className="shared-wisdom-principles">
              <article><span>STORY</span><strong>Begin with something real.</strong><p>Experience gives the idea stakes and context.</p></article>
              <article><span>REFLECTION</span><strong>Ask what changed.</strong><p>The useful lesson is often the shift in judgment.</p></article>
              <article><span>FREEDOM</span><strong>Leave room for revision.</strong><p>A lesson should become someone else&apos;s starting point, not their script.</p></article>
            </div>
          </div>
        </section>

        <section className="section genome-purpose-home">
          <div className="container">
            <div className="section-intro compact">
              <div className="eyebrow bronze">The Way Forward</div>
              <h2>The reader is not only an audience.</h2>
              <p className="lead">The reader journey moves from curiosity to connection, discovery, transformation, contribution, and stewardship. A living body of wisdom should be able to receive new experience without confusing someone else&apos;s contribution with Darren&apos;s canon.</p>
            </div>
            <div className="system-arc">
              <article><span>01</span><div className="book-movement">CURIOSITY → DISCOVERY</div><h3>Find something worth testing.</h3><p>Enter through an idea, story, Letter, book, framework, or question and follow the relationships around it.</p></article>
              <article><span>02</span><div className="book-movement">TRANSFORMATION</div><h3>Make it part of Your Way.</h3><p>Apply what is useful in your own context rather than reproducing someone else&apos;s conclusions.</p></article>
              <article><span>03</span><div className="book-movement">CONTRIBUTION → STEWARDSHIP</div><h3>Add what life taught you.</h3><p>Share a story, lesson, correction, question, or new connection for review and possible preservation.</p></article>
            </div>
            <div className="actions">
              <Link className="button button-dark" href="/contribute/">Contribute to The Way Forward</Link>
              <Link className="text-link" href="/shared-wisdom/">Explore Shared Wisdom →</Link>
            </div>
          </div>
        </section>

        <section className="section dots-feature">
          <div className="container dots-feature-grid">
            <div>
              <div className="eyebrow">A methodology inside the ecosystem</div>
              <h2>D.O.T.S. is a way of seeing problems.</h2>
              <p className="lead-light">Collect dots. See past the label. Find the structure. Connect what others keep separate. Transfer what fits. Create something new.</p>
              <p>D.O.T.S. helps The Way evolve. It is not the philosophical layer above The Way.</p>
              <div className="actions">
                <Link className="button button-light" href="/dots/">Explore D.O.T.S.</Link>
                <Link className="text-link light" href="/books/dots/">Explore Book 3 →</Link>
              </div>
            </div>
            <div className="perception-panel">
              <div><small>COLLECT</small><strong>What useful dots exist?</strong><p>Experience and learning widen the available field.</p></div>
              <span>→</span>
              <div><small>CONNECT</small><strong>What structure links them?</strong><p>Structural similarity can cross familiar domain boundaries.</p></div>
              <span>→</span>
              <div><small>CREATE</small><strong>What does this context require?</strong><p>The goal is an adapted response, not mechanical copying.</p></div>
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
              <div className="eyebrow bronze">Your Way</div>
              <h2>Take what is useful. Make it your own. Add what you learn.</h2>
              <p className="lead">The point is not to preserve Darren&apos;s conclusions unchanged. It is to help each person start stronger, remain free to choose, and leave something useful for whoever comes next.</p>
            </div>
            <div className="actions">
              <Link className="button button-dark" href="/the-way/">Explore The Way</Link>
              <Link className="text-link" href="/contribute/">Contribute to The Way Forward →</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
