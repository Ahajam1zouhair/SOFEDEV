/* eslint-disable react/prop-types */
export default function DataClub({ data }) {
  console.log(data);
  return (
    <section className="py-1">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-lg">
          <div className="flex flex-wrap">
            <h3 className="mt-3 text-gray-800 text-3xl font-extrabold sm:text-4xl">
              {data.name}
            </h3>
            <img
              src={data.area.flag}
              alt={data.area.flag}
              className="w-10 h-10  ml-2"
            />
          </div>
          <div className="mt-3 text-gray-600 dark:text-gray-400">
            <p className="font-semibold text-gray-700 mb-4">
              founded :
              <span className="text-gray-800 text-xl ml-1">{data.founded}</span>
            </p>
            <p className="font-semibold text-gray-700 mb-4">
              clubColors :
              <span className="text-gray-800 text-xl ml-1">
                {data.clubColors}
              </span>
            </p>
            <p className="font-semibold text-gray-700 mb-4">
              address :
              <span className="text-gray-800 text-xl ml-1">{data.address}</span>
            </p>
            <p className="font-semibold text-gray-700 mb-4">
              venue :
              <span className="text-gray-800 text-xl ml-1">{data.venue}</span>
            </p>
            <p className="font-semibold text-gray-700 mb-4">
              website :
              <a
                className="text-gray-800 text-xl ml-1"
                href="http://www.realmadrid.com"
              >
                {data.website}
              </a>
            </p>
          </div>
          <p className="font-semibold text-gray-700 mb-4">
            running Competitions :
          </p>
          <div className="flex flex-wrap ">
            {data.runningCompetitions.map((item, idx) => (
              <div key={idx} className="flex flex-row ml-4 mb-4 ">
                <img
                  src={item.emblem}
                  alt={item.name}
                  className="w-6 h-6 md:w-12 md:h-12"
                />
                <p className="content-center  text-gray-800 text-xs md:text-sm font-bold">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
