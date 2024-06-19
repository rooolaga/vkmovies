import { baseApi } from "@/shared/api/baseApi";
import queryString from "query-string";

const SLUG = '/v1.4/movie'

export type GetMoviesListParams = {
  page: number,
  year?: {
    start: number,
    end: number
  } | undefined
  rating?: {
    start: number,
    end: number
  } | undefined,
  genres: string[]
  id?: string | number | number[] | undefined
}

export const getMoviesList = async ({ page, year, rating, genres, id }: GetMoviesListParams) => {
  const res = await baseApi.get(SLUG, {
    params: {
      id: id,
      page,
      limit: 50,
      'genres.name': genres,
      year: year ? `${year.start}-${year.end}` : undefined,
      'rating.kp': rating ? `${rating.start}-${rating.end}` : undefined,
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

export const getGenres = async () => {
  const res = await baseApi.get('/v1/movie/possible-values-by-field?field=genres.name');

  return res.data;
}
