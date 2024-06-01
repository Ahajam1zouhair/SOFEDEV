import { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useGetMatchsScorersCPMutation } from "../Redux/features/match/matchSlice";
import Loading from "../components/Loading/Loading";

export default function Championship() {
  const [selectedItem, setSelectedItem] = useState(0);
  const { competitions } = useParams();
  const navigate = useNavigate();
  const [getMatchsScorersCP, { data, isLoading }] =
    useGetMatchsScorersCPMutation();

  useEffect(() => {
    if (competitions) {
      getMatchsScorersCP({ competitions });
    }
  }, [getMatchsScorersCP, competitions]);

  const tableItems = [
    {
      label: "Matchs",
      path: `/championship/${competitions}/match`,
    },
    {
      label: "Standings",
      path: `/competitions/${competitions}/standings`,
    },
    {
      label: "Scorers",
      path: `/competitions/${competitions}/scorers`,
    },
  ];

  const handleItemClick = (idx, path) => {
    setSelectedItem(idx);
    navigate(path);
  };

  return (
    <div>
      <div className="flex items-center m-4">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-lg">
            {isLoading ? (
              <Loading />
            ) : (
              data &&
              data.seasons && (
                <div className="max-w-lg">
                  <div className="flex justify-center">
                    <img
                      src={data.emblem}
                      className="w-20 h-20 md:w-20 md:h-20"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-center">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                      {data.name}
                    </h3>
                  </div>
                </div>
              )
            )}
          </div>

          <div className="text-xs md:text-sm mt-12 overflow-x-auto">
            <ul
              role="tablist"
              className="w-full border-b flex items-center gap-x-3 overflow-x-auto"
            >
              {tableItems.map((item, idx) => (
                <li
                  key={idx}
                  className={`py-2 border-b-2 ${
                    selectedItem === idx
                      ? "border-indigo-600 text-indigo-600"
                      : "border-white text-gray-500"
                  }`}
                >
                  <button
                    role="tab"
                    aria-selected={selectedItem === idx}
                    aria-controls={`tabpanel-${idx + 1}`}
                    className="py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium"
                    onClick={() => handleItemClick(idx, item.path)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
