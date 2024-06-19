import { MainLayout } from "@/widgets/MainLayout/MainLayout";
import { observer } from "mobx-react-lite";
import { movieStore } from "@/entities/Movie/model/movieStore";
import { useEffect } from "react";
import { MoviesList } from "@/entities/Movie";
import { MultiSelect } from "@/shared/ui/MultiSelect/MultiSelect";
import { NumbersRangePicker } from "@/shared/ui/NumbersRangePicker/NumbersRangePicker";
import { Pagination } from "@/shared/ui/Pagination/Pagination";
import cls from './HomePage.module.scss'
import { HomePageSkeleton } from "@/pages/HomePage/ui/HomePageSkeleton";
import { Button } from "@/shared/ui/Button/Button";

const years = Array.from({length: 34}, (_el, index) => (index + 1990))
const ratingRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const HomePage = observer(() => {
  const {
    getMoviesAction,
    getGenresAction,
    updateFilter,
    movies,
    error,
    isLoading,
    page,
    pages,
    filter,
    genres
  } = movieStore;

  const handleChangePage = async (value: number) => {
    await getMoviesAction({page: value, ...filter});
  };

  const handleGenresChange = (genres) => {
    updateFilter({...filter, genres})
  }

  const handleChangeYearsPicker = (year) => {
    updateFilter({...filter, year: year})
  }

  const handleChangeRatingPicker = (rating) => {
    updateFilter({...filter, rating})
  }

  const handleChangeFilter = async () => {
    await getMoviesAction({page: 1, ...filter})
  }

  const handleClearFilter = async () => {
    await getMoviesAction({page: 1, year: undefined, rating: undefined, genres: []})
  }

  useEffect(() => {
    getMoviesAction({page: 1, ...filter});
    getGenresAction();
  }, [])


  if (isLoading) return <HomePageSkeleton />;
  if (error) return <div>{error}</div>

  return (
    <MainLayout>
      <div className={cls.page}>
        <h1>Фильмы</h1>
        <div className={cls.filter}>
          <Button onClick={handleClearFilter} className={cls.clear}>Очистить</Button>
          <MultiSelect
            label='Жанр'
            items={genres}
            selectedItems={filter.genres}
            onChange={handleGenresChange}
          />
          <NumbersRangePicker
            start={filter.year?.start}
            end={filter.year?.end}
            label='Года выпуска'
            items={years}
            onChange={handleChangeYearsPicker}
          />
          <NumbersRangePicker
            start={filter.rating?.start}
            end={filter.rating?.end}
            label='Рейтинг'
            items={ratingRange}
            onChange={handleChangeRatingPicker}
          />
          <Button onClick={handleChangeFilter} className={cls.apply}>Применить</Button>
        </div>

        <MoviesList items={movies}/>

        <Pagination page={page} count={pages} onClickPage={handleChangePage}/>
      </div>
    </MainLayout>
  );
});
