import Link from "next/link";
import { breadcrumbsFor, siteUrl } from "@/lib/seo";

// These pages already carry a governed BreadcrumbList alongside their work schema.
const existingSchemas = new Set([
  "/books/for-those-who-come-after-us/", "/ideas/generative-dialogue/",
  "/ideas/wisdom-has-no-rank/", "/ideas/living-legacy/",
]);

export function Breadcrumbs({ path, title, tone = "dark" }: { path: string; title: string; tone?: "dark" | "paper" }) {
  const items = breadcrumbsFor(path, title);
  return <>
    <nav className={`breadcrumbs breadcrumbs-${tone}`} aria-label="Breadcrumb">
      <ol>{items.map((item, index) => <li key={item.path}>
        {index === items.length - 1 ? <span aria-current="page">{item.name}</span> : <Link href={item.path}>{item.name}</Link>}
      </li>)}</ol>
    </nav>
    {!existingSchemas.has(path) && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BreadcrumbList", "@id": `${siteUrl}${path}#breadcrumbs`,
      itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, item: `${siteUrl}${item.path}` })),
    }).replace(/</g, "\\u003c") }} />}
  </>;
}
