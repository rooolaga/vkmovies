import { autorun, makeAutoObservable, runInAction } from "mobx";
import { getMovieById, getMoviesList, GetMoviesListParams } from "@/entities/Movie/api/movieApi";
import { MovieCardProps } from "@/entities/Movie/ui/MovieCard/MovieCard";
import { Movie } from "./model";

export type FilterType = {
  year: string | number | number[] | undefined,
  rating: string | number | number[] | undefined,
}

class MovieStore {
  pages: number;
  page: 1;
  movies: MovieCardProps[] = [];
  movie: Movie;
  favorites: number[] = []
  isLoading = true;
  filter: FilterType = {
    year: undefined,
    rating: undefined,
  }
  error = '';

  constructor() {
    makeAutoObservable(this);

    const storedFavorites = localStorage.getItem('favorites');
    if(storedFavorites) this.favorites = JSON.parse(storedFavorites);
    autorun(() => {
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    })
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

  toFavorites = (id: number) => {
    if(this.favorites.includes(id)) {
      this.favorites = this.favorites.filter(item => item !== id);
    } else {
      this.favorites.push(id);
    }
  }
}


export const movieStore = new MovieStore();
