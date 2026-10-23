import test from "node:test";
import assert from "node:assert/strict";
import { semanticHash, modifiedDate, isPublicUrl, validateManifest, meta } from "./search-utils.mjs";
import { pageMetadata, breadcrumbsFor } from "../lib/seo.ts";

test("A bundle-only rebuild does not invent a new content modification date", () => {
  const html = '<title>Example</title><meta name="description" content="A useful idea"/><h1>Example</h1><main><p>Actual text</p></main><script src="bundle-ONE.js"></script>';
  const hash = semanticHash(html);
  assert.equal(hash, semanticHash(html.replace("bundle-ONE", "bundle-TWO")));
  assert.notEqual(hash, semanticHash(html.replace("Actual text", "Revised argument")));
  assert.equal(modifiedDate(hash, {hash,lastModified:"2026-10-14"}, null, "2026-10-23"), "2026-10-14");
  assert.equal(modifiedDate(hash, null, null, "2026-10-23"), undefined);
});

test("Unknown dates stay absent, known baseline dates survive, and real revisions advance", () => {
  assert.equal(modifiedDate("new", {hash:"old"}, null, "2026-10-23"), "2026-10-23");
  assert.equal(modifiedDate("known", null, {hash:"known",lastModified:"2026-10-14"}, "2026-10-23"), "2026-10-14");
});

test("Search notifications reject external, transactional and private destinations", () => {
  for (const url of ["https://example.org/", "https://darrendang.com/review/", "https://darrendang.com/share/", "https://darrendang.com/buy/?format=ebook", "https://darrendang.com/books/wisdom-has-no-rank/test-child-map/", "https://darrendang.com/books/the-making-of-the-way/architecture/"]) assert(!isPublicUrl(url), url);
  assert(isPublicUrl("https://darrendang.com/papers/building-agency-before-agents/"));
  assert.equal(validateManifest({version:1,pages:[{url:"https://example.org/",hash:"a".repeat(64)}]}), null);
});

test("Social metadata uses the page URL, preserves article dates and custom artwork", () => {
  const value = pageMetadata("/letters/example/", {title:"A letter", description:"Its meaning", robots:{index:false}, openGraph:{type:"article",publishedTime:"2026-10-14",images:[{url:"/images/approved.jpg"}]}});
  assert.equal(value.openGraph.url, "/letters/example/");
  assert.equal(value.openGraph.publishedTime, "2026-10-14");
  assert.deepEqual(value.twitter.images, [{url:"/images/approved.jpg"}]);
  assert.equal(value.robots.index, false);
});

test("Book 5 and nested excerpts retain the books-first breadcrumb hierarchy", () => {
  assert.deepEqual(breadcrumbsFor("/the-way-forward/prologue/", "Prologue").map(x=>x.path), ["/", "/books/", "/the-way-forward/", "/the-way-forward/prologue/"]);
  assert.deepEqual(breadcrumbsFor("/books/dots/the-idea-that-did-not-belong/", "Selected reading").map(x=>x.path), ["/", "/books/", "/books/dots/", "/books/dots/the-idea-that-did-not-belong/"]);
});

test("Metadata entities are decoded without corrupting apostrophes or query separators", () => {
  assert.equal(meta('<meta name="description" content="Darren&#x27;s books &amp; ideas"/>', "description"), "Darren's books & ideas");
});
