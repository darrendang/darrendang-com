# DarrenDang.com

Source for **DarrenDang.com — the place where Darren's ideas live**.

The site is a long-term intellectual platform for ideas, writing, books, talks, and related media. The current public direction is idea-first and rooted in **The Way**, with the books presented as major expressions of the larger body of work.

## Current public book state — September 13, 2026

- **Book 1 — _For Those Who Come After Us — A Life in Lessons_** — **Published**
- **Book 2 — _Wisdom Has No Rank_** — **Final Proof**
- **Book 3 — _D.O.T.S._** — **First Print Proof**
- **Book 4 — _The Making of The Way: How Conversation Becomes Discovery_** — **Collaboration / Provenance Emerging**
- **Book 5 — _The Way Forward_** — **Integration Layer**

Books 1–3 remain **The Path Forward** trilogy. Book 2's manuscript and print Gold Masters are locked, with final physical proof review remaining the print-release gate. Book 3 has reached its first hard-copy proof. Book 4 makes the human–AI collaboration and provenance behind the work increasingly visible. Book 5 integrates the wider body of work without replacing the reader's ownership of what comes next.

The books are expressions of **The Way**, not the container for it. The public site also connects Ideas, Letters, The Way Papers, The Way in Motion, Shared Wisdom, Generative Dialogue, D.O.T.S., and the public-facing Dang Genome.

## Public current-state authority

For the public website, `main` is the production source of truth. Current public status language and route relationships must agree with the live site and `content/seed.ts`. Historical decision records remain provenance, but must be explicitly marked superseded when later public-state decisions replace them.

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