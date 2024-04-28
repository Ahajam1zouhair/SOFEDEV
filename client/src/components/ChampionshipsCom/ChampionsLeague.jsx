import { useEffect, useState } from "react";
import { useGetMatchsChLeByIdMutation } from "../../Redux/features/match/matchSlice";
import CardChampionships from "./CardChampionsLeague";
import Loading from "../Loading/Loading";

export default function ChampionsLeague() {

  
  return (
    <div className="max-w-screen-xl mx-4 px-2 md:px-8">
      <div className="grid justify-items-center ">
        <h3 className="text-gray-800 text-lg font-bold">
          UEFA Champions League 2023/2024
        </h3>
      </div>
      <div className="grid justify-items-end m-4">
      </div>
      {/* {isLoading ? <Loading />  />} */}
    </div>
  );
}
