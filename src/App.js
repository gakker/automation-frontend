import React, { useEffect } from "react";
import routes from "./components/Routes/routes";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import AdminRoutes from "./helper/AdminRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoginRoutes from "./helper/LoginRoute";
import LoginPage from "./pages/Auth/Login";
import GlobalStyle from "./assets/css/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/Theme";
import { themeToggler } from "./feature/theme/ThemeSlice";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import DesktopDrawer from "./components/Layout/Drawer/DesktopDrawer";

function App() {
  
  const { theme } = useSelector((store) => store.theme);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const token = localStorage.getItem("token");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    var mode = localStorage.getItem("mode");
    if (mode) {
      dispatch(themeToggler(mode));
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
        <ToastContainer />
        <GlobalStyle />
        <div>
          <Routes>
            <Route element={<LoginRoutes />}>
              <Route path="/" element={<LoginPage />} />
            </Route>
            {routes.map((route, index) =>
              route.protect ? (
                <Route element={<AdminRoutes />} key={nanoid()}>
                  <Route path={route.path} element={<route.component />} />
                </Route>
              ) : (
                <Route
                  path={route.path}
                  element={<route.component />}
                  key={nanoid()}
                />
              )
            )}
            <Route
              path="*"
              element={<Navigate to={token ? "/main-dashboard" : "/"} />}
            />
          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
