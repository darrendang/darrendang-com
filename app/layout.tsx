import type { Metadata } from "next";
import { Cormorant_Garamond, Newsreader, Source_Sans_3 } from "next/font/google";
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
import "./music-companion.css";
import "./generative-dialogue.css";
import "./nathan-style.css";
import "./site-contrast.css";

const signatureSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-signature",
});

const editorialSerif = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-editorial",
});

const structuralSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-structural",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://darrendang.com"),
  title: { default: "Darren Dang | Books, Ideas & The Way", template: "%s | Darren Dang" },
  description: "Books, Letters, ideas, and a way of thinking about what we inherit, who can teach us, what we create, and what we choose to pass forward.",
  authors: [{ name: "Darren Dang", url: "https://darrendang.com/about/" }],
  creator: "Darren Dang",
  publisher: "Darren Dang",
  openGraph: {
    title: "Darren Dang — Books, Ideas & The Way",
    description: "A stronger starting point. The freedom to go farther. Explore Darren Dang's books, Letters, ideas, D.O.T.S., and The Way.",
    type: "website",
    url: "https://darrendang.com",
    siteName: "Darren Dang",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darren Dang — Books, Ideas & The Way",
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
      description: "The public home of Darren Dang's books, Letters, ideas, papers, and The Way.",
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
        "public-sector technology",
        "systems thinking",
      ],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${signatureSerif.variable} ${editorialSerif.variable} ${structuralSans.variable}`}>
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
