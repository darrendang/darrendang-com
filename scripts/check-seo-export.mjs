import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, access } from "node:fs/promises";
import { siteUrl, attribute, meta, canonicalUrl, schemaObjects, validateManifest } from "./search-utils.mjs";

const manifest = validateManifest(JSON.parse(await readFile("out/search-manifest.json", "utf8")));
assert(manifest, "Search manifest must contain only governed public URLs.");
const titles = new Set(), descriptions = new Set();
let responsive = 0;
for (const page of manifest.pages) {
  const pathname = new URL(page.url).pathname;
  const html = await readFile(`out${pathname}index.html`, "utf8");
  const title = html.match(/<title>([\s\S]*?)<\/title>/)?.[1];
  const description = meta(html, "description");
  assert(title && !titles.has(title), `Missing/duplicate title: ${page.url}`); titles.add(title);
  assert(description && !descriptions.has(description), `Missing/duplicate description: ${page.url}`); descriptions.add(description);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `One H1: ${page.url}`);
  assert.equal(canonicalUrl(html), page.url);
  assert(!meta(html, "robots").includes("noindex"), `Sitemap must not contain noindex: ${page.url}`);
  assert.equal(meta(html, "og:url"), page.url, `Page-specific Open Graph URL: ${page.url}`);
  assert(meta(html, "og:title") && meta(html, "twitter:title"), `Sharing title: ${page.url}`);
  for (const name of ["og:image", "twitter:image"]) {
    const url = new URL(meta(html, name), siteUrl);
    assert.equal(url.origin, siteUrl, `Approved local preview: ${page.url}`);
    await access(`out${url.pathname}`);
  }
  const schemas = schemaObjects(html);
  const types = schemas.flatMap(s => s["@graph"] ?? [s]).map(s => s["@type"]);
  if (pathname !== "/") assert.equal(types.filter(t => t === "BreadcrumbList").length, 1, `One breadcrumb schema: ${page.url}`);
  if (pathname.startsWith("/papers/") && pathname !== "/papers/") assert(types.includes("Article"), `Paper article schema: ${page.url}`);
  for (const [tag] of html.matchAll(/<img\b[^>]*>/g)) {
    assert(/\balt=/.test(tag), `Image alt attribute: ${page.url}`);
    const candidates = attribute(tag, "srcSet").split(",").map(s => s.trim().split(" ")[0]).filter(s => s.includes("/responsive/"));
    if (candidates.length) responsive++;
    for (const candidate of candidates) await access(`out${candidate}`);
  }
}
for (const path of ["letters/bo-oi", "letters/me-oi", "letters/bo-me", "letters/the-way-was-us"]) await access(`out/${path}/index.html`);
for (const path of ["review", "review/action", "share/thank-you", "books/the-making-of-the-way/architecture", "books/wisdom-has-no-rank/test-child-map"]) {
  const html = await readFile(`out/${path}/index.html`, "utf8");
  assert(meta(html, "robots").includes("noindex"), `Preserve noindex boundary: ${path}`);
}
assert(responsive > 0, "Responsive photo candidates must be exported.");
const music = await readFile("out/the-way/music/index.html", "utf8");
const familySong = music.match(/<section\b[^>]*id="nathans-song"[^>]*>([\s\S]*?)<\/section>/)?.[1];
assert(familySong?.includes('src="/audio/Song-The-Way-You-See-Nathan.mp3"'), "Nathan's approved song must remain reachable in its separate family section.");
assert(!/\bauto[Pp]lay\b/.test(familySong), "Nathan's song must never autoplay.");
const recording = await readFile("out/audio/Song-The-Way-You-See-Nathan.mp3");
assert.equal(createHash("sha256").update(recording).digest("hex"), "7a53324183a6b5e42df7d5950f47ec980bbe85b0aecc6ccd8a2ba52944ae625d", "Publish only the exact selected Nathan recording.");
console.log(`SEO export passed: ${manifest.pages.length} public pages, unique metadata, correct sharing URLs/images, article/breadcrumb schemas, protected routes and ${responsive} responsive image instances.`);
