"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowDown, ArrowUp } from "lucide-react"
import type { IntradayDataPoint } from "@/lib/mockChartData"
import { createChart, LineSeries } from "lightweight-charts"

interface IntradayChartProps {
  data: IntradayDataPoint[]
  symbol: string
  title?: string
}

export function IntradayChart({ data, symbol, title }: IntradayChartProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null)
  const resizeObserverRef = useRef<ResizeObserver | null>(null)

  const startPrice = data[0].price
  const endPrice = data[data.length - 1].price
  const priceChange = endPrice - startPrice
  const percentChange = (priceChange / startPrice) * 100

  const isPositive = priceChange >= 0

  useEffect(() => {
    if (!chartContainerRef.current) return

    // Clean up previous chart elements
    while (chartContainerRef.current.firstChild) {
      chartContainerRef.current.removeChild(chartContainerRef.current.firstChild)
    }

    // Clean up previous resize observer if it exists
    if (resizeObserverRef.current) {
      resizeObserverRef.current.disconnect()
      resizeObserverRef.current = null
    }

    // Get theme colors from CSS variables
    const computedStyle = getComputedStyle(document.documentElement)
    const backgroundColor = computedStyle.getPropertyValue('--background') || '#ffffff'
    const textColor = computedStyle.getPropertyValue('--foreground') || '#1e293b'
    const gridColor = computedStyle.getPropertyValue('--border') || '#e2e8f0'

    // Create chart
    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { color: backgroundColor },
        textColor: textColor,
      },
      grid: {
        vertLines: { color: gridColor, style: 1 }, // 1 = dotted
        horzLines: { color: gridColor, style: 1 }, // 1 = dotted
      },
      width: chartContainerRef.current.clientWidth,
      height: 300,
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
    })

    // Format data for lightweight-charts
    const formattedData = data.map(point => {
      // Convert date to epoch time (milliseconds since January 1, 1970)
      const date = new Date(point.time)
      const epochTime = date.getTime()
      
      return {
        time: epochTime,
        value: point.price
      }
    })

    // Create series options
    const seriesOptions = {
      color: isPositive ? 'rgb(34, 197, 94)' : 'rgb(239, 68, 68)',
      lineWidth: 2,
      priceFormat: {
        type: 'price',
        precision: 2,
        minMove: 0.01,
      },
    }

    // Add series using addSeries method with type assertion to bypass TypeScript errors
    const series = (chart as any).addSeries(LineSeries)

    // Set data using setData method
    series.setData(formattedData)

    // Fit content
    chart.timeScale().fitContent()

    // Handle resize
    const resizeObserver = new ResizeObserver(entries => {
      if (entries.length > 0) {
        const { width } = entries[0].contentRect
        chart.applyOptions({ width })
        chart.timeScale().fitContent()
      }
    })

    resizeObserver.observe(chartContainerRef.current)
    resizeObserverRef.current = resizeObserver

    // Cleanup
    return () => {
      chart.remove()
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect()
        resizeObserverRef.current = null
      }
    }
  }, [data, isPositive])

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
      <div ref={chartContainerRef} className="h-[300px] w-full" />
    </div>
  )
}
