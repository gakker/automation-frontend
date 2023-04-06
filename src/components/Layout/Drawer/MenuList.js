import React, { useState, useEffect } from "react";
import {
  ListItemButton,
  ListItemIcon,
  Collapse,
  ListItemText,
  Box,
  List,
  Grid,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { useNavigate, useLocation } from "react-router-dom";
import { Circle, Home } from "@mui/icons-material";
import { nanoid } from "@reduxjs/toolkit";
import styled from "styled-components";


const MenuList = ({ item, open }) => {

  const location = useLocation();
  const navigate = useNavigate();

  const [subMenu, setSubMenu] = useState(false);

   console.log("sdsd",subMenu);

   const getSubMenu = ()=>{
    if(item.submenu.length > 0){
      for (let i = 0; i < item.submenu.length; i++) {
        if (item.submenu[i].navigator === location.pathname) {
          setSubMenu(true);
        }
        else{
          setSubMenu(false);
        }
      }
    }
   }

  useEffect(() => {
   getSubMenu();
  }, []);

  const checkSubMenu  = item.submenu.length > 0;
  let activeTabs = false;

  const subMenuHandler = (item) => {
    if (open) {
      setSubMenu(!subMenu);
      activeTabs = false;
    }
    if(!checkSubMenu){
      navigate(item.navigator);
      activeTabs = true;
    }
    // if (!open) {
    //   navigate(item.navigator);
    // }
  };



  return (
    <>
      <MenuListStyled>
        <ListItemButton
          //   className="sidebar_btn"
          //   selected={selectedIndex === index}
          //   key={item.name}
          //   disablePadding
          //   sx={{ display: "block", mb: 3 }}
          //   onClick={(e) => {
          //     navigate(item.navigator);
          //     // setSubMenu(!subMenu);
          //   }}
          //   button
          // 8*****
          // 8*****
          // 8*****
          //   for list item
          className="sidebar_btn"
          selected={checkSubMenu ? item.submenu.find((route) => route.navigator === location.pathname) : item.navigator === location.pathname ? true : null   }
          sx={
            {
              // display: "block",
              // mb: 3,
              // minHeight: 48,
              // justifyContent: open subMenu ? "initial" : "center",
              // px: 2.5,
            }
          }
          key={item.name}
          onClick={() => subMenuHandler(item)}
        >
          <ListItemIcon
            className="icon text"
            sx={{
              minWidth: 0,
              mr: open ? 1 : "auto",
              justifyContent: "center",
            }}
          >
            <item.icon />
          </ListItemIcon>
          <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
          <Box sx={{ display: open ? "block" : "none" }}>
            {/* { subMenu  ? <ExpandLess /> : <ExpandMore /> } */}
            {
              checkSubMenu ? (subMenu  ? <ExpandLess /> : <ExpandMore /> ) : null
            }
          </Box>
        </ListItemButton>

        { open &&  (
          <Collapse in={subMenu} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {React.Children.toArray(
                item.submenu.map((menu) => (
                  <ListItemButton
                    // key={nanoid()}
                    // sx={{ pl: 4 }}
                    // navigate(to, { replace: true })
                    onClick={() => navigate(menu.navigator)}
                    selected={location.pathname === menu.navigator}
                    className="sub_menu"
                    sx={{
                      pl: 4,
                      "&.Mui-selected": {
                        color: "#6e66ce",
                        background: "none",
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{ minWidth: "25px" }}
                      className="icon text"
                    >
                      <Circle sx={{ fontSize: "10px" }} />
                    </ListItemIcon>
                    <ListItemText primary={menu.name} />
                  </ListItemButton>
                ))
              )}
              {/* {item.submenu.map((menu, indexx) => (
                <ListItemButton
                  key={nanoid()}
                  // sx={{ pl: 4 }}
                  // navigate(to, { replace: true })
                  onClick={() => navigate(menu.navigator)}
                  selected={location.pathname === menu.navigator}
                  className="sub_menu"
                  sx={{
                    pl: 4,
                    "&.Mui-selected": {
                      color: "#6e66ce",
                      background: "none",
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "25px" }} className="icon text">
                    <Circle sx={{ fontSize: "10px" }} />
                  </ListItemIcon>
                  <ListItemText primary={menu.name} />
                </ListItemButton>
              ))} */}
            </List>
          </Collapse>
        )}
      </MenuListStyled>
    </>
  );
};

export default MenuList;

const MenuListStyled = styled.section`
  margin-bottom: 15px;
  .sidebar_btn.Mui-selected {
    background: linear-gradient(
      to bottom right,
      #6259ca 0%,
      #6259ca99 100%
    ) !important;
    box-shadow: 0 7px 12px 0 #6259ca33;
    border-radius: 0 60px 60px 0 !important;
    color: #fff !important;
  }
  .sidebar_btn.Mui-selected .icon {
    color: #fff !important;
  }

  .sub_menu.Mui-selected .icon {
    color: var(--main-color) !important;
  }
`;
