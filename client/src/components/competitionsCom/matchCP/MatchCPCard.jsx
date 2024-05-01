/* eslint-disable react/prop-types */

function MatchCPCard({ data }) {
  function countDaysSince(dateString) {
    // Convertir la chaîne de date en objet Date
    const date = new Date(dateString);

    // Obtenir la date d'aujourd'hui
    const today = new Date();

    // Calculer la différence en millisecondes entre aujourd'hui et la date donnée
    const differenceMs = today - date;

    // Convertir la différence en jours
    const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

    return differenceDays;
  }

  function convertToLocaleDateTime(dateString) {
    // Convertir la chaîne de date en objet Date
    const date = new Date(dateString);

    // Obtenir les composants de la date et de l'heure
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Les mois sont indexés à partir de 0
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Formater la date et l'heure selon le format souhaité
    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;

    // Retourner la date et l'heure formatées
    return { date: formattedDate, time: formattedTime };
  }

  return (
    <div className="flex flex-wrap justify-center">
      {data && data.matches && (
        <>
          {data.matches.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-5/12 border-solid border-2 border-indigo-100 m-2"
            >
              <div>
                <span className="text-slate-600 ml-4">
                  {convertToLocaleDateTime(item.utcDate).date}
                </span>
              </div>
              <div className="flex  justify-between mb-2 m-2">
                <div className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 m-2 ">
                  <div className="flex justify-center">
                    <img
                      src={item.homeTeam.crest}
                      className="w-10 h-10 md:w-10 md:h-10"
                      alt=""
                    />
                  </div>
                  <p className=" text-xs md:text-sm ">
                    {item.homeTeam.shortName}
                  </p>
                </div>
                <div className=" block font-sans text-base antialiased font-medium leading-relaxed">
                  <p className=" text-xs md:text-sm font-sans mb-1 grid place-content-center ">
                    {item?.group ? (
                      <span>{item?.group}</span>
                    ) : (
                      <span>{item.competition.name}</span>
                    )}
                  </p>
                  <p className=" text-xs md:text-sm font-sans mb-1 grid place-content-center ">
                    Day {item.matchday}
                  </p>
                  {item.status === "FINISHED" ? (
                    <p className="text-sm md:text-xl font-sans text-gray-700 grid place-content-center ">
                      <span className="text-slate-500">
                        {item.score.fullTime.home} : {item.score.fullTime.away}
                      </span>
                    </p>
                  ) : (
                    <>
                      <p className="text-xs md:text-sm font-sans text-gray-700 grid place-content-center">
                        <span className="text-slate-600">
                          In {countDaysSince(item.utcDate)} days
                        </span>
                      </p>
                      <p className="text-xs md:text-sm font-sans grid place-content-center">
                        {convertToLocaleDateTime(item.utcDate).time}
                      </p>
                    </>
                  )}
                </div>
                <div className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 m-2 ">
                  <div className="flex justify-center">
                    <img
                      src={item.awayTeam.crest}
                      className="w-10 h-10 md:w-10 md:h-10 "
                      alt=""
                    />
                  </div>
                  <p className="text-xs md:text-sm">
                    {item.awayTeam.shortName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default MatchCPCard;
