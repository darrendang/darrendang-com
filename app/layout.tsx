import type { Metadata } from "next";
import "./globals.css";
import "./trilogy.css";
import "./v2-brand.css";
import "./v2-1.css";
import "./paper-full.css";
import "./book-visuals.css";
import "./book-excerpts.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://darrendang.com"),
  title: { default: "Darren Dang | Ideas for the Path Forward", template: "%s | Darren Dang" },
  description: "Ideas about how wisdom, ideas, and systems cross boundaries—and how what we learn can become better decisions, stronger systems, and something worth passing forward.",
  openGraph: {
    title: "Darren Dang — Ideas for the Path Forward",
    description: "Books, papers, writing, and ideas about learning, judgment, systems, technology, leadership, and what we pass forward.",
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
