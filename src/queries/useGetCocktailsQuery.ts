import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Cocktail } from '../types';

export interface CocktailsApiResponse {
  drinks: Cocktail[];
}

export const cocktailsApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1/search.php'
  }),
  reducerPath: 'cocktailsApi',
  tagTypes: ['Cocktails'],
  endpoints: (build) => ({
    getCocktails: build.query<CocktailsApiResponse, string>({
      query: (code) => `?s=${code}`,
      providesTags: (result, error, id) => [{ type: 'Cocktails', id }]
    })
  })
});

export const { useGetCocktailsQuery } = cocktailsApiSlice;
