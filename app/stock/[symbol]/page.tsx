import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StockInfo } from "@/components/stock-info"
import { FinancialMetrics } from "@/components/financial-metrics"
import { EarningsSummary } from "@/components/earnings-summary"
import { EarningsVideos } from "@/components/earnings-videos"
import { EarningsReport } from "@/components/earnings-report"
import { HistoricalEarnings } from "@/components/historical-earnings"
import { getEarningsData } from "@/lib/api"
import { notFound } from "next/navigation"

export default async function StockPage({ params }: { params: { symbol: string } }) {
  const stockData = await getEarningsData(params.symbol)

  if (!stockData) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-8 px-4">
        <div className="container mx-auto">
          <StockInfo data={stockData} />
          <FinancialMetrics
            data={{
              revenueGrowth: stockData.revenueGrowth,
              grossMargin: stockData.grossMargin,
              operatingMargin: stockData.operatingMargin,
              netMargin: stockData.netMargin,
              returnOnEquity: stockData.returnOnEquity,
              debtToEquity: stockData.debtToEquity,
            }}
          />
          <EarningsSummary data={stockData.earningsSummary} />
          <EarningsReport
            conferenceSummary={stockData.conferenceSummary}
            afterHoursChart={stockData.afterHoursChart}
            nextDaysChart={stockData.nextDaysChart}
            symbol={stockData.symbol}
          />
          <HistoricalEarnings data={stockData.historicalEarnings} />
          <EarningsVideos symbol={params.symbol} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

