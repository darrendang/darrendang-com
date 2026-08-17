import type { Metadata } from "next";
import "./globals.css";
import "./book-visuals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://darrendang.com"),
  title: { default: "Darren Dang | Ideas for the Path Forward", template: "%s | Darren Dang" },
  description: "Ideas about how we learn, decide, lead, build, adapt, and pass something better forward.",
  openGraph: {
    title: "Darren Dang — Ideas for the Path Forward",
    description: "Ideas about how we learn, decide, lead, build, adapt, and pass something better forward.",
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
