"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IntradayChart } from "@/components/intraday-chart"
import type { IntradayDataPoint } from "@/lib/mockChartData"

interface AfterHoursChartProps {
  data: IntradayDataPoint[]
  symbol: string
}

export function AfterHoursChart({ data, symbol }: AfterHoursChartProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>After Hours Trading</CardTitle>
      </CardHeader>
      <CardContent>
        <IntradayChart data={data} symbol={symbol} />
      </CardContent>
    </Card>
  )
}

