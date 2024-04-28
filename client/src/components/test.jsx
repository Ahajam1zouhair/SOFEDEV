import  { useEffect } from "react";
import { useGetMatchsChLeByIdMutation } from "../Redux/features/match/matchSlice";

const LiveScoreWidget = () => {
  const [getMatchsChLeById, { data ,error }] =
  useGetMatchsChLeByIdMutation();
  useEffect(() => {
    getMatchsChLeById();
  }, [getMatchsChLeById]);
  console.log(data);
  console.log(error);
  return (
    <div>Testing</div>
  );
};

export default LiveScoreWidget;
