/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
export default function CardMatchLive({ match }) {
  const initialTimerState = JSON.parse(localStorage.getItem("timer"));

  const [elapsedTime, setElapsedTime] = useState(() => {
    return initialTimerState?.elapsedTime || 0;
  });
  // eslint-disable-next-line no-unused-vars
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
    return `${minutes}`;
  };
  console.log(formatTime(elapsedTime));
  return (
    <div>

      <div className="flex flex-wrap justify-center">
        {match && (
          <>
            {match
              .filter((match) => match.status === "LIVE")
              .map((item) => (
                <Link
                  className="container mx-auto  md:px-8 py-2 mb-4"
                  key={item._id}
                  to={`update/${item._id}`}
                >
                  <div className="bg-white rounded-lg shadow-lg flex flex-col  ">
                    <div className="match-header flex items-center px-4 py-2 border-b-2 border-gray-200 mt-2">
                      <div className="text-red-500 md:py-1 px-1 md:px-2 rounded font-semibold flex items-center ">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-800 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-800"></span>
                        </span>
                        <span className="ml-1">Live</span>
                      </div>
                      <div className="match-actions ml-auto">
                        <div className="match-tournament flex items-center font-semibold border-2">
                          <p className="btn-icon flex items-center text-xs md:text-sm">
                            {item.varcheck.isVarcheck ? (
                              <>
                                <span className="relative flex h-3 w-3">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-800 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-800"></span>
                                </span>
                                <span className="ml-1 text-purple-600">
                                  VAR
                                </span>
                              </>
                            ) : (
                              ""
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="match-actions ml-auto">
                        <div className="match-tournament flex items-center font-semibold">
                          <img
                            src={item.competition.emblem}
                            alt="Premier League"
                            className="w-5 h-5 mr-2"
                          />
                          <p className="btn-icon flex items-center text-xs md:text-sm">
                            {item.competition.name}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="match-content flex">
                      <div className="column flex justify-center items-center p-8 w-1/3">
                        <div className="team flex flex-col items-center">
                          <div className="team-logo w-14 md:w-20 h-14 md:h-20 flex items-center justify-center rounded-full bg-white shadow-md">
                            <img
                              src={item.teams.home.image}
                              alt={item.teams.home.name}
                              className="w-8 md:w-12"
                            />
                          </div>
                          <h2 className="text-xs md:text-xl mt-2 font-semibold">
                            {item.teams.home.name}
                          </h2>
                        </div>
                      </div>
                      <div className="column flex justify-center items-center  w-1/3">
                        <div className="match-details text-center">
                          <p className="text-xs md:text-sm font-sans mb-1 grid place-content-center ">
                            <p className="text-xs md:text-sm text-gray-700">
                              {item.date.utcDate}{" "}
                              <strong>{item.date.time}</strong>
                            </p>
                          </p>
                          <div className="match-score">
                            <span className="match-score-number match-score-number--leading text-sm md:text-xl font-semibold">
                              Final
                            </span>
                          </div>
                          <div className="match-score mt-2">
                            <span
                              className={`match-score-number match-score-number--leading text-xl md:text-3xl font-semibold  mr-1 ${
                                item.scores.home > item.scores.away
                                  ? "text-purple-600"
                                  : null
                              }`}
                            >
                              {item.scores.home}
                            </span>
                            <span className="match-score-divider text-xl md:text-3xl font-bold text-gray-500 mr-1">
                              :
                            </span>
                            <span
                              className={`match-score-number match-score-number--leading text-xl md:text-3xl font-semibold  mr-1 ${
                                item.scores.home < item.scores.away
                                  ? "text-purple-600"
                                  : null
                              }`}
                            >
                              {item.scores.away}
                            </span>
                          </div>
                          <div className="match-time-lapsed text-orange-600 font-semibold mt-2">
                            {formatTime(elapsedTime)}'
                          </div>
                          <div className="match-time-lapsed text-xs md:text-sm text-orange-600 font-semibold mt-2">
                            {item.varcheck.isVarcheck ? (
                              <span>{item.varcheck.status}</span>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="column flex justify-center items-center p-8 w-1/3">
                        <div className="team flex flex-col items-center">
                          <div className="team-logo w-14 md:w-20 h-14 md:h-20 flex items-center justify-center rounded-full bg-white shadow-md">
                            <img
                              src={item.teams.away.image}
                              alt={item.teams.away.name}
                              className="w-8 md:w-12"
                            />
                          </div>
                          <h2 className="text-xs md:text-xl mt-2 font-semibold">
                            {item.teams.away.name}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </>
        )}
      </div>
    </div>
  );
}
