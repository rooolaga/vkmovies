import { makeAutoObservable, runInAction } from "mobx";
import { getMoviesList, GetMoviesListParams } from "@/entities/Movie/api/movieApi";
import { MovieCardProps } from "@/entities/Movie/ui/MovieCard/MovieCard";

export type FilterType = {
  year: string | number | number[] | undefined,
}

class MovieStore {
  pages: number;
  page: 1;
  movies: MovieCardProps[] = [];
  isLoading = true;
  filter: FilterType = {
    year: undefined
  }
  error = '';

  constructor() {
    makeAutoObservable(this);
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
        this.movies = response.docs.map(item => ({
          id: item.id,
          name: item.name,
          year: item.year,
          rating: item.rating.imdb,
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
}


export const movieStore = new MovieStore();
