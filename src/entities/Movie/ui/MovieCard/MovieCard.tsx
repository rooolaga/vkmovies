import logo from '@/shared/assets/logo.svg'
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
        {src ? (
          <img src={src} alt={name} className={cls.img}/>
        ) : (
          <img src={logo} alt={name} className={cls.noImg} />
        )}
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
