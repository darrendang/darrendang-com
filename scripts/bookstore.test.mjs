import test from "node:test";
import assert from "node:assert/strict";
import { bookstore, availableFormats, purchasableBooks, resolveSelection } from "../content/bookstore.ts";

test("Vietnamese digital deep links stay Vietnamese and fall back to an available binding", () => {
  assert.deepEqual(resolveSelection({ book: "book1", language: "vi", format: "ebook" }), { book: "book1", language: "vi", format: "hardcover" });
});

test("unknown or retired query values resolve to an available edition", () => {
  assert.deepEqual(resolveSelection({ book: "retired", language: "xx", format: "cassette" }), { book: "book1", language: "en", format: "hardcover" });
});

test("the book-specific chooser cannot be redirected to another book", () => {
  assert.equal(resolveSelection({ book: "book2", language: "vi" }, bookstore, "book1").book, "book1");
  assert.equal(resolveSelection({}, bookstore, "not-released"), null);
});

test("a future book and language work without changing the selection implementation", () => {
  const future = { id: "book2", number: 2, title: "Future title", subtitle: "", href: "/books/future/", editions: [
    { language: "ja", label: "日本語", title: "Future Japanese title", subtitle: "", formats: { paperback: [{ retailer: "Example", url: "https://example.com/book", verifiedOn: "2026-10-18" }] } },
  ] };
  assert.deepEqual(resolveSelection({ book: "book2", language: "ja", format: "hardcover" }, [...bookstore, future]), { book: "book2", language: "ja", format: "paperback" });
});

test("unreleased books and empty formats do not acquire purchase buttons", () => {
  const pending = { id: "pending", number: 9, title: "Pending", subtitle: "", href: "/books/", editions: [{ language: "en", label: "English", title: "Pending", subtitle: "", formats: { hardcover: [] } }] };
  assert.deepEqual(availableFormats(pending.editions[0]), []);
  assert.deepEqual(purchasableBooks([pending]), []);
  assert.equal(resolveSelection({}, [pending]), null);
});

test("every shipped destination is a real HTTPS product page on an approved retailer", () => {
  const hosts = new Set(["shop.ingramspark.com", "www.amazon.com", "www.audible.com", "books.apple.com"]);
  const bookIds = new Set();
  for (const book of bookstore) {
    assert.ok(!bookIds.has(book.id), "duplicate book id"); bookIds.add(book.id);
    const languages = new Set();
    for (const edition of book.editions) {
      assert.ok(!languages.has(edition.language), "duplicate language"); languages.add(edition.language);
      for (const offers of Object.values(edition.formats)) {
        const retailers = new Set();
        for (const offer of offers) {
          const url = new URL(offer.url);
          assert.equal(url.protocol, "https:"); assert.ok(hosts.has(url.hostname));
          assert.ok(!url.pathname.includes("search")); assert.ok(url.pathname !== "/");
          assert.ok(!retailers.has(offer.retailer), "duplicate retailer in format"); retailers.add(offer.retailer);
          assert.match(offer.verifiedOn, /^\d{4}-\d{2}-\d{2}$/);
          if (offer.authorPrice !== undefined) { assert.ok(offer.authorPrice > 0); assert.equal(offer.currency, "USD"); assert.ok(offer.fulfillment?.includes("Shipping")); }
          assert.ok(!offer.url.includes("jcdJPkCh2jAaWnUjMS28UcZTdfgw1G0ywzWgKNsqnXf"), "retired Friends link must never ship");
        }
      }
    }
  }
});
