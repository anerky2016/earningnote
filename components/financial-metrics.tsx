import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FinancialMetricsProps {
  data: {
    revenueGrowth: number
    grossMargin: number
    operatingMargin: number
    netMargin: number
    returnOnEquity: number
    debtToEquity: number
  }
}

export function FinancialMetrics({ data }: FinancialMetricsProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto mt-4 sm:mt-8">
      <CardHeader>
        <CardTitle>Key Financial Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div>
            <h3 className="text-sm font-semibold mb-1">Revenue Growth</h3>
            <p className="text-base sm:text-lg font-bold">{(data.revenueGrowth * 100).toFixed(2)}%</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-1">Gross Margin</h3>
            <p className="text-base sm:text-lg font-bold">{(data.grossMargin * 100).toFixed(2)}%</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-1">Operating Margin</h3>
            <p className="text-base sm:text-lg font-bold">{(data.operatingMargin * 100).toFixed(2)}%</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-1">Net Margin</h3>
            <p className="text-base sm:text-lg font-bold">{(data.netMargin * 100).toFixed(2)}%</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-1">Return on Equity</h3>
            <p className="text-base sm:text-lg font-bold">{(data.returnOnEquity * 100).toFixed(2)}%</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-1">Debt to Equity</h3>
            <p className="text-base sm:text-lg font-bold">{data.debtToEquity.toFixed(2)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

