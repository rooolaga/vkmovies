import { autorun, makeAutoObservable, runInAction } from "mobx";
import { getGenres, getMovieById, getMoviesList, GetMoviesListParams } from "@/entities/Movie/api/movieApi";
import { MovieCardProps } from "@/entities/Movie/ui/MovieCard/MovieCard";
import { Movie } from "./model";

export type FilterType = {
  year: {
    start: number,
    end: number
  } | undefined,
  rating: {
    start: number,
    end: number
  } | undefined,
  genres: string[]
}

class MovieStore {
  pages: number;
  page: 1;
  movies: MovieCardProps[] = [];
  movie: Movie;
  favorites: number[] = [];
  genres: string[] = [];
  isLoading = true;
  filter: FilterType = {
    year: undefined,
    rating: undefined,
    genres: [],
  }
  error = '';

  constructor() {
    makeAutoObservable(this);

    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) this.favorites = JSON.parse(storedFavorites);
    autorun(() => {
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    })
  }

  updateFilter = (filter: FilterType) => {
    this.filter = filter;
  }

  getMoviesAction = async (params: GetMoviesListParams) => {
    try {
      this.isLoading = true;
      const response = await getMoviesList(params);

      runInAction(() => {
        this.isLoading = false;
        this.page = response.page;
        this.pages = response.pages;
        this.filter.year = params.year || undefined
        this.filter.rating = params.rating || undefined
        this.filter.genres = params.genres
        this.movies = response.docs.map(item => ({
          id: item.id,
          name: item.name,
          year: item.year,
          rating: item.rating.kp,
          src: item.poster?.previewUrl
        }));
      })
    } catch (error) {
      if (error instanceof Error) {
        runInAction(() => {
          this.isLoading = false;
          this.error = error.message;
        });
      }
    }
  }

  getMovieAction = async (id: number) => {
    try {
      this.isLoading = true;
      const data = await getMovieById(id);

      runInAction(() => {
        this.isLoading = false;
        this.movie = data;
      });
    } catch (error) {
      if (error instanceof Error) {
        runInAction(() => {
          this.isLoading = false;
          this.error = error.message;
        });
      }
    }
  }

  getGenresAction = async () => {
    try {
      this.isLoading = true;
      const data = await getGenres();

      runInAction(() => {
        this.isLoading = false;
        this.genres = data.map(item => item.name);
      });
    } catch (error) {
      if (error instanceof Error) {
        runInAction(() => {
          this.isLoading = false;
          this.error = error.message;
        });
      }
    }
  }

  toFavorites = (id: number) => {
    if (this.favorites.includes(id)) {
      this.favorites = this.favorites.filter(item => item !== id);
    } else {
      this.favorites.push(id);
    }
  }
}


export const movieStore = new MovieStore();
