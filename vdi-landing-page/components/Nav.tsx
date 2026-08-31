'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Brand from './Brand'
import { headerNavigation } from '@/lib/site'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [open])

  return (
    <header className="site-header">
      <div className="section-inner site-header-inner">
        <Brand eager />

        <nav className="desktop-nav" aria-label="Primary navigation">
          {headerNavigation.map((item) => (
            <Link key={item.label} href={item.href}>{item.label}</Link>
          ))}
        </nav>

        <Link href="/#book-demo" className="button button-copper desktop-cta">Book a Demo</Link>

        <button
          ref={buttonRef}
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
        data-open={open}
      >
        <div className="section-inner">
          {headerNavigation.map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/#book-demo" className="button button-copper" onClick={() => setOpen(false)}>
            Book a Demo
          </Link>
        </div>
      </nav>
    </header>
  )
}
