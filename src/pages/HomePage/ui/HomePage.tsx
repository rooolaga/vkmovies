import { MainLayout } from "@/widgets/MainLayout/MainLayout";
import { observer } from "mobx-react-lite";
import { movieStore } from "@/entities/Movie/model/movieStore";
import { useEffect } from "react";
import { MoviesList } from "@/entities/Movie";
import { MultiSelect } from "@/shared/ui/MultiSelect/MultiSelect";
import { NumbersRangePicker } from "@/shared/ui/NumbersRangePicker/NumbersRangePicker";
import { Pagination } from "@/shared/ui/Pagination/Pagination";
import cls from './HomePage.module.scss'

const years = Array.from({length: 54}, (_el, index) => (index + 1970))
const ratingRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const HomePage = observer(() => {
  const {
    movies,
    getMoviesAction,
    error,
    isLoading,
    page,
    pages,
    filter
  } = movieStore;

  const handleChangePage = async (value: number) => {
    await getMoviesAction({page: value, ...filter});
  };

  const handleChangeYearsPicker = async (years) => {
    await getMoviesAction({page: 1, ...filter, year: years})
  }

  const handleChangeRatingPicker = async (rating) => {
    await getMoviesAction({page: 1, ...filter, rating: rating})
  }

  useEffect(() => {
    getMoviesAction({page: 1, ...filter});
  }, [])


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>

  return (
    <MainLayout>
      <div className={cls.page}>
        <h1>Фильмы</h1>
        <div className={cls.filter}>
          <MultiSelect label='Жанр' items={['value 1', 'value 2', 'value 3']}/>
          <NumbersRangePicker label='Года выпуска' items={years} onChange={handleChangeYearsPicker}/>
          <NumbersRangePicker label='Рейтинг' items={ratingRange} onChange={handleChangeRatingPicker}/>
        </div>

        <MoviesList items={movies}/>

        <Pagination page={page} count={pages} onClickPage={handleChangePage}/>
      </div>
    </MainLayout>
  );
});
