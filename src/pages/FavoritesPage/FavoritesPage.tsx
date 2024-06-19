import { MainLayout } from "@/widgets/MainLayout/MainLayout";
import { observer } from "mobx-react-lite";
import { movieStore } from "@/entities/Movie/model/movieStore";
import { useEffect } from "react";
import { MoviesList } from "@/entities/Movie";
import cls from './FavoritesPage.module.scss'

export const FavoritesPage = observer(() => {
  const {
    movies,
    getMoviesAction,
    error,
    isLoading,
    favorites,
  } = movieStore;

  useEffect(() => {
    if(favorites.length > 0) {
      getMoviesAction({page: 1, id: favorites});
    }
  }, [favorites])

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>

  return (
    <MainLayout>
      <div className={cls.page}>
        <h1>Избранное</h1>
        {favorites.length > 0 ? (
          <MoviesList items={movies}/>
        ) : (
          <div>Пусто</div>
        )}
      </div>
    </MainLayout>
  );
});
