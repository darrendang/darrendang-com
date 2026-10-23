import { readFile, writeFile, mkdir } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { siteUrl, meta, canonicalUrl, semanticHash, validateManifest, modifiedDate, isPublicUrl } from "./search-utils.mjs";

let previous = null;
try {
  const response = await fetch(`${siteUrl}/search-manifest.json`, { signal: AbortSignal.timeout(8000), cache: "no-store" });
  if (response.ok) previous = validateManifest(await response.json());
} catch { console.warn("Prior search manifest unavailable; unknown modification dates will be omitted."); }
let baseline = null;
try { baseline = validateManifest(JSON.parse(await readFile("content/search-history.json", "utf8"))); } catch { /* First controlled release. */ }
const now = new Date().toISOString();
let sitemap = await readFile("out/sitemap.xml", "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => new URL(m[1]).href);
const pages = [];
for (const url of urls) {
  if (!isPublicUrl(url)) throw new Error(`Nonpublic URL in sitemap: ${url}`);
  const pathname = new URL(url).pathname;
  const html = await readFile(`out${pathname.endsWith("/") ? pathname : `${pathname}/`}index.html`, "utf8");
  if (meta(html, "robots").includes("noindex")) throw new Error(`Noindex URL in sitemap: ${url}`);
  const canonical = canonicalUrl(html);
  if (canonical.replace(/\/$/, "") !== url.replace(/\/$/, "")) throw new Error(`Canonical mismatch: ${url}`);
  const hash = semanticHash(html);
  const before = previous?.pages.find(p => p.url === canonical);
  const known = baseline?.pages.find(p => p.url === canonical);
  const lastModified = modifiedDate(hash, before, known, now);
  pages.push({ url: canonical, hash, ...(lastModified ? { lastModified } : {}) });
}
pages.sort((a,b) => a.url.localeCompare(b.url));
const revision = process.env.GITHUB_SHA || execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim();
const manifest = { version: 1, revision, generatedAt: now, pages };
await writeFile("out/search-manifest.json", JSON.stringify(manifest, null, 2) + "\n");
sitemap = sitemap.replace(/<url>([\s\S]*?)<\/url>/g, (_, block) => {
  const url = block.match(/<loc>([^<]+)<\/loc>/)?.[1];
  const page = pages.find(p => p.url.replace(/\/$/, "") === url?.replace(/\/$/, ""));
  return `<url>\n<loc>${page.url}</loc>${page.lastModified ? `\n<lastmod>${page.lastModified}</lastmod>` : ""}\n</url>`;
});
await writeFile("out/sitemap.xml", sitemap);
const changed = pages.filter(p => previous?.pages.find(old => old.url === p.url)?.hash !== p.hash).map(p => p.url);
const removed = previous?.pages.filter(p => !pages.some(current => current.url === p.url)).map(p => p.url) ?? [];
await mkdir(".search", { recursive: true });
await writeFile(".search/indexnow.json", JSON.stringify({ revision, urlList: [...new Set([...changed, ...removed])] }, null, 2) + "\n");
console.log(`Search manifest: ${pages.length} public pages, ${pages.filter(p => p.lastModified).length} known dates; ${changed.length} changed and ${removed.length} removed URLs queued.`);
