import Sidebar from "../components/Layouts/Sidebar";
import { Navigate, Outlet } from "react-router-dom";


export default function AdminLayout() {
    const user = localStorage.getItem("user");
    const isAdmin = JSON.parse(user)?.isAdmin;
  return (
    <>
      {isAdmin ? (
        <div >
          <Sidebar />
          <div className="mt-10 sm:ml-64 md:px-16">
            <Outlet />
          </div>
        </div>
      ) : (
        <Navigate to={"/"} replace />
      )}
    </>
  );
}
