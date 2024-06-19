import { useParams } from "react-router-dom";
import { MainLayout } from "@/widgets/MainLayout/MainLayout";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import cls from './MoviePage.module.scss'
import { movieStore } from "@/entities/Movie/model/movieStore";

export const MoviePage = observer(() => {
  const {movie, getMovieAction, error, isLoading} = movieStore;

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      getMovieAction(id);
    }
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>

  return (
    <MainLayout>
      {movie && (
        <div className={cls.moviePage}>
          <div className={cls.info}>
            <h1>{movie?.name}</h1>
            <div className={cls.year}>
              <span>Год выпуска: {movie.year}</span>
              <span>Рейтинг: {movie.rating.kp}</span>
            </div>
            <div className={cls.genre}>
              {movie.genres.map(item => (<span key={item.name}>{item.name} </span>))}
            </div>
            <div className={cls.description}>
              {movie.description}
            </div>
          </div>
          <div>
            <img src={movie.poster?.previewUrl} alt={movie.name} loading="lazy" className={cls.img}/>
          </div>
        </div>
      )}
    </MainLayout>
  );
})
