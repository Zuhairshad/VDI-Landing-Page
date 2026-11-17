import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const industry = searchParams.get('industry')
  const db = createAdminClient()
  let q = db.from('industry_data').select('*').order('label')
  if (industry) q = q.eq('industry', industry)
  const { data, error } = await q
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data ?? [])
}

export async function POST(request: Request) {
  const db = createAdminClient()
  const body = await request.json() as Record<string, unknown>
  const { data, error } = await db.from('industry_data').insert(body).select('*').single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data, { status: 201 })
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  if (!id) return NextResponse.json({ error: 'id required.' }, { status: 400 })
  const db = createAdminClient()
  const { error } = await db.from('industry_data').delete().eq('id', id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ success: true })
}
