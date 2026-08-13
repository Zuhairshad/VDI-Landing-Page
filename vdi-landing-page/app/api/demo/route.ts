import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email, company, industry, description } = await req.json()

    const response = await fetch('https://formsubmit.co/ajax/grow@clerifydata.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _subject: `New Clarify Data Demo Request: ${industry} — ${company}`,
        _captcha: 'false',
        Email: email,
        Company: company,
        Industry: industry,
        Description: description,
      }),
    })

    if (response.ok) {
      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ success: true, status: 'dispatched' })
  } catch (error) {
    console.error('Demo submission error:', error)
    return NextResponse.json({ success: true })
  }
}
