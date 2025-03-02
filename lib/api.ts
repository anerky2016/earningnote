import type { IntradayDataPoint } from "./mockChartData"

export interface EarningsReport {
  fiscalQuarter: string
  reportDate: string
  eps: number
  epsEstimate: number
  revenue: number
  revenueEstimate: number
  callSummary: string
}

interface EarningsSummary {
  averageEpsBeat: number
  averageRevenueBeat: number
  beatsInLastFourQuarters: number
}

export interface EarningsData {
  symbol: string
  companyName: string
  domain: string
  reportDate: string
  fiscalQuarter: string
  eps: number | null
  epsEstimate: number
  revenue: number | null
  revenueEstimate: number
  intradayData: IntradayDataPoint[]
  currentPrice: number
  projectedPrice: number
  marketCap: number
  peRatio: number | null
  dividendYield: number | null
  volume: number
  avgVolume: number
  revenueGrowth: number
  grossMargin: number
  operatingMargin: number
  netMargin: number
  returnOnEquity: number
  debtToEquity: number
  historicalEarnings: EarningsReport[]
  earningsSummary: EarningsSummary
  conferenceSummary: string
  afterHoursChart: IntradayDataPoint[]
  nextDaysChart: IntradayDataPoint[]
}

const mockData: Record<string, EarningsData> = {
  AAPL: {
    symbol: "AAPL",
    companyName: "Apple Inc.",
    domain: "apple.com",
    reportDate: "2025-04-30",
    fiscalQuarter: "Q2 2025",
    eps: 1.52,
    epsEstimate: 1.48,
    revenue: 94.8,
    revenueEstimate: 93.5,
    intradayData: generateMockIntradayData(180.5),
    currentPrice: 180.5,
    projectedPrice: 210.0,
    marketCap: 2800000000000,
    peRatio: 30.5,
    dividendYield: 0.005,
    volume: 55000000,
    avgVolume: 60000000,
    revenueGrowth: 0.08,
    grossMargin: 0.43,
    operatingMargin: 0.3,
    netMargin: 0.25,
    returnOnEquity: 0.35,
    debtToEquity: 1.2,
    historicalEarnings: [
      {
        fiscalQuarter: "Q1 2025",
        reportDate: "2025-01-25",
        eps: 1.46,
        epsEstimate: 1.42,
        revenue: 92.5,
        revenueEstimate: 91.8,
        callSummary:
          "Apple reported strong growth in Services and Wearables. iPhone sales slightly exceeded expectations, while Mac and iPad sales were in line with estimates. The company highlighted its continued focus on AI and augmented reality technologies, with new product launches expected in the coming quarters.",
      },
      {
        fiscalQuarter: "Q4 2024",
        reportDate: "2024-10-28",
        eps: 1.39,
        epsEstimate: 1.37,
        revenue: 89.7,
        revenueEstimate: 88.9,
        callSummary:
          "The company saw robust holiday sales, particularly in emerging markets. Apple Pay and other financial services showed significant growth. Management discussed supply chain improvements and their impact on gross margins. The company also announced increased investments in renewable energy projects.",
      },
      {
        fiscalQuarter: "Q3 2024",
        reportDate: "2024-07-27",
        eps: 1.35,
        epsEstimate: 1.33,
        revenue: 87.2,
        revenueEstimate: 86.5,
        callSummary:
          "Apple's Services segment continued to show strong growth, driven by increased subscriptions across its platforms. The company reported progress in its environmental initiatives, including advancements in recycling technologies. Management also discussed ongoing R&D efforts in health-related technologies.",
      },
      {
        fiscalQuarter: "Q2 2024",
        reportDate: "2024-04-29",
        eps: 1.31,
        epsEstimate: 1.3,
        revenue: 85.1,
        revenueEstimate: 84.8,
        callSummary:
          "iPhone sales were slightly below expectations due to supply constraints, but this was offset by strong performance in Services and Wearables. The company announced new initiatives in privacy and security features across its product line. Management also discussed the expansion of its retail presence in key markets.",
      },
    ],
    earningsSummary: {
      averageEpsBeat: 2.15,
      averageRevenueBeat: 0.82,
      beatsInLastFourQuarters: 4,
    },
    conferenceSummary:
      "Apple reported strong growth across all product categories. The company highlighted the success of the iPhone 13 lineup and continued growth in Services. CEO Tim Cook emphasized Apple's commitment to innovation and sustainability.",
    afterHoursChart: generateMockIntradayData(180.5, 24), // 2 hours of after-hours trading
    nextDaysChart: generateMockIntradayData(182.0, 390 * 3), // 3 days of trading data
  },
  GOOGL: {
    symbol: "GOOGL",
    companyName: "Alphabet Inc.",
    domain: "google.com",
    reportDate: "2025-04-28",
    fiscalQuarter: "Q1 2025",
    eps: 1.31,
    epsEstimate: 1.28,
    revenue: 68.2,
    revenueEstimate: 67.5,
    intradayData: generateMockIntradayData(2750.0),
    currentPrice: 2750.0,
    projectedPrice: 3100.0,
    marketCap: 1500000000000,
    peRatio: 25.0,
    dividendYield: null,
    volume: 1500000,
    avgVolume: 1800000,
    revenueGrowth: 0.12,
    grossMargin: 0.58,
    operatingMargin: 0.28,
    netMargin: 0.22,
    returnOnEquity: 0.28,
    debtToEquity: 0.8,
    historicalEarnings: [
      {
        fiscalQuarter: "Q4 2024",
        reportDate: "2025-01-30",
        eps: 1.28,
        epsEstimate: 1.25,
        revenue: 66.5,
        revenueEstimate: 65.8,
        callSummary:
          "Google Cloud continued its strong growth trajectory, gaining market share in key segments. YouTube ad revenue showed resilience despite increased competition. The company highlighted advancements in its AI and machine learning capabilities, particularly in search and ad targeting.",
      },
      {
        fiscalQuarter: "Q3 2024",
        reportDate: "2024-10-24",
        eps: 1.24,
        epsEstimate: 1.22,
        revenue: 64.8,
        revenueEstimate: 64.2,
        callSummary:
          "Alphabet reported solid growth in its core advertising business, driven by improvements in ad formats and targeting. The Other Bets segment showed promising results, particularly in healthcare technology. Management discussed ongoing efforts to enhance user privacy while maintaining ad effectiveness.",
      },
      {
        fiscalQuarter: "Q2 2024",
        reportDate: "2024-07-25",
        eps: 1.2,
        epsEstimate: 1.18,
        revenue: 63.1,
        revenueEstimate: 62.7,
        callSummary:
          "The company saw strong performance in mobile search and YouTube, offsetting some weakness in desktop search. Google Cloud Platform continued to gain traction among enterprise customers. Alphabet also announced new initiatives in sustainable computing and green data centers.",
      },
      {
        fiscalQuarter: "Q1 2024",
        reportDate: "2024-04-23",
        eps: 1.15,
        epsEstimate: 1.14,
        revenue: 61.5,
        revenueEstimate: 61.2,
        callSummary:
          "Alphabet reported better-than-expected results, driven by a rebound in ad spending and continued growth in cloud services. The company highlighted its progress in quantum computing research and discussed potential applications across various industries. Management also addressed ongoing regulatory challenges in key markets.",
      },
    ],
    earningsSummary: {
      averageEpsBeat: 1.8,
      averageRevenueBeat: 1.2,
      beatsInLastFourQuarters: 4,
    },
    conferenceSummary:
      "Google's Q1 earnings showed strong growth in Cloud and YouTube.  AI initiatives were highlighted as key drivers of future growth.",
    afterHoursChart: generateMockIntradayData(2750.0, 24),
    nextDaysChart: generateMockIntradayData(2770.0, 390 * 3),
  },
  MSFT: {
    symbol: "MSFT",
    companyName: "Microsoft Corporation",
    domain: "microsoft.com",
    reportDate: "2025-04-25",
    fiscalQuarter: "Q3 2025",
    eps: 2.35,
    epsEstimate: 2.32,
    revenue: 52.9,
    revenueEstimate: 52.1,
    intradayData: generateMockIntradayData(330.2),
    currentPrice: 330.2,
    projectedPrice: 380.0,
    marketCap: 2500000000000,
    peRatio: 28.5,
    dividendYield: 0.008,
    volume: 20000000,
    avgVolume: 25000000,
    revenueGrowth: 0.15,
    grossMargin: 0.65,
    operatingMargin: 0.4,
    netMargin: 0.35,
    returnOnEquity: 0.4,
    debtToEquity: 0.9,
    historicalEarnings: [],
    earningsSummary: {
      averageEpsBeat: 0,
      averageRevenueBeat: 0,
      beatsInLastFourQuarters: 0,
    },
    conferenceSummary:
      "Microsoft exceeded expectations in Q3, driven by strong growth in cloud services and enterprise software.",
    afterHoursChart: generateMockIntradayData(330.2, 24),
    nextDaysChart: generateMockIntradayData(333.0, 390 * 3),
  },
  AMZN: {
    symbol: "AMZN",
    companyName: "Amazon.com Inc.",
    domain: "amazon.com",
    reportDate: "2025-04-25",
    fiscalQuarter: "Q1 2025",
    eps: 0.83,
    epsEstimate: 0.75,
    revenue: 124.5,
    revenueEstimate: 122.8,
    intradayData: generateMockIntradayData(3300.5),
    currentPrice: 3300.5,
    projectedPrice: 3800.0,
    marketCap: 1200000000000,
    peRatio: 40.0,
    dividendYield: null,
    volume: 3000000,
    avgVolume: 3500000,
    revenueGrowth: 0.1,
    grossMargin: 0.38,
    operatingMargin: 0.15,
    netMargin: 0.1,
    returnOnEquity: 0.2,
    debtToEquity: 1.5,
    historicalEarnings: [],
    earningsSummary: {
      averageEpsBeat: 0,
      averageRevenueBeat: 0,
      beatsInLastFourQuarters: 0,
    },
    conferenceSummary:
      "Amazon's Q1 results showed solid growth in e-commerce and cloud services, despite ongoing economic uncertainty.",
    afterHoursChart: generateMockIntradayData(3300.5, 24),
    nextDaysChart: generateMockIntradayData(3330.0, 390 * 3),
  },
  NVDA: {
    symbol: "NVDA",
    companyName: "NVIDIA Corporation",
    domain: "nvidia.com",
    reportDate: "2025-04-25",
    fiscalQuarter: "Q1 2025",
    eps: 4.12,
    epsEstimate: 3.98,
    revenue: 18.2,
    revenueEstimate: 17.8,
    intradayData: generateMockIntradayData(620.8),
    currentPrice: 620.8,
    projectedPrice: 750.0,
    marketCap: 800000000000,
    peRatio: 55.0,
    dividendYield: null,
    volume: 8000000,
    avgVolume: 9000000,
    revenueGrowth: 0.25,
    grossMargin: 0.6,
    operatingMargin: 0.45,
    netMargin: 0.38,
    returnOnEquity: 0.45,
    debtToEquity: 0.5,
    historicalEarnings: [],
    earningsSummary: {
      averageEpsBeat: 0,
      averageRevenueBeat: 0,
      beatsInLastFourQuarters: 0,
    },
    conferenceSummary: "NVIDIA's Q1 earnings were exceptionally strong, driven by high demand for its AI chips.",
    afterHoursChart: generateMockIntradayData(620.8, 24),
    nextDaysChart: generateMockIntradayData(630.0, 390 * 3),
  },
  META: {
    symbol: "META",
    companyName: "Meta Platforms, Inc.",
    domain: "meta.com",
    reportDate: "2025-05-01",
    fiscalQuarter: "Q1 2025",
    eps: null,
    epsEstimate: 2.85,
    revenue: null,
    revenueEstimate: 30.5,
    intradayData: generateMockIntradayData(305.0),
    currentPrice: 305.0,
    projectedPrice: 320.0,
    marketCap: 600000000000,
    peRatio: null,
    dividendYield: null,
    volume: 4000000,
    avgVolume: 5000000,
    revenueGrowth: 0.05,
    grossMargin: 0.48,
    operatingMargin: 0.25,
    netMargin: 0.2,
    returnOnEquity: 0.25,
    debtToEquity: 1.0,
    historicalEarnings: [],
    earningsSummary: {
      averageEpsBeat: 0,
      averageRevenueBeat: 0,
      beatsInLastFourQuarters: 0,
    },
    conferenceSummary: "Meta's Q1 results showed modest growth, with a focus on the metaverse and Reels.",
    afterHoursChart: generateMockIntradayData(305.0, 24),
    nextDaysChart: generateMockIntradayData(308.0, 390 * 3),
  },
  TSLA: {
    symbol: "TSLA",
    companyName: "Tesla, Inc.",
    domain: "tesla.com",
    reportDate: "2025-05-02",
    fiscalQuarter: "Q2 2025",
    eps: null,
    epsEstimate: 0.92,
    revenue: null,
    revenueEstimate: 22.3,
    intradayData: generateMockIntradayData(185.0),
    currentPrice: 185.0,
    projectedPrice: 200.0,
    marketCap: 700000000000,
    peRatio: null,
    dividendYield: null,
    volume: 60000000,
    avgVolume: 70000000,
    revenueGrowth: 0.18,
    grossMargin: 0.28,
    operatingMargin: 0.12,
    netMargin: 0.08,
    returnOnEquity: 0.15,
    debtToEquity: 0.7,
    historicalEarnings: [],
    earningsSummary: {
      averageEpsBeat: 0,
      averageRevenueBeat: 0,
      beatsInLastFourQuarters: 0,
    },
    conferenceSummary: "Tesla's Q2 earnings are anticipated to show continued growth in vehicle deliveries.",
    afterHoursChart: generateMockIntradayData(185.0, 24),
    nextDaysChart: generateMockIntradayData(188.0, 390 * 3),
  },
  NFLX: {
    symbol: "NFLX",
    companyName: "Netflix, Inc.",
    domain: "netflix.com",
    reportDate: "2025-05-03",
    fiscalQuarter: "Q2 2025",
    eps: null,
    epsEstimate: 3.15,
    revenue: null,
    revenueEstimate: 8.7,
    intradayData: generateMockIntradayData(420.0),
    currentPrice: 420.0,
    projectedPrice: 480.0,
    marketCap: 200000000000,
    peRatio: 35.0,
    dividendYield: null,
    volume: 2000000,
    avgVolume: 2500000,
    revenueGrowth: 0.08,
    grossMargin: 0.7,
    operatingMargin: 0.3,
    netMargin: 0.25,
    returnOnEquity: 0.3,
    debtToEquity: 0.6,
    historicalEarnings: [],
    earningsSummary: {
      averageEpsBeat: 0,
      averageRevenueBeat: 0,
      beatsInLastFourQuarters: 0,
    },
    conferenceSummary:
      "Netflix's Q2 earnings are expected to reflect continued subscriber growth and expansion into new markets.",
    afterHoursChart: generateMockIntradayData(420.0, 24),
    nextDaysChart: generateMockIntradayData(425.0, 390 * 3),
  },
}

function generateMockWeeklyEarnings(): EarningsData[] {
  const startDate = new Date("2025-04-27") // Sunday
  const weeklyEarnings: EarningsData[] = []

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(startDate)
    currentDate.setDate(startDate.getDate() + i)

    // Skip weekends
    if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
      continue
    }

    const dailyEarnings = Object.values(mockData)
      .slice(i * 2, i * 2 + 2) // Get 2 stocks per day
      .map((stock) => ({
        ...stock,
        reportDate: currentDate.toISOString().split("T")[0],
      }))

    weeklyEarnings.push(...dailyEarnings)
  }

  return weeklyEarnings
}

export function generateMockIntradayData(startPrice: number, dataPoints = 390): IntradayDataPoint[] {
  const data: IntradayDataPoint[] = []
  let currentPrice = startPrice

  const startTime = new Date()
  startTime.setHours(9, 30, 0, 0) // Start at 9:30 AM

  for (let i = 0; i < dataPoints; i++) {
    const time = new Date(startTime.getTime() + i * 60000) // Add minutes

    // Generate a random price change between -0.5% and 0.5%
    const change = (Math.random() - 0.5) * 0.01
    currentPrice *= 1 + change

    data.push({
      time: time.toISOString(),
      price: Number.parseFloat(currentPrice.toFixed(2)),
    })
  }

  return data
}

export async function getEarningsData(symbol: string): Promise<EarningsData | null> {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return mockData[symbol] || null
}

export async function getTodaysEarnings(): Promise<EarningsData[]> {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return Object.values(mockData).slice(0, 5)
}

export async function getUpcomingEarnings(): Promise<EarningsData[]> {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return Object.values(mockData).slice(-3)
}

export async function getWeeklyEarnings(): Promise<EarningsData[]> {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return generateMockWeeklyEarnings()
}

