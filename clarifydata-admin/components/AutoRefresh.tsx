'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

const INTERVAL_MS = 30 * 60 * 1000 // 30 minutes

export default function AutoRefresh() {
  const router = useRouter()
  const lastRefresh = useRef(Date.now())

  useEffect(() => {
    const tick = setInterval(() => {
      router.refresh()
      lastRefresh.current = Date.now()
    }, INTERVAL_MS)

    // Also refresh when tab becomes visible after being hidden
    function handleVisibility() {
      if (document.visibilityState === 'visible') {
        const elapsed = Date.now() - lastRefresh.current
        if (elapsed >= INTERVAL_MS) {
          router.refresh()
          lastRefresh.current = Date.now()
        }
      }
    }

    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      clearInterval(tick)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [router])

  return null
}
