"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IntradayChart } from "@/components/intraday-chart"
import type { IntradayDataPoint } from "@/lib/mockChartData"

interface NextDaysChartProps {
  data: IntradayDataPoint[]
  symbol: string
}

export function NextDaysChart({ data, symbol }: NextDaysChartProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>Stock Performance (Next 3 Days)</CardTitle>
      </CardHeader>
      <CardContent>
        <IntradayChart data={data} symbol={symbol} />
      </CardContent>
    </Card>
  )
}

