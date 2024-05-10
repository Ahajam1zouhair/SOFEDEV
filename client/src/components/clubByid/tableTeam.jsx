/* eslint-disable react/prop-types */
import { getFlagImageUrl } from "./flagUtils";

export default function TableTeam({ data }) {
  console.log(data);

  // Fonction pour calculer l'âge à partir de la date de naissance
  const calculateAge = (dateOfBirth) => {
    const dob = new Date(dateOfBirth);
    const diffMs = Date.now() - dob.getTime();
    const ageDate = new Date(diffMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <div className="max-w-screen-xl mx-auto md:px-12">
      <div className="mt-2 relative h-max overflow-auto">
        <div className="md:px-12">
          <div className="mt-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">COACH</h3>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-4">
              <p className="text-gray-900 font-medium">
                Last Name: <span className="text-lg text-gray-600 font-semibold">{data.coach.lastName}</span>
              </p>
              <p className="text-gray-900 font-medium">
                Nationality:<span className="text-lg text-gray-600 font-semibold">{data.coach.nationality}</span>
                {data.coach.nationality && (
                  <img src={getFlagImageUrl(data.coach.nationality)} alt={data.coach.nationality} className="h-5 w-5 ml-2" />
                )}
              </p>
              <p className="text-gray-900 font-medium">
                Date of Birth: <span className="text-lg text-gray-600 font-semibold">{data.coach.dateOfBirth}</span>
              </p>
              <p className="text-gray-900 font-medium">
                Contract Start: <span className="text-lg text-gray-600 font-semibold">{data.coach.contract.start}</span>
              </p>
              <p className="text-gray-900 font-medium">
                Contract Until: <span className="text-lg text-gray-600 font-semibold">{data.coach.contract.until}</span>
              </p>
            </div>
          </div>
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl mb-2">
            PLAYERS
          </h3>
          <table className="w-full table-auto text-xs md:text-sm text-left">
            <thead className="bg-gray-50 border border-slate-300">
              <tr>
                <th className="px-3 py-3 text-left text-xs font-medium text-blue-950 uppercase tracking-wider">
                  Position
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-blue-950 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-blue-950 uppercase tracking-wider">
                  Date of Birth
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-blue-950 uppercase tracking-wider">
                  Age
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-blue-950 uppercase tracking-wider">
                  Nationality
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-blue-950 uppercase tracking-wider">
                  Flag
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 border border-slate-300">
              {data &&
                data.squad &&
                data.squad.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-3 py-2 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900">
                      {item.position}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-xs md:text-sm font-medium flex items-center">
                      <span>{item.name}</span>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900">
                      {item.dateOfBirth}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900">
                      {calculateAge(item.dateOfBirth)}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900">
                      {item.nationality}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900">
                      <img src={getFlagImageUrl(item.nationality)} alt={item.nationality} className="h-5 w-5" />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
