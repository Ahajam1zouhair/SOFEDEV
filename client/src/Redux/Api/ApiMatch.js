import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://api.football-data.org/v4",
  prepareHeaders: (headers) => {
    headers.set("X-Auth-Token", "eca3fcedb70a426c87a47e92a0c87b59");
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

export const apiMatch = createApi({
  baseQuery,
  endpoints: () => ({}),
});
