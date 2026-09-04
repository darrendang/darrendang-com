import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/dots/" },
};

export default function CanonicalPageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
