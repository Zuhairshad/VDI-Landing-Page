import Link from 'next/link'
import { articles } from '@/lib/articles'

export default function BlogJournal() {
  return (
    <section className="content-section journal-list" aria-labelledby="journal-heading">
      <div className="section-inner">
        <header className="section-heading">
          <p className="eyebrow">Information quality journal</p>
          <h2 id="journal-heading">Methods teams can use in real review work</h2>
          <p>Practical guidance on evidence, provenance, human oversight, and repeatable research.</p>
        </header>
        <div className="journal-grid">
          {articles.map((article) => (
            <article key={article.slug}>
              <div className="journal-meta"><span>{article.category}</span><time dateTime={article.publishedIso}>{article.published}</time></div>
              <h3><Link href={`/blog/${article.slug}`}>{article.title}</Link></h3>
              <p>{article.summary}</p>
              <div className="journal-card-footer"><span>{article.readTime}</span><Link href={`/blog/${article.slug}`}>Read article →</Link></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
