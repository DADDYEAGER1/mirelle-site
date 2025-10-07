// src/app/api/comments/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    
    const { rating, name, email, comment, postSlug, postTitle } = data;
    
    // Validation
    if (!rating || !name || !email || !comment) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // Send to Google Sheets via Apps Script
    const response = await fetch(process.env.NEXT_PUBLIC_GOOGLE_COMMENTS_SCRIPT_URL!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        rating,
        name,
        email,
        comment,
        postSlug,
        postTitle,
        timestamp: new Date().toISOString()
      })
    });

    if (!response.ok) throw new Error('Google Script failed');

    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
