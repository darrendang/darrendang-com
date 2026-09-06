# Codex Operating Instructions — DarrenDang.com

This is a **public deployment repository** for DarrenDang.com. Read `README.md` first.

The repository may contain only public-safe website code, approved public assets, and publishable content. Private project strategy, unpublished manuscripts, source evidence, credentials, sensitive family material, employment-confidential material, and other private Dang Genome content must never be committed here.

## Critical deployment boundary

Pushes to `main` trigger production GitHub Pages build/deployment according to the current repository workflow.

Therefore, for normal Codex work:

- use a feature/proposal/fix branch or worktree;
- do not push directly to `main`;
- do not merge a PR;
- do not invoke a production deployment; and
- do not infer publication permission from canonical/private availability

unless Darren explicitly authorizes the exact public action.

A successful build or completed implementation does not authorize publication.

## Public authority preflight

Before changing public-facing content:

1. read `README.md`;
2. identify the public statement/asset/metadata being changed;
3. resolve the controlling approved public expression or publication decision from the private ecosystem when needed;
4. distinguish CANONICAL/private from PUBLIC-APPROVED/PUBLISHED; and
5. if publication permission cannot be established from the task and available governed artifacts, implement only public-safe structural/code work or stop and report the boundary.

Never copy private content into this repository simply to make it available to the build.

## Architecture

Current production architecture described by `README.md`:

- Next.js + TypeScript;
- static export;
- Sanity read at build time;
- GitHub Pages;
- GitHub Actions deployment.

Preserve the current architecture unless a deliberate architecture change is approved.

## Required validation

For consequential website changes, run the repository-defined checks:

```bash
npm run audit:public
npm run typecheck
npm run lint
npm run build
npm run export:check
```

Run the smallest relevant subset during iteration, then run the full release-facing set before presenting the change as ready for review.

If a required check cannot run, report `NOT_RUN`/`UNAVAILABLE`; do not infer success.

## Browser / visual QA

For UI changes, validate rendered behavior rather than relying on source inspection alone.

Check, as relevant:

- desktop and mobile layout;
- navigation;
- keyboard/accessibility behavior;
- console/runtime errors;
- broken resources/links;
- metadata/structured data;
- Core Web/obvious performance regressions; and
- visual hierarchy against the established design system.

SEO improvements must not degrade the clean reader experience or visual hierarchy merely to add visible keyword copy.

## Content integrity

Protect:

- The Way / Your Way / The Way Forward hierarchy and wording according to approved public expression;
- The Path Forward trilogy boundary;
- Book 4 as a companion work rather than an accidental fourth trilogy movement;
- current book titles/subtitles/publisher/format metadata;
- canonization/publication separation;
- public/private separation; and
- the site's idea-first posture.

Do not invent release dates, testimonials, availability, prices, endorsements, trademarks, biography facts, or book statuses from stale context.

## Appropriate Codex work

Strong uses include:

- Next.js/TypeScript implementation;
- component refactoring;
- static-generation/build debugging;
- SEO technical implementation;
- structured data;
- accessibility;
- responsive/browser QA;
- performance;
- link and metadata validation;
- public/private leak detection;
- content drift checks against approved public controls; and
- CI/audit tooling.

## Git / review

For consequential changes:

1. inspect current branch/status;
2. implement on non-main branch/worktree;
3. run deterministic checks;
4. inspect final diff;
5. use read-only specialist review for public-safety/SEO/accessibility when useful;
6. open a PR; and
7. keep merge/deploy as a separate explicit human action.

## Completion report

Report:

- objective/scope;
- public authority/specification consulted;
- files changed;
- validation commands/results;
- browser QA performed;
- public/private risk findings;
- unresolved issues;
- whether publication was authorized; and
- whether deployment actually occurred.

If no deployment occurred, say so explicitly.
