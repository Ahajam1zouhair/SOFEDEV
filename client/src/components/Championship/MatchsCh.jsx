import { useEffect, useState } from "react";


export default function MatchsCh() {
  const [selectedOption, setSelectedOption] = useState(1);
  const [stage, setStage] = useState("GROUP_STAGE");

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    updateStage(value);
  };

  const stagesMap = {
    1: { stage: "GROUP_STAGE", leg: 1 },
    2: { stage: "GROUP_STAGE", leg: 2 },
    3: { stage: "GROUP_STAGE", leg: 3 },
    4: { stage: "GROUP_STAGE", leg: 4 },
    5: { stage: "GROUP_STAGE", leg: 5 },
    6: { stage: "GROUP_STAGE", leg: 6 },
    LAST_16_1: { stage: "LAST_16", leg: 1 },
    LAST_16_2: { stage: "LAST_16", leg: 2 },
    QUARTER_FINALS_1: { stage: "QUARTER_FINALS", leg: 1 },
    QUARTER_FINALS_2: { stage: "QUARTER_FINALS", leg: 2 },
    SEMI_FINAL_1: { stage: "SEMI_FINALS", leg: 1 },
    SEMI_FINAL_2: { stage: "SEMI_FINALS", leg: 2 },
  };

  const updateStage = (value) => {
    if (stagesMap[value]) {
      setStage(stagesMap[value].stage);
      setSelectedOption(stagesMap[value].leg);
    } else {
      setStage("GROUP_STAGE");
    }
  };

  const [getMatchsChLeById, { data, isLoading }] =
    useGetMatchsChLeByIdMutation();

  useEffect(() => {
    getMatchsChLeById(selectedOption);
  }, [getMatchsChLeById, selectedOption]);

  console.log(data);

  return (
    <div className="max-w-screen-xl mx-4 px-2 md:px-8">
      <div className="grid justify-items-end m-4">
        <select
          className="block appearance-none w-aout bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          {Object.entries(stagesMap).map(([value, { stage }]) => (
            <option key={value} value={value}>
              {stage} - {value.endsWith("_1") ? "first leg" : "second leg"}
            </option>
          ))}
        </select>
      </div>
      {isLoading ? <Loading /> : <CardMatchCL data={data} stage={stage} />}
    </div>
  );
}
