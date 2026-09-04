# DarrenDang.com

Source for **DarrenDang.com — the place where Darren's ideas live**.

The site is a long-term intellectual platform for ideas, writing, books, talks, and related media. The current public direction keeps the platform idea-first while making **The Path Forward** trilogy visible and acknowledging a separate companion work in development:

- **Book 1 — _For Those Who Come After Us — A Life in Lessons_** — preparing for publication
- **Book 2 — _Wisdom Has No Rank_** — in final editorial preparation
- **Book 3 — _D.O.T.S._** — in advanced development
- **Companion work — _The Making of The Way: How Conversation Becomes Discovery_** — in development; connected to the public idea of Generative Dialogue

Books 1–3 remain the bounded **The Path Forward** trilogy. _The Making of The Way_ is presented as a companion work rather than an extension of the trilogy architecture. Its public posture is presence without launch pressure: no preorder, countdown, or public release-date commitment.

The books are major expressions of a larger connected system of thought, not the container for the DarrenDang.com brand.

## Production architecture

- Domain: `darrendang.com`
- Registrar / DNS: Spaceship
- Hosting: GitHub Pages
- Deployment: GitHub Actions
- Front end: Next.js + TypeScript, static export
- Structured content: Sanity, read at build time

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
