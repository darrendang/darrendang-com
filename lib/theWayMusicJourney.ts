export type CulturalSong = {
  id: string;
  languageLabel: string;
  localeLabel: string;
  title: string;
  englishTitle: string;
  src: string;
  principle: string;
  sound: string;
  nativeLyrics: string;
  englishLyrics?: string;
};

export type MusicMovement = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  songIds: string[];
};

export const culturalSongs: CulturalSong[] = [
  {
    id: "vietnam",
    languageLabel: "Vietnamese",
    localeLabel: "Vietnam",
    title: "Đi Xa Hơn",
    englishTitle: "Go Farther",
    src: "/audio/Song-Vietnam-Di-Xa-Hon.mp3",
    principle: "Carry your roots into tomorrow.",
    sound: "Modern V-pop fusion · processed đàn bầu · đàn tranh accents · cinematic pop",
    nativeLyrics: `ĐI XA HƠN

[Intro]
Đi xa hơn...
Từ nơi mình đứng hôm nay.
Đi xa hơn...

[Verse 1]
Ta lớn lên từ lời ru của mẹ,
từ bữa cơm chờ đủ mặt mới ăn,
từ chuyện ông bà kể bên hiên nhỏ,
từ những điều không nói vẫn thành thân quen.

Hôm nay phố lên đèn rất khác,
đường mới đi qua những lối ngày xưa.
Không cần sống lại đời người trước
mới nhớ được mình đến từ đâu.

[Pre-Chorus]
Giữ điều còn đúng.
Đổi điều cần thay.
Mang theo cội rễ.
Bước vào ngày mai.

[Chorus]
Đi xa hơn, xa hơn hôm qua.
Quê hương trong tim, ngày mai trong tay.
Đi xa hơn, dù đường có khác.
Giữ điều đáng giữ, đổi điều cần thay.

Đi xa hơn, đi xa hơn.
Từ nơi người trước cho ta đứng vững,
nhìn trời rộng hơn, chọn đường của mình,
rồi cho người sau đi xa hơn mình.

[Post-Chorus]
Đi xa hơn.
Đi xa hơn.
Cội nguồn trong tim.
Ngày mai trong tay.

[Verse 2]
Ta học điều mới từ người rất trẻ,
thấy điều từng tin có lúc phải đổi thay.
Một câu hỏi làm con đường rẽ,
một lần vấp ngã dạy cách đứng dậy.

Việt Nam đâu chỉ nằm trong ký ức,
mà sống trong cách ta bước tới ngày mai.
Giữ hồn xưa trong điều đang sống,
để hôm nay cũng đáng được truyền lại.

[Pre-Chorus]
Giữ điều còn đúng.
Đổi điều cần thay.
Mang theo cội rễ.
Bước vào ngày mai.

[Bridge]
Nếu mai con khác ta, cứ hỏi.
Nếu đời cho con câu trả lời hay hơn, cứ đổi.

Thương nhau đâu phải giữ chân nhau.
Cội nguồn đâu phải sợi dây.

Ta trao nhau nơi để bắt đầu,
không trao nhau một đời phải sống.

[Final Chorus]
Đi xa hơn, xa hơn hôm qua.
Quê hương trong tim, ngày mai trong tay.
Đi xa hơn, dù đường có khác.
Giữ điều đáng giữ, đổi điều cần thay.

Đi xa hơn, đi xa hơn.
Từ nơi người trước cho ta đứng vững,
nhìn trời rộng hơn, chọn đường của mình,
rồi cho người sau đi xa hơn mình.

[Final Post-Chorus]
Đi xa hơn.
Đi xa hơn.

Cội nguồn trong tim.
Ngày mai trong tay.

Đi xa hơn.`,
    englishLyrics: `GO FARTHER

We grew up with our mother's lullabies,
with meals that waited until everyone was at the table,
with stories our grandparents told beside the house,
with things no one said but everyone somehow knew.

Today the city lights look different.
New roads cross places where old ones once ran.
We do not have to relive the lives of those before us
to remember where we came from.

Keep what still holds true.
Change what needs to change.
Carry your roots with you.
Walk into tomorrow.

Go farther, farther than yesterday.
Your homeland in your heart, tomorrow in your hands.
Go farther, even when your road is different.
Keep what is worth keeping. Change what needs to change.

Go farther.

Those before us gave us somewhere solid enough to stand.
From there, see a wider sky.
Choose your own road.
Then give those who come after you the chance
to go farther than you did.

We can learn something new from someone much younger.
Something we once believed may deserve to change.
One question can turn a road.
One fall can teach us how to stand again.

Vietnam does not live only in memory.
It lives in how we carry our roots into tomorrow.

Keep the spirit of what came before alive in what we create now,
so that something from our own time
may someday be worth passing forward too.

If one day you see things differently from me, question them.

If life gives you a better answer, change.

Love is not meant to hold someone back.
Roots were never meant to become a rope.

We give one another somewhere to begin.

We do not give one another a life they are required to live.

Go farther.

Your roots in your heart.
Tomorrow in your hands.

Go farther.`,
  },
  {
    id: "japan",
    languageLabel: "Japanese",
    localeLabel: "Japan",
    title: "その先へ",
    englishTitle: "Beyond Here",
    src: "/audio/Song-Japan-Beyond-Here-Further-Ahead.mp3",
    principle: "Pass the sash, not the course.",
    sound: "Modern J-pop / alt-electro · processed koto · shamisen accents · cinematic synth-pop",
    nativeLyrics: `その先へ

[Intro]
その先へ
まだ見たことのない景色へ
その先へ

[Verse 1]
朝のホーム　流れる人波
古い町を抜けていく風
誰かが守ってきたものと
今日生まれたものが並んでる

受け取った言葉も願いも
そのまま抱えていくためじゃない
ここまでつないでくれたから
次は自分の足で歩ける

[Pre-Chorus]
残すものを選んで
変えることを恐れない
昨日にちゃんと礼をして
明日へ向かう

[Chorus]
その先へ　その先へ
受け継いだ光に今日を足して
同じ道じゃなくていい
自分の歩幅で未来を選ぶ

その先へ　その先へ
襷をつなぐ　それだけじゃない
次の誰かが立つ場所を
今日より少し広くして

その先へ

[Post-Chorus]
その先へ
その先へ

[Verse 2]
祭りの音が街に残って
ネオンの向こうに朝が来る
変わっていくから消えるんじゃない
大事なものは形を変えて続く

年下の声に教えられて
信じたことを直す夜もある
守ることと止まることは違う
気づいたなら　変わればいい

[Pre-Chorus]
知恵に序列はない
答えはひとつじゃない
昨日よりよく見えたなら
そこからまた始めよう

[Bridge]
襷は渡す

でも
走る道まで決めなくていい

ここまでの答えが
明日も答えとは限らない

変えていい
越えていい

そしていつか
また次へ

[Final Chorus]
その先へ　その先へ
受け継いだ光に今日を足して
守るだけじゃなく育てて
まだない答えを未来へ渡す

その先へ　その先へ
違う景色を見たっていい
次の誰かが立つ場所を
今日より少し広くして

自分の道で
その先へ

[Outro]
その先へ。`,
    englishLyrics: `BEYOND HERE

Toward what lies beyond.
Toward a view we have never seen.

Morning platforms fill with people.
Wind moves through streets that have been here much longer.

Things someone worked to preserve
stand beside things being created today.

The words and hopes we inherit
were never meant to be carried unchanged forever.

Someone brought them this far.

Because they did,
we can walk the next part on our own feet.

Choose what deserves to remain.
Do not be afraid to change what needs changing.
Give yesterday its proper respect.
Then turn toward tomorrow.

Go farther.

Add something from today
to the light you inherited.

Your road does not have to be the same.

Choose the future
at your own pace.

Pass the sash—

but passing it forward is not enough.

Leave the person who comes next
a little more room to stand than you had.

Go farther.

Festival music still hangs in the streets
while morning comes beyond the neon.

Change does not mean everything disappears.

What matters can continue
even when its form changes.

Sometimes someone younger teaches us something.

Sometimes a night comes
when something we believed needs to be reconsidered.

Preserving something
is not the same as refusing to move.

When you see more clearly,
change.

Wisdom has no rank.
There is rarely only one answer.
If today lets you see farther than yesterday,
begin again from there.

Pass the sash.

But you do not have to decide
the road the next person must run.

Today's answer
may not remain tomorrow's answer.

Change it.

Go beyond it.

And someday,
pass something forward again.

Go farther.

Add something from today
to the light you inherited.

Do more than preserve it.

Help it grow.

Pass tomorrow an answer
that did not exist before you.

It is all right
if the next person sees a different view.

Leave them
a little more room to stand.

Then take your own road.

Go beyond.`,
  },
  {
    id: "italy",
    languageLabel: "Italian",
    localeLabel: "Italy",
    title: "Da Qui in Poi",
    englishTitle: "From Here On",
    src: "/audio/Song-Italian-Da-Qui-in-Poi.mp3",
    principle: "To preserve something, let it live.",
    sound: "Italian electro-pop / cantautorato · analog synths · subtle mandola color",
    nativeLyrics: `DA QUI IN POI

[Intro]
Da qui…
da qui in poi.

[Verse 1]
Siamo cresciuti tra pietra e futuro,
strade antiche, treni che vanno.
Mille accenti dentro la stessa lingua,
mani che imparano, mani che inventano.

Ci hanno lasciato nomi e domande,
gesti che tornano senza pensarci.
Non serve vivere la loro vita
per sapere bene da dove partiamo.

[Pre-Chorus]
Posso dire grazie
senza restare uguale.
Posso cambiare strada
senza perdere casa.

[Chorus]
Da qui in poi, da qui in poi,
ieri nel cuore, domani nelle mani.
Da qui in poi, da qui in poi,
radici profonde, orizzonti più grandi.

Se quello che sai non basta più,
guardalo ancora, cambialo tu.
E quando toccherà a noi,
lasciamo più spazio a chi verrà.

Da qui in poi.

[Post-Chorus]
Ieri nel cuore.
Domani nelle mani.

Da qui in poi.

[Verse 2]
In bottega prima guardi le mani,
poi provi, sbagli, trovi il tuo modo.
La forma cambia, il gesto continua
se ciò che impari diventa qualcosa di nuovo.

Ogni generazione aggiunge una voce,
senza cancellare quella di prima.
La storia non chiede di essere copiata.
Chiede qualcosa che valga la pena lasciare.

[Pre-Chorus]
Non tutto si salva
tenendolo fermo.
A volte, per custodire,
bisogna farlo vivere.

[Bridge]
Se un giorno mi correggi, va bene.
Vuol dire che hai guardato davvero.

Se trovi una strada migliore, prendila.
Non mi devi somigliare
per portarmi con te.

Tieni ciò che serve.
Lascia ciò che stringe.

Poi aggiungi qualcosa
che io non potevo vedere.

[Final Chorus]
Da qui in poi, da qui in poi,
ieri nel cuore, domani nelle mani.
Da qui in poi, da qui in poi,
radici profonde, orizzonti più grandi.

Non basta custodire ciò che c’è.
Fallo crescere. Portalo oltre te.

E quando toccherà a te,
lascia un inizio più forte a chi verrà.

Da qui in poi.

[Outro]
Da qui si parte.

Da qui in poi.`,
    englishLyrics: `FROM HERE ON

We grew up between stone and the future—
old streets and trains already moving ahead.

A thousand accents inside the same language.

Hands learning from other hands.
Hands learning to invent.

Those before us left names, questions,
and gestures we repeat without even noticing.

We do not have to live their lives
to know where we began.

I can be grateful
without remaining the same.

I can take another road
without losing home.

From here on,
yesterday stays in the heart
and tomorrow rests in our hands.

Deep roots.

Wider horizons.

When what you know is no longer enough,
look again.

Change it yourself.

And when our turn comes,
leave a little more room
for whoever comes next.

From here on.

In a workshop, you begin by watching someone else's hands.

Then you try.

You make mistakes.

Eventually, you find your own way.

The form changes,
but the craft continues
when what you learned becomes something new.

Every generation adds another voice
without having to erase the one before it.

History does not ask to be copied.

It asks us to leave behind
something worth keeping.

Not everything is preserved by holding it still.
Sometimes, to preserve something,
you have to let it live.

If one day you correct me, that's all right.

It means you were paying attention.

If you find a better road, take it.

You do not have to become like me
to carry something of me with you.

Keep what helps.

Let go of what constrains you.

Then add something
I could not have seen.

From here on—

yesterday in the heart,
tomorrow in our hands.

Deep roots.

Wider horizons.

Preserving what exists is not enough.

Help it grow.

Carry it beyond yourself.

And when your turn comes,
leave whoever follows
a stronger place to begin.

This is where we begin.

From here on.`,
  },
  {
    id: "brazil",
    languageLabel: "Brazilian Portuguese",
    localeLabel: "Brazil",
    title: "Nossa Vez",
    englishTitle: "Our Turn",
    src: "/audio/Song-Brazil-Nossa-Vez.mp3",
    principle: "Receive it. Transform it. Pass it on.",
    sound: "Brazilian progressive pop / MPB-electronic · cavaquinho hook · pandeiro pulse",
    nativeLyrics: `NOSSA VEZ

[Intro]
É nossa vez…
Nossa vez.

[Verse 1]
Cresci no barulho de casa cheia,
conselho na mesa, som vindo da rua.
Cada canto conta o Brasil de um jeito,
ninguém vê o todo de uma janela só.

Tem coisa antiga que ainda ilumina.
Tem coisa antiga que já não serve mais.
Respeitar não é repetir o passado.
É saber o que levar e o que deixar pra trás.

[Pre-Chorus]
Se a vida mostra outra resposta,
a gente olha outra vez.
O que veio antes trouxe até aqui.

Agora é nossa vez.

[Chorus]
É nossa vez, nossa vez,
pegar o que veio e levar além.
Mudar sem perder de onde a gente vem,
abrir mais espaço pra quem vem depois.

É nossa vez, nossa vez.
Cada voz acrescenta o que ninguém fez.
Recebe, transforma, passa adiante.

E deixa quem vem
chegar mais longe também.

[Post-Chorus]
Passa adiante.
Leva além.

É nossa vez.

[Verse 2]
O Brasil não cabe numa só batida,
numa só história, numa direção.
De norte a sul, cada voz traz um mundo.
A diferença também faz a canção.

Às vezes quem chega depois vê primeiro.
Às vezes um erro muda a direção.
Crescer não apaga quem veio antes.

Só mostra que a lição continuou.

[Pre-Chorus]
Se a vida mostra outra resposta,
a gente olha outra vez.
O que veio antes trouxe até aqui.

Agora é nossa vez.

[Bridge]
Não faça da herança uma cerca.
Nem da memória uma prisão.

O melhor jeito de honrar o caminho
é deixar nascer outra direção.

Guarda o que ajuda.
Muda o que precisar.

E acrescenta alguma coisa
que só você poderia encontrar.

[Final Chorus]
É nossa vez, nossa vez,
pegar o que veio e levar além.
Mudar sem perder de onde a gente vem,
abrir mais espaço pra quem vem depois.

É nossa vez, nossa vez.
Cada voz acrescenta o que ninguém fez.
Recebe, transforma, passa adiante.

E deixa quem vem
chegar mais longe também.

[Final Post-Chorus]
Passa adiante.
Leva além.

Hoje é nossa vez.

Amanhã será de alguém.

[Outro]
Nossa vez.`,
    englishLyrics: `OUR TURN

I grew up with the sound of a full house,
advice passed around the table,
music coming in from the street.

Every part of Brazil tells the country differently.

No one can see the whole thing
through a single window.

Some things we inherit still give light.

Some no longer serve us.

Respect does not mean repeating the past.

It means knowing what to carry
and what to leave behind.

When life gives us another answer,
we look again.

What came before brought us this far.

Now it is our turn.

Our turn
to take what we received
and carry it farther.

To change
without forgetting where we came from.

To leave more room
for whoever comes next.

Every voice can add something
no one else has added before.

Receive it.
Transform it.
Pass it on.

And give whoever follows
the chance to go farther too.

Brazil cannot fit inside one beat,
one story,
or one direction.

From north to south,
every voice carries another world.

Difference is part of the song.

Sometimes the person who comes later
sees something first.

Sometimes a mistake
changes the direction.

Growing does not erase
the people who came before us.

It means the lesson kept living.

Do not turn inheritance into a fence.

Do not turn memory into a prison.

The best way to honor a road
may be to let another road begin.

Keep what helps.

Change what needs changing.

Then add something
only your life could have discovered.

It is our turn.

Receive it.

Transform it.

Pass it on.

Today is ours.

Tomorrow will belong to someone else.`,
  },
  {
    id: "france",
    languageLabel: "French",
    localeLabel: "France",
    title: "Ce qu’on en fait",
    englishTitle: "What We Make of It",
    src: "/audio/Song-France-CE-QUON-EN-FAIT.mp3",
    principle: "What we inherit is not the final word.",
    sound: "French electro-pop / chanson contemporaine · dry piano · analog synth texture",
    nativeLyrics: `CE QU’ON EN FAIT

[Intro]
Ce qu’on reçoit…
Ce qu’on en fait.

[Verse 1]
On grandit avec des phrases
qu’on n’a jamais choisi d’entendre,
des gestes appris sans y penser,
des histoires qu’on finit par comprendre.

Il y a ce qu’on garde par amour,
ce qu’on garde parce que c’est vrai,
et parfois ce qu’il faut regarder
une dernière fois avant de le laisser.

[Pre-Chorus]
Dire merci
ne veut pas dire oui à tout.

On peut aimer d’où l’on vient
et penser par soi-même jusqu’au bout.

[Chorus]
Ce qu’on reçoit,
c’est à nous d’en faire quelque chose.

Garder ce qui éclaire,
changer ce qui nous enferme.

Ce qu’on reçoit
n’est jamais le dernier mot.

On prend le relais,
on écrit la suite,

et on laisse la porte ouverte
à ceux qui viendront après nous.

Ce qu’on en fait.

[Post-Chorus]
Ce qu’on en fait.
Ce qu’on en fait.

[Verse 2]
Une idée n’est pas plus vraie
parce qu’elle vient de plus loin.
Une voix plus jeune peut parfois voir
ce qu’on avait juste devant les yeux.

On avance aussi quand on corrige,
quand le réel change la question.
Ce n’est pas trahir ce qu’on nous donne.

C’est continuer la conversation.

[Pre-Chorus]
Écouter vraiment.
Regarder encore.

Si l’on comprend mieux aujourd’hui,
on peut choisir autrement demain.

[Bridge]
Ne me ressemble pas
juste pour me faire plaisir.

Si tu trouves mieux,
va voir.

Si je me suis trompé,
dis-le.

Ce que je veux te laisser
n’est pas une réponse à répéter.

C’est assez de lumière
pour trouver la tienne.

[Final Chorus]
Ce qu’on reçoit,
c’est à nous d’en faire quelque chose.

Garder ce qui éclaire,
changer ce qui nous enferme.

Ce qu’on reçoit
n’est jamais le dernier mot.

On prend le relais,
on écrit la suite,

et on laisse un peu plus de liberté
à ceux qui viendront après nous.

[Outro]
Ce qu’on reçoit…

Ce qu’on en fait.`,
    englishLyrics: `WHAT WE MAKE OF IT

We grow up with words
we never chose to hear,

gestures we learned without noticing,

stories we only understand later.

Some things we keep because we love them.

Some because they still prove true.

And sometimes there are things
we need to look at one last time
before letting them go.

Saying thank you
does not mean agreeing with everything.

We can love where we came from
and still think for ourselves.

What we receive
is ours to make something of.

Keep what gives light.

Change what confines us.

What we inherit
is never the final word.

We take our turn.

We write what comes next.

And we leave the door open
for those who follow us.

An idea is not more true
simply because it comes from farther back.

Someone younger may sometimes see
what has been directly in front of us all along.

We also move forward when we correct ourselves,

when reality changes the question.

That is not betraying what we were given.

It is continuing the conversation.

Listen closely.

Look again.

If we understand something better today,
we are allowed to choose differently tomorrow.

Do not become like me
simply to make me proud.

If you find something better,
go see where it leads.

If I was wrong,
tell me.

What I want to leave you
is not an answer you must repeat.

It is enough light
to find your own.

What we inherit
is never the final word.

Take what illuminates.

Change what confines.

Write what comes next.

Then leave those who follow
a little more freedom than we had.

What matters is what we make of it.`,
  },
  {
    id: "korea",
    languageLabel: "Korean",
    localeLabel: "South Korea",
    title: "우리답게",
    englishTitle: "In Our Own Way",
    src: "/audio/Song-Korea-In-Our-Own-Way.mp3",
    principle: "Stay connected. Don’t become identical.",
    sound: "Korean alt-pop / R&B-electronic · processed gayageum · janggu transients",
    nativeLyrics: `우리답게

[Intro]
우리답게
이어 가되, 똑같지는 않게

우리답게

[Verse 1]
어릴 때부터 들은 말들
밥상 위에 오가던 마음
말하지 않아도 알 것 같던
우리라는 작은 세상

누군가 먼저 닦아 놓은 길
그 위에 서서 멀리 본다
고마움은 그대로 따라가는 게 아니라
내 발로 다음을 만드는 것

[Pre-Chorus]
이어진다고 닮을 필요 없어
같은 뿌리도 다르게 자라

어제의 답을 품고 가되
오늘의 질문은 오늘이 해

[Chorus]
우리답게, 우리답게
받은 빛에 오늘을 더해
같이 왔어도 길은 달라도 돼
우리답게, 앞으로 가

틀리면 고치고, 배우면 바꿔
다음 사람에겐 더 많은 길을
서로의 선택을 믿어 주는 것

그게 우리가 이어가는 법

우리답게

[Post-Chorus]
우리답게
우리답게

[Verse 2]
오래된 장단 위에 새 박자를 얹고
익숙한 말로 새로운 내일을 노래해
변한다고 사라지는 건 아냐
살아 있기에 달라지는 거야

나보다 어린 한마디가
오래 믿은 답을 흔들 때
틀렸다면 고치면 돼
더 잘 보인다면 다시 보면 돼

[Pre-Chorus]
지혜에는 서열이 없어
정답도 하나뿐은 아냐

어제보다 더 잘 보인다면
거기서 다시 시작하면 돼

[Bridge]
내가 준 답을
지키지 않아도 돼

내가 못 본 걸
네가 봤다면

거기서 시작해

물려줄 건
따라야 할 정답이 아니라

다시 물을 수 있는 용기

그리고
네가 찾은 것을

또 다음으로

[Final Chorus]
우리답게, 우리답게
받은 빛에 내일을 더해
같이 왔어도 길은 달라도 돼
우리답게, 앞으로 가

틀리면 고치고, 배우면 바꿔
다음 사람에겐 더 많은 길을
서로의 선택을 믿어 주는 것

그게 우리가 이어가는 법

우리답게

[Final Post-Chorus]
이어 가되
똑같지는 않게

함께였기에
각자의 길로

우리답게`,
    englishLyrics: `IN OUR OWN WAY

The words we heard growing up.

The feelings passed around the dinner table.

Things no one had to explain
because somehow we already understood them.

That small world we called ours.

Someone cleared part of the road before us.

Because of that,
we can stand here and see farther.

Gratitude does not mean
walking exactly where they walked.

It means using what they gave us
to make the next part ourselves.

Being connected
does not mean becoming the same.

Even from the same roots,
we can grow differently.

Carry yesterday's answers with you.

But let today
ask today's questions.

In our own way.

Add something from today
to the light you inherited.

We may have come this far together.

Our roads can still be different.

Keep moving.

If something is wrong, correct it.

When you learn more, change.

Leave whoever comes next
more roads to choose from.

Trust one another enough
to let each person choose.

That is how we continue.

In our own way.

Put a new beat
over an old rhythm.

Sing about a new tomorrow
in words that still feel like home.

Something does not disappear
simply because it changes.

Sometimes it changes
because it is still alive.

Someone younger than you
may say one thing
that shakes an answer you have believed for years.

If you were wrong, correct it.

If you can see better now, look again.

Wisdom has no rank.

There is not always only one right answer.

If today allows you to see more clearly than yesterday,
begin again from there.

You do not have to protect an answer
simply because I gave it to you.

If you see something I could not see,
start there.

What I want to pass down
is not an answer you are required to follow.

It is the courage
to ask the question again.

Then take what you discover
and pass that forward too.

Stay connected.

Do not become identical.

Because we came here together,
we can now take our own roads.

In our own way.`,
  },
  {
    id: "taiwan",
    languageLabel: "Traditional Chinese",
    localeLabel: "Taiwan",
    title: "留一點空白",
    englishTitle: "Leave a Little Blank Space",
    src: "/audio/Song-Traditional-Chinese-Taiwan-Leave-a-Little-Blank-Space.mp3",
    principle: "Leave some of the future unwritten.",
    sound: "Taiwan Mandopop / indie-electronic · processed yueqin · spacious synth-pop",
    nativeLyrics: `留一點空白

[Intro]
留一點空白
讓明天自己寫

留一點空白

[Verse 1]
午後的雨落在騎樓外
機車聲穿過熟悉的街
山很近　海也不遠
我們從很多聲音裡走到今天

家裡留下幾句老話
有些到現在還說得很準
有些走到今天再回頭看
才知道可以換個答案

[Pre-Chorus]
記得　不等於照做
珍惜　也可以改過

如果今天看得更遠
就從今天重新走

[Chorus]
留一點空白
讓明天自己寫
帶著來時的光
不把昨天重演

路可以不一樣
心還知道從哪裡來
我走到這裡
你就從這裡往前

留一點空白
留給你去寫

[Post-Chorus]
留一點空白
讓明天自己寫

[Verse 2]
這座島從來不只一種聲音
也沒有一條路能說完所有人
有人守著熟悉的節奏
有人把舊的聲音放進新的歌

真正留下來的不是形式
是還能讓人繼續長大的東西
如果下一代改得更好
那就代表我們沒有白走

[Pre-Chorus]
聽見　不代表服從
傳承　也不是封存

現實如果給了新答案
就讓答案跟著更新

[Bridge]
別把愛寫成規定
別把記憶變成邊界

我想留給你的
不是我走過的每一步

是犯錯也能重來的餘地
是問「為什麼」的自由

還有一頁——

我故意沒有寫完

[Final Chorus]
留一點空白
讓明天自己寫
帶著來時的光
不把昨天重演

路可以不一樣
心還知道從哪裡來
我走到這裡
你就從這裡往前

留一點空白
留給你去寫

[Final Post-Chorus]
輪到你了
寫你看見的世界

然後有一天——

也別把它寫滿

[Outro]
留一點空白。`,
    englishLyrics: `LEAVE A LITTLE BLANK SPACE

Afternoon rain falls beyond the covered sidewalk.

Scooters move through streets we know.

The mountains are close.
The sea is never very far.

We arrived here
surrounded by many different voices.

At home, a few old sayings were passed down.

Some still prove true.

Others look different
once you have lived long enough to look back.

Sometimes there is another answer.

Remembering does not mean repeating.

Valuing something
does not mean it can never change.

If today lets you see farther,
begin again from today.

Leave a little blank space.

Let tomorrow write for itself.

Carry the light that brought you here
without forcing yesterday to happen again.

Your road can be different
and you can still know where you came from.

I came this far.

Begin here
and keep going.

Leave a little blank space.

Leave it for you to write.

This island has never had only one voice.

No single road can tell everyone's story.

Some people hold an old rhythm.

Others take an old sound
and put it inside a new song.

What truly survives
is not always the form.

It is whatever can still help another person grow.

If the next generation makes something better,
then the road we walked was not wasted.

Hearing something does not mean obeying it.

Inheritance is not preservation under glass.

If reality gives us another answer,
let the answer change.

Do not turn love into rules.

Do not turn memory into a boundary.

What I want to leave you
is not every step I took.

I want to leave enough room
to make a mistake and begin again.

The freedom to ask:

Why?

And one page—

I deliberately left unfinished.

Leave a little blank space.

Let tomorrow write for itself.

I came this far.

You begin here.

Now it is your turn.

Write the world you can see.

And someday,
when someone follows you—

don't fill every page either.`,
  },
  {
    id: "spain",
    languageLabel: "Spanish",
    localeLabel: "Spain",
    title: "Queda Mucho por Decir",
    englishTitle: "There’s Still More to Say",
    src: "/audio/Song-Spain-Queda-Mucho-por-Decir.mp3",
    principle: "Inheritance is a conversation, not a conclusion.",
    sound: "Spanish electro-pop / flamenco-pop · nylon guitar · palmas and cajón accents",
    nativeLyrics: `QUEDA MUCHO POR DECIR

[Intro]
Queda mucho por decir…
mucho por decir.

[Verse 1]
Se enfría el café sobre la mesa,
pero nadie se quiere levantar.
Alguien cuenta una historia de siempre,
alguien pregunta algo que la hace cambiar.

Crecimos entre voces y opiniones,
entre “acuérdate” y “piénsalo tú”.
No todo lo antiguo tiene razón,
pero tampoco empieza todo con nosotros.

[Pre-Chorus]
Escucha lo que llega.
Pregunta lo que no encaja.

Agradecer el camino
no significa dejar de andar.

[Chorus]
Queda mucho por decir,
mucho por vivir.
Lo que recibimos
no termina aquí.

Si mañana ves distinto,
no tengas miedo de seguir.
Deja abierta la conversación.

Queda mucho por decir.

[Post-Chorus]
Mucho por decir.
Mucho por descubrir.

Queda mucho por decir.

[Verse 2]
Hay caminos que cruzan generaciones,
pero cada paso tiene otra intención.
Una verdad que ayer parecía completa
hoy puede necesitar otra pregunta.

A veces aprende quien vino a enseñar.
A veces el joven ve primero.
Cambiar de idea no borra el pasado.

Solo demuestra
que seguimos despiertos.

[Pre-Chorus]
Guarda lo que sirve.
Suelta lo que pesa.

Y si la vida cambia la respuesta,
que cambie también la certeza.

[Bridge]
No quiero dejarte
una vida ya escrita.

Ni una respuesta
que tengas que defender por mí.

Quiero dejarte una mesa
donde todavía quepa otra voz.

Un lugar donde puedas decir:

“Yo lo veo de otra manera.”

Y que siga la conversación.

[Final Chorus]
Queda mucho por decir,
mucho por vivir.
Lo que recibimos
no termina aquí.

Si mañana ves distinto,
no tengas miedo de seguir.
Deja abierta la conversación.

Queda mucho por hacer,
mucho por añadir.

Y cuando llegue tu turno,
no escribas el final.

Deja algo abierto
para quien venga detrás de ti.

[Final Post-Chorus]
Mucho por decir.
Mucho por descubrir.

Que siga la conversación.

[Outro]
Queda mucho por decir.`,
    englishLyrics: `THERE’S STILL MORE TO SAY

The coffee gets cold on the table,
but no one is ready to get up.

Someone tells a story everyone has heard before.

Someone asks one question
that changes how the story looks.

We grew up surrounded by voices and opinions—

some telling us to remember,
others telling us to think for ourselves.

Not everything old is right.

But everything did not begin with us either.

Listen to what reaches you.

Question what does not fit.

Being grateful for the road behind you
does not mean you have to stop walking.

There is still so much to say.
So much to live.

What we receive
does not end with us.

If tomorrow lets you see something differently,
do not be afraid to keep going.

Leave the conversation open.

There is still more to say.

Some roads cross generations,
but every person walks them for different reasons.

Something that seemed like a complete truth yesterday
may need another question today.

Sometimes the person who came to teach
is the one who learns.

Sometimes the younger person sees first.

Changing your mind does not erase the past.

It only proves
that we are still awake.

Keep what helps.

Let go of what weighs you down.

And if life changes the answer,
let your certainty change too.

I do not want to leave you
a life already written.

Or an answer
you have to defend because it came from me.

I want to leave you a table
where there is still room for another voice.

A place where you can say:

“I see it differently.”

And the conversation continues.

There is still so much to say.

What we received
does not end here.

There is still something to make,
something to add.

And when your turn comes,
do not write the ending.

Leave something open
for whoever comes after you.

Let the conversation continue.`,
  },
  {
    id: "germany",
    languageLabel: "German",
    localeLabel: "Germany",
    title: "Weiterdenken",
    englishTitle: "Think Further",
    src: "/audio/Song-Germany-Weiterdenken-Think-Further.mp3",
    principle: "Inherit the responsibility to examine the answer.",
    sound: "German electro-pop / alternative · analog synths · processed Waldzither accent",
    nativeLyrics: `WEITERDENKEN

[Intro]
Weiter.
Nicht nur weitergehen.

Weiterdenken.

[Verse 1]
Wir wachsen auf mit alten Sätzen,
mit Wegen, die schon jemand kennt.
Mit Dingen, die uns Halt gegeben,
und Fragen, die noch keiner stellt.

Nicht alles Alte muss verschwinden.
Nicht alles Neue ist schon gut.
Man schaut genau hin, prüft noch einmal
und ändert, was nicht länger trägt.

[Pre-Chorus]
Nimm mit, was dir hilft.
Lass los, was dich hält.

Herkunft ist ein Anfang.
Kein fertiger Plan für deine Welt.

[Chorus]
Weiterdenken, weitergehen.
Was wir erben, neu verstehen.

Was noch trägt, nehmen wir mit.
Was nicht mehr passt, ändern wir.

Weiterdenken, weitersehen.
Nicht nur folgen — selber wählen.

Was vor uns war, bringt uns bis hier.

Was danach kommt,
entscheiden wir.

Weiterdenken.

[Post-Chorus]
Weiter.
Weiterdenken.

[Verse 2]
Ein guter Plan bleibt nur ein guter,
wenn er der Wirklichkeit noch standhält.
Und manchmal sieht ein jüngerer Blick
genau das, was den anderen fehlt.

Sich zu korrigieren heißt nicht scheitern.
Mehr zu wissen ändert auch den Weg.
Wer gestern recht hatte, kann heute lernen.

Wer heute lernt, darf weitergehen.

[Pre-Chorus]
Frag nach.
Sieh hin.

Mach Gewissheit nicht zu Stolz.

Wenn die Wirklichkeit widerspricht,
hat sie das letzte Wort.

[Bridge]
Wenn du später mehr weißt als ich,

bleib nicht bei meiner Antwort.

Nur weil sie von mir kommt.

Prüf sie.

Korrigier sie.

Bau weiter.

Ich will dir keine fertige Lösung geben.

Nur genug,
damit du deine eigene bauen kannst.

[Final Chorus]
Weiterdenken, weitergehen.
Was wir erben, neu verstehen.

Was noch trägt, nehmen wir mit.
Was nicht mehr passt, ändern wir.

Weiterdenken, weitersehen.
Nicht nur folgen — selber wählen.

Und wenn nach uns jemand weitergeht,

lass ihm mehr Möglichkeiten,
nicht weniger.

Weiterdenken.

[Outro]
Nicht fertig.

Gut so.

Weiterdenken.`,
    englishLyrics: `THINK FURTHER

We grow up with old sentences,
with roads someone already knows.

With things that gave us stability
and questions no one has asked yet.

Not everything old needs to disappear.

Not everything new is automatically better.

Look closely.

Test it again.

Change what no longer holds.

Take what helps you.

Let go of what holds you back.

Where you come from is a beginning.

It is not a finished plan for your life.

Think further.
Keep moving.

Understand what you inherited again for yourself.

Take what still holds.

Change what no longer fits.

What came before us
can bring us this far.

What happens next
is ours to decide.

A good plan remains a good plan
only while reality still supports it.

Sometimes a younger pair of eyes
sees exactly what everyone else missed.

Correcting yourself is not failure.

Knowing more can change the road.

Someone who was right yesterday
can still learn today.

And someone who learns today
is allowed to move forward.

Ask.

Look carefully.

Do not turn certainty into pride.

When reality disagrees,
reality gets the final word.

If someday you know more than I do,

do not keep my answer
simply because it came from me.

Test it.

Correct it.

Build further.

I do not want to give you
a finished solution.

Only enough
to build your own.

Think further.

Keep what still holds.

Change what no longer fits.

Choose rather than merely follow.

And when someone comes after you,

leave them more possibilities,
not fewer.

Not finished.

Good.`,
  },
  {
    id: "united-states",
    languageLabel: "English",
    localeLabel: "United States",
    title: "Room to Become",
    englishTitle: "Room to Become",
    src: "/audio/Song-United-States-Room-to-Become.mp3",
    principle: "Give them roots. Give them sky.",
    sound: "American alt-pop / indie-soul electronic · subtle pedal-steel texture",
    nativeLyrics: `ROOM TO BECOME

[Intro]
Give me somewhere to start.

Then give me
room to become.

[Verse 1]
We came here by a thousand roads,
different names, different towns.
Some carried stories across an ocean,
some grew roots in the same old ground.

We learned from hands that built before us,
from mistakes nobody meant to make.
They gave us something strong to stand on.

They didn't have to choose
what we would make.

[Pre-Chorus]
Keep the truth.
Change the frame.

Know your roots
without staying the same.

[Chorus]
Give me room to become
more than where I started from.

Leave the light.
Leave the door.

Don't decide what my life is for.

Give me roots,
but give me sky.

Let me ask a different why.

If you want to leave me something good,

give me room—

room to become.

[Post-Chorus]
Room to become.
Room to become.

[Verse 2]
Maybe the youngest sees it clearer.
Maybe the old rule doesn't hold.
Maybe the thing we called an answer
was only the best that we could know.

Changing doesn't erase the story.
Learning doesn't make the past a lie.

We honor what brought us this far
when we're willing to look again
with open eyes.

[Pre-Chorus]
Take what helps.
Question the rest.

What we inherit
is a start, not a test.

[Bridge]
Don't hand me your life
and ask me to repeat it.

Hand me what you learned.

Tell me what it cost.

Tell me where you might have been wrong.

Then trust me enough
to choose.

And if I find something better—

let that be part of what you gave me too.

[Final Chorus]
Give me room to become
more than where I started from.

Leave the light.
Leave the door.

Don't decide what my life is for.

Give me roots,
but give me sky.

Let me see what you couldn't see.

Then when someone starts from where I end,

I'll give them room—

more room than you gave me—

room to become.

[Outro]
A stronger place to start.

A wider place to go.

Room to become.`,
  },
  {
    id: "mainland-china",
    languageLabel: "Simplified Chinese",
    localeLabel: "Mainland China",
    title: "下一笔",
    englishTitle: "The Next Stroke",
    src: "/audio/Song-Mainland-Mandarin-The-Next-Stroke.mp3",
    principle: "We wrote something. That does not mean the writing is finished.",
    sound: "Mainland Mandopop / progressive electronic guofeng · processed pipa hook",
    nativeLyrics: `下一笔

[Intro]
下一笔
该怎么写

下一笔
由我们自己来

[Verse 1]
我们从很多故事里长大
从家里的口音　饭桌上的话
从旧照片　旧名字　旧习惯
也从每天变化的城市出发

有人替我们写下开头
却没人能替我们写完
那些走过的路值得记住
但明天不会照着昨天重来

[Pre-Chorus]
留下真的
改掉不再适合的

尊重来处
也别停在来处

[Chorus]
下一笔　下一笔
写下今天看见的天地
带着从前　不是重复从前
走到这里　就从这里继续

下一笔　下一笔
答案不一定还是原来的答案
如果我们看得更远一点

就把这一笔
写得更好一点

下一笔

[Post-Chorus]
下一笔
往前写

[Verse 2]
山河很大　生活很具体
每个人都有自己的方向
同一句话传到下一代
也会遇见不同的目光

年轻的人也能提醒我们
走得久不代表都看得清
如果现实给了新的答案
改变不是忘记　是继续前行

[Pre-Chorus]
能留下的
不是因为从来没变

真正重要的
经得起再看一遍

[Bridge]
别把爱写成规定
别把经验写成终点

如果我留下的答案
有一天不再适合

改掉它

如果你看见我没看见的

写下去

我想给你的
不是一张已经画完的地图

是一个起点

和继续画下去的自由

[Final Chorus]
下一笔　下一笔
写下今天看见的天地
带着从前　不是重复从前
走到这里　就从这里继续

下一笔　下一笔
把我们学到的再往前推一点
然后把更宽的起点

留给后来的人
写他们的下一笔

[Final Post-Chorus]
我们写过
不代表已经写完

轮到你时

写你的下一笔

[Outro]
下一笔。`,
    englishLyrics: `THE NEXT STROKE

We grow up inside many stories—

the accents spoken at home,
the conversations around the table,
old photographs, old names, old habits—

and cities that seem to change every day.

Someone wrote the beginning before us.

No one can write the ending for us.

The roads already traveled deserve to be remembered.

But tomorrow does not have to repeat yesterday.

Keep what remains true.

Change what no longer fits.

Respect where you came from.

Do not remain there.

The next stroke is ours.

Write what we can see today.

Carry what came before
without reproducing it.

We have come this far.

Begin here
and keep going.

The answer does not always have to remain the answer.

If we can see a little farther now,
make the next stroke a little better.

The land is vast.

Life is specific.

Everyone still has a direction of their own.

The same words, handed to another generation,
will meet a different pair of eyes.

Someone younger can show us something too.

Walking longer
does not mean we have seen everything clearly.

If reality gives us another answer,
change.

Changing is not forgetting.

It is continuing forward.

What deserves to survive
does not survive simply because it never changed.

What matters
can withstand being examined again.

Do not turn love into rules.

Do not turn experience into an ending.

If an answer I leave you
no longer fits one day,

change it.

If you can see something
I could not see,

write it.

I do not want to leave you
a map with every road already drawn.

I want to leave you
a place to begin

and the freedom
to keep drawing.

The next stroke is ours.

Take what we learned
and move it a little farther.

Then leave whoever comes next
a wider place to begin.

Let them write
their next stroke.

Because we wrote something
does not mean the writing is finished.`,
  },
];

export const musicMovements: MusicMovement[] = [
  {
    id: "roots-in-motion",
    eyebrow: "Movement I",
    title: "Roots in motion",
    description: "The first songs asked whether honoring what came before requires staying where it began. Vietnam, Japan, and Italy each answered no—in different ways.",
    songIds: ["vietnam", "japan", "italy"],
  },
  {
    id: "inheritance-as-conversation",
    eyebrow: "Movement II",
    title: "Inheritance becomes conversation",
    description: "Brazil, France, and Korea shifted the emphasis from preserving answers to participating in a living exchange: receive, question, transform, and trust other voices.",
    songIds: ["brazil", "france", "korea"],
  },
  {
    id: "leave-room",
    eyebrow: "Movement III",
    title: "Leave room for revision",
    description: "Taiwan, Spain, and Germany made incompleteness a strength. Leave a page unfinished. Keep the table open. Test the answer again.",
    songIds: ["taiwan", "spain", "germany"],
  },
  {
    id: "widen-possibility",
    eyebrow: "Movement IV",
    title: "Widen the starting point",
    description: "The United States and Mainland China bring the journey back to possibility: give the next person room to become, and leave the work open for another hand.",
    songIds: ["united-states", "mainland-china"],
  },
];
