import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async headers() {
    if (process.env.VERCEL_ENV === 'production') return []
    return [
      {
        source: '/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/business-analysis',
        destination: '/business-intelligence#analysis-workflow',
        permanent: true,
      },
      {
        source: '/data-analytics',
        destination: '/business-intelligence#analytics-foundation',
        permanent: true,
      },
      {
        source: '/business-analytics',
        destination: '/business-intelligence#analytics-foundation',
        permanent: true,
      },
      {
        source: '/newsletter',
        destination: '/blog',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
