# DarrenDang.com — Style & Accessibility Guardrails

**Status:** Active implementation guardrail  
**Added:** 2026-09-04  
**Updated:** 2026-09-04 after full-site contrast audit  
**Origin:** Generative Dialogue and Books-page readability corrections

## Readability is a release requirement

Decorative brand treatments must never reduce text legibility. If a passage is intended to be read, its rendered foreground color must remain visibly distinct from its background in the actual browser, not merely appear correct in a source CSS declaration.

## The failure mode we must not repeat

Two live-page corrections exposed the same underlying risk:

1. On **Generative Dialogue**, emphasized serif text rendered nearly ivory on an ivory background because generic/shared rendering rules still affected the browser output even after a darker `color` declaration was added.
2. On **Books**, the shared `.book-quote` component itself defaulted to `var(--ivory)`, even though it is used on light interior pages. This made the quote text nearly disappear against the paper background.

The second issue revealed the systemic root cause: a shared component had a dark-surface text color as its default and relied on individual pages to correct it. That direction is now reversed. **Shared readable components default to the light-page-safe treatment; dark sections must opt into the light text treatment explicitly.**

## Governing contrast rule

The visual system has two different gold roles:

- **Bright legacy gold `#C79A45`** — borders, rules, dots, stars, decorative accents, and readable text on dark/navy fields.
- **Readable legacy gold `#7A5C21`** — meaningful text on ivory, paper, sand, and other light surfaces.

Approximate WCAG contrast against the main light surfaces:

- `#C79A45` on `#FBF8F2`: ~**2.43:1** — not sufficient for normal readable text.
- `#7A5C21` on `#FBF8F2`: ~**5.86:1** — suitable for normal readable text.
- `#7A5C21` on `#F5EFE4`: ~**5.43:1**.
- `#7A5C21` on `#F8F3EB`: ~**5.62:1**.

Therefore, **never use bright legacy gold as normal body, label, quote, or other meaningful text on a light surface merely because it is the brand gold.** Preserve the brighter gold in non-text accents or on dark fields.

## Shared-component rules

1. **Readable components default for the light surface.** Shared classes such as `.book-quote` must default to a dark readable color, because most interior content sits on paper/ivory.
2. **Dark surfaces are explicit exceptions.** `.navy`, `.book-film`, `.book-song`, `.brand-hero`, `.final`, and similar dark fields must explicitly opt into ivory/light quote text.
3. **Do not rely only on `color`.** For critical emphasis, protect `-webkit-text-fill-color` as well when browser text-fill or clipping can affect rendering.
4. **Do not use reduced opacity for readable text.** Avoid inherited opacity, translucent foregrounds, masks, filters, blend modes, background-clipped text, or text shadows that reduce contrast.
5. **Load final contrast guards last.** `app/site-contrast.css` is the final global stylesheet and exists specifically to protect legibility from the cascade.
6. **Page-specific rules may be stronger, never weaker.** `app/generative-dialogue.css` keeps its specific protection, while the sitewide layer supplies the minimum readable baseline.

## Sitewide audit result — September 4, 2026

The globally loaded DarrenDang.com stylesheets and shared page patterns were reviewed for the failure class that caused the Generative Dialogue and Books problems.

Corrections implemented:

- `.book-quote` no longer defaults to ivory on light pages.
- Dark-surface quote exceptions are explicit rather than assumed.
- A sitewide `--gold-text` token (`#7A5C21`) is defined for readable legacy-gold text on light surfaces.
- Known meaningful bright-gold-on-light selectors are remapped to `--gold-text`, including progression text, book movement labels, framework-stage labels/numbers, map-stage numbers, and related sequence indicators.
- Bright `#C79A45` remains available for borders, rules, icons, decorative elements, and dark-background text.
- `app/site-contrast.css` is loaded after all other global styles.

## Automated regression protection

`scripts/check-contrast-regressions.mjs` runs in CI and verifies that:

- `site-contrast.css` remains the final global CSS import;
- shared `.book-quote` cannot regress to an ivory default;
- the readable-gold token and key sitewide protection selectors remain present;
- the readable-gold token maintains at least 4.5:1 contrast against the site's primary light surfaces.

This check does not replace visual review. It prevents the known regression class from silently returning.

## Visual review remains required

A successful typecheck, lint, static build, and automated contrast guard do not prove that every rendered page is visually correct. Any new or materially changed pull quote, lead statement, hero text, gold-on-light treatment, or shared typography component should receive a browser-level readability check on desktop and mobile.

## Governing rule

> **Never trade legibility for atmosphere. Brand color is an accent system; readable content must remain readable first.**

When visual design and text contrast conflict, preserve the Dark Legacy Gold aesthetic through borders, rules, background fields, spacing, typography, and darker brand-compatible text—not by fading the words themselves.
