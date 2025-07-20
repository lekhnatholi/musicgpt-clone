import { NextRequest, NextResponse } from 'next/server'
import { handleTextToSpeech } from '../../../apis/text-to-speech'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const result = await handleTextToSpeech(body)
  return NextResponse.json(result)
} 