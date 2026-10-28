# Book 1 Traditional Chinese hardcover and Vietnamese paperback purchase offers

**Date:** 2026-10-28
**Authority:** Darren supplied the updated workbook, confirmed the two offers/prices, and requested the website purchase-page update.
**Scope:** purchase catalog and its current-state documentation under the existing October 18 purchase-flow baseline.

| Edition | ISBN | Author price USD | Exact destination |
| --- | --- | --- | --- |
| Traditional Chinese hardcover — 給後來的你們 | 979-8-952578-09-8 | $18.88 | https://shop.ingramspark.com/b/084?params=a0TkOIYRSmZktJR15wR5K0EWOjOERiguwxQ1Qzg3IBa |
| Vietnamese paperback — Dành Cho Những Thế Hệ Mai Sau | 979-8-952578-13-5 | $12.88 | https://shop.ingramspark.com/b/084?params=wH94bg4MZENmdHCYZegRvjpVHjE8EF6RUUmS0k4QwD |

Both pages were opened October 28 and matched to their supplied ISBN, language/title, binding and price, with an enabled Buy Now control. The Chinese page displays HARDBACK / 92 pages; the Vietnamese page displays PAPERBACK / 90 pages. These are retailer observations, not new print-proof or interior-byte approval. No purchase/payment was performed. Prices exclude shipping and applicable tax.

`content/bookstore.ts` adds the Chinese `zh` edition and the Vietnamese paperback format. Vietnamese native labels cover both bindings; the shared “Mua sách” CTA avoids incorrectly calling the paperback a hardcover. Its old forthcoming message is removed. Both `/buy/` and Book 1's embedded chooser consume the same catalog without component or reader-journey changes.

The Spanish hardcover heading was also inspected and now correctly shows “Una Vida en Lecciones”; the October 25 French-subtitle discrepancy is closed. Spanish paperback remains without a supplied link. Other purchase links and their actual verification dates are preserved.

README, catalog maintenance and current-state routing select the October 28 checkpoint; the October 25 record remains historical. Source workbook bytes, unrelated sheets/private data, manuscripts, covers, ISBN allocations and production/Gold controls are not changed or committed publicly. This website-only task does not replace or claim synchronization of the separately designated shared master workbook.

Validation and deployment must be established from the exact change's repository checks, Pages workflow and live chooser readback. The private ecosystem receipt preserves source provenance and resulting refs independently of these public-safe observations.
