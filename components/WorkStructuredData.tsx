type WorkProps = {
  kind: "Book" | "Article";
  name: string;
  path: string;
  description?: string | null;
  image?: string;
  datePublished?: string;
  dateModified?: string;
};

/** Describe the public work without inventing offers, ratings, or release dates. */
export function WorkStructuredData({ kind, name, path, description, image, datePublished, dateModified }: WorkProps) {
  const url = `https://darrendang.com${path}`;
  const data = {
    "@context": "https://schema.org",
    "@type": kind,
    "@id": `${url}#${kind.toLowerCase()}`,
    name,
    ...(kind === "Article" ? { headline: name } : {}),
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Person", "@id": "https://darrendang.com/#person", name: "Darren Dang", url: "https://darrendang.com/about/" },
    ...(description ? { description } : {}),
    ...(image ? { image: `https://darrendang.com${image}` } : {}),
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    ...(kind === "Article" ? {
      publisher: { "@id": "https://darrendang.com/#person" },
      inLanguage: "en", isAccessibleForFree: true,
    } : {}),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
