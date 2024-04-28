import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../components/Layouts/NavBra";
import StandingsCL from "../components/ChampionshipsCom/standingsCL";
import Championships from "../pages/Championships";
import Matchs from "../components/ChampionshipsCom/match/Matchs";
import Scorers from "../components/ChampionshipsCom/scorers/scorers";
import Palmares from "../components/ChampionshipsCom/palmares/palmares";
import Competitions from "../pages/Competitions";
import MatchsCP from "../components/competitionsCom/matchCP/MatchsCP";
import StandingsCP from "../components/competitionsCom/standingsCP/standingsCP";
import ScorersCL from "../components/competitionsCom/scorersCP/ScorersCp";

export default function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/championships" element={<Championships />}>
          <Route index element={<Matchs />} />
          <Route path="standingsCL" element={<StandingsCL />} />
          <Route path="matchCL" element={<Matchs />} />
          <Route path="scorersCL" element={<Scorers />} />
          <Route path="palmaresCL" element={<Palmares />} />
        </Route>
        <Route path="/competitions/:competitions" element={<Competitions />} >
          <Route index element={<MatchsCP />} />
          <Route path="match" element={<MatchsCP />} />
          <Route path="standings" element={<StandingsCP />} />
          <Route path="scorers" element={<ScorersCL />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
