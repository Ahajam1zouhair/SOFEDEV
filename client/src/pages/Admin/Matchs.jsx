import { useEffect } from "react";
import { useGetAllmatchsQuery } from "../../Redux/features/user/matchsLive";
import CradMatchs from "../../components/adminComponets/CradMatchs";
import CardMatchLive from "../../components/adminComponets/CardMatchLive";

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
