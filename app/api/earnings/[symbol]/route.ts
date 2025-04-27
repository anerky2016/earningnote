import { NextResponse } from 'next/server'
import { getEarningsData, type EarningsData } from '@/lib/api'

export async function GET(
  request: Request,
  { params }: { params: { symbol: string } }
) {
  try {
    const data = await getEarningsData(params.symbol)
    if (!data) {
      return NextResponse.json(
        { error: 'Stock not found' },
        { status: 404 }
      )
    }
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
