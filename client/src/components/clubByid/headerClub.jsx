/* eslint-disable react/prop-types */
export default function HeaderClub({ data }) {
  return (
    <div className="py-7">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="mt-1">
          <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-between md:gap-x-16">
            <li>
              <h3 className="font-semibold text-2xl md:text-4xl  text-center mb-2">
                {data?.name}
              </h3>
              <div className="flex items-center">
                <img
                  src={data?.runningCompetitions[0].emblem}
                  className="w-8 h-8  md:w-12 md:h-12 mr-2 "
                  alt=""
                />
                <img
                  src={data?.area.flag}
                  className="w-8 h-8  md:w-12 md:h-12 mr-2 "
                  alt=""
                />
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <img
                  src={data?.crest}
                  className="w-16 h-16  md:w-24 md:h-24 mr-2 "
                  alt=""
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
