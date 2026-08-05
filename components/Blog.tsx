'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const posts = [
  {
    category: 'Research',
    title: 'Why 69% of AI Legal Answers Contain Hallucinations',
    excerpt: 'Stanford RegLab and HAI published the number. We looked at what it actually means for every team that uses AI to draft legal content — and why the rate is almost certainly higher in clinical and compliance contexts.',
    date: 'Mar 2026',
    readTime: '6 min',
  },
  {
    category: 'Compliance',
    title: "EU AI Act Article 50: What 'Human Review' Actually Requires",
    excerpt: "The exemption exists. The exemption has conditions. Most teams claiming it don't meet them. We broke down what Article 50 requires, what qualifies as genuine human review, and what a verification record needs to contain to satisfy it.",
    date: 'Feb 2026',
    readTime: '8 min',
  },
  {
    category: 'Product',
    title: 'How Verification Coverage Compounds Over Time',
    excerpt: 'The fact bank gets more useful with every engagement. Here is the mechanics of how that works — why the tenth client benefits from what the first nine verified, and what it means for turnaround times at scale.',
    date: 'Jan 2026',
    readTime: '5 min',
  },
]

export default function Blog() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })

  return (
    <section ref={ref} id="blog" className="py-24 md:py-32 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      <div className="inner">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.07em] mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Blog
            </p>
            <h2 className="text-[36px] md:text-[40px] font-medium leading-[1.2] tracking-[-1.6px]" style={{ color: 'rgb(255,243,240)' }}>
              From the team
            </h2>
          </div>
          <a
            href="#"
            className="text-[14px] tracking-[-0.28px] transition-colors duration-300 hidden md:block"
            style={{ color: 'rgba(255,255,255,0.4)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgb(255,243,240)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
          >
            All posts →
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 + i * 0.1, duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
              className="group flex flex-col rounded-2xl p-6 transition-all duration-300 cursor-pointer"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <span
                  className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)' }}
                >
                  {post.category}
                </span>
                <span className="text-[12px]" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  {post.date} · {post.readTime}
                </span>
              </div>

              <h3
                className="text-[17px] font-medium leading-[1.3] tracking-[-0.34px] mb-3 flex-1 transition-colors duration-300"
                style={{ color: 'rgb(255,243,240)' }}
              >
                {post.title}
              </h3>

              <p className="text-[13px] leading-5 mb-5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                {post.excerpt}
              </p>

              <span
                className="text-[13px] font-medium transition-colors duration-300"
                style={{ color: 'rgba(255,255,255,0.3)' }}
              >
                Read more →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
