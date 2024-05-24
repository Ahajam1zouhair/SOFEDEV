import NavBar from "../components/Layouts/NavBra";
import { Navigate, Outlet } from "react-router-dom";

export default function UserLayout() {
  const user = localStorage.getItem("user");
  const isAdmin = JSON.parse(user)?.isAdmin;
  return (
    <>
      {!isAdmin ? (
        <div>
          <NavBar />
          <div>
            <Outlet />
          </div>
        </div>
      ) : (
        <Navigate to={"/admin"} replace />
      )}
    </>
  );
}

