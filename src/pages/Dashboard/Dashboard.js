import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Grid,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { INSTANCE } from "../../config/axiosInstance";
import DesktopDrawer from "../../components/Layout/Drawer/DesktopDrawer";
import BreadCrums from "../../components/common/BreadCrums";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import styled from "styled-components";
import ReactApexChart from "react-apexcharts";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import DateHandler from "../../components/common/DateHandler";
import { AdjustOutlined } from "@mui/icons-material";
import SelectMenu from "../../components/common/SelectMenu";
import Heading from "../../components/common/Heading";
import Chart from "react-apexcharts";
import ConnectAccount from "../../components/ConnectAccount/ConnectAccount";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const revenue = [
  {
    heading: "cost",
    cost: "40",
    color: "var(--main-color)",
  },
  {
    heading: "revenue",
    cost: "50",
    color: "#68d831",
  },
  {
    heading: "net",
    cost: "45",
    color: "var(--main-color)",
  },
  {
    heading: "roi",
    cost: "30",
    color: "#d89430",
  },
  {
    heading: "clicks",
    cost: "0",
    color: "var(--main-color)",
  },
  {
    heading: "conversions",
    cost: "5",
    color: "#68d831",
  },
  {
    heading: "EPC",
    cost: "15",
    color: "var(--main-color)",
  },
  {
    heading: "CPA",
    cost: "10",
    color: "#d89430",
  },
];

const row = [
  {
    name: "Facebook Ads	",
    imp: "4",
    clicks: "5",
    cost: "3",
    rev: "56",
    net: "4",
    roi: "34",
  },
  {
    name: "Google Ads	",
    imp: "4.5",
    clicks: "8",
    cost: "14",
    rev: "56",
    net: "2",
    roi: "23",
  },
  {
    name: "Tiktok Ads	",
    imp: "2",
    clicks: "50",
    cost: "38",
    rev: "50",
    net: "9",
    roi: "49",
  },
];

const abc = {};

const Dashboard = () => {
  
  const [isConnected, setIsConnected] = useState();

    const [state, setstate] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
      colors: ["var(--main-color)"],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.9,
          gradientToColors: ["#fff", "#6259ca"],
          opacityTo: 1,
          stops: [0, 90, 100],
        },
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });
  
  useEffect(async () => {
    try {
      const response = await INSTANCE.get("/user/connected-accounts");
      localStorage.setItem("connectedAccounts",JSON.stringify(response.data.data)) ;
      setIsConnected(response.data.data?.connected_accounts?.ad_account_connected)
    } catch (error) {
      alert("Something went wrong while getting connected accounts.Please try later.");
    }
  }, []);

  return (
    <>
      <DesktopDrawer>
        <DashboardStyled>
          <BreadCrums heading="Dashboard" />
          {isConnected !== 0 ?<>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              flexWrap: "wrap",
              py: 2,
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  pr: 2,
                  py: 1,
                  color: "var(--main-color)",
                }}
              >
                Welcome, Wali Ahmad!
              </Typography>
            </Box>
            <DateHandler styleClass="date_range_dashbaord" />
          </Box>
          <Box sx={{ py: 1 }}>
            <Grid container spacing={2}>
              {revenue.map((item, index) => (
                <>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box
                      className="primary_color box_shadow "
                      sx={{
                        minHeight: "120px",
                        borderRadius: "10px",
                        padding: "12px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          flexWrap: "wrap",
                          "& svg": {
                            maxWidth: "19px",
                            marginRight: "8px",
                            color: item.color,
                          },
                        }}
                      >
                        <AdjustOutlined />
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: "bold",
                            color: item.color,
                            textTransform: "capitalize",
                          }}
                        >
                          {item.heading}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body"
                        className="h4"
                        component="div"
                        sx={{
                          fontWeight: "bold",
                          marginLeft: "28px",
                          paddingTop: "11px",
                        }}
                      >
                        $ {item.cost}
                      </Typography>
                    </Box>
                  </Grid>
                </>
              ))}
            </Grid>
          </Box>
          <Box sx={{ py: 3 }}>
            <Box sx={{ mr: 2 }}>
              <Heading
                heading={`Today ( ${format(new Date(), "MMM, dd yyyy")} )`}
              />
            </Box>
            <Box
              sx={{ borderRadius: "10px", p: { xs: 1, md: 2 } }}
              className="primary_color"
            >
              <Chart
                options={state.options}
                series={state.series}
                type="area"
                height={350}
                // width="500"
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", py: 2, flexWrap: "wrap" }}>
            <Box sx={{ mr: 2 }}>
              <Heading heading="Performance by" />
            </Box>
            <Box sx={{ width: "100%", maxWidth: "300px" }}>
              <SelectMenu placeholder="Ad Network" />
            </Box>
          </Box>
          <Box>
            <TableContainer className="primary_color">
              <Table
                sx={{
                  minWidth: 650,
                }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow sx={{ background: "var(--main-color)" }}>
                    <TableCell align="left" sx={{ color: "#fff" }}>
                      Name
                    </TableCell>
                    <TableCell align="center" sx={{ color: "#fff" }}>
                      Imp.
                    </TableCell>
                    <TableCell align="center" sx={{ color: "#fff" }}>
                      TR clicks
                    </TableCell>
                    <TableCell align="center" sx={{ color: "#fff" }}>
                      Cost
                    </TableCell>
                    <TableCell align="center" sx={{ color: "#fff" }}>
                      Rev.
                    </TableCell>
                    <TableCell align="center" sx={{ color: "#fff" }}>
                      Net
                    </TableCell>
                    <TableCell align="right" sx={{ color: "#fff" }}>
                      ROI
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.map((data, index) => (
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        className="text fw_bold"
                      >
                        {data.name}
                      </TableCell>
                      <TableCell align="center" className="text">
                        {data.imp}
                      </TableCell>
                      <TableCell align="center" className="text">
                        {data.clicks}
                      </TableCell>
                      <TableCell align="center" className="text">
                        {data.cost}
                      </TableCell>
                      <TableCell align="center" className="text">
                        {data.rev}
                      </TableCell>
                      <TableCell align="center" className="text">
                        {data.net}
                      </TableCell>
                      <TableCell align="right" className="text">
                        {data.roi}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </>:<ConnectAccount/>}
        </DashboardStyled>
      </DesktopDrawer>
    </>
  );
};

export default Dashboard;


const DashboardStyled = styled.section`
  .date_picker {
    padding: 12px;
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
