import { useEffect, useState } from "react";
import { useGetTeamsMutation } from "../../Redux/features/match/clubs";
import FormCreate from "../../components/adminComponets/formCreate";
import { useCreateMatchMutation } from "../../Redux/features/user/matchsLive";
import { useNavigate } from "react-router-dom";

export default function CreateMatch() {
  const [competition, setCompetition] = useState({
    name: "",
    emblem: "",
    code: "",
  });

  const navigate = useNavigate();
  const [teameHome, setTeameHome] = useState({
    name: "",
    image: "",
    id: "",
  });
  const [teameAway, setTeameAway] = useState({
    name: "",
    image: "",
    id: "",
  });

  const [matchInput, setMatchInput] = useState({
    Venue: "",
    Status: "",
    UtcDate: "",
    Time: "",
  });

  const [ligue, setLigue] = useState("");
  const [getTeams, { data }] = useGetTeamsMutation();
  useEffect(() => {
    if (ligue) {
      getTeams({
        competitions: ligue,
      });
    }
  }, [getTeams, ligue]);
  console.log(matchInput);
  const [createMatch, { isLoading: createLoading, isSuccess }] =
    useCreateMatchMutation();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await createMatch({
        competition: competition,
        venue: matchInput.Venue,
        teams: {
          home: teameHome,
          away: teameAway,
        },
        status: matchInput.Status,
        date: {
          utcDate: matchInput.UtcDate,
          time: matchInput.Time,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  if (isSuccess) {
    setCompetition({
      name: "",
      emblem: "",
      code: "",
    });
    setTeameHome({
      name: "",
      image: "",
      id: "",
    });
    setTeameAway({
      name: "",
      image: "",
      id: "",
    });
    setMatchInput({
      Venue: "",
      Status: "",
      UtcDate: "",
      Time: "",
    });
    setLigue("");
    navigate("/admin");
  }
  return (
    <div className="">
      <FormCreate
        setLigue={setLigue}
        teams={data?.teams}
        setCompetition={setCompetition}
        setTeameHome={setTeameHome}
        setTeameAway={setTeameAway}
        HomeId={teameHome.id}
        setMatchInput={setMatchInput}
        matchInput={matchInput}
        createLoading={createLoading}
        onSubmit={onSubmit}
      />
    </div>
  );
}
