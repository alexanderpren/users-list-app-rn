
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Users, User } from '../../types/users';


export const apiSlice = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),

  endpoints: builder => ({
    getUsers: builder.query<User[], string | void>({
      query: () => '/users',
    }),
  }),
});

export const { useGetUsersQuery } = apiSlice;
