import React, { useState, useEffect, useRef } from "react";

import BreadCrums from "../../components/common/BreadCrums";
import DesktopDrawer from "../../components/Layout/Drawer/DesktopDrawer";
import styled from "styled-components";
import { INSTANCE } from "../../config/axiosInstance";
import CampaignsTab from "../../components/campaign center/Existing Campaign/CampaignsTab";
import AdSetsTab from "../../components/campaign center/Existing Campaign/AdSetsTab";
import AdsTab from "../../components/campaign center/Existing Campaign/AdsTab";
import SelectMenu from "../../components/common/SelectMenu";
import ConnectAccount from "../../components/ConnectAccount/ConnectAccount";
import SearchBar from "../../components/common/SearchBar";

import {
  Box,
  Grid,
  Card,
  CardActions,
  CardContent,
  Typography,
  Divider,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  TableBody,
  Button,
} from "@mui/material";

import TabsButton from "../../components/common/TabsButton";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { FilterAlt, Add, Phonelink } from "@mui/icons-material";
import CampaignTable from "../../components/campaign center/Existing Campaign/CampaignTable";
import FilterButton from "../../components/common/FilterButton";
import DateHandler from "../../components/common/DateHandler";
import FilterActions from "../../components/common/FilterActions";
import TabsButtonTwo from "../../components/common/TabsButtonTwo";

const cards = [
  {
    color: "#DE7272",
  },
  {
    color: "#31C7D8",
  },
  {
    color: "#FF9100",
  },
  {
    color: "var(--main-color)",
  },
];
const product = [
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
const account = [
  {
    value: "10",
    name: "FOr",
  },
  {
    value: "20",
    name: "five",
  },
  {
    value: "30",
    name: "sx",
  },
];
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
const estudiantes = [
  {
    uid: 1,
    campId: "604910",
    name: "TF_US_Desktop",
    checked: true,
    budget: "100",
    cost: "0",
    creative: "VI-IOS-UGC-Red",
    tag: ["UGC", "CTA 1"],
    impression: "19,29,922",
    spend: "3,859.57",
    cpc: "2.56",
    payout: "0",
    avg_cpc: "0",
  },
  {
    uid: 1,
    campId: "604910",
    name: "TF_US_Desktop",
    checked: true,
    budget: "100",
    cost: "0",
    creative: "VI-IOS-UGC-Red",
    tag: ["UGC", "CTA 1"],
    impression: "19,29,922",
    spend: "3,859.57",
    cpc: "2.56",
    payout: "0",
    avg_cpc: "0",
  },
  {
    uid: 1,
    campId: "604910",
    name: "TF_US_Desktop",
    checked: true,
    budget: "100",
    cost: "0",
    creative: "VI-IOS-UGC-Red",
    tag: ["UGC", "CTA 1"],
    impression: "19,29,922",
    spend: "3,859.57",
    cpc: "2.56",
    payout: "0",
    avg_cpc: "0",
  },
];

const tabData = [
  {
    label: "App",
    value: "app",
  },
  {
    label: "Campaigns",
    value: "campaigns",
  },
  {
    label: "Ad Sets",
    value: "adsets",
  },
  {
    label: "ads",
    value: "ads",
  },
  {
    label: "creative",
    value: "creative",
  },
  {
    label: "keywords",
    value: "keywords",
  },
];
const adAccountTabs = [
  {
    heading: "Campaigns",
    position: "start",
    state: "campaign",
  },
  {
    heading: "Ad Sets",
    position: "start",
    state: "adsets",
  },
  {
    heading: "Ads",
    position: "start",
    state: "ads",
  },
];
const ExistingCampaign = () => {

  const [isConnected, setIsConnected] = useState(
    JSON.parse(localStorage.getItem("connectedAccounts"))?.connected_accounts
      ?.ad_account_connected
  );
  const refOne = useRef(null);
  const [tableType, setTableType] = useState("campaign");  
  const [age, setAge] = useState("");
  const [selectedAccount, setSelectedAccount] = useState("");
  const [adSetsData, setAdSetsData] = useState([]);
  const [adsData, setAdsData] = useState([]);
  const [existingCampaigns, setExistingCampaigns] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [accounts, setAccounts] = useState([]);
  const [show, setShow] = useState("");
  const [tabValue, setTabValue] = useState("app");
  const table_th = (value) => {
    setShow(value);
  };
  const [checkedStudents, setCheckedStudents] = useState([]);
  const handleChange1 = (isChecked) => {
    if (isChecked)
      return setCheckedStudents(
        estudiantes.map((estudiante) => estudiante.uid)
      );
    else setCheckedStudents([]);
  };
  const handleChange2 = (isChecked, uid) => {
    const index = checkedStudents.indexOf(uid);

    // The checked value is altered before the state changes for some reason is not a trully controlled component
    // So the next conditions are INVERTED.

    if (isChecked) return setCheckedStudents((state) => [...state, uid]);

    if (!isChecked && index > -1)
      return setCheckedStudents((state) => {
        state.splice(index, 1);
        return JSON.parse(JSON.stringify(state)); // Here's the trick => React does not update the f* state array changes even with the spread operator, the reference is still the same.
      });
  };
  useEffect(async () => {
    try {
      const response = await INSTANCE.get("/campaign/tiktok/ad-accounts-local");
      setAccounts(
        response.data.data.accounts.map((account) => {
          return {
            value: account.ad_account_id,
            name: account.ad_account_name,
          };
        })
      );
    } catch (error) {
      alert("Something went wrong while submitting code.Please try later.");
    }
  }, []);
  const getAdsData = async () => {
    try {
      const response = await INSTANCE.get("/campaign/tiktok/ads/" + selectedAccount + `/0/0/0`);
      setAdsData(response.data.data.ads);
    } catch (error) {
      alert("Something went wrong while submitting code.Please try later.");
    }
  };
  const getAdSetsData = async () => {
    try {
      const response = await INSTANCE.get(
        "/campaign/tiktok/adgroups/" + selectedAccount + `/0/0/0`
      );
      setAdSetsData(response.data.data.campaigns);
    } catch (error) {
      alert("Something went wrong while submitting code.Please try later.");
    }
  };
  const getCampaingData = async () => {
    try {
      const response = await INSTANCE.get(
        "/campaign/tiktok/" + selectedAccount
      );
      setExistingCampaigns(response.data.data.campaigns);
    } catch (error) {
      alert("Something went wrong while submitting code.Please try later.");
    }
  };
  useEffect(async () => {
    if (selectedAccount !== "") {
      getCampaingData();
      getAdSetsData();
      getAdsData();
    }
  }, [selectedAccount]);
  return (
    <>
      <DesktopDrawer>
        <BreadCrums heading="Campaign Center" link="Existing Campaign" />
        {isConnected !== 0 ? (
          <ExistingCampaignStyled>
            <Box sx={{ pb: 2, pt: 4 }}>
              <Grid container spacing={2}>
                <Grid item lg={3} xs={12} sm={6}>
                  <SelectMenu
                    placeholder="Select Product"
                    data={product}
                    table_th={(age) => {
                      setAge();
                    }}
                  />
                </Grid>
                <Grid item lg={3} xs={12} sm={6}>
                  <SelectMenu
                    placeholder="Select Ad Network"
                    data={network}
                    table_th={table_th}
                  />
                </Grid>
                <Grid item lg={3} xs={12} sm={6}>
                  <SelectMenu
                    placeholder="Select Ad Account"
                    data={account}
                    table_th={table_th}
                  />
                </Grid>
                <Grid item lg={3} xs={12} sm={6}>
                  <DateHandler />
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Grid container spacing={2}>
                {cards.map((item, index) => (
                  <>
                    <Grid item lg={3} xs={12} sm={6}>
                      <Card
                        sx={{ width: "100%", borderRadius: "10px" }}
                        className="primary_color box_shadow"
                      >
                        <CardContent>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              py: 1,
                            }}
                          >
                            <Typography
                              sx={{ color: `${item.color}` }}
                              className="fw_bold"
                            >
                              Total Cost
                            </Typography>
                            <Typography
                              component="div"
                              className="text fw_bold"
                            >
                              $0.000
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <Typography>Est Cost</Typography>
                            <Typography
                              component="div"
                              className="text "
                              sx={{ fontSize: 14 }}
                            >
                              $0.000
                            </Typography>
                          </Box>
                        </CardContent>
                        <CardActions sx={{ flexDirection: "column" }}>
                          <Box sx={{ width: "100%" }}>
                            <Divider
                              sx={{
                                width: "100%",
                                padding: "0.3px",
                                margin: "10px 0",
                                background: `${item.color}`,
                              }}
                            />
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              width: "100%",
                            }}
                          >
                            <Typography component="div">Avg CPC</Typography>
                            <Typography
                              component="div"
                              className="text "
                              sx={{ fontSize: 14 }}
                            >
                              $0.000
                            </Typography>
                          </Box>
                        </CardActions>
                      </Card>
                    </Grid>
                  </>
                ))}
              </Grid>
              <Grid
                container
                spacing={2}
                sx={{ pb: 0 , pt: 4, alignItems: "center" }}
              >
                <Grid item xs={12} sm={8}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      "& .max_width": {
                        maxWidth: "170px",
                        width: "100%",
                        margin: "10px",
                        marginLeft: "0px",
                      },
                    }}
                  >
                    <Box className="max_width">
                      <SelectMenu placeholder="Actions" data={product} />
                    </Box>
                    <Box className="max_width">
                      <SelectMenu placeholder="Filters" data={product} />
                    </Box>
                    <Box className="max_width">
                      <SelectMenu
                        placeholder="Account"
                        data={accounts}
                        setChanged={setSelectedAccount}
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <SearchBar setValue={setSearchValue} />
                </Grid>
              </Grid>
            </Box>

            {/* Tabs for ads */}
            <Box>
            <Grid
                container
                spacing={2}
                sx={{ pb: 2, pt: 0  , alignItems: "center" }}
              >
                <Grid item xs={12}>
                  {/* <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      "& .max_width": {
                        maxWidth: "170px",
                        width: "100%",
                        margin: "10px",
                        marginLeft: "0px",
                      },
                    }}
                  >
                    <Box className="max_width">
                      <SelectMenu placeholder="Actions" data={product} />
                    </Box>
                    <Box className="max_width">
                      <SelectMenu placeholder="Filters" data={product} />
                    </Box>
                    <Box className="max_width">
                      <SelectMenu
                        placeholder="Account"
                        data={accounts}
                        setChanged={setSelectedAccount}
                      />
                    </Box>
                  </Box> */}
                  <TabContext value={tableType}>
                  <TabsButton
                    value={tableType}
                    setValue={setTableType}
                    data={adAccountTabs}
                  />
                  <TabPanel value="campaign" sx={{ p: 0, py: 1 }}>
                    <CampaignsTab existingCampaigns={existingCampaigns}/>
                  </TabPanel>
                  <TabPanel value="adsets" sx={{ p: 0, py: 1 }}>
                    <AdSetsTab adSetsData={adSetsData}/>
                  </TabPanel>
                  <TabPanel value="ads" sx={{ p: 0, py: 1 }}>
                    <AdsTab adsData={adsData}/>
                  </TabPanel>
                  </TabContext>
                </Grid>
              </Grid>
            </Box>
            

            {/* Data Grid Table One  */}

            <Box>
              {/* <TableContainer className="primary_color">
                <Table
                  sx={{
                    minWidth: 650,
                    "& th": {
                      whiteSpace: "nowrap",
                    },
                    "& .table_th": {
                      // border: "1px solid #fff",
                      padding: "6px 15px",
                    },
                  }}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow sx={{ background: "var(--main-color)" }}>
                      <TableCell className="table_th">
                        <Checkbox
                          checked={
                            checkedStudents.length === estudiantes.length
                          }
                          indeterminate={
                            checkedStudents.length !== estudiantes.length &&
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
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#fff" }}
                        className="table_th"
                      >
                        Actions
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#fff" }}
                        className="table_th"
                      >
                        Campaign.ID
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#fff" }}
                        className="table_th"
                      >
                        Name
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#fff" }}
                        className="table_th"
                      >
                        Status
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#fff" }}
                        className="table_th"
                      >
                        Budget
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#fff" }}
                        className="table_th"
                      >
                        Payout
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#fff" }}
                        className="table_th"
                      >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          Avg.CPC{" "}
                          <FilterAlt sx={{ ml: 1, cursor: "pointer" }} />
                        </Box>
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#fff" }}
                        className="table_th"
                      >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          Cost <FilterAlt sx={{ ml: 1, cursor: "pointer" }} />
                        </Box>
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#fff" }}
                        className="table_th"
                      >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          TR Conv.{" "}
                          <FilterAlt sx={{ ml: 1, cursor: "pointer" }} />
                        </Box>
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#fff" }}
                        className="table_th"
                      >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          EPC <FilterAlt sx={{ ml: 1, cursor: "pointer" }} />
                        </Box>
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#fff" }}
                        className="table_th"
                      >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          TS Clicks{" "}
                          <FilterAlt sx={{ ml: 1, cursor: "pointer" }} />
                        </Box>
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#fff" }}
                        className="table_th"
                      >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          TRK Clicks{" "}
                          <FilterAlt sx={{ ml: 1, cursor: "pointer" }} />
                        </Box>
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#fff" }}
                        className="table_th"
                      >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          LP Clicks{" "}
                          <FilterAlt sx={{ ml: 1, cursor: "pointer" }} />
                        </Box>
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#fff" }}
                        className="table_th"
                      >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          TSN Clicks
                          <FilterAlt sx={{ ml: 1, cursor: "pointer" }} />
                        </Box>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {estudiantes.map((item, index) => (
                      <>
                        <CampaignTable
                          item={item}
                          index={index}
                          // intermediateStatus={intermediateStatus}
                          // setData={setData}
                          checkedStudents={checkedStudents}
                          setCheckedStudents={setCheckedStudents}
                        />
                      </>
                    ))}
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": {
                          // borderBottom: 0,
                          border: 0,
                        },
                        td: {
                          whiteSpace: "nowrap",
                        },
                        //   td: {
                        //     borderRight: "1px solid rgba(224, 224, 224, 1)",
                        //   },
                      }}
                    >
                      <TableCell component="th" scope="row"></TableCell>
                      <TableCell align="center" className="text"></TableCell>
                      <TableCell align="center" className="text"></TableCell>
                      <TableCell align="center" className="text">
                        Total : 3
                      </TableCell>
                      <TableCell align="center" className="text"></TableCell>
                      <TableCell align="center" className="text">
                        -
                      </TableCell>
                      <TableCell align="center" className="text">
                        -
                      </TableCell>
                      <TableCell align="center" className="text">
                        $0
                      </TableCell>
                      <TableCell align="center" className="text">
                        $0
                      </TableCell>
                      <TableCell align="right" className="text">
                        $0
                      </TableCell>
                      <TableCell align="right" className="text">
                        $0
                      </TableCell>
                      <TableCell align="right" className="text">
                        $0
                      </TableCell>
                      <TableCell align="right" className="text">
                        $0
                      </TableCell>
                      <TableCell align="right" className="text">
                        $0
                      </TableCell>
                      <TableCell align="right" className="text">
                        $0
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer> */}
              
            </Box>
            {/* Downloaded button  */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                flexDirection: { xs: "column", sm: "row" },
                py: 2,
                "& .menu_parent": {
                  margin: "10px",
                  marginLeft: "0",
                },
              }}
            >
              <Box
                sx={{ width: { xs: "100%", sm: "300px" } }}
                className="menu_parent"
              >
                <SelectMenu placeholder="100 Rows" data={product} />
              </Box>
              <Box
                className="menu_parent"
                sx={{ width: { xs: "100%", sm: "auto" } }}
              >
                <FilterButton value="Download CSV" />
              </Box>
              <Box
                className="menu_parent"
                sx={{ width: { xs: "100%", sm: "auto" } }}
              >
                <FilterButton value="Download Excel" />
              </Box>
            </Box>
            {/* Campaign management start  */}
            <Box sx={{ py: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  className="text fw_bold"
                  variant="h5"
                  sx={{ mr: 2, mb: 1 }}
                >
                  Campaign Management
                </Typography>
                <Box
                  sx={{
                    "& .date_range": {
                      left: "0 !important",
                      background: "green",
                    },
                  }}
                >
                  <DateHandler styleClass="date_range_dashbaord" />
                </Box>
              </Box>
            </Box>
            {/* Menu  */}
            <Box>
              <Grid container spacing={1} sx={{ py: 3 }}>
                <Grid item xs={12} lg={9}>
                  {/* filters menu  */}
                  <Grid container spacing={2}>
                    <Grid item sm={6} xs={12} lg={3}>
                      {/* filters menu  all apps*/}
                      <Box>
                        <SelectMenu
                          placeholder="All Apps"
                          color="var(--main-color)"
                        />
                      </Box>
                    </Grid>
                    <Grid item sm={6} xs={12} lg={3}>
                      {/* filters menu  by icons*/}
                      <Box>
                        <SelectMenu placeholder="All Apps" />
                      </Box>
                    </Grid>
                    <Grid item sm={6} xs={12} lg={3}>
                      {/* filters menu  all platform */}
                      <Box>
                        <SelectMenu
                          placeholder="All Apps"
                          start={<Phonelink />}
                        />
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
              </Grid>
            </Box>
            <Box>
              <TabContext value={tabValue}>
                <Box sx={{ borderBottom: 4 }} className="border">
                  <TabsButtonTwo setValue={setTabValue} data={tabData} />
                </Box>
                <FilterActions />
                <TabPanel value="app" sx={{ p: 0 }}>
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
                          <TableCell>
                            <Checkbox
                              checked={
                                checkedStudents.length === estudiantes.length
                              }
                              indeterminate={
                                checkedStudents.length !== estudiantes.length &&
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
                          </TableCell>
                          <TableCell align="center" sx={{ color: "#fff" }}>
                            App Name
                          </TableCell>
                          <TableCell align="center" sx={{ color: "#fff" }}>
                            Channel
                          </TableCell>
                          <TableCell align="center" sx={{ color: "#fff" }}>
                            <Box>Impressions</Box>
                            <Box sx={{ fontWeight: "400", fontSize: "13px" }}>
                              Channels
                            </Box>
                          </TableCell>
                          <TableCell align="center" sx={{ color: "#fff" }}>
                            <Box>Media Spend</Box>
                            <Box sx={{ fontWeight: "400", fontSize: "13px" }}>
                              Channels
                            </Box>
                          </TableCell>
                          <TableCell align="center" sx={{ color: "#fff" }}>
                            <Box>CPI</Box>
                            <Box sx={{ fontWeight: "400", fontSize: "13px" }}>
                              MMP
                            </Box>
                          </TableCell>
                          <TableCell align="center" sx={{ color: "#fff" }}>
                            <Box>CTR</Box>
                            <Box sx={{ fontWeight: "400", fontSize: "13px" }}>
                              Mixed
                            </Box>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {estudiantes.map((item, index) => (
                          <>
                            <TableRow
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  // borderBottom: 0,
                                  border: 0,
                                },
                                td: {
                                  whiteSpace: "nowrap",
                                },
                                //   td: {
                                //     borderRight: "1px solid rgba(224, 224, 224, 1)",
                                //   },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                <Checkbox
                                  className="text"
                                  sx={{
                                    "&.Mui-checked": {
                                      color: "var(--main-color) !important",
                                    },
                                  }}
                                  key={item.uid}
                                  checked={checkedStudents.includes(item.uid)}
                                  onChange={(event) =>
                                    handleChange2(
                                      event.target.checked,
                                      item.uid
                                    )
                                  }
                                  inputProps={{ "aria-label": "controlled" }}
                                />
                              </TableCell>
                              <TableCell align="center" className="text">
                                {item?.creative}
                              </TableCell>

                              <TableCell align="center" className="text">
                                {item?.spend}
                              </TableCell>
                              <TableCell align="center" className="text">
                                {item?.spend}
                              </TableCell>
                              <TableCell align="center" className="text">
                                {item?.spend}
                              </TableCell>
                              <TableCell align="center" className="text">
                                {item?.spend}
                              </TableCell>
                              <TableCell align="center" className="text">
                                {item?.spend}
                              </TableCell>
                            </TableRow>
                          </>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </TabPanel>
              </TabContext>
            </Box>
          </ExistingCampaignStyled>
        ) : (
          <ConnectAccount />
        )}
      </DesktopDrawer>
    </>
  );
};

export default ExistingCampaign;

const ExistingCampaignStyled = styled.section`

  .date_picker {
    padding: 10px;
    border-radius: 5px;
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
