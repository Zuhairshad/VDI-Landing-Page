import { NextResponse } from 'next/server'
import { db } from '@/lib/supabase'

export async function GET() {
  const { data, error } = await db
    .from('demo_requests')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

export async function PATCH(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 })
  }

  const values = body as Record<string, unknown>
  const id = typeof values.id === 'string' ? values.id : null
  const read = typeof values.read === 'boolean' ? values.read : null

  if (!id || read === null) {
    return NextResponse.json({ error: 'id and read are required.' }, { status: 400 })
  }

  const { data, error } = await db
    .from('demo_requests')
    .update({ read })
    .eq('id', id)
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}
