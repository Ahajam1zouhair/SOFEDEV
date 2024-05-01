/* eslint-disable react/prop-types */
export default function TableTeam({ data }) {
  console.log(data);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto md:px-12">
        <div className="mt-2 relative h-max overflow-auto">
          <div className="md:px-12">
            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl mb-2">
              PLAYERS
            </h3>
            <table className="w-full table-auto text-xs md:text-sm text-left">
              <thead className="bg-gray-50 border border-slate-300">
                <tr>
                  <th className="px-3 py-3 text-left text-xs font-medium text-blue-950 uppercase tracking-wider">
                    position
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-blue-950 uppercase tracking-wider">
                    name
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-blue-950 uppercase tracking-wider">
                    dateOfBirth
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-blue-950 uppercase tracking-wider">
                    nationality
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 border border-slate-300">
                {data &&
                  data.squad &&
                  data.squad.map((item, idx) => (
                    <tr key={idx}>
                      <td className="px-3 py-2 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900 ">
                        {item.position}
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap text-xs md:text-sm font-medium flex items-center ">
                        <span>{item.name}</span>
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900 ">
                        {item.dateOfBirth}
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900 ">
                        {item.nationality}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl  mb-2 mt-2">
          COACH
        </h3>
        <p className=" text-xs md:text-sm font-sans mb-1 ">
          {data.coach.lastName}
        </p>
        <p className=" text-xs md:text-sm font-sans mb-1 ">
          {data.coach.nationality}
        </p>
        <p className=" text-xs md:text-sm font-sans mb-1 ">
          {data.coach.dateOfBirth}
        </p>
        <p className=" text-xs md:text-sm font-sans mb-1 ">
          contract start :{data.coach.contract.start}
        </p>
        <p className=" text-xs md:text-sm font-sans mb-1 ">
          contract start :{data.coach.contract.until}
        </p>
      </div>
    </div>
  );
}
