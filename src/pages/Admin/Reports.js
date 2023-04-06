import React from "react";
import ResponsiveDrawer from "../../components/Layout/Drawer/DesktopDrawer";
import { ReactComponent as NoData } from "../../assets/images/report.svg";
import { Box, Typography } from "@mui/material";
const Reports = () => {
  return (
    <>
      <ResponsiveDrawer>
        <Box
          sx={{
            height: "calc(100vh - 8rem)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <NoData style={{ width: "100%", maxWidth: "40rem" }} />
          {/* <img
            src={noData}
            alt=""
            style={{ width: "100%", maxWidth: "40rem" }}
          /> */}

          <Typography
            variant="h6"
            component="div"
            gutterBottom
            sx={{
              maxWidth: "41rem",
              textAlign: "center",
              margin: "0 auto",
              py: 2,
            }}
            className="text"
          >
            Keep your team or clients informed with recurring scheduled reports
            delivered by email or in Slack
          </Typography>
        </Box>
      </ResponsiveDrawer>
    </>
  );
};

export default Reports;
