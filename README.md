# DarrenDang.com

Source for **DarrenDang.com — the place where Darren's ideas live**.

The site is being built as a long-term intellectual platform for ideas, writing, books, talks, and related media. *For Those Who Come After Us — A Life in Lessons* is the first major published artifact within that larger body of work.

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

The repository is intentionally **pre-launch**. Pushes and pull requests run CI, but GitHub Pages deployment remains manual until the public launch quality gate is approved.

## Repository policy

This is a public deployment repository. It contains only public-safe website code, approved public assets, and publishable content. Private project strategy, source documents, credentials, personal information, and unpublished/confidential material are maintained separately and must never be committed here.

## Copyright and reuse

Public visibility does not make this repository open source. Unless a file explicitly says otherwise, the source code, written content, visual identity, book artwork, and other materials are copyright © 2026 Darren Dang. All rights reserved. No license to copy, redistribute, republish, or create derivative works is granted by publication of this repository.
