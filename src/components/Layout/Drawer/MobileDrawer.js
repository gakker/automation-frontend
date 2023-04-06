import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
} from "@mui/material";

import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { sideMenu } from "../../../helper/Data";
import MenuList from "./MenuList";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import Logo from "../../../assets/images/brand/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import Logo4 from "../../../assets/images/brand/logo-2.png";
import { nanoid } from "@reduxjs/toolkit";
import Logo5 from "../../../assets/images/brand/logo-3.png";
const pages = [
  {
    name: "Rule",
    navigator: "/",
    icon: HomeIcon,
  },
];
const DrawerComp = () => {
  const searchRef = useRef();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const searchHandler = () => {
    searchRef.current.classList.toggle("show");
  };
  return (
    <>
      <Drawer
        sx={{ zIndex: "999999" }}
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <DrawerStyled>
          <Divider />
          <List
            // sx={{ pt: 4 }}
            className="primary_color"
            sx={{
              width: "240px",
              padding: "2rem 20px 10px 0px",
            }}
          >
            <img src={Logo} alt="" className="logo" />
            {sideMenu.map((item, index) => (
              <MenuList item={item} open={open} index={index} key={nanoid()} />
            ))}
          </List>
        </DrawerStyled>
      </Drawer>
      <DrawerDataStyled>
        <Box sx={{ display: "flex", alignItems: "end", mx: 2 }}>
          <IconButton
            sx={{ color: "#000", marginLeft: "auto" }}
            onClick={() => setOpen(!open)}
            className="icon_style"
          >
            <FormatAlignLeftIcon className="text" />
          </IconButton>
          {/* <Box sx={{ position: "relative" }}>
            <Box
              sx={{ mx: 2 }}
              onClick={(e) => searchHandler()}
              className="icon_style"
            >
              <SearchIcon
                className="text "
                sx={
                  {
                    // position: "absolute",
                    // right: "0",
                    // color: "#b4bdd1",
                    // top: "8px",
                    // right: "11px",
                  }
                }
              />
            </Box>

            <Box
              sx={{
                position: "absolute",
                right: "-99px",
                top: "55px",
                display: "none",
              }}
              ref={searchRef}
              // className=""
            >
              <Box
                sx={{
                  position: "absolute",
                  background: "#3f51b5",
                  right: "0px",
                  padding: "7px",
                  bottom: "0px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#b4bdd1",
                  height: "45px",
                  width: "42px",
                  borderRadius: "0px 10px 10px 0px",
                  border: "2px solid #3f51b5",
                }}
              >
                <SearchIcon />
              </Box>

              <input
                type="text"
                className="input"
                style={{
                  padding: "13px",
                  minWidth: "300px",
                  outline: "none",
                  border: "none",
                  borderRadius: "10px",
                  border: "2px solid grey",
                }}
                placeholder="Search anything you want..."
              />
            </Box>
          </Box> */}
        </Box>
      </DrawerDataStyled>
    </>
  );
};

export default DrawerComp;

const DrawerStyled = styled.section`
  height: 100%;
  display: flex;
  .logo {
    padding: 10px 20px;
    max-width: 150px;
  }
  .css-g1fnhx-MuiList-root {
    /* padding: 2rem 4rem 0px 10px !important; */

    padding: 2rem 20px 10px 0px !important;
  }
  .MuiListItemButton-root {
  }

  .input {
  }
`;

const DrawerDataStyled = styled.section`
  .show {
    display: block !important;
  }
`;
