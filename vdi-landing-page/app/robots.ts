import type { MetadataRoute } from 'next'
import { isProductionDeployment, site } from '@/lib/site'

export default function robots(): MetadataRoute.Robots {
  if (!isProductionDeployment) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    }
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  }
}
