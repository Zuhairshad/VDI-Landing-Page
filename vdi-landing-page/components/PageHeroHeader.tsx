import type { ReactNode } from 'react'
import PageHero from './PageHero'

interface PageHeroHeaderProps {
  eyebrow?: string
  icon?: ReactNode
  title: string
  subtitle?: string
  noteLabel?: string
  note?: ReactNode
  children?: ReactNode
  className?: string
}

export default function PageHeroHeader({
  eyebrow,
  icon,
  title,
  subtitle,
  noteLabel,
  note,
  children,
  className = '',
}: PageHeroHeaderProps) {
  return (
    <PageHero
      eyebrow={<>{icon}{eyebrow}</>}
      title={title}
      intro={subtitle}
      noteLabel={noteLabel ?? (children ? 'Additional context' : undefined)}
      note={note ?? children}
      className={className}
    />
  )
}
