import cls from './MovieCard.module.scss'

export interface MovieCardProps {
  id: number;
  name: string;
  year: number;
  rating: number;
  src: string;
}

export const MovieCard = ({
  id,
  name,
  year,
  rating,
  src
}: MovieCardProps) => {

  return (
    <div className={cls.movieCard}>
      <div className={cls.imgWrapper}>
        <img src={src} alt="rrrr" className={cls.img}/>
      </div>
      <div className={cls.info}>
        <div className={cls.title}>{name}</div>
        <div className={cls.description}>
          {rating}
          {year}
        </div>
      </div>
    </div>
  );
}
