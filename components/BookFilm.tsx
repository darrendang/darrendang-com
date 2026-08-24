type BookFilmProps = {
  id: string;
  eyebrow: string;
  title: string;
  copy: string;
  videoSrc: string;
  posterSrc: string;
  ariaLabel: string;
};

export function BookFilm({
  id,
  eyebrow,
  title,
  copy,
  videoSrc,
  posterSrc,
  ariaLabel,
}: BookFilmProps) {
  return (
    <section className="book-film" id={id} aria-labelledby={`${id}-title`}>
      <div className="book-film-grid">
        <div className="book-film-copy">
          <div className="eyebrow">{eyebrow}</div>
          <h2 id={`${id}-title`}>{title}</h2>
          <p className="lead-light">{copy}</p>
          <div className="film-relationship" aria-label="Book to ideas to story to film">
            Book → Ideas → Story → Film
          </div>
        </div>

        <figure className="book-film-player">
          <video
            controls
            playsInline
            preload="metadata"
            poster={posterSrc}
            aria-label={ariaLabel}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video player. <a href={videoSrc}>Open the 30-second book film.</a>
          </video>
          <figcaption>30 seconds · Original instrumental score · No autoplay.</figcaption>
        </figure>
      </div>
    </section>
  );
}
