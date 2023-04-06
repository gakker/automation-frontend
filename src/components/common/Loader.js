import React from "react";
import { CircularProgress, Box } from "@mui/material";

const Loader = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", py: 5 }}>
        <CircularProgress sx={{ color: "var(--grey-color)" }} />
      </Box>
    </>
  );
};

export default Loader;
