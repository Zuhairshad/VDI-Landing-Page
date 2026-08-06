'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'

const links = [
  { label: 'Overview', href: '#overview' },
  { label: 'How it works', href: '#setup' },
  { label: 'Workflows', href: '#workflows' },
  { label: 'Industries', href: '#usecases' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(10,10,10,0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(6px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(250,250,250,0.07)' : '1px solid transparent',
        }}
      >
        <div className="section-inner flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1 select-none">
            <Image src="/logo.png" alt="ClarifyData" width={130} height={130} className="rounded-2xl" style={{ marginRight: '-40px' }} />
            <span
              className="text-[20px] font-semibold tracking-tight"
              style={{ color: 'rgb(250,250,250)' }}
            >
              CLARIFYDATA
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[16px] font-medium transition-colors duration-200"
                style={{ color: 'rgba(250,250,250,0.8)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgb(250,250,250)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(250,250,250,0.8)')}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#overview"
              className="text-[16px] font-medium px-5 py-2 rounded-full transition-all duration-200"
              style={{ background: 'rgb(84,27,4)', color: 'rgb(250,250,250)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(84,27,4,0.85)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgb(84,27,4)' }}
            >
              Contact now
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px"
              style={{ background: 'rgb(250,250,250)' }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-px"
              style={{ background: 'rgb(250,250,250)' }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px"
              style={{ background: 'rgb(250,250,250)' }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.44, 0, 0.56, 1] }}
            className="fixed inset-0 z-40 flex flex-col pt-20 px-6 pb-8"
            style={{ background: 'rgba(10,10,10,0.98)', backdropFilter: 'blur(16px)' }}
          >
            <div className="flex flex-col gap-1 flex-1">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.25 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-medium py-3 border-b"
                  style={{ color: 'rgb(250,250,250)', borderColor: 'rgba(250,250,250,0.07)' }}
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
            <a
              href="#overview"
              onClick={() => setMobileOpen(false)}
              className="text-center py-3 rounded-full text-[15px] font-medium"
              style={{ background: 'rgb(84,27,4)', color: 'rgb(250,250,250)' }}
            >
              Contact now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
