import { apiMatch } from "../../Api/ApiMatch";

export const matchApiSlice = apiMatch.injectEndpoints({
  endpoints: (build) => ({
    // Champions League
    getStandingsChLeById: build.mutation({
      query: () => ({
        url: "/competitions/CL/standings",
        method: "GET",
      }),
    }),
    getMatchsChLeById: build.mutation({
      query: (id) => ({
        url: `/competitions/CL/matches?matchday=${id}`,
        method: "GET",
      }),
    }),
    getMatchsScorersChL: build.mutation({
      query: (season) => ({
        url: `/competitions/CL/scorers/?season=${season}`,
        method: "GET",
      }),
    }),
    // Competitions
    getMatchsScorersCP: build.mutation({
      query: ({ competitions }) => ({
        url: `/competitions/${competitions}`,
        method: "GET",
      }),
    }),
    getMatchsScorersCPById: build.mutation({
      query: ({ competitions, selectedOption }) => ({
        url: `/competitions/${competitions}/matches?matchday=${selectedOption}`,
        method: "GET",
      }),
    }),
    getStandingsByCP: build.mutation({
      query: ({ competitions }) => ({
        url: `/competitions/${competitions}/standings`,
        method: "GET",
      }),
    }),
    getScorersCPBySeason: build.mutation({
      query: ({ competitions, season }) => ({
        url: `/competitions/${competitions}/scorers/?season=${season}`,
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
