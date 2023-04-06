import React, { useState, useRef, useEffect } from "react";
import DesktopDrawer from "../../components/Layout/Drawer/DesktopDrawer";
import BreadCrums from "../../components/common/BreadCrums";
import { INSTANCE } from "../../config/axiosInstance";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import {
  Box,
  Typography,
  Tab,
  Grid,
  TextField,
  Autocomplete,
  InputBase,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Select,
  MenuItem,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  Tooltip as MuiTooltip,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Phonelink, Add, CalendarToday, MoreVert } from "@mui/icons-material";
import styled from "styled-components";
import AppTable from "../../components/ExistingCreative/Table";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { addDays, format } from "date-fns";
import FilterActions from "../../components/common/FilterActions";
const estudiantes = [
  {
    uid: 1,
    checked: true,
    label: "Student 1",
    creative: "VI-IOS-UGC-Red",
    tag: ["UGC", "CTA 1"],
    impression: "19,29,922",
    spend: "3,859.57",
    cpi: "2.56",
    ctr: "2.39",
  },
  {
    uid: 2,
    checked: false,
    label: "Student 1",
    creative: "VI-IOS-UGC-Red",
    tag: ["UGC", "CTA 1"],
    impression: "19,29,922",
    spend: "3,859.57",
    cpi: "2.56",
    ctr: "2.39",
  },
  {
    uid: 3,
    checked: false,
    label: "Student 1",
    creative: "VI-IOS-UGC-Red",
    tag: ["UGC", "CTA 1"],
    impression: "19,29,922",
    spend: "3,859.57",
    cpi: "2.56",
    ctr: "2.39",
  },
  {
    uid: 4,
    checked: true,
    label: "Student 1",
    creative: "VI-IOS-UGC-Red",
    tag: ["UGC", "CTA 1"],
    impression: "19,29,922",
    spend: "3,859.57",
    cpi: "2.56",
    ctr: "2.39",
  },
];
const ExistingCreatives = () => {
  const [value, setValue] = useState("1");
  const [check, setCheck] = useState(false);
  // const [checked, setChecked] = useState([true, false]);
  const [intermediate, setIntermediate] = useState(false);
  const [data, setData] = useState([
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35, checked: false },
    {
      id: 2,
      lastName: "Lannister",
      firstName: "Cersei",
      age: 42,
      checked: true,
    },
    {
      id: 3,
      lastName: "Lannister",
      firstName: "Jaime",
      age: 45,
      checked: false,
    },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16, checked: false },
    {
      id: 5,
      lastName: "Targaryen",
      firstName: "Daenerys",
      age: null,
      checked: true,
    },
    {
      id: 6,
      lastName: "Melisandre",
      firstName: null,
      age: 150,
      checked: false,
    },
    {
      id: 7,
      lastName: "Clifford",
      firstName: "Ferrara",
      age: 44,
      checked: false,
    },
    {
      id: 8,
      lastName: "Frances",
      firstName: "Rossini",
      age: 36,
      checked: false,
    },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65, checked: false },
  ]);
  var intermediateStatus = (_data) => {
    console.log(_data);
    var status = [];
    for (let i in _data) {
      if (_data[i].checked) {
        status.push(true);
      } else {
        status.push(false);
      }
    }
    console.log(status);
    if (status.every((val) => val === true)) {
      console.log("hahah");
      setIntermediate(false);
    } else if (status.includes(true)) {
      console.log("hahah2");
      setIntermediate(true);
    } else {
      console.log("hahaha3");
      setIntermediate(false);
    }
  };
  const [checkedStudents, setCheckedStudents] = useState([]);
  const handleChange1 = (isChecked) => {
    if (isChecked)
      return setCheckedStudents(
        creativesData?.map((creativeData) => creativeData.id)
      );
    else setCheckedStudents([]);
  };
  const [age, setAge] = React.useState("");
  const refOne = useRef(null);
  const [open, setOpen] = useState(false);
  const [creativesData, setCreativesData] = useState([]);
  const [state, setState] = React.useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  useEffect(() => {
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);
  useEffect(async () => {
    try {
      const response = await INSTANCE.get("/creative");
      setCreativesData(response.data.data);
    } catch (error) {
      alert("Something went wrong while submitting code.Please try later.");
    }
  }, []);
  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <>
      <DesktopDrawer>
        <ExistingCreativesStyled>
          <BreadCrums heading="Creative Center" link="Existing Creative" />

          <Grid container spacing={1} sx={{ py: 3 }}>
            <Grid item xs={12} lg={9}>
              {/* filters menu  */}
              <Grid container spacing={2}>
                <Grid item sm={6} xs={12} lg={3}>
                  {/* filters menu  all apps*/}
                  <Box>
                    <FormControl sx={{ width: "100%" }}>
                      <Select
                        displayEmpty
                        value={age}
                        input={<OutlinedInput />}
                        // className="text "
                        sx={{
                          background: "var(--main-color)",
                          color: "#fff !important",
                          fieldset: {
                            border: "1px solid",
                            borderRadius: "5px",
                            borderColor: "inherit !important",
                          },
                          "& .MuiSelect-select": {
                            padding: "12px  10px",
                            color: "currentColor !important",
                          },
                          svg: {
                            color: "inherit",
                          },
                        }}
                        placeholder="Age"
                        onChange={(e) => setAge(e.target.value)}
                        inputProps={{
                          "aria-label": "Without label",
                          className: "border text ",
                        }}
                        // startAdornment={
                        //   <InputAdornment
                        //   // className={classes.selectAdornment}
                        //   // position="end"
                        //   >
                        //     <Google />
                        //   </InputAdornment>
                        // }

                        // renderValue={age !== "" ? undefined : () => <p>Select </p>}
                      >
                        <MenuItem disabled value="">
                          <p>All Apps</p>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item sm={6} xs={12} lg={3}>
                  {/* filters menu  by icons*/}
                  <Box>
                    <FormControl sx={{ width: "100%" }}>
                      <Select
                        displayEmpty
                        value={age}
                        input={<OutlinedInput />}
                        className="text primary_color"
                        sx={{
                          fieldset: {
                            border: "1px solid",
                            borderRadius: "5px",
                            borderColor: "inherit !important",
                          },
                          "& .MuiSelect-select": {
                            padding: "12px  10px",
                          },
                          svg: {
                            color: "inherit",
                          },
                        }}
                        placeholder="Age"
                        onChange={(e) => setAge(e.target.value)}
                        inputProps={{
                          "aria-label": "Without label",
                          className: "border text ",
                        }}
                      >
                        <MenuItem disabled value="">
                          <p>All Apps</p>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item sm={6} xs={12} lg={3}>
                  {/* filters menu  all platform */}
                  <Box>
                    <FormControl sx={{ width: "100%" }}>
                      <Select
                        displayEmpty
                        value={age}
                        input={<OutlinedInput />}
                        sx={{
                          fieldset: {
                            border: "1px solid",
                            borderRadius: "5px",
                            borderColor: "inherit !important",
                          },
                          "& .MuiSelect-select": {
                            padding: "12px  10px",
                          },
                          svg: {
                            color: "inherit",
                          },
                        }}
                        placeholder="Age"
                        onChange={(e) => setAge(e.target.value)}
                        inputProps={{
                          "aria-label": "Without label",
                          className: "border text ",
                        }}
                        startAdornment={
                          <InputAdornment
                            className="text"
                            // position="end"
                          >
                            <Phonelink />
                          </InputAdornment>
                        }
                        className="text primary_color"
                        // renderValue={age !== "" ? undefined : () => <p>Select </p>}
                      >
                        <MenuItem disabled value="">
                          <p>All Apps</p>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item sm={6} xs={12} lg={3}>
                  <Box>
                    <Button
                      variant="outlined"
                      startIcon={<Add />}
                      className="border primary_color"
                      sx={{
                        padding: "10px",
                        width: { xs: "100%", lg: "auto" },
                      }}
                    >
                      Add filter
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={3}>
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <MuiTooltip title="Apply filter according to date" arrow>
                  <Box
                    onClick={() => setOpen((open) => !open)}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                    className="primary_color date_picker"
                  >
                    <CalendarToday />
                    <Box className="inputBox text">
                      {`${format(
                        state[0].startDate,
                        "MMM, dd yyyy"
                      )} - ${format(state[0].endDate, "MMM, dd yyyy")}`}
                    </Box>
                  </Box>
                </MuiTooltip>

                {open && (
                  <Box
                    ref={refOne}
                    sx={{
                      mt: 1,
                      position: "absolute",
                      right: "5px",
                      top: "3.3rem",
                      zIndex: "999",
                    }}
                  >
                    <DateRange
                      //   onChange={handleSelect}
                      onChange={(item) => setState([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={state}
                      editableDateInputs={false}
                      months={1}
                      direction="horizontal"
                      //   className="primary_color"
                    />
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
          <Box>
            {/* tabs  */}
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 4 }} className="border">
                  <TabList
                    variant="scrollable"
                    allowScrollButtonsMobile
                    scrollButtons
                    onChange={(e, newValue) => setValue(newValue)}
                    aria-label="lab API tabs example"
                    sx={{
                      "&": {
                        overflow: { xs: "hidden", lg: "visible" },
                      },
                      "& .MuiTabScrollButton-root": {
                        display: {
                          xs: "flex !important",
                          lg: "none !important",
                        },
                      },
                      "& .MuiTabs-scroller": {
                        overflow: {
                          xs: "hidden !important",
                          lg: "visible !important",
                        },
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
                    <Tab label="Apps" value="1" className="text" />
                    <Tab label="Campaigns" value="2" className="text" />
                    <Tab label=" Ad sets" value="3" className="text" />
                    <Tab label=" Ads" value="4" className="text" />
                    <Tab label=" Creative" value="5" className="text" />
                    <Tab label=" Keywords" value="6" className="text" />
                  </TabList>
                </Box>
                <FilterActions />
                <TabPanel value="1" sx={{ p: 0 }}>
                  <TableContainer className="primary_color">
                    <Table
                      sx={{
                        minWidth: 650,
                        "& th": {
                          whiteSpace: "nowrap",
                        },
                      }}
                      // tableLayout: "fixed"
                      aria-label="simple table"
                    >
                      <TableHead>
                        <TableRow sx={{ background: "var(--main-color)" }}>
                          {/* sx={{ width: "10%" }} */}
                          {/* <TableCell>
                            <Checkbox
                              checked={
                                checkedStudents.length === creativesData.length
                              }
                              indeterminate={
                                checkedStudents.length !== creativesData.length &&
                                checkedStudents.length > 0
                              }
                              onChange={(event) =>
                                handleChange1(event.target.checked)
                              }
                              sx={{
                                color: "#fff",
                                "&.Mui-checked , &.MuiCheckbox-indeterminate": {
                                  color: "#fff",
                                },
                              }}
                            />
                          </TableCell> */}
                          {/* <TableCell sx={{ color: "#fff" }}>Image</TableCell> */}
                          <TableCell align="center" sx={{ color: "#fff" }}>
                            Creative
                          </TableCell>
                          <TableCell align="center" sx={{ color: "#fff" }}>
                            Action
                          </TableCell>
                          <TableCell align="center" sx={{ color: "#fff" }}>
                            Platform
                          </TableCell>
                          <TableCell align="center" sx={{ color: "#fff" }}>
                            Status
                          </TableCell>
                          {/* <TableCell align="center" sx={{ color: "#fff" }}>
                            Channel
                          </TableCell> */}
                          {/* <TableCell align="center" sx={{ color: "#fff" }}>
                            Tags
                          </TableCell> */}
                          {/* <TableCell align="center" sx={{ color: "#fff" }}>
                            Channel
                          </TableCell> */}
                          {/* <TableCell align="center" sx={{ color: "#fff" }}>
                            Tags
                          </TableCell> */}
                          <TableCell align="center" sx={{ color: "#fff" }}>
                            <Box>Children</Box>
                            <Box sx={{ fontWeight: "400", fontSize: "13px" }}>
                              Oriented
                            </Box>
                          </TableCell>
                          <TableCell align="center" sx={{ color: "#fff" }}>
                            <Box>Creative</Box>
                            <Box sx={{ fontWeight: "400", fontSize: "13px" }}>
                              Visibility
                            </Box>
                          </TableCell>
                          <TableCell align="center" sx={{ color: "#fff" }}>
                            <Box>Creative</Box>
                            <Box sx={{ fontWeight: "400", fontSize: "13px" }}>
                              Ratio
                            </Box>
                          </TableCell>
                          <TableCell align="center" sx={{ color: "#fff" }}>
                            <Box>Creative</Box>
                            <Box sx={{ fontWeight: "400", fontSize: "13px" }}>
                              Type
                            </Box>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {creativesData?.map((item, index) => (
                          <>
                            <AppTable
                              item={item}
                              index={index}
                              intermediateStatus={intermediateStatus}
                              setData={setData}
                              checkedStudents={checkedStudents}
                              setCheckedStudents={setCheckedStudents}
                            />
                          </>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Box></Box>
                </TabPanel>
                <TabPanel value="2"></TabPanel>
                <TabPanel value="3"></TabPanel>
                <TabPanel value="4"></TabPanel>
                <TabPanel value="5"></TabPanel>
                <TabPanel value="6"></TabPanel>
              </TabContext>
            </Box>
          </Box>
        </ExistingCreativesStyled>
      </DesktopDrawer>
    </>
  );
};

export default ExistingCreatives;

const ExistingCreativesStyled = styled.section`
  .table_img {
    width: 65px;
    height: 65px;
    border-radius: 10px;
    object-fit: cover;
  }
  .date_picker {
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 2px 3px #686868;
    svg {
      max-width: 20px;
      margin-right: 10px;
    }
  }

  .inputBox {
    outline: none;
    border: none;
    background: transparent;
    font-weight: bold;
    font-size: 14px;
  }
`;
