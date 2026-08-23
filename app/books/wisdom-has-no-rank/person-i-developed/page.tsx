import { BookExcerptPage } from "@/components/BookExcerptPage";

export const metadata = {
  title: "The Person I Developed Developed Me — Wisdom Has No Rank",
  description: "Read a selected passage from Wisdom Has No Rank about a relationship in which the direction of learning changed.",
};

export default function PersonIDevelopedPage() {
  return (
    <BookExcerptPage
      eyebrow="Inside Book 2 · Middle"
      title="The Person I Developed Developed Me"
      dek="A selected passage from Chapter 11 of Wisdom Has No Rank."
      ending="Book 2 keeps returning to this reversal: the relationship may begin with one person teaching, but wisdom does not have to keep moving in only one direction."
      bookHref="/books/wisdom-has-no-rank/"
      bookLabel="Wisdom Has No Rank"
      secondaryHref="/ideas/wisdom-has-no-rank/"
      secondaryLabel="Explore the core idea →"
    >
      <p>Then Chris Lombardo came to the Court.</p>
      <p>Chris had reported to me years earlier at the Orange County Department of Education. Back then, the direction was obvious. I was the more senior person in the relationship, and I had helped him grow.</p>
      <p>Years later at the Court, Chris became this employee&apos;s direct supervisor. I told him about the history between her and me.</p>
      <p>Then I watched.</p>
      <p>He was patient with her. He joked with her. He asked for her expertise. He gave her ownership. When she did strong work, he praised it. He asked what she was good at and gave her more responsibility.</p>
      <p>He also had an advantage I did not. He was not carrying the same history with her.</p>
      <p>That may have mattered more than I can know.</p>
      <p>But I also noticed how he treated her.</p>
      <p>I had come to see her through the disappointment and conflict.</p>
      <p>Chris treated her as someone who could still contribute.</p>
      <p>She responded.</p>
      <p>Instead of shutting down, she took on more. She became more forward-looking. She contributed more than I had expected.</p>
      <p>The promotion decision was not the lesson. I may still have made the right selection.</p>
      <p>The mistake was allowing one difficult experience to become a forecast of what she would do next.</p>
      <p>Chris showed me that my history with a person was not the same thing as that person&apos;s ceiling.</p>
      <p>That changed how I saw Chris too.</p>
      <p>In some situations, he was simply better with people than I was.</p>
      <p className="excerpt-principle">I had once been the person developing him. Now I was learning from him.</p>
    </BookExcerptPage>
  );
}
