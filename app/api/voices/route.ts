import { NextRequest, NextResponse } from 'next/server'
import { getVoices } from '../../../apis/voices'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const page = parseInt(searchParams.get('page') || '1', 10)
  const pageSize = parseInt(searchParams.get('pageSize') || '5', 10)
  const data = await getVoices(page, pageSize)
  return NextResponse.json(data)
} 