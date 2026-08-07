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
      className={`relative min-h-[440px] md:min-h-[500px] flex flex-col items-center justify-center pt-28 pb-20 px-5 overflow-hidden text-center ${className}`}
      style={{ background: 'rgb(28,9,2)' }}
    >
      {/* Animated Home Shader Background */}
      <ShaderBackground />

      {/* Hero Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,3,1,0.3) 0%, rgba(10,3,1,0.0) 30%, rgba(10,3,1,0.0) 70%, rgba(10,3,1,0.5) 100%)',
        }}
      />

      <div className="max-w-[950px] mx-auto relative z-10 flex flex-col items-center">
        {eyebrow && (
          <span className="eyebrow-pill mb-5 inline-flex items-center gap-2">
            {icon || <Sparkles className="w-3.5 h-3.5" style={{ color: COPPER }} />}
            <span>{eyebrow}</span>
          </span>
        )}

        <h1 className="text-[34px] md:text-[54px] font-semibold tracking-tight leading-[1.15] text-white mb-5 max-w-[850px]">
          {title}
        </h1>

        {subtitle && (
          <p className="text-[16px] md:text-[19px] text-white/85 max-w-[760px] mx-auto leading-[28px] mb-6">
            {subtitle}
          </p>
        )}

        {children}
      </div>
    </section>
  )
}
