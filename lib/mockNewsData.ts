import { faker } from "@faker-js/faker"

export interface NewsArticle {
  title: string
  source: string
  url: string
  publishedAt: string
  summary: string
}

export function generateMockNews(symbol: string): NewsArticle[] {
  return Array.from({ length: 5 }, () => ({
    title: faker.lorem.sentence(),
    source: faker.company.name(),
    url: faker.internet.url(),
    publishedAt: faker.date.recent(7).toISOString(),
    summary: faker.lorem.paragraph(),
  }))
}

