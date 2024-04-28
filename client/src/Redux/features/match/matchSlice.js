import { apiMatch } from "../../Api/ApiMatch";

export const matchApiSlice = apiMatch.injectEndpoints({
  endpoints: (build) => ({
    // Champions League
    getStandingsChLeById: build.mutation({
      query: () => ({
        url: "/CL/standings",
        method: "GET",
      }),
    }),
    getMatchsChLeById: build.mutation({
      query: (id) => ({
        url: `/CL/matches?matchday=${id}`,
        method: "GET",
      }),
    }),
    getMatchsScorersChL: build.mutation({
      query: (season) => ({
        url: `/CL/scorers/?season=${season}`,
        method: "GET",
      }),
    }),
    // Competitions
    getMatchsScorersCP: build.mutation({
      query: ({ competitions }) => ({
        url: `/${competitions}`,
        method: "GET",
      }),
    }),
    getMatchsScorersCPById: build.mutation({
      query: ({ competitions, selectedOption }) => ({
        url: `/${competitions}/matches?matchday=${selectedOption}`,
        method: "GET",
      }),
    }),
    getStandingsByCP: build.mutation({
      query: ({ competitions }) => ({
        url: `/${competitions}/standings`,
        method: "GET",
      }),
    }),
    getScorersCPBySeason: build.mutation({
      query: ({ competitions, season }) => ({
        url: `/${competitions}/scorers/?season=${season}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetMatchsChLeByIdMutation,
  useGetStandingsChLeByIdMutation,
  useGetMatchsScorersChLMutation,
  useGetMatchsScorersCPMutation,
  useGetMatchsScorersCPByIdMutation,
  useGetStandingsByCPMutation,
  useGetScorersCPBySeasonMutation,
} = matchApiSlice;

// winner
// http://api.football-data.org/v4/competitions/PL/?season=2023
