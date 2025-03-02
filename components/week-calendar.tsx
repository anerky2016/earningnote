"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"

interface WeekCalendarProps {
  onDateSelect?: (date: Date) => void
  linkToWeekly?: boolean
}

export function WeekCalendar({ onDateSelect, linkToWeekly = false }: WeekCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())
  const router = useRouter()

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 1000 * 60) // Update every minute
    return () => clearInterval(timer)
  }, [])

  const getWeekDays = (date: Date) => {
    const day = date.getDay()
    const diff = date.getDate() - day + (day === 0 ? -6 : 1) // Adjust when day is sunday
    const monday = new Date(date.setDate(diff))
    const week = []

    for (let i = 0; i < 7; i++) {
      const nextDay = new Date(monday)
      nextDay.setDate(monday.getDate() + i)
      week.push(nextDay)
    }

    return week
  }

  const weekDays = getWeekDays(selectedDate)
  const currentDay = currentDate.getDate()
  const currentMonth = currentDate.toLocaleString("default", { month: "short" })
  const currentYear = currentDate.getFullYear()

  const navigateWeek = (direction: "prev" | "next") => {
    const newDate = new Date(selectedDate)
    newDate.setDate(newDate.getDate() + (direction === "next" ? 7 : -7))
    setSelectedDate(newDate)
  }

  const handleDateClick = (date: Date) => {
    setSelectedDate(date)
    if (onDateSelect) {
      onDateSelect(date)
    }
    if (linkToWeekly) {
      router.push(`/weekly-earnings?date=${date.toISOString().split("T")[0]}`)
    }
  }

  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <Button variant="ghost" size="icon" onClick={() => navigateWeek("prev")}>
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <div className="text-center">
            <h2 className="text-2xl font-bold">{`${currentMonth} ${currentYear}`}</h2>
            <p className="text-sm text-muted-foreground">
              {currentDate.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })}
            </p>
          </div>
          <Button variant="ghost" size="icon" onClick={() => navigateWeek("next")}>
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <div key={day} className="text-center text-sm font-medium text-muted-foreground">
              {day}
            </div>
          ))}
          {weekDays.map((date) => (
            <Button
              key={date.toISOString()}
              variant="ghost"
              className="flex flex-col items-center justify-center h-16"
              onClick={() => handleDateClick(date)}
            >
              <span className="text-lg">{date.getDate()}</span>
              <span
                className={`text-xs ${
                  date.getDate() === selectedDate.getDate() && date.getMonth() === selectedDate.getMonth()
                    ? "text-primary font-bold"
                    : date.getDate() === currentDay && date.getMonth() === currentDate.getMonth()
                      ? "text-secondary-foreground font-bold"
                      : date.getMonth() !== selectedDate.getMonth()
                        ? "text-muted-foreground"
                        : ""
                }`}
              >
                {date.toLocaleString("default", { month: "short" })}
              </span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

