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
  title: { default: "Darren Dang | The Way", template: "%s | Darren Dang" },
  description: "The public home where people can encounter The Way, explore the Dang Genome, develop Your Way, and contribute to The Way Forward.",
  openGraph: {
    title: "Darren Dang — The Way",
    description: "The Way → Your Way → The Way Forward. Explore ideas, stories, books, Letters from Darren, the Dang Genome, and contributions worth carrying forward.",
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
