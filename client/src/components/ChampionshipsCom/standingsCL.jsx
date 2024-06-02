import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetStandingsChLeByIdMutation } from "../../Redux/features/match/matchSlice";
import Loading from "../Loading/Loading";

export default function Championships() {
  const [selectedItem, setSelectedItem] = useState(0);
  const [getStandingsChLeById, { data, isLoading }] =
    useGetStandingsChLeByIdMutation();

  useEffect(() => {
    getStandingsChLeById();
  }, [getStandingsChLeById]);

  if (data && data.competition) {
    console.log(data);
    // Now you can safely access properties of data.competition
  }

  return (
    <div className="max-w-screen-xl mx-auto px-2 md:px-8">
      <div className="flex flex-wrap justify-center">
        {isLoading ? (
          <Loading />
        ) : (
          data &&
          data.standings &&
          data.standings.map((group, groupIdx) => (
            <div key={groupIdx} className="w-full sm:w-5/12 m-6">
              <h3 className="text-gray-800 text-xl font-bold sm:text-2xl mb-2">
                #{group.group}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full divide-y divide-gray-200 border border-slate-300">
                  <thead className="bg-gray-50 border border-slate-300">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-slate-300">
                        #
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-slate-300">
                        team
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-slate-300">
                        J
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-slate-300">
                        DIFF
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-slate-300">
                        PTS
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 border border-slate-300">
                    {group.table.map((item, idx) => (
                      <tr
                        key={idx}
                        className={selectedItem === idx ? "bg-gray-100" : ""}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border border-slate-300">
                          {item.position}
                        </td>
                        <Link to={`/clubs/${item.team.name}/${item.team.id}`}
                        className="px-3 py-2 whitespace-nowrap text-xs md:text-sm font-medium flex items-center ">
                          <img
                            src={item.team.crest}
                            className="w-6 h-6 md:w-8 md:h-8 mr-2"
                            alt=""
                          />
                          <span>{item.team.tla}</span>
                        </Link>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border border-slate-300">
                          {item.playedGames}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border border-slate-300">
                          {item.goalDifference}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border border-slate-300">
                          {item.points}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
