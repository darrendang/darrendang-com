import { BookExcerptPage } from "@/components/BookExcerptPage";

export const metadata = {
  title: "Prologue — When You Need Me",
  description: "Read the full Prologue, When You Need Me, from For Those Who Come After Us — A Life in Lessons by Darren Dang.",
};

export default function ProloguePage() {
  return (
    <BookExcerptPage
      eyebrow="Inside the Book · Beginning"
      title="When You Need Me"
      dek="The full Prologue from For Those Who Come After Us — A Life in Lessons."
      ending="The Prologue opens the door. The chapters that follow trace the people, choices, failures, ideas, and questions that shaped the thinking behind it."
    >
      <p>Someday you may face a decision and wish we could sit down together and talk about it.</p>
      <p className="excerpt-beat">Maybe it will be about work.</p>
      <p className="excerpt-beat">Or family.</p>
      <p className="excerpt-beat">Money.</p>
      <p className="excerpt-beat">Faith.</p>
      <p className="excerpt-beat">A mistake.</p>
      <p className="excerpt-beat">A risk worth taking.</p>
      <p>Or a road you are not sure you should follow.</p>
      <p>You may wonder what I would say.</p>
      <p>Someday I will not be there to answer.</p>
      <p>That is why I wrote this book.</p>
      <p>I cannot know what questions life will ask you. I cannot leave you an answer for every situation.</p>
      <p>What I can leave you is some of the thinking that helped me find my way.</p>
      <p>The stories in these pages come from choices I made, mistakes I paid for, people who taught me, and questions I am still asking.</p>
      <p>Some lessons came from my parents. Some came from work and failure. Some came from Chrystina and our children. And some took decades before I understood what they meant.</p>
      <p>I do not expect you to live my life.</p>
      <p>I do not even expect you to agree with everything in this book.</p>
      <p>I hope you understand why I came to believe what I believe.</p>
      <p className="excerpt-beat">Use what helps.</p>
      <p className="excerpt-beat">Question what does not.</p>
      <p>Improve what you can.</p>
      <p>Life will give you circumstances I never faced and choices I could not have anticipated.</p>
      <p>You will have to decide for yourself.</p>
      <p>That is exactly as it should be.</p>
      <p>But before you can understand why I see the world the way I do, you need to understand what came before me.</p>
      <p>None of us begins with ourselves.</p>
      <p>We begin with what other people carried for us.</p>
      <p>And that is where this story begins.</p>
    </BookExcerptPage>
  );
}
