'use client'

import { ReactNode } from 'react'
import ShaderBackground from './ShaderBackground'
import { Sparkles } from 'lucide-react'

const COPPER = 'rgb(194, 89, 24)'

interface PageHeroHeaderProps {
  eyebrow?: string
  icon?: ReactNode
  title: string
  subtitle?: string
  children?: ReactNode
  className?: string
}

export default function PageHeroHeader({
  eyebrow,
  icon,
  title,
  subtitle,
  children,
  className = '',
}: PageHeroHeaderProps) {
  return (
    <section
      className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-center ${className}`}
      style={{ background: 'rgb(28,9,2)' }}
    >
      {/* Animated Home Shader Background */}
      <ShaderBackground />

      {/* Hero Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,3,1,0.28) 0%, rgba(10,3,1,0.0) 28%, rgba(10,3,1,0.0) 68%, rgba(10,3,1,0.38) 100%)',
        }}
      />

      <div className="relative z-10 flex w-full max-w-[920px] flex-col items-center px-5 py-24 md:py-32 mx-auto">
        {eyebrow && (
          <span className="eyebrow-pill mb-8 inline-flex items-center gap-2">
            {icon || <Sparkles className="w-3.5 h-3.5" style={{ color: COPPER }} />}
            <span>{eyebrow}</span>
          </span>
        )}

        <h1 className="mb-6 max-w-[850px] text-[32px] md:text-[58px] font-semibold tracking-[-1.8px] leading-[1.18] text-white">
          {title}
        </h1>

        {subtitle && (
          <p className="text-[16px] md:text-[19px] text-white/85 max-w-[680px] mx-auto leading-[28px] mb-6">
            {subtitle}
          </p>
        )}

        {children}
      </div>
    </section>
  )
}
