import type { MetadataRoute } from 'next';
import { ideas } from '@/content/seed';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://darrendang.com';
  const lastModified = new Date('2026-08-28T00:00:00Z');
  const routes = [
    '',
    '/the-way/',
    '/letters/',
    '/letters/why-these-letters/',
    '/genome/',
    '/shared-wisdom/',
    '/share/',
    '/ideas/',
    '/dots/',
    '/papers/',
    '/papers/from-ai-experiments-to-institutional-capability/',
    '/books/',
    '/books/for-those-who-come-after-us/',
    '/books/for-those-who-come-after-us/prologue/',
    '/books/for-those-who-come-after-us/connect-the-dots/',
    '/books/for-those-who-come-after-us/chapter-29-excerpt/',
    '/books/wisdom-has-no-rank/',
    '/books/wisdom-has-no-rank/prologue-excerpt/',
    '/books/wisdom-has-no-rank/person-i-developed/',
    '/books/wisdom-has-no-rank/test-child-map/',
    '/books/dots/',
    '/speaking/',
    '/about/',
    '/connect/',
    '/independence/',
    '/privacy/',
    '/accessibility/',
  ];

  return [
    ...routes.map((path) => ({ url: base + path, lastModified })),
    ...ideas.map((idea) => ({
      url: `${base}/ideas/${idea.slug}/`,
      lastModified,
    })),
  ];
}
