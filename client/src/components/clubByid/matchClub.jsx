import { useEffect } from "react";
import { useGetMatchesTeamsByIdMutation } from "../../Redux/features/match/clubs";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { CgUnavailable } from "react-icons/cg";

// eslint-disable-next-line react/prop-types
export default function MatchClub({ status }) {
  const { id } = useParams();
  console.log(id);
  console.log(status);
  const [getMatchesTeamsById, { data, isLoading }] =
    useGetMatchesTeamsByIdMutation();
  useEffect(() => {
    if (status) {
      getMatchesTeamsById({ id, status });
    }
  }, [getMatchesTeamsById, status, id]);
  console.log(data);
  const countDaysSince = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const differenceMs = today - date;
    const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
    return differenceDays;
  };

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
  console.log();
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap justify-center">
          {data?.matches.length > 0 ? (
            <>
              {data.matches.map((item) => (
                <div
                  className="w-full sm:w-5/12 container md:px-2 md:py-1 mb-4"
                  key={item._id}
                >
                  <div className="bg-white rounded-lg shadow-lg flex flex-col  ">
                    <div className="match-header flex items-center md:px-4 py-2 border-b-2 border-gray-200">
                      <div className="md:py-1 px-1 md:px-2 rounded font-semibold flex items-center ">
                        <div className="match-tournament flex items-center font-semibold">
                          <img
                            src={item.competition.emblem}
                            alt="Premier League"
                            className="w-5 h-5 md:w-8 md:h-8 mr-2"
                          />
                          <p className=" flex items-center text-xs md:text-sm">
                            {item.competition.name}
                          </p>
                        </div>
                      </div>
                      <div className="match-actions ml-auto">
                        <p className=" text-xs md:text-sm font-sans mb-1 grid place-content-center ">
                          <p className="text-xs md:text-sm text-gray-700">
                            {convertToLocaleDateTime(item.utcDate).date}{" "}
                            <strong>
                              {convertToLocaleDateTime(item.utcDate).time}
                            </strong>
                          </p>
                        </p>
                      </div>
                    </div>
                    <div className="match-content flex">
                      <div className="column flex justify-center items-center p-8 w-1/3">
                        <div className=" flex flex-col items-center">
                          <div className="team-logo w-14  h-14  flex items-center justify-center rounded-full bg-white shadow-md">
                            <img
                              src={item.homeTeam.crest}
                              alt={item.homeTeam.crest}
                              className="w-8 md:w-12"
                            />
                          </div>
                          <h2 className="text-xs md:text-mx mt-2 font-semibold">
                            {item.homeTeam.shortName}
                          </h2>
                        </div>
                      </div>
                      <div className="column flex justify-center items-center  w-1/3">
                        <div className="match-details text-center">
                          <div className="match-score">
                            {item.stage === "REGULAR_SEASON" ? (
                              <span className="match-score-number match-score-number--leading text-sm md:text-xl font-semibold  mr-1">
                                Round {item.matchday}
                              </span>
                            ) : (
                              <span className="match-score-number match-score-number--leading text-sm md:text-xl font-semibold  mr-1">
                                {item.stage}
                              </span>
                            )}
                          </div>
                          <div className="match-score">
                            <span className="match-score-number match-score-number--leading text-sm md:text-xl font-semibold  mr-1">
                              {item.status === "FINISHED" ? (
                                <div className="match-score mt-2">
                                  <span
                                    className={`match-score-number match-score-number--leading text-xl md:text-2xl font-semibold  mr-1 ${
                                      item.score.fullTime.home >
                                      item.score.fullTime.away
                                        ? "text-purple-600"
                                        : ""
                                    }`}
                                  >
                                    {item.score.fullTime.home}
                                  </span>
                                  <span className="match-score-divider text-xl md:text-2xl font-bold text-gray-500 mr-1">
                                    :
                                  </span>
                                  <span
                                    className={`match-score-number match-score-number--leading text-xl md:text-2xl font-semibold  mr-1 ${
                                      item.score.fullTime.home <
                                      item.score.fullTime.away
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
                                </>
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="column flex justify-center items-center  w-1/3">
                        <div className="team flex flex-col items-center">
                          <div className="team-logo w-14  h-14  flex items-center justify-center rounded-full bg-white shadow-md">
                            <img
                              src={item.awayTeam.crest}
                              alt={item.awayTeam.crest}
                              className="w-8 md:w-12"
                            />
                          </div>
                          <h2 className="text-xs md:text-sm mt-2 font-semibold">
                            {item.awayTeam.shortName}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="flex">
              <CgUnavailable
                style={{ width: "70", height: "70", color: "red" }}
              />
              <h1 className="match-score-number match-score-number--leading text-sm md:text-xl font-semibold  m-4">
                No matches
              </h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
