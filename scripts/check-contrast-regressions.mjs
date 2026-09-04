import fs from 'node:fs';

const read = (path) => fs.readFileSync(path, 'utf8');
const fail = (message) => {
  console.error(`Contrast guard failed: ${message}`);
  process.exitCode = 1;
};

const layout = read('app/layout.tsx');
const bookVisuals = read('app/book-visuals.css');
const siteContrast = read('app/site-contrast.css');

const imports = [...layout.matchAll(/import\s+["']\.\/(.+?\.css)["'];/g)].map((m) => m[1]);
if (imports.at(-1) !== 'site-contrast.css') {
  fail('app/site-contrast.css must remain the final global CSS import.');
}

const quoteRule = bookVisuals.match(/\.book-quote\{([^}]*)\}/)?.[1] ?? '';
if (!quoteRule) fail('shared .book-quote rule is missing from app/book-visuals.css.');
if (/color:\s*var\(--ivory\)/.test(quoteRule)) {
  fail('shared .book-quote must not default to ivory; light pages use this class.');
}
if (!/--gold-text/.test(quoteRule)) {
  fail('shared .book-quote must use the readable --gold-text token by default.');
}

for (const required of [
  '--gold-text:#7A5C21',
  '.book-quote',
  '-webkit-text-fill-color:var(--gold-text)',
  '.navy .book-quote',
  '.progression',
  '.book-movement',
  '.map-sequence article>span',
  '.idea-canonical-intro .book-quote',
  '.development-question .book-quote',
  '.development-principles .book-quote',
  '.idea-canonical-intro .lead',
  '-webkit-text-fill-color:var(--muted)',
]) {
  if (!siteContrast.includes(required)) fail(`site contrast guard is missing: ${required}`);
}

function linear(c) {
  c /= 255;
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}
function luminance(hex) {
  const value = hex.replace('#', '');
  const [r, g, b] = [0, 2, 4].map((i) => linear(parseInt(value.slice(i, i + 2), 16)));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function contrast(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

const lightSurfaces = ['#FBF8F2', '#F5EFE4', '#F8F3EB'];
for (const bg of lightSurfaces) {
  const goldRatio = contrast('#7A5C21', bg);
  if (goldRatio < 4.5) fail(`--gold-text contrast is ${goldRatio.toFixed(2)}:1 on ${bg}; expected >= 4.5:1.`);

  const mutedRatio = contrast('#4F5963', bg);
  if (mutedRatio < 4.5) fail(`--muted contrast is ${mutedRatio.toFixed(2)}:1 on ${bg}; expected >= 4.5:1.`);
}

if (!process.exitCode) {
  console.log('Contrast guard passed: readable gold, Idea-page leads, and shared quote protections are intact.');
}
