import Link from "next/link";
import { notFound } from "next/navigation";
import { InteriorPage } from "@/components/InteriorPage";
import { ideas } from "@/content/seed";

export function generateStaticParams() {
  return ideas.map((idea) => ({ slug: idea.slug }));
}

const wisdomApplications = [
  ["Parenting", "Treat experience as a head start, not a script. A child may reveal terrain the parent never encountered."],
  ["Leadership", "Responsibility may determine who decides. It should not determine who is allowed to contribute insight."],
  ["Mentoring", "A relationship can mature from one-way teaching into reciprocal learning without erasing what came before."],
  ["Institutions", "Healthy systems create channels for useful information to travel upward, sideways, and across boundaries."],
];

const mapStages = [
  ["01", "WHAT CAME BEFORE", "Starting map", "Experience marks routes, hazards, and landmarks."],
  ["02", "WHAT WE ENCOUNTER", "New terrain", "Different people and circumstances reveal what the map missed."],
  ["03", "WHAT WE LEARN FROM OTHERS", "Revised map", "Useful insight can arrive from a direction we did not expect."],
  ["04", "WHAT WE PASS FORWARD", "Better, still unfinished", "The next person receives a stronger starting point—not a script."],
];

const legacyStages = [
  ["01", "PRESERVE", "Keep what matters", "Stories, context, decisions, failures, relationships, and lessons disappear if no one preserves them."],
  ["02", "CONNECT", "Turn experience into wisdom", "A memory becomes more useful when we connect it to patterns, principles, people, and consequences."],
  ["03", "PASS FORWARD", "Make wisdom travel", "What we learn can become a stronger starting point for someone who comes after us."],
  ["04", "KEEP IT ALIVE", "Invite revision", "A living legacy leaves room for the next person to question, improve, and add what we could not see."],
];

const stewardshipPractices = [
  ["Preserve context", "Do not save only the conclusion. Preserve enough of the story that someone later can understand how the lesson was earned."],
  ["Keep attribution", "Useful wisdom often comes through other people. Give credit, preserve lineage, and resist turning shared learning into a single-author story."],
  ["Protect what is private", "Not everything worth preserving belongs in public. Stewardship includes judgment about what should be shared, when, and with whom."],
  ["Leave room to improve", "The purpose is not to freeze one generation's answers. It is to give the next generation better material from which to think for itself."],
];

export default async function IdeaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idea = ideas.find((item) => item.slug === slug);
  if (!idea) notFound();

  if (idea.slug === "living-legacy") {
    return (
      <InteriorPage eyebrow={idea.topic} title={idea.title} wide>
        <section className="idea-canonical-intro">
          <p className="lead">I have come to think of this work less as owning wisdom than stewarding it: preserving what matters, connecting what we learn, and passing it forward in a form someone else can question, use, improve, and carry farther.</p>
          <blockquote className="book-quote">I am a steward of wisdom.</blockquote>
        </section>

        <section className="development-question">
          <div className="eyebrow bronze">The purpose</div>
          <h2>Pass down a way of thinking.</h2>
          <p>A legacy can preserve stories, accomplishments, and assets. But the more durable inheritance is the way people learned to see, decide, adapt, create, serve, and make sense of what happened to them.</p>
          <blockquote className="book-quote">Help people preserve, connect, and pass forward wisdom, so those who come after inherit a stronger starting point.</blockquote>
        </section>

        <section className="development-principles">
          <div className="eyebrow bronze">Vision & North Star</div>
          <h2>Preserve wisdom as intentionally as wealth.</h2>
          <div className="principle-grid">
            <article>
              <blockquote>Vision</blockquote>
              <p>A world where wisdom is preserved as intentionally as wealth and passed forward as naturally as love.</p>
            </article>
            <article>
              <blockquote>North Star</blockquote>
              <p>Strengthen the starting point for someone who comes after.</p>
            </article>
          </div>
        </section>

        <section className="development-question">
          <div className="eyebrow bronze">A living legacy</div>
          <h2>Inheritance should stay alive.</h2>
          <p className="lead">A living legacy is not a museum of finished answers. It preserves enough memory to learn from the past while leaving enough freedom for the future to see what the past could not.</p>
          <div className="map-sequence" aria-label="How a living legacy moves wisdom forward">
            {legacyStages.map(([number, label, title, copy]) => (
              <article key={number}>
                <span>{number}</span>
                <small>{label}</small>
                <strong>{title}</strong>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <p className="map-not-script">The goal is continuity without confinement.</p>
        </section>

        <section className="development-themes">
          <div className="eyebrow bronze">Stewardship</div>
          <h2>Stewardship is not ownership.</h2>
          <p className="lead">The most useful wisdom in a life rarely comes from one person. It comes through parents, children, partners, friends, teachers, colleagues, institutions, cultures, successes, failures, and people we did not expect to teach us.</p>
          <div className="theme-grid">
            {stewardshipPractices.map(([title, copy]) => (
              <article key={title}><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </section>

        <section className="development-principles">
          <div className="eyebrow bronze">The guardrail</div>
          <h2>A stronger starting point, not a narrower future.</h2>
          <blockquote className="book-quote">Each generation should inherit a stronger starting point, not a narrower future.</blockquote>
          <p>The purpose of passing wisdom forward is not to hand the next generation a script. It is to give them context, perspective, tested lessons, unanswered questions, and enough room to decide where the map is incomplete.</p>
        </section>

        <section className="development-principles">
          <div className="eyebrow bronze">Related ideas</div>
          <h2>Living legacy connects inheritance, teachability, and creation.</h2>
          <div className="related-idea-links">
            <Link href="/ideas/wisdom-has-no-rank/"><strong>Wisdom Has No Rank.</strong><span>A living legacy has to remain open to wisdom from unexpected directions.</span></Link>
            <Link href="/ideas/make-knowledge-travel/"><strong>Make Knowledge Travel.</strong><span>Preserved wisdom becomes more valuable when another person can use and improve it.</span></Link>
            <Link href="/ideas/have-a-north-star/"><strong>Have a North Star.</strong><span>Direction can remain stable even when the route changes.</span></Link>
            <Link href="/dots/"><strong>D.O.T.S.</strong><span>Collect experience, see patterns, transfer carefully, and create something new.</span></Link>
          </div>
          <p style={{ marginTop: "30px" }}><Link className="text-link" href="/books/">Explore the books →</Link></p>
        </section>
      </InteriorPage>
    );
  }

  if (idea.slug === "wisdom-has-no-rank") {
    return (
      <InteriorPage eyebrow={idea.topic} title={idea.title} wide>
        <section className="idea-canonical-intro">
          <p className="lead">Wisdom can move in any direction. Experience, expertise, responsibility, and rank matter—but none gives any one person a monopoly on insight.</p>
          <blockquote className="book-quote">The people who go before us give us a map. The people who come after us show us where the map is incomplete.</blockquote>
        </section>

        <section className="development-question">
          <div className="eyebrow bronze">The map</div>
          <h2>Experience gives us a starting map, not the finished one.</h2>
          <p>People who travel before us can mark hazards, shortcuts, landmarks, and routes worth remembering. That accumulated experience matters. But people who follow may encounter terrain we never saw, conditions that changed after we passed through, or possibilities our map did not contain.</p>
          <div className="map-sequence" aria-label="How experience becomes a better but unfinished map">
            {mapStages.map(([number, label, title, copy]) => (
              <article key={number}>
                <span>{number}</span>
                <small>{label}</small>
                <strong>{title}</strong>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <p className="map-not-script">A map helps us navigate. It does not tell us exactly where to go.</p>
        </section>

        <section className="development-principles">
          <div className="eyebrow bronze">What the idea means</div>
          <h2>Teachability is the willingness to let new evidence revise the map.</h2>
          <p className="lead">Wisdom has no rank does not erase experience. It keeps experience from becoming a closed system.</p>
          <div className="principle-grid">
            <article>
              <blockquote>What experience gives us</blockquote>
              <p>Pattern recognition, context, consequences remembered, and a larger inventory of what has worked or failed before.</p>
            </article>
            <article>
              <blockquote>What teachability protects</blockquote>
              <p>The ability to notice when another person, a changed circumstance, or new evidence has exposed something our prior experience did not contain.</p>
            </article>
          </div>
        </section>

        <section className="development-principles">
          <div className="eyebrow bronze">What it does not mean</div>
          <h2>Wisdom has no rank does not mean rank has no purpose.</h2>
          <p className="lead">Organizations still need accountability. Parents still carry responsibilities children do not. Expertise still matters. Some decisions properly belong to specific roles.</p>
          <p>The principle is narrower and more demanding: authority should not become a reason to stop listening. A useful idea does not become less useful because it came from someone younger, more junior, or outside the expected hierarchy.</p>
        </section>

        <section className="development-themes">
          <div className="eyebrow bronze">Put it to work</div>
          <h2>Look for where useful insight is being filtered out by role.</h2>
          <div className="theme-grid">
            {wisdomApplications.map(([title, copy]) => (
              <article key={title}><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </section>

        <section className="development-principles">
          <div className="eyebrow bronze">Related ideas</div>
          <h2>The map connects to a larger body of thought.</h2>
          <div className="related-idea-links">
            <Link href="/ideas/have-a-north-star/"><strong>Have a North Star.</strong><span>Direction matters even when the route changes.</span></Link>
            <Link href="/ideas/make-knowledge-travel/"><strong>Make Knowledge Travel.</strong><span>What we learn becomes more valuable when someone else can use and improve it.</span></Link>
            <Link href="/ideas/leadership-is-not-indispensability/"><strong>Leadership Is Not Indispensability.</strong><span>Strong leaders build judgment beyond themselves.</span></Link>
            <Link href="/dots/"><strong>D.O.T.S.</strong><span>When the existing map is not enough, expand where you look.</span></Link>
          </div>
          <p style={{ marginTop: "30px" }}><Link className="text-link" href="/books/wisdom-has-no-rank/">Explore Book 2 →</Link></p>
        </section>
      </InteriorPage>
    );
  }

  return (
    <InteriorPage eyebrow={idea.topic} title={idea.title}>
      <p className="lead">{idea.summary}</p>
      <h2>Put the idea to work</h2>
      <p>This page is the beginning of a durable Idea record. It will grow with a real origin story, clear boundaries, practical applications, related writing, book chapters, talks, and connected ideas.</p>
      <h2>Why this structure matters</h2>
      <p>An Idea is not the same as an article or a quote. It is a reusable intellectual entity that can develop across multiple artifacts over time.</p>
    </InteriorPage>
  );
}