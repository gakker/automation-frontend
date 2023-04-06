import React, { useState, useEffect } from "react";
import DesktopDrawer from "../../components/Layout/Drawer/DesktopDrawer";
import styled from "styled-components";
import {
  Typography,
  Box,
  Tabs,
  Tab,
  Grid,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Link,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { addDays, format } from "date-fns";

import {
  RemoveRedEye,
  SportsEsports,
  Facebook,
  Google,
} from "@mui/icons-material";
import BreadCrums from "../../components/common/BreadCrums";
import TableImg from "../../assets/images/pngs/1.png";
import SearchBar from "../../components/common/SearchBar";
import TiktokIcon from "../../components/common/TiktokIcon";
import SelectMenu from "../../components/common/SelectMenu";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/common/Loader";
import { nanoid } from "@reduxjs/toolkit";
import {
  viewProduct,
  reset,
} from "../../feature/Control Center/existingProductSlice";
const row = [
  {
    img: TableImg,
    heading: "Subway Sufer",
    platform: "Android",
    status: "Pending",
  },
];
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



const rows = [
  {
    date: "08/06/2022",
    status: "pending",
    campaign: "N/A",
  },
];

const ExistingProduct = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, isSuccess, message, products } = useSelector(
    (state) => state.existingProduct
  );
  const [value, setValue] = useState(0);
  const [age, setAge] = useState("");
  const handleChangeTwo = (event) => {
    setAge(event.target.value);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    dispatch(viewProduct());
  }, []);
  return (
    <>
      <DesktopDrawer>
        <ExistingProductStyled>
          <BreadCrums heading="Control Center" link="Existing Product" />
          <Box sx={{ py: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={6} order={{ xs: 3, md: 1 }}>
                <Box>
                  <Box sx={{ borderBottom: 4 }} className="border">
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example"
                      sx={{
                        "&": {
                          overflow: "visible",
                        },
                        "& .MuiTabs-scroller": {
                          overflow: "visible !important",
                        },
                        "&	.MuiTabs-indicator": {
                          background: "var(--main-color)",
                          height: "5px",
                          bottom: "-4.5px",
                        },
                        "&	.Mui-selected": {
                          color: "var(--main-color) !important",
                        },
                      }}
                    >
                      <Tab label="App" className="text" />
                      <Tab label="Game" className="text" />
                      <Tab label="Website" className="text" />
                    </Tabs>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                lg={3}
                sx={{ display: "flex", alignItems: "end" }}
                order={{ xs: 2, md: 2 }}
              >
                <SearchBar />
              </Grid>
              <Grid
                sx={{ display: "flex", alignItems: "end" }}
                item
                xs={12}
                sm={6}
                lg={3}
                order={{ xs: 1, md: 3 }}
              >
                <SelectMenu placeholder="Select Status" />
              </Grid>
            </Grid>
            <TabPanel value={value} index={0}>
              {isLoading ? (
                <Loader />
              ) : (
                <TableContainer className="primary_color">
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow sx={{ background: "var(--main-color)" }}>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center" sx={{ color: "#fff" }}>
                          Date
                        </TableCell>
                        {/* <TableCell align="center" sx={{ color: "#fff" }}>
                      Status
                    </TableCell> */}
                        {/* <TableCell align="center" sx={{ color: "#fff" }}>
                      Campaigns
                    </TableCell> */}
                        {/* <TableCell align="center" sx={{ color: "#fff" }}>
                      Connections
                    </TableCell> */}
                        <TableCell align="center" sx={{ color: "#fff" }}>
                          Platform
                        </TableCell>
                        <TableCell align="right" sx={{ color: "#fff" }}>
                          Actions
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {products.map((row, index) => (
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                          key={nanoid()}
                        >
                          <TableCell
                          // align="center"
                          // component="th"
                          // scope="row"
                          >
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <Box>
                                <img
                                  // src={TableImg}
                                  src={row?.product_url}
                                  alt=""
                                  className="table_img"
                                />
                              </Box>
                              <Box sx={{ pl: 2 }}>
                                <Typography
                                  variant="body"
                                  component="div"
                                  className="text"
                                >
                                  {row?.product_name}
                                </Typography>
                                <Typography
                                  variant="body"
                                  component="div"
                                  className="text"
                                >
                                  Android
                                </Typography>
                              </Box>
                            </Box>
                          </TableCell>
                          <TableCell align="center" className="text">
                            {`${format(
                              new Date(row?.platform?.createdAt),
                              "MMM, dd yyyy"
                            )}`}
                            {/* {row?.platform?.createdAt} */}
                          </TableCell>
                          {/* <TableCell align="center" className="text">
                            Pending
                          </TableCell> */}
                          {/* <TableCell align="center" className="text">
                            N/A
                          </TableCell> */}
                          {/* <TableCell align="center" className="text">
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                "& svg": {
                                  margin: "0px 5px",
                                },
                              }}
                            >
                              <Tooltip arrow title="Facebook">
                                <Facebook
                                  className="text "
                                  sx={{
                                    "&:hover": {
                                      opacity: "0.5",
                                      cursor: "pointer",
                                    },
                                  }}
                                />
                              </Tooltip>
                              <Tooltip arrow title="Google">
                                <Google
                                  className="text "
                                  sx={{
                                    "&:hover": {
                                      opacity: "0.5",
                                      cursor: "pointer",
                                    },
                                  }}
                                />
                              </Tooltip>
                              <Tooltip arrow title="Platform">
                                <Box
                                  className="text "
                                  sx={{
                                    "&:hover": {
                                      opacity: "0.5",
                                      cursor: "pointer",
                                    },
                                  }}
                                >
                                  <TiktokIcon />
                                </Box>
                              </Tooltip>
                            </Box>
                          </TableCell> */}
                          <TableCell align="center" className="text">
                            {row?.platform?.platform_name}
                            {/* <Tooltip arrow title="Platform">
                              <SportsEsports
                                className="text "
                                sx={{
                                  "&:hover": {
                                    opacity: "0.5",
                                    cursor: "pointer",
                                  },
                                }}
                              />
                            </Tooltip> */}
                          </TableCell>
                          <TableCell align="right" className="text">
                            <Link href="/existing-product/product-detail">
                              <Tooltip arrow title="Detail">
                                <RemoveRedEye
                                  className="text "
                                  sx={{
                                    "&:hover": {
                                      opacity: "0.5",
                                      cursor: "pointer",
                                    },
                                  }}
                                />
                              </Tooltip>
                            </Link>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          </Box>
        </ExistingProductStyled>
      </DesktopDrawer>
    </>
  );
};

export default ExistingProduct;

const ExistingProductStyled = styled.section`
  .table_search {
    width: 100%;
    /* height: 50px; */
    padding: 0.8rem 1.5rem;
    font-size: 0.875rem;
    background: inherit;
    border: 2px solid #707787;
    color: #4d5875;
    border-radius: 5px;
    outline: none;
  }
  .opacity_0 {
    opacity: 0;
  }

  .table_img {
    width: 65px;
    height: 65px;
    border-radius: 10px;
    object-fit: cover;
  }
  /* mui select edit  */
  /* label.Mui-focused {
    color: green !important;
  }
  .MuiInput-underline:after {
    border-bottom-color: yellow;
  }
  .MuiOutlinedInput-root {
    & fieldset {
      border-color: white !important;
    }
    &:hover fieldset {
      border-color: white !important;
    }
    &.Mui-focused fieldset {
      border-color: yellow !important;
    }
  } */
`;
