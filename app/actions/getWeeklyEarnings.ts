"use server"

import { getWeeklyEarnings as fetchWeeklyEarnings } from "@/lib/api"

export async function getWeeklyEarnings(date: string) {
  const weeklyEarnings = await fetchWeeklyEarnings()
  const selectedDate = new Date(date)

  // Get the start and end of the week
  const startOfWeek = new Date(selectedDate)
  startOfWeek.setDate(selectedDate.getDate() - selectedDate.getDay())
  const endOfWeek = new Date(startOfWeek)
  endOfWeek.setDate(startOfWeek.getDate() + 6)

  // Filter earnings for the entire week
  return weeklyEarnings.filter((earning) => {
    const earningDate = new Date(earning.reportDate)
    return earningDate >= startOfWeek && earningDate <= endOfWeek
  })
}

