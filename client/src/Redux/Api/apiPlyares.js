import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://www.thesportsdb.com/api/v1/json/3",
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

export const apiPlayers = createApi({
  reducerPath: "apiPlayers",
  baseQuery,
  endpoints: (builder) => ({
    getPlayer: builder.query({
      query: (playerName) => `/searchplayers.php?p=${playerName}`,
    }),
  }),
});

export const { useGetPlayerQuery } = apiPlayers;
