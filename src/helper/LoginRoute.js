import { Navigate, Outlet } from "react-router-dom";
import React from "react";
const role = localStorage.getItem("role");
const token = localStorage.getItem("token");
const useAuth = () => {
  if (token) {
    return true;
  } else {
    return false;
  }
};

const LoginRoutes = () => {
  const isAuth = useAuth();

  if (isAuth) {
    if (token) {
      return <Navigate to="/main-dashbaord" />;
    } else {
      return <Navigate to="/" />;
    }
  } else {
    return <Outlet />;
  }
};

export default LoginRoutes;
