import React from "react";
import { TabList } from "@mui/lab";
import { Tab } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
const TabsButtonTwo = ({ setValue, data }) => {
  return (
    <>
      <TabList
        variant="scrollable"
        allowScrollButtonsMobile
        scrollButtons
        onChange={(e, newValue) => setValue(newValue)}
        aria-label="lab API tabs example"
        sx={{
          "&": {
            overflow: { xs: "hidden", lg: "visible" },
          },
          "& .MuiTabScrollButton-root": {
            display: {
              xs: "flex !important",
              lg: "none !important",
            },
          },
          "& .MuiTabs-scroller": {
            overflow: {
              xs: "hidden !important",
              lg: "visible !important",
            },
          },
          "&	.MuiTabs-indicator": {
            background: "var(--main-color)",
            height: "5px",
            bottom: "-4.5px",
          },
          "&	.Mui-selected": {
            color: "var(--main-color) !important",
          },
        }}
      >
        {data.map((tab, index) => (
          <Tab
            label={tab.label}
            value={tab.value}
            className="text"
            key={nanoid()}
          />
        ))}
      </TabList>
    </>
  );
};

export default TabsButtonTwo;
