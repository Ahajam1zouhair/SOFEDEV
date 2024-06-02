import { getFlagImageUrl } from "../clubByid/flagUtils";

/* eslint-disable react/prop-types */
export default function DataPlayre({ data }) {
  const player = data?.player[0];
  const playerAge = player ? calculateAge(player.dateBorn) : null;

  const formatUrl = (url) => {
    if (url && !url.startsWith('http')) {
      return `https://${url}`;
    }
    return url;
  };

  return (
    <section className="shadow-xl relative bg-gradient-to-b from-blue-900 to-white rounded-lg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-lg mx-auto p-6 bg-gradient-to-b from-blue-900 to-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-3xl font-bold text-blue-200">
              {player?.strPlayer}
            </h3>
            <img
              src={getFlagImageUrl(player?.strTeam2)}
              alt={player?.strTeam2}
              className="w-10 ml-2"
            />
          </div>
          <div className="text-black-900">
            <p className="mb-4">
              <span className="font-semibold">Date of Birth:</span>{" "}
              <span>{player?.dateBorn}</span>
            </p>
            <p className="mb-4">
              <span className="font-semibold">Age:</span>{" "}
              <span>{playerAge}</span>
            </p>
            <p className="mb-4">
              <span className="font-semibold">Birth Location:</span>{" "}
              <span>{player?.strBirthLocation}</span>
            </p>
            <p className="mb-4">
              <span className="font-semibold">Gender:</span>{" "}
              <span>{player?.strGender}</span>
            </p>
            <p className="mb-4">
              <span className="font-semibold">Weight:</span>{" "}
              <span>{player?.strWeight}</span>
            </p>
            <p className="mb-4">
              <span className="font-semibold">Height:</span>{" "}
              <span>{player?.strHeight}</span>
            </p>
            <p className="mb-4">
              <span className="font-semibold">Preferred Side:</span>{" "}
              <span>{player?.strSide}</span>
            </p>
            <p className="mb-4">
              <span className="font-semibold">Current Team:</span>{" "}
              <span>{player?.strTeam}</span>
            </p>
            <p className="mb-4">
              <span className="font-semibold">Previous Team:</span>{" "}
              <span>{player?.strTeam2}</span>
            </p>
            <p className="mb-4">
              <span className="font-semibold">Signing Date:</span>{" "}
              <span>{player?.strSigning}</span>
            </p>
            <p className="mb-4">
              <span className="font-semibold">Kit Number:</span>{" "}
              <span>{player?.strKit}</span>
            </p>
            <p className="mb-4">
              <span className="font-semibold">Agent:</span>{" "}
              <span>{player?.strAgent}</span>
            </p>
            <p className="mb-4">
              <span className="font-semibold">Instagram:</span>{" "}
              <a
                href={formatUrl(player?.strInstagram)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {player?.strInstagram}
              </a>
            </p>
            <p className="mb-4">
              <span className="font-semibold">Facebook:</span>{" "}
              <a
                href={formatUrl(player?.strFacebook)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {player?.strFacebook}
              </a>
            </p>
            <p className="mb-4">
              <span className="font-semibold">Twitter:</span>{" "}
              <a
                href={formatUrl(player?.strTwitter)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {player?.strTwitter}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function calculateAge(dateOfBirth) {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
