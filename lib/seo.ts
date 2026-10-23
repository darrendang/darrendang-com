import type { Metadata } from "next";

export const siteUrl = "https://darrendang.com";
export const authorId = `${siteUrl}/#person`;
export const authorProfiles = [
  "https://www.ocers.org/post/darren-dang",
  "https://www.linkedin.com/in/darren-dang-2ba3b6/",
];

const defaultImage = {
  url: "/images/site-social-preview.png", width: 1200, height: 630,
  alt: "Darren Dang — Books, Letters and ideas. A stronger starting point. The freedom to go farther.",
};

function imageForPath(path: string) {
  const books = [
    ["/books/for-those-who-come-after-us/", "/images/book1-social-preview.png", "For Those Who Come After Us"],
    ["/books/wisdom-has-no-rank/", "/images/wisdom-has-no-rank-cover.webp", "Wisdom Has No Rank"],
    ["/books/dots/", "/images/dots-cover.webp", "D.O.T.S."],
    ["/books/the-making-of-the-way/", "/images/the-making-of-the-way-display.webp", "The Making of The Way"],
    ["/the-way-forward/", "/images/the-way-forward-display.webp", "The Way Forward"],
  ];
  const book = books.find(([prefix]) => path.startsWith(prefix));
  return book ? { url: book[1], alt: `${book[2]} by Darren Dang — approved cover artwork.` } : defaultImage;
}

/** Keep source metadata accurate in both exported HTML and client navigation. */
export function pageMetadata<T extends Metadata>(path: string, metadata: T): T & Metadata {
  const title = metadata.title ?? "Darren Dang | Books, Ideas & The Way";
  const description = metadata.description ?? "Books, Letters, ideas, and a way of thinking about what we inherit, who can teach us, what we create, and what we choose to pass forward.";
  const openGraph = metadata.openGraph ?? {};
  const images = openGraph.images ?? [imageForPath(path)];
  return {
    ...metadata,
    alternates: path === "/" ? metadata.alternates : { ...metadata.alternates, canonical: path },
    openGraph: {
      type: "website", siteName: "Darren Dang", locale: "en_US",
      title, description, ...openGraph, url: path, images,
    },
    twitter: {
      card: "summary_large_image", title: openGraph.title ?? title,
      description: openGraph.description ?? description, images,
      ...metadata.twitter,
    },
  } as T & Metadata;
}

export const breadcrumbParents: Record<string, { name: string; path: string }> = {
  books: { name: "Books", path: "/books/" },
  letters: { name: "Letters", path: "/letters/" },
  papers: { name: "Papers & Talks", path: "/papers/" },
  ideas: { name: "Ideas", path: "/ideas/" },
  "the-way": { name: "The Way", path: "/the-way/" },
  "the-way-forward": { name: "The Way Forward", path: "/the-way-forward/" },
  "for-those-who-come-after-us": { name: "For Those Who Come After Us", path: "/books/for-those-who-come-after-us/" },
  "wisdom-has-no-rank": { name: "Wisdom Has No Rank", path: "/books/wisdom-has-no-rank/" },
  dots: { name: "D.O.T.S.", path: "/books/dots/" },
  "the-making-of-the-way": { name: "The Making of The Way", path: "/books/the-making-of-the-way/" },
};

export function breadcrumbsFor(path: string, title: string) {
  const items = [{ name: "Home", path: "/" }];
  if (path.startsWith("/the-way-forward/")) items.push(breadcrumbParents.books);
  const segments = path.split("/").filter(Boolean);
  for (const segment of segments.slice(0, -1)) {
    const parent = breadcrumbParents[segment];
    if (parent) items.push(parent);
  }
  items.push({ name: title, path });
  return items;
}
