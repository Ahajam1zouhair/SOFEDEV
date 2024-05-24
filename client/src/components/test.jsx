import React from "react";

function Match() {
  return (
    <div className="container mx-auto">
      <div className="match bg-white rounded-lg shadow-lg flex flex-col min-w-600px">
        <div className="match-header flex items-center px-4 py-2 border-b-2 border-gray-200">
          <div className="match-status bg-red-200 text-red-600 py-1 px-2 rounded font-semibold flex items-center">
            Live
          </div>
          <div className="match-tournament flex items-center font-semibold">
            <img
              src="https://assets.codepen.io/285131/pl-logo.svg"
              alt="Premier League"
              className="w-5 h-5 mr-2"
            />
            English Premier League
          </div>
          <div className="match-actions ml-auto">
            <button className="btn-icon flex items-center">
              <i className="material-icons-outlined">grade</i>
            </button>
            <button className="btn-icon flex items-center">
              <i className="material-icons-outlined">add_alert</i>
            </button>
          </div>
        </div>
        <div className="match-content flex">
          <div className="column flex justify-center items-center p-8 w-1/3">
            <div className="team flex flex-col items-center">
              <div className="team-logo w-24 h-24 flex items-center justify-center rounded-full bg-white shadow-md">
                <img
                  src="https://assets.codepen.io/285131/chelsea.svg"
                  alt="Chelsea"
                  className="w-12"
                />
              </div>
              <h2 className="team-name mt-6">Chelsea</h2>
            </div>
          </div>
          <div className="column flex justify-center items-center p-8 w-1/3">
            <div className="match-details text-center">
              <div className="match-date text-sm text-gray-600">
                3 May at <strong>17:30</strong>
              </div>
              <div className="match-score mt-2">
                <span className="match-score-number match-score-number--leading text-4xl font-semibold text-purple-600">
                  3
                </span>
                <span className="match-score-divider text-xl font-bold text-gray-500">
                  :
                </span>
                <span className="match-score-number text-4xl font-semibold">
                  1
                </span>
              </div>
              <div className="match-time-lapsed text-orange-600 font-semibold mt-2">
                72'
              </div>
              <div className="match-referee mt-2 text-sm text-gray-600">
                Referee: <strong>Mike dean</strong>
              </div>
              <div className="match-bet-options flex mt-2">
                <button className="match-bet-option ml-2 mr-2 border border-gray-300 bg-gray-100 rounded-md text-sm font-semibold px-4 py-1">
                  1.48
                </button>
                <button className="match-bet-option ml-2 mr-2 border border-gray-300 bg-gray-100 rounded-md text-sm font-semibold px-4 py-1">
                  7.84
                </button>
                <button className="match-bet-option ml-2 mr-2 border border-gray-300 bg-gray-100 rounded-md text-sm font-semibold px-4 py-1">
                  3.24
                </button>
              </div>
              <button className="match-bet-place absolute bottom-0 left-1/2 transform -translate-x-1/2 border-none bg-purple-600 rounded-lg text-white font-semibold px-8 py-2 text-sm shadow-md">
                Place a bet
              </button>
            </div>
          </div>
          <div className="column flex justify-center items-center p-8 w-1/3">
            <div className="team flex flex-col items-center">
              <div className="team-logo w-24 h-24 flex items-center justify-center rounded-full bg-white shadow-md">
                <img
                  src="https://resources.premierleague.com/premierleague/badges/t1.svg"
                  alt="Man Utd"
                  className="w-12"
                />
              </div>
              <h2 className="team-name mt-6">Man Utd</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Match;
