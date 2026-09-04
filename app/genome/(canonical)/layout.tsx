import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/genome/" },
};

export default function CanonicalPageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
