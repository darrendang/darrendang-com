# DarrenDang.com — Style & Accessibility Guardrails

**Status:** Active implementation guardrail  
**Added:** 2026-09-04  
**Origin:** Generative Dialogue readability correction

## Readability is a release requirement

Decorative brand treatments must never reduce text legibility. If a passage is intended to be read, its rendered foreground color must remain visibly distinct from its background in the actual browser, not merely appear correct in a source CSS declaration.

## Avoid the failure mode that affected Generative Dialogue

The Generative Dialogue page exposed a CSS cascade/rendering failure in which emphasized serif text appeared almost ivory on an ivory background even though a darker `color` value had been assigned. The reliable correction required resetting browser text-fill and rendering effects and ensuring the page-specific guard loaded after generic styles.

For future emphasis text on light/ivory backgrounds:

1. **Do not rely only on `color`.** If shared styles, gradients, clipping, masks, or browser-specific text-fill rules may be present, explicitly verify `-webkit-text-fill-color` as well.
2. **Do not use reduced opacity for readable text.** Avoid inherited `opacity`, translucent foreground colors, masks, filters, blend modes, or background-clipped text unless the rendered result has been visually verified.
3. **Use high-specificity page/component styles for critical emphasis.** Do not assume generic `.lead`, `.book-quote`, or similar shared classes will remain readable in every context.
4. **Load corrective/page-specific readability rules after generic styles** when they exist specifically to protect legibility from the cascade.
5. **Preserve brand hierarchy without sacrificing contrast.** On ivory/light backgrounds, use the darker legacy-gold text treatment (`#7A5C21`) for readable emphasized passages; reserve the brighter legacy gold (`#C79A45`) for rules, borders, icons, and accents unless contrast has been verified.
6. **Verify the rendered browser output, not just the build.** A successful typecheck/lint/build does not prove visual accessibility. Any new or materially changed pull quote, lead statement, hero text, or gold-on-light treatment should receive a visual contrast/readability check on desktop and mobile.

## Current protective implementation

`app/generative-dialogue.css` is intentionally imported last from `app/layout.tsx` and explicitly resets:

- `color`
- `-webkit-text-fill-color`
- `opacity`
- background clipping
- masks
- filters
- blend mode
- text shadow

This pattern should be reused when a critical readable passage is vulnerable to shared styling, rather than reintroducing decorative effects that can wash the text out.

## Governing rule

> **Never trade legibility for atmosphere. Brand color is an accent system; readable content must remain readable first.**

When visual design and text contrast conflict, preserve the Dark Legacy Gold aesthetic through borders, rules, background fields, spacing, typography, and darker brand-compatible text—not by fading the words themselves.
