import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem("user");
  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export const Logout = () => {
  localStorage.removeItem("user");
};
