import { readFile, mkdir, writeFile } from "node:fs/promises";
import sharp from "sharp";

const images = JSON.parse(await readFile("lib/responsiveImages.json", "utf8"));
await mkdir("public/images/responsive", { recursive: true });
let count = 0;
for (const [src, originalWidth] of Object.entries(images)) {
  const source = `public${src}`;
  const metadata = await sharp(source).metadata();
  if (metadata.width !== originalWidth) throw new Error(`Responsive source dimensions changed: ${src}`);
  const name = src.slice("/images/".length).replace(/\.[^.]+$/, "");
  const { data, info } = await sharp(source).rotate().raw().toBuffer({ resolveWithObject: true });
  for (const width of [128, 256, 384, 640, 828, 1080, 1600].filter(w => w <= originalWidth)) {
    await sharp(data, { raw: info }).resize({ width, withoutEnlargement: true }).webp({ quality: 84 }).toFile(`public/images/responsive/${name}-${width}.webp`);
    count++;
  }
}
// Compression only, with the original dimensions, aspect and composition intact.
const cover = "public/images/the-making-of-the-way-cover.webp";
const original = await sharp(cover).metadata();
const compressed = await sharp(cover).webp({ quality: 86 }).toBuffer();
const result = await sharp(compressed).metadata();
if (original.width !== result.width || original.height !== result.height) throw new Error("Book 4 delivery derivative changed geometry.");
await writeFile("public/images/the-making-of-the-way-display.webp", compressed);
await sharp("public/images/site-social-preview.svg").png().toFile("public/images/site-social-preview.png");
console.log(`Generated ${count} responsive images, the Book 4 delivery derivative, and the site preview. Originals unchanged.`);
