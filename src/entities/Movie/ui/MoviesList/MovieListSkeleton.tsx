import cls from './MoviesList.module.scss'
import { MovieCardSkeleton } from "@/entities/Movie/ui/MovieCard/MovieCardSkeleton";

const items = Array.from({length: 50}, (_el, index) => (index))

export const MovieListSkeleton = () => {
  return (
    <div className={cls.moviesList}>
      {items.map(item => <MovieCardSkeleton key={item}/>)}
    </div>
  );
}
