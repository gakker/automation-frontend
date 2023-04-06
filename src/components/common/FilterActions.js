import React from "react";
import {
  Box,
  FormControl,
  Select,
  OutlinedInput,
  MenuItem,
  Button,
} from "@mui/material";
import SelectMenu from "./SelectMenu";
import { MoreVert } from "@mui/icons-material";
const network = [
  {
    value: "10",
    name: "Ten",
  },
  {
    value: "20",
    name: "Twenty",
  },
  {
    value: "30",
    name: "Thirty",
  },
];
const FilterActions = () => {
  return (
    <>
      <Box
        sx={{
          py: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            mr: { xs: "0", sm: "2" },
            my: 1,
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <SelectMenu
            placeholder="Actions"
            network={network}
            color="var(--main-color)"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            width: { xs: "100%", sm: "auto" },
            "& .width": {
              width: "100%",
            },
          }}
        >
          <Box className="width" sx={{ mr: { xs: "0", sm: 2 }, py: 1 }}>
            <Button
              variant="outlined"
              className="border primary_color width"
              sx={{ padding: "8px 10px" }}
            >
              Columns
            </Button>
          </Box>
          <Box className="width" sx={{ mr: { xs: "0", sm: 2 }, py: 1 }}>
            <Button
              variant="outlined"
              className="border primary_color width"
              sx={{ padding: "8px 10px" }}
            >
              Grouping
            </Button>
          </Box>
          <Box className="width" sx={{ mr: { xs: "0", sm: 2 }, py: 1 }}>
            <Button
              variant="outlined"
              className="border primary_color width"
              sx={{ padding: "8px 10px" }}
            >
              Breakdown
            </Button>
          </Box>
          <Box className="width" sx={{ mr: { xs: "0", sm: 2 }, py: 1 }}>
            <Button
              variant="outlined"
              className="border primary_color width"
              sx={{ padding: "8px 5px" }}
            >
              <MoreVert />
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FilterActions;
