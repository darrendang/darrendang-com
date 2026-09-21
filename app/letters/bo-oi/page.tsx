import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Bố Ơi — Twenty-Five Years Later",
  description:
    "A letter and two original songs—Bố Ơi in Vietnamese and I Miss You Differently Now in English—from Darren Dang to his father, Dang Van Phi, twenty-five years after his passing.",
  alternates: { canonical: "/letters/bo-oi/" },
  openGraph: {
    title: "Bố Ơi — Twenty-Five Years Later | Darren Dang",
    description:
      "Twenty-five years after his father's passing, Darren returns to a promise made in 2001 through a letter and two original songs in Vietnamese and English.",
    type: "article",
    url: "/letters/bo-oi/",
  },
};

const songSections = [
  {
    title: "Intro",
    vi: `Bố ơi...\nHai mươi lăm năm rồi.\nCó những điều\nđến hôm nay con mới hiểu.`,
    en: `Dad...\nTwenty-five years have passed.\nThere are things\nI only understand today.`,
  },
  {
    title: "Verse 1",
    vi: `Một đời Bố đi qua chiến tranh,\nqua những năm tù đày, mất hết.\nTừ người chỉ huy giữa núi rừng Pleiku,\nđến cúi mình trên ruộng đất quê hương.\n\nBố chẳng hỏi đời còn cho mình điều gì,\nchỉ nhắn Mẹ:\n“Lo cho các con ăn học nên người.”\nGiữa những ngày chính Bố còn chẳng biết ngày mai,\nBố vẫn nghĩ đến tương lai của chúng con.`,
    en: `Your life carried you through war,\nthrough years of imprisonment, through losing everything.\nFrom a commander among the mountains of Pleiku\nto bending your back over the fields of home.\n\nYou never asked what life still owed you,\nyou only told Mom:\n“Make sure the children are educated and become good people.”\nEven in days when you did not know what tomorrow would bring for you,\nyou were still thinking about our future.`,
  },
  {
    title: "Pre-Chorus",
    vi: `Rồi mười hai ngày lênh đênh trên biển,\nkhi thức ăn hết, khi nước cũng cạn dần,\nphần ít ỏi còn lại dành cho đứa con nhỏ nhất.\n\nNgày ấy con chỉ biết mình khát.\nBây giờ con mới biết...\nBố đã thương con đến mức nào.`,
    en: `Then twelve days drifting at sea,\nwhen the food was gone and the water was disappearing,\nwhat little remained was saved for the youngest child.\n\nBack then I only knew that I was thirsty.\nNow I understand...\nhow deeply you loved me.`,
  },
  {
    title: "Chorus",
    vi: `Bố ơi...\nHai mươi lăm năm rồi,\ncon mới hiểu hết một đời Bố cho đi.\n\nBố không để lại cho con bạc vàng,\nBố để lại từng giọt nước giữa biển khơi,\ntừng trang sách trắng dưới ngọn đèn khuya,\ntừng bàn tay Bố đưa ra cho người khác.\n\nBố ơi...\nnếu hôm nay con biết thương con mình đến thế,\nlà vì ngày xưa\ncon đã được Bố thương.`,
    en: `Dad...\nTwenty-five years have passed,\nand only now do I understand a whole life spent giving.\n\nYou did not leave me silver or gold.\nYou left me every drop of water in the open sea,\nevery white page beneath a late-night lamp,\nevery hand you reached out to someone else.\n\nDad...\nif today I know how to love my own children this deeply,\nit is because, long ago,\nI was loved by you.`,
  },
  {
    title: "Verse 2",
    vi: `Qua đến Mỹ, Bố bắt đầu bằng hai bàn tay trắng,\nca gác dài, đồng lương chẳng được bao nhiêu.\nNgười từng mang quân hàm, từng có một đời danh dự,\ngiờ lặng lẽ đi làm — chẳng một lời than.\n\nBố chắt chiu gửi về cho Mẹ,\ncho các chị, cho bà, cho những người còn ở lại.\nBố Mẹ chẳng dám tiêu cho riêng mình,\nvì ở quê nhà còn người cần được đỡ nâng.\n\nCon của cô, con của chú, bên Nội rồi bên Ngoại,\nđến với Bố — chẳng đứa nào là người ngoài.\nBố thương chúng như thương chính chúng con,\ncó phần nào, Bố chia phần ấy.`,
    en: `When you reached America, you began again with empty hands,\nlong security shifts, a paycheck that barely stretched.\nA man who had once worn a uniform and carried a life of honor\nnow worked quietly, without a word of complaint.\n\nYou saved what you could and sent it home to Mom,\nto my sisters, to Grandma, to those still waiting.\nYou and Mom hardly spent on yourselves,\nbecause back home there was always someone who still needed help.\n\nThe children of your sisters and brothers, on both sides of the family,\ncame to you and none of them was an outsider.\nYou loved them as you loved us.\nWhatever you had, you shared.`,
  },
  {
    title: "Pre-Chorus 2",
    vi: `Rồi đêm xuống khi chúng con đã ngủ,\nBố còn đứng bên chiếc máy phô-tô.\nSách dày mấy trăm trang,\nBố làm... từng trang một.\n\nTừng trang một.\nTừng trang một.\nĐể sáng mai con có sách đến trường.\n\nKhông ai biết\nnhững đêm ấy đã lấy của Bố bao nhiêu.\nChỉ biết mỗi trang Bố sao\nđã mở thêm một cánh cửa cho đời chúng con.`,
    en: `And after we had gone to sleep,\nyou were still standing beside the photocopier.\nTextbooks hundreds of pages thick,\nand you copied them... one page at a time.\n\nOne page at a time.\nOne page at a time.\nSo that in the morning, your children would have books for school.\n\nNo one knows\nhow much those nights took from you.\nWe only know that every page you copied\nopened another door in our lives.`,
  },
  {
    title: "Verse 3",
    vi: `Ai mới sang đây chưa biết đường đi học,\nBố dẫn đi ghi danh, làm giấy tờ, xin trợ cấp.\nAi chưa biết lái xe, Bố ngồi bên chỉ bảo.\nAi chưa biết chọn con đường nào,\nlại đến hỏi Bố.\n\nNăm giờ sáng, có người cần, Bố đã thức.\nNhà mình còn khó, Bố vẫn lo chuyện nhà người.\n\nNgày tiễn Bố, bao người con không biết\nlặng lẽ đến rồi kể chuyện đời mình.\n\nMột người lạ gọi Bố là ân nhân,\nvì Bố đã chỉ đường cho những đứa con của ông.\n\nCon đứng đó mới hiểu:\n\nNgười con vẫn gọi là Bố\nkhông chỉ là Bố của riêng chúng con.`,
    en: `When someone had just arrived and did not know how to begin school,\nyou helped them enroll, fill out forms, and apply for aid.\nIf someone did not know how to drive, you sat beside them and taught them.\nIf someone did not know which path to choose,\nthey came to ask you.\n\nAt five in the morning, if someone needed help, you were awake.\nOur own home was still struggling, yet you worried about someone else's.\n\nAt your funeral, people I had never known\ncame quietly and told me what you had done in their lives.\n\nOne stranger called you his family's benefactor,\nbecause you had shown his children a way forward.\n\nStanding there, I finally understood:\n\nThe man I had always called Dad\nhad never been only our Dad.`,
  },
  {
    title: "Bridge",
    vi: `Bố chẳng dạy chúng con bằng những lời thật lớn.\n\nBố dạy bằng cách Bố sống.\n\nMất hết — vẫn đứng lên.\nBị giam cầm — vẫn không mất lòng nhân.\nCó ít — vẫn chia.\nMệt — vẫn giúp.\nNghèo — vẫn cho con học.\nĐau — vẫn nói mình không sao.\n\nCả đời Bố lo cho người khác.\n\nĐến lúc ra đi...\nBố mới chịu nghỉ.`,
    en: `You did not teach us with grand speeches.\n\nYou taught us by the way you lived.\n\nYou lost everything — and stood again.\nYou were imprisoned — and did not lose your humanity.\nYou had little — and still shared.\nYou were tired — and still helped.\nYou were poor — and still made sure your children learned.\nYou were in pain — and still told us you were fine.\n\nYour entire life, you took care of everyone else.\n\nOnly when you left us\ndid you finally allow yourself to rest.`,
  },
  {
    title: "Final Chorus",
    vi: `Bố ơi...\nHai mươi lăm năm rồi,\nanh em chúng con lại ngồi bên nhau gọi Bố.\n\nNhững đứa trẻ ngày nào Bố từng lo lắng\ngiờ đã có những đứa con của riêng mình.\n\nVà trong cách chúng con yêu thương chúng,\ntrong cách chúng con đùm bọc lấy nhau,\ntrong mỗi lần chúng con giúp một người chẳng phải ruột thịt...\n\nBố vẫn còn đây.\n\nBố chẳng để lại một gia tài lớn,\nmà để lại một gia đình biết thế nào là Nghĩa.\n\nBố chẳng để lại cho chúng con một con đường phải đi,\nmà để lại cách đứng dậy\nkhi đường đời không còn như mình mong muốn.\n\nBố ơi...\nnếu một ngày các con con hỏi\nông cố của chúng là người thế nào...\n\nCon sẽ nói:\n\n“Bố là người đã cho đi\nđến khi chẳng còn gì để cho\nngoài chính cuộc đời mình.”`,
    en: `Dad...\nTwenty-five years have passed,\nand your children sit together again and call for you.\n\nThe children you once worried over\nnow have children of their own.\n\nAnd in the way we love them,\nin the way we hold one another up,\nin every moment we help someone who is not family by blood...\n\nyou are still here.\n\nYou did not leave behind a great fortune.\nYou left behind a family that understands Nghĩa.\n\nYou did not leave us one road we were required to follow.\nYou left us a way to stand back up\nwhen life no longer follows the road we expected.\n\nDad...\nif one day our children ask\nwhat their great-grandfather was like...\n\nI will tell them:\n\n“You were a man who kept giving\nuntil there was nothing left to give\nbut your own life.”`,
  },
  {
    title: "Outro",
    vi: `Hai mươi lăm năm...\n\nChúng con vẫn nhớ.\n\nChúng con vẫn sống\ntheo những điều Bố đã sống.\n\nVà nếu Bố còn nghe được...\n\nBố ơi...\n\nChúng con ổn rồi.\n\nBố yên tâm nhé.\n\nBố.`,
    en: `Twenty-five years...\n\nWe still remember.\n\nWe are still trying to live\nthe things you lived.\n\nAnd if you can still hear us...\n\nDad...\n\nWe are okay now.\n\nYou can rest easy.\n\nDad.`,
  },
];


const englishSongSections = [
  {
    title: "Verse 1",
    text: `When I was young,
I thought love looked like answers,
like knowing what to do
when I was scared.

I never counted all the hours
you came home tired.
I never asked
what it cost you to be there.

I knew there would be books
when school began.
I knew somehow
we would make it through.

I saw what landed in my hands.

I never saw
what it took from you.`,
  },
  {
    title: "Pre-Chorus",
    text: `A child knows what he receives,
not what somebody had to lose.

It took me years
to learn the difference.

It took my own children
to show me you.`,
  },
  {
    title: "Chorus",
    text: `I understand you now,

in the way I hold my children
when the world gets hard,
in the quiet things I do
that no one sees at all.

I spent so many years
becoming my own man,

then looked down
and saw your hands in mine.

Dad,
I miss you differently now.

I understand you now.`,
  },
  {
    title: "Verse 2",
    text: `At your funeral,
strangers came to find me,
people whose names
I had never heard.

They told me how you helped their children,
showed them where to go,
sat beside them,
helped them find a start.

I thought I knew
the man I called my father,
the one who carried us
from one life to the next.

I didn't know
how far your kindness traveled

when nobody was watching,
when nobody kept score.`,
  },
  {
    title: "Pre-Chorus 2",
    text: `And maybe that is why
I didn't understand you then.

You never told us
what your life had cost.

You just kept giving.`,
  },
  {
    title: "Bridge",
    text: `There are questions
I would ask you now

that I was too young
to know to ask.

Did you ever get tired
of carrying everybody?

Did you ever wonder
if it was too much?

Did you ever worry
we would forget
where we came from?

I can't hear your answer.

But maybe
I don't need to.

Your whole life
already answered me.`,
  },
  {
    title: "Final Chorus",
    text: `I understand you now,

not because I know
every burden you carried,

but because I know
what it means to love someone

and keep giving
when nobody sees.

I spent so many years
trying to stand on my own,

only to learn
who taught me how.

Dad,
I miss you differently now.

Not less.

Not more.

Just deeper.

And if somehow
you can still hear me,

I want you to know:

I tried to keep the promise.

I'm still trying.`,
  },
  {
    title: "Coda",
    text: `You can rest easy now, Dad.

Your son is okay.

And finally...

I understand you.`,
  },
];

const letter2001Vi = `Con Nhớ Bố — Đặng Phi Bằng\n\nBố của chúng ta là ai? Bố của chúng ta ra sao? Khi con nhớ tới Bố thì con nhớ tới những điều gì? Bố của chúng ta là một con người nhân từ rộng lượng chỉ coi trọng hai điều: thứ nhất là giúp đỡ gia đình, bà con, họ hàng, bạn bè và mọi người và thứ nhì là sự học hành của con cái.\n\nCon nhớ Bố là người kiên nhẫn biết chịu đựng sự đàn áp của bọn Việt Cộng ở trại tù học tập cải tạo. Con nhớ Bố là người kiên nhẫn từ một đại tá làm nông dân đi hốt phân bò cày ruộng. Nghĩ tới hồi con từng đi hốt phân bò với Bố thì con học được một bài học: bề ngoài không quan trọng - bằng mọi cách ta phải che chở cho gia đình và con cái. Ta hốt phân bò cũng chẳng sao miễn là ta có thể tạo cơ hội cho con cái. Con cũng từng nhớ đến lúc Bố và anh Long uống nước tiểu của con trên ghe vượt biển để dành những giọt nước quý báu cho con. Chúng con sẽ nhớ và học sự kiên nhẫn và chịu đựng của Bố, vì bí quyết thành công là 99 phần trăm kiên nhẫn và nghị lực.\n\nCon nhớ Bố là người rộng lượng, không những chỉ lo lắng cho con cái, họ hàng, mà luôn cả đồng bào Việt Nam. Con từng nhớ mấy đứa nhỏ ở trại tỵ nạn Palawan mỉa mai con là con của ông chủ tịch trại. Con từng trách Bố tại sao làm chủ tịch trại lo cho người dưng mà không che chở cho con để bị trêu chọc. Sau này con mới biết là Bố đã hy sinh sự hạnh phúc gia đình cho đồng bào tỵ nạn Việt Nam để chiến đấu cho tự do, quyền lợi, và an ninh của trại tỵ nạn Palawan. Con rất là hãnh diện có một người cha vĩ đại như Bố.\n\nQuan trọng hơn hết, con nhớ Bố là người coi trọng học vấn. Bố đã trút hết bao nhiêu tâm huyết để cổ vũ và cố vấn học trình của chúng con. Con nhớ Bố đã từng thức nguyên đêm để photocopy sách học 'textbook' từng trang một cho chúng con. Mỗi quyển sách trung bình là bốn năm trăm trang. Con nhớ lúc ban đầu khi tụi con học Anh văn khó khăn, Bố giải thích từng chữ một cho chúng con. Tâm nguyện của Bố là cho chúng con được học thành tài. Hôm nay chúng con mọi người đều thành công: bác sĩ, dược sĩ, và kỹ sư cũng có. Bố đã từng ngưỡng mộ gia đình Kennedy đã thành công, đào tạo danh tiếng từ hai bàn tay không khi bước qua nước Mỹ. Chúng con nguyện tâm sẽ chỉ bảo và đào tạo những con cháu đời sau theo những lời Bố đã truyền lại. Chúng con sẽ hướng dẫn con cháu biết tôn trọng bề trên, hiểu biết phong tục Việt Nam và chúng con sẽ đề cao học vấn và sự kiên nhẫn như Bố đã dạy chúng con.`;

const letter2001En = `I Remember You, Dad — Dang Phi Bang (Darren Dang)\n\nWho was our Dad? What was our Dad like? When I remember Dad, what do I think of? Our Dad was a compassionate and generous human being who valued two things above all: first, helping family, relatives, kin, friends, and everyone; and second, the education of his children.\n\nI remember Dad as a patient man who endured the oppression of the Viet Cong in the re-education prison camps. I remember Dad's patience in transitioning from a colonel to a farmer scooping cow manure and plowing fields. Thinking back to when I used to pick up cow manure with Dad, I learned a lesson: appearances do not matter—by all means, we must protect our family and children. Even picking up cow manure doesn't matter, as long as we can create opportunities for our children. I also remember when Dad and Long drank my urine on the boat during our escape so they could save those precious drops of water for me. We will remember and learn from Dad's patience and endurance, because the secret to success is 99 percent patience and determination.\n\nI remember Dad as a generous person, caring not only for his children and relatives, but also for his fellow Vietnamese compatriots. I remember kids at the Palawan refugee camp mocking me for being the son of the camp president. I used to blame Dad for being the camp president and caring for strangers instead of protecting me from being teased. Only later did I realize that Dad had sacrificed his family's personal comfort for the Vietnamese refugees, fighting for freedom, rights, and security in the Palawan refugee camp. I am so proud to have a great father like Dad.\n\nMost importantly of all, I remember Dad as someone who deeply valued education. Dad poured all his heart into encouraging and guiding our academic journeys. I remember Dad staying up all night to photocopy textbooks page by page for us. Each book averaged four to five hundred pages. I remember when we struggled with English in the beginning, Dad explained every single word to us. Dad's ultimate wish was for us to succeed academically. Today, all of us are successful: we have doctors, pharmacists, and engineers among us. Dad used to admire the Kennedy family for achieving success and building a famous legacy from empty hands upon coming to America. We vow to guide and educate future generations according to the words Dad passed down to us. We will teach our children to respect elders, understand Vietnamese customs, and promote education and patience just as Dad taught us.`;

export default function BoOiPage() {
  return (
    <InteriorPage
      eyebrow="Letter / Song · Twenty-Five Years After September 14, 2001"
      title="Bố Ơi"
      wide
    >
      <section className={styles.intro}>
        <p className={styles.kicker}>A letter to my father, twenty-five years later.</p>
        <p className="lead">
          In 2001, I wrote to my father in grief. Twenty-five years later, I owe him something different: an accounting.
        </p>
        <p>
          I made a promise after he died—to remember what he taught us, to care for family, to value education, to help others, and to pass those things forward. This is my attempt to answer a question I could not have answered then: <em>What did I do with what Bố gave me?</em>
        </p>
      </section>

      <blockquote className={styles.dedication}>
        I made you a promise when you died. Twenty-five years later, I want to tell you what I did with it.
      </blockquote>

      <section className={styles.timeline} aria-label="From the 2001 letter to the 2026 reflection">
        <article>
          <span>2001 · Con Nhớ Bố</span>
          <strong>A promise written in grief.</strong>
        </article>
        <article>
          <span>25 years · A life lived</span>
          <strong>Family, service, learning, mistakes, and choices.</strong>
        </article>
        <article>
          <span>2026 · Bố Ơi</span>
          <strong>An accounting—and a promise still being kept.</strong>
        </article>
      </section>

      <figure className={styles.photoFigure}>
        <Image
          src="/images/bo-first-arrival-to-us.webp"
          width={2284}
          height={2090}
          alt="Đặng Văn Phi with his sons after the family arrived in the United States from the Philippines."
          sizes="(max-width: 900px) 100vw, 980px"
        />
        <figcaption>Bố with his sons after arriving in the United States from the Philippines.</figcaption>
      </figure>

      <section className={styles.songCollection} aria-labelledby="songs-for-bo">
        <div className={styles.songCollectionIntro}>
          <div className="eyebrow bronze">Two original songs for Đặng Văn Phi</div>
          <h2 id="songs-for-bo">Two languages. Two different ways of missing my father.</h2>
          <p>
            <em>Bố Ơi</em> carries the memories in Vietnamese. <em>I Miss You Differently Now</em> is not a translation. It is a second original song, written from the perspective of a son who understands his father differently after becoming a father himself.
          </p>
        </div>

        <article className={styles.audioCard} aria-labelledby="bo-oi-song">
          <div className={styles.songLanguage}>Tiếng Việt · Original Vietnamese Song</div>
          <h2 id="bo-oi-song">Bố Ơi</h2>
          <p>
            Written for the twenty-fifth anniversary of my father&apos;s passing, rooted in the memories my brothers, sisters, and I carried from his life: what he endured, what he gave, and the many people he treated as his own.
          </p>
          <audio controls preload="metadata" aria-label="Listen to Bố Ơi">
            <source src="/audio/Song-bo-oi.mp3" type="audio/mpeg" />
            Your browser does not support audio playback.
          </audio>
        </article>

        <article className={styles.audioCard} aria-labelledby="english-father-song">
          <div className={styles.songLanguage}>English · Original English Song</div>
          <h2 id="english-father-song">I Miss You Differently Now</h2>
          <p>
            This is not an English version of <em>Bố Ơi</em>. It begins somewhere else: with the realization that I thought I knew my father when I lost him, but understood him much more deeply only after I had children of my own.
          </p>
          <audio controls preload="metadata" aria-label="Listen to I Miss You Differently Now">
            <source src="/audio/Song-my-father-english.mp3" type="audio/mpeg" />
            Your browser does not support audio playback.
          </audio>
        </article>
      </section>

      <article className={styles.letter}>
        <div className="eyebrow bronze">Now · 2026</div>
        <h2>Twenty-five years later</h2>

        <p>Bố ơi,</p>

        <p>
          Twenty-five years ago I wrote you a letter called <em>Con Nhớ Bố</em>. I was twenty-eight years old. I knew I had lost my father. I did not yet understand how much of you would continue to live inside the decisions I would make.
        </p>

        <p>
          I began that letter by asking: Who was our Dad? What was he like? What do I remember when I think of him? I answered that you seemed to value two things above all: helping family, relatives, friends, and anyone who needed you; and the education of your children.
        </p>

        <p>
          I wrote about the prison camps. About working the land after a life in uniform. About the boat. About how little water there was. About Palawan and the refugees you tried to protect. And I wrote about the nights you stayed awake beside a photocopier, copying textbooks four or five hundred pages long, one page at a time, because your children needed books.
        </p>

        <p>Then I made you a promise.</p>

        <p>
          I promised that we would guide the generations after us with what you had taught us—respect, education, patience, family, and the responsibility to help others.
        </p>

        <p>At twenty-eight, a promise like that sounds almost simple.</p>
        <p>Twenty-five years later, I know better.</p>

        <p className={styles.question}>So this letter is not another eulogy. It is an accounting.</p>
        <p className={styles.question}>Bố, did I keep my promise?</p>

        <p>
          I cannot answer that by giving you my résumé. You never taught me that a title was the measure of a person. You had already lived the opposite lesson. Circumstances could take away a uniform, status, property, comfort, even freedom—and a person could still decide what kind of human being to be.
        </p>

        <p>So I have to measure my life by a different standard.</p>

        <h3>Did I take care of my family?</h3>

        <p>
          Chrystina and I raised three children. I tried to give them what you gave us: not a path they were required to follow, but a place strong enough to begin from. I wanted them to know where they came from without believing that inheritance should decide where they must go. I wanted them educated, capable, grounded, and free to become themselves.
        </p>

        <p>I did not always get that balance right. I am still learning it.</p>

        <h3>Did I honor education?</h3>

        <p>The degrees are the least interesting answer.</p>
        <p>What stays with me is that photocopier.</p>

        <p>
          I can still imagine you there after everyone else had gone to sleep: a textbook hundreds of pages thick, the machine beside you, one page, then another, then another. There was no audience. No one was congratulating you. You were simply making tomorrow a little more possible for your children.
        </p>

        <p>
          I have spent much of my life learning, teaching, mentoring, building, writing, and trying to make institutions work better for people. And only now do I see a line connecting those things more clearly.
        </p>

        <p>Your photocopier and my books are not the same thing.</p>
        <p>But I recognize the impulse.</p>

        <blockquote className={styles.inlineQuote}>
          If you have learned something that may help the people who come after you, do not keep it to yourself. Pass it forward.
        </blockquote>

        <h3>Did I help people outside our immediate family?</h3>

        <p>This is the question I probably inherited from your funeral.</p>

        <p>
          I remember the people who came to say goodbye to you. Some were strangers to me. One man told me what you had done for his family. I had known you as my father. Only then did I begin to understand how many other people had experienced you as a guide, an advocate, a teacher, a person who would sit down and help them figure out the next step.
        </p>

        <figure className={styles.photoInset}>
          <Image
            src="/images/bo-chairman-pfac.webp"
            width={2252}
            height={1778}
            alt="Đặng Văn Phi at the Palawan refugee camp beside an organization chart."
            sizes="(max-width: 850px) 100vw, 760px"
          />
          <figcaption>Bố at the Palawan refugee camp, beside the camp organization chart.</figcaption>
        </figure>

        <p>That changed me.</p>

        <p>
          I cannot count my own life in the same way, and I do not want service to become another scoreboard. But I know that much of the work I chose afterward came from that day. I wanted my work to matter beyond me. I wanted what I knew to be useful. I wanted systems and institutions to leave people better than they found them.
        </p>

        <p>I have tried.</p>

        <p>Have I been as generous with my time as you were? I am not sure.</p>
        <p>Have I always carried the same instinctive sense of responsibility for extended family? I am not sure.</p>
        <p>Have I always given the people closest to me the patience I could give a difficult problem at work? I am not sure.</p>

        <p>
          There are parts of the promise I can point to with pride. There are parts I am still growing into.
        </p>

        <p>Maybe that is what I failed to understand at twenty-eight.</p>

        <p className={styles.question}>A promise like this is not something you keep once.</p>
        <p className={styles.question}>You keep it again and again.</p>

        <div className={styles.promiseLines}>
          <p>Every time family needs you.</p>
          <p>Every time someone asks for help and it would be easier to say you are too busy.</p>
          <p>Every time your children need guidance but also need room to choose.</p>
          <p>Every time what you know could make someone else&apos;s path a little easier.</p>
          <p>Every time life strips away the plan you expected and you have to decide who you will be without it.</p>
        </div>

        <p>
          In recent years I found language for some of these ideas. I call it <em>The Way</em>: receive what came before you; learn from it; question it; add what your own life teaches; then pass something useful forward without narrowing the future of the person who receives it.
        </p>

        <p>
          I used to think of that language mostly as something I had discovered across many parts of my life. I now see more clearly that some of its oldest roots were already in front of me when I was a child.
        </p>

        <p>You never called it The Way.</p>
        <p>You just lived your way.</p>

        <p>
          And perhaps the deepest thing I inherited from you was not a set of instructions. It was evidence.
        </p>

        <div className={styles.evidenceLines}>
          <p>Evidence that a person can lose almost everything and still give.</p>
          <p>Evidence that education can change the trajectory of a family.</p>
          <p>Evidence that family can be larger than a household.</p>
          <p>Evidence that dignity is not the same as status.</p>
          <p>Evidence that sacrifice is usually made in ordinary moments when no one is watching.</p>
          <p>Evidence that what we give the next generation matters more than what we accumulate for ourselves.</p>
        </div>

        <p>
          This week, your children will sit together again, twenty-five years after you left us.
        </p>

        <p>We are older now.</p>
        <p>Old enough to understand some things we could not understand while you were alive.</p>

        <p>
          The textbooks feel different to me now. The money you sent home feels different. The long shifts feel different. The people you helped feel different. Even the words <em>Bố ơi</em> feel different.
        </p>

        <p>I wrote you a song for this anniversary.</p>

        <p>
          It is called <em>Bố Ơi</em> because twenty-five years later I am still calling for you.
        </p>

        <p>
          But I am not calling because I need you to come back and solve something for me.
        </p>

        <p>
          I am calling because I finally have an answer I could not give you in 2001.
        </p>

        <p className={styles.question}>Bố, did I keep my promise?</p>

        <p>I think I have tried to.</p>
        <p>Not perfectly.<br />Not completely.<br />And not finished.</p>

        <p>
          I have built a family. I have tried to serve. I have tried to teach. I have tried to turn what I learned into something another person can use. I have tried to give the people after me a stronger starting point without choosing their destination for them.
        </p>

        <p>And I am still trying.</p>
        <p>Maybe that is the answer.</p>

        <p className={styles.question}>Twenty-five years later, I am still your son.</p>
        <p className={styles.question}>And I am still keeping the promise.</p>

        <div className={styles.signature}>
          <p>Con nhớ Bố.</p>
          <p>Bố yên tâm nhé.</p>
          <p>Con vẫn đang cố gắng.</p>
          <p>Con trai út của Bố,<br />Phi Bằng<br />Darren</p>
        </div>
      </article>

      <figure className={styles.photoFigure}>
        <Image
          src="/images/bo-chair-khoa-iv-thu-duc.JPG"
          width={2048}
          height={1366}
          alt="Đặng Văn Phi serving as chair of Khoa IV Thủ Đức."
          sizes="(max-width: 900px) 100vw, 980px"
        />
        <figcaption>Bố as chair of Khoa IV Thủ Đức.</figcaption>
      </figure>

      <section className={styles.archive}>
        <div className="eyebrow bronze">Then · 2001</div>
        <h2>The letter that made the promise</h2>
        <p className={styles.archiveIntro}>
          <em>Con Nhớ Bố</em> was written for my father&apos;s funeral booklet in September 2001. I preserve it here beside the new letter because the original promise matters as evidence—not because every phrase is how I would write it today.
        </p>
        <p className={styles.provenance}>
          Provenance note: the 2001 text is preserved as it was written, including period wording and details later clarified by family records. I have not silently rewritten the primary source to match later memory.
        </p>
        <details>
          <summary>Read the 2001 letter · Vietnamese and English</summary>
          <div className={styles.archiveGrid}>
            <div>
              <h3>Tiếng Việt · Original</h3>
              <p className={styles.sourceLetter}>{letter2001Vi}</p>
            </div>
            <div>
              <h3>English Translation</h3>
              <p className={styles.sourceLetter}>{letter2001En}</p>
            </div>
          </div>
        </details>
      </section>

      <section className={styles.songSection}>
        <div className="eyebrow bronze">The songs</div>
        <h2>Lyrics · Expand when you want to read along</h2>
        <p className={styles.songIntro}>
          Both lyric sets are collapsed by default so the letter remains the center of the page. Open either song when you want to read along.
        </p>

        <details className={styles.lyricsDetails} id="bo-oi-lyrics">
          <summary>
            <span><strong>Bố Ơi</strong> · Vietnamese lyrics + English literary translation</span>
            <span className={styles.detailsHint}>Expand lyrics</span>
          </summary>
          <div className={styles.lyricsGrid}>
            <div className={styles.lyricsPanel} lang="vi">
              <h3>Tiếng Việt · Original</h3>
              {songSections.map((section) => (
                <div className={styles.lyricSection} key={`vi-${section.title}`}>
                  <h4>{section.title}</h4>
                  <p>{section.vi}</p>
                </div>
              ))}
            </div>
            <div className={styles.lyricsPanel} lang="en">
              <h3>English Literary Translation</h3>
              {songSections.map((section) => (
                <div className={styles.lyricSection} key={`en-${section.title}`}>
                  <h4>{section.title}</h4>
                  <p>{section.en}</p>
                </div>
              ))}
            </div>
          </div>
          <p className={styles.languageNote}>
            <strong>Nghĩa</strong> is intentionally left untranslated in the lyric. In my family context, I use it for the sacred duty born of love, sacrifice, and honor—the responsibility we carry because we belong to one another.
          </p>
        </details>

        <details className={styles.lyricsDetails} id="i-miss-you-differently-now-lyrics">
          <summary>
            <span><strong>I Miss You Differently Now</strong> · Original English lyrics</span>
            <span className={styles.detailsHint}>Expand lyrics</span>
          </summary>
          <div className={styles.englishLyricsPanel} lang="en">
            {englishSongSections.map((section) => (
              <div className={styles.lyricSection} key={`english-${section.title}`}>
                <h4>{section.title}</h4>
                <p>{section.text}</p>
              </div>
            ))}
          </div>
        </details>
      </section>

      <section className={styles.behind}>
        <div className="eyebrow">What remains</div>
        <h2>The promise did not end in 2001.</h2>
        <p>
          The 2001 letter asked who my father was. The 2026 letter asks what I did with what he gave me. The two songs approach him from different directions: one through Vietnamese memory, the other through the understanding that came after I became a father myself. Together they remain part of one twenty-five-year arc: receive, live, and pass forward.
        </p>
        <p>
          I do not think honoring Bố means becoming him. It means carrying forward what was worthy in the way he lived, translating it into a different life, and leaving the next generation room to do the same.
        </p>
        <div className={styles.links}>
          <Link className="text-link light" href="/letters/me-oi/">Mẹ Ơi →</Link>
          <Link className="text-link light" href="/letters/bo-me/">Bố Mẹ →</Link>
          <Link className="text-link light" href="/books/for-those-who-come-after-us/">For Those Who Come After Us →</Link>
          <Link className="text-link light" href="/letters/">More Letters →</Link>
        </div>
      </section>
    </InteriorPage>
  );
}
