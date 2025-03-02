import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StockIcon } from "@/components/stock-icon"
import { IntradayChart } from "@/components/intraday-chart"
import type { IntradayDataPoint } from "@/lib/mockChartData"
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react"

interface EarningsData {
  symbol: string
  companyName: string
  domain: string
  reportDate: string
  fiscalQuarter: string
  eps: number | null
  epsEstimate: number
  revenue: number | null
  revenueEstimate: number
  intradayData: IntradayDataPoint[]
  rating: "Buy" | "Hold" | "Sell"
  currentPrice: number
  projectedPrice: number
}

interface FeaturedEarningReportProps {
  data: EarningsData
}

export function FeaturedEarningReport({ data }: FeaturedEarningReportProps) {
  const projectedChange = ((data.projectedPrice - data.currentPrice) / data.currentPrice) * 100

  return (
    <Card className="w-full mb-8 overflow-hidden animate-fade-in-up">
      <CardHeader className="bg-muted">
        <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <StockIcon domain={data.domain} name={data.companyName} size={48} />
            <div>
              <CardTitle className="text-2xl sm:text-3xl">{data.symbol}</CardTitle>
              <p className="text-lg sm:text-xl text-muted-foreground">{data.companyName}</p>
            </div>
          </div>
          <Badge variant="outline" className="mt-2 sm:mt-0">
            {data.fiscalQuarter}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Earnings Per Share (EPS)</h3>
              <p className="text-3xl font-bold">${data.eps?.toFixed(2) ?? "N/A"}</p>
              <p className="text-sm text-muted-foreground">Estimate: ${data.epsEstimate.toFixed(2)}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Revenue</h3>
              <p className="text-3xl font-bold">${data.revenue?.toFixed(1) ?? "N/A"}B</p>
              <p className="text-sm text-muted-foreground">Estimate: ${data.revenueEstimate.toFixed(1)}B</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Stock Rating</h3>
              <p className="text-3xl font-bold">{data.rating}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Current Price</h3>
              <p className="text-3xl font-bold">${data.currentPrice.toFixed(2)}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Projected Price</h3>
              <p className="text-3xl font-bold">${data.projectedPrice.toFixed(2)}</p>
              <div className="flex items-center">
                {projectedChange > 0 ? (
                  <ArrowUpRight className="text-green-500 mr-1" />
                ) : projectedChange < 0 ? (
                  <ArrowDownRight className="text-red-500 mr-1" />
                ) : (
                  <Minus className="text-yellow-500 mr-1" />
                )}
                <span
                  className={
                    projectedChange > 0 ? "text-green-500" : projectedChange < 0 ? "text-red-500" : "text-yellow-500"
                  }
                >
                  {Math.abs(projectedChange).toFixed(2)}%
                </span>
              </div>
            </div>
          </div>
        </div>
        <IntradayChart data={data.intradayData} symbol={data.symbol} />
      </CardContent>
    </Card>
  )
}

