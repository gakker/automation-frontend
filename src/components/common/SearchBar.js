import React from "react";
import styled from "styled-components";
import { Search } from "@mui/icons-material";
import { Box } from "@mui/material";
const SearchBar = ({ setValue }) => {
  return (
    <>
      <SearchBarstyled>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            // maxWidth: "23rem",
          }}
        >
          <input
            className="search_bar border primary_color"
            placeholder="Search..."
            type="text"
            onChange={(e) => setValue(e.target.value)}
          />
          <Search
            className="text"
            sx={{
              position: "absolute",
              right: "0",
              color: "#b4bdd1",
              top: "10px",
              right: "11px",
            }}
          />
        </Box>
      </SearchBarstyled>
    </>
  );
};

export default SearchBar;

const SearchBarstyled = styled.section`
  width: 100%;
  .search_bar {
    width: 100%;
    /* height: 50px; */
    padding: 0.8rem 0.5rem;
    font-size: 0.875rem;
    background: inherit;
    border: 1px solid #707787;
    color: #4d5875;
    border-radius: 5px;
    outline: none;
  }
`;
