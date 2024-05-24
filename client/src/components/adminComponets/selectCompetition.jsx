/* eslint-disable react/prop-types */
import { useState } from "react";
import * as Select from "@radix-ui/react-select";
const competition = [
    {
      title: "UEFA Champions League",
      src: "https://crests.football-data.org/CL.png",
      code: "CL",
    },
    {
      title: "Premier League",
      src: "https://crests.football-data.org/PL.png",
      code: "PL",
    },

    {
      title: "LaLiga",
      src: "https://crests.football-data.org/PD.png",
      code: "PD",
    },
    {
      title: "Bundesliga",
      src: "https://crests.football-data.org/BL1.png",
      code: "BL1",
    },

    {
      title: "Serie A",
      src: "https://crests.football-data.org/SA.png",
      code: "SA",
    },
    {
      title: "Ligue 1",
      path: "/competitions/FL1",
      src: "https://crests.football-data.org/FL1.png",
      code: "FL1",
    },
  ];
const SelectCompetition = ({setLigue , setCompetition}) => {
  const [selectedValue, setSelectedValue] = useState();
  const handleSelect = (selectedItem) => {
    setSelectedValue(selectedItem);
    setLigue(selectedItem.code);
    setCompetition({
        name: selectedItem.title,
        emblem: selectedItem.src,
        code: selectedItem.code,
    })
  };
  return (
    <Select.Root onValueChange={handleSelect}>
      <Select.Trigger className="w-72 max-w-full inline-flex items-center justify-between px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
        <Select.Value placeholder="Select your option">
          <div className="flex items-center w-full">
            <img
              src={selectedValue?.src}
              className="w-6 h-6 mr-2"
              alt={`Logo ${selectedValue?.title}`}
            />
            <p className="text-gray-800 text-xs md:text-sm font-bold">
              {selectedValue?.title}
            </p>
          </div>
        </Select.Value>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          position="popper"
          avoidCollisions={false}
          className="w-[var(--radix-select-trigger-width)] overflow-hidden mt-3 bg-white border rounded-lg shadow-sm text-sm"
        >
          <Select.Viewport className="max-h-64 mt-2 overflow-y-auto">
            {competition?.map((item, idx) => (
              <Select.Item key={idx} value={item}>
                <div className="flex items-center w-full  mb-4">
                  <img
                    src={item.src}
                    className="w-6 h-6 mr-2"
                    alt={`Logo ${item.title}`}
                  />
                  <p className="text-gray-800 text-xs md:text-sm font-bold mb-1">
                    {item.title}
                  </p>
                </div>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default SelectCompetition;
