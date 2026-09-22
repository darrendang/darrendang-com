# Audio Channel — Public Experience Layer

Added 2026-08-30 as a subtle optional listening channel for selected pages on DarrenDang.com. Extended 2026-09-15 with a distinct inline **music companion layer** for songs that interpret specific books or The Way.

Principles:
- Text remains the default knowledge medium.
- Audio adds human voice, intimacy, orientation, author-read previews, and selected musical interpretations where it materially improves the reader experience.
- Nothing autoplays.
- Spoken Darren-voice audio and musical interpretations are visually and semantically distinct.
- The route-based listening control stays collapsed until a visitor chooses it.
- Inline songs stay on the page whose ideas give them context. The Way in Music is a deeper cultural-expression journey under `/the-way/music/`, discoverable from The Way, Explore, and the footer; it is not a separate top-level primary-navigation category.
- The Way Forward intentionally has no Darren narration or companion song: the reader retains the floor.
- Book 1 audio previews mirror the existing read previews.
- The written Constitution remains authoritative; its recording is orientation only.
- Musical companions interpret the work; they do not replace book, method, philosophy, or constitutional authority.
- **Unchanged audio is not re-reviewed merely because the website or ecosystem is reviewed again.**
- Each MP3 is fingerprinted in `docs/AUDIO_REVIEW_MANIFEST.json` using its Git blob SHA-1 and file size.
- Re-review is required when an audio fingerprint changes, when a materially relevant public canon baseline changes, or when Darren explicitly reopens a prior review.

## Route-based Darren voice

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

## Inline music companions

Implementation:
- `components/MusicCompanion.tsx` provides the shared in-page song treatment.
- `app/music-companion.css` provides its responsive visual treatment.
- `lib/songLyrics.ts` preserves the reviewed public lyric text used by the expandable `Read lyrics` controls.
- Songs appear in context rather than in the fixed ListeningLayer.

Current placements:
- `/books/for-those-who-come-after-us/` — `For Those Who Come After Us` plus `Take the Best`
- `/books/wisdom-has-no-rank/` — `No Rank (Both Ways)`
- `/books/dots/` — `The Shape Beneath`
- `/the-way/` — `Carry It Forward`
- `/the-way/music/` — `Carry It Forward` as prologue plus 11 original cultural expressions with expandable native lyrics and English companion translations
- `/letters/the-way-was-us/` — `The Way Was Us`, embedded as a specific Letter/song artifact rather than part of the reusable music companion component

Book 3 boundary: `The Shape Beneath` is explicitly labeled an artistic interpretation. The Book 3 prose and method pages remain authoritative for D.O.T.S. and CREATE definitions.

## Review ledger and validation

- `docs/AUDIO_REVIEW_MANIFEST.json` is the sidecar review ledger for all MP3 assets.
- `scripts/check-audio-review.mjs` recomputes Git-compatible blob hashes and fails CI if an MP3 is changed, added, removed, or no longer matches its review ledger.
- `.github/workflows/ci.yml` runs that fingerprint check on pushes and pull requests.

Review workflow:
1. If the fingerprint matches the manifest, treat the recording as byte-for-byte unchanged; do not re-analyze it solely because the site is under review.
2. If the fingerprint changes, review only that changed/new recording against the current public canon and its route purpose.
3. After approval, update its fingerprint, file size, review date, review basis, and review state in the manifest.
4. If the public canon changes materially while the MP3 remains unchanged, update the canon baseline and selectively reopen only the recordings affected by that change.
