# Letter 002 — public publication control

**Date:** 2026-11-12
**Work:** Letters from Darren / LFD-002 — *Know Where You Came From. Then Keep Going.*
**Authority:** Darren's direct instruction, “Release and publish letter 2,” reaffirmed after reviewing its relationship to Letter 001 and Book 2: “agreed release letter 2 as intended.”
**Status:** AUTHOR-APPROVED / WEBSITE IMPLEMENTED IN RELEASE BRANCH; production deployment pending verification.

## Publication identity

- Public URL: `https://darrendang.com/letters/know-where-you-came-from-then-keep-going/`
- Editorial source: governed canonical LFD-002 v1.0; exact original text is in the private Dang Genome.
- The 64 body paragraphs in the public page match the canonical manuscript exactly; no invented conversation, new fact, or attribution is added.
- The source is an approved editorial reconstruction/materialization, not a claim of exact recovery of a historical manuscript.
- Date of this publication is November 12, 2026; original 2026-08-31 canonization is not backdated into a historical publication claim.

## Privacy and boundaries

- This reflection about deceased parents and inheritance contains no named living family members or private family decisions.
- It references already-public family and refugee history without adding precise events or confidential correspondence.
- Its references to earlier letters are authorial reflections, not the publication of private original letters or raw archival material.
- Preserve all prior public Letters, special family letters, and established reader journey.
- Book 2 is linked as related reading; a planned December 12 publication is not claimed as already approved, Gold, or available.
- Letters 003–012 remain private and unreleased; no public outreach or social posting authorized.

## Changes and validation

- New article: `app/letters/know-where-you-came-from-then-keep-going/page.tsx` (body copied verbatim).
- Letters index: feature Letter 002 while retaining Letter 001 and introduction.
- Homepage: replace the featured invitation, preserve books-first hierarchy.
- Sitemap: add the new canonical route.
- CI, deployment, live HTTP readback, and mobile visual QA must be reported as completed only when actually observed.

## Build issue and bounded mitigation

The first PR workflow run `43252042090` passed public audit, content safeguards, typecheck and lint, but Next.js 16.3.1 Turbopack failed while resolving an existing `next/font/google` Source Sans 3 font import (`@vercel/turbopack-next/internal/font/google/font`). No changed Letter code or CSS appeared in the error. The `package.json` build command was switched to the supported `next build --webpack` fallback for validation and deployment, preserving source fonts, branding and page layout; this is a bounded toolchain repair rather than a design change. The workaround is subject to CI verification and may be revisited under a separate dependency-maintenance change.

## Release receipt

Website PR #54: https://github.com/darrendang/darrendang-com/pull/54

First CI run failed as above. Follow-up validation and deployed live readback remain pending.
