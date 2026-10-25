# Book 1 IngramSpark purchase-link update

**Date:** 2026-10-25
**Authority:** Darren requested Book 1 ISBN/purchase-link ecosystem updates, except Traditional Chinese, then supplied the original Excel workbook with “use this file instead”.
**Scope:** routine purchase-catalog maintenance under the October 18 approved language → format → seller interface.

## Verified destinations

All ten exact Ingram URLs in the supplied workbook were opened. Each displayed the expected language/title, binding, ISBN, author price and Buy Now control. Nine hardcover offers are $18.88 USD; English paperback is $12.88 USD, before shipping and applicable tax. Brazilian Portuguese's source price cell is blank; its $18.88 price comes from the live product page.

| Language | Binding | ISBN |
| --- | --- | --- |
| English | Paperback | 979-8-952578-00-5 |
| English | Hardcover | 979-8-952578-01-2 |
| Vietnamese | Hardcover | 979-8-952578-06-7 |
| Spanish | Hardcover | 979-8-952578-07-4 |
| Korean | Hardcover | 979-8-952578-08-1 |
| Japanese | Hardcover | 979-8-952578-10-4 |
| French | Hardcover | 979-8-952578-11-1 |
| German | Hardcover | 979-8-952578-12-8 |
| Brazilian Portuguese | Hardcover | 979-8-952578-26-5 |
| Italian | Hardcover | 979-8-952578-27-2 |

`content/bookstore.ts` carries the exact public destinations. The seven added languages appear in both shared purchase surfaces without changing their components or reader journey. Existing complete English/Vietnamese destinations are unchanged and reverified October 25. Other retailer offers retain their actual October 18 verification dates.

## Limits and follow-up

- Traditional Chinese is excluded from this update.
- Vietnamese and Spanish paperback URLs remain blank in the supplied workbook; prices do not justify new buttons. No replacement Italian paperback ISBN is supplied.
- Spanish product 07-4 has the correct Spanish title/description and hardback identity but an erroneous French subtitle in the retailer heading. Its ISBN and active offer were verified. The website uses the approved Spanish subtitle; Ingram metadata correction remains separate.
- Product-page observation does not establish which production PDF is served, approve a new Gold Master, or change historical source-project release controls. No order/payment was performed.
- The private workbook, unrelated worksheets, account data and source receipt are not committed to this public repository.

## Validation and deployment

Local catalog tests (6/6), public audit, typecheck, lint, production build and export checks pass. Five pre-existing stylesheet lint warnings remain. Use the resulting PR/checks and main's Pages workflow for implementation/deployment evidence, then inspect the live `/buy/` chooser and Book 1 embedded chooser. Publication of these purchase-link changes is within Darren's explicit ecosystem update request; underlying manuscript, cover, ISBN-assignment and Gold scopes remain unchanged.
