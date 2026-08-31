import Link from 'next/link'

export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <div className="section-inner">
        <p className="eyebrow">404 / Page not found</p>
        <h1>This evidence trail ends here.</h1>
        <p>The address may have changed, or the page may no longer be part of the site.</p>
        <div className="button-row">
          <Link href="/" className="button button-light">Return Home</Link>
          <Link href="/blog" className="button button-quiet">Browse the Journal</Link>
        </div>
      </div>
    </main>
  )
}
