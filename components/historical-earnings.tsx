"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowUpIcon, ArrowDownIcon, MinusIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface EarningsReport {
  fiscalQuarter: string
  reportDate: string
  eps: number
  epsEstimate: number
  revenue: number
  revenueEstimate: number
  callSummary: string
}

interface HistoricalEarningsProps {
  data: EarningsReport[]
}

export function HistoricalEarnings({ data }: HistoricalEarningsProps) {
  const [expandedRow, setExpandedRow] = useState<number | null>(null)

  const toggleRow = (index: number) => {
    setExpandedRow(expandedRow === index ? null : index)
  }

  return (
    <Card className="w-full max-w-4xl mx-auto mt-4 sm:mt-8">
      <CardHeader>
        <CardTitle>Historical Earnings Reports</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Quarter</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>EPS</TableHead>
                <TableHead>Est.</TableHead>
                <TableHead>Rev ($B)</TableHead>
                <TableHead>Est. ($B)</TableHead>
                <TableHead>Summary</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((report, index) => (
                <>
                  <TableRow key={index}>
                    <TableCell>{report.fiscalQuarter}</TableCell>
                    <TableCell>{report.reportDate}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        ${report.eps.toFixed(2)}
                        {renderComparisonIcon(report.eps, report.epsEstimate)}
                      </div>
                    </TableCell>
                    <TableCell>${report.epsEstimate.toFixed(2)}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        ${(report.revenue / 1e9).toFixed(2)}
                        {renderComparisonIcon(report.revenue, report.revenueEstimate)}
                      </div>
                    </TableCell>
                    <TableCell>${(report.revenueEstimate / 1e9).toFixed(2)}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" onClick={() => toggleRow(index)} className="flex items-center">
                        {expandedRow === index ? (
                          <ChevronUpIcon className="h-4 w-4 mr-2" />
                        ) : (
                          <ChevronDownIcon className="h-4 w-4 mr-2" />
                        )}
                        {expandedRow === index ? "Hide" : "Show"}
                      </Button>
                    </TableCell>
                  </TableRow>
                  {expandedRow === index && (
                    <TableRow>
                      <TableCell colSpan={7} className="bg-muted">
                        <div className="p-4">
                          <h4 className="font-semibold mb-2">Earnings Call Summary:</h4>
                          <p>{report.callSummary}</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

function renderComparisonIcon(actual: number, estimate: number) {
  if (actual > estimate) {
    return <ArrowUpIcon className="w-4 h-4 text-green-500 ml-1" />
  } else if (actual < estimate) {
    return <ArrowDownIcon className="w-4 h-4 text-red-500 ml-1" />
  } else {
    return <MinusIcon className="w-4 h-4 text-yellow-500 ml-1" />
  }
}

