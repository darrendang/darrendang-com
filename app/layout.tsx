import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://darrendang.com"),
  title: { default: "Darren Dang | The Dang Genome", template: "%s | Darren Dang" },
  description: "The public home of The Dang Genome—a living body of ideas, stories, lessons, and wisdom preserved, connected, improved, and passed forward so those who come after inherit a stronger starting point.",
  openGraph: {
    title: "Darren Dang — The Dang Genome",
    description: "Ideas, stories, books, writing, talks, and shared wisdom preserved, connected, improved, and passed forward.",
    type: "website",
    url: "https://darrendang.com",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
