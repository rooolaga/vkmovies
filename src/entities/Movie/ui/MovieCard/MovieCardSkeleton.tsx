import cls from './MovieCard.module.scss'
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

export const MovieCardSkeleton = () => <Skeleton className={cls.movieCard} />
