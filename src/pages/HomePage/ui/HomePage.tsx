import { MainLayout } from "@/widgets/MainLayout/MainLayout";
import { observer } from "mobx-react-lite";
import { movieStore } from "@/entities/Movie/model/movieStore";
import { ChangeEvent, useEffect } from "react";
import { MoviesList } from "@/entities/Movie";
import { Pagination} from "@mui/material";
import { MultiSelect } from "@/shared/ui/MultiSelect/MultiSelect";
import { NumbersRangePicker } from "@/shared/ui/NumbersRangePicker/NumbersRangePicker";

export const HomePage = observer(() => {
  const {movies, getMoviesAction, error, isLoading, page, pages, filter} = movieStore;

  const handleChangePage = async(event: ChangeEvent<unknown>, value: number) => {
    await getMoviesAction({page: value, ...filter});
  };

  const handleChangeYearsPicker = async(years) => {
    await getMoviesAction({page: 1, ...filter, year: years})
  }


  useEffect(() => {
      getMoviesAction({page: 1, ...filter});
  }, [])


  if(isLoading) return <div>Loading...</div>;
  if(error) return <div>{error}</div>

  const years = Array.from({ length: 54 }, (_el, index) => (index + 1970))
  const ratingRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <MainLayout>
      <h1>Фильмы</h1>

      <div style={{display: 'flex', gap: '20px'}}>
        <MultiSelect label='Жанр' items={['value 1', 'value 2', 'value 3']}/>
        <NumbersRangePicker label='Года выпуска' items={years} onChange={handleChangeYearsPicker} />
        <NumbersRangePicker label='Рейтинг' items={ratingRange} onChange={() => console.log('change')} />
      </div>

      <div style={{background: 'white'}}>
        {/*<Pagination count={pages} page={page} onChange={handleChangePage} />*/}
      </div>
      <MoviesList items={movies} />
    </MainLayout>
  );
});
