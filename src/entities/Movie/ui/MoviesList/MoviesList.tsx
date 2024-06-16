import { MovieCard, MovieCardProps } from "../MovieCard/MovieCard";
import cls from './MoviesList.module.scss'

export interface MoviesListProps {
  items: MovieCardProps[];
}

export const MoviesList = ({items}: MoviesListProps) => {
  return (
    <div className={cls.moviesList}>
      {items && items.map(item => <MovieCard {...item} key={item.id} />)}
    </div>
  );
};
