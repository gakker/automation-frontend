import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ResponsiveDrawer from "../../components/Layout/Drawer/DesktopDrawer";

// import Axios from "../../api/Axios";
import automationEmptyImage from "../../assets/images/automation-empty.svg";
// import ConnectFacebook from "../../components/Layout/Facebook/ConnectFacebook";
// Mui imports start
// *
// *
// *
// *
// *
// *
// *
// *
// *
import { Button, Menu, MenuItem, Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// Mui imports end
// *
// *
// *
// *
// *
// *
// *
// *
// *
const Home = () => {
  // menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isConnect, setIsConnect] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // useEffect(() => {
  //   window.addEventListener("beforeunload", alertUser);
  //   return () => {
  //     window.removeEventListener("beforeunload", alertUser);
  //   };
  // }, []);
  // const alertUser = (e) => {
  //   e.preventDefault();
  //   e.returnValue = "g";
  // };
  return (
    <>
      <HomeStyled>
        <ResponsiveDrawer>
          {/* <ConnectFacebook /> */}
          <Box
            sx={{
              height: "calc(100vh - 8rem)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={automationEmptyImage}
              alt=""
              style={{ width: "100%", maxWidth: "40rem" }}
            />

            <Typography
              variant="h6"
              component="div"
              gutterBottom
              sx={{ maxWidth: "41rem", textAlign: "center", margin: "0 auto" }}
              className="text"
            >
              Rules help spend less time on ads management by automatically
              tracking your campaign performance and executing actions
            </Typography>
            <Box sx={{ py: 3 }}>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className="btn"
                endIcon={<KeyboardArrowDownIcon />}
                // sx={{ background: "#000", color: "#fff" }}
              >
                Connect ad account
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Facebook Ads</MenuItem>
                <MenuItem onClick={handleClose}>Google Ads</MenuItem>
                <MenuItem onClick={handleClose}>Tiktok Ads</MenuItem>
              </Menu>
            </Box>
          </Box>
        </ResponsiveDrawer>
      </HomeStyled>
    </>
  );
};

export default Home;

const HomeStyled = styled.section``;
