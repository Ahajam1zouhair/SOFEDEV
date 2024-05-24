import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function CradMatchs({ match }) {
  return (
    <div>
      {match && <> maych day </>}
      <div className="flex flex-wrap justify-center">
        {match && (
          <>
            {match
              .filter((match) => match.status !== "LIVE")
              .map((item) => (
                <Link
                  className="container md:px-8 md:py-2 mb-4"
                  key={item._id}
                  to={`update/${item._id}`}
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
                            {item.date.utcDate}{" "}
                            <strong>{item.date.time}</strong>
                          </p>
                        </p>
                      </div>
                    </div>
                    <div className="match-content flex">
                      <div className="column flex justify-center items-center p-8 w-1/3">
                        <div className=" flex flex-col items-center">
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
                          <div className="match-score">
                            <span className="match-score-number match-score-number--leading text-sm md:text-xl font-semibold  mr-1">
                              Final
                            </span>
                          </div>
                          <div className="match-score">
                            <span className="match-score-number match-score-number--leading text-sm md:text-xl font-semibold  mr-1">
                              {item.venue}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="column flex justify-center items-center  w-1/3">
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
