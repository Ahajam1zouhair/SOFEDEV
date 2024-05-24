import { useEffect, useState } from "react";
import {
  useGetBYIdmatchMutation,
  useUpdateMatchMutation,
} from "../../Redux/features/user/matchsLive";
import { useParams } from "react-router-dom";
import CardUpdate from "../../components/adminComponets/CardUpdate";

export default function UpdateMatch() {
  const [matchInput, setMatchInput] = useState({
    scoresHome: 0,
    scoresAway: 0,
    statusMatch: "",
    isVarcheck: false,
    VarStatus: "",
  });

  const [getBYIdmatch, { data: match, error, isLoading }] =
    useGetBYIdmatchMutation();
  const { id } = useParams();
  const [updateMatch] = useUpdateMatchMutation();

  useEffect(() => {
    if (id) {
      getBYIdmatch(id);
    }
  }, [getBYIdmatch, id]);

  useEffect(() => {
    if (match) {
      setMatchInput({
        scoresHome: match.scores?.home ?? 0,
        scoresAway: match.scores?.away ?? 0,
        isVarcheck: match.varcheck?.isVarcheck ?? false,
        VarStatus: match.varcheck?.status ?? "",
        statusMatch: match.status ?? "",
      });
    }
  }, [match]);

  const onChange = (e) => {
    setMatchInput({ ...matchInput, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateMatch({
        id,
        date: {
          scores: {
            home: matchInput.scoresHome,
            away: matchInput.scoresAway,
          },
          status: matchInput.statusMatch,
          varcheck: {
            isVarcheck: matchInput.isVarcheck,
            
            status: matchInput?.VarStatus,
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error loading match data</p>
      ) : (
        <CardUpdate
          match={match}
          matchInput={matchInput}
          onChange={onChange}
          setMatchInput={setMatchInput}
          onSubmit={onSubmit}
        />
      )}
    </div>
  );
}
