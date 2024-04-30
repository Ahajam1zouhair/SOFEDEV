import { useEffect } from "react";
import { useGetTeamsByIdMutation } from "../Redux/features/match/clubs";
import HeaderClub from "../components/clubByid/headerClub";
import { useParams } from "react-router-dom";
import TabsCluBbyId from "../components/clubByid/TabsCluBbyId";

export default function ClubByid() {
  const { id } = useParams();
  console.log(id);
  const [getTeamsById, { data }] = useGetTeamsByIdMutation();
  useEffect(() => {
    if (id) {
      getTeamsById(id);
    }
  }, [getTeamsById, id]);
  return (
    <div className="max-w-screen-xl mx-auto  md:px-16">
      <HeaderClub data={data} />
      <TabsCluBbyId data={data} />
      
    </div>
  );
}
