'use client'

import { useState, useEffect, useRef } from 'react'

const CHARS = '.·,:;\'|/\\!ilI1tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$'

function AsciiCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const FS = 13
    const CW = FS * 0.62

    type Cell = { char: string; op: number; target: number; speed: number; wave: number }
    let grid: Cell[][] = []
    let cols = 0
    let rows = 0
    let rafId = 0
    // wave head: column index currently being "struck"
    let waveCol = 0
    let waveTick = 0
    const WAVE_SPEED = 3 // frames between column advances

    function buildGrid() {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      cols = Math.floor(canvas.width / CW)
      rows = Math.floor(canvas.height / FS)
      grid = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => ({
          char: CHARS[Math.floor(Math.random() * CHARS.length)],
          op: Math.random() * 0.55,
          target: Math.random() * 0.6,
          speed: 0.01 + Math.random() * 0.02,
          wave: 0,
        }))
      )
    }

    buildGrid()

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${FS}px "Courier New", monospace`

      // Advance wave every WAVE_SPEED frames
      waveTick++
      if (waveTick >= WAVE_SPEED) {
        waveTick = 0
        // Strike the current column — all rows in this column flash bright + get new char
        if (grid[0]?.[waveCol]) {
          for (let r = 0; r < rows; r++) {
            const cell = grid[r][waveCol]
            cell.char = CHARS[Math.floor(Math.random() * CHARS.length)]
            cell.op = 0.85 + Math.random() * 0.15  // bright flash
            cell.target = Math.random() * 0.6       // then fade to ambient
            cell.wave = 1
          }
        }
        waveCol = (waveCol + 1) % cols
      }

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cell = grid[r][c]

          // Drift opacity toward target
          if (Math.abs(cell.op - cell.target) < 0.005) {
            cell.target = 0.25 + Math.random() * 0.55
            cell.speed = 0.008 + Math.random() * 0.018
          }
          cell.op += (cell.target - cell.op) * cell.speed

          // Random slow char flicker (non-wave)
          if (Math.random() < 0.0006) {
            cell.char = CHARS[Math.floor(Math.random() * CHARS.length)]
          }

          ctx.fillStyle = `rgba(224,133,76,${Math.min(cell.op, 0.9).toFixed(3)})`
          ctx.fillText(cell.char, c * CW, (r + 1) * FS)
        }
      }

      rafId = requestAnimationFrame(draw)
    }

    draw()

    const ro = new ResizeObserver(buildGrid)
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={ref}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
    />
  )
}

export default function VideoEmbed({
  videoId,
  title,
}: {
  videoId: string
  title: string
}) {
  const [playing, setPlaying] = useState(false)
  const [hovered, setHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (!entry.isIntersecting) setPlaying(false) },
      { threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        paddingBottom: '56.25%',
        height: 0,
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid rgba(194,89,24,0.28)',
        boxShadow: '0 0 0 1px rgba(255,255,255,0.03), 0 24px 64px rgba(0,0,0,0.55)',
        background: 'rgb(10,10,10)',
      }}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          aria-label={`Play video: ${title}`}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            background: 'rgb(10,10,10)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 28,
          }}
        >
          {/* ASCII animated background */}
          <AsciiCanvas />

          {/* Warm rust radial — darkens edges, warms center */}
          <span aria-hidden style={{
            position: 'absolute',
            inset: 0,
            background: [
              'radial-gradient(ellipse 100% 60% at 50% 100%, rgba(80,28,4,0.6) 0%, transparent 70%)',
              'radial-gradient(ellipse 100% 30% at 50% 0%, rgba(0,0,0,0.4) 0%, transparent 100%)',
            ].join(', '),
            transition: 'opacity 0.3s ease',
            opacity: hovered ? 0.8 : 1,
          }} />

          {/* Top label + title */}
          <span style={{
            position: 'relative', zIndex: 10,
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
            padding: '0 40px', textAlign: 'center',
          }}>
            <span style={{
              fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'rgb(224,133,76)',
              background: 'rgba(224,133,76,0.1)',
              border: '1px solid rgba(224,133,76,0.22)',
              borderRadius: '4px', padding: '3px 10px',
            }}>
              Watch
            </span>
            <span style={{
              fontSize: 'clamp(1.2rem, 2.4vw, 1.65rem)',
              fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.2,
              color: 'rgb(250,250,250)', maxWidth: 540,
            }}>
              {title}
            </span>
          </span>

          {/* Amber glow behind play btn */}
          <span aria-hidden style={{
            position: 'absolute',
            width: 200, height: 200, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(224,133,76,0.25) 0%, transparent 70%)',
            filter: 'blur(18px)',
            opacity: hovered ? 1 : 0.65,
            transition: 'opacity 0.3s ease',
          }} />

          {/* Play button */}
          <span aria-hidden style={{
            position: 'relative', zIndex: 10,
            width: 72, height: 72, borderRadius: '50%',
            background: 'rgb(224,133,76)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: hovered
              ? '0 0 0 14px rgba(224,133,76,0.12), 0 8px 36px rgba(224,133,76,0.5)'
              : '0 0 0 8px rgba(224,133,76,0.08), 0 4px 20px rgba(224,133,76,0.28)',
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M10 7.5l14 6.5-14 6.5V7.5z" fill="rgb(10,10,10)" />
            </svg>
          </span>
        </button>
      )}
    </div>
  )
}
