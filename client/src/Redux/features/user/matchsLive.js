import { apiAuth } from "../../Api/apiAuth";

export const matchsLive = apiAuth.injectEndpoints({
  tagTypes: ["Match"],
  endpoints: (build) => ({
    // get Matchs All
    getAllmatchs: build.query({
      query: () => ({
        url: "/api/match",
      }),
      providesTags: ["Match"],
    }),
    // create Matcher
    createMatch: build.mutation({
      query: (date) => ({
        url: "/api/match",
        method: "POST",
        body: date,
      }),
      invalidatesTags: ["Match"],
    }),
    // get match By id
    getBYIdmatch: build.mutation({
      query: (id) => ({
        url: `/api/match/${id}`,
      }),
    }),
    // get match By id
    updateMatch: build.mutation({
      query: ({ id, date }) => ({
        url: `/api/match/${id}`,
        method: "PUT",
        body: date,
      }),
      invalidatesTags: ["Match"],
    }),
  }),
});

export const {
  useCreateMatchMutation,
  useGetAllmatchsQuery,
  useGetBYIdmatchMutation,
  useUpdateMatchMutation,
} = matchsLive;
//
