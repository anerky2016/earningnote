import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StockIcon } from "@/components/stock-icon"
import { IntradayChart } from "@/components/intraday-chart"
import type { IntradayDataPoint } from "@/lib/mockChartData"

interface StockInfoProps {
  data: {
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
    currentPrice: number
    projectedPrice: number
    marketCap: number
    peRatio: number | null
    dividendYield: number | null
    volume: number
    avgVolume: number
  }
}

export function StockInfo({ data }: StockInfoProps) {
  const projectedChange = ((data.projectedPrice - data.currentPrice) / data.currentPrice) * 100

  return (
    <Card className="w-full max-w-4xl mx-auto glassmorphism">
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <StockIcon domain={data.domain} name={data.companyName} size={48} />
            <div>
              <CardTitle className="text-2xl sm:text-3xl">{data.symbol}</CardTitle>
              <p className="text-lg sm:text-xl text-muted-foreground">{data.companyName}</p>
            </div>
          </div>
          <Badge variant="outline">{data.fiscalQuarter}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-4 sm:mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Earnings Per Share (EPS)</h3>
            <p className="text-2xl sm:text-3xl font-bold">${data.eps?.toFixed(2) ?? "N/A"}</p>
            <p className="text-sm text-muted-foreground">Estimate: ${data.epsEstimate.toFixed(2)}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Revenue</h3>
            <p className="text-2xl sm:text-3xl font-bold">${data.revenue?.toFixed(1) ?? "N/A"}B</p>
            <p className="text-sm text-muted-foreground">Estimate: ${data.revenueEstimate.toFixed(1)}B</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-4 sm:mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Current Price</h3>
            <p className="text-2xl sm:text-3xl font-bold">${data.currentPrice.toFixed(2)}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Projected Price</h3>
            <p className="text-2xl sm:text-3xl font-bold">${data.projectedPrice.toFixed(2)}</p>
            <p className="text-sm text-muted-foreground">
              {projectedChange >= 0 ? "+" : ""}
              {projectedChange.toFixed(2)}%
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4 sm:mb-8">
          <div>
            <h3 className="text-sm font-semibold mb-1">Market Cap</h3>
            <p className="text-base sm:text-lg font-bold">${(data.marketCap / 1e9).toFixed(2)}B</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-1">P/E Ratio</h3>
            <p className="text-base sm:text-lg font-bold">{data.peRatio?.toFixed(2) ?? "N/A"}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-1">Dividend Yield</h3>
            <p className="text-base sm:text-lg font-bold">
              {data.dividendYield ? `${(data.dividendYield * 100).toFixed(2)}%` : "N/A"}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-1">Volume</h3>
            <p className="text-base sm:text-lg font-bold">{data.volume.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">Avg: {data.avgVolume.toLocaleString()}</p>
          </div>
        </div>
        <div className="mb-4 sm:mb-8">
          <h3 className="text-lg font-semibold mb-2">Report Date</h3>
          <p className="text-xl">{data.reportDate}</p>
        </div>
        <IntradayChart data={data.intradayData} symbol={data.symbol} />
      </CardContent>
    </Card>
  )
}

