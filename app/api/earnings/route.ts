import { NextResponse } from 'next/server'
import { 
  getEarningsData,
  getTodaysEarnings,
  getUpcomingEarnings,
  getWeeklyEarnings,
  type EarningsData
} from '@/lib/api'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const symbol = searchParams.get('symbol')

  try {
    if (symbol) {
      const data = await getEarningsData(symbol)
      if (!data) {
        return NextResponse.json(
          { error: 'Stock not found' }, 
          { status: 404 }
        )
      }
      return NextResponse.json(data)
    }

    const type = searchParams.get('type')
    let data: EarningsData[]

    switch (type) {
      case 'today':
        data = await getTodaysEarnings()
        break
      case 'upcoming':
        data = await getUpcomingEarnings()
        break
      case 'weekly':
        data = await getWeeklyEarnings()
        break
      default:
        return NextResponse.json(
          { error: 'Invalid type parameter' },
          { status: 400 }
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
