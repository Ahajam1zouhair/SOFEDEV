import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://newsapi.org/v2",
  prepareHeaders: (headers) => {
    headers.set("X-Api-Key", "b2df43dc8aab413191f6a4b21c6df570");
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

export const apiNews = createApi({
  reducerPath: "apiNews",
  baseQuery,
  endpoints: (builder) => ({
    getFootballNews: builder.query({
      query: ({ page = 1, pageSize = 10 }) => ({
        url: `/everything?q=football`,
        method: "GET",
        params: {
          page,
          pageSize,
        },
      }),
    }),
    getNewsTeams: builder.mutation({
      query: ({ name, page = 1, pageSize = 10 }) => ({
        url: `/everything?q=${name}`,
        method: "GET",
        params: {
          page,
          pageSize,
        },
      }),
    }),
  }),
});

export const { useGetFootballNewsQuery, useGetNewsTeamsMutation } = apiNews;
