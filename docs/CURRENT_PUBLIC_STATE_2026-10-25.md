# DarrenDang.com — Book 1 purchase catalog checkpoint

**Date:** 2026-10-25
**Role:** derived implementation navigation; current main and exact deployment evidence remain controlling.

The [Book 1 catalog update](../00_Canon_Control/BOOK1_PURCHASE_LINKS_UPDATE_2026-10-25.md) adds seven verified hardcover language offers to the existing English and Vietnamese purchase options: Spanish, Korean, Japanese, French, German, Brazilian Portuguese and Italian. The shared `/buy/` hub and Book 1 chooser both consume `content/bookstore.ts`.

Nine languages now have an Ingram hardcover offer at $18.88 USD. English also retains its $12.88 Ingram paperback and previous retailer, ebook and audiobook options. Shipping and applicable tax are additional. Ten exact Ingram product pages were verified October 25; no purchase or payment was performed.

Traditional Chinese remains unchanged. Vietnamese and Spanish paperback checkout URLs remain absent from the supplied workbook. The Spanish product page has the correct ISBN/title/language and an incorrect French subtitle in its retailer heading; the website preserves the approved Spanish subtitle and records the platform follow-up in the catalog control.

The books-first reader journey, existing artwork, protected family letters, manuscripts, production packages, ISBN assignments and Gold controls are unchanged. This supplements the October 18 purchase-flow baseline; earlier checkpoints remain history.

Local validation passed: six catalog tests, public audit, typecheck, lint (five existing stylesheet warnings), production build and static-export SEO checks. Repository checks and deployment/live state must be established from this change's exact GitHub Actions run and the deployed chooser; this checkpoint does not infer deployment from a commit.

PR #48 merged as `cc6206a2d512e528bb8e0c199018790c83308d69`. Validation `40205737623` and Pages deployment `40205737384` succeeded. All nine language selections and their exact Ingram destinations were checked on the live hub, together with the Portuguese selection on the embedded chooser. A follow-up replaces the old English/Vietnamese-only availability sentence above that chooser; later source/deployment refs must be verified separately.
