import type { Metadata } from "next";
import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";
import { BookPurchase } from "@/components/BookPurchase";

export const metadata: Metadata = {
  title: "Buy the Books",
  description: "Find available languages and formats of Darren Dang’s books. Choose hardcover, paperback, eBook, or audiobook and buy from your preferred seller.",
  alternates: { canonical: "/buy/" },
};

export default function BuyBooks() {
  return (
    <InteriorPage eyebrow="The books · Available editions" title="Find the edition for you." wide>
      <p className="lead purchase-page-lead">Find the books in the language and format that fit you. Available editions are collected here, with a choice of sellers where offered.</p>
      <BookPurchase showBookPicker />
      <div className="purchase-series-note">
        <p className="eyebrow bronze">The journey continues</p>
        <h2>More books. More ways to read.</h2>
        <p>New languages and books will join this page as they are released. For a look at the full series and what comes next, explore the books.</p>
        <Link className="text-link" href="/books/">Explore the full book journey →</Link>
      </div>
    </InteriorPage>
  );
}
