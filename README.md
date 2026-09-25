# DarrenDang.com

Source for **DarrenDang.com — the place where Darren's ideas live**.

The site is a long-term intellectual platform for books, ideas, writing, talks, and related media. The current public direction is **human- and books-first**: lived experience and the five-book journey are the primary doorway, with **The Way** introduced as the larger pattern that emerged through them.

## Public book state snapshot — September 14, 2026

- **Book 1 — _For Those Who Come After Us — A Life in Lessons_** — **Published**
- **Book 2 — _Wisdom Has No Rank_** — **Final Proof**
- **Book 3 — _D.O.T.S._** — **Physical Proof Ordered**
- **Book 4 — _The Making of The Way: How Conversation Becomes Discovery_** — **In Development**
- **Book 5 — _The Way Forward_** — **In Development**

Books 1–3 remain **The Path Forward** trilogy. Book 1 is published in eBook, paperback, hardcover, and audiobook formats. Book 2's English manuscript is locked and its current print package has passed KDP digital preview; physical proof review remains pending and the package is not yet Gold/Frozen. Book 3 v6.5.4 has passed local QA and KDP Previewer, with the physical proof ordered and pending review. Book 4 is publicly positioned as the making story behind the books and The Way. Book 5 is publicly positioned as the handoff to the reader: what will you do with what you inherit, learn, and discover?

The current reader journey is:

**Lived experience → stories and books → recurring patterns become visible → The Way emerges → Your Way / The Way Forward → deeper ecosystem**

The public site also connects Ideas, Letters, The Way Papers, The Way in Motion, **The Way in Music**, Shared Wisdom, Generative Dialogue, D.O.T.S., and the public-facing Dang Genome.

## Public current-state authority

For the public website, `main` is the production implementation source of truth. Current website routing and public-state framing must agree with `docs/CURRENT_PUBLIC_STATE_2026-09-22.md` and the applicable canon-control records in `00_Canon_Control/`.

Exact book/manuscript/production status remains governed by the scoped source repositories and central cross-project authority rather than this README or a dated website snapshot.

Historical decision records remain provenance, but must be explicitly marked superseded when later public-state decisions replace them.

## Production architecture

- Domain: `darrendang.com`
- Registrar / DNS: Spaceship
- Hosting: GitHub Pages
- Deployment: GitHub Actions
- Front end: Next.js + TypeScript, static export
- Structured content: Sanity, read at build time where applicable

## Local development

```bash
npm install
npm run dev
```

## Validate the public repository

```bash
npm run audit:public
npm run typecheck
npm run lint
npm run build
npm run export:check
```

## Deployment status

Pushes and pull requests run validation CI. Pushes to `main` also run the production GitHub Pages build and deployment workflow; manual workflow dispatch remains available when needed.

## Repository policy

This is a public deployment repository. It contains only public-safe website code, approved public assets, and publishable content. Private project strategy, source documents, credentials, personal information, unpublished manuscripts, and confidential material are maintained separately and must never be committed here.

## Copyright and reuse

Public visibility does not make this repository open source. Unless a file explicitly says otherwise, the source code, written content, visual identity, book artwork, and other materials are copyright © 2026 Darren Dang. All rights reserved. No license to copy, redistribute, republish, or create derivative works is granted by publication of this repository.
