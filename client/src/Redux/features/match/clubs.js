import { apiMatch } from "../../Api/ApiMatch";

export const matchApiSlice = apiMatch.injectEndpoints({
  endpoints: (build) => ({
    // competitions/PL/teams
    getTeams: build.mutation({
      query: ({ competitions }) => ({
        url: `/competitions/${competitions}/teams`,
        method: "GET",
      }),
    }),
    getTeamsById: build.mutation({
      query: (id) => ({
        url: `/teams/${id}`,
        method: "GET",
      }),
    }),
    getMatchesTeamsById: build.mutation({
      query: ({ id, status }) => ({
        url: `https://api.football-data.org/v4/teams/${id}/matches?status=${status}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetTeamsMutation,
  useGetTeamsByIdMutation,
  useGetMatchesTeamsByIdMutation,
} = matchApiSlice;

// winner
// http://api.football-data.org/v4/competitions/PL/?season=2023
// http://api.football-data.org/v4/competitions/PL/teams
// http://api.football-data.org/v4/teams/86
