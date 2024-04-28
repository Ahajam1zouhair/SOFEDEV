import { useEffect, useState } from "react";
import { useGetScorersCPBySeasonMutation } from "../../../Redux/features/match/matchSlice";
import { useParams } from "react-router-dom";

import Loading from "../../Loading/Loading";
import TableScorersCP from "./tableScoresCP";

export default function ScorersCL() {
  const { competitions } = useParams();
  const [selectedOption, setSelectedOption] = useState("2023");

  const handleSelectChange = (e) => {
    setSelectedOption(Number(e.target.value));
  };

  const [getMatchsChLeById, { data, isLoading }] =
    useGetScorersCPBySeasonMutation();

  useEffect(() => {
    getMatchsChLeById({ competitions, season: selectedOption });
  }, [getMatchsChLeById, competitions, selectedOption]);

  console.log(data);

  return (
    <>
      <div className="max-w-screen-xl mx-4 px-2 md:px-8">
        <div className="grid justify-items-end m-4">
          <select
            className="block appearance-none w-aout bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="2023">2023/2024</option>
            <option value="2022">2022/2023</option>
            <option value="2021">2021/2022</option>
            <option value="2020">2020/2021</option>
          </select>
        </div>
      </div>

      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <TableScorersCP data={data} season={selectedOption} />
        )}
      </div>
    </>
  );
}
