/* eslint-disable react/prop-types */
export default function CardNews({ article }) {
  return (
    <div>
      <a
        href={article.url}
        target="_blank"
        className="container md:px-2 md:py-1 mb-4"
      >
        <div className="bg-white rounded-lg shadow-lg flex flex-col  ">
          <div className="match-header flex items-center md:px-4 py-2 border-b-2 border-gray-200">
            <div className="md:py-1 px-1 md:px-2 rounded font-semibold flex items-center ">
              <div className="match-tournament flex items-center font-semibold">
                <p className=" flex items-center text-xs md:text-sm">
                  {article.source.name}
                </p>
              </div>
            </div>
            <div className="match-actions ml-auto">
              <p className=" text-xs  mb-1 grid place-content-center ">
                <p className="text-xs md:text-sm text-gray-700 font-semibold italic">
                  {article.author}
                </p>
              </p>
            </div>
          </div>
          <div className="match-content  ">
            <div className="column">
              <div className="flex flex-col items-center">
                <h2 className="mt-4 mb-8  text-xs md:text-sm font-semibold ">
                  {/* {item.homeTeam.shortName} */}
                  {article.title}
                </h2>
                <div className="team-logo flex items-center justify-center">
                  <img
                    src={article.urlToImage}
                    //   alt={item.homeTeam.crest}
                    className="w-2/3  h-3/3 "
                  />
                </div>
              </div>
            </div>

            <div className="column">
              <div className="team">
                <h2 className=" md:px-8 py-2 text-xs md:text-sm mt-2 font-semibold italic">
                  {article.description}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}