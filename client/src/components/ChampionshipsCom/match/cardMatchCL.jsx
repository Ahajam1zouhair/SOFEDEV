/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function CardMatchCL({ data, stage }) {
  function countDaysSince(dateString) {
    const date = new Date(dateString);
    const today = new Date();
    const differenceMs = today - date;
    return Math.floor(differenceMs / (1000 * 60 * 60 * 24));
  }

  function convertToLocaleDateTime(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
    return { date: formattedDate, time: formattedTime };
  }

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {data && data.matches && (
          <>
            {data.matches
              .filter((item) => stage === "FINAL" || item.stage === stage)
              .map((item) => (
                <div
                  className="w-full sm:w-5/12 container md:px-2 md:py-1 mb-4"
                  key={item._id}
                >
                  <div className="bg-white rounded-lg shadow-lg flex flex-col">
                    <div className="match-header flex items-center md:px-4 py-2 border-b-2 border-gray-200">
                      <div className="md:py-1 px-1 md:px-2 rounded font-semibold flex items-center">
                        <div className="match-tournament flex items-center font-semibold">
                          <img
                            src={item.competition.emblem}
                            alt={item.competition.name}
                            className="w-5 h-5 md:w-8 md:h-8 mr-2"
                          />
                          <p className="flex items-center text-xs md:text-sm">
                            {item.competition.name}
                          </p>
                        </div>
                      </div>
                      <div className="match-actions ml-auto">
                        <p className="text-xs md:text-sm font-sans mb-1 grid place-content-center">
                          <span className="text-xs md:text-sm text-gray-700">
                            {convertToLocaleDateTime(item.utcDate).date}{" "}
                            <strong>
                              {convertToLocaleDateTime(item.utcDate).time}
                            </strong>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="match-content flex">
                      <div className="column flex justify-center items-center p-8 w-1/3">
                        <Link
                          to={`/clubs/${item.homeTeam.name}/${item.homeTeam.id}`}
                          className="flex flex-col items-center"
                        >
                          <div className="team-logo w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md">
                            <img
                              src={item.homeTeam.crest}
                              alt={item.homeTeam.name}
                              className="w-8 md:w-12"
                            />
                          </div>
                          <h2 className="text-xs md:text-mx mt-2 font-semibold">
                            {item.homeTeam.shortName}
                          </h2>
                        </Link>
                      </div>
                      <div className="column flex justify-center items-center w-1/3">
                        <div className="match-details text-center">
                          <div className="match-score">
                            <span className="match-score-number match-score-number--leading text-sm md:text-xl font-semibold mr-1">
                              {item?.group ? item?.group : item.stage}
                            </span>
                          </div>
                          <div className="match-score">
                            <span className="match-score-number match-score-number--leading text-sm md:text-xl font-semibold mr-1">
                              {item.status === "FINISHED" ? (
                                <div className="match-score mt-2">
                                  <span
                                    className={`match-score-number match-score-number--leading text-xl md:text-3xl font-semibold mr-1 ${
                                      item.score.fullTime.home > item.score.fullTime.away
                                        ? "text-purple-600"
                                        : ""
                                    }`}
                                  >
                                    {item.score.fullTime.home}
                                  </span>
                                  <span className="match-score-divider text-xl md:text-3xl font-bold text-gray-500 mr-1">
                                    :
                                  </span>
                                  <span
                                    className={`match-score-number match-score-number--leading text-xl md:text-3xl font-semibold mr-1 ${
                                      item.score.fullTime.home < item.score.fullTime.away
                                        ? "text-purple-600"
                                        : ""
                                    }`}
                                  >
                                    {item.score.fullTime.away}
                                  </span>
                                </div>
                              ) : (
                                <>
                                  <p className="text-sm md:text-lg font-sans text-gray-700">
                                    <span className="text-slate-600">
                                      In {countDaysSince(item.utcDate)} days
                                    </span>
                                  </p>
                                  <p className="text-sm md:text-lg font-sans text-gray-700">
                                    <span className="text-slate-600">
                                      {convertToLocaleDateTime(item.utcDate).date}
                                    </span>
                                  </p>
                                  <p className="text-sm md:text-lg font-sans grid place-content-center">
                                    {convertToLocaleDateTime(item.utcDate).time}
                                  </p>
                                </>
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="column flex justify-center items-center w-1/3">
                        <Link
                          to={`/clubs/${item.awayTeam.name}/${item.awayTeam.id}`}
                          className="flex flex-col items-center"
                        >
                          <div className="team-logo w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md">
                            <img
                              src={item.awayTeam.crest}
                              alt={item.awayTeam.name}
                              className="w-8 md:w-12"
                            />
                          </div>
                          <h2 className="text-xs md:text-sm mt-2 font-semibold">
                            {item.awayTeam.shortName}
                          </h2>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  );
}

export default CardMatchCL;
