import Footer from "../components/Layouts/Footer";
import NavBar from "../components/Layouts/NavBra";
import { Navigate, Outlet } from "react-router-dom";

export default function UserLayout() {
  const user = localStorage.getItem("user");
  const isAdmin = JSON.parse(user)?.isAdmin;
  return (
    <>
      {!isAdmin ? (
        <div className="flex flex-col min-h-screen ">
          <NavBar />
          <div className="flex-grow main-content">
            <Outlet />
          </div>
          <div className="mt-auto ">
            <Footer />
          </div>
        </div>
      ) : (
        <Navigate to={"/admin"} replace />
      )}
    </>
  );
}
