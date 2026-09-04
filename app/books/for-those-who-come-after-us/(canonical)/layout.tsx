import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/books/for-those-who-come-after-us/" },
};

export default function CanonicalPageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
