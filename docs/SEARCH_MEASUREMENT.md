# Search measurement without a paid connector

Google Search Console and Bing Webmaster Tools remain the account-side sources for indexing and performance. This release does not establish ownership, create analytics accounts, activate subscriptions, or claim access to private reports.

## Owner verification

1. Open the existing DarrenDang.com property in Google Search Console. Confirm ownership and that `https://darrendang.com/sitemap.xml` was read without errors.
2. Inspect the homepage, `/about/`, `/books/`, `/books/for-those-who-come-after-us/`, `/dots/`, and both `/papers/` detail pages. Compare the Google-selected canonical to the live canonical. Request indexing where the indexed content is stale.
3. Open the verified site in Bing Webmaster Tools. Confirm sitemap processing and inspect the same pages. Review AI Performance where the account exposes it.
4. Export a settled 28-day baseline for pages, queries, clicks, impressions and CTR, with branded and nonbranded queries distinguished. Record Bing AI citations separately from clicks; citations are not visits or conversions.
5. Review referral traffic and meaningful actions through an existing, authorized analytics property. No tracker is deployed by this release: a property/stream and processing notice must be selected before connecting one. Book-seller clicks and speaking/contact actions are the useful outcomes to measure.

## What the website now measures mechanically

- `npm run export:check` checks all sitemap pages for unique metadata, canonical and sharing URLs, local preview images, article/breadcrumb markup, image files, and protected noindex routes.
- `out/search-manifest.json` contains public URLs, semantic content fingerprints, known modification dates and the deployed commit. It contains no visitor or contributor data.
- `content/search-history.json` is the October 23 bootstrap: every listed page received search/structured metadata changes in this release. Its date is a page-update date, not a book release date or article publication date.
- Later builds preserve known dates when the fingerprint is unchanged. They compare the prior live manifest to avoid advancing dates for bundle-only rebuilds. If no prior or matching baseline is available, unknown dates are omitted.
- Changed/removed public URLs are queued for IndexNow. Notification runs only after the expected commit is live. HTTP 200 means received; HTTP 202 means received with key verification pending. Neither means indexed.
- Each deployment retains the IndexNow receipt as an Actions artifact for 30 days. The notification step warns without rolling back a successful website deployment if the search endpoint or live verification is unavailable.

## Remaining evidence gaps

Actual Google/Bing index coverage, rankings, clicks, impressions, AI citations and field Core Web Vitals require their native reports. Public search results and successful HTTP responses cannot substitute for those reports. GSC Wizard was excluded under Darren's instruction to avoid paid subscriptions.

OpenAI search and training controls remain separate. The existing public robots policy is preserved; this release does not change training permissions or add speculative AI-specific files.
