import type { ReactNode } from 'react'
import ShaderBackground from './ShaderBackground'

export default function ShaderHero({
  id,
  className = '',
  children,
}: {
  id?: string
  className?: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden ${className}`.trim()}
      style={{ background: 'rgb(28,9,2)' }}
    >
      <ShaderBackground />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,3,1,0.28) 0%, rgba(10,3,1,0.0) 28%, rgba(10,3,1,0.0) 68%, rgba(10,3,1,0.38) 100%)',
        }}
      />
      <div className="relative z-10 flex flex-col items-center text-center px-5 py-24 md:py-32 max-w-[920px] mx-auto">
        {children}
      </div>
    </section>
  )
}
