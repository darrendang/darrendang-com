import { readFile, writeFile, mkdir } from "node:fs/promises";
import { siteUrl, keyPath, isPublicUrl } from "./search-utils.mjs";

const queue = JSON.parse(await readFile(".search/indexnow.json", "utf8"));
const urlList = [...new Set(queue.urlList)];
if (!urlList.every(isPublicUrl) || urlList.length > 10000) throw new Error("Invalid IndexNow queue.");
if (process.argv.includes("--dry-run")) {
  console.log(`IndexNow dry run: ${urlList.length} public URLs; no request sent.`);
} else {
  await mkdir(".search", { recursive: true });
  let receipt;
  try {
    // Notify only after the expected release is actually being served.
    let confirmed = false;
    for (let attempt = 0; attempt < 6; attempt++) {
      try {
        const live = await fetch(`${siteUrl}/search-manifest.json?release=${queue.revision}&check=${attempt}`, { signal: AbortSignal.timeout(10000), cache: "no-store" });
        if (live.ok && (await live.json()).revision === queue.revision) { confirmed = true; break; }
      } catch { /* Pages/CDN propagation can briefly serve the prior release. */ }
      if (attempt < 5) { console.log("Waiting for the deployed search manifest to propagate..."); await new Promise(resolve => setTimeout(resolve, 5000)); }
    }
    if (!confirmed) throw new Error("Live search manifest does not yet match this deployed release; retry notification after propagation.");
    const keyResponse = await fetch(`${siteUrl}${keyPath}`, { signal: AbortSignal.timeout(15000) });
    const key = (await keyResponse.text()).trim();
    if (!keyResponse.ok || !/^[A-Za-z0-9-]{8,128}$/.test(key)) throw new Error("Published IndexNow verification file is unavailable or invalid.");
    if (urlList.length) {
      const response = await fetch("https://api.indexnow.org/indexnow", {
        method: "POST", headers: { "Content-Type": "application/json" }, signal: AbortSignal.timeout(30000),
        body: JSON.stringify({ host: new URL(siteUrl).host, key, keyLocation: `${siteUrl}${keyPath}`, urlList }),
      });
      receipt = { revision: queue.revision, submittedAt: new Date().toISOString(), status: response.status, urls: urlList };
      if (![200, 202].includes(response.status)) throw new Error(`IndexNow returned HTTP ${response.status}.`);
      console.log(`IndexNow HTTP ${response.status}: ${urlList.length} URLs received. This is not an indexing guarantee.`);
    } else {
      receipt = { revision: queue.revision, status: "unchanged", urls: [] };
      console.log("No public content changes; no IndexNow notification needed.");
    }
  } catch (error) {
    receipt = { ...receipt, revision: queue.revision, error: error.message };
    throw error;
  } finally {
    await writeFile(".search/indexnow-receipt.json", JSON.stringify(receipt, null, 2) + "\n");
  }
}
