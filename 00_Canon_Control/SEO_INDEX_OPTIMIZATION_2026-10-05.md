# DarrenDang.com SEO Index Optimization — 2026-10-05

**Status:** CANONICAL / PUBLIC IMPLEMENTATION CONTROL  
**Approved by:** Darren Dang  
**Approval date:** 2026-10-05 Pacific  
**Scope:** Technical search discoverability and index coverage only; no reader-journey redesign

## Governing boundary

This optimization preserves the approved books-first reader journey:

**Lived experience → stories and books → recurring patterns become visible → The Way emerges → Your Way / The Way Forward → deeper ecosystem**

It does not change primary navigation, homepage sequencing, book progression, visible design, publication permissions, or source-project authority.

## Approved implementation

1. Expand the XML sitemap to include all current public, reader-complete Idea pages.
2. Add currently public and indexable book excerpt/case-study routes that were missing from the sitemap.
3. Add the public The Way in Music route to the sitemap.
4. Remove the stale blanket `lastModified` date rather than assert an inaccurate modification date for every URL.
5. Strengthen the root Darren Dang `Person` entity with the approved public headshot and official OCERS profile as an external identity reference.
6. Add `ProfilePage` structured data to the About page.
7. Add `Book` and `BreadcrumbList` structured data to Book 1 using public website, Amazon, and Google Play identifiers already associated with the published work.
8. Add a public IndexNow verification key so participating search engines can be notified directly when important public URLs change.

## Index-policy guardrails

- Private review/action routes remain noindex.
- Thank-you/transactional routes remain noindex where already governed.
- Private Book 4 architecture remains noindex.
- The Book 2 test-child-map route remains noindex under its existing explicit control.
- The paused `/share/` intake route remains excluded from the sitemap in accordance with prior contribution-governance decisions.
- Sitemap inclusion does not create publication permission for unpublished/private material.
- The IndexNow key is a public verification token, not a credential or secret, and must contain no private authorization material.

## Authority and provenance

Website implementation authority remains current `main` of `darrendang/darrendang-com`.

Underlying book facts and publication status remain governed by their source repositories. This control changes discoverability metadata only and does not modify book canon.

**Memory provides continuity. GitHub determines current state.**
