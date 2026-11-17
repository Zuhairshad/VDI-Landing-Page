'use client'

import { useEffect, useState } from 'react'
import { subscribe, dismissToast, type Toast } from '@/lib/toasts'

const ICONS: Record<string, string> = {
  success: '✓',
  error: '✕',
  info: 'i',
}

const COLORS: Record<string, { bg: string; border: string; color: string; icon: string }> = {
  success: {
    bg: 'rgba(17,24,17,0.97)',
    border: 'rgba(34,197,94,0.3)',
    color: '#fafafa',
    icon: '#4ade80',
  },
  error: {
    bg: 'rgba(24,14,14,0.97)',
    border: 'rgba(239,68,68,0.35)',
    color: '#fafafa',
    icon: '#f87171',
  },
  info: {
    bg: 'rgba(14,18,24,0.97)',
    border: 'rgba(96,165,250,0.3)',
    color: '#fafafa',
    icon: '#60a5fa',
  },
}

function ToastItem({ t, onDismiss }: { t: Toast; onDismiss: () => void }) {
  const c = COLORS[t.type]
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '13px 16px',
        background: c.bg,
        border: `1px solid ${c.border}`,
        borderRadius: 10,
        boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
        minWidth: 280,
        maxWidth: 400,
        backdropFilter: 'blur(12px)',
        animation: 'toast-in 0.2s ease',
      }}
    >
      <span style={{
        width: 20, height: 20, borderRadius: '50%',
        background: c.icon + '18', color: c.icon,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 11, fontWeight: 800, flexShrink: 0,
      }}>
        {ICONS[t.type]}
      </span>
      <span style={{ flex: 1, fontSize: 13, color: c.color, lineHeight: 1.4 }}>{t.message}</span>
      <button
        onClick={onDismiss}
        style={{
          background: 'none', border: 'none', color: 'rgba(255,255,255,0.3)',
          cursor: 'pointer', fontSize: 16, padding: '0 2px', lineHeight: 1, flexShrink: 0,
        }}
      >
        ×
      </button>
    </div>
  )
}

export default function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([])

  useEffect(() => subscribe(setToasts), [])

  if (toasts.length === 0) return null

  return (
    <>
      <style>{`
        @keyframes toast-in {
          from { opacity: 0; transform: translateY(8px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }
      `}</style>
      <div style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        zIndex: 9999,
      }}>
        {toasts.map(t => (
          <ToastItem key={t.id} t={t} onDismiss={() => dismissToast(t.id)} />
        ))}
      </div>
    </>
  )
}
