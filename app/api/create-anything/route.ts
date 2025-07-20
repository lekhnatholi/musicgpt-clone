import { NextRequest, NextResponse } from 'next/server'
import { handleCreateAnything } from '../../../apis/create-anything'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const result = await handleCreateAnything(body)
  return NextResponse.json(result)
} 