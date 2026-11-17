export type ToastType = 'success' | 'error' | 'info'

export type Toast = {
  id: string
  message: string
  type: ToastType
}

type Listener = (toasts: Toast[]) => void

let toasts: Toast[] = []
const listeners = new Set<Listener>()

function notify() {
  listeners.forEach(fn => fn([...toasts]))
}

export function toast(message: string, type: ToastType = 'success') {
  const id = Math.random().toString(36).slice(2, 9)
  toasts = [...toasts, { id, message, type }]
  notify()
  setTimeout(() => {
    toasts = toasts.filter(t => t.id !== id)
    notify()
  }, 4000)
}

export function dismissToast(id: string) {
  toasts = toasts.filter(t => t.id !== id)
  notify()
}

export function subscribe(fn: Listener): () => void {
  listeners.add(fn)
  fn([...toasts])
  return () => listeners.delete(fn)
}
