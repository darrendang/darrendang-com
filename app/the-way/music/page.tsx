import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { carryItForwardLyrics } from "@/lib/songLyrics";
import { culturalSongs, musicMovements } from "@/lib/theWayMusicJourney";
import "./music-journey.css";

export const metadata: Metadata = {
  title: "The Way in Music — One Philosophy, Many Cultures",
  description:
    "A cultural music journey through original expressions of The Way: modern first, culturally unmistakable, philosophically The Way.",
};

const languageBySong: Record<string, string> = {
  vietnam: "vi",
  japan: "ja",
  italy: "it",
  brazil: "pt-BR",
  france: "fr",
  korea: "ko",
  taiwan: "zh-Hant-TW",
  spain: "es-ES",
  germany: "de",
  "united-states": "en-US",
  "mainland-china": "zh-Hans-CN",
};

const songNumber = new Map(culturalSongs.map((song, index) => [song.id, index + 1]));

export default function TheWayMusicPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="music-journey-page">
        <section className="music-journey-hero">
          <div className="container music-journey-hero-grid">
            <div>
              <div className="eyebrow">The Way · In music</div>
              <h1 className="type-editorial">One philosophy. Many cultures. Many ways forward.</h1>
              <p className="music-journey-lead">
                This began with a song called <em>Carry It Forward</em>. Then the question changed:
                what if we stopped translating the song and let each culture answer the same
                philosophy in its own language, imagery, rhythm, and sound?
              </p>
              <div className="music-journey-actions">
                <a className="button button-gold" href="#journey">Begin the journey</a>
                <Link className="text-link light" href="/the-way/">Return to The Way</Link>
              </div>
            </div>
            <aside className="music-journey-manifesto" aria-label="Creative principle">
              <span>Governing creative principle</span>
              <strong>Modern first.</strong>
              <strong>Culturally unmistakable.</strong>
              <strong>Philosophically The Way.</strong>
              <p>Not translations. Original expressions of the same constitutional inheritance.</p>
            </aside>
          </div>
        </section>

        <section className="section music-origin">
          <div className="container music-origin-grid">
            <div>
              <div className="eyebrow bronze">Prologue · The originating song</div>
              <h2 className="type-editorial">Carry It Forward</h2>
              <p className="lead">
                The original song tried to hold the whole idea at once: receive what came before,
                examine it, make it your own, and leave greater possibility behind.
              </p>
              <p>
                But The Way itself says difference is information, not a defect to erase. So rather
                than translate one English song eleven times, the project became an experiment:
                keep the philosophical core and let the cultural expression change.
              </p>
            </div>
            <article className="music-origin-player">
              <div className="music-origin-kicker">Origin · Global expression</div>
              <audio controls preload="metadata" aria-label="Listen to Carry It Forward">
                <source src="/audio/Song-Carry-It-Forward.mp3" type="audio/mpeg" />
                Your browser does not support audio playback.
              </audio>
              <details className="music-origin-lyrics">
                <summary>Read the originating lyrics</summary>
                <pre>{carryItForwardLyrics}</pre>
              </details>
            </article>
          </div>
        </section>

        <section className="section navy music-method">
          <div className="container">
            <div className="section-intro compact">
              <div className="eyebrow">What stayed. What changed.</div>
              <h2 className="type-editorial">The philosophy stayed underneath. The songs became their own.</h2>
              <p className="lead">
                Each song began from the same constitutional center—inheritance without prescription,
                agency, teachability, contribution, and a stronger starting point for whoever comes next.
                Everything else was allowed to move.
              </p>
            </div>
            <div className="music-method-grid">
              <article>
                <span>01</span>
                <strong>Native language first</strong>
                <p>The lyric should feel conceived in the language, not translated into it.</p>
              </article>
              <article>
                <span>02</span>
                <strong>Culture as living identity</strong>
                <p>Inherited instruments and motifs enter modern production as living material, not costume.</p>
              </article>
              <article>
                <span>03</span>
                <strong>One principle, different discoveries</strong>
                <p>Each culture is free to surface a different part of The Way.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="journey" className="section music-journey-index">
          <div className="container">
            <div className="section-intro compact">
              <div className="eyebrow bronze">The cultural journey</div>
              <h2 className="type-editorial">Listen in order—or enter where a language speaks to you.</h2>
              <p className="lead">
                The sequence below follows the discovery as it unfolded. Open any song to place its
                original lyric beside the English companion translation.
              </p>
            </div>
            <nav className="music-language-strip" aria-label="Jump to a song">
              {culturalSongs.map((song, index) => (
                <a key={song.id} href={`#${song.id}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{song.languageLabel}</strong>
                </a>
              ))}
            </nav>
          </div>
        </section>

        {musicMovements.map((movement) => {
          const songs = movement.songIds
            .map((id) => culturalSongs.find((song) => song.id === id))
            .filter((song): song is NonNullable<typeof song> => Boolean(song));

          return (
            <section className="section music-movement" id={movement.id} key={movement.id}>
              <div className="container">
                <div className="music-movement-head">
                  <div>
                    <div className="eyebrow bronze">{movement.eyebrow}</div>
                    <h2 className="type-editorial">{movement.title}</h2>
                  </div>
                  <p>{movement.description}</p>
                </div>

                <div className="culture-song-list">
                  {songs.map((song) => {
                    const number = songNumber.get(song.id) ?? 0;
                    const isEnglish = !song.englishLyrics;
                    return (
                      <article className="culture-song" id={song.id} key={song.id}>
                        <div className="culture-song-number" aria-hidden="true">
                          {String(number).padStart(2, "0")}
                        </div>
                        <div className="culture-song-main">
                          <header className="culture-song-head">
                            <div className="culture-song-locale">
                              {song.languageLabel} <span>·</span> {song.localeLabel}
                            </div>
                            <h3 lang={languageBySong[song.id]}>{song.title}</h3>
                            {song.englishTitle !== song.title && (
                              <p className="culture-song-english-title">{song.englishTitle}</p>
                            )}
                          </header>

                          <blockquote>{song.principle}</blockquote>
                          <p className="culture-song-sound">{song.sound}</p>

                          <audio controls preload="metadata" aria-label={`Listen to ${song.title}`}>
                            <source src={song.src} type="audio/mpeg" />
                            Your browser does not support audio playback.
                          </audio>

                          <details className="culture-song-lyrics">
                            <summary>
                              <span>{isEnglish ? "Read lyrics" : "Open lyrics + English companion"}</span>
                              <small>{isEnglish ? "Original English" : "Side-by-side reading"}</small>
                            </summary>
                            <div className={`lyrics-compare ${isEnglish ? "lyrics-compare-single" : ""}`}>
                              <section>
                                <div className="lyrics-label">
                                  {isEnglish ? "Original lyrics" : `Original · ${song.languageLabel}`}
                                </div>
                                <pre lang={languageBySong[song.id]}>{song.nativeLyrics}</pre>
                              </section>
                              {song.englishLyrics && (
                                <section>
                                  <div className="lyrics-label">English companion</div>
                                  <pre lang="en">{song.englishLyrics}</pre>
                                </section>
                              )}
                            </div>
                          </details>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })}

        <section className="section music-coda">
          <div className="container music-coda-grid">
            <div>
              <div className="eyebrow">What the journey revealed</div>
              <h2 className="type-editorial">None of the songs says exactly the same thing.</h2>
              <p className="lead">That is the point.</p>
              <p>
                Each began with the same philosophical inheritance. Each language and culture found a
                different emphasis inside it: roots, release, conversation, revision, possibility,
                responsibility, and room for another person to add what we could not.
              </p>
            </div>
            <blockquote className="music-coda-quote">
              <span>No one&apos;s Way is the final Way.</span>
              <strong>Perhaps the music makes that easier to hear.</strong>
            </blockquote>
          </div>
          <div className="container music-coda-actions">
            <Link className="button button-light" href="/the-way/">Return to The Way</Link>
            <Link className="text-link light" href="/the-way/constitution/">Read the Constitution →</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
