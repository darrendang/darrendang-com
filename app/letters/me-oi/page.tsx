import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";
import styles from "../bo-oi/page.module.css";

export const metadata: Metadata = {
  title: "Mẹ Ơi — Twenty-Two Years Later",
  description:
    "A letter and Vietnamese song from Darren Dang to his mother, Lê Thị Chất, returning in 2026 to the memories and lessons he first tried to name after her death in 2004.",
  alternates: { canonical: "/letters/me-oi/" },
  openGraph: {
    title: "Mẹ Ơi — Twenty-Two Years Later | Darren Dang",
    description:
      "A son returns to the memories, love, and five words he wrote about his mother in 2004—and asks what became of what she gave him.",
    type: "article",
    url: "/letters/me-oi/",
  },
};

const songSections = [
  {
    title: "Verse 1",
    vi: `Mẹ ơi...
Con nhớ mình năm, sáu tuổi,
mỗi tuần Mẹ dắt đi chích thuốc,
đi châm cứu vì những cơn suyễn.

Ngày ấy con chỉ biết
có Mẹ bên cạnh thì con hết sợ.
Bây giờ con mới hiểu
cả đời Mẹ đã che chở cho chúng con.`,
    en: `Mom...
I remember being five or six,
every week you took me for injections,
for acupuncture because of my asthma.

Back then I only knew
that when you were beside me, I was no longer afraid.
Only now do I understand
that your whole life was spent protecting us.`,
  },
  {
    title: "Pre-Chorus",
    vi: `Nhiều năm sau,
con đứng bên giường bệnh của Mẹ,
lại nhớ người mẹ năm xưa
đã từng dìu con.

Ngày xưa Mẹ dìu con.
Đến cuối đời,
con chỉ ước được dìu Mẹ
thêm một đoạn nữa thôi.`,
    en: `Many years later,
standing beside your hospital bed,
I remembered the mother from years before
who had once guided me.

Long ago, you guided me.
Near the end,
I only wished I could guide you
a little farther.`,
  },
  {
    title: "Chorus",
    vi: `Mẹ ơi...
nếu hôm nay con biết thương con mình,
biết giữ lấy những người con yêu,
là vì ngày xưa
con đã được Mẹ thương.`,
    en: `Mom...
if today I know how to love my own children,
how to hold close the people I love,
it is because long ago
I was loved by you.`,
  },
  {
    title: "Verse 2",
    vi: `Con nhớ ngày cưới ở Saint Thomas.
Sau hơn bốn mươi năm bên nhau,
Bố Mẹ vẫn dìu nhau đi nhảy
đến hai, ba giờ sáng.

Con nhìn hai người và nghĩ:
mai này tình mình được một phần mười như thế
cũng đã là đủ.

Rồi Bố đi trước.
Mẹ ở lại
như người mất một nửa của mình.

Người ta bảo tình phai theo năm tháng.
Con chỉ thấy tình Mẹ dành cho Bố
càng lâu càng sâu.`,
    en: `I remember my wedding in Saint Thomas.
After more than forty years together,
you and Dad still went dancing
until two or three in the morning.

I looked at the two of you and thought:
if one day our love could be even a tenth of that,
it would be enough.

Then Dad went first.
You remained,
as though you had lost half of yourself.

People say love fades with the years.
I only saw your love for Dad
grow deeper with time.`,
  },
  {
    title: "Verse 3",
    vi: `Năm ấy con gom điều Bố Mẹ dạy
vào năm chữ:

Lễ — ở bên nhau.
Nghĩa — không bỏ người mình thương.
Nhân — nhịn mình để cho người khác.
Tín — sống sao để người ta tin.
Chí — ngã vẫn đứng lên.

Năm chữ thôi,
mà con học cả đời vẫn chưa xong.`,
    en: `That year I gathered what you and Dad taught me
into five words:

Lễ — staying beside one another.
Nghĩa — not abandoning those you love.
Nhân — denying yourself so another may have more.
Tín — living so that others can trust you.
Chí — falling and still standing again.

Only five words,
and a lifetime has not been enough to finish learning them.`,
  },
  {
    title: "Bridge",
    vi: `Có một điều
đến bây giờ con vẫn không cầm được nước mắt.

Con ghép tên Bố với tên Mẹ
đặt cho con trai đầu lòng:

Phi Tâm.

Mẹ chưa kịp thấy cháu
chập chững bước đầu tiên,
chưa kịp nghe cháu gọi “bà.”

Nhưng mỗi lần con gọi tên Phi Tâm,
con lại gọi cả Bố và Mẹ.`,
    en: `There is one thing
that still brings me to tears.

I joined Dad's name with yours
and gave them to my firstborn son:

Phi Tâm.

You did not live to see him
take his first unsteady steps,
or hear him call you “Grandma.”

But every time I say the name Phi Tâm,
I am calling both Dad and Mom.`,
  },
  {
    title: "Final Chorus",
    vi: `Mẹ ơi...
con vẫn nhớ bàn tay Mẹ dắt con,
nhớ những ngày Mẹ ở bên con,
nhớ Bố Mẹ dìu nhau trong điệu nhạc.

Con hiểu rồi, Mẹ ạ.

Điều Mẹ để lại
là cách mình thương nhau
khi cuộc đời lấy đi quá nhiều.

Bố Mẹ đã đi,
nhưng anh em vẫn đùm bọc nhau.
Con cháu vẫn biết mình từ đâu mà đến.

Và mỗi lần gọi:
Phi Tâm...

con biết
Bố Mẹ vẫn còn trong gia đình này.`,
    en: `Mom...
I still remember your hand leading me,
the days you stayed beside me,
and you and Dad holding each other in the music.

I understand now, Mom.

What you left us
was a way of loving one another
when life has taken too much away.

You and Dad are gone,
but your children still hold one another up.
Your grandchildren still know where they came from.

And every time I call:
Phi Tâm...

I know
you and Dad are still present in this family.`,
  },
  {
    title: "Coda",
    vi: `Mẹ ơi...
Mẹ yên tâm nhé.

Tụi con lớn rồi.
Tụi con sẽ lo cho nhau.

Con trai út của Mẹ
vẫn đang cố gắng.`,
    en: `Mom...
you can rest easy.

We are grown now.
We will take care of one another.

Your youngest son
is still trying.`,
  },
];

const letter2004Vi = `KỶ NIỆM VỀ MẸ:

Mặc dù Mẹ không còn ở trên thế gian này với chúng con, Mẹ sẽ luôn luôn ở trong lòng của chúng con. Kỷ niệm đầu tiên của con là khi con còn nhỏ ở Việt Nam mới 5, 6 tuổi đã bị bệnh suyễn và mỗi tuần Mẹ phải đưa con đi chích thuốc và châm cứu để trị bệnh. Con còn nhớ Mẹ hay dẫn con đi bán dầu, chữa bệnh, và ăn bún thịt nướng ở chợ Bến Thành sau khi bị chích thuốc. Con nhớ những hình ảnh của người mẹ hiền chăm sóc con, đùm bọc con, và an ủi con trong cơn đau đớn. Khi con thăm Mẹ trong giường bệnh thì con nhớ tới những hình ảnh năm xưa khi Mẹ còn mạnh khỏe và dìu dắt con. Mặc dù Mẹ không có thể dìu dắt tụi con từ hôm nay, nhưng Mẹ vẫn luôn luôn dìu dắt tụi con trong tinh thần và ý chí.

Một kỷ niệm nữa là khi Bố Mẹ dự lễ thành hôn của con và Mai Ly ở đảo Saint Thomas. Bố Mẹ có mặt để chứng kiến và chúc mừng sự kết duyên của hai đứa con nhưng vui hơn hết là tụi con thấy Bố Mẹ cũng 'celebrate' hơn 40 năm hôn nhân của Bố Mẹ. Con còn nhớ rất rõ ràng là Bố Mẹ đêm nào cũng đi nhảy đầm trong phòng trà trên thuyền cho đến 2, 3 giờ sáng. Con còn nhớ con nói với Mai Ly là con rất hân hoan Bố Mẹ rất 'enjoy', và con mong rằng lúc cao niên tình nghĩa tụi con thắm thiết bằng một phần mười của Bố Mẹ là đủ lắm rồi. Chính vì kỷ niệm này chúng con đã ghép tên Bố Mẹ để đặt tên cho đứa con trai đầu lòng là Phi Tâm để luôn nhớ đến Bố Mẹ.

Con rất buồn Mẹ không có cơ hội để nhìn thấy cháu út Phi Tâm chập chững những bước đầu tiên và bập bẹ những tiếng "mẹ", tiếng "bà".

Bài học Mẹ để lại:
Kính thưa Mẹ, Mẹ để lại cho con rất nhiều kỷ niệm và lời dạy dỗ không biết bao nhiêu mà kể. Con tự nghĩ 5 chữ sau đây đã tóm những gì con đã học được từ Bố Mẹ trong 31 năm qua:

Devotion (Lễ)
Nghĩa
Compassion (Nhân)
Integrity (Tín)
Courage (Chí)

Lễ – Tình thương của Mẹ đối với Bố. Lúc nào Mẹ cũng bên cạnh Bố, không rời nhau nửa bước. Thời gian Bố lâm bệnh, Mẹ luôn ở bên cạnh để chăm sóc Bố. Người ta hay nói là tình sẽ phai mờ theo năm tháng nhưng con thấy tình Mẹ đối với Bố càng ngày càng đậm đà. Con biết, sau hơn bốn mươi năm chung sống với nhau, bên nhau nên khi Bố mất, Mẹ rất đau buồn vì Mẹ đã mất đi một nửa người của mình. Con mừng cho Mẹ bây giờ đã được đoàn tụ với Bố ở trên thiên đàng.

Nghĩa – Nghĩa đối với các con, các cháu, các họ hàng, và các bạn bè. Mẹ luôn luôn đối xử rất là công bằng và có tình nghĩa đối với mọi người. Chính cả Mai Ly là con dâu cũng thương và quý mến Mẹ như là mẹ ruột.

Nhân – Suốt đời Mẹ chỉ hy sinh cho gia đình và người khác. Con còn nhớ Bố Mẹ không dám đi ra ngoài ăn để dành tiền gởi về Việt Nam cho Bà Nội và giúp đỡ bà con và Mẹ không bao giờ từ chối khi con cần tiền. Mẹ là người rất "kẹo kéo" cho bản thân nhưng lại rất rộng lượng cho người khác.

Tín – Lúc nào Mẹ cũng tôn trọng chữ tín với các con và với mọi người. Bố Mẹ hay hoạt động và giúp đỡ nhiều người trong cộng đồng cho nên được nhiều người yêu mến và tín nhiệm. Bố Mẹ cũng luôn trung thành với chữ tín và không có gì lưu luyến cho nên lúc Bố Mẹ ra đi thì rất là thảnh thơi. Con cũng sẽ sống theo chữ tín như Bố Mẹ và mong rằng Bố Mẹ cho con sáng suốt và hướng dẫn con sau này.

Chí – Con rất kính phục sự cương quyết và ý chí của Mẹ. Mẹ đã kiên tâm đối phó với ung thư ngực năm năm trước. Mẹ đã chịu đựng sự cô đơn lẻ loi sống không có Bố. Và mặc dù ung thư màng ruột đã lan ra hết mọi cơ thể, Mẹ đã cố gắng chịu đựng để chứng kiến các con được ổn định và thành tài. Mẹ hãy yên chí, tụi con đã khôn lớn, ổn định, và anh em sẽ đùm bọc cho nhau.

Beloved mother and grandmother
You are always there for us in times of need.....
You've instilled in us strength and courage
You've showed us faith and devotion
You've brought us honor and integrity
You've showered us with love and compassion
We are blessed that you've given us life
We are blessed that you're part of our life
We are blessed that you've touched our childrens' lives
We will always hold you dear to our hearts.

Con trai út của Mẹ,
Đặng Phi Bằng`;

const letter2004En = `MEMORIES OF MOTHER:

Although Mother is no longer in this world with us, you will always be in our hearts. My earliest memory was when I was 5 or 6 years old in Vietnam, suffering from asthma, and every week Mother took me for injections and acupuncture treatments. I still remember Mother taking me to sell medicated oil, seek medical care, and eat grilled pork noodle bowl (bún thịt nướng) at Bến Thành Market after my shots. I remember images of a gentle mother caring for me, sheltering me, and comforting me in pain. Visiting Mother in her hospital bed brought back memories of years past when Mother was healthy and guided me. Though Mother can no longer guide us physically, you will always guide us in spirit and resolve.

Another memory is when Mom and Dad attended my and Mai Ly's wedding on St. Thomas Island. Mom and Dad were there to witness and celebrate our union, but happiest of all was seeing Mom and Dad also celebrating over 40 years of marriage. I remember vividly that Mom and Dad went dancing every night at the cruise lounge until 2 or 3 AM. I recall telling Mai Ly how thrilled I was that Mom and Dad enjoyed it so much, hoping that when we grow old, our devotion would be even one-tenth of Mom and Dad's. Because of this memory, we combined Mom and Dad's names to name our firstborn son Phi Tâm to always remember Mom and Dad.

I am very sad Mother did not get the chance to see little Phi Tâm take his first wobbly steps or babble his first words like "mama" or "grandma".

Lessons Left by Mother:
Dear Mother, you left me countless memories and teachings. I believe the following 5 principles summarize what I learned from Mom and Dad over the past 31 years:

Devotion (Lễ)
Nghĩa (Righteousness/Loyalty)
Compassion (Nhân - Benevolence)
Integrity (Tín - Trustworthiness)
Courage (Chí - Willpower/Resolve)

Lễ (Devotion) – Mother's devotion toward Dad. Mother was always by Dad's side, never leaving him. During Dad's illness, Mother was constantly nursing him. People say love fades over time, but Mother's love for Dad grew deeper each day. I know after over forty years together, when Dad passed, Mother suffered immense pain from losing half of herself. I am glad Mother is now reunited with Dad in heaven.

Nghĩa (Loyalty/Duty) – Duty toward children, grandchildren, relatives, and friends. Mother treated everyone with fairness and deep affection. Even Mai Ly, as a daughter-in-law, loved and cherished Mother like her own.

Nhân (Compassion) – All her life, Mother sacrificed for her family and others. I remember Mom and Dad denying themselves dining out to save money to send back to Vietnam for Grandmother and help relatives, yet Mother never refused when I needed money. Mother was very frugal on herself, yet incredibly generous to others.

Tín (Integrity/Trust) – Mother always honored trust with her children and everyone. Mom and Dad were active in helping many community members, earning widespread love and trust. Mom and Dad maintained complete integrity and held no regrets, departing with peaceful minds. I will live by trustworthiness as Mom and Dad did, praying you grant me wisdom and guidance.

Chí (Willpower) – I deeply admire Mother's determination and resolve. Mother bravely fought breast cancer five years ago. She endured loneliness living without Dad. Even when peritoneal cancer spread throughout her body, Mother endured to see her children settled and successful. Rest easy, Mother; we have grown, stabilized, and siblings will protect one another.

Beloved mother and grandmother
You are always there for us in times of need.....
You've instilled in us strength and courage
You've showed us faith and devotion
You've brought us honor and integrity
You've showered us with love and compassion
We are blessed that you've given us life
We are blessed that you're part of our life
We are blessed that you've touched our childrens' lives
We will always hold you dear to our hearts.

Mother's youngest son,
Dang Phi Bang`;

export default function MeOiPage() {
  return (
    <InteriorPage
      eyebrow="Letter / Song · 2004 → 2026"
      title="Mẹ Ơi"
      wide
    >
      <section className={styles.intro}>
        <p className={styles.kicker}>I could not write to Bố without writing to Mẹ.</p>
        <p className="lead">
          In 2004, after my mother died, I tried to summarize what Bố Mẹ had taught me in five words. Twenty-two years later, those words mean something different because I have had to live them.
        </p>
        <p>
          This letter returns to the mother I remember: the hand that steadied a frightened child, the woman I watched love my father across more than forty years, and the grandmother who held the little boy whose name still carries both of them.
        </p>
      </section>

      <blockquote className={styles.dedication}>
        I wrote to Bố because twenty-five years had passed. I write to Mẹ because in my memory, the two of you have never really been separable.
      </blockquote>

      <section className={styles.timeline} aria-label="From the 2004 letter to the 2026 reflection">
        <article>
          <span>2004 · Kỷ Niệm Về Mẹ</span>
          <strong>Memories and five words written at thirty-one.</strong>
        </article>
        <article>
          <span>22 years · A life lived</span>
          <strong>Marriage, children, family, work, loss, and learning.</strong>
        </article>
        <article>
          <span>2026 · Mẹ Ơi</span>
          <strong>A son returning to what his mother gave him.</strong>
        </article>
      </section>

      <figure className={styles.photoPortrait}>
        <Image
          src="/images/me_profile_beautiful.webp"
          width={1536}
          height={2048}
          alt="Portrait of Darren Dang's mother, Lê Thị Chất."
          sizes="(max-width: 700px) 92vw, 610px"
        />
        <figcaption>Mẹ.</figcaption>
      </figure>

      <section className={styles.audioCard} aria-labelledby="me-oi-song">
        <div className="eyebrow bronze">A song for Mẹ</div>
        <h2 id="me-oi-song">Mẹ Ơi</h2>
        <p>
          I wrote this Vietnamese song after returning to the letter I wrote when Mẹ died in 2004. Its memories are small and specific because that is how I still know her: a hand beside me when I was afraid, a marriage I watched grow deeper, five words I am still learning, and a grandson whose name carries both Bố and Mẹ.
        </p>
        <audio controls preload="metadata" aria-label="Listen to Mẹ Ơi">
          <source src="/audio/Song-me-oi.mp3" type="audio/mpeg" />
          Your browser does not support audio playback.
        </audio>
      </section>

      <article className={styles.letter}>
        <div className="eyebrow bronze">Now · 2026</div>
        <h2>Twenty-two years later</h2>

        <p>Mẹ ơi,</p>

        <p>
          A few days ago I wrote to Bố, twenty-five years after he died. I could not finish that letter without feeling that I was also writing toward you. So much of what I remember about one of you eventually leads me back to the other.
        </p>

        <p>
          When you died in 2004, I tried to make sense of what Bố Mẹ had given me by reducing it to five words: <strong>Lễ. Nghĩa. Nhân. Tín. Chí.</strong>
        </p>

        <p>I was thirty-one years old.</p>
        <p>I thought naming the lessons might be enough to hold onto them.</p>
        <p>Twenty-two years later, I know better.</p>

        <p className={styles.question}>The words did not matter because I could define them. They mattered because I had watched you live them.</p>

        <h3>The little boy you carried</h3>

        <p>
          My earliest memory of you is not a speech or a lesson. I was five or six years old in Vietnam, struggling with asthma. Every week you took me for injections and acupuncture. I remember being afraid. I remember being in pain. Mostly, I remember that you were there.
        </p>

        <p>
          In 2004, visiting you in a hospital bed pulled that memory back into focus. The direction had reversed. The mother who had once guided a frightened little boy was now the one I wanted to guide, protect, and keep with us a little longer.
        </p>

        <p>
          I could not do for you what you had done for me.
        </p>

        <p>That is one of the harder truths of becoming the child of aging parents.</p>

        <p>
          Love eventually asks us to stand beside people even when we cannot fix what is happening to them.
        </p>

        <h3>The marriage I watched</h3>

        <p>
          One of my happiest memories of Bố Mẹ came at my wedding in Saint Thomas. You had already been married for more than forty years, yet night after night the two of you still went dancing until two or three in the morning.
        </p>

        <p>
          I remember watching you and telling my wife that if our marriage, when we grew old, carried even one-tenth of the devotion I saw between the two of you, that would be enough.
        </p>

        <p>
          When Bố died, I wrote that you seemed to have lost half of yourself. I was describing grief then. I understand it differently now. A life shared for that long changes the shape of two people. The absence of one changes the shape of the other.
        </p>

        <p>
          People say love fades with time. What I saw was the opposite.
        </p>

        <h3>Five words</h3>

        <p>
          I still return to those five words I wrote in 2004.
        </p>

        <div className={styles.evidenceLines}>
          <p><strong>Lễ</strong> — staying beside the person you love.</p>
          <p><strong>Nghĩa</strong> — knowing that belonging creates responsibility.</p>
          <p><strong>Nhân</strong> — making room for another person even when you have little.</p>
          <p><strong>Tín</strong> — living so that your word and character can be trusted.</p>
          <p><strong>Chí</strong> — continuing when life gives you good reasons to stop.</p>
        </div>

        <p>
          These are not dictionary definitions. They are what those words came to mean to me because I had watched Bố Mẹ.
        </p>

        <p>
          You were frugal with yourself and generous with other people. You cared for family beyond the walls of your own home. You stayed beside Bố through illness. You kept going through your own illness and through the loneliness after he was gone.
        </p>

        <p>I have spent twenty-two more years trying to understand what that requires.</p>

        <h3>The name that carries both of you</h3>

        <p>
          In 2004, I wrote about the name <strong>Phi Tâm</strong>. We had joined something of Bố and something of Mẹ in the name of our firstborn son so that we would always remember the two of you.
        </p>

        <p>
          I also wrote how sad I was that you would not live to see him take his first unsteady steps or hear him begin to call you “bà.”
        </p>

        <figure className={styles.photoInset}>
          <Image
            src="/images/2003-me-and-baby-phi-tam.webp"
            width={1536}
            height={2048}
            alt="Mẹ holding baby Phi Tâm in 2003."
            sizes="(max-width: 850px) 100vw, 720px"
          />
          <figcaption>Mẹ with baby Phi Tâm, 2003.</figcaption>
        </figure>

        <p>
          But there is something I can see now that grief did not let me see then.
        </p>

        <p>You did hold him.</p>
        <p>There is a photograph of you with him in your arms.</p>
        <p>He will not remember that moment. We do.</p>

        <p className={styles.question}>
          And every time I say the name Phi Tâm, I am still saying something of Bố and Mẹ.
        </p>

        <h3>What did I do with what you gave me?</h3>

        <p>
          That is the question I asked Bố this year. I owe you the same question.
        </p>

        <p>
          I built a family of my own. I tried to love my children without making them carry my unfinished expectations. I tried to be useful to people beyond my immediate family. I tried to keep learning. I tried to keep my word. I tried to get back up when life did not go according to plan.
        </p>

        <p>Did I always do those things as well as you did? No.</p>
        <p>Have I always been as patient with the people closest to me as I should be? No.</p>
        <p>Have I finished becoming the person those five words ask me to become? Not even close.</p>

        <p>But I am still trying.</p>

        <p>
          Maybe that is what I most want you to know.
        </p>

        <p className={styles.question}>The lessons did not stop in 2004.</p>
        <p className={styles.question}>Neither did your love.</p>

        <div className={styles.signature}>
          <p>Mẹ ơi,</p>
          <p>Mẹ yên tâm nhé.</p>
          <p>Tụi con lớn rồi.</p>
          <p>Tụi con sẽ lo cho nhau.</p>
          <p>Con trai út của Mẹ vẫn đang cố gắng.</p>
          <p>Phi Bằng<br />Darren</p>
        </div>
      </article>

      <section className={styles.archive}>
        <div className="eyebrow bronze">Then · 2004</div>
        <h2>The letter I wrote when Mẹ died</h2>
        <p className={styles.archiveIntro}>
          <em>Kỷ Niệm Về Mẹ</em> was written for Mẹ&apos;s funeral in 2004. I preserve it here as I wrote it then because the thirty-one-year-old son and the son writing now should both remain visible.
        </p>
        <p className={styles.provenance}>
          Provenance note: the 2004 Vietnamese source is preserved as historical evidence, including its period wording, mixed English usage, and the way I understood the five words at the time. The English version is provided for readers who do not read Vietnamese.
        </p>
        <details>
          <summary>Read the 2004 letter · Vietnamese and English</summary>
          <div className={styles.archiveGrid}>
            <div>
              <h3>Tiếng Việt · Original</h3>
              <p className={styles.sourceLetter}>{letter2004Vi}</p>
            </div>
            <div>
              <h3>English Translation</h3>
              <p className={styles.sourceLetter}>{letter2004En}</p>
            </div>
          </div>
        </details>
      </section>

      <section className={styles.songSection}>
        <div className="eyebrow bronze">The song</div>
        <h2>Mẹ Ơi · Lyrics and English translation</h2>
        <p className={styles.songIntro}>
          The Vietnamese is the song. The English below is a faithful literary translation for readers who do not speak Vietnamese; it is not rewritten to rhyme or fit the melody.
        </p>
        <div className={styles.lyricsGrid}>
          <div className={styles.lyricsPanel} lang="vi">
            <h3>Tiếng Việt</h3>
            {songSections.map((section) => (
              <div className={styles.lyricSection} key={`vi-${section.title}`}>
                <h4>{section.title}</h4>
                <p>{section.vi}</p>
              </div>
            ))}
          </div>
          <div className={styles.lyricsPanel} lang="en">
            <h3>English Translation</h3>
            {songSections.map((section) => (
              <div className={styles.lyricSection} key={`en-${section.title}`}>
                <h4>{section.title}</h4>
                <p>{section.en}</p>
              </div>
            ))}
          </div>
        </div>
        <p className={styles.languageNote}>
          <strong>Lễ · Nghĩa · Nhân · Tín · Chí</strong> remain in Vietnamese because they are family words before they are definitions. The short English phrases convey how the song uses them, not a claim that each term has only one translation.
        </p>
      </section>

      <section className={styles.behind}>
        <div className="eyebrow">What remains</div>
        <h2>The five words were only the beginning.</h2>
        <p>
          The 2004 letter tried to name what Mẹ and Bố had taught me. The 2026 letter asks what those lessons became after another twenty-two years of living. The answer is not a completed scorecard. It is a family still trying to care for one another and a son still trying to understand the people who gave him his starting point.
        </p>
        <div className={styles.links}>
          <Link className="text-link light" href="/letters/bo-oi/">Bố Ơi →</Link>
          <Link className="text-link light" href="/letters/bo-me/">Bố Mẹ →</Link>
          <Link className="text-link light" href="/letters/">More Letters →</Link>
        </div>
      </section>
    </InteriorPage>
  );
}
