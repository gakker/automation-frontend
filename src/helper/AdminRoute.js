import { Navigate, Outlet } from "react-router-dom";
import React from "react";

const useAuth = () => {

  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  if (token) {
    // if (role && role === "admin") {
    //   return true;
    // } else {
    //   return false;
    // }
    // wese hi
    return true;
  } else {
    return false;
  }
};

const AdminRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoutes;
