/* eslint-disable react/prop-types */
export default function TableStandingCP({ data }) {
  console.log(data);
  const borderColor = (id) => {
    switch (id) {
      case 1:
      case 2:
      case 3:
      case 4:
        return "border-l-2 border-sky-500";
      case 5:
        return "border-l-2 border-indigo-500";
      case 18:
      case 19:
      case 20:
        return "border-l-2 border-red-500";
      default:
        return "";
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto md:px-12">
      <div className="mt-12 relative h-max overflow-auto">
        {data &&
          data.standings &&
          data.standings.map((group, Idx) => (
            <div key={Idx} className="md:px-12">
              <h3 className="text-gray-800 text-xl font-bold sm:text-2xl mb-2">
                {group.group}
              </h3>
              <table className="w-full table-auto text-xs md:text-sm text-left">
                <thead className="bg-gray-50 border border-slate-300">
                  <tr>
                    <th className="px-3 py-3 text-left text-xs font-medium text-blue-950 uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-blue-950 uppercase tracking-wider">
                      team
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-blue-950 uppercase tracking-wider">
                      PTS
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-blue-950 uppercase tracking-wider">
                      J
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-blue-950 uppercase tracking-wider">
                      DIF
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-blue-950 uppercase tracking-wider">
                      G
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-blue-950 uppercase tracking-wider">
                      NOT
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-blue-950 uppercase tracking-wider">
                      D
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-blue-950 uppercase tracking-wider">
                      BP
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-blue-950 uppercase tracking-wider">
                      B.C.
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 border border-slate-300">
                  {group.table.map((item, idx) => (
                    <tr key={idx}>
                      <td
                        className={`px-3 py-2 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900 ${borderColor(
                          item.position
                        )}`}
                      >
                        {item.position}
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap text-xs md:text-sm font-medium  ">
                        <img
                          src={item.team.crest}
                          className="w-6 h-6 md:w-8 md:h-8"
                          alt=""
                        />
                        <span>{item.team.shortName}</span>
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap text-xs md:text-sm font-medium text-blue-600 ">
                        {item.points}
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900 ">
                        {item.playedGames}
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900 ">
                        {item.goalDifference}
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900 ">
                        {item.won}
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900 ">
                        {item.draw}
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900 ">
                        {item.lost}
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900 ">
                        {item.goalsFor}
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900 ">
                        {item.goalsAgainst}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="items-start justify-between m-8">
                <div className="max-w-lg border-l-2 border-sky-500">
                  <h6 className="px-3 py-2 whitespace-nowrap text-xs md:text-xl font-medium text-gray-900 mb-3">
                    UEFA Champions League
                  </h6>
                </div>
                <div className="max-w-lg border-l-2 border-indigo-500">
                  <h6 className="px-3 py-2 whitespace-nowrap text-xs md:text-xl font-medium text-gray-900 mb-3">
                    UEFA Europa League
                  </h6>
                </div>
                <div className="max-w-lg border-l-2 border-red-500">
                  <h6 className="px-3 py-2 whitespace-nowrap text-xs md:text-xl font-medium text-gray-900 mb-3">
                    Relegation
                  </h6>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
