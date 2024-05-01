/* eslint-disable react/prop-types */
import * as Tabs from "@radix-ui/react-tabs";
import DataClub from "./DataClub";
import MatchClub from "./matchClub";
import StandingClub from "./StandingClub";
import TableTeam from "./tableTeam";

export default function TabsCluBbyId({ data }) {
  const tabItems = [
    {
      name: data?.name,
      component: <DataClub data={data} />,
    },
    {
      name: "Upcoming  Matches",
      component: <MatchClub status={"SCHEDULED"} />,
    },
    {
      name: "Results",
      component: <MatchClub status={"FINISHED"} />,
    },
    {
      name: "Standing",
      component: data?.runningCompetitions ? (
        <StandingClub competitions={data.runningCompetitions[0].code} />
      ) : null,
    },
    {
      name: "team",
      component: <TableTeam data={data} />,
    },
  ];

  return (
    <Tabs.Root
      className="max-w-screen-xl mx-auto px-4 md:px-8"
      defaultValue="Upcoming  Matches"
    >
      <Tabs.List
        className="w-full border-b flex items-center gap-x-3 overflow-x-auto text-sm"
        aria-label="Manage your account"
      >
        {tabItems.map((item, idx) => (
          <Tabs.Trigger
            key={idx}
            className="group outline-none py-1.5 border-b-2 border-white text-gray-500 data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600 mr-4"
            value={item.name}
          >
            <div className="flex items-center px-3 rounded-lg duration-150 group-hover:text-indigo-600 group-hover:bg-gray-50 group-active:bg-gray-100 font-medium text-sm">
              <span className="text-xs md:text-sm">{item.name}</span>
            </div>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {tabItems.map((item, idx) => (
        <Tabs.Content key={idx} className="py-6" value={item.name}>
          {item.component}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
