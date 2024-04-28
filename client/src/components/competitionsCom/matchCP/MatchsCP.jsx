import { useEffect, useState } from "react";
import { useGetMatchsScorersCPByIdMutation } from "../../../Redux/features/match/matchSlice";
import { useParams } from "react-router-dom";
import MatchCPCard from "./MatchCPCard";
import Loading from "../../Loading/Loading";

export default function MatchsCP() {
  const { competitions } = useParams();
  const [selectedOption, setSelectedOption] = useState(34);
  const stagesMap = [
    { value: 1, day: "DAY 1" },
    { value: 2, day: "DAY 2" },
    { value: 3, day: "DAY 3" },
    { value: 4, day: "DAY 4" },
    { value: 5, day: "DAY 5" },
    { value: 6, day: "DAY 6" },
    { value: 7, day: "DAY 7" },
    { value: 8, day: "DAY 8" },
    { value: 9, day: "DAY 9" },
    { value: 10, day: "DAY 10" },
    { value: 11, day: "DAY 11" },
    { value: 12, day: "DAY 12" },
    { value: 13, day: "DAY 13" },
    { value: 14, day: "DAY 14" },
    { value: 15, day: "DAY 15" },
    { value: 16, day: "DAY 16" },
    { value: 17, day: "DAY 17" },
    { value: 18, day: "DAY 18" },
    { value: 19, day: "DAY 19" },
    { value: 20, day: "DAY 20" },
    { value: 21, day: "DAY 21" },
    { value: 22, day: "DAY 22" },
    { value: 23, day: "DAY 23" },
    { value: 24, day: "DAY 24" },
    { value: 25, day: "DAY 25" },
    { value: 26, day: "DAY 26" },
    { value: 27, day: "DAY 27" },
    { value: 28, day: "DAY 28" },
    { value: 29, day: "DAY 29" },
    { value: 30, day: "DAY 30" },
    { value: 31, day: "DAY 31" },
    { value: 32, day: "DAY 32" },
    { value: 33, day: "DAY 33" },
    { value: 34, day: "DAY 34" },
    { value: 35, day: "DAY 35" },
    { value: 36, day: "DAY 36" },
    { value: 37, day: "DAY 37" },
    { value: 38, day: "DAY 38" },
  ];

  console.log(selectedOption);

  const [getMatchsScorersCPById, { data, isLoading }] =
    useGetMatchsScorersCPByIdMutation();

  useEffect(() => {
    getMatchsScorersCPById({
      competitions,
      selectedOption,
    });
  }, [getMatchsScorersCPById, selectedOption, competitions]);
  console.log(data);
  return (
    <div className="max-w-screen-xl mx-4 px-2 md:px-8">
      <div className="grid justify-items-end m-4">
        <select
          className="block appearance-none w-aout bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          {stagesMap.map(({ value, day }) => (
            <option key={value} value={value}>
              {day}
            </option>
          ))}
        </select>
      </div>
      {isLoading ? <Loading /> : <MatchCPCard data={data} />}
    </div>
  );
}
