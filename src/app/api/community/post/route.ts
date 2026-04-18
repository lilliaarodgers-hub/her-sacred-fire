import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const { title, category, body: postBody } = body

  if (!title || !category || !postBody) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // TODO: save to your community backend (WordPress BuddyPress, Circle.so API, custom DB, etc.)
  console.log('Community post:', { title, category })

  return NextResponse.json({ success: true })
}
