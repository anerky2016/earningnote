"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IntradayChart } from "@/components/intraday-chart"
import type { IntradayDataPoint } from "@/lib/mockChartData"

interface EarningsReportProps {
  conferenceSummary: string
  afterHoursChart: IntradayDataPoint[]
  nextDaysChart: IntradayDataPoint[]
  symbol: string
}

export function EarningsReport({ conferenceSummary, afterHoursChart, nextDaysChart, symbol }: EarningsReportProps) {
  const [activeTab, setActiveTab] = useState("summary")

  return (
    <Card className="w-full max-w-4xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>Earnings Report and Stock Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="afterHours">After Hours</TabsTrigger>
            <TabsTrigger value="nextDays">Next 3 Days</TabsTrigger>
          </TabsList>
          <TabsContent value="summary">
            <h3 className="text-lg font-semibold mb-2">Conference Summary</h3>
            <p className="text-sm sm:text-base">{conferenceSummary}</p>
          </TabsContent>
          <TabsContent value="afterHours">
            <IntradayChart data={afterHoursChart} symbol={symbol} title="After Hours Trading" />
          </TabsContent>
          <TabsContent value="nextDays">
            <IntradayChart data={nextDaysChart} symbol={symbol} title="Stock Performance (Next 3 Days)" />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

