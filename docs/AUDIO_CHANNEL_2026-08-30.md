# Audio Channel — Public Experience Layer

Added 2026-08-30 as a subtle optional listening channel for selected pages on DarrenDang.com.

Principles:
- Text remains the default knowledge medium.
- Audio adds human voice, intimacy, orientation, and author-read previews where it materially improves the experience.
- Nothing autoplays.
- The listening control stays collapsed until a visitor chooses it.
- The Way Forward intentionally has no Darren narration: the reader retains the floor.
- Book 1 audio previews mirror the existing read previews.
- The written Constitution remains authoritative; its recording is orientation only.

Implementation:
- `components/ListeningLayer.tsx` maps selected public routes to approved MP3 assets in `public/audio/`.
- `app/listen.css` provides the restrained fixed listen dock.
- `app/layout.tsx` mounts the listening layer globally, but the component renders only on routes with approved audio.

Current routes:
- `/` — Why This Exists
- `/the-way` — A Stronger Starting Point
- `/your-way` — Now It Becomes Yours
- `/the-way/constitution` — Why Have a Constitution?
- `/contribute` — Add Your Dot
- `/about` — What I’m Trying to Leave Behind
- `/letters/why-these-letters` — Why These Letters
- `/books/for-those-who-come-after-us` — three author-read previews
- the three corresponding Book 1 preview routes — one matching author-read preview each
