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
  epsEstimate: number
  revenueEstimate: number
  rating: "Buy" | "Hold" | "Sell"
  currentPrice: number
  projectedPrice: number
}

interface UpcomingEarningsProps {
  earnings: EarningsData[]
}

export function UpcomingEarnings({ earnings }: UpcomingEarningsProps) {
  return (
    <div className="grid gap-3 xs:gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {earnings.map((stock) => {
        const projectedChange = ((stock.projectedPrice - stock.currentPrice) / stock.currentPrice) * 100

        return (
          <Card key={stock.symbol} className="h-full">
            <Link href={`/stock/${stock.symbol}`}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <StockIcon domain={stock.domain} name={stock.companyName} size={32} />
                    <CardTitle className="text-base sm:text-lg">{stock.symbol}</CardTitle>
                  </div>
                  <Badge variant="outline" className="text-xs sm:text-sm">
                    {stock.fiscalQuarter}
                  </Badge>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">{stock.companyName}</p>
              </CardHeader>
              <CardContent className="p-2 xs:p-4">
                <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-2 sm:mb-4">
                  <div>
                    <p className="text-xs xs:text-sm font-medium">Est. EPS</p>
                    <p className="text-sm xs:text-base sm:text-xl font-bold">${stock.epsEstimate.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-xs xs:text-sm font-medium">Est. Revenue</p>
                    <p className="text-sm xs:text-base sm:text-xl font-bold">${stock.revenueEstimate.toFixed(1)}B</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  <div>
                    <p className="text-xs xs:text-sm font-medium">Rating</p>
                    <p className="text-sm xs:text-base sm:text-xl font-bold">{stock.rating}</p>
                  </div>
                  <div>
                    <p className="text-xs xs:text-sm font-medium">Current Price</p>
                    <p className="text-sm xs:text-base sm:text-xl font-bold">${stock.currentPrice.toFixed(2)}</p>
                    <div className="flex items-center text-xs sm:text-sm">
                      {projectedChange > 0 ? (
                        <ArrowUpRight className="text-green-500 mr-1 h-3 w-3 xs:h-4 xs:w-4" />
                      ) : projectedChange < 0 ? (
                        <ArrowDownRight className="text-red-500 mr-1 h-3 w-3 xs:h-4 xs:w-4" />
                      ) : (
                        <Minus className="text-yellow-500 mr-1 h-3 w-3 xs:h-4 xs:w-4" />
                      )}
                      <span
                        className={
                          projectedChange > 0
                            ? "text-green-500"
                            : projectedChange < 0
                              ? "text-red-500"
                              : "text-yellow-500"
                        }
                      >
                        ${stock.projectedPrice.toFixed(2)} ({Math.abs(projectedChange).toFixed(2)}%)
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2 sm:mt-4">Report Date: {stock.reportDate}</p>
              </CardContent>
            </Link>
          </Card>
        )
      })}
    </div>
  )
}

