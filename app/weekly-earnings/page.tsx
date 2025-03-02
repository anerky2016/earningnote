import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WeekCalendar } from "@/components/week-calendar"
import { EarningReportTile } from "@/components/earning-report-tile"
import { getWeeklyEarnings } from "@/lib/api"

export default async function WeeklyEarningsPage({
  searchParams,
}: {
  searchParams: { date?: string }
}) {
  const selectedDate = searchParams.date ? new Date(searchParams.date) : new Date()
  const weeklyEarnings = await getWeeklyEarnings()

  // Group earnings by date
  const earningsByDate = weeklyEarnings.reduce(
    (acc, earning) => {
      const date = earning.reportDate
      if (!acc[date]) {
        acc[date] = []
      }
      acc[date].push(earning)
      return acc
    },
    {} as Record<string, typeof weeklyEarnings>,
  )

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="w-full bg-secondary py-6 sm:py-8 lg:py-12">
          <div className="container px-4 lg:px-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center">Weekly Earnings Reports</h1>
            <WeekCalendar
              onDateSelect={(date) => {
                window.location.href = `/weekly-earnings?date=${date.toISOString().split("T")[0]}`
              }}
            />
          </div>
        </section>
        <section className="bg-secondary pb-6 sm:pb-8 lg:pb-12">
          <div className="container px-4 lg:px-8">
            {Object.entries(earningsByDate).map(([date, earnings]) => (
              <div key={date} className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  {new Date(date).toLocaleDateString(undefined, {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </h2>
                <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {earnings.map((earning) => (
                    <EarningReportTile key={earning.symbol} data={earning} />
                  ))}
                </div>
              </div>
            ))}
            {Object.keys(earningsByDate).length === 0 && (
              <p className="text-center text-muted-foreground">No earnings reports for this week.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

