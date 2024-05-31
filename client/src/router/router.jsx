<<<<<<< HEAD
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './PrivateRouterAdmin';
import StandingsCL from '../components/ChampionshipsCom/standingsCL';
import Championships from '../pages/Championships';
import Matchs from '../components/ChampionshipsCom/match/Matchs';
import Scorers from '../components/ChampionshipsCom/scorers/scorers';
import Palmares from '../components/ChampionshipsCom/palmares/palmares';
import Competitions from '../pages/Competitions';
import MatchsCP from '../components/competitionsCom/matchCP/MatchsCP';
import StandingsCP from '../components/competitionsCom/standingsCP/standingsCP';
import ScorersCL from '../components/competitionsCom/scorersCP/ScorersCp';
import Clubs from '../pages/Clubs';
import ClubByid from '../pages/ClubByid';
import Register from '../pages/auth/register';
import New from '../pages/New';
import Login from '../pages/auth/login';
import CreateMatch from '../pages/Admin/CreateMatch';
import AdminLayout from '../Layouts/AdminLayout';
import UserLayout from '../Layouts/UserLayout';
import MatchsAll from '../pages/Admin/Matchs';
import UpdateMatch from '../pages/Admin/Update';
import Matches from '../pages/Matches';
import Profile from '../components/profile/profile';
import UpdateProfile from '../components/profile/updateprofile';
import UserManagement from '../components/UserManagement';
=======
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./PrivateRouterAdmin";
import StandingsCL from "../components/ChampionshipsCom/standingsCL";
import Championships from "../pages/Championships";
import Matchs from "../components/ChampionshipsCom/match/Matchs";
import Scorers from "../components/ChampionshipsCom/scorers/scorers";
import Palmares from "../components/ChampionshipsCom/palmares/palmares";
import Competitions from "../pages/Competitions";
import MatchsCP from "../components/competitionsCom/matchCP/MatchsCP";
import StandingsCP from "../components/competitionsCom/standingsCP/standingsCP";
import ScorersCL from "../components/competitionsCom/scorersCP/ScorersCp";
import Clubs from "../pages/Clubs";
import ClubByid from "../pages/ClubByid";
import Register from "../pages/auth/register";
import New from "../pages/New";
import Login from "../pages/auth/login";
import CreateMatch from "../pages/Admin/CreateMatch";
import AdminLayout from "../Layouts/AdminLayout";
import UserLayout from "../Layouts/UserLayout";
import MatchsAll from "../pages/Admin/Matchs";
import UpdateMatch from "../pages/Admin/Update";
import Matches from "../pages/Matches";
import Profile from "../components/Profile/profile";
import UpdateProfile from "../components/Profile/updateprofile";

const isAuthenticated = JSON.parse(localStorage.getItem("user"));
>>>>>>> c606e7863c419e7091efcf093f3ae56c84394fec

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Matches />} />
          <Route
            path="profile"
            element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
          />
          <Route path="/updateprofile" element={<UpdateProfile />} />
          <Route path="/championships" element={<Championships />}>
            <Route index element={<Matchs />} />
            <Route path="standingsCL" element={<StandingsCL />} />
            <Route path="matchCL" element={<Matchs />} />
            <Route path="scorersCL" element={<Scorers />} />
            <Route path="palmaresCL" element={<Palmares />} />
          </Route>
          <Route path="/competitions/:competitions" element={<Competitions />}>
            <Route index element={<MatchsCP />} />
            <Route path="match" element={<MatchsCP />} />
            <Route path="standings" element={<StandingsCP />} />
            <Route path="scorers" element={<ScorersCL />} />
          </Route>
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/clubs/:name/:id" element={<ClubByid />} />
          <Route path="/new" element={<New />} />
        </Route>
        <Route path="/admin/*" element={<AdminLayout />}>
          <Route index element={<MatchsAll />} />
          <Route path="create" element={<CreateMatch />} />
          <Route path="update/:id" element={<UpdateMatch />} />
          <Route path="profile" element={<Profile />} />
          
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
<<<<<<< HEAD
        <Route path="/profile" element={<Profile />} />
<Route path="/UserManagement" element={<UserManagement />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />
=======
        {/* <Route path="/updateprofile" element={<UpdateProfile />} /> */}
>>>>>>> c606e7863c419e7091efcf093f3ae56c84394fec
      </Routes>
    </BrowserRouter>
  );
}
