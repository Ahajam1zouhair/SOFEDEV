import { useGetAllmatchsQuery } from "../Redux/features/user/matchsLive";
import Loading from "../components/Loading/Loading";
import CardMatchLiveUser from "../components/Matches/CardMatchLiveUser";
import CradMatchs from "../components/Matches/CradMatchs";

export default function MatchsAll() {
  const { data: matchs, isLoading } = useGetAllmatchsQuery();
  

  return (

      <div className="md:px-20">
        <div className="px-4 md:px-20">
          {isLoading ? (
            <Loading />
          ) : (
            <>
            <h1 className="font-semibold mt-4">Today's matches </h1>
              <CardMatchLiveUser match={matchs} />
              <CradMatchs match={matchs} />
            </>
          )}
        </div>
      </div>

  );
}
