import { BookExcerptPage } from "@/components/BookExcerptPage";

export const metadata = {
  title: "Chapter 9 — Connect the Dots",
  description: "Read the complete Chapter 9, Connect the Dots, from For Those Who Come After Us — A Life in Lessons by Darren Dang.",
};

export default function ConnectTheDotsPage() {
  return (
    <BookExcerptPage
      eyebrow="Inside the Book · Middle"
      title="Connect the Dots"
      dek="A complete chapter from For Those Who Come After Us — A Life in Lessons."
      ending="This chapter is one example of a broader pattern in the book: learn widely, look for structure beneath the surface, and use what you know where it can actually help."
    >
      <p>I remember a large group in the room, and nobody was going to budge.</p>
      <p>We were meeting at the Cathedral of Our Lady of the Angels to help shape the Los Angeles Universal Preschool master plan. The room included early-education advocates, political and civic leaders, businesspeople, experts, and others who cared deeply about what we were building.</p>
      <p>Strong beliefs met strong personalities. Everyone had an idea of what the preschool system should look like. Nobody wanted to compromise.</p>
      <p>We were stuck. And we could not afford to stay stuck.</p>
      <p>At the same time, I was taking a marketing class at Anderson and learning conjoint analysis, a technique for understanding how people choose among combinations of product features.</p>
      <p>A light bulb went on.</p>
      <p>What if a preschool system could be modeled the same way?</p>
      <p>Instead of product features, we had system choices: teacher qualifications, full-day or half-day programs, ages served, how quickly to ramp up, location, and other decisions.</p>
      <p>The field was different. The structure of the problem was similar.</p>
      <p>So I borrowed the tool.</p>
      <p>We used conjoint analysis to find patterns underneath people’s preferences. What I remember as many apparent alternatives resolved into three major clusters.</p>
      <p>Then I connected another dot. GIS could show where unmet need was greatest. Financial modeling could show what each system configuration would cost over time.</p>
      <p>When I presented the results back at the Cathedral, the room went silent.</p>
      <p>I asked volunteers from each of the three groups to put forward their preferred configuration, and I modeled all three. Then I asked the larger group to choose a preferred option and a backup.</p>
      <p>People could see their preferences represented. They could see where others clustered. And they could see the financial consequences of the choices in front of us.</p>
      <p>The mathematics did not decide what people should value. It gave us a structure for seeing what we valued, where we agreed, where we differed, and what our choices would cost.</p>
      <p>That was enough to break the gridlock.</p>
      <p>I remember the central system-configuration decision becoming much clearer after that. Once we cracked that nut, the rest of the planning became more manageable.</p>
      <p>The lasting lesson was not conjoint analysis itself.</p>
      <p>Conjoint analysis came from marketing. GIS came from another discipline. Financial modeling came from another toolbox. Preschool planning was another world again.</p>
      <p>But problems do not care where we learned our tools.</p>
      <p>Do not ask what field a tool belongs to. Ask what problem it can solve.</p>
      <p>The more widely you learn, the more dots you collect. The creative part is recognizing when ideas that were taught separately belong together.</p>
      <p>That day, I did not need to have the winning answer. I needed to help the room see the choices clearly enough to find one.</p>
      <p className="excerpt-principle">Collect dots. Connect dots. Create something new.</p>
    </BookExcerptPage>
  );
}
