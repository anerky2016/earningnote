"use server"

import { redirect } from "next/navigation"

export async function searchStock(formData: FormData) {
  const symbol = formData.get("symbol")
  if (typeof symbol === "string" && symbol.trim()) {
    redirect(`/stock/${symbol.toUpperCase()}`)
  }
}

