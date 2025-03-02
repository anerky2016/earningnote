import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface NewsArticle {
  title: string
  source: string
  url: string
  publishedAt: string
  summary: string
}

interface StockNewsProps {
  symbol: string
  news: NewsArticle[]
}

export function StockNews({ symbol, news }: StockNewsProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>Latest News for {symbol}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {news.map((article, index) => (
            <div key={index} className="border-b border-border pb-4 last:border-b-0 last:pb-0">
              <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {article.source} - {new Date(article.publishedAt).toLocaleDateString()}
              </p>
              <p className="text-sm mb-3">{article.summary}</p>
              <Button asChild variant="outline" size="sm">
                <Link href={article.url} target="_blank" rel="noopener noreferrer">
                  Read More
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

