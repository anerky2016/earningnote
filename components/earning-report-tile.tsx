import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StockIcon } from "@/components/stock-icon"
import Link from "next/link"
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
  rating?: "Buy" | "Hold" | "Sell"
  currentPrice: number
  projectedPrice: number
}

interface EarningReportTileProps {
  data: EarningsData
}

export function EarningReportTile({ data }: EarningReportTileProps) {
  const projectedChange = ((data.projectedPrice - data.currentPrice) / data.currentPrice) * 100

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300 animate-fade-in-up card-hover">
      <Link href={`/stock/${data.symbol}`}>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <StockIcon domain={data.domain} name={data.companyName} size={32} />
              <CardTitle className="text-lg sm:text-xl">{data.symbol}</CardTitle>
            </div>
            <Badge variant="secondary" className="text-xs sm:text-sm">
              {data.fiscalQuarter}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-1">{data.companyName}</p>
        </CardHeader>
        <CardContent className="p-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">EPS</p>
              <p className="text-lg sm:text-xl font-bold">${data.eps?.toFixed(2) ?? "N/A"}</p>
              <p className="text-xs text-muted-foreground">Est: ${data.epsEstimate.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Revenue</p>
              <p className="text-lg sm:text-xl font-bold">${data.revenue?.toFixed(1) ?? "N/A"}B</p>
              <p className="text-xs text-muted-foreground">Est: ${data.revenueEstimate.toFixed(1)}B</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Rating</p>
              <p className="text-lg sm:text-xl font-bold">{data.rating || "Hold"}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Price</p>
              <p className="text-lg sm:text-xl font-bold">${data.currentPrice.toFixed(2)}</p>
              <div className="flex items-center text-sm">
                {projectedChange > 0 ? (
                  <ArrowUpRight className="text-green-500 mr-1 h-4 w-4" />
                ) : projectedChange < 0 ? (
                  <ArrowDownRight className="text-red-500 mr-1 h-4 w-4" />
                ) : (
                  <Minus className="text-yellow-500 mr-1 h-4 w-4" />
                )}
                <span
                  className={
                    projectedChange > 0 ? "text-green-500" : projectedChange < 0 ? "text-red-500" : "text-yellow-500"
                  }
                >
                  ${data.projectedPrice.toFixed(2)} ({Math.abs(projectedChange).toFixed(2)}%)
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
