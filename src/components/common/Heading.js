import React from "react";
import { Typography } from "@mui/material";
const Heading = ({ heading, variant = 'h6' }) => {
  return (
    <>
      <Typography
        className="text fw_bold"
        variant= {variant}
        sx={{ py: 1, opacity: 0.7 }}
        component="div"
      >
        {heading}
      </Typography>
    </>
  );
};

export default Heading;
