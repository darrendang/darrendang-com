# Book purchase flow — approved website baseline
**Date:** 2026-10-18
**Status:** CANONICAL WEBSITE DECISION / PUBLISHED IMPLEMENTATION
**Approval:** Darren approved PR #46 merge and deployment, then directed “canonize and sync all, resolve stale references”.
**Scope:** reader purchase flow, catalog maintenance and website routing; no book-source or production promotion.

## Approved behavior
The shared purchase interface at [DarrenDang.com/buy/](https://darrendang.com/buy/) and Book 1's `#buy` section lets readers choose a language, format and seller. Books and language editions appear only when verified purchase offers are available. The same interface accommodates later books in the series.

`content/bookstore.ts` owns public purchase configuration. `components/BookPurchase.tsx` renders it. `docs/BOOK_PURCHASE_CATALOG.md` governs maintenance. Unknown or unavailable format selections fall back within the selected language. Edition query parameters support stable website-owned share/QR destinations.

## Verified October 18 offers
- English Ingram hardcover: $18.88 USD; paperback: $12.88 USD.
- English exact Amazon print, Kindle, Apple ebook, Audible, Apple audiobook and Amazon audiobook destinations.
- Vietnamese Ingram hardcover: $18.88 USD. Vietnamese paperback has no verified active purchase link and is shown as forthcoming.
- Shipping and applicable tax are added at Ingram checkout. Other retailers display their own current prices. These observations are dated commercial configuration, not permanent price guarantees.
- The selected direct Apple ebook is product `6804961980`; the separate provider listing is preserved.
- The unavailable older Vietnamese Friends link is excluded.

Future languages, bindings, countries and books require exact current product identity and active offers. Platform capability or a production candidate alone does not establish availability. Do not promise all formats for all languages.

## Release evidence
Implementation: `03aaf04e758c8dc088f6f5e0119a82f02c00a047`.
Merged PR: [#46](https://github.com/darrendang/darrendang-com/pull/46).
Production merge: `ca87da379c86bf9cc0ae915875c83d8a7ccd7eb7`.
[Validation](https://github.com/darrendang/darrendang-com/actions/runs/39169434995) and [GitHub Pages deployment](https://github.com/darrendang/darrendang-com/actions/runs/39169434913) succeeded. Live language/format choices, exact links, Book 1 entry point and mobile layout were verified. No purchase/payment was performed.

## Authority and preserved boundaries
This supplements the books-first baseline and existing primary navigation. It does not authorize changing manuscripts, translations, covers, ISBN assignments, Gold Masters, retailer accounts, book release status or private evidence visibility. Source projects retain those authorities. Gmail evidence and private source material remain outside this public repository.

Private ecosystem canon and cross-project discovery resolve through `darrendang/dang-genome/00_Canon_Control/WEBSITE_BOOK_PURCHASE_CANON_SYNC_2026-10-18.md`. This public control records the website decision; the central approved private record completes ecosystem canon persistence.
