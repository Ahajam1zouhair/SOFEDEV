import { useGetAllmatchsQuery } from "../Redux/features/user/matchsLive";
import CardMatchLive from "../components/adminComponets/CardMatchLive";
import CradMatchs from "../components/adminComponets/CradMatchs";

export default function MatchsAll() {
  const { data: matchs, error, isLoading } = useGetAllmatchsQuery();
  

  return (
    <div>
      {/* {isLoading ? <Loading />  :<>
       </>
       } */}
      <CardMatchLive match={matchs} />
      <CradMatchs match={matchs} />
    </div>
  );
}
