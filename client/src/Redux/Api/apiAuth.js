import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:4000",
  
  credentials: "include",
  prepareHeaders: (headers) => {
    const user = localStorage.getItem("user");
    const token = JSON.parse(user)?.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiAuth = createApi({
  baseQuery,
  endpoints: () => ({}),
});
