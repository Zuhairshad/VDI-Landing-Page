import type { ReactNode } from 'react'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import ShaderHero from './ShaderHero'

const COPPER_COLOR = 'rgb(194, 89, 24)'

interface PageHeroProps {
  eyebrow: ReactNode
  title: string
  intro?: string
  noteLabel?: string
  note?: ReactNode
  before?: ReactNode
  className?: string
  bgImage?: string
  bgImageSize?: string
  bgImagePosition?: string
}

export default function PageHero({
  eyebrow,
  title,
  intro,
  noteLabel,
  note,
  before,
  className = '',
  bgImage,
  bgImageSize,
  bgImagePosition,
}: PageHeroProps) {
  return (
    <ShaderHero className={className} bgImage={bgImage} bgImageSize={bgImageSize} bgImagePosition={bgImagePosition}>
      {before && <div className="mb-6">{before}</div>}

      <div className="mb-8">
        <span className="eyebrow-pill flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5" style={{ color: COPPER_COLOR }} />
          <span>{eyebrow}</span>
        </span>
      </div>

      <h1
        className="mb-6 text-[32px] md:text-[58px]"
        style={{ fontWeight: 600, letterSpacing: '-1.8px', lineHeight: '1.18', color: 'rgb(250,250,250)' }}
      >
        {title}
      </h1>

      {intro && (
        <p
          className="mb-10 max-w-[680px] text-[16px] md:text-[19px]"
          style={{ fontWeight: 450, lineHeight: '28px', color: 'rgba(250,250,250,0.85)' }}
        >
          {intro}
        </p>
      )}

      <div className="flex flex-wrap items-center justify-center gap-3.5 mb-6">
        <Link
          href="/#book-demo"
          className="px-7 py-3.5 rounded-full text-[15px] md:text-[16px] font-medium transition-opacity duration-200 shadow-lg hover:opacity-90"
          style={{ background: 'rgb(250,250,250)', color: 'rgb(10,10,10)' }}
        >
          Book a Demo
        </Link>
        <Link
          href="/how-it-works"
          className="px-7 py-3.5 rounded-full text-[15px] md:text-[16px] font-medium transition-colors duration-200 hover:bg-white/20"
          style={{ background: 'rgba(250,250,250,0.12)', color: 'rgb(250,250,250)', border: '1px solid rgba(250,250,250,0.2)' }}
        >
          See How Verification Works
        </Link>
      </div>

      {note && (
        <div className="max-w-[680px] text-[13px] leading-5 text-white/40">
          {noteLabel && <strong className="font-medium text-white/55">{noteLabel}: </strong>}
          {note}
        </div>
      )}
    </ShaderHero>
  )
}
