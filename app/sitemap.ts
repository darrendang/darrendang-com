import type { MetadataRoute } from 'next';
import { ideas } from '@/content/seed';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://darrendang.com';
  const lastModified = new Date('2026-08-16T00:00:00Z');
  const routes = [
    '',
    '/ideas/',
    '/writing/',
    '/books/',
    '/books/for-those-who-come-after-us/',
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
