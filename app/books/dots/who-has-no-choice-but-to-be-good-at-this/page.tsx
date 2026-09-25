import { BookExcerptPage } from "@/components/BookExcerptPage";

export const metadata = {
  title: "Who Has No Choice But to Be Good at This? — D.O.T.S.",
  description: "Read a selected passage from D.O.T.S. about widening the search beyond peers and finding structural neighbors with hard-earned expertise.",
};

export default function WhoHasNoChoicePage() {
  return (
    <BookExcerptPage
      eyebrow="Inside Book 3 · Middle"
      title="Who Has No Choice But to Be Good at This?"
      dek="A selected passage from Chapter 7 of D.O.T.S."
      ending="Observe is not random browsing. The structure of the problem becomes a search key for finding people and fields that have already paid the price of learning what matters."
      bookHref="/books/dots/"
      bookLabel="D.O.T.S."
      secondaryHref="/dots/"
      secondaryLabel="Explore the D.O.T.S. method →"
    >
      <p>Once the problem has been deconstructed, Observe begins.</p>
      <p>Most people look first at peers.</p>
      <p>If you work in government, you benchmark other governments.</p>
      <p>If you work in technology, you look at other technology organizations.</p>
      <p>If you work in education, you look at other schools.</p>
      <p>That is reasonable.</p>
      <p>It is also incomplete.</p>
      <p>A more interesting question is:</p>
      <p className="excerpt-principle">Who has no choice but to be good at this kind of problem?</p>
      <p>That question has changed where I look.</p>
      <p>When I began applying investment thinking to technology, it was not because the fields looked alike. It was because both had to allocate scarce capacity under uncertainty and revisit commitments as conditions changed.</p>
      <p>The same search logic works elsewhere: adoption can point toward product management; bottlenecks toward operations; resilience toward reliability engineering; feedback toward control systems.</p>
      <p>In higher-stakes domains—medicine, law, public service—the search can still be useful, but the ethical and institutional breakpoints become part of the transfer.</p>
      <p>Observe is not random browsing.</p>
      <p>And the boundary you cross does not have to be a discipline. It may be a profession, a generation, a culture, a role, or the line between work and life. Observe asks you to search beyond whatever boundary is currently limiting what you can see.</p>
      <p>It is directed search.</p>
      <p>The deconstructed problem gives you the search key.</p>
      <p>Then make the search demanding.</p>
      <p>Do not look only for a field that uses similar words. Look for a field that has been punished repeatedly for getting the mechanism wrong. Where does failure create immediate feedback? Where have practitioners had to build discipline because consequences are expensive, visible, or hard to reverse?</p>
      <p>Ask what those practitioners measure. Ask what they monitor after a decision. Ask which assumptions they refuse to leave implicit. Ask what they do when evidence changes. Ask which failure modes have shaped their methods over time.</p>
      <p>The point is not to borrow prestige from another profession. It is to borrow accumulated learning from people who have had to solve the same class of problem under pressure.</p>
      <p>Observe is therefore not a tour of interesting ideas.</p>
      <p>It is a search for structural neighbors with something earned to teach you.</p>
      <p>The strongest outside field is often the field that has been forced, by repeated consequence, to become unusually good at the structure you are facing.</p>
      <p>This changes the way I think about expertise.</p>
      <p>Instead of asking, “Who knows my field?” I can also ask, “Who has spent decades solving my underlying problem under harder constraints than I have?”</p>
      <p>That question expands the search space without abandoning rigor.</p>
    </BookExcerptPage>
  );
}
