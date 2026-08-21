import Image from "next/image";
import Link from "next/link";

const ideas = [
  ["Learning & Innovation", "Collect Dots. Connect Dots. Create Something New.", "Broad learning gives us more patterns, tools, and analogies to draw from. Creativity often begins when ideas taught separately are recognized as belonging together."],
  ["Technology & AI", "Automate the Repetition. Preserve Human Judgment.", "Technology is most useful when it removes mechanical work without pretending that every decision is mechanical."],
  ["Leadership", "Wisdom Has No Rank.", "Useful insight does not become less true because it came from someone younger, more junior, or outside the expected hierarchy."],
  ["Learning & Scale", "Make Knowledge Travel.", "What we make understandable, reusable, and shareable can become someone else's starting point."],
  ["Judgment & Purpose", "Have a North Star.", "A plan is a route. Purpose is the North Star. The route can change without losing what the effort is for."],
  ["Leadership & Capability", "Leadership Is Not Indispensability.", "Strong leadership builds people, judgment, and systems that keep working when the leader is not in the room."],
];

const books = [
  {
    number: "01",
    status: "Preparing for publication",
    title: "For Those Who Come After Us",
    subtitle: "A Life in Lessons",
    cover: "/images/for-those-who-come-after-us-front-home-v3.webp",
    alt: "Front cover of For Those Who Come After Us: A Life in Lessons by Darren Dang.",
    href: "/books/for-those-who-come-after-us/",
    movement: "Pass Forward",
    hook: "What have I learned that is worth carrying forward?",
    copy: "A life in lessons about inheritance, identity, learning, failure, systems, leadership, family, purpose, and legacy.",
    detail: "Target: September 2026",
  },
  {
    number: "02",
    status: "In development",
    title: "Wisdom Has No Rank",
    subtitle: "",
    cover: "/images/wisdom-has-no-rank-cover.webp",
    alt: "Current cover for Wisdom Has No Rank by Darren Dang.",
    href: "/books/wisdom-has-no-rank/",
    movement: "Remain Teachable",
    hook: "What happens when the person you expected to teach becomes someone capable of teaching you?",
    copy: "Experience matters. Expertise matters. Responsibility matters. Rank matters. None gives us a monopoly on wisdom.",
    detail: "Teachability · Reciprocity · Listening · Reflection · Change",
  },
  {
    number: "03",
    status: "In development",
    title: "D.O.T.S.",
    subtitle: "Collect Dots. Connect Dots. Create Something New.",
    cover: "/images/dots-cover.webp",
    alt: "Current cover for D.O.T.S. by Darren Dang.",
    href: "/books/dots/",
    movement: "Connect & Create",
    hook: "The world organizes knowledge into disciplines. Problems do not.",
    copy: "A book about broad learning, structural relationships, selective transfer, systems thinking, and useful synthesis.",
    detail: "Deconstruct → Observe → Transfer → Synthesize",
  },
];

const quality = [
  ["PATHOS", "Make it human."],
  ["ETHOS", "Earn trust."],
  ["LOGOS", "Make it make sense."],
  ["PRAXIS", "Put it to work."],
];

function Header() {
  return <header className="site-header"><div className="container nav"><Link href="/" className="wordmark">Darren Dang <span>✦</span></Link><nav aria-label="Primary"><Link href="/ideas/">Ideas</Link><Link href="/writing/">Writing</Link><Link href="/books/">Books</Link><Link href="/speaking/">Speaking</Link><Link href="/about/">About</Link><Link className="nav-cta" href="/connect/">Connect</Link></nav></div></header>;
}

function Footer() {
  return <footer><div className="container footer-grid"><div><div className="wordmark">Darren Dang</div><p>Ideas about how we learn, decide, lead, build, adapt, and pass something better forward.</p></div><div><strong>Explore</strong><Link href="/ideas/">Ideas</Link><Link href="/writing/">Writing</Link><Link href="/books/">Books</Link><Link href="/speaking/">Speaking</Link></div><div><strong>Darren</strong><Link href="/about/">About</Link><Link href="/connect/">Connect</Link><Link href="/privacy/">Privacy</Link><Link href="/accessibility/">Accessibility</Link></div></div><div className="container copyright">© 2026 Darren Dang. All rights reserved.</div></footer>;
}

function HeroNetwork() {
  return <div className="hero-visual" aria-hidden="true"><svg viewBox="0 0 760 650" role="presentation">
    <defs>
      <radialGradient id="sun" cx="50%" cy="72%" r="35%"><stop offset="0" stopColor="#ffe8a6" stopOpacity="1"/><stop offset=".18" stopColor="#c79a45" stopOpacity=".55"/><stop offset="1" stopColor="#0D1F31" stopOpacity="0"/></radialGradient>
      <linearGradient id="path" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stopColor="#8e642b"/><stop offset=".6" stopColor="#d8aa55"/><stop offset="1" stopColor="#ffecad"/></linearGradient>
    </defs>
    <rect width="760" height="650" fill="url(#sun)"/>
    <g className="net-lines" fill="none">
      <path d="M20 220 Q210 90 370 430 Q535 100 740 230"/><path d="M55 330 Q205 145 370 430 Q520 180 700 335"/><path d="M0 430 Q180 260 370 430 Q560 250 760 430"/><path d="M80 525 Q230 340 370 430 Q500 340 680 520"/><path d="M100 170 Q285 300 370 430 Q470 300 650 165"/><path d="M15 540 Q220 455 370 430 Q550 450 745 535"/>
    </g>
    <g className="net-dots">
      {[ [85,255],[145,365],[210,210],[270,335],[320,260],[370,430],[420,250],[470,360],[535,200],[600,330],[675,250],[155,495],[255,470],[485,490],[615,500] ].map(([x,y],i)=><circle key={i} cx={x} cy={y} r={i%4===0?6:3}/>) }
    </g>
    <path className="hero-path-shadow" d="M335 650 C320 585 420 560 365 515 C320 478 330 452 370 430"/>
    <path className="hero-path" d="M335 650 C320 585 420 560 365 515 C320 478 330 452 370 430"/>
    <circle cx="370" cy="430" r="11" className="hero-sun"/>
  </svg></div>;
}

export default function Home() {
  return <>
    <Header />
    <main id="main">
      <section className="hero brand-hero">
        <div className="container hero-grid">
          <div className="hero-copy"><div className="eyebrow">Ideas for the Path Forward</div><h1>Useful ideas should travel farther than the person who first had them.</h1><p>I write about how we learn, decide, lead, build, adapt, and pass something better forward—across technology, systems, work, family, and the choices that shape a life.</p><div className="actions"><Link className="button button-gold" href="/ideas/">Explore the Ideas</Link><Link className="button button-outline" href="/books/">Explore the Books</Link></div></div>
          <HeroNetwork />
        </div>
        <div className="container trilogy-panel"><div className="trilogy-title">Three books. One connected system of thought.</div><div className="trilogy-steps">{books.map(book=><div className="trilogy-step" key={book.title}><span>{book.number}</span><div><small>Book {Number(book.number)}</small><strong>{book.movement}</strong></div></div>)}</div><div className="trilogy-loop">Learn → Share → Receive → Connect → Create → Pass Forward → Learn Again</div></div>
      </section>

      <section className="section book-showcase"><div className="container"><div className="section-intro compact"><div className="eyebrow bronze">An evolving body of work</div><h2>Three different questions. One intellectual universe.</h2><p className="lead">The books are major expressions of the ideas—not the container for the platform. Each examines a different movement in the same larger cycle of learning, judgment, creation, and what we pass forward.</p></div><div className="book-cards">{books.map(book=><article className="book-card" key={book.title}><Link href={book.href} className="book-card-cover"><Image src={book.cover} width={360} height={540} alt={book.alt} sizes="(max-width: 800px) 70vw, 26vw" /></Link><div className="book-card-copy"><div className="book-status">{book.status}</div><div className="book-movement">{book.movement}</div><h3>{book.title}</h3>{book.subtitle&&<p className="book-card-sub">{book.subtitle}</p>}<p className="book-card-hook">{book.hook}</p><p>{book.copy}</p><div className="book-detail">{book.detail}</div><Link className="text-link" href={book.href}>Explore the book →</Link></div></article>)}</div></div></section>

      <section className="quality-band"><div className="container quality-grid">{quality.map(([name,line],i)=><div className="quality-item" key={name}><span>{["♡","◇","✦","▷"][i]}</span><div><strong>{name}</strong><small>{line}</small></div></div>)}</div></section>

      <section className="section ideas-section"><div className="container"><div className="ideas-head"><div><div className="eyebrow bronze">Ideas</div><h2>A few ideas worth carrying farther.</h2></div><p>Some began in technical work. Some came from leadership. Some came from failure, family, or people I did not expect to teach me. The useful ones rarely stay in one part of life.</p></div><div className="idea-grid"><article className="idea-feature"><span>{ideas[0][0]}</span><h3>{ideas[0][1]}</h3><p>{ideas[0][2]}</p><Link className="text-link" href="/ideas/collect-dots-connect-dots-create-something-new/">Explore the idea →</Link></article><div className="idea-list">{ideas.slice(1).map(([topic,title,copy])=><article className="idea-mini" key={title}><span>{topic}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div><div className="section-link"><Link className="text-link" href="/ideas/">Explore all Ideas →</Link></div></div></section>

      <section className="section about-brand"><div className="container about-brand-grid"><div className="about-portrait"><Image src="/images/darren-headshot.webp" width={480} height={720} alt="Portrait of Darren Dang." sizes="(max-width: 900px) 80vw, 35vw" /></div><div><div className="eyebrow bronze">About Darren</div><h2>A practical thinker shaped by a life between worlds.</h2><p className="lead">Vietnam and America. Computer science and business. Technology and public institutions. Analysis and judgment. Leadership and family. One generation and the next.</p><p>Darren Dang is Chief Technology Officer at the Orange County Employees Retirement System. His career has crossed private technology, consulting, education, courts, and public pensions. Those experiences are evidence behind the ideas—not the brand by themselves.</p><div className="brand-principles"><span>Ideas before titles.</span><span>Clarity over complexity.</span><span>Breadth with judgment.</span><span>Service that compounds.</span></div><Link className="text-link" href="/about/">About Darren →</Link></div></div></section>

      <section className="section navy speaking"><div className="container"><div className="eyebrow">Speaking</div><h2>Some ideas deserve more than a page. They deserve a room.</h2><p>Books, writing, presentations, and conversations are different ways to test whether an idea is clear enough, useful enough, and human enough to travel.</p><div className="talks">{["Collect Dots. Connect Dots. Create Something New.","Automate the Repetition. Preserve Human Judgment.","Wisdom Has No Rank."].map((x,i)=><div className="talk" key={x}><span>0{i+1}</span><strong>{x}</strong></div>)}</div><div className="actions"><Link className="button button-light" href="/speaking/">Explore Speaking</Link><Link className="text-link light" href="/connect/">Speaking inquiry →</Link></div></div></section>

      <section className="final brand-final"><div className="container"><div className="final-star">✦</div><h2>Take what is useful. Carry it farther.</h2><p>An idea becomes valuable when someone can use it, question it, improve it, connect it to something else, and pass something better forward.</p><div className="actions center"><Link className="button button-gold" href="/ideas/">Explore the Ideas</Link><Link className="button button-outline" href="/books/">Explore the Books</Link></div></div></section>
    </main>
    <Footer />
  </>;
}
