import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetTeamsMutation } from "../../Redux/features/match/clubs";
import Loading from "../Loading/Loading";

// eslint-disable-next-line react/prop-types
export default function ClubsCP({ ligue }) {
  const [getTeams, { data, isLoading }] = useGetTeamsMutation();
  useEffect(() => {
    if (ligue) {
      getTeams({
        competitions: ligue,
      });
    }
  }, [getTeams, ligue]);
  console.log(data);
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      {isLoading ? (
        <div className="flex justify-center">
          <Loading />
        </div>
      ) : (
        <div className="flex flex-wrap">
          {data && data.teams && (
            <>
              {data.teams.map((item, index) => (
                <Link
                to={`/clubs/${item.name}/${item.id}`}
                  key={index}
                  className="w-full sm:w-2/12 mb-4"
                >
                  <div className="flex items-center">
                    <img
                      src={item.crest}
                      className="w-6 h-6 mr-2 "
                      alt={`Logo ${item.shortName}`}
                    />
                    <p className="text-gray-800 text-xs md:text-sm font-bold mb-1">{item.shortName}</p>
                  </div>
                </Link>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}
