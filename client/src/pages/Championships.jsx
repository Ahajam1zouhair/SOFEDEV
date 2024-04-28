import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Championships() {
  const [selectedItem, setSelectedItem] = useState(0);
  const navigate = useNavigate();

  const tableItems = [
    {
      label: "Matchs",
      path: "/championships/matchCL",
    },
    {
      label: "Standings",
      path: "/championships/standingsCL",
    },
    {
      label: "Scorers",
      path: "/championships/scorersCL",
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
          <div className="flex justify-center">
            <img
              src="https://crests.football-data.org/CL.png"
              className="w-16 h-16 md:w-20 md:h-20"
              alt=""
            />
          </div>
          <div className="flex justify-center">
            <h6 className="text-gray-800 text-sm md:text-xl font-bold sm:text-2xl">
              UEFA Champions League 2023/2024
            </h6>
          </div>
        </div>
        <div className="text-sm mt-12 overflow-x-auto">
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
