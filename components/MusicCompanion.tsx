type MusicTrack = {
  title: string;
  src: string;
  description: string;
  lyrics?: string;
};

type MusicCompanionProps = {
  eyebrow: string;
  title: string;
  description: string;
  tracks: MusicTrack[];
  note?: string;
};

export function MusicCompanion({ eyebrow, title, description, tracks, note }: MusicCompanionProps) {
  return (
    <section className="music-companion" aria-label={title}>
      <div className="music-companion-head">
        <div className="eyebrow">{eyebrow}</div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className={`music-track-grid ${tracks.length > 1 ? "music-track-grid-multi" : ""}`}>
        {tracks.map((track) => (
          <article className="music-track" key={track.src}>
            <div className="music-track-copy">
              <h3>{track.title}</h3>
              <p>{track.description}</p>
            </div>
            <audio controls preload="metadata" aria-label={`Listen to ${track.title}`}>
              <source src={track.src} type="audio/mpeg" />
              Your browser does not support audio playback. <a href={track.src}>Open the song.</a>
            </audio>
            {track.lyrics && (
              <details className="music-lyrics">
                <summary>Read lyrics</summary>
                <pre>{track.lyrics}</pre>
              </details>
            )}
          </article>
        ))}
      </div>

      {note && <p className="music-companion-note">{note}</p>}
    </section>
  );
}
