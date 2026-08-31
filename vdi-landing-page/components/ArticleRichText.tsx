import Link from 'next/link'
import type { ReactNode } from 'react'

const TOKEN = /\[\[([^\]|]+)\|([^\]]+)\]\]/g

export default function ArticleRichText({ text }: { text: string }) {
  const nodes: ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  const pattern = new RegExp(TOKEN.source, 'g')

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index))
    const label = match[1]
    const href = match[2]
    nodes.push(
      <Link key={`${href}-${match.index}`} href={href}>
        {label}
      </Link>,
    )
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex))
  return <>{nodes}</>
}
