import cls from './MovieCard.module.scss'

export interface MovieCardProps {
  title: string;
  src: string;
}

export const MovieCard = ({
  title,
  src
}: MovieCardProps) => {
  return (
    <div className={cls.movieCard}>
      <div className={cls.imgWrapper}>
        <img src={src} alt="rrrr"/>
      </div>
      <div className={cls.info}>
        <div className={cls.title}>{title}</div>
        <div className={cls.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Aperiam, in neque. Asperiores assumenda
          autem consectetur cupiditate dolor doloribus earum
        </div>
      </div>
    </div>
  );
}
