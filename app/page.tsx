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

const practice = [
  ["Judgment", "How do we choose when the alternatives are competing good things?"],
  ["Systems", "What changes elsewhere when we change one part?"],
  ["Technology & AI", "What should technology repeat—and what judgment should remain human?"],
  ["Leadership", "What capability remains when the leader is absent?"],
];

function Header() {
  return <header className="site-header"><div className="container nav"><Link href="/" className="wordmark">Darren Dang <span>✦</span></Link><nav aria-label="Primary"><Link href="/ideas/">Ideas</Link><Link href="/writing/">Writing</Link><Link href="/books/">Books</Link><Link href="/speaking/">Speaking</Link><Link href="/about/">About</Link><Link className="nav-cta" href="/connect/">Connect</Link></nav></div></header>;
}

function Footer() {
  return <footer><div className="container footer-grid"><div><div className="wordmark">Darren Dang</div><p>Ideas about how we learn, decide, lead, build, adapt, and pass something better forward.</p></div><div><strong>Explore</strong><Link href="/ideas/">Ideas</Link><Link href="/writing/">Writing</Link><Link href="/books/">Books</Link><Link href="/speaking/">Speaking</Link></div><div><strong>Darren</strong><Link href="/about/">About</Link><Link href="/connect/">Connect</Link><Link href="/privacy/">Privacy</Link><Link href="/accessibility/">Accessibility</Link></div></div><div className="container copyright">© 2026 Darren Dang. All rights reserved.</div></footer>;
}

export default function Home() {
  return <>
    <Header />
    <main id="main">
      <section className="hero"><div className="hero-star">✦</div><div className="container hero-inner"><div className="eyebrow">Ideas for the Path Forward</div><h1>Useful ideas should travel farther than the person who first had them.</h1><p>I write about how we learn, decide, lead, build, adapt, and pass something better forward—across technology, systems, work, family, and the choices that shape a life.</p><div className="actions"><Link className="button button-light" href="/ideas/">Explore the Ideas</Link><Link className="text-link light" href="/books/for-those-who-come-after-us/">Explore the Book →</Link></div></div><div className="horizon" /></section>

      <section className="section ivory"><div className="container"><div className="section-intro"><div className="eyebrow bronze">What I keep coming back to</div><h2>The questions change. The deeper work often does not.</h2><p className="lead">How do we know what deserves our effort? How do we keep learning when the problem crosses the boundaries of our expertise? How do we build systems that help people rather than trap them? And what should we leave behind for someone else to improve?</p></div><div className="waypoints">{[["Direction & Judgment","What deserves our effort?"],["Learning & Connection","What can we see when we stop protecting the boundaries of what we know?"],["Systems & Capability","What happens beyond the decision directly in front of us?"],["What We Pass Forward","What should continue after we are gone?"]].map(([a,b])=><article key={a}><span className="dot"/><h3>{a}</h3><strong>{b}</strong></article>)}</div></div></section>

      <section className="section sand"><div className="container"><div className="ideas-head"><div><div className="eyebrow bronze">Ideas</div><h2>A few ideas worth exploring.</h2></div><p>Some began in technical work. Some came from leadership. Some came from failure, family, or people I did not expect to teach me. The useful ones rarely stay in one part of life.</p></div><div className="idea-grid"><article className="idea-feature"><span>{ideas[0][0]}</span><h3>{ideas[0][1]}</h3><p>{ideas[0][2]}</p><Link className="text-link" href="/ideas/collect-dots-connect-dots-create-something-new/">Explore the idea →</Link></article><div className="idea-list">{ideas.slice(1).map(([topic,title,copy])=><article className="idea-mini" key={title}><span>{topic}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div><div className="section-link"><Link className="text-link" href="/ideas/">Explore all Ideas →</Link></div></div></section>

      <section className="section navy"><div className="container book-grid"><div className="book-cover-wrap"><Image src="/images/for-those-who-come-after-us-front-home-v3.webp" width={360} height={576} alt="Front cover of For Those Who Come After Us: A Life in Lessons by Darren Dang." className="book-cover-image" sizes="(max-width: 900px) 76vw, 32vw" priority /></div><div><div className="eyebrow">The first major artifact</div><h2>For Those Who Come After Us</h2><p className="book-sub">A Life in Lessons</p><p>No one can leave the next generation an answer for every situation. The next best thing is to leave behind some of the thinking that helped us find our way.</p><blockquote className="book-quote">The road we walk today becomes the path for those who follow.</blockquote><p>The book moves through six stages:</p><div className="progression">INHERIT → BECOME → CONNECT → LEAD → LIVE → PASS FORWARD</div><p>It is where many of the ideas on this site first took shape.</p><Link className="button button-light" href="/books/for-those-who-come-after-us/">Explore the Book</Link></div></div></section>

      <section className="section ivory"><div className="container about-grid"><Image src="/images/darren-headshot.webp" width={360} height={540} alt="Portrait of Darren Dang." className="homepage-headshot" sizes="(max-width: 900px) 100vw, 40vw" /><div><div className="eyebrow bronze">The person behind the ideas</div><h2>A life between worlds.</h2><div className="pairs">Vietnam and America.<br/>Computer science and business.<br/>Technology and public institutions.<br/>Analysis and judgment.<br/>Leadership and family.<br/>One generation and the next.</div><p className="question">What is worth keeping—and what needs to change?</p><p>I have learned from parents, teachers, colleagues, failures, institutions, and my own children. The point was never to collect lessons. It was to understand which ones were useful enough to put to work.</p><Link className="text-link" href="/about/">About Darren →</Link></div></div></section>

      <section className="section sand"><div className="container"><div className="eyebrow bronze">From ideas to practice</div><h2>An idea matters more when it changes how we see the decision in front of us.</h2><div className="practice-grid">{practice.map(([a,b])=><article key={a}><h3>{a}</h3><strong>{b}</strong></article>)}</div></div></section>

      <section className="section navy"><div className="container speaking"><div className="eyebrow">Speaking</div><h2>Some ideas deserve more than a page. They deserve a room.</h2><p>Writing lets an idea travel across time. Speaking creates a different kind of test: can an idea become clear enough, useful enough, and human enough for people to examine together?</p><div className="talks">{["Collect Dots. Connect Dots. Create Something New.","Automate the Repetition. Preserve Human Judgment.","Wisdom Has No Rank."].map((x,i)=><div className="talk" key={x}><span>0{i+1}</span><strong>{x}</strong></div>)}</div><div className="actions"><Link className="button button-light" href="/speaking/">Explore Speaking</Link><Link className="text-link light" href="/connect/">Speaking inquiry →</Link></div></div></section>

      <section className="section ivory"><div className="container credibility"><div className="eyebrow bronze">About Darren</div><div><p>Darren Dang is Chief Technology Officer at the Orange County Employees Retirement System, where he leads technology strategy spanning pension-system modernization, enterprise automation, data and analytics, artificial intelligence, and cybersecurity. His career has crossed private technology, consulting, education, courts, and public pensions. He is the author of <em>For Those Who Come After Us — A Life in Lessons</em>.</p><p>His writing explores what those worlds have taught him about judgment, learning, systems, leadership, family, service, and what we pass forward.</p><Link className="text-link" href="/about/">About Darren →</Link></div></div></section>

      <section className="final"><div className="container"><div className="final-star">✦</div><h2>Take what is useful. Carry it farther.</h2><p>An idea becomes valuable when someone can use it, question it, improve it, and pass it on.</p><div className="actions center"><Link className="button button-light" href="/ideas/">Explore the Ideas</Link><Link className="text-link light" href="/connect/">Connect →</Link></div></div></section>
    </main>
    <Footer />
  </>;
}
