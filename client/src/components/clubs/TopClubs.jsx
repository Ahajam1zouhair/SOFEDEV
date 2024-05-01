import { Link } from "react-router-dom";

export default function TopClubs() {
  const tabTopClubs = [
    {
      src: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png",
      name: "RMA",
      id: 86,
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/fr/thumb/a/a1/Logo_FC_Barcelona.svg/1200px-Logo_FC_Barcelona.svg.png",
      name: "Barça",
      id: 81,
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/800px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
      name: "Bayern",
      id: 5,
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/ba/Logo_Manchester_City_2016.svg/1200px-Logo_Manchester_City_2016.svg.png",
      name: "Man City",
      id: 65,
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png",
      name: "Liverpool",
      id: 65,
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/1200px-FC_Internazionale_Milano_2021.svg.png",
      name: "Inter",
      id: "Serie A",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/1200px-Paris_Saint-Germain_Logo.svg.png",
      name: "PSG",
      id: 524,
    },
  ];
  return (
    <div className="p-2 md:p-6">
      <div className="max-w-xl mb-4">
        <h3 className="text-xl  md:text-3xl">TOP CLUBS</h3>
      </div>
      <div className="grid  gap-y-4  grid-cols-4 sm:grid-cols-8">
        {tabTopClubs.map((item, idx) => (
          <Link
            key={idx}
            className="text-center"
            to={`/clubs/${item.name}/${item.id}`}
          >
            <img
              src={item.src}
              alt={item.name}
              className="w-6 h-6 md:w-14 md:h-14 mx-auto"
            />
            <p className="text-gray-800 text-xs md:text-sm font-bold mb-1">
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
