/* eslint-disable react/prop-types */
export default function DataClub({ data }) {
  console.log(data);
  return (
    <section className=" shadow-xl relative bg-gradient-to-b from-blue-900 to-white rounded-lg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-lg mx-auto p-6 bg-gradient-to-b from-blue-900 to-white ">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-3xl font-bold text-blue-200">
              {data.name}a
            </h3>
            <img
              src={data.area.flag}
              alt={data.area.flag}
              className="w-10 h-10 ml-2"
            />
          </div>
          <div className="text-black-900">
            <p className="mb-4">
              <span className="font-semibold">Founded:</span>{" "}
              <span>{data.founded}</span>
            </p>
            <p className="mb-4">
              <span className="font-semibold">Club Colors:</span>{" "}
              <span>{data.clubColors}</span>
            </p>
            <p className="mb-4">
              <span className="font-semibold">Address:</span>{" "}
              <span>{data.address}</span>
            </p>
            <p className="mb-4">
              <span className="font-semibold">Venue:</span>{" "}
              <span>{data.venue}</span>
            </p>
            <p className="mb-4">
              <span className="font-semibold">Website:</span>{" "}
              <a
                className="text-black-900 hover:text-blue-400 transition-colors duration-300"
                href={data.website}
              >
                {data.website}
              </a>
            </p>
          </div>
          <p className="font-semibold text-black-900 mb-2">Running Competitions:</p>
          <ul className="list-none ml-5">
            {data.runningCompetitions.map((item, idx) => (
              <li key={idx} className="text-black-900 text-xs md:text-sm font-semibold mb-1">
                <img
                  src={item.emblem}
                  alt={item.name}
                  className="w-6 h-6 mr-2 md:w-12 md:h-12 inline-block"
                />
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
