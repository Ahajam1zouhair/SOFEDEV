/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useGetStandingsByCPMutation } from "../../Redux/features/match/matchSlice";
import Loading from "../Loading/Loading";
import TableStandingCP from "../competitionsCom/standingsCP/tableStandingCP";

export default function StandingClub({ competitions }) {
  
  const [getStandingsByCP, { data, isLoading }] = useGetStandingsByCPMutation();
  if (competitions === "DFB") {
    competitions = "BL1";
  }
  console.log(competitions);
  useEffect(() => {
    if (competitions) {
      getStandingsByCP({
        competitions,
      });
    }
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
