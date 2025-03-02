import { EarningReportTile } from "@/components/earning-report-tile"

interface IntradayDataPoint {
  date: string
  open: number
  high: number
  low: number
  close: number
  volume: number
}

interface EarningsData {
  symbol: string
  companyName: string
  domain: string
  reportDate: string
  fiscalQuarter: string
  eps: number
  epsEstimate: number
  revenue: number
  revenueEstimate: number
  intradayData: IntradayDataPoint[]
}

interface EarningsListProps {
  earnings: EarningsData[]
}

export function EarningsList({ earnings }: EarningsListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {earnings.map((stock) => (
        <EarningReportTile key={stock.symbol} data={stock} />
      ))}
    </div>
  )
}

