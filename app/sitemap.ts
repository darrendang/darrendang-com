import type { MetadataRoute } from 'next';
import { ideas } from '@/content/seed';

export const dynamic = 'force-static';

const indexableIdeaSlugs = new Set([
  'generative-dialogue',
  'living-legacy',
  'wisdom-has-no-rank',
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://darrendang.com';
  const lastModified = new Date('2026-09-03T00:00:00Z');
  const routes = [
    '',
    '/the-way/',
    '/use-the-way/',
    '/the-way/constitution/',
    '/explore/',
    '/your-way/',
    '/the-way-forward/',
    '/letters/',
    '/letters/why-these-letters/',
    '/books/',
    '/ideas/',
    '/genome/',
    '/dots/',
    '/papers/',
    '/papers/from-ai-experiments-to-institutional-capability/',
    '/the-way-in-motion/',
    '/speaking/',
    '/shared-wisdom/',
    '/contribute/',
    '/books/for-those-who-come-after-us/',
    '/books/for-those-who-come-after-us/prologue/',
    '/books/for-those-who-come-after-us/connect-the-dots/',
    '/books/for-those-who-come-after-us/chapter-29-excerpt/',
    '/books/wisdom-has-no-rank/',
    '/books/wisdom-has-no-rank/prologue-excerpt/',
    '/books/wisdom-has-no-rank/person-i-developed/',
    '/books/dots/',
    '/about/',
    '/connect/',
    '/independence/',
    '/privacy/',
    '/accessibility/',
  ];

  return [
    ...routes.map((path) => ({ url: base + path, lastModified })),
    ...ideas
      .filter((idea) => indexableIdeaSlugs.has(idea.slug))
      .map((idea) => ({
        url: `${base}/ideas/${idea.slug}/`,
        lastModified,
      })),
  ];
}
