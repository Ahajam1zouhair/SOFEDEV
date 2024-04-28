/* eslint-disable react/prop-types */
export default function TableScorersCP({ data, season }) {
  return (
    <div className="max-w-screen-xl mx-auto px-2 ">
      <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-4/12 md:w-8/12 ">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl mb-4">
            Scorers ranking Champions {season}/{Number(season) + 1}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full divide-y divide-gray-200 border border-slate-300">
              <thead className="bg-gray-50 border border-slate-300">
                <tr>
                  <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
                    #
                  </th>
                  <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
                    name
                  </th>
                  <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
                    goals
                  </th>
                  <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
                    Mat.
                  </th>
                  <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
                    ass.
                  </th>
                  <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
                    p.
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 border border-slate-300">
                {data &&
                  data.scorers &&
                  data.scorers.map((item, index) => (
                    <tr className="" key={index + 1}>
                      <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                        {index + 1}
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                        <div className="flex">
                          <img
                            src={item.team.crest}
                            className="w-6 h-6 md:w-8 md:h-8 mr-2"
                            alt=""
                          />
                          <div>
                            <p className="text-xs md:text-lg">
                              {item.player.name}
                            </p>
                            <p className="text-xs md:text-sm">
                              {item.team.shortName}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900  ">
                        {item.goals}
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900  ">
                        {item.playedMatches}
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                        {item.assists === null ? 0 : item.assists}
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                        {item.penalties === null ? 0 : item.penalties}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
