import * as Tabs from "@radix-ui/react-tabs";
import ClubsCP from "./ClubsCP";
import TopClubs from "./TopClubs";
export default function TabsClubs() {
  const tabItems = [
    {
      icon: "https://banner2.cleanpng.com/20180711/vg/kisspng-201617-premier-league-english-football-league-l-lion-emoji-5b460f06eeac18.5589169115313180229776.jpg",
      name: "PL",
      title: "Premier League",
    },
    {
      icon: "https://brandlogos.net/wp-content/uploads/2023/10/la_liga-logo_brandlogos.net_im3jl.png",
      name: "PD",
      title: "LaLiga",
    },
    {
      icon: "https://crests.football-data.org/BL1.png",
      name: "BL1",
      title: "Bundesliga",
    },
    {
      icon: "https://crests.football-data.org/FL1.png",
      name: "FL1",
      title: "Ligue 1",
    },
    {
      icon: "https://crests.football-data.org/SA.png",
      name: "SA",
      title: "Serie A",
    },
  ];

  return (
    <Tabs.Root
      className="max-w-screen-xl mx-auto px-4 md:px-8"
      defaultValue="PL"
    >
      <TopClubs/>


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
            <div className="flex items-center  px-3 rounded-lg duration-150 group-hover:text-indigo-600 group-hover:bg-gray-50 group-active:bg-gray-100 font-medium text-sm">
              <img src={item.icon} className="w-6 h-6 md:w-12  md:h-12 mr-2" alt="" />
              <span className="text-xs md:text-sm">{item.title}</span>
            </div>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {tabItems.map((item, idx) => (
        <Tabs.Content key={idx} className="py-6" value={item.name}>
          <ClubsCP ligue={item.name} />
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
