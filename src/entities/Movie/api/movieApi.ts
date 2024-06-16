import { baseApi } from "@/shared/api/baseApi";
import queryString from "query-string";

const URL = '/movie'

export type GetMoviesListParams = {
  page: number,
}

export const getMoviesList = async ({ page }: GetMoviesListParams) => {
  const res = await baseApi.get(URL, {
    params: {
      page,
      limit: 10,
      selectFields: [
        'id',
        'name',
        'year',
        'rating',
        'poster'
      ]
    },
    paramsSerializer: params => {
      return queryString.stringify(params)
    }
  });

  return res.data;
}
