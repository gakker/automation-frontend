import React from "react";
import styled from "styled-components";
import { TextField, Autocomplete, Box } from "@mui/material";
const top100Films = [
  { label: "Monday", year: 1994 },
  { label: "Tuesday", year: 1972 },
  { label: "Wednesday", year: 1974 },
  { label: "Thursday", year: 2008 },
  { label: "Friday", year: 1957 },
  { label: "Saturday", year: 1993 },
  { label: "Sunday", year: 1994 },
];
const AutoComplete = ({ placeholder, setValue, name, data, dataTwo }) => {
  console.log(name, "dadad");
  const onAutoCompleteChange = (e, newValue) => {
    setValue((prevData) => ({
      ...prevData,
      [name]: newValue?.label,
    }));
  };
  return (
    <>
      <AutoCompleteStyled>
        <Box>
          <Autocomplete
            disablePortal
            name={name}
            value={dataTwo && dataTwo[name]}
            fullWidth
            onChange={(e, newValue) => onAutoCompleteChange(e, newValue)}
            options={data ? data : top100Films}
            className="primary_color "
            sx={{
              fieldset: {
                border: "1px solid",
                borderRadius: "5px",
                borderColor: "inherit",
              },
              label: {
                color: "inherit",
                "&.Mui-focused": {
                  color: "inherit",
                },
              },
              svg: {
                color: "inherit",
              },
              "& .MuiButtonBase-root": {
                color: "inherit",
              },
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder={placeholder}
                className="pack_man_input "
                sx={{ label: { top: "-2px" } }}
                inputProps={{
                  className: "border ",
                  ...params.inputProps,
                }}
                InputProps={{
                  ...params.InputProps,
                  className: "text",
                  style: {
                    padding: "6px",
                  },
                }}
              />
            )}
          />
        </Box>
      </AutoCompleteStyled>
    </>
  );
};

export default AutoComplete;

const AutoCompleteStyled = styled.section`
  width: 100%;
  .pack_man_input {
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
