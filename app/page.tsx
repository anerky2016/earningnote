import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { FeaturedEarningReport } from "@/components/featured-earning-report"
import { EarningReportTile } from "@/components/earning-report-tile"
import { UpcomingEarnings } from "@/components/upcoming-earnings"
import { WeekCalendar } from "@/components/week-calendar"
import { getTodaysEarnings, getUpcomingEarnings } from "@/lib/api"

export default async function Home() {
  const todaysEarnings = await getTodaysEarnings()
  const upcomingEarnings = await getUpcomingEarnings()
  const [featuredEarning, ...restEarnings] = todaysEarnings

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <section className="w-full bg-secondary py-6 sm:py-8 lg:py-12">
          <div className="container px-4 lg:px-8">
            <WeekCalendar linkToWeekly={true} />
          </div>
        </section>
        <section className="bg-secondary pb-6 sm:pb-8 lg:pb-12">
          <div className="container px-4 lg:px-8">
            <h2
              id="featured-report"
              className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center"
            >
              Featured Earnings Report
            </h2>
            <FeaturedEarningReport data={featuredEarning} />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center">
              Other Earnings Reports
            </h2>
            <div className="grid gap-3 xs:gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-6 sm:mb-8 lg:mb-12">
              {restEarnings.map((earning) => (
                <EarningReportTile key={earning.symbol} data={earning} />
              ))}
            </div>
            <h2
              id="upcoming-earnings"
              className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center"
            >
              Upcoming Earnings This Week
            </h2>
            <UpcomingEarnings earnings={upcomingEarnings} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

