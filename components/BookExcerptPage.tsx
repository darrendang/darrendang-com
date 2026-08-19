import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";

type BookExcerptPageProps = {
  eyebrow: string;
  title: string;
  dek: string;
  ending: string;
  children: React.ReactNode;
};

export function BookExcerptPage({ eyebrow, title, dek, ending, children }: BookExcerptPageProps) {
  return (
    <InteriorPage eyebrow={eyebrow} title={title}>
      <div className="excerpt-back">
        <Link className="text-link" href="/books/for-those-who-come-after-us/">← For Those Who Come After Us</Link>
      </div>
      <p className="excerpt-dek">{dek}</p>
      <article className="book-excerpt">{children}</article>
      <section className="excerpt-cta" aria-label="Continue reading">
        <div className="excerpt-star">✦</div>
        <h2>Continue the journey.</h2>
        <p>{ending}</p>
        <div className="book-detail-actions">
          <Link className="button button-light" href="/books/for-those-who-come-after-us/">Explore the Book</Link>
          <Link className="text-link" href="/ideas/">Explore the Ideas →</Link>
        </div>
      </section>
    </InteriorPage>
  );
}
