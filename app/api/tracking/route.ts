import { NextResponse } from "next/server"
import { trackingStore } from "@/lib/trackingStore"

export async function POST(request: Request) {
  const { type, path } = await request.json()

  switch (type) {
    case "pageView":
      trackingStore.incrementPageView(path)
      break
    case "click":
      trackingStore.incrementClicks()
      break
    case "session":
      trackingStore.incrementSessions()
      break
    default:
      return NextResponse.json({ error: "Invalid tracking type" }, { status: 400 })
  }

  return NextResponse.json({ success: true })
}

export async function GET() {
  const data = trackingStore.getData()
  return NextResponse.json(data)
}

