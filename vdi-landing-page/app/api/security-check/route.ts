import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { db } from '@/lib/supabase'

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function isUrl(value: string) {
  try {
    const u = new URL(value)
    return u.protocol === 'http:' || u.protocol === 'https:'
  } catch {
    return false
  }
}

export async function POST(request: Request) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'The request body must be valid JSON.' }, { status: 400 })
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'The submitted form is invalid.' }, { status: 400 })
  }

  const values = body as Record<string, unknown>
  const email = typeof values.email === 'string' ? values.email.trim() : ''
  const url = typeof values.url === 'string' ? values.url.trim() : ''
  const company = typeof values.company === 'string' ? values.company.trim() : ''
  const concern = typeof values.concern === 'string' ? values.concern.trim() : ''

  if (!isEmail(email) || email.length > 254) {
    return NextResponse.json({ error: 'Enter a valid work email.' }, { status: 400 })
  }
  if (!isUrl(url) || url.length > 2048) {
    return NextResponse.json({ error: 'Enter a valid website or portal URL.' }, { status: 400 })
  }
  if (concern.length > 2000) {
    return NextResponse.json({ error: 'Concern must be under 2,000 characters.' }, { status: 400 })
  }

  const { error: dbError } = await db.from('security_check_requests').insert({
    email,
    url,
    company: company || null,
    concern: concern || null,
    read: false,
  })

  if (dbError) {
    console.error('Security check Supabase insert failed', dbError.message)
    return NextResponse.json({ error: 'Could not save your request. Please try again.' }, { status: 500 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const { error } = await resend.emails.send({
      from: 'Clarify Data <noreply@clerifydata.com>',
      to: 'grow@clerifydata.com',
      subject: `New Security Check Request: ${company || email}`,
      text: [
        `Email: ${email}`,
        `URL: ${url}`,
        `Company: ${company || 'Not provided'}`,
        concern ? `\nConcern:\n${concern}` : '',
      ].join('\n'),
    })

    if (error) {
      console.error('Security check email delivery failed', error.message)
    }
  } catch (error) {
    console.error('Security check email delivery failed', error instanceof Error ? error.message : 'Unknown error')
  }

  return NextResponse.json({ success: true })
}
