import { expect, test } from '@playwright/test'

declare global {
  interface Window {
    __clarifyCls: { value: number }
  }
}

const publicRoutes = [
  '/',
  '/about',
  '/blog',
  '/blog/evidence-trail-ai-generated-claims',
  '/blog/provenance-confidence-scoring',
  '/blog/human-review-high-impact-decisions',
  '/blog/repeatable-market-research-workflows',
  '/business-intelligence-exercises',
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
] as const

test.describe('public routes', () => {
  for (const route of publicRoutes) {
    test(`${route} renders a coherent document`, async ({ page }) => {
      const browserErrors: string[] = []
      const failedRequests: string[] = []
      page.on('console', (message) => {
        if (message.type() === 'error') browserErrors.push(message.text())
      })
      page.on('pageerror', (error) => browserErrors.push(error.message))
      page.on('requestfailed', (request) => failedRequests.push(`${request.method()} ${request.url()}`))

      const response = await page.goto(route)
      expect(response?.status()).toBe(200)
      await expect(page.locator('h1')).toBeVisible()
      await expect(page.locator('header.site-header')).toBeVisible()
      await expect(page.locator('footer.site-footer')).toBeVisible()
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /^https:\/\/www\.clerifydata\.com/)
      await expect(page.locator('link[rel="canonical"]')).not.toHaveAttribute('href', /staging\.clerifydata/)
      await expect(page.locator('body')).not.toContainText(String.fromCodePoint(0x2014))

      const overflows = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)
      expect(overflows).toBe(false)
      expect(browserErrors).toEqual([])
      expect(failedRequests).toEqual([])
    })
  }
})

test('homepage metadata points at production, not staging', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /^https:\/\/www\.clerifydata\.com\/?$/)
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute('content', /^https:\/\/www\.clerifydata\.com\/?$/)
  await expect(page.locator('meta[property="og:site_name"]')).toHaveAttribute('content', 'Clarify Data')
})

test('resources footer links the BI exercises article', async ({ page }) => {
  await page.goto('/')
  const resources = page.locator('footer').getByRole('heading', { name: 'Resources' }).locator('..')
  await expect(resources.getByRole('link', { name: 'BI Practice Exercises' })).toHaveAttribute('href', '/business-intelligence-exercises')
})

test('BI exercises article includes datasets and schema', async ({ page, request }) => {
  await page.goto('/business-intelligence-exercises')
  await expect(page.locator('h1')).toContainText('14 Business Intelligence Exercises (With Practice Datasets and Worked Checks)')
  await expect(page.getByRole('paragraph').filter({ hasText: 'Business intelligence exercises are hands-on practice problems' }).first()).toBeVisible()
  const jsonLd = await page.locator('script[type="application/ld+json"]').textContent()
  expect(jsonLd).toContain('ItemList')
  expect(jsonLd).toContain('FAQPage')
  expect(jsonLd).toContain('Exercise 14:')

  const csv = await request.get('/practice-datasets/messy_customers.csv')
  expect(csv.status()).toBe(200)
  expect(await csv.text()).toContain('customer_id')

  const orders = await request.get('/practice-datasets/retail_orders.csv')
  expect(orders.status()).toBe(200)
  expect(await orders.text()).toContain('order_id')

  await expect(page.getByRole('link', { name: 'data preparation guide', exact: true })).toHaveAttribute('href', '/data-sorting')
  await expect(page.getByRole('link', { name: 'data validation guide', exact: true })).toHaveAttribute('href', '/data-validation')
  await expect(page.getByRole('link', { name: 'Trust Index methodology', exact: true }).first()).toHaveAttribute('href', '/trust-index')
})

test('footer platform links own distinct destinations', async ({ page }) => {
  await page.goto('/')
  const platform = page.locator('footer').getByRole('heading', { name: 'Platform' }).locator('..')
  await expect(platform.getByRole('link', { name: 'Data Preparation' })).toHaveAttribute('href', '/#data-preparation')
  await expect(platform.getByRole('link', { name: 'Data Verification' })).toHaveAttribute('href', '/data-verification')
  await expect(platform.getByRole('link', { name: 'Market Intelligence' })).toHaveAttribute('href', '/business-intelligence#market-intelligence')
  await expect(platform.getByRole('link', { name: 'AI Claim Verification' })).toHaveAttribute('href', '/data-verification#ai-claim-verification')
  await expect(platform.getByRole('link', { name: 'Dynamic Reports & Alerts' })).toHaveAttribute('href', '/#dynamic-reports')
})

test('legacy routes redirect to their approved owners', async ({ request }) => {
  const routes = [
    ['/business-analysis', '/business-intelligence#analysis-workflow'],
    ['/data-analytics', '/business-intelligence#analytics-foundation'],
    ['/business-analytics', '/business-intelligence#analytics-foundation'],
    ['/newsletter', '/blog'],
    ['/blog/business-intelligence-exercises', '/business-intelligence-exercises'],
  ] as const

  for (const [source, destination] of routes) {
    const response = await request.get(source, { maxRedirects: 0 })
    expect(response.status()).toBe(308)
    const location = new URL(response.headers().location, 'http://127.0.0.1:3100')
    expect(`${location.pathname}${location.hash}`).toBe(destination)
  }
})

test('mobile navigation is keyboard and screen-reader operable', async ({ page }) => {
  test.skip((page.viewportSize()?.width ?? 1000) > 640, 'Mobile project only')
  await page.goto('/')
  const button = page.getByRole('button', { name: 'Open navigation' })
  await button.focus()
  await page.keyboard.press('Enter')
  const closeButton = page.getByRole('button', { name: 'Close navigation' })
  await expect(closeButton).toHaveAttribute('aria-expanded', 'true')
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible()
  await page.keyboard.press('Escape')
  const reopenedButton = page.getByRole('button', { name: 'Open navigation' })
  await expect(reopenedButton).toBeFocused()
  await expect(reopenedButton).toHaveAttribute('aria-expanded', 'false')
})

test('navigation floats within the hero with transparent viewport clearance', async ({ page }, testInfo) => {
  await page.goto('/')
  const viewport = page.viewportSize()
  const bar = page.locator('.site-header-inner')
  const box = await bar.boundingBox()
  const background = await bar.evaluate((element) => getComputedStyle(element).backgroundColor)

  expect(box).not.toBeNull()
  expect(box?.x ?? 0).toBeGreaterThanOrEqual(11)
  expect(box?.y ?? 0).toBeGreaterThanOrEqual(11)
  expect(box?.width ?? viewport?.width ?? 0).toBeLessThan((viewport?.width ?? 0) - 20)
  expect(background).toBe('rgba(10, 10, 10, 0.42)')

  if (testInfo.project.name === 'mobile') {
    await page.getByRole('button', { name: 'Open navigation' }).click()
    await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible()
    await page.screenshot({
      path: 'test-results/visual/navigation-open-mobile.png',
      animations: 'disabled',
    })
  } else {
    await page.screenshot({
      path: 'test-results/visual/navigation-floating-desktop.png',
      animations: 'disabled',
    })
  }
})

test('anchor destinations remain visible below the fixed header', async ({ page }) => {
  await page.goto('/#dynamic-reports')
  const target = page.locator('#dynamic-reports')
  await expect(target).toBeVisible()
  const box = await target.boundingBox()
  expect(box?.y ?? 0).toBeGreaterThanOrEqual(68)
})

test('header navigation uses client-side route transitions', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop', 'Desktop navigation owns this route-transition check')
  await page.goto('/')
  const navigationEntriesBefore = await page.evaluate(() => performance.getEntriesByType('navigation').length)
  await page.getByRole('navigation', { name: 'Primary navigation' }).getByRole('link', { name: 'Journal' }).click()
  await expect(page).toHaveURL(/\/blog$/)
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Better methods')
  const navigationEntriesAfter = await page.evaluate(() => performance.getEntriesByType('navigation').length)
  expect(navigationEntriesAfter).toBe(navigationEntriesBefore)
})

test('demo API rejects malformed submissions', async ({ request }) => {
  const response = await request.post('/api/demo', {
    data: { email: 'not-an-email', company: '', industry: 'Unknown', description: 'short' },
  })
  expect(response.status()).toBe(400)
  await expect(response.json()).resolves.toMatchObject({ error: expect.any(String) })
})

test('working legal drafts are noindex and absent from the sitemap', async ({ page, request }) => {
  for (const route of ['/privacy-policy', '/terms-of-use', '/cookie-policy', '/dpa']) {
    const response = await page.goto(route)
    expect(response?.status()).toBe(200)
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/)
  }

  const sitemap = await (await request.get('/sitemap.xml')).text()
  expect(sitemap).not.toContain('/privacy-policy')
  expect(sitemap).not.toContain('/terms-of-use')
  expect(sitemap).not.toContain('/cookie-policy')
  expect(sitemap).not.toContain('/dpa')
})

test('initial load has no third-party requests and remains layout-stable', async ({ page }) => {
  const externalRequests: string[] = []
  await page.addInitScript(() => {
    const state = { value: 0 }
    Object.defineProperty(window, '__clarifyCls', { value: state })
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const shift = entry as PerformanceEntry & { value: number; hadRecentInput: boolean }
        if (!shift.hadRecentInput) state.value += shift.value
      }
    }).observe({ type: 'layout-shift', buffered: true })
  })
  page.on('request', (request) => {
    const url = new URL(request.url())
    if (url.hostname !== '127.0.0.1') externalRequests.push(request.url())
  })

  await page.goto('/')
  await page.waitForLoadState('networkidle')
  const cls = await page.evaluate(() => window.__clarifyCls.value)
  expect(cls).toBeLessThan(0.1)
  expect(externalRequests).toEqual([])
})

test('key pages capture clean desktop and mobile evidence', async ({ page }, testInfo) => {
  for (const [name, route] of [['home', '/'], ['verification', '/data-verification']] as const) {
    await page.goto(route)
    await page.waitForLoadState('networkidle')
    await page.screenshot({
      path: `test-results/visual/${name}-${testInfo.project.name}.png`,
      fullPage: true,
      animations: 'disabled',
    })
  }
})

test('wide desktop, laptop, and tablet layouts stay intentional', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop', 'Desktop project drives explicit viewport coverage')

  for (const width of [1920, 1280, 768]) {
    await page.setViewportSize({ width, height: width === 768 ? 1024 : 900 })
    await page.goto('/data-verification')
    await page.waitForLoadState('networkidle')
    expect(await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)).toBe(false)
    await page.screenshot({
      path: `test-results/visual/verification-${width}.png`,
      fullPage: true,
      animations: 'disabled',
    })
  }
})
