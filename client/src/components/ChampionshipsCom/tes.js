// import { useEffect, useState } from "react";
// import { useGetMatchsChLeByIdMutation } from "../../Redux/features/match/matchSlice";
// import CardChampionships from "./CardChampionsLeague";
// import Loading from "../Loading/Loading";

// export default function ChampionsLeague() {
//   const [selectedOption, setSelectedOption] = useState(11);
//   const handleSelectChange = (e) => {
//     setSelectedOption(e.target.value);
//   };
//   const [getMatchsChLeById, { data, isLoading }] =
//     useGetMatchsChLeByIdMutation();
//   console.log(typeof Number(selectedOption));
//   useEffect(() => {
//     getMatchsChLeById(Number(selectedOption));
//   }, [getMatchsChLeById, selectedOption]);
//   return (
//     <div className="max-w-screen-xl mx-4 px-2 md:px-8">
//       <div className="grid justify-items-center ">
//         <div className="flex justify-center">
//           <img
//             src="https://www.sofoot.com/convert/2023/05/24095127/champions-league.png/image.webp"
//             className="w-20 h-20 md:w-28 md:h-28"
//             alt=""
//           />
//         </div>
//         <h3 className="text-gray-800 text-lg font-bold">
//           UEFA Champions League 2023/2024
//         </h3>
//       </div>
//       <div className="grid justify-items-end m-4">
//         <select
//           className="block appearance-none w-aout bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
//           value={selectedOption}
//           onChange={handleSelectChange}
//         >
//           <option value="1">Group stage day 1 of 1 </option>
//           <option value="2">Group stage day 2 of 2 </option>
//           <option value="3">Group stage day 3 of 3 </option>
//           <option value="4">Group stage day 4 of 4 </option>
//           <option value="5">Group stage day 5 of 5 </option>
//           <option value="6">Group stage day 6 of 6 </option>
//           <option value="7">Round of 16 - first leg</option>
//           <option value="8">Round of 16 - second leg</option>
//           <option value="9">Quarterfinals - first leg</option>
//           <option value="10">Quarterfinals -second leg </option>
//           <option value="11">Semi-final first leg</option>
//           <option value="12">Semi-final - second leg</option>
//         </select>
//       </div>
//       {isLoading ? <Loading /> : <CardChampionships data={data} />}
//     </div>
//   );
// }
