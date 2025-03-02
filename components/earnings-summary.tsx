import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface EarningsSummaryProps {
  data: {
    averageEpsBeat: number
    averageRevenueBeat: number
    beatsInLastFourQuarters: number
  }
}

export function EarningsSummary({ data }: EarningsSummaryProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto mt-4 sm:mt-8">
      <CardHeader>
        <CardTitle>Earnings Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <h3 className="text-sm font-semibold mb-2">Average EPS Beat</h3>
            <p className="text-xl sm:text-2xl font-bold">{data.averageEpsBeat.toFixed(2)}%</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Average Revenue Beat</h3>
            <p className="text-xl sm:text-2xl font-bold">{data.averageRevenueBeat.toFixed(2)}%</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Beats in Last 4 Quarters</h3>
            <p className="text-xl sm:text-2xl font-bold">{data.beatsInLastFourQuarters} / 4</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

