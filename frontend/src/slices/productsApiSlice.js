import { apiSlice } from './apiSlice';
import { PRODUCTS_URL } from '../constants';

// injecting endpoints into main apiSlice
export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // getProducts is the endpoint which will hit PRODUCTS_URL
    // it's query it's gonna make a GET request
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetProductsQuery } = productsApiSlice;
