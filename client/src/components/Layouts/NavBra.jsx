import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Avatar from "@radix-ui/react-avatar";
import { Logout } from "../../router/PrivateRouterAdmin";

const dropdownNavs = [
  {
    navs: [
      {
        title: "UEFA Champions League",
        path: "/championships",
        src: "https://crests.football-data.org/CL.png",
      },
      {
        title: "Premier League",
        path: "/competitions/PL",
        src: "https://crests.football-data.org/PL.png",
      },
      {
        title: "Eredivisie",
        path: "/competitions/DED",
        src: "https://crests.football-data.org/ED.png",
      },
    ],
  },
  {
    navs: [
      {
        title: "LaLiga",
        path: "/competitions/PD",
        src: "https://crests.football-data.org/PD.png",
      },
      {
        title: "Bundesliga",
        path: "/competitions/BL1",
        src: "https://crests.football-data.org/BL1.png",
      },
      {
        title: "Portuguese League",
        path: "/competitions/PPL",
        src: "https://crests.football-data.org/PPL.png",
      },
    ],
  },
  {
    navs: [
      {
        title: "Serie A",
        path: "/competitions/SA",
        src: "https://crests.football-data.org/SA.png",
      },
      {
        title: "Ligue 1",
        path: "/competitions/FL1",
        src: "https://crests.football-data.org/FL1.png",
      },
    ],
  },
];

export default function NavBar() {
  const [state, setState] = useState(false);
  const [drapdownState, setDrapdownState] = useState({
    isActive: false,
    idx: null,
  });
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "Matches ", path: "/", isDrapdown: false },
    { title: "News", path: "/new", isDrapdown: false },
    {
      title: "Competitions",
      isDrapdown: true,
      navs: dropdownNavs,
    },
    { title: "Clubs", path: "/clubs", isDrapdown: false },
    { title: "Players", path: "/players", isDrapdown: false },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".nav-menu"))
        setDrapdownState({ isActive: false, idx: null });
    };
  }, []);

  const handelNavigate = (path) => {
    navigate(path);
    setDrapdownState({ isActive: false, idx: null });
    setDrapdownState({ isActive: true, idx: null });
    setState(!state);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const user = localStorage.getItem("user");
  const name = JSON.parse(user)?.name;
  const url = JSON.parse(user)?.url;
  return (
    <>
      <nav
        className={`relative z-30 bg-white shadow-md w-full md:static md:text-sm md:border-none  ${
          state
            ? "fixed top-0 left-0 shadow-lg rounded-b-xl "
            : ""
        }`}
      >
        <div className="items-center gap-x-14 px-4 max-w-screen-xl mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between py-1 md:py-1 md:block ">
            <a href="javascript:void(0)">
              <img
                src="https://www.cisex.org/sites/default/files/2023-02/Sofascore-01-1.png"
                width={75}
                height={50}
                alt="Float UI logo"
              />
            </a>
            <div className="md:hidden">
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="items-center  space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className="cursor-pointer">
                    {item.isDrapdown ? (
                      <button
                        className="w-full flex items-center justify-between text-gray-800 text-xl gap-1 text-gray-700 hover:text-indigo-600 cursor-pointer"
                        onClick={() =>
                          setDrapdownState({
                            idx,
                            isActive: !drapdownState.isActive,
                          })
                        }
                      >
                        {item.title}
                        {drapdownState.idx == idx && drapdownState.isActive ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                    ) : (
                      <a
                        onClick={() => handelNavigate(item.path)}
                        className="block text-gray-800 text-xl hover:text-indigo-600"
                      >
                        {item.title}
                      </a>
                    )}
                    {item.isDrapdown &&
                    drapdownState.idx == idx &&
                    drapdownState.isActive ? (
                      <div className="mt-6 inset-x-0 top-20 w-full md:absolute md:border-y md:shadow-md md:mt-0 z-30  bg-white">
                        <ul className="max-w-screen-xl mx-auto grid items-center gap-6 md:p-8 md:grid-cols-2 lg:grid-cols-3">
                          {item?.navs.map((dropdownItem, idx) => (
                            <li key={idx}>
                              <ul className="mt-5 space-y-6">
                                {dropdownItem.navs.map((navItem, idx) => (
                                  <li key={idx} className="group">
                                    <a
                                      className="flex gap-3 items-center"
                                      onClick={() =>
                                        handelNavigate(navItem.path)
                                      }
                                    >
                                      <div className="w-12 h-12 rounded-full  text-indigo-600 flex items-center justify-center duration-150  group-hover:text-white md:w-14 md:h-14">
                                        <img
                                          src={navItem.src}
                                          className="w-10 h-10 md:w-16 md:h-16"
                                          alt=""
                                        />
                                      </div>
                                      <div>
                                        <span className="text-gray-800 duration-200 group-hover:text-indigo-600 text-sm font-medium md:text-base">
                                          {navItem.title}
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                );
              })}
              {name ? (
                <div className="flex-1  items-center  space-x-2  flex-1 items-center md:justify-end gap-x-6 space-y-3 md:flex md:space-y-0">
                    <Link
                      to="/profile"
                      className="flex items-center p-2  rounded-full"
                    >
                      <img
                        src={url}
                        alt={url}
                        className="w-10 h-10 rounded-full border border-gray-700"
                      />
                      <span className="ml-2 text-sm">{name}</span>
                    </Link>
                  {/* <DropdownMenu.Trigger className="outline-none">
                        <Avatar.Root>
                          <Avatar.Image
                            className="w-8 h-8 flex items-center gap-x-4 cursor-pointer rounded-full ring-offset-2 ring-gray-800 focus:ring-2 duration-150"
                            src={url}
                            alt="vienna"
                          />
                          <span className="block text-gray-500/80">{name}</span>
                        </Avatar.Root>
                      </DropdownMenu.Trigger> */}
                  <li>
                    <Link
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      onClick={Logout}
                      to="/"
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                        />
                      </svg>
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        Logout
                      </span>
                    </Link>
                  </li>
                </div>
              ) : (
                <div className="flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0">
                  <li>
                    <Link
                      to="/login"
                      className="block py-3 text-center text-gray-700 hover:text-indigo-600 border rounded-lg md:border-none"
                    >
                      Log in
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline"
                    >
                      Sign in
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {state ? (
        <div
          className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setState(false)}
        ></div>
      ) : (
        ""
      )}
    </>
  );
}
