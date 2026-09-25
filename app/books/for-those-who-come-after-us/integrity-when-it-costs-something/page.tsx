import { BookExcerptPage } from "@/components/BookExcerptPage";

export const metadata = {
  title: "Chapter 18 — Integrity When It Costs Something",
  description: "Read the complete Chapter 18, Integrity When It Costs Something, from For Those Who Come After Us — A Life in Lessons by Darren Dang.",
};

export default function IntegrityWhenItCostsSomethingPage() {
  return (
    <BookExcerptPage
      eyebrow="Inside the Book · Middle"
      title="Integrity When It Costs Something"
      dek="The complete Chapter 18 from For Those Who Come After Us — A Life in Lessons."
      ending="The lesson is inherited, but the choice has to become the next person's own. That is where values stop being instructions and become character."
      bookHref="/books/for-those-who-come-after-us/"
      bookLabel="For Those Who Come After Us"
      secondaryHref="/books/for-those-who-come-after-us/connect-the-dots/"
      secondaryLabel="See the Book 1 → Book 3 bridge →"
    >
      <p>Nathan found a grading mistake.</p>
      <p>It was in his favor.</p>
      <p>During his sophomore year, he was taking AP Precalculus with Mrs. Silavong. After one quiz, he realized she had given him more points than he had earned.</p>
      <p>He could have said nothing.</p>
      <p>Nathan cares deeply about his grades. In his own account, he wrote that he was right on the border of an A-.</p>
      <p>Every point mattered.</p>
      <p>Nathan told Mrs. Silavong anyway.</p>
      <p>He knew his quiz score would go down. She corrected it and praised him for being honest.</p>
      <p>Later, Nathan explained his decision simply: if he kept points he had not earned, the grade would not really be his.</p>
      <p>As parents, we spend years talking about honesty and character. Eventually, though, we are no longer standing beside our children when the decision comes.</p>
      <p>The choice is theirs.</p>
      <p>I am proud of the grade Nathan earned. I am prouder that he was willing to risk it.</p>
      <p>Nobody was accusing him of anything. Staying quiet would have benefited him.</p>
      <p>Whatever helped shape his judgment, the choice was his.</p>
      <p className="excerpt-principle">Integrity matters most when integrity costs you something.</p>
    </BookExcerptPage>
  );
}
