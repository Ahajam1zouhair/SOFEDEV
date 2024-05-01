/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useGetStandingsByCPMutation } from "../../../Redux/features/match/matchSlice";
import { useParams } from "react-router-dom";

import Loading from "../../Loading/Loading";
import TableStandingCP from "./tableStandingCP";

export default function StandingsCP() {
  const { competitions } = useParams();

  const [getStandingsByCP, { data, isLoading }] = useGetStandingsByCPMutation();

  useEffect(() => {
    getStandingsByCP({
      competitions,
    });
  }, [getStandingsByCP, competitions]);
  if (data) {
    console.log(data);
  }
  return (
    <div className="max-w-screen-xl mx-auto  md:px-12">
      {isLoading ? <Loading /> : <TableStandingCP data={data} />}
    </div>
  );
}
