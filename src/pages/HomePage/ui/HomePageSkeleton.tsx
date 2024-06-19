import cls from "./HomePage.module.scss";
import { MovieListSkeleton } from "@/entities/Movie/ui/MoviesList/MovieListSkeleton";
import { MainLayout } from "@/widgets/MainLayout/MainLayout";
import { PaginationSkeleton } from "@/shared/ui/Pagination/PaginationSkeleton";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

export const HomePageSkeleton = () => {
  return (
    <MainLayout>
      <div className={cls.page}>
        <h1>Фильмы</h1>
        <Skeleton height={50} />
        <MovieListSkeleton />
        <PaginationSkeleton />
      </div>
    </MainLayout>
  );
}
