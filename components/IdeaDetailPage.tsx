import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

type Item = { title: string; copy: string };
type LinkItem = { title: string; copy: string; href: string; label?: string };

type IdeaDetailPageProps = {
  eyebrow: string;
  title: string;
  thesis: string;
  quote?: string;
  meaningTitle: string;
  meaning: string[];
  principles: Item[];
  boundaries?: Item[];
  applications: Item[];
  connections: LinkItem[];
  primary?: LinkItem;
};

export function IdeaDetailPage({
  eyebrow,
  title,
  thesis,
  quote,
  meaningTitle,
  meaning,
  principles,
  boundaries = [],
  applications,
  connections,
  primary,
}: IdeaDetailPageProps) {
  return (
    <InteriorPage eyebrow={eyebrow} title={title} wide>
      <section className="idea-canonical-intro">
        <p className="lead">{thesis}</p>
        {quote && <blockquote className="book-quote">{quote}</blockquote>}
        {primary && (
          <div className="actions">
            <Link className="button button-dark" href={primary.href}>{primary.label ?? primary.title}</Link>
          </div>
        )}
      </section>

      <section className="development-question">
        <div className="eyebrow bronze">The idea</div>
        <h2>{meaningTitle}</h2>
        {meaning.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </section>

      <section className="development-principles">
        <div className="eyebrow bronze">Core principles</div>
        <h2>What to keep in view.</h2>
        <div className="principle-grid">
          {principles.map((item) => (
            <article key={item.title}><blockquote>{item.title}</blockquote><p>{item.copy}</p></article>
          ))}
        </div>
      </section>

      {boundaries.length > 0 && (
        <section className="development-themes">
          <div className="eyebrow bronze">Boundaries</div>
          <h2>What the idea does—and does not—claim.</h2>
          <div className="theme-grid">
            {boundaries.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.copy}</p></article>)}
          </div>
        </section>
      )}

      <section className="development-themes">
        <div className="eyebrow bronze">Put it to work</div>
        <h2>Where the idea becomes practical.</h2>
        <div className="theme-grid">
          {applications.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.copy}</p></article>)}
        </div>
      </section>

      <section className="development-principles">
        <div className="eyebrow bronze">Go deeper</div>
        <h2>This idea belongs to a larger connected body of work.</h2>
        <div className="related-idea-links">
          {connections.map((item) => (
            <Link href={item.href} key={item.href}>
              <strong>{item.title}</strong>
              <span>{item.copy}</span>
            </Link>
          ))}
        </div>
      </section>
    </InteriorPage>
  );
}
