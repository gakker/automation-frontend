
import React, { useState } from "react";
import TiktokIcon from "../common/TiktokIcon";

import {
  Box,
  Typography,
  Tab,
  Grid,
  TextField,
  Autocomplete,
  InputBase,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";

import { TabContext, TabList, TabPanel } from "@mui/lab";

import {
  Facebook,
  Google,
  Videocam,
  AddPhotoAlternate,
  TextFields,
} from "@mui/icons-material";

import { nanoid } from "@reduxjs/toolkit";

const TabsButton = ({ value, setValue, data, setAutomationData}) => {
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (setAutomationData) {
      setAutomationData((prevData) => ({
        ...prevData,
        scope: newValue,
      }));
    }
    console.log(newValue);
  };

  return (
    <>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label="lab API tabs example"
          sx={{
            "& 	.Mui-selected": {
              background: "var(--main-color) !important",
              border: "none",
            },
            "& 	.MuiTabs-indicator": {
              background: "none",
            },
            "& 	.tab_btn": {
              width: { xs: "100% !important", sm: "auto !important" },
              height: data[0].position === "bottom" ? "130px" : "37px",
              minHeight: data[0].position === "bottom" ? "130px" : "37px",
              borderRadius: "5px",
              minWidth: data[0].position === "bottom" ? "150px" : "120px",
              background: "var(--light-grey-color)",
              color: "#fff !important",
              margin: "10px 0",
              marginRight: "15px",
            },
            "& svg": {
              height: data[0].position === "bottom" ? "auto" : "100%",
              fontSize: data[0].position === "bottom" && "50px",
            },
            "& .MuiTabs-flexContainer": {
              flexWrap: "wrap",
            },
          }}
        >
          {data.map((item) => (
            <Tab
              label={item.heading}
              icon={item.icon && <item.icon />}
              iconPosition={item.position}
              value={item.state}
              className="tab_btn"
              key={nanoid()}
            />
          ))}
        </TabList>
      </TabContext>
    </>
  );
};

export default TabsButton;
