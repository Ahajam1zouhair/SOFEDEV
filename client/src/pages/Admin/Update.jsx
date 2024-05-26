import { useEffect, useState } from "react";
import {
  useDeleteMatchMutation,
  useGetBYIdmatchMutation,
  useUpdateMatchMutation,
} from "../../Redux/features/user/matchsLive";
import { useNavigate, useParams } from "react-router-dom";
import CardUpdate from "../../components/adminComponets/CardUpdate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function UpdateMatch() {
  const [matchInput, setMatchInput] = useState({
    scoresHome: 0,
    scoresAway: 0,
    statusMatch: "",
    isVarcheck: false,
    VarStatus: null,
  });
  const navigate = useNavigate();
  const [getBYIdmatch, { data: match, error, isLoading, isSuccess }] =
    useGetBYIdmatchMutation();
  const { id } = useParams();
  const [updateMatch, { isLoading: updateLoading }] = useUpdateMatchMutation();
  const [deleteMatch, { isLoading: udelete }] = useDeleteMatchMutation();

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
        VarStatus: match.varcheck?.status ?? "null",
        statusMatch: match.status ?? "",
      });
    }
  }, [match]);

  const success = () =>
    toast.success("Success update !", { position: "top-center" });

  const onChange = (e) => {
    setMatchInput({ ...matchInput, [e.target.name]: e.target.value });
  };
  console.log(matchInput.VarStatus);
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
            status: matchInput.VarStatus,
          },
        },
      });
      success();
    } catch (error) {
      console.log(error);
    }
  };
  const handelDelete = async () => {
    try {
      await deleteMatch(id);
      navigate("/admin");
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
        <>
          <CardUpdate
            match={match}
            matchInput={matchInput}
            onChange={onChange}
            setMatchInput={setMatchInput}
            onSubmit={onSubmit}
            updateLoading={updateLoading}
            handelDelete={handelDelete}
          />
          <ToastContainer />
        </>
      )}
    </div>
  );
}
