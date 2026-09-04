import type { Metadata } from "next";
import { ListeningLayer } from "@/components/ListeningLayer";
import "./globals.css";
import "./trilogy.css";
import "./v2-brand.css";
import "./v2-1.css";
import "./map-motif.css";
import "./paper-full.css";
import "./book-visuals.css";
import "./book-excerpts.css";
import "./book2-preview.css";
import "./genome.css";
import "./way-ux.css";
import "./listen.css";
import "./generative-dialogue.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://darrendang.com"),
  title: { default: "Darren Dang | The Way", template: "%s | Darren Dang" },
  description: "The Way is Darren Dang's living philosophy for learning from what came before, questioning it, making it your own, and passing forward a stronger starting point.",
  authors: [{ name: "Darren Dang", url: "https://darrendang.com/about/" }],
  creator: "Darren Dang",
  publisher: "Darren Dang",
  openGraph: {
    title: "Darren Dang — The Way",
    description: "A stronger starting point. The freedom to go farther. Explore The Way, ideas, books, papers, D.O.T.S., and the Dang Genome.",
    type: "website",
    url: "https://darrendang.com",
    siteName: "Darren Dang",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darren Dang — The Way",
    description: "A stronger starting point. The freedom to go farther.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://darrendang.com/#website",
      url: "https://darrendang.com/",
      name: "Darren Dang",
      description: "The public home of The Way, Darren Dang's books, ideas, papers, and related work.",
      publisher: { "@id": "https://darrendang.com/#person" },
    },
    {
      "@type": "Person",
      "@id": "https://darrendang.com/#person",
      name: "Darren Dang",
      url: "https://darrendang.com/",
      mainEntityOfPage: "https://darrendang.com/about/",
      knowsAbout: [
        "The Way",
        "D.O.T.S.",
        "Generative Dialogue",
        "knowledge stewardship",
        "intergenerational learning",
        "leadership",
        "technology and AI",
      ],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
        <ListeningLayer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
