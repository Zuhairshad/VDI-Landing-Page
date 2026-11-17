import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/server'

export async function GET() {
  const db = createAdminClient()
  const { data, error } = await db.from('demo_requests').select('*').order('created_at', { ascending: false })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data ?? [])
}

export async function PATCH(request: Request) {
  const db = createAdminClient()
  const { id, read } = await request.json() as { id: string; read: boolean }
  const { data, error } = await db.from('demo_requests').update({ read }).eq('id', id).select('*').single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}
