import type { Metadata } from "next";
import { BookExcerptPage } from "@/components/BookExcerptPage";

export const metadata: Metadata = {
  title: "The Way Was Never the Destination — Prologue Excerpt",
  description: "A selected prologue excerpt from The Way Forward by Darren Dang: a compass, a stronger starting point, and the freedom to choose your direction.",
  alternates: { canonical: "/the-way-forward/prologue/" },
};

export default function PrologueExcerpt() {
  return (
    <BookExcerptPage eyebrow="The Way Forward · Selected prologue excerpt" title="The Way Was Never the Destination"
      dek="Two selected passages from the prologue of The Way Forward, currently in developmental review. The intervening cycle explanation and figure appear on the book page."
      ending="Explore the learning cycle and the questions that connect reflection with your next choice."
      bookHref="/the-way-forward/" bookLabel="The Way Forward" secondaryHref="/letters/the-way-is-not-my-way/" secondaryLabel="Read Letter 001 →">
      <p>{"This book has a different job."}</p>
      <p>{"It is a compass."}</p>
      <p>{"But a compass matters because eventually you have to move."}</p>
      <p>{"It does not tell you where you must go. It does not choose the terrain, remove uncertainty, or walk the road for you. It helps you understand where you are and what directions are available so you can move more deliberately."}</p>
      <p>That is what I hope <em>The Way Forward</em> can do.</p>
      <p>{"Not choose your destination."}</p>
      <p>{"Help you begin from a stronger place."}</p>
      <p className="note" aria-label="Excerpt omission">…</p>
      <p>{"The cycle is not a ladder. Discovery can force you to relearn. Creation can reveal how little you understood. Transmission can teach the transmitter as much as the receiver. A reader may keep your question and discard your answer. A child may combine what you taught them with something you never knew."}</p>
      <p>{"That is not necessarily loss."}</p>
      <p>{"Sometimes it is development."}</p>
    </BookExcerptPage>
  );
}
