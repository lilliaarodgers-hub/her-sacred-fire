import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email } = body

  if (!email || typeof email !== 'string') {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  // TODO: integrate with your email provider (Mailchimp, ConvertKit, etc.)
  console.log('Waitlist signup:', { name, email })

  return NextResponse.json({ success: true })
}
