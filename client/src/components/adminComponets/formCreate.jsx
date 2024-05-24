/* eslint-disable react/prop-types */
import { Button } from "antd";
import SelectCompetition from "./selectCompetition";
import SelectTimeHome from "./selectTime";
import SelectTimeAway from "./selectTimeAway";

export default function FormCreate({
  setLigue,
  teams,
  setCompetition,
  setTeameHome,
  setTeameAway,
  HomeId,
  setMatchInput,
  matchInput,
  onSubmit,
  createLoading,
}) {
  return (
    <div className="mt-8 space-y-5">
      <div className="flex flex-wrap mb-6">
        <label className="sm:w-2/12 px-3 py-2 text-lg font-medium text-gray-900 dark:text-white ">
          Competition
        </label>
        <SelectCompetition
          setLigue={setLigue}
          setCompetition={setCompetition}
        />
      </div>
      <div className="flex flex-wrap mb-6">
        <label className="sm:w-2/12 px-3 py-2 text-lg font-medium text-gray-900 dark:text-white ">
          Home Team
        </label>
        <SelectTimeHome teams={teams} setTeameHome={setTeameHome} />
      </div>
      <div className="flex flex-wrap mb-6">
        <label className="sm:w-2/12 px-3 py-2 text-lg font-medium text-gray-900 dark:text-white ">
          Away Team
        </label>
        <SelectTimeAway
          teams={teams}
          setTeameAway={setTeameAway}
          HomeId={HomeId}
        />
      </div>
      <div className="flex flex-wrap mb-6">
        <label className="sm:w-2/12 px-3 py-2 text-lg font-medium text-gray-900 dark:text-white ">
          Venue
        </label>
        <input
          type="text"
          className={`w-72 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg `}
          onChange={(e) =>
            setMatchInput({ ...matchInput, Venue: e.target.value })
          }
        />
      </div>
      <div className="flex flex-wrap mb-6">
        <label className="sm:w-2/12 px-3 py-2 text-lg font-medium text-gray-900 dark:text-white ">
          Status
        </label>
        <select
          id="countries_disabled"
          className="w-72  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          // value={value}

          onChange={(e) =>
            setMatchInput({ ...matchInput, Status: e.target.value })
          }
        >
          <option>Select Status Match</option>
          <option>SCHEDULED</option>
          <option>FIREST HALF</option>
          <option>SEDCOND HALF</option>
          <option>PAUSED</option>
          <option>FINISHED</option>
          <option>POSTPONED</option>
        </select>
      </div>
      <div className="flex flex-wrap mb-6">
        <label className="sm:w-2/12 px-3 py-2 text-lg font-medium text-gray-900 dark:text-white ">
          Utc Date
        </label>
        <input
          type="date"
          className={`w-72 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg `}
          onChange={(e) =>
            setMatchInput({ ...matchInput, UtcDate: e.target.value })
          }
        />
      </div>
      <div className="flex flex-wrap mb-6">
        <label className="sm:w-2/12 px-3 py-2 text-lg font-medium text-gray-900 dark:text-white ">
          Time
        </label>
        <input
          type="time"
          className={`w-72 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg `}
          onChange={(e) =>
            setMatchInput({ ...matchInput, Time: e.target.value })
          }
        />
      </div>
      <Button
        style={{ width: "200px", height: "50px" }}
        htmlType="submit"
        type="primary"
        size="large"
        onClick={onSubmit}
        loading={createLoading}
      >
        Create account
      </Button>
    </div>
  );
}
