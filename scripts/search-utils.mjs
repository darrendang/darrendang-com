import { createHash } from "node:crypto";

export const siteUrl = "https://darrendang.com";
export const keyPath = "/darrendang-20261005-search-indexing.txt";

export function decodeHtml(value = "") {
  return value.replace(/&quot;/g, '"').replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
}

export function attribute(tag, name) {
  return decodeHtml(tag.match(new RegExp(`\\b${name}=["']([^"']*)["']`, "i"))?.[1] ?? "");
}

export function meta(html, name) {
  const tag = [...html.matchAll(/<meta\b[^>]*>/gi)].find(([t]) => attribute(t, "name") === name || attribute(t, "property") === name)?.[0];
  return tag ? attribute(tag, "content") : "";
}

export function canonicalUrl(html) {
  const tag = [...html.matchAll(/<link\b[^>]*>/gi)].find(([t]) => attribute(t, "rel") === "canonical")?.[0];
  return tag ? attribute(tag, "href") : "";
}

export function schemaObjects(html) {
  return [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].map(m => JSON.parse(m[1]));
}

export function semanticHash(html) {
  // Exclude bundle names, preload hints and build IDs: a code-only rebuild is not an editorial update.
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? "";
  const visible = main.replace(/<script\b[\s\S]*?<\/script>/gi, "").replace(/<link\b[^>]*>/gi, "").replace(/\s+/g, " ");
  return createHash("sha256").update(JSON.stringify({
    title: html.match(/<title>([\s\S]*?)<\/title>/i)?.[1], description: meta(html, "description"),
    h1: html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1],
    sharing: ["og:title", "og:description", "og:url", "og:image", "twitter:title", "twitter:description", "twitter:image"].map(name => meta(html, name)),
    visible, schemas: schemaObjects(html),
  })).digest("hex");
}

export function isPublicUrl(value) {
  try {
    const url = new URL(value);
    return url.origin === siteUrl && !url.search && !url.hash &&
      !/^\/(review|share)(\/|$)/.test(url.pathname) &&
      !url.pathname.includes("test-child-map") && !url.pathname.includes("/architecture/");
  } catch { return false; }
}

export function validateManifest(value) {
  if (value?.version !== 1 || !Array.isArray(value.pages)) return null;
  if (!value.pages.every(p => isPublicUrl(p.url) && /^[a-f0-9]{64}$/.test(p.hash) &&
    (!p.lastModified || /^\d{4}-\d{2}-\d{2}(T.*Z)?$/.test(p.lastModified)))) return null;
  return value;
}

export function modifiedDate(hash, previous, baseline, now) {
  if (previous?.hash === hash) return previous.lastModified;
  if (baseline?.hash === hash) return baseline.lastModified;
  return previous ? now : undefined;
}
