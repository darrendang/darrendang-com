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
            { retailer: "IngramSpark", url: "https://shop.ingramspark.com/b/084?params=1iXsHiOEUy1XMZMcOl7yXDtFEVAUqVpA5dlJcMUhp41", authorPrice: 18.88, currency: "USD", fulfillment: "Printed and shipped by IngramSpark. Shipping and applicable tax are added at checkout.", verifiedOn: "2026-10-25" },
            { retailer: "Amazon", url: "https://www.amazon.com/dp/B0HHZPRY3V/", verifiedOn: "2026-10-18" },
          ],
          paperback: [
            { retailer: "IngramSpark", url: "https://shop.ingramspark.com/b/084?params=2xrYMMie8Hb7rlTNZ07ulFfEZxJ4x8XKpqIA3Ze5sGo", authorPrice: 12.88, currency: "USD", fulfillment: "Printed and shipped by IngramSpark. Shipping and applicable tax are added at checkout.", verifiedOn: "2026-10-25" },
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
        nativeFormatLabels: { hardcover: "Bìa cứng", paperback: "Bìa mềm" },
        authorBuyLabel: "Mua sách",
        title: "Dành Cho Những Thế Hệ Mai Sau", subtitle: "Một Đời, Những Bài Học",
        formats: {
          hardcover: [
            { retailer: "IngramSpark", url: "https://shop.ingramspark.com/b/084?params=E8VQm3D2lmNju76zajwqZypJhLQ6SYnyoKrHOsFH1ot", authorPrice: 18.88, currency: "USD", fulfillment: "Printed and shipped by IngramSpark. Shipping and applicable tax are added at checkout.", verifiedOn: "2026-10-25" },
          ],
          paperback: [
            { retailer: "IngramSpark", url: "https://shop.ingramspark.com/b/084?params=wH94bg4MZENmdHCYZegRvjpVHjE8EF6RUUmS0k4QwD", authorPrice: 12.88, currency: "USD", fulfillment: "Printed and shipped by IngramSpark. Shipping and applicable tax are added at checkout.", verifiedOn: "2026-10-28" },
          ],
        },
      },
      {
        language: "es", label: "Español",
        title: "Para Quienes Vienen Después de Nosotros", subtitle: "Una Vida en Lecciones",
        formats: { hardcover: [
          { retailer: "IngramSpark", url: "https://shop.ingramspark.com/b/084?params=cgszZR0zsPB1nl8BIcYm7gw3d7n5C7KTkr4fskLJyWH", authorPrice: 18.88, currency: "USD", fulfillment: "Printed and shipped by IngramSpark. Shipping and applicable tax are added at checkout.", verifiedOn: "2026-10-25" },
        ] },
      },
      {
        language: "ko", label: "한국어",
        title: "우리 뒤를 이어올 이들을 위하여", subtitle: "삶에서 얻은 교훈들",
        formats: { hardcover: [
          { retailer: "IngramSpark", url: "https://shop.ingramspark.com/b/084?params=rgKFYayg8L9sy9LDOFUI5rac0ecZUH1wD37c4HJ0Ad1", authorPrice: 18.88, currency: "USD", fulfillment: "Printed and shipped by IngramSpark. Shipping and applicable tax are added at checkout.", verifiedOn: "2026-10-25" },
        ] },
      },
      {
        language: "zh", label: "繁體中文",
        title: "給後來的你們", subtitle: "人生教我的事",
        formats: { hardcover: [
          { retailer: "IngramSpark", url: "https://shop.ingramspark.com/b/084?params=a0TkOIYRSmZktJR15wR5K0EWOjOERiguwxQ1Qzg3IBa", authorPrice: 18.88, currency: "USD", fulfillment: "Printed and shipped by IngramSpark. Shipping and applicable tax are added at checkout.", verifiedOn: "2026-10-28" },
        ] },
      },
      {
        language: "ja", label: "日本語",
        title: "私たちの後に続く人たちへ", subtitle: "人生から学んだこと",
        formats: { hardcover: [
          { retailer: "IngramSpark", url: "https://shop.ingramspark.com/b/084?params=9htd5FlsTpxytu2Y2F9Ik8lmDIcJIqL1Et2UcvuEhYP", authorPrice: 18.88, currency: "USD", fulfillment: "Printed and shipped by IngramSpark. Shipping and applicable tax are added at checkout.", verifiedOn: "2026-10-25" },
        ] },
      },
      {
        language: "fr", label: "Français",
        title: "Pour Ceux Qui Viennent Après Nous", subtitle: "Une Vie En Leçons",
        formats: { hardcover: [
          { retailer: "IngramSpark", url: "https://shop.ingramspark.com/b/084?params=LyuTu35mex2kx0xNkkyeWMGl3mpuRxoSxPefpfDKQ8L", authorPrice: 18.88, currency: "USD", fulfillment: "Printed and shipped by IngramSpark. Shipping and applicable tax are added at checkout.", verifiedOn: "2026-10-25" },
        ] },
      },
      {
        language: "de", label: "Deutsch",
        title: "Für Diejenigen, Die Nach Uns Kommen", subtitle: "Ein Leben Voller Lektionen",
        formats: { hardcover: [
          { retailer: "IngramSpark", url: "https://shop.ingramspark.com/b/084?params=cEjXLy7XjR73yAUaD0pPa1tQ7SC5BzvOkcdiNNa4Di3", authorPrice: 18.88, currency: "USD", fulfillment: "Printed and shipped by IngramSpark. Shipping and applicable tax are added at checkout.", verifiedOn: "2026-10-25" },
        ] },
      },
      {
        language: "pt", label: "Português (Brasil)",
        title: "Para Quem Vem Depois de Nós", subtitle: "Uma Vida de Lições",
        formats: { hardcover: [
          { retailer: "IngramSpark", url: "https://shop.ingramspark.com/b/084?params=LiujVik9EGQ47tjlLHfqmj5Yp0m3v9AphftnQNQg18e", authorPrice: 18.88, currency: "USD", fulfillment: "Printed and shipped by IngramSpark. Shipping and applicable tax are added at checkout.", verifiedOn: "2026-10-25" },
        ] },
      },
      {
        language: "it", label: "Italiano",
        title: "Per Chi Verrà Dopo Di Noi", subtitle: "Le Lezioni Di Una Vita",
        formats: { hardcover: [
          { retailer: "IngramSpark", url: "https://shop.ingramspark.com/b/084?params=lzmCtsfVtXVxkwP7baf05Dohx06aJ4X6GVYAnLpCty", authorPrice: 18.88, currency: "USD", fulfillment: "Printed and shipped by IngramSpark. Shipping and applicable tax are added at checkout.", verifiedOn: "2026-10-25" },
        ] },
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
