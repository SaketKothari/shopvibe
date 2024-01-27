import { apiSlice } from './apiSlice';
import { USERS_URL } from '../constants';

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Now we can dispatch this login action from our login screen
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: 'POST',
        body: data,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useLoginMutation } = usersApiSlice;
