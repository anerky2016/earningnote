"use client"

import { Button } from "@/components/ui/button"
import { useCallback } from "react"

export function Hero() {
  const scrollToSection = useCallback((elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }, [])

  return (
    <div className="py-20 text-center px-4 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="relative z-10 animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
          Today's <span className="text-gradient">Earnings</span> Note
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Stay informed with the latest financial reports and upcoming earnings this week
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors hover-lift"
            onClick={() => scrollToSection("featured-report")}
          >
            View Featured Report
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors hover-lift"
            onClick={() => scrollToSection("upcoming-earnings")}
          >
            See Upcoming Earnings
          </Button>
        </div>
      </div>
    </div>
  )
}

