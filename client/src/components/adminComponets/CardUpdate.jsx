import { Button } from "antd";
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
export default function CardUpdate({
  match,
  matchInput,
  onChange,
  setMatchInput,
  onSubmit,
}) {
  const initialTimerState = JSON.parse(localStorage.getItem("timer"));

  const [elapsedTime, setElapsedTime] = useState(() => {
    return initialTimerState?.elapsedTime || 0;
  });
  const [timerRunning, setTimerRunning] = useState(() => {
    return initialTimerState?.timerRunning || false;
  });

  useEffect(() => {
    let interval;
    if (timerRunning) {
      interval = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  useEffect(() => {
    const timer = {
      elapsedTime: elapsedTime,
      timerRunning: timerRunning,
      id_match: match?._id,
    };
    localStorage.setItem("timer", JSON.stringify(timer));
  }, [elapsedTime, timerRunning, match?._id]);
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };
  const stutusMatchLive = () => {
    setMatchInput({ ...matchInput, statusMatch: "LIVE" });
  };
  const stutusMatchFiniched = () => {
    setMatchInput({ ...matchInput, statusMatch: "FINISHED" });
  };
  console.log(initialTimerState);
  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg flex flex-col">
        <div className="match-header flex items-center md:px-4 py-2 border-b-2 border-gray-200">
          <div className="md:py-1 px-1 md:px-2 rounded font-semibold flex items-center">
            <div className="match-tournament flex items-center font-semibold">
              <img
                src={match?.competition.emblem}
                alt="Premier League"
                className="w-5 h-5 md:w-8 md:h-8 mr-2"
              />
              <p className="flex items-center text-xs md:text-sm">
                {match?.competition.name}
              </p>
            </div>
          </div>
          <div className="match-actions ml-auto">
            <p className="text-xs md:text-sm font-sans mb-1 grid place-content-center">
              <p className="text-xs md:text-sm text-gray-700">
                {match?.date.utcDate} <strong>{match?.date.time}</strong>
              </p>
            </p>
          </div>
        </div>
        <div className="match-content flex">
          <div className="column flex justify-center items-center p-8 w-1/3">
            <div className="flex flex-col items-center">
              <div className="team-logo w-14 md:w-20 h-14 md:h-20 flex items-center justify-center rounded-full bg-white shadow-md">
                <img
                  src={match?.teams.home.image}
                  alt={match?.teams.home.name}
                  className="w-8 md:w-12"
                />
              </div>
              <h2 className="text-xs md:text-xl mt-2 font-semibold">
                {match?.teams.home.name}
              </h2>
            </div>
          </div>
          <div className="column flex justify-center items-center w-1/3">
            <div className="match-details text-center">
              <div className="match-score">
                <input
                  type="number"
                  value={matchInput.scoresHome}
                  min={0}
                  name="scoresHome"
                  onChange={onChange}
                  className="match-score-number match-score-number--leading font-semibold w-10 text-xl md:text-3xl md:px-1"
                />
                <span className="match-score-divider text-xl md:text-3xl font-bold text-gray-500 mr-1">
                  :
                </span>
                <input
                  type="number"
                  value={matchInput.scoresAway}
                  min={0}
                  name="scoresAway"
                  onChange={onChange}
                  className="match-score-number match-score-number--leading font-semibold w-10 text-xl md:text-3xl md:px-1"
                />
              </div>
              <div className="mt-2 text-xl font-semibold ">
                {formatTime(elapsedTime)}
              </div>
            </div>
          </div>
          <div className="column flex justify-center items-center w-1/3">
            <div className="team flex flex-col items-center">
              <div className="team-logo w-14 md:w-20 h-14 md:h-20 flex items-center justify-center rounded-full bg-white shadow-md">
                <img
                  src={match?.teams.away.image}
                  alt={match?.teams.away.name}
                  className="w-8 md:w-12"
                />
              </div>
              <h2 className="text-xs md:text-xl mt-2 font-semibold">
                {match?.teams.away.name}
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-2 pb-3">
          <button
            className="mx-1 border border-current bg-gray-100 rounded-sm text-secondary text-xs md:text-sm font-semibold md:px-2 md:py-1"
            onClick={() => {
              setElapsedTime(0);
              setTimerRunning(true);
              stutusMatchLive();
            }}
          >
            FIREST_HALF
          </button>
          <button
            className="mx-1 border border-current bg-gray-100 rounded-sm text-secondary text-xs md:text-sm font-semibold md:px-2 md:py-1"
            onClick={() => {
              setTimerRunning(!timerRunning);
              stutusMatchLive();
            }}
          >
            PAUSE
          </button>
          {/* <button
            className="mx-1 border border-current bg-gray-100 rounded-sm text-secondary text-xs md:text-sm font-semibold md:px-2 md:py-1"
            onClick={() => {
              setTimerRunning(true);
            }}
          >
            STARTE
          </button> */}
          <button
            className="mx-1 border border-current bg-gray-100 rounded-sm text-secondary text-xs md:text-sm font-semibold md:px-2 md:py-1"
            onClick={() => {
              setElapsedTime(45 * 60);
              setTimerRunning(true);
              stutusMatchLive();
            }}
          >
            SEDCOND_HALF
          </button>
          <button
            className="mx-1 border border-current bg-gray-100 rounded-sm text-secondary text-xs md:text-sm font-semibold md:px-2 md:py-1"
            onClick={() => {
              setElapsedTime(0);
              setTimerRunning(false);
              stutusMatchFiniched();
            }}
          >
            FINISHED
          </button>
        </div>
        <div className="flex justify-center items-center mt-2 pb-3">
          <label className="md:w-1/12 px-3 py-2 text-lg font-medium text-gray-900 dark:text-white ">
            IsVar
          </label>
          <select
            id="countries_disabled"
            className="w-50 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={matchInput.isVarcheck}
            name="isVarcheck"
            onChange={onChange}
          >
            <option value={false}>False</option>
            <option value={true}>True</option>
          </select>
        </div>
        <div className="flex justify-center items-center mt-2 pb-3">
          <label className="md:w-1/12 px-1 md:px-2 md:py-1 text-xs md:text-sm  font-medium text-gray-900 dark:text-white">
            VarStatus
          </label>
          <select
            id="countries_disabled"
            className="w-50 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={matchInput.VarStatus}
            name="VarStatus"
            onChange={onChange}
            disabled={
              matchInput.isVarcheck == "false" || !matchInput.isVarcheck
            }
          >
            <option value="Checking Goal - Possible Offside">
              Checking Goal - Possible Offside
            </option>
            <option value="true">True</option>
          </select>
        </div>

        <div className="flex justify-center items-center mt-2 pb-3">
          <Button
            style={{ width: "200px", height: "50px" }}
            htmlType="submit"
            className="bg-gray-900 rounded-lg px-12 py-2.5 text-white text-opacity-90 text-sm shadow-md"
            size="large"
            onClick={onSubmit}
            // loading={Loading}
          >
            Create account
          </Button>
        </div>
      </div>
    </div>
  );
}

// <button className="mx-1 border border-current bg-gray-100 rounded-sm text-secondary text-xs md:text-sm font-semibold md:px-2 md:py-1">
//             FIREST_HALF
//           </button>
//           <button className="mx-1 border border-current bg-gray-100 rounded-sm text-secondary text-xs md:text-sm font-semibold md:px-2 md:py-1">
//             SEDCOND_HALF
//           </button>
//           <button className="mx-1 border border-current bg-gray-100 rounded-sm text-secondary text-xs md:text-sm font-semibold md:px-2 md:py-1">
//             PAUSED
//           </button>
//           <button className="mx-1 border border-current bg-gray-100 rounded-sm text-secondary text-xs md:text-sm font-semibold md:px-2 md:py-1">
//             FINISHED
//           </button>
