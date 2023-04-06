import React from "react";
import { Button } from "@mui/material";
const FilterButton = ({ value }) => {
  return (
    <>
      <Button
        variant="outlined"
        className="border primary_color"
        sx={{ padding: "8px 10px", mx: 1, width: { xs: "100%", sm: "auto" } }}
      >
        {value}
      </Button>
    </>
  );
};

export default FilterButton;
