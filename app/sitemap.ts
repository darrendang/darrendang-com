import type { MetadataRoute } from 'next';
import { ideas } from '@/content/seed';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://darrendang.com';
  const lastModified = new Date('2026-08-21T00:00:00Z');
  const routes = [
    '',
    '/ideas/',
    '/writing/',
    '/books/',
    '/books/for-those-who-come-after-us/',
    '/books/for-those-who-come-after-us/prologue/',
    '/books/for-those-who-come-after-us/connect-the-dots/',
    '/books/for-those-who-come-after-us/chapter-29-excerpt/',
    '/books/wisdom-has-no-rank/',
    '/books/dots/',
    '/speaking/',
    '/about/',
    '/connect/',
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
