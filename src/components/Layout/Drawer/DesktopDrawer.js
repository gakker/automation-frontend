import React, { useState, useEffect } from "react";
import {
  Box,
  Toolbar,
  List,
  CssBaseline,
  Divider,
  IconButton,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { styled as muiStyled, useTheme } from "@mui/material/styles";
import styled from "styled-components";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import { FormatAlignLeft } from "@mui/icons-material";
import { sideMenu } from "../../../helper/Data";
import Logo from "../../../assets/images/brand/logo-2.png";
import Logo1 from "../../../assets/images/brand/logo-3.png";
import MenuList from "./MenuList";
import Action from "./Action";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = muiStyled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = muiStyled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, mobilescreen }) => ({
  zIndex: theme.zIndex.drawer + 1,
  width: mobilescreen ? `100%` : "calc(100% - 4rem)",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: mobilescreen ? "100%" : `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = muiStyled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const getMapKey = () => {
  const id = uuidv4();
  // console.log(id, "id");
  return id;
};

const DesktopDrawer = ({ children }) => {
  // console.log("SDf");
  const muiTheme = useTheme();
  const [open, setOpen] = React.useState(true);
  const mobilescreen = useMediaQuery(muiTheme.breakpoints.down("md"));
  const { theme } = useSelector((store) => store.theme);
  const dispatch = useDispatch();

  const drawer = (
    <>
      <Box
        className="primary_color"
        sx={{
          height: "81px",
          padding: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {!open ? (
          <img src={Logo} alt="" style={{ width: "40px" }} />
        ) : (
           <Typography variant="h5"  className="primary_color" sx={{color: "var(--main-color) !important",fontSize : "34px",fontWeight : 500}} >Automation</Typography>
        )}
      </Box>
      <Divider />
      <List
        sx={{ pr: open ? 3 : 0, pt: 4, height: "100%" }}
        className="primary_color"
      >
        {React.Children.toArray(
          sideMenu.map((item, index) => <MenuList item={item} open={open} />)
        )}
      </List>
    </>
  );
  
  return (
    <>
      <DesktopDrawerStyled>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            mobilescreen={mobilescreen}
            position="fixed"
            open={open}
            className="primary_color"
            sx={{ px: 4, boxShadow: " 0px 1px 3px #d1d1d1  !important" }}
            //   sx={{ width: !open && "calc(100% - 4rem)" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                // justifyContent: "space-between",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Toolbar sx={{ height: "75px" }}>
                  <Box
                    sx={{
                      display: mobilescreen ? "none" : "block",
                    }}
                  >
                    <IconButton
                      // color="black"

                      className="primary_color icon_style"
                      aria-label="open drawer"
                      onClick={() => setOpen(!open)}
                      edge="start"
                      sx={{
                        marginRight: 5,
                        // boxShadow: "0px 2px 3px rgb(4 4 7 / 10%)",
                        // ...(open && { display: "none" }),
                      }}
                    >
                      <FormatAlignLeft />
                    </IconButton>
                  </Box>
                </Toolbar>
              </Box>
              <Box sx={{ diplay: "flex", alignItems: "center" }}>
                {/* Mobile Drawer + dark light theme setting is me ha  */}
                <Action />
              </Box>
            </Box>
          </AppBar>
          <Drawer
            variant="permanent"
            open={open}
            sx={{ display: mobilescreen ? "none" : "block" }}
          >
            {drawer}
          </Drawer>
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: "100%", overflowX: "hidden" }}
          >
            <DrawerHeader />
            {children}
          </Box>
        </Box>
      </DesktopDrawerStyled>
    </>
  );
};

export default DesktopDrawer;

const DesktopDrawerStyled = styled.section`
  .sidebar_btn {
    height: 41px;
    display: flex;
    font-size: 10px;
  }

  .icon {
    font-size: 14px;
  }
  /* .MuiTypography-root {
    font-size: 14px;
  } */

  .search {
    width: 100%;
    height: 40px;
    padding: 1rem 1.5rem;
    font-size: 0.875rem;
    border-radius: 20px;
    background: inherit;
    border: 1px solid #eaedf1;
    color: #4d5875;
    outline: none;
  }
`;
