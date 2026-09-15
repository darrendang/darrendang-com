import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

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

export default function LivingLegacyPage() {
  return (
    <InteriorPage eyebrow="Legacy & Stewardship" title="A Living Legacy of Wisdom." wide>
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

      <section className="development-question">
        <div className="eyebrow bronze">Preserve context, not merely history</div>
        <h2>Names and dates tell us that someone existed. Context helps us understand how they lived.</h2>
        <p className="lead">Stories, relationships, decisions, motivations, rituals, recipes, failures, and ordinary moments carry forms of meaning that a timeline alone cannot preserve.</p>
        <p>The purpose is not to record everything. It is to preserve enough context that someone who comes later can understand not only what happened, but something of why it mattered, what choices were available, and how a life was actually lived.</p>
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
