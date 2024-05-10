import { apiAuth } from "../../Api/apiAuth";

export const authApiSlice = apiAuth.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: (date) => ({
        url: "api/user/register",
        method: "POST",
        body: date,
      }),
    }),
    login: build.mutation({
      query: (date) => ({
        url: "/api/user/login",
        method: "POST",
        body: date,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApiSlice;
