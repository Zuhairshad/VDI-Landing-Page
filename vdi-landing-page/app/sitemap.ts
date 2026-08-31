import type { MetadataRoute } from 'next'
import { articles } from '@/lib/articles'
import { site } from '@/lib/site'

const routes = [
  '/',
  '/about',
  '/blog',
  '/business-intelligence',
  '/contact',
  '/data-sorting',
  '/data-validation',
  '/data-verification',
  '/how-it-works',
  '/industries',
  '/industries/education',
  '/industries/logistics-trade',
  '/industries/marketing-ecommerce',
  '/industries/medical-clinical',
  '/trust-index',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const articleRoutes = articles.map((article) => ({
    url: `${site.url}/blog/${article.slug}`,
    lastModified: article.publishedIso,
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }))

  return [
    ...routes.map((route) => ({
      url: `${site.url}${route === '/' ? '' : route}`,
      changeFrequency: route === '/blog' ? 'weekly' as const : 'monthly' as const,
      priority: route === '/' ? 1 : route === '/blog' ? 0.8 : 0.7,
    })),
    ...articleRoutes,
  ]
}
