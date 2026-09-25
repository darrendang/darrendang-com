import { BookExcerptPage } from "@/components/BookExcerptPage";

export const metadata = {
  title: "What Did Reality Actually Say? — D.O.T.S.",
  description: "Read a selected passage from D.O.T.S. about evidence, failed tests, boundaries, and building trustworthy connections.",
};

export default function WhatDidRealityActuallySayPage() {
  return (
    <BookExcerptPage
      eyebrow="Inside Book 3 · Later"
      title="What Did Reality Actually Say?"
      dek="A selected passage from Chapter 15 of D.O.T.S."
      ending="A useful connection has to survive contact with evidence. CREATE is where possibility stops being protected by the story we want and starts answering to reality."
      bookHref="/books/dots/"
      bookLabel="D.O.T.S."
      secondaryHref="/dots/"
      secondaryLabel="Explore D.O.T.S. + CREATE →"
    >
      <p>A test can still become theater.</p>
      <p>That happens when we run the experiment but refuse to let the result change the claim.</p>
      <p>Evaluate asks:</p>
      <p>What does the evidence actually say?</p>
      <p>The Form Recognizer pilot did not tell us that document recognition was bad technology.</p>
      <p>It told us something narrower and more useful: the current combination of technology, documents, configuration, process, and use case did not meet the threshold we needed at that moment.</p>
      <p>That distinction matters.</p>
      <p>Evidence should change the claim, not merely decorate it.</p>
      <p>The same discipline applies beyond technology.</p>
      <p>A new process may improve speed but damage trust.</p>
      <p>A training program may receive high satisfaction scores without changing behavior.</p>
      <p>A model may perform well on average while failing badly for an important subgroup.</p>
      <p>A policy may achieve its stated metric and create an unintended burden somewhere the metric does not see.</p>
      <p>Evaluate therefore needs more than one number.</p>
      <p>Ask what was expected.</p>
      <p>Ask what actually happened.</p>
      <p>Ask what surprised you.</p>
      <p>Ask what worsened while the preferred metric improved.</p>
      <p>Ask who experienced the outcome differently.</p>
      <p>Ask what evidence is missing.</p>
      <p>Ask whether the test examined the idea itself or only one particular implementation of it.</p>
      <p>When evidence arrives, I find four levels useful:</p>
      <p><strong>The idea.</strong> Is the transferred principle still valid in this setting?</p>
      <p><strong>The form.</strong> Did we construct the right expression of the idea?</p>
      <p><strong>The conditions.</strong> Did skill, timing, ownership, data, workflow, incentives, or trust shape the outcome?</p>
      <p><strong>The boundary.</strong> Has reality shown that this should not proceed?</p>
      <p>Those questions prevent every disappointing result from becoming the same kind of failure.</p>
      <p>Sometimes the source principle is wrong for the target.</p>
      <p>Sometimes the principle is sound and the prototype is poor.</p>
      <p>Sometimes the surrounding conditions are not ready.</p>
      <p>Sometimes the result says stop.</p>
      <p>The obligation of Evaluate is to distinguish among them without protecting the story we wanted to tell.</p>
      <p className="excerpt-principle">We are not chasing clever connections. We are building trustworthy ones.</p>
    </BookExcerptPage>
  );
}
