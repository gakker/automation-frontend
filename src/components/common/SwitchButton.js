import React from "react";
import stlyed from "styled-components";
import {
  Box,
  Grid,
  Card,
  CardActions,
  CardContent,
  Typography,
  Divider,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  TableBody,
  Button,
  Switch,
} from "@mui/material";

const SwitchButton = ({name}) => {

  const [state, setState] = React.useState({
   checkedA : false
  });


  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

 


  return (
    <>
      <Switch
        sx={{
          width: "50px",
          height: "24px",
          padding: "0px",
          "& .MuiSwitch-switchBase": {
            color: "#818181",
            padding: "1px",
            "&.Mui-checked + .MuiSwitch-track": {
              backgroundColor: "var(--main-color)",
            },
          },
          "& .MuiSwitch-thumb": {
            color: "white",
            width: "20px",
            height: "20px",
            margin: "1px",
          },
          "& .MuiSwitch-track": {
            borderRadius: "20px",
            backgroundColor: "#818181",
            opacity: "1 !important",
            "&:after, &:before": {
              color: "white",
              fontSize: "11px",
              position: "absolute",
              top: "6px",
            },
            "&:after": {
              content: "'On'",
              left: "8px",
            },
            "&:before": {
              content: "'Off'",
              right: "7px",
            },
          },
          "& .Mui-checked": {
            color: "#23bf58 ",
            transform: "translateX(26px) !important",
          },
        }}
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </>
  );
};

export default SwitchButton;
