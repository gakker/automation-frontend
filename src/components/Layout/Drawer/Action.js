import React, { useState } from "react";
import {
  Box,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { DarkMode, Logout, Brightness5 } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { themeToggler } from "../../../feature/theme/ThemeSlice";
import styled from "styled-components";
import DrawerComp from "./MobileDrawer";
import { styled as muiStyled, useTheme } from "@mui/material/styles";
import ProfilePic from "../../../assets/images/banner-img.png";
import { logout } from "../../../feature/auth/authSlice";
const Profile = () => {
  const muiTheme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme } = useSelector((store) => store.theme);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const MobileScreen = useMediaQuery(muiTheme.breakpoints.down("md"));
  const themeHandler = () => {
    if (theme === "light") {
      dispatch(themeToggler("dark"));
    } else {
      dispatch(themeToggler("light"));
    }
  };
  
  const LogoutHandler = () => {
    dispatch(logout());
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };
  return (
    <>
      <ProfileStyled>
        <Box sx={{ display: "flex", alignItems: "end", textAlign: "center" }}>
          {MobileScreen && <DrawerComp />}
          <Box
            onClick={themeHandler}
            className="icon_style"
            sx={{
              cursor: "pointer",
              "&:hover": {
                opacity: 0.8,
              },
            }}
          >
            {theme === "light" ? (
              <DarkMode className="text" />
            ) : (
              <Brightness5 className="text" />
            )}
          </Box>
          <Tooltip title="Account settings">
            <img
              src={ProfilePic}
              alt=""
              className="profile_img"
              onClick={handleClick}
            />
            {/* <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton> */}
          </Tooltip>
        </Box>
        <Menu
          // className="primary_color"
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          // sx={{background:"green"}}
          PaperProps={{
            elevation: 0,
            sx: {
              background: "inherit",
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                // background: "green",
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={() => navigate("/profile")}>
            <Avatar /> Profile
          </MenuItem>
          {/* <MenuItem>
            <Avatar /> My account
          </MenuItem> */}
          <Divider />
          {/* <MenuItem>
            <ListItemIcon className="text">
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem> */}
          {/* <MenuItem>
            <ListItemIcon className="text">
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem> */}
          <MenuItem onClick={LogoutHandler}>
            <ListItemIcon className="text">
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </ProfileStyled>
    </>
  );
};

export default Profile;

const ProfileStyled = styled.section`
  .profile_img {
    border-radius: 50%;
    height: 38px;
    width: 38px;
    object-fit: cover;
    margin-left: 20px;
    cursor: pointer;
    &:hover {
    }
  }
`;
