import { getFlagImageUrl } from "../clubByid/flagUtils";

/* eslint-disable react/prop-types */
export default function HeaderPlayre({ data }) {
  return (
    <div className="py-7">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="mt-1">
          <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-between md:gap-x-16">
            <li>
              <h3 className="font-semibold text-xl md:text-4xl text-center mb-2">
                {data?.player[0].strPlayer}
              </h3>
              <div className="flex items-center">
                <img
                  src={getFlagImageUrl(data?.player[0].strTeam2)}
                  className="w-8   md:w-16  mr-2 "
                  alt=""
                />
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <img
                  src={data?.player[0].strCutout}
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
