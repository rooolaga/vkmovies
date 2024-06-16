import { MainLayout } from "@/widgets/MainLayout/MainLayout";
import { observer } from "mobx-react-lite";
import { movieStore } from "@/entities/Movie/model/movieStore";
import { ChangeEvent, useEffect } from "react";
import { MoviesList } from "@/entities/Movie";
import { Pagination } from "@mui/material";



export const HomePage = observer(() => {
  const {movies, getMoviesAction, error, isLoading, page, pages} = movieStore;

  const handleChangePage = async(event: ChangeEvent<unknown>, value: number) => {
    await getMoviesAction({page: value});
  };


  useEffect(() => {
      getMoviesAction({page: 1});
  }, [])


  if(isLoading) return <div>Loading...</div>;
  if(error) return <div>{error}</div>

  return (
    <MainLayout>
      <MoviesList items={movies} />
      <div style={{background: 'white'}}>
        <Pagination count={pages} page={page} onChange={handleChangePage} />
      </div>
    </MainLayout>
  );
});
