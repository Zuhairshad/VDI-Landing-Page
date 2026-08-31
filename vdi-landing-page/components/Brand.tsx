import Image from 'next/image'
import Link from 'next/link'

export default function Brand({ eager = false }: { eager?: boolean }) {
  return (
    <Link href="/" className="brand" aria-label="Clarify Data home">
      <Image
        src="/clarify-mark.webp"
        alt=""
        width={42}
        height={42}
        className="brand-logo"
        loading={eager ? 'eager' : 'lazy'}
      />
      <span>CLARIFY DATA</span>
    </Link>
  )
}
