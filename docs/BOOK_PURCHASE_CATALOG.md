# Purchase catalog maintenance

Approved website behavior is recorded in `00_Canon_Control/BOOK_PURCHASE_FLOW_CANON_2026-10-18.md`; current public-state navigation is `docs/CURRENT_PUBLIC_STATE_2026-10-18.md`.

The reusable buyer interface lives at `/buy/` and on Book 1's page at `#buy`.
`content/bookstore.ts` holds public product destinations; `BookPurchase` renders them.

## Add a language or book

1. Confirm the book/edition is released and its public product identity is approved.
2. Open each exact product page and confirm language, binding, identity, price (where displayed), and buying availability.
3. Add a `StoreBook` or `BookEdition` entry with only its available formats and exact HTTPS product URLs. Record `verifiedOn`.
4. Use an author price only for a controlled Ingram link. Keep shipping/tax language. Other retailer buttons let the retailer display its current price.
5. Run `npm run check:bookstore`, the repository validation suite, and browser-check the new selection before release.

Books without any available offers stay out of the book picker. A stale or unsupported format falls back within the selected language. New books automatically appear in the shared buyer picker once their offers are added; do not add guessed links or label a production candidate as purchasable.

## Share links and QR codes

Use `/buy/?book=book1&lang=vi&format=hardcover` for Vietnamese hardcover, or the corresponding language/format parameters. The same parameters work on Book 1's page. Selection updates preserve other URL parameters. This domain-owned destination can remain stable when retailers change. Keep existing printed retailer QR codes functional where possible; do not replace their destinations by editing an unrelated link.

## October 18 purchase scope

- English: Ingram hardcover $18.88 USD and paperback $12.88 USD; exact Amazon print, Kindle, Apple ebook, Audible, Apple audiobook and Amazon audiobook destinations.
- Vietnamese: Ingram hardcover $18.88 USD. Paperback is forthcoming and has no active purchase button.
- Apple ebook uses product `6804961980`, sold by Darren Dang under Dang Legacy Press and linked from Apple's audiobook page. The separate Draft2Digital listing is preserved at the provider and is not duplicated in the buyer interface.
- Exclude the older unavailable Vietnamese Friends link. Raw Gmail messages, attachment identifiers and private receipts remain outside this public repository.
- Other language and book release states are not changed by this interface. Existing covers, manuscripts, previews, family letters, and primary navigation are preserved.

Public price observations are as of October 18, 2026. Checkout, local delivery eligibility, payment, and order completion are controlled by each seller.
