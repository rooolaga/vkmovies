export interface Movie {
  id: number;
  name: string;
  year: number;
  rating: Rating;
  poster: {
    url: string,
    previewUrl: string
  }
}

export interface Rating {
  kp: number;
  imdb: number;
  tmdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}
