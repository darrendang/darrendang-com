import { promises as fs } from "node:fs";
import path from "node:path";

const OUT_DIR = path.resolve("out");
const BASE_URL = "https://darrendang.com";

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(fullPath));
    else if (entry.isFile() && entry.name === "index.html") files.push(fullPath);
  }

  return files;
}

function hasCanonical(html) {
  return /<link(?=[^>]*\brel=["']canonical["'])[^>]*>/i.test(html);
}

function isNoIndex(html) {
  return /<meta(?=[^>]*\bname=["']robots["'])(?=[^>]*\bcontent=["'][^"']*noindex)[^>]*>/i.test(html);
}

function canonicalFor(filePath) {
  const relativeDir = path.relative(OUT_DIR, path.dirname(filePath));
  if (!relativeDir || relativeDir === ".") return `${BASE_URL}/`;

  const urlPath = relativeDir.split(path.sep).map(encodeURIComponent).join("/");
  return `${BASE_URL}/${urlPath}/`;
}

const files = await walk(OUT_DIR);
let added = 0;
let preserved = 0;
let skipped = 0;

for (const filePath of files) {
  const relativeDir = path.relative(OUT_DIR, path.dirname(filePath));
  const html = await fs.readFile(filePath, "utf8");

  if (hasCanonical(html)) {
    preserved += 1;
    continue;
  }

  if (relativeDir === "404" || isNoIndex(html)) {
    skipped += 1;
    continue;
  }

  if (!html.includes("</head>")) {
    throw new Error(`Cannot add canonical: ${path.relative(OUT_DIR, filePath)} has no </head>.`);
  }

  const canonical = canonicalFor(filePath);
  const link = `<link rel="canonical" href="${canonical}"/>`;
  await fs.writeFile(filePath, html.replace("</head>", `${link}</head>`), "utf8");
  added += 1;
}

console.log(`Canonical pass complete: ${added} added, ${preserved} preserved, ${skipped} skipped.`);
