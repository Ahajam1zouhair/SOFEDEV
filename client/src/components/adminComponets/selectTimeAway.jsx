/* eslint-disable react/prop-types */
import { useState } from "react";
import * as Select from "@radix-ui/react-select";

const SelectTimeAway = ({ teams, setTeameAway, HomeId }) => {
  const [selectedValue, setSelectedValue] = useState();
  const handleSelect = (selectedItem) => {
    setSelectedValue(selectedItem);
    setTeameAway({
      name: selectedItem?.shortName,
      image: selectedItem?.crest,
      id: selectedItem?.id,
    });
  };
  return (
    <Select.Root onValueChange={handleSelect} disabled={!HomeId}>
      <Select.Trigger className="w-72 max-w-full inline-flex items-center justify-between px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
        <Select.Value placeholder="Select Team">
          <div className="flex items-center w-full">
            <img
              src={selectedValue?.crest}
              className="w-6 h-6 mr-2"
              alt={`Logo ${selectedValue?.shortName}`}
            />
            <p className="text-gray-800 text-xs md:text-sm font-bold">
              {selectedValue?.shortName}
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
            {teams?.map((item, idx) => (
              <Select.Item key={idx} value={item} disabled={item.id === HomeId}>
                <div className="flex items-center w-full  mb-4">
                  <img
                    src={item.crest}
                    className="w-6 h-6 mr-2"
                    alt={`Logo ${item.shortName}`}
                  />
                  <p className="text-gray-800 text-xs md:text-sm font-bold mb-1">
                    {item.shortName}
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

export default SelectTimeAway;
