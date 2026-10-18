"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { availableFormats, bookstore, formatDetails, purchasableBooks, resolveSelection, type BookSelection } from "@/content/bookstore";

export function BookPurchase({ bookId, showBookPicker = false }: { bookId?: string; showBookPicker?: boolean }) {
  const id = useId();
  const [selection, setSelection] = useState<BookSelection | null>(() => resolveSelection({}, bookstore, bookId));

  useEffect(() => {
    function readLocation() {
      const params = new URLSearchParams(window.location.search);
      setSelection(resolveSelection({ book: params.get("book"), language: params.get("lang"), format: params.get("format") }, bookstore, bookId));
    }
    readLocation();
    window.addEventListener("popstate", readLocation);
    return () => window.removeEventListener("popstate", readLocation);
  }, [bookId]);

  function choose(requested: { book?: string; language?: string; format?: string }) {
    const next = resolveSelection({ ...selection, ...requested }, bookstore, bookId);
    setSelection(next);
    if (!next) return;
    const url = new URL(window.location.href);
    url.searchParams.set("book", next.book);
    url.searchParams.set("lang", next.language);
    url.searchParams.set("format", next.format);
    window.history.replaceState(window.history.state, "", url);
  }

  if (!selection) return <p>Purchase links will appear here as editions are released. <Link href="/books/">Explore the books →</Link></p>;
  const book = bookstore.find((item) => item.id === selection.book)!;
  const edition = book.editions.find((item) => item.language === selection.language)!;
  const editions = book.editions.filter((item) => availableFormats(item).length > 0);
  const formats = availableFormats(edition);
  const offers = edition.formats[selection.format] ?? [];
  const format = formatDetails[selection.format];
  const availableBooks = purchasableBooks();

  return (
    <section className="book-purchase" id="buy" aria-labelledby={`${id}-heading`}>
      <div className="purchase-intro">
        <p className="eyebrow bronze">Find your edition</p>
        <h2 id={`${id}-heading`}>Choose your edition.</h2>
        <p>Choose your language and format, then order from the seller you prefer.</p>
      </div>

      <div className="purchase-panel">
        <div className="purchase-choices">
          {showBookPicker && availableBooks.length > 1 && (
            <div className="purchase-language">
              <label htmlFor={`${id}-book`}>Book</label>
              <select id={`${id}-book`} value={selection.book} onChange={(event) => choose({ book: event.target.value, language: "en", format: "hardcover" })}>
                {availableBooks.map((item) => <option key={item.id} value={item.id}>Book {item.number} · {item.title}</option>)}
              </select>
            </div>
          )}
          <div className="purchase-language">
            <label htmlFor={`${id}-language`}>1 · Language / Ngôn ngữ</label>
            <select id={`${id}-language`} value={selection.language} onChange={(event) => choose({ language: event.target.value })}>
              {editions.map((item) => <option key={item.language} value={item.language} lang={item.language}>{item.label}</option>)}
            </select>
          </div>

          <fieldset className="purchase-formats">
            <legend>2 · Choose your format</legend>
            <div className={`purchase-format-grid${formats.length === 1 ? " is-single" : ""}`}>
              {formats.map((item) => (
                <label key={item} className={`purchase-format${selection.format === item ? " is-selected" : ""}`}>
                  <input type="radio" name={`${id}-format`} value={item} checked={selection.format === item} onChange={() => choose({ format: item })} />
                  <span><strong>{formatDetails[item].label}{edition.nativeFormatLabels?.[item] && <span lang={edition.language}> / {edition.nativeFormatLabels[item]}</span>}</strong><small>{formatDetails[item].description}</small></span>
                </label>
              ))}
            </div>
          </fieldset>
          <p className="purchase-growth-note">More languages are on the way. Each edition will appear here as it becomes available.</p>
        </div>

        <div className="purchase-result" aria-live="polite" aria-atomic="true">
          <p className="purchase-edition-label">Book {book.number} · <span lang={edition.language}>{edition.label}</span> · {format.label}</p>
          <h3 lang={edition.language}>{edition.title}</h3>
          <p className="purchase-subtitle" lang={edition.language}>{edition.subtitle}</p>
          {selection.format === "audiobook" && edition.audioDescription && <p className="purchase-narrator">{edition.audioDescription}</p>}
          <div className="purchase-offers">
            {offers.map((offer) => (
              <div key={offer.retailer} className={`purchase-offer${offer.authorPrice ? " purchase-offer-featured" : ""}`}>
                <div className="purchase-seller-line">
                  <span>{offer.retailer}</span>
                  {offer.authorPrice && <span className="purchase-price-label">Author price · USD</span>}
                </div>
                <a className={`button ${offer.authorPrice ? "button-dark" : "button-light"}`} href={offer.url} aria-label={`Buy ${format.label} in ${edition.label} from ${offer.retailer}${offer.authorPrice ? ` for $${offer.authorPrice.toFixed(2)} USD, plus shipping and applicable tax` : ""}`}>
                  {offer.authorPrice ? `${edition.authorBuyLabel ?? `Buy ${format.label.toLowerCase()}`} — $${offer.authorPrice.toFixed(2)}` : `Buy on ${offer.retailer}`}<span aria-hidden="true"> ↗</span>
                </a>
                {offer.fulfillment && <p className="purchase-fulfillment">{offer.fulfillment}</p>}
              </div>
            ))}
          </div>
          <p className="purchase-checkout-note">You’ll complete your purchase on the seller’s website. Retailer prices, delivery options, and availability vary by country. Confirm the total and delivery estimate before ordering.</p>
          {edition.forthcoming && <p className="purchase-forthcoming">{edition.forthcoming}</p>}
        </div>
      </div>

      <div className="purchase-help">
        <details>
          <summary>Ordering outside the United States?</summary>
          <p>Check the seller’s delivery countries before ordering. Amazon and Apple Books may offer a local store. A language being available does not mean every seller can deliver to every country.</p>
        </details>
        <details>
          <summary>Why are prices different?</summary>
          <p>The author price applies to the IngramSpark purchase link shown here. Shipping and applicable tax are added at checkout. Other sellers set their own prices and delivery terms, so compare the final total.</p>
        </details>
      </div>

      <noscript>
        <div className="purchase-noscript">
          <h3>All available editions</h3>
          <p>Choose a direct purchase link below.</p>
          {(bookId ? bookstore.filter((item) => item.id === bookId) : bookstore).map((item) => item.editions.map((entry) => (
            <div key={`${item.id}-${entry.language}`}>
              <h4 lang={entry.language}>{entry.title} · {entry.label}</h4>
              <ul>{availableFormats(entry).flatMap((kind) => (entry.formats[kind] ?? []).map((offer) => <li key={`${kind}-${offer.retailer}`}><a href={offer.url}>{formatDetails[kind].label} · {offer.retailer}{offer.authorPrice ? ` · $${offer.authorPrice.toFixed(2)} USD plus shipping and tax` : ""}</a></li>))}</ul>
            </div>
          )))}
        </div>
      </noscript>
    </section>
  );
}
