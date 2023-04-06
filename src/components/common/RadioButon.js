import React from "react";
import {
  Box,
  Typography,
  Button,
  FormLabel,
  FormHelperText,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  Grid,
} from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
const RadioButon = ({ formik, name, data, error }) => {
  return (
    <>
      <FormControl
        error={formik.touched[name] && Boolean(formik.errors[name])}
        variant="standard"
      >
        {/* <FormLabel id="demo-error-radios">
                  Poffp quiz: MUI is...
                </FormLabel> */}
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name={name}
          value={formik.values[name]}
          onChange={formik.handleChange(name)}
          sx={{
            "& .Mui-checked": {
              color: "var(--main-color) !important",
            },
          }}
        >
          {data.map((item) => (
            <React.Fragment key={nanoid()}>
              <FormControlLabel
                value={item.value}
                control={<Radio className="text" />}
                label={item.label}
                className="text"
                sx={{
                  "& .MuiTypography-root ": {
                    whiteSpace: "nowrap",
                    fontSize: "14px",
                  },
                }}
              />
              {item.caption && (
                <Typography variant="caption" className="text">
                  {item.caption}
                </Typography>
              )}
            </React.Fragment>
          ))}

          {/* <FormControlLabel value="Reach" control={<Radio />} label="Reach" /> */}
        </RadioGroup>
        {error && (
          <FormHelperText>
            {formik.touched[name] && formik.errors[name]}
          </FormHelperText>
        )}
      </FormControl>
    </>
  );
};

export default RadioButon;
