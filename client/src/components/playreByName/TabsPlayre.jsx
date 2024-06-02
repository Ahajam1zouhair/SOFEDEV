/* eslint-disable react/prop-types */
import * as Tabs from "@radix-ui/react-tabs";
import DataPlayre from "./DataPlayre";
import NewsClub from "../clubByid/newsClub";

export default function TabsPlayre({ data }) {
  const tabItems = [
    {
      name: data?.player[0].strPlayer,
      component: <DataPlayre data={data} />,
    },
    {
        name: "News",
        component: <NewsClub  />,
      },
  ];

  return (
    <Tabs.Root
      className="max-w-screen-xl mx-auto px-4 md:px-8"
      defaultValue="News"
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
