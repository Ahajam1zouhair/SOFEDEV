import { useState } from "react";
import { Link } from "react-router-dom";
import { Logout } from "../../router/PrivateRouterAdmin";
import { MdCreateNewFolder } from "react-icons/md";
import { ImCreditCard } from "react-icons/im";
import { PiUsersThreeFill } from "react-icons/pi";
import { HiOutlineLogout } from "react-icons/hi";
const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const user = localStorage.getItem("user");
  const name = JSON.parse(user)?.name;
  const url = JSON.parse(user)?.url;
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          sidebarOpen ? "" : "-translate-x-full sm:translate-x-0"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-200 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  group"
              >
                <img
                  src="https://www.cisex.org/sites/default/files/2023-02/Sofascore-01-1.png"
                  width={75}
                  height={75}
                  alt="Float UI logo"
                />
              </a>
            </li>
            <li>
              <Link
                to="/admin"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={() => setSidebarOpen(false)}
              >
                {/* //icon */}
                <ImCreditCard
                  style={{ width: "25px", height: "25px", color: "gray" }}
                />
                <span className="ms-3">Matchs</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/create"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={() => setSidebarOpen(false)}
              >
                <MdCreateNewFolder
                  style={{ width: "25px", height: "25px", color: "gray" }}
                />
                <span className="ms-3">Cerate MAtch</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/users"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={() => setSidebarOpen(false)}
              >
                <PiUsersThreeFill
                  style={{ width: "25px", height: "25px", color: "gray" }}
                />
                <span className="ms-3">Users</span>
              </Link>
            </li>

            <hr className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-400 dark:border-gray-800" />
            <li>
              <Link
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                to="/admin/profile"
                onClick={() => setSidebarOpen(false)}
              >
                {/* <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg> */}
                <img
                  className="w-8 h-8 flex items-center gap-x-4 cursor-pointer rounded-full ring-offset-2 ring-gray-800 focus:ring-2 duration-150"
                  src={url}
                  alt="vienna"
                />
                <span className="flex-1 ms-3 whitespace-nowrap">{name}</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={Logout}
                to="/"
              >
                <HiOutlineLogout
                  style={{ width: "25px", height: "25px", color: "gray" }}
                />
                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      {sidebarOpen ? (
        <div
          className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      ) : (
        ""
      )}
    </>
  );
};

export default Sidebar;
