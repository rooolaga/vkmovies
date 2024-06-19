import { baseApi } from "@/shared/api/baseApi";
import queryString from "query-string";

const SLUG = '/movie'

export type GetMoviesListParams = {
  page: number,
  year?: string | number | number[] | undefined
  rating?: string | number | number[] | undefined
  id?: string | number | number[] | undefined
}

export const getMoviesList = async ({ page, year, rating, id }: GetMoviesListParams) => {
  console.log('id', id);
  const res = await baseApi.get(SLUG, {
    params: {
      page,
      limit: 50,
      year: year,
      id: id,
      'rating.kp': rating,
      selectFields: [
        'id',
        'name',
        'year',
        'rating',
        'poster'
      ],
      notNullFields: [
        'name',
        'year',
        'rating.kp'
      ]
    },
    paramsSerializer: params => {
      return queryString.stringify(params)
    }
  });

  return res.data;
}

export const getMovieById = async (id: number) => {
  const res =  await baseApi.get(`${SLUG}/${id}`);

  return res.data;
}
