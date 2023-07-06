export type CacheDocument = {
  id: string
  contents?: string
}

export type ExampleDocument = {
  id: string
  name?: string
  industry?: string
  date?: Date
  created?: FirestoreTimestamp
  updated?: FirestoreTimestamp
}

export type FirestoreTimestamp = {
  seconds: number
  nanoseconds: number
}

export type StockQuote = {
  market: string
  symbol: string
  date: string
  open: number
  close: number
  high: number
  low: number
  volume: number
}

export type UserExampleDocument = {
  id: string
  userId?: string
  exampleId?: string
}

export type UserExampleDraft = Omit<UserExampleDocument, 'id'>

export type Document = ExampleDocument | UserExampleDocument | { id: string; [key: string]: any }

export type Draft = Omit<Document, 'id'> & { [key: `${string}Id`]: any }
