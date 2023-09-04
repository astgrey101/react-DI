export interface Logger {
  log(message: string): void;
}

export type Result<T> = {
  results: T[]
}

export type People = {
  name: string
  url: string
}

export type Planets = {
  name: string
  url: string
}
