import React from "react";
import { Typography } from "@mui/material";
const CaptionHeading = ({ text }) => {
  return (
    <>
      <Typography
        className="text fw_bold"
        variant="caption"
        component="div"
        sx={{ py: 1, opacity: 0.7 }}
      >
        {text}
      </Typography>
    </>
  );
};

export default CaptionHeading;
