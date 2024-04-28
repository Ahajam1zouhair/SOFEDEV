/* eslint-disable react/prop-types */

function CardMatchCL({ data, stage }) {
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

  // Exemple d'utilisation
  const dateString = "2024-05-01T19:00:00Z";
  const daysSince = countDaysSince(dateString);
  console.log("Nombre de jours écoulés depuis la date :", daysSince);

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

  // Exemple d'utilisation
  const dateStringS = "2024-05-01T19:00:00Z";
  const { date, time } = convertToLocaleDateTime(dateStringS);
  console.log("Date locale :", date);
  console.log("Heure locale :", time);

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {data && data.matches && (
          <>
            {data.matches
              .filter((item) => item.stage === stage)
              .map((item) => (
                <div
                  key={item.id}
                  className="w-full sm:w-5/12 border-solid border-2 border-indigo-100 m-2"
                >
                  <div className="flex items-center justify-between mb-2 m-2">
                    <div className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 ">
                      <div className="">
                        <img
                          src={item.homeTeam.crest}
                          className="w-10 h-10 md:w-16 md:h-16"
                          alt=""
                        />
                      </div>
                      <p className=" text-sm md:text-lg ">
                        {item.homeTeam.shortName}
                      </p>
                    </div>
                    <div className=" block font-sans text-base antialiased font-medium leading-relaxed grid place-content-center">
                      <p className=" text-sm md:text-lg font-sans mb-1 ">
                        {item?.group ? (
                          <span>{item?.group}</span>
                        ) : (
                          <span>{item.stage}</span>
                        )}
                      </p>
                      {item.status === "FINISHED" ? (
                        <p className="text-sm md:text-lg font-sans text-gray-700 ">
                          <span className="mr-2 text-slate-500">
                            Final result
                          </span>
                          <span>
                            {item.score.fullTime.home} :
                            {item.score.fullTime.away}
                          </span>
                        </p>
                      ) : (
                        <>
                          <p className="text-sm md:text-lg font-sans text-gray-700">
                            <span className="text-slate-600">
                              In {countDaysSince(item.utcDate)} days
                            </span>
                          </p>
                          <p className="text-sm md:text-lg font-sans text-gray-700">
                            <span className="text-slate-600">
                              {convertToLocaleDateTime(item.utcDate).date}
                            </span>
                          </p>
                          <p className="text-sm md:text-lg font-sans grid place-content-center">
                            {convertToLocaleDateTime(item.utcDate).time}
                          </p>
                        </>
                      )}
                    </div>
                    <div className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 m-2 ">
                      <div className="flex justify-center">
                        <img
                          src={item.awayTeam.crest}
                          className="w-10 h-10 md:w-16 md:h-16 "
                          alt=""
                        />
                      </div>
                      <p className="text-sm md:text-lg">
                        {item.awayTeam.shortName}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  );
}

export default CardMatchCL;
