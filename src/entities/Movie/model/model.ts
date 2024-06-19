export interface Rating {
  kp: number
  imdb: number
  tmdb: number
  filmCritics: number
  russianFilmCritics: number
  await: number
}

export interface Movie {
  id: number
  externalId: ExternalId
  name: string
  alternativeName: string
  enName: string
  names: Name[]
  type: string
  typeNumber: number
  year: number
  description: string
  shortDescription: string
  slogan: string
  status: string
  facts: Fact[]
  rating: Rating
  votes: Votes
  movieLength: number
  ratingMpaa: string
  ageRating: number
  logo: Logo
  poster: Poster
  backdrop: Backdrop
  videos: Videos
  genres: Genre[]
  countries: Country[]
  persons: Person[]
  reviewInfo: ReviewInfo
  seasonsInfo: SeasonsInfo[]
  budget: Budget
  fees: Fees
  premiere: Premiere
  similarMovies: SimilarMovy[]
  sequelsAndPrequels: SequelsAndPrequel[]
  watchability: Watchability
  releaseYears: ReleaseYear[]
  top10: number
  top250: number
  ticketsOnSale: boolean
  totalSeriesLength: number
  seriesLength: number
  isSeries: boolean
  audience: Audience[]
  lists: string[]
  networks: Networks
  updatedAt: string
  createdAt: string
}

export interface ExternalId {
  kpHD: string
  imdb: string
  tmdb: number
}

export interface Name {
  name: string
  language: string
  type: string
}

export interface Fact {
  value: string
  type: string
  spoiler: boolean
}

export interface Votes {
  kp: string
  imdb: number
  tmdb: number
  filmCritics: number
  russianFilmCritics: number
  await: number
}

export interface Logo {
  url: string
}

export interface Poster {
  url: string
  previewUrl: string
}

export interface Backdrop {
  url: string
  previewUrl: string
}

export interface Videos {
  trailers: Trailer[]
}

export interface Trailer {
  url: string
  name: string
  site: string
  size: number
  type: string
}

export interface Genre {
  name: string
}

export interface Country {
  name: string
}

export interface Person {
  id: number
  photo: string
  name: string
  enName: string
  description: string
  profession: string
  enProfession: string
}

export interface ReviewInfo {
  count: number
  positiveCount: number
  percentage: string
}

export interface SeasonsInfo {
  number: number
  episodesCount: number
}

export interface Budget {
  value: number
  currency: string
}

export interface Fees {
  world: World
  russia: Russia
  usa: Usa
}

export interface World {
  value: number
  currency: string
}

export interface Russia {
  value: number
  currency: string
}

export interface Usa {
  value: number
  currency: string
}

export interface Premiere {
  country: string
  world: string
  russia: string
  digital: string
  cinema: string
  bluray: string
  dvd: string
}

export interface SimilarMovy {
  id: number
  name: string
  enName: string
  alternativeName: string
  type: string
  poster: Poster2
  rating: Rating2
  year: number
}

export interface Poster2 {
  url: string
  previewUrl: string
}

export interface Rating2 {
  kp: number
  imdb: number
  tmdb: number
  filmCritics: number
  russianFilmCritics: number
  await: number
}

export interface SequelsAndPrequel {
  id: number
  name: string
  enName: string
  alternativeName: string
  type: string
  poster: Poster3
  rating: Rating3
  year: number
}

export interface Poster3 {
  url: string
  previewUrl: string
}

export interface Rating3 {
  kp: number
  imdb: number
  tmdb: number
  filmCritics: number
  russianFilmCritics: number
  await: number
}

export interface Watchability {
  items: Item[]
}

export interface Item {
  name: string
  logo: Logo2
  url: string
}

export interface Logo2 {
  url: string
}

export interface ReleaseYear {
  start: number
  end: number
}

export interface Audience {
  count: number
  country: string
}

export interface Networks {
  items: Item2[]
}

export interface Item2 {
  name: string
  logo: Logo3
}

export interface Logo3 {
  url: string
}
