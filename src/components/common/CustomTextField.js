import React from "react";
import styled from "styled-components";
import { Box, TextField } from "@mui/material";
const CustomTextField = ({ placeholder, setValue, name, data }) => {
  console.log(data);
  const handleChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    const value = type === "checkbox" ? e.target.checked : e.target.value;
    setValue((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));
    console.log(e.target.value);
  };
  return (
    <>
      <CustomTextFieldStyled>
        <Box>
          <TextField
            fullWidth
            value={data && data[name]}
            name={name}
            placeholder={placeholder}
            onChange={(e) => handleChange(e)}
            className="text_field"
            inputProps={{
              className: "primary_color  ",
            }}
            InputProps={{
              className: "primary_color ",
            }}
            sx={{
              maxWidth: "450px",
              input: {
                background: "currentColor",
                border: "1px solid",
                height: "0.8em",
                borderRadius: "5px",
              },
            }}
          />
        </Box>
      </CustomTextFieldStyled>
    </>
  );
};

export default CustomTextField;

const CustomTextFieldStyled = styled.section`
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
