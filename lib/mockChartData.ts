export interface IntradayDataPoint {
  time: string
  price: number
}

export function generateMockIntradayData(startPrice: number): IntradayDataPoint[] {
  const data: IntradayDataPoint[] = []
  let currentPrice = startPrice

  const today = new Date()
  today.setHours(9, 30, 0, 0) // Start at 9:30 AM

  for (let i = 0; i < 390; i += 5) {
    // 390 minutes in a trading day, sample every 5 minutes
    const time = new Date(today.getTime() + i * 60000) // Add minutes

    // Generate a random price change between -0.5% and 0.5%
    const change = (Math.random() - 0.5) * 0.01
    currentPrice *= 1 + change

    data.push({
      time: time.toISOString(),
      price: Number.parseFloat(currentPrice.toFixed(2)),
    })
  }

  return data
}

