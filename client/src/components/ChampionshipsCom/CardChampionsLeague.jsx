/* eslint-disable react/prop-types */
export default function CardChampionships({ data }) {
  return (
    <div className="max-w-screen-xl md:mx-16 md:px-20">
      {data && data.length > 0 && (
        <div>
          {data.map((item) => (
            <div
              key={item.matchID}
              className="h-32 md:h-48 p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mb-4"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                  <div className="flex justify-center">
                    <img
                      src={item.team1.teamIconUrl}
                      className="w-10 h-10 md:w-16 md:h-16"
                      alt=""
                    />
                  </div>
                  <p className="size-20 text-sm md:text-lg ">
                    {item.team1.teamName}
                  </p>
                </div>
                <div className="block font-sans text-base antialiased font-medium leading-relaxed ">
                  <p className=" text-sm md:text-lg font-sans mb-1">
                    {item.group.groupName}
                  </p>
                  <p className=" text-sm md:text-lg font-sans mb-1">
                    {item.matchResults.length > 0 ? (
                      <>
                        <span className="mr-2 text-slate-500 ">
                          Final result
                        </span>
                        <span>
                          {
                            item.matchResults[item.matchResults.length - 1]
                              .pointsTeam1
                          }
                          :
                          {
                            item.matchResults[item.matchResults.length - 1]
                              .pointsTeam2
                          }
                        </span>
                      </>
                    ) : (
                      <span>{item.matchDateTime}</span>
                    )}
                  </p>
                  <p className="text-sm md:text-lg font-sans text-gray-700">
                    {item.location?.locationStadium}
                  </p>
                </div>
                <div className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                  <div className="flex justify-center">
                    <img
                      src={item.team2.teamIconUrl}
                      className="w-10 h-10 md:w-20 md:h-20"
                      alt=""
                    />
                  </div>
                  <p className="size-20 text-sm md:text-lg">
                    {item.team2.teamName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
