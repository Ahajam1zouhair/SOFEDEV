import CradMatchs from "../../components/adminComponets/CradMatchs";
import CardMatchLive from "../../components/adminComponets/CardMatchLive";
import { useGetAllmatchsQuery } from "../../Redux/features/user/matchsLive";
import Loading from "../../components/Loading/Loading";

export default function MatchsAll() {
  const { data: matchs, isLoading } = useGetAllmatchsQuery();
  console.log(matchs);

  return (
    <div>
      {isLoading ? <Loading />  :<>
       </>
       } 
       <CardMatchLive match={matchs} />
      <CradMatchs match={matchs} />
    </div>
  );
}
