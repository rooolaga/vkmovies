import logo from '@/shared/assets/logo.svg'
import cls from './MovieCard.module.scss'
import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/Button/Button";
import { movieStore } from "@/entities/Movie/model/movieStore";
import { observer } from "mobx-react-lite";

export interface MovieCardProps {
  id: number;
  name: string;
  year: number;
  rating: number;
  src: string;
}

export const MovieCard = observer(({
  id,
  name,
  year,
  rating,
  src
}: MovieCardProps) => {

  const {favorites, toFavorites} = movieStore;

  return (
    <div className={cls.movieCard}>
      <div className={cls.imgWrapper}>
        {src ? (
          <img src={src} alt={name} className={cls.img} loading="lazy"/>
        ) : (
          <img src={logo} alt={name} className={cls.noImg} loading="lazy"/>
        )}
      </div>
      <div className={cls.description}>
        <div className={cls.rating}>Рейтинг: {rating}</div>
        <div className={cls.year}>Год: {year}</div>
      </div>
      <div className={cls.title}>
        {name}
      </div>
      <div className={cls.controls}>
        <Link className={cls.link} to={`/${id}`}>Перейти</Link>
        <Button onClick={() => toFavorites(id)}>
          {favorites.includes(id) ? 'Убрать из избранного' : 'В избранное'}
        </Button>
      </div>
    </div>
  );
});
