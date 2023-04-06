import React from "react";
import styled from "styled-components";
import { Box, TextField, Typography, InputAdornment } from "@mui/material";
const ValidationTextField = ({ placeholder, formik, name, type, start }) => {
  return (
    <>
      <ValidationTextFieldStyled>
        <TextField
          id={name}
          name={name}
          type={type ? type : "text"}
          value={formik.values[name]}
          onChange={formik.handleChange}
          error={formik.touched[name] && Boolean(formik.errors[name])}
          helperText={formik.touched[name] && formik.errors[name]}
          fullWidth
          placeholder={placeholder}
          className="text_field"
          inputProps={{
            className: "primary_color",
          }}
          InputProps={{
            className: "primary_color",
            // endAdornment: (
            //   <InputAdornment position="end">{start && start}</InputAdornment>
            // ),
          }}
          sx={{
            borderRadius: "5px",
            input: {
              background: "currentColor",
              border: "1px solid",
              height: "0.8em",
              borderRadius: "5px",
            },
          }}
        />
      </ValidationTextFieldStyled>
    </>
  );
};

export default ValidationTextField;

const ValidationTextFieldStyled = styled.section`
  width: 100%;
  .text_field {
    max-width: 100%;
    .MuiOutlinedInput-root {
      &:hover fieldset {
        border-color: inherit;
      }
      &.Mui-focused fieldset {
        border-color: inherit;
      }
    }
  }
`;
