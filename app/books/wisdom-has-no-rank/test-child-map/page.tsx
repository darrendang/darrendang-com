import { BookExcerptPage } from "@/components/BookExcerptPage";

export const metadata = {
  title: "The Test Child Gave Us a Map — Wisdom Has No Rank",
  description: "Read a selected passage from Wisdom Has No Rank about experience, parenting, and why a map should never become a script.",
  robots: { index: false, follow: true },
};

export default function TestChildMapPage() {
  return (
    <BookExcerptPage
      eyebrow="Inside Book 2 · Later"
      title="The Test Child Gave Us a Map"
      dek="A selected passage from Chapter 18 of Wisdom Has No Rank."
      ending="This is where Book 2 connects most directly to the larger trilogy: inherit a map, remain teachable enough to revise it, then keep exploring beyond what the map can already show."
      bookHref="/books/wisdom-has-no-rank/"
      bookLabel="Wisdom Has No Rank"
      secondaryHref="/books/dots/"
      secondaryLabel="Continue to D.O.T.S. →"
    >
      <p>I had been thinking about experience as though it gave parents a better formula.</p>
      <p>Madison reminded me that it gave us something else.</p>
      <p className="excerpt-beat">Context.</p>
      <p>When Zachary entered the Naval Academy, almost everything was unfamiliar to us.</p>
      <p>By the time Madison arrived, we knew more about the rhythms, pressures, distances, and tradeoffs of Academy life.</p>
      <p>Knowing more about the environment made that easier. We were more prepared, but Madison&apos;s correction kept me from confusing preparation with certainty.</p>
      <p className="excerpt-principle">Experience is useful only if it makes you better prepared without making you too certain.</p>
      <p>Zachary&apos;s experience gave us landmarks—difficult stretches to expect, things we wished we had done differently, and a brother Madison could call who had already walked some of the same ground.</p>
      <p>But Madison was not Zachary.</p>
      <p>The fact that we had traveled part of the route before did not mean we already knew how she should travel it.</p>
      <p>Experience can quietly harden into assumption.</p>
      <p>A map can show you where someone else has been. It cannot tell you exactly where another person should go.</p>
      <p>That distinction will matter again with Nathan. More experience should make us more helpful, not more certain that we already know his route.</p>
      <p>The better use of experience is not to hand the next person a script.</p>
      <p>It is to recognize hazards earlier, ask better questions, preserve what still matters, and remain ready to revise the map when the person in front of you shows you something new.</p>
      <p className="excerpt-beat">Zachary gave us a rough map.</p>
      <p>Madison was already showing me where it was incomplete.</p>
    </BookExcerptPage>
  );
}
