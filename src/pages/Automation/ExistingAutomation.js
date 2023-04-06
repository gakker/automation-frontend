import React, { useState } from "react";
import DesktopDrawer from "../../components/Layout/Drawer/DesktopDrawer";
import ConnectAccount from "../../components/ConnectAccount/ConnectAccount";
import BreadCrumbs from "../../components/common/BreadCrums";

import {
  Box,
  Typography,
  Tab,
  Grid,
  TextField,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Checkbox,
  Tooltip,
  FormGroup,
  Switch,
  styled as muiStyled,
  Button,
} from "@mui/material";
import styled from "styled-components";
import SelectMenu from "../../components/common/SelectMenu";
import { tableData } from "../../helper/Data";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ExistingAutomationsTable from "../../components/automation/existing automation/ExistingAutomationsTable";


const data = [{}, {}, {}];
const ExistingAutomation = () => {
  const navigate = useNavigate();
  const [isConnected, setIsConnected] = useState(
    JSON.parse(localStorage.getItem("connectedAccounts"))?.connected_accounts
      ?.ad_account_connected
  );

  const automationData = JSON.parse(localStorage.getItem("automationData"));
  React.useEffect(() => {
    localStorage.setItem("edit_id", "");
  }, []);
  const { theme: customTheme } = useSelector((store) => store.theme);
  const [checkedStudents, setCheckedStudents] = useState([]);
  const handleChange1 = (isChecked) => {
    if (isChecked)
      return setCheckedStudents(tableData.map((estudiante) => estudiante.uid));
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



  return (
    <>
      <DesktopDrawer>
        <BreadCrumbs heading="Automations" />
        {isConnected !== 0 ? (
          <>
            {automationData && automationData.length > 0 ? (
              <>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Box
                    sx={{
                      py: 3,
                      pr: 2,
                      display: "flex",
                      flexWrap: "wrap",
                      // flexDirection: { xs: "column", sm: "row" },
                      "& .menu": {
                        width: { xs: "100%", md: "160px" },
                        margin: "10px",
                        marginLeft: "0",
                      },
                    }}
                  >
                    <Box className="menu">
                      <SelectMenu placeholder="Actions" />
                    </Box>
                    <Box className="menu">
                      <SelectMenu placeholder="New Rules" />
                    </Box>
                  </Box>
                  <Box sx={{ py: 1 }}>
                    <Typography className="text">Stop Loss</Typography>
                  </Box>
                </Box>
                {/* Table  */}
                <Box>
                  {automationData && automationData.length > 0 ? (
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
                            {/* <TableCell>
                      <Checkbox
                        checked={checkedStudents.length === tableData.length}
                        indeterminate={
                          checkedStudents.length !== tableData.length &&
                          checkedStudents.length > 0
                        }
                        onChange={(event) => handleChange1(event.target.checked)}
                        sx={{
                          color: "#fff",
                          "&.Mui-checked , &.MuiCheckbox-indeterminate": {
                            color: "#fff",
                          },
                        }}
                      />
                    </TableCell> */}
                            <TableCell align="center" sx={{ color: "#fff" }}>
                              Action
                            </TableCell>
                            <TableCell align="center" sx={{ color: "#fff" }}>
                              Name
                            </TableCell>
                            <TableCell align="center" sx={{ color: "#fff" }}>
                              Status
                            </TableCell>
                            <TableCell align="center" sx={{ color: "#fff" }}>
                              Scope
                            </TableCell>
                            <TableCell align="center" sx={{ color: "#fff" }}>
                              Add Network
                            </TableCell>
                            <TableCell align="center" sx={{ color: "#fff" }}>
                              condition
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <ExistingAutomationsTable automationData={automationData} />
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell className="text fw_bold">
                              Total : {automationData && automationData.length}
                            </TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  ) : (
                    <></>
                  )}
                </Box>
                <Box sx={{ py: 3, maxWidth: "350px" }}>
                  <SelectMenu placeholder="100 Rows" />
                </Box>
              </>
            ) : (
              <>
                <Box
                  className="primary_color"
                  sx={{
                    borderRadius: "10px",
                    height: "60vh",
                    my: 5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="h4" className="text fw_bold">
                    No Data
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="body"
                        className="text text_initial"
                        sx={{ textAlign: "center", py: 1 }}
                        component="div"
                      >
                        To create automation click below
                      </Typography>
                    </Box>
                    <Button
                      className="btn"
                      onClick={() => navigate("/create-automation")}
                    >
                      Create Automation
                    </Button>
                  </Box>
                </Box>
              </>
            )}
          </>
        ) : (
          <ConnectAccount />
        )}
      </DesktopDrawer>
    </>
  );
};

export default ExistingAutomation;
const ExistingAutomationStyled = styled.section``;
