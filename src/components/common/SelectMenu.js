import React, { useState } from "react";
import {
  Box,
  Grid,
  FormControl,
  Select,
  MenuItem,
  OutlinedInput,
  Tooltip,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Divider,
  InputAdornment,
} from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";

import { useDispatch } from "react-redux";
import { getCurrentStatus } from "../../slices/statusSlice";


const SelectMenu = ({ placeholder, data, color, setChanged }) => {
  
  const dispatch = useDispatch();
  const [age, setAge] = useState("");

  return (
    <>
      {/* <start /> */}
      <FormControl sx={{ width: "100%" }}>
        <Select
          displayEmpty
          value={age}
          input={<OutlinedInput />}
          className="text primary_color"
          sx={{
            fieldset: {
              border: "1px solid",
              borderRadius: "5px",
              borderColor: "inherit !important",
            },
            "& .MuiSelect-select": {
              padding: "12px  10px",
              color: color && "#fff !important",
              // background: "var(--main-color)",
            },
            svg: {
              color: "inherit",
            },
            background: color && `${color} !important`,
            color: color && "#fff !important",
          }}
          placeholder="Age"
          onChange={(e) => {

            if(e.target.value === "monthly" || e.target.value === "daily" ){
              console.log("dsad",e.target.value);
            }

            sessionStorage.setItem("apv",JSON.stringify(e.target.value));
            dispatch(getCurrentStatus(e.target.value));

          
            setAge(e.target.value);
            if (setChanged) setChanged(e.target.value);

          }}
          inputProps={{
            "aria-label": "Without label",
            className: "border text ",
          }}
          InputProps={{
            className: "text ",
          }}
        >
          <MenuItem disabled value="">
            <p>{placeholder}</p>
          </MenuItem>
          {data &&
            data.map((item, index) => (
              <MenuItem value={item.value} key={nanoid()}>
                {item.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectMenu;
