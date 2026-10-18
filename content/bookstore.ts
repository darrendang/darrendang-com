// Public purchase destinations only. Keep private receipts and correspondence out of this file.
export type BookFormat = "hardcover" | "paperback" | "ebook" | "audiobook";
export type PurchaseOffer = {
  retailer: string;
  url: string;
  authorPrice?: number;
  currency?: "USD";
  fulfillment?: string;
  verifiedOn: string;
};
export type BookEdition = {
  language: string;
  label: string;
  title: string;
  subtitle: string;
  formats: Partial<Record<BookFormat, PurchaseOffer[]>>;
  forthcoming?: string;
  audioDescription?: string;
  nativeFormatLabels?: Partial<Record<BookFormat, string>>;
  authorBuyLabel?: string;
};
export type StoreBook = {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  href: string;
  editions: BookEdition[];
};
export type BookSelection = { book: string; language: string; format: BookFormat };

export const formatDetails: Record<BookFormat, { label: string; description: string }> = {
  hardcover: { label: "Hardcover", description: "A lasting copy" },
  paperback: { label: "Paperback", description: "Easy to carry" },
  ebook: { label: "eBook", description: "Read on your device" },
  audiobook: { label: "Audiobook", description: "Listen on your device" },
};
export const formatOrder: BookFormat[] = ["hardcover", "paperback", "ebook", "audiobook"];

// Add an edition or a future book here once its exact purchase pages are verified.
// An absent format is unavailable: never create a guessed destination or an empty Buy button.
export const bookstore: StoreBook[] = [
  {
    id: "book1", number: 1,
    title: "For Those Who Come After Us", subtitle: "A Life in Lessons",
    href: "/books/for-those-who-come-after-us/",
    editions: [
      {
        language: "en", label: "English",
        title: "For Those Who Come After Us", subtitle: "A Life in Lessons",
        audioDescription: "Narrated by Darren Dang · 1 hr 34 min",
        formats: {
          hardcover: [
            { retailer: "IngramSpark", url: "https://shop.ingramspark.com/b/084?params=1iXsHiOEUy1XMZMcOl7yXDtFEVAUqVpA5dlJcMUhp41", authorPrice: 18.88, currency: "USD", fulfillment: "Printed and shipped by IngramSpark. Shipping and applicable tax are added at checkout.", verifiedOn: "2026-10-18" },
            { retailer: "Amazon", url: "https://www.amazon.com/dp/B0HHZPRY3V/", verifiedOn: "2026-10-18" },
          ],
          paperback: [
            { retailer: "IngramSpark", url: "https://shop.ingramspark.com/b/084?params=2xrYMMie8Hb7rlTNZ07ulFfEZxJ4x8XKpqIA3Ze5sGo", authorPrice: 12.88, currency: "USD", fulfillment: "Printed and shipped by IngramSpark. Shipping and applicable tax are added at checkout.", verifiedOn: "2026-10-18" },
            { retailer: "Amazon", url: "https://www.amazon.com/dp/B0HHZRLXKD/", verifiedOn: "2026-10-18" },
          ],
          ebook: [
            { retailer: "Kindle", url: "https://www.amazon.com/dp/B0HFDKVC3J/", verifiedOn: "2026-10-18" },
            { retailer: "Apple Books", url: "https://books.apple.com/us/book/for-those-who-come-after-us/id6804961980", verifiedOn: "2026-10-18" },
          ],
          audiobook: [
            { retailer: "Audible", url: "https://www.audible.com/pd/For-Those-Who-Come-After-Us-Audiobook/B0HJRPMZV3", verifiedOn: "2026-10-18" },
            { retailer: "Apple Books", url: "https://books.apple.com/us/audiobook/for-those-who-come-after-us-a-life-in-lessons-the/id6812437215", verifiedOn: "2026-10-18" },
            { retailer: "Amazon", url: "https://www.amazon.com/dp/B0HJRPMZV3/", verifiedOn: "2026-10-18" },
          ],
        },
      },
      {
        language: "vi", label: "Tiếng Việt",
        nativeFormatLabels: { hardcover: "Bìa cứng" },
        authorBuyLabel: "Mua sách bìa cứng",
        title: "Dành Cho Những Thế Hệ Mai Sau", subtitle: "Một Đời, Những Bài Học",
        formats: {
          hardcover: [
            { retailer: "IngramSpark", url: "https://shop.ingramspark.com/b/084?params=E8VQm3D2lmNju76zajwqZypJhLQ6SYnyoKrHOsFH1ot", authorPrice: 18.88, currency: "USD", fulfillment: "Printed and shipped by IngramSpark. Shipping and applicable tax are added at checkout.", verifiedOn: "2026-10-18" },
          ],
        },
        forthcoming: "A Vietnamese paperback is on the way. Its purchase link will appear here when it is available.",
      },
    ],
  },
];

export function availableFormats(edition: BookEdition): BookFormat[] {
  return formatOrder.filter((format) => edition.formats[format]?.some((offer) => offer.url));
}

export function purchasableBooks(catalog: StoreBook[] = bookstore): StoreBook[] {
  return catalog.filter((book) => book.editions.some((edition) => availableFormats(edition).length > 0));
}

// Resolve every deep link and selection against real offers. Unknown/stale values fall back safely.
export function resolveSelection(
  requested: { book?: string | null; language?: string | null; format?: string | null },
  catalog: StoreBook[] = bookstore,
  fixedBook?: string,
): BookSelection | null {
  const books = purchasableBooks(catalog);
  const book = fixedBook ? books.find((item) => item.id === fixedBook) : books.find((item) => item.id === requested.book) ?? books[0];
  if (!book) return null;
  const editions = book.editions.filter((edition) => availableFormats(edition).length > 0);
  const edition = editions.find((item) => item.language === requested.language) ?? editions[0];
  const formats = availableFormats(edition);
  const format = formats.find((item) => item === requested.format) ?? formats[0];
  return { book: book.id, language: edition.language, format };
}
