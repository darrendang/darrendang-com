import { BookExcerptPage } from "@/components/BookExcerptPage";

export const metadata = {
  title: "The Correction I Almost Left Out — Wisdom Has No Rank",
  description: "Read a selected passage from the Prologue of Wisdom Has No Rank by Darren Dang.",
};

export default function PrologueExcerptPage() {
  return (
    <BookExcerptPage
      eyebrow="Inside Book 2 · Beginning"
      title="The Correction I Almost Left Out"
      dek="A selected passage from the Prologue of Wisdom Has No Rank."
      ending="The book begins with a correction because teachability starts with the possibility that another person can see something we cannot—even about ourselves."
      bookHref="/books/wisdom-has-no-rank/"
      bookLabel="Wisdom Has No Rank"
      secondaryHref="/books/"
      secondaryLabel="Explore the trilogy →"
    >
      <p>I thought I was asking people to review the book.</p>
      <p>One of them ended up reviewing me.</p>
      <p>During my interview with Madison, we returned to Madison&apos;s Rule—the no-electronics dinner rule she had introduced years earlier.</p>
      <p>Book 1 already told that story.</p>
      <p>This time, the important part was what happened when Madison corrected my memory of how well I had followed it.</p>
      <p>Near the end of the interview, I said, “I observe your rule for the most part. I think I was pretty religious about that.”</p>
      <p>Madison laughed.</p>
      <p>“Sure! I think there&apos;s some confirmation bias!”</p>
      <p>That was funny. It was also revealing.</p>
      <p>I genuinely remembered myself as cooperative.</p>
      <p>Madison remembered something different.</p>
      <p>Her memory was not automatically right and mine wrong. Memory is imperfect. Two people can live through the same moment and remember it differently.</p>
      <p>But I had asked for her perspective.</p>
      <p>If I only accepted the parts that made me look good, then I was not really asking for feedback. I was asking for confirmation.</p>
      <p>So I left it in.</p>
      <p className="excerpt-beat">It made me look a little worse.</p>
      <p>I think it made the book better.</p>
    </BookExcerptPage>
  );
}
