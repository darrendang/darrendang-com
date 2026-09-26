# DarrenDang.com Spoken Audio Refresh — 2026-09-26

**Status:** APPROVED / PUBLIC WEBSITE IMPLEMENTATION CONTROL
**Approved by:** Darren Dang
**Scope:** the four Darren-recorded MP3s uploaded to `public/audio/`, their selected website routes, and preservation of the earlier recordings

## Decision and provenance

After the September 25 books-first reader-experience refinement, Darren approved the updated website audio plan, recorded and uploaded four MP3s, and explicitly directed their integration and production deployment. These are author-supplied recordings. The September 25 scripts and prior conversation provide task provenance; the exact MP3s in the website repository are the deployable bytes. No private WAV/master is required for this release.

The written pages remain the primary reading experience. The Listening Layer is optional, collapsed by default, and never autoplays.

## Active route mapping

| Page | Spoken recording | Exact asset / Git blob SHA-1 |
|---|---|---|
| Home `/` | Why This Exists v2 | `public/audio/homepage-why-this-exists2.mp3` / `7119287b549bdf1b74b68416c7fc73aab9afac02` |
| About `/about/` | A Life Between Worlds | `public/audio/about-darren-a-life-between-worlds.mp3` / `f092d5369dbff38b9e1adc3628da76dbb4315586` |
| The Way `/the-way/` | A Stronger Starting Point v2 | `public/audio/the-way-a-stronger-starting-point-v2.mp3` / `a6ad374d576fac7f0665912af7d1d6b5005c5f38` |
| Book 1 primary listening selection and Chapter 18 excerpt route | Integrity When It Costs Something | `public/audio/book1-chapter18-integrity-when-it-costs-you-something.mp3` / `2e8d936cbf68881bc19172ee5d518eb2ac553f8a` |

Book 1's three primary listening previews now match its approved three reading selections: **When You Need Me**, **Integrity When It Costs Something**, and **What I Hope You Keep. What I Hope You Change.** Chapter 9's **Connect the Dots** audio remains on its own public Book 1 → Book 3 bridge route, outside the three main selections.

The existing Your Way, Constitution, and Why These Letters recordings remain active and byte unchanged. The Way Forward continues to have no Darren narration. The `/contribute/` Add Your Dot voice invitation is removed from the active Listening Layer while rich public intake remains closed.

Earlier homepage, About, The Way, and Contribute MP3s are preserved as inactive provenance. Their route status and fingerprints are recorded in `docs/AUDIO_REVIEW_MANIFEST.json`; they are not silently overwritten or deleted.

## Verification boundary

The four MP3s decode without errors and the Git-compatible blob hashes and byte sizes are registered in the manifest. This implementation compares asset identity and page role against the approved site controls. It does **not** independently certify word-for-word transcripts or make the new website audio an audiobook Gold Master. Exact Book 1 prose and production authority remain in its source project; this change touches website presentation only.

Release is subject to the repository public audit, audio fingerprint gate, contrast/asset checks, TypeScript, lint, static export, and successful GitHub Pages deployment. A code commit alone does not prove the site is live.

## Relationship to governing controls

- Central reader journey: `darrendang/dang-genome/00_Canon_Control/WEBSITE_READER_EXPERIENCE_REFINEMENT_SYNC_2026-09-25.md`
- Website primary reading previews: `00_Canon_Control/BOOKS_1_3_PREVIEW_AND_AVAILABILITY_REFRESH_2026-09-25.md`
- Website audio routes: `docs/AUDIO_CHANNEL_2026-08-30.md`
- Exact public MP3 identities: `docs/AUDIO_REVIEW_MANIFEST.json`

This refresh preserves the approved website architecture, protected family artifacts, book canon, and the public/private boundary.
