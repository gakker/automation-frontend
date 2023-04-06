import React from "react";
import { Button } from "@mui/material";
const CustomButton = ({ color, text }) => {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          background: color,
          "&:hover": { opacity: "0.6", background: color, transition: "0.5s" },
        }}
      >
        {text}
      </Button>
    </>
  );
};

export default CustomButton;
