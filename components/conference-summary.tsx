import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ConferenceSummaryProps {
  summary: string
}

export function ConferenceSummary({ summary }: ConferenceSummaryProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>Earnings Conference Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm sm:text-base">{summary}</p>
      </CardContent>
    </Card>
  )
}

