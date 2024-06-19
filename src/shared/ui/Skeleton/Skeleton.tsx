import cls from './Skeleton.module.scss'
import clsx from "clsx";

export interface SkeletonProps {
  height?: number;
  className?: string | undefined;
}

export const Skeleton = ({height, className}: SkeletonProps) => {
  const style = height ? {'height': `${height}px`} : undefined;

  return <div className={clsx(cls.skeleton, className)} style={style}/>
};
