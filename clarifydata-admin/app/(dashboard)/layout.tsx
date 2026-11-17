import type { Metadata } from 'next'
import Sidebar from '@/components/Sidebar'
import AutoRefresh from '@/components/AutoRefresh'
import Toaster from '@/components/Toaster'

export const metadata: Metadata = { title: 'Dashboard' }

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <AutoRefresh />
      <Toaster />
      <Sidebar />
      <main style={{ marginLeft: 240, flex: 1, padding: '36px 40px', minHeight: '100vh' }}>
        {children}
      </main>
    </div>
  )
}
