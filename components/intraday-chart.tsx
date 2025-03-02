"use client"

import { useEffect, useState } from "react"
import { ArrowDown, ArrowUp } from "lucide-react"
import type { IntradayDataPoint } from "@/lib/mockChartData"
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

interface IntradayChartProps {
  data: IntradayDataPoint[]
  symbol: string
  title?: string
}

export function IntradayChart({ data, symbol, title }: IntradayChartProps) {
  const [chartData, setChartData] = useState<IntradayDataPoint[]>([])

  useEffect(() => {
    setChartData(data)
  }, [data])

  const startPrice = data[0].price
  const endPrice = data[data.length - 1].price
  const priceChange = endPrice - startPrice
  const percentChange = (priceChange / startPrice) * 100

  const isPositive = priceChange >= 0

  const formatXAxis = (time: string) => {
    const date = new Date(time)
    return `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}`
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">{title || `${symbol} Chart`}</h3>
        <div className={`flex items-center ${isPositive ? "text-green-500" : "text-red-500"}`}>
          <span className="text-2xl font-bold mr-2">${endPrice.toFixed(2)}</span>
          <span className="flex items-center">
            {isPositive ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
            {Math.abs(priceChange).toFixed(2)} ({Math.abs(percentChange).toFixed(2)}%)
          </span>
        </div>
      </div>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="time" tickFormatter={formatXAxis} interval="preserveStartEnd" />
            <YAxis domain={["auto", "auto"]} tickFormatter={(value) => `$${value.toFixed(2)}`} />
            <Tooltip
              labelFormatter={(label) => new Date(label).toLocaleString()}
              formatter={(value: number) => [`$${value.toFixed(2)}`, "Price"]}
            />
            <Area
              type="monotone"
              dataKey="price"
              stroke="hsl(var(--primary))"
              fillOpacity={1}
              fill="url(#colorPrice)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

