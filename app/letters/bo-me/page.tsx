import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";
import styles from "../bo-oi/page.module.css";

export const metadata: Metadata = {
  title: "Bố Mẹ — What You Built Together",
  description:
    "A letter from Darren Dang to both of his parents about the marriage, family, and shared life that shaped what came after them.",
  alternates: { canonical: "/letters/bo-me/" },
  openGraph: {
    title: "Bố Mẹ — What You Built Together | Darren Dang",
    description:
      "Darren writes to his parents together: not only about what each gave him, but about what their marriage built across a lifetime.",
    type: "article",
    url: "/letters/bo-me/",
  },
};

export default function BoMePage() {
  return (
    <InteriorPage eyebrow="Letter · To My Parents" title="Bố Mẹ" wide>
      <section className={styles.intro}>
        <p className={styles.kicker}>I wrote to each of you separately. This letter is to the life between you.</p>
        <p className="lead">
          Bố gave me one set of memories. Mẹ gave me another. But the older I become, the harder it is to understand either of you without seeing the marriage, family, and shared life that held those memories together.
        </p>
        <p>
          Before you were Bố and Mẹ to us, you were two young people choosing each other. Everything we inherited came later.
        </p>
      </section>

      <blockquote className={styles.dedication}>
        Some inheritances belong to one person. Others are created in the space between two people who keep choosing a life together.
      </blockquote>

      <div className={styles.photoPair}>
        <figure>
          <Image
            src="/images/bo_me_classic_bw.webp"
            width={3712}
            height={2763}
            alt="A young Đặng Văn Phi and Lê Thị Chất together."
            sizes="(max-width: 850px) 100vw, 48vw"
          />
          <figcaption>Bố and Mẹ, when they were young.</figcaption>
        </figure>
        <figure>
          <Image
            src="/images/bo_me_cruise.webp"
            width={2048}
            height={1463}
            alt="Đặng Văn Phi and Lê Thị Chất together later in life."
            sizes="(max-width: 850px) 100vw, 48vw"
          />
          <figcaption>Bố and Mẹ, later in life.</figcaption>
        </figure>
      </div>

      <article className={styles.letter}>
        <div className="eyebrow bronze">Now · 2026</div>
        <h2>What you built together</h2>

        <p>Bố, Mẹ,</p>

        <p>
          I have written to each of you separately because each of you gave me different memories.
        </p>

        <p>
          But I cannot write truthfully about either of you for very long before the other one appears.
        </p>

        <p>
          Bố&apos;s story leads me to the sacrifices Mẹ made while he was gone. Mẹ&apos;s story leads me to the devotion she carried for Bố. The lessons I tried to name after each of you died were never really divided as neatly as children sometimes divide their parents.
        </p>

        <p className={styles.question}>
          So this letter is not about what Bố gave me or what Mẹ gave me. It is about what the two of you built together.
        </p>

        <h3>Before you were Bố and Mẹ</h3>

        <p>
          There is an old black-and-white photograph of the two of you when you were young. I look at it differently now.
        </p>

        <p>
          I know the people in that photograph as my parents. But when the picture was taken, much of the life I remember had not happened yet. The children had not lived all the stories we would later tell. The losses had not all arrived. The sacrifices had not yet accumulated into lessons.
        </p>

        <p>
          You were simply two people near the beginning of a life together.
        </p>

        <p>
          I do not want to turn a marriage of more than forty years into a fairy tale. I was your child. I did not see everything. What I did see was a life that repeatedly demanded that the two of you begin again.
        </p>

        <p>
          War. Prison. Separation. Work that did not resemble the life you once expected. Migration. Starting over in another country. Illness. Loss.
        </p>

        <p>And still, somehow, there was a family.</p>

        <h3>What I was old enough to notice</h3>

        <p>
          At my wedding in Saint Thomas, I saw something I had been too young to notice when I was growing up.
        </p>

        <p>
          After more than forty years of marriage, the two of you were still going dancing until two or three in the morning.
        </p>

        <p>
          I remember telling my wife that if our marriage, when we became old, carried even one-tenth of the devotion I saw between Bố Mẹ, that would be enough.
        </p>

        <p>
          That memory stayed with me because it changed the way I saw your marriage. As a child, parents simply exist. Their relationship feels like part of the architecture of the world.
        </p>

        <p>
          As an adult, I began to understand that staying beside another person for decades is not architecture.
        </p>

        <p>It is a choice made many times.</p>

        <h3>The five words were always about both of you</h3>

        <p>
          When Mẹ died in 2004, I tried to summarize what I had learned from <em>Bố Mẹ</em> in five words:
        </p>

        <div className={styles.evidenceLines}>
          <p><strong>Lễ.</strong></p>
          <p><strong>Nghĩa.</strong></p>
          <p><strong>Nhân.</strong></p>
          <p><strong>Tín.</strong></p>
          <p><strong>Chí.</strong></p>
        </div>

        <p>
          I realize now that I was not describing five abstract virtues. I was trying to name patterns I had watched between you and around you.
        </p>

        <p>
          I saw <strong>Lễ</strong> in the way Mẹ stayed beside Bố.
        </p>
        <p>
          I saw <strong>Nghĩa</strong> in the way family extended beyond the people living under one roof.
        </p>
        <p>
          I saw <strong>Nhân</strong> in the willingness to share even when there was not much to share.
        </p>
        <p>
          I saw <strong>Tín</strong> in the trust other people placed in both of you.
        </p>
        <p>
          I saw <strong>Chí</strong> every time life took away the expected path and the family kept moving anyway.
        </p>

        <p>
          I have spent much of my adult life trying to find language for lessons like these.
        </p>

        <p>You had already given me the evidence.</p>

        <h3>Even your names moved forward</h3>

        <p>
          When our first son was born, we joined something of Bố and something of Mẹ in his name: <strong>Phi Tâm</strong>.
        </p>

        <p>
          At the time, it was a way of honoring his grandparents.
        </p>

        <p>
          Today I see something else in it.
        </p>

        <p className={styles.question}>
          A name became a small bridge between generations.
        </p>

        <p>
          Mẹ held him as a baby. Bố did not live to see the life that would unfold afterward. Neither of you could know who your grandchildren would become, what choices they would make, or what the family would look like decades later.
        </p>

        <p>
          That is probably as it should be.
        </p>

        <p>
          The point of inheritance is not to make the next generation repeat the previous one.
        </p>

        <p>
          It is to give them something sturdy enough to begin from and enough freedom to go farther.
        </p>

        <h3>What did you build?</h3>

        <p>
          Not a fortune.
        </p>

        <p>
          Not a perfect family.
        </p>

        <p>
          Not one road that all of us were required to follow.
        </p>

        <p>
          You built a family that knows, however imperfectly, that we belong to one another.
        </p>

        <p>
          A family in which education mattered. Helping mattered. Keeping your word mattered. Getting back up mattered. Looking after the people around you mattered.
        </p>

        <p>
          We have not carried every lesson perfectly.
        </p>

        <p>
          We have interpreted some things differently. We have built different lives. Our children will do the same.
        </p>

        <p>
          I think that is part of the gift too.
        </p>

        <p className={styles.question}>
          What you passed forward was not a script. It was a stronger starting point.
        </p>

        <p>
          I hope the two of you would recognize the family now—not because we became copies of you, but because something of the way you loved, endured, learned, helped, and kept going still moves through us.
        </p>

        <p>
          I wrote to Bố because I wanted to tell him I was still keeping the promise.
        </p>

        <p>
          I wrote to Mẹ because I wanted to tell her the five words were still alive.
        </p>

        <p>
          I write to both of you because now I understand that so much of what I received was created together.
        </p>

        <div className={styles.signature}>
          <p>Bố, Mẹ,</p>
          <p>Yên tâm nhé.</p>
          <p>Chúng con vẫn ở đây.</p>
          <p>Và chúng con vẫn đang cố gắng.</p>
          <p>Con trai út của Bố Mẹ,<br />Phi Bằng<br />Darren</p>
        </div>
      </article>

      <section className={styles.behind}>
        <div className="eyebrow">Two voices · one family story</div>
        <h2>Read the letters to Bố and Mẹ separately.</h2>
        <p>
          The individual letters preserve what each parent gave me. This letter preserves something different: the life they built together and the family that continued after them.
        </p>
        <div className={styles.companionGrid}>
          <div className={styles.companionCard}>
            <span>Letter + Song</span>
            <strong>Bố Ơi</strong>
            <p>A twenty-five-year accounting of a promise made after my father died.</p>
            <Link className="text-link light" href="/letters/bo-oi/">Listen &amp; read →</Link>
          </div>
          <div className={styles.companionCard}>
            <span>Letter + Song</span>
            <strong>Mẹ Ơi</strong>
            <p>A return to the memories and five words I wrote after my mother died in 2004.</p>
            <Link className="text-link light" href="/letters/me-oi/">Listen &amp; read →</Link>
          </div>
        </div>
      </section>
    </InteriorPage>
  );
}
