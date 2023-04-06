import React, { useState, useEffect } from "react";
import DesktopDrawer from "../../components/Layout/Drawer/DesktopDrawer";
import BreadCrums from "../../components/common/BreadCrums";
import { Box, Grid, Typography, Button, Tab } from "@mui/material";
import MainImg from "../../assets/images/banner-img.png";
import { Shop, Facebook, Google } from "@mui/icons-material";
import InnerTab from "../../components/control center/Product Detail/InnerTab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import CustomTextField from "../../components/common/CustomTextField";
import CustomButton from "../../components/common/CustomButton";
import TiktokIcon from "../../components/common/TiktokIcon";
import { useNavigate } from "react-router-dom";
const ProductDetail = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <DesktopDrawer>
        <BreadCrums heading="Control Center" link="Product Detail" />
        {/* back button  */}
        <Box
          onClick={() => navigate(-1)}
          sx={{
            pt: 3,
            button: {
              width: "100%",
              maxWidth: "100px",
            },
          }}
        >
          <CustomButton text="Back" color="var(--main-color)" />
        </Box>

        {/* product detail  */}
        <Box
          className="primary_color"
          sx={{ mt: 4, padding: "17px 17px", borderRadius: "5px" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <Grid container spacing={2}>
                <Grid item xs={12} lg={2}>
                  <img
                    src={MainImg}
                    alt=""
                    style={{ width: "100%", maxWidth: "100px" }}
                  />
                </Grid>
                <Grid item md={12} lg={10}>
                  <Typography variant="h6" className="fw_bold text">
                    Subway Sufers
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          variant="body"
                          className=" text"
                          sx={{ fontSize: "14px" }}
                        >
                          Creation date
                        </Typography>
                        <Typography
                          variant="body"
                          className=" text"
                          // sx={{ fontSize: "14px" }}
                        >
                          08/06/2022
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          variant="body"
                          className=" text"
                          sx={{ fontSize: "14px" }}
                        >
                          Campaign Count
                        </Typography>
                        <Typography variant="body" className=" text fw_bold">
                          32
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          variant="body"
                          className=" text"
                          sx={{ fontSize: "14px" }}
                        >
                          Active Campaign
                        </Typography>
                        <Typography
                          variant="body"
                          className=" text fw_bold"
                          // sx={{ fontSize: "14px" }}
                        >
                          32
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: { xs: "flex-start", sm: "flex-end" },
                  flexDirection: "column",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", pb: 2 }}>
                  <Typography
                    sx={{ fontSize: "14px" }}
                    className="text fw_bold"
                  >
                    Platform:
                  </Typography>
                  <Shop sx={{ ml: 3 }} />
                </Box>
                <Button
                  // sx={{ background: "var(--main-color)", color: "#fff" }}
                  className="btn"
                >
                  Add Campaigns
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* Tabs  */}
        <Box sx={{ pt: 4 }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                className="text"
                variant="scrollable"
                allowScrollButtonsMobile
                scrollButtons
                sx={{
                  "& .MuiTabScrollButton-root": {
                    display: {
                      xs: "flex !important",
                      lg: "none !important",
                    },
                  },
                  "& 	.tab_btn": {
                    width: "100%",
                    minHeight: "50px !important",
                    minWidth: "220px",
                    background: "#dcdcdc",
                    fontWeight: "bold",
                    color: "#707070",
                    maxWidth: "inherit",
                    flexShrink: "inherit",
                    whiteSpace: "nowrap",
                  },
                  "& 	.MuiTabs-indicator": {
                    height: "4px",
                    background: "var(--main-color)",
                  },
                  "& svg": {
                    height: "20px",
                    "& fill": {
                      color: "#707070",
                    },
                  },
                  "& 	.Mui-selected": {
                    background: "#C2BCFC !important",
                    color: "var(--main-color) !important",
                  },
                  "& 	.Mui-selected svg": {
                    fill: "var(--main-color) !important",
                  },
                }}
              >
                <Tab
                  label="Facebook Ads"
                  value="1"
                  className="tab_btn"
                  iconPosition="start"
                  icon={<Facebook />}
                />
                <Tab
                  label="Tiktok Ads"
                  value="2"
                  className="tab_btn"
                  icon={
                    <Box sx={{ mr: 2 }}>
                      <TiktokIcon />
                    </Box>
                  }
                  iconPosition="start"
                />
                <Tab
                  label="Google Ads"
                  value="3"
                  className="tab_btn"
                  icon={<Google />}
                  iconPosition="start"
                />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ padding: "0", paddingTop: "25px" }}>
              <InnerTab />
            </TabPanel>
            <TabPanel value="2" sx={{ padding: "0", paddingTop: "25px" }}>
              <InnerTab />
            </TabPanel>
            <TabPanel value="3" sx={{ padding: "0", paddingTop: "25px" }}>
              <InnerTab />
            </TabPanel>
          </TabContext>
        </Box>
      </DesktopDrawer>
    </>
  );
};

export default ProductDetail;
