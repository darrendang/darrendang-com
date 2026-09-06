---
name: website-public-safety
description: Run a public-safety and publication-boundary review for DarrenDang.com before a PR is treated as merge-ready, checking private leakage, approval state, book/public metadata, deterministic audits, and deployment implications.
---

# Website Public Safety

1. Read `AGENTS.md` and `README.md`.
2. Establish the branch/baseline and requested public change.
3. Resolve public authority for any changed factual/book/biographical/philosophical content that is not already clearly public and unchanged.
4. Inspect the diff for:
   - private/internal source material;
   - credentials/secrets/local paths/internal IDs;
   - unpublished manuscript text or strategy;
   - stale/invented book metadata, dates, prices, availability, endorsements, testimonials, or status;
   - unapproved claims of canon/publication;
   - deployment/workflow changes; and
   - content imported from a private repo without an explicit public decision.
5. Run:

```bash
npm run audit:public
npm run typecheck
npm run lint
npm run build
npm run export:check
```

6. For visible/UI changes, require rendered browser validation at representative desktop/mobile widths.
7. Invoke/read the public-safety and website reviewer findings when available.
8. Classify final readiness as `BLOCKED`, `REVIEW_REQUIRED`, or `READY_FOR_HUMAN_MERGE_REVIEW`.

This skill never merges or deploys. A merge to `main` remains a separate explicit publication/deployment decision.
