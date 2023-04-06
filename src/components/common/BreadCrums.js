import React from "react";
import { Typography, Breadcrumbs, Link } from "@mui/material";
import { useLocation } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
function toTitleCase(str) {
  const value = str.split("-");
  return value.map((a) => a.charAt(0).toUpperCase() + a.substr(1));
}
const BreadCrums = ({ heading }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <>
      <Typography variant="h4" className="text fw_bold">
         {heading}
      </Typography>
      <Breadcrumbs
        aria-label="Breadcrumb"
        className="text"
        sx={{
          "& .MuiBreadcrumbs-separator": {
            color: "inherit",
          },
        }}
      >
        <Typography className="text" sx={{ opacity: "0.7" }}>
           {heading}
        </Typography>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          {
            return last ? (
              <Typography sx={{ color: "var(--main-color)" }} key={nanoid()}>
                {toTitleCase(value).map((item, index) => `${item} `)}
              </Typography>
            ) : (
              <Typography className="text" key={nanoid()}>
                {toTitleCase(value).map((item, index) => `${item} `)}
              </Typography>
            );
          }
        })}
      </Breadcrumbs>
    </>
  );
};

export default BreadCrums;

{
  /* <Link
sx={{ color: "#6e66ce" }}
href={location.pathname}
underline="hover"
>
{toTitleCase(value).map((item, index) => `${item} `)}
</Link> */
}
