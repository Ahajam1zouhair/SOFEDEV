import { Link } from "react-router-dom";
import { useState } from "react";
import { useGetPlayerQuery } from "../../Redux/Api/apiPlyares"; // Assurez-vous d'importer correctement votre hook
import Loading from "../Loading/Loading";
export default function TopPlayers() {
  const [playerName, setPlayerName] = useState("");
  const { data, error, isLoading } = useGetPlayerQuery(playerName, {
    skip: !playerName, // skip the query if playerName is empty
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // The query will automatically run with the playerName due to the useGetPlayersQuery hook
  };

  const tabTopPlayers = [
    {
      src: "https://www.thesportsdb.com/images/media/player/cutout/09l76b1672826296.png",
      name: "Cristiano Ronaldo",
    },
    {
      src: "https://www.thesportsdb.com/images/media/player/cutout/ydb20o1696255002.png",
      name: "Lionel Messi",
    },
    {
      src: "https://www.thesportsdb.com/images/media/player/cutout/rursbd1678357078.png",
      name: "Kylian Mbappé",
    },
    {
      src: "https://www.thesportsdb.com/images/media/player/cutout/x0pjw41710913872.png",
      name: "Vinícius Júnior",
    },
    {
      src: "https://www.thesportsdb.com/images/media/player/cutout/7zldav1698501217.png",
      name: "Jude Bellingham",
    },
    {
      src: "https://www.thesportsdb.com/images/media/player/cutout/15aner1662548423.png",
      name: "Toni Kroos",
    },
    {
      src: "https://www.thesportsdb.com/images/media/player/cutout/55kzdk1693915653.png",
      name: "Erling Haaland",
    },
    {
      src: "https://www.thesportsdb.com/images/media/player/cutout/fe708x1678357303.png",
      name: "Neymar",
    },
  ];
  console.log(data);
  return (
    <div className="p-2 md:p-6">
      <div className="max-w-xl mb-4">
        <h3 className="text-xl  md:text-3xl">TOP PLAYERS</h3>
      </div>
      <div className="grid gap-y-4 grid-cols-4 sm:grid-cols-8">
        {tabTopPlayers.map((item, idx) => (
          <Link
            key={idx}
            className="text-center"
            to={`/playre/${item.name}`}
          >
            <img
              src={item.src}
              alt={item.name}
              className="w-10 h-10 md:w-20 md:h-20 mx-auto"
            />
            <p className="text-gray-800 text-xs md:text-sm font-bold mb-1">
              {item.name}
            </p>
          </Link>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="relative mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search Player"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
        />
      </form>

      <div className="mt-4">
        {isLoading &&  <Loading />}
        {error && <p>Error: {error}</p>}
        {data && (
          <ul>
            {data.player?.map((player) => (
              <Link
              to={`/playre/${player.strPlayer}`}
                key={player.idPlayer}
                className="px-3 py-2 whitespace-nowrap text-xs md:text-sm font-medium flex items-center "
              >
                <img
                  src={player.strCutout}
                  className="w-6 h-6 md:w-8 md:h-8 mr-2"
                  alt=""
                />
                <span>{player.strPlayer}</span>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
