import type { Metadata } from "next";
import { ideas } from "@/content/seed";

const indexableIdeaSlugs = new Set([
  "generative-dialogue",
  "living-legacy",
  "wisdom-has-no-rank",
]);

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const idea = ideas.find((item) => item.slug === slug);
  if (!idea) return {};

  const canonical = `/ideas/${idea.slug}/`;
  const isIndexable = indexableIdeaSlugs.has(idea.slug);

  return {
    title: idea.title.replace("™", ""),
    description: idea.summary,
    alternates: { canonical },
    robots: isIndexable ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: {
      title: `${idea.title} | Darren Dang`,
      description: idea.summary,
      type: "article",
      url: canonical,
    },
  };
}

export default async function IdeaLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}>) {
  const { slug } = await params;
  const idea = ideas.find((item) => item.slug === slug);

  const structuredData = idea ? {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DefinedTerm",
        "@id": `https://darrendang.com/ideas/${idea.slug}/#idea`,
        name: idea.title.replace("™", ""),
        description: idea.summary,
        url: `https://darrendang.com/ideas/${idea.slug}/`,
        inDefinedTermSet: {
          "@type": "DefinedTermSet",
          name: "Ideas by Darren Dang",
          url: "https://darrendang.com/ideas/",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://darrendang.com/" },
          { "@type": "ListItem", position: 2, name: "Ideas", item: "https://darrendang.com/ideas/" },
          { "@type": "ListItem", position: 3, name: idea.title.replace("™", ""), item: `https://darrendang.com/ideas/${idea.slug}/` },
        ],
      },
    ],
  } : null;

  return <>
    {children}
    {structuredData && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />}
  </>;
}
