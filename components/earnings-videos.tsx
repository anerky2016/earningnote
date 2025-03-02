"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Video {
  id: string
  title: string
}

interface EarningsVideosProps {
  symbol: string
}

export function EarningsVideos({ symbol }: EarningsVideosProps) {
  const [videos, setVideos] = useState<Video[]>([])

  useEffect(() => {
    // In a real application, this would be an API call to fetch videos
    // For this example, we'll use mock data with unique IDs
    const mockVideos = [
      { id: "dQw4w9WgXcQ", title: `${symbol} Q2 Earnings Analysis` },
      { id: "9bZkp7q19f0", title: `What ${symbol}'s Latest Earnings Mean for Investors` },
      { id: "JGwWNGJdvx8", title: `Breaking Down ${symbol}'s Financials` },
    ]
    setVideos(mockVideos)
  }, [symbol])

  return (
    <Card className="w-full max-w-4xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>Earnings Interpretation Videos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <div key={video.id} className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="mt-2 text-sm font-medium">{video.title}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

