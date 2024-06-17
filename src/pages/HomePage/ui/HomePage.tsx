import { MainLayout } from "@/widgets/MainLayout/MainLayout";
import { observer } from "mobx-react-lite";
import { movieStore } from "@/entities/Movie/model/movieStore";
import { ChangeEvent, useEffect } from "react";
import { MoviesList } from "@/entities/Movie";
import { Pagination } from "@mui/material";
import { YearsRangePicker } from "@/shared/ui/YearsRangePicker/YearsRangePicker";

export const HomePage = observer(() => {
  // const {movies, getMoviesAction, error, isLoading, page, pages} = movieStore;
  //
  // const handleChangePage = async(event: ChangeEvent<unknown>, value: number) => {
  //   await getMoviesAction({page: value});
  // };
  //
  // useEffect(() => {
  //     getMoviesAction({page: 1});
  // }, [])
  //
  // if(isLoading) return <div>Loading...</div>;
  // if(error) return <div>{error}</div>

  const items = Array.from({ length: 54 }, (_el, index) => (index + 1970))

  return (
    <MainLayout>
      <div style={{display: 'grid', gridTemplateColumns: '2fr 3fr'}}>
        <div></div>
        <div>
          <YearsRangePicker items={items} />
        </div>
      </div>
    </MainLayout>
  )

  // return (
  //   <MainLayout>
  //     <div style={{background: 'white'}}>
  //       <Pagination count={pages} page={page} onChange={handleChangePage} />
  //     </div>
  //     <MoviesList items={movies} />
  //   </MainLayout>
  // );
});
