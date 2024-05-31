import Loading from "../components/Loading/Loading";
import CardMatchLiveUser from "../components/Matches/CardMatchLiveUser";
import CradMatchs from "../components/Matches/CradMatchs";
import { useGetAllmatchsQuery } from "../Redux/features/user/matchsLive";

export default function MatchsAll() {
  const { data: matchs, error, isLoading } = useGetAllmatchsQuery();

  return (
    <div className="md:px-20">
      <div className="px-4 md:px-20">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {" "}
            <CardMatchLiveUser match={matchs} />
            <CradMatchs match={matchs} />
          </>
        )}
      </div>
    </div>
  );
}
