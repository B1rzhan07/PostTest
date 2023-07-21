// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], string>({
      query: () => ({
        url: `/posts`,
      }),
    }),
  }),
});

export const { useGetPostsQuery } = postApi;
