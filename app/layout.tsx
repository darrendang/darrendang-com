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

export const metadata: Metadata = {
  metadataBase: new URL("https://darrendang.com"),
  title: { default: "Darren Dang | The Way", template: "%s | Darren Dang" },
  description: "The Way → Your Way → The Way Forward. Learn from what came before, make it your own, choose what comes next, and pass forward what life teaches you.",
  openGraph: {
    title: "Darren Dang — The Way",
    description: "A stronger starting point. The freedom to go farther. Explore The Way, the Dang Genome, Your Way, The Way Forward, Letters from Darren, The Path Forward, and Shared Wisdom.",
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
        <ListeningLayer />
      </body>
    </html>
  );
}
