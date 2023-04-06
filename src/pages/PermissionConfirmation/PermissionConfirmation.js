import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import FullScreenLoader from "../../components/common/FullScreenLoader";
import { INSTANCE } from "../../config/axiosInstance";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Switch,
  Box,
  Grid,
  Button,
} from "@mui/material";
import Heading from "../../components/common/Heading";

const PermissionConfirmation = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loader, setLoader] = useState(true);
  const [rows, setRows] = useState([]);
  const [selectedAccounts, setSelectedAccounts] = useState([]);
  const [token, setToken] = useState();
  const navigate = useNavigate();

  const handleChange = (event, _advertiser_name, _advertiser_id) => {
    if (event.target.checked) {
      setSelectedAccounts([
        ...selectedAccounts,
        { account_id: _advertiser_id, account_name: _advertiser_name },
      ]);
    } else
      setSelectedAccounts(
        selectedAccounts.filter(
          (account) => account.account_id !== _advertiser_id
        )
      );
  };
  console.log(selectedAccounts)
  const submitAccounts = async () => {
    setLoader(true);
    try {
      const response = await INSTANCE.post("/campaign/tiktok/ad-accounts", {
        accounts: selectedAccounts,
        access_token: token,
      });
      navigate("/main-dashboard");
    } catch (error) {
      alert("Something went wrong while submitting code.Please try later.");
      navigate("/main-dashboard");
    }
    setLoader(false);
  };

  useEffect(async () => {
    const authCode = searchParams.get("auth_code");
    try {
      const response = await INSTANCE.post("/campaign/tiktok/generate-token", {
        auth_code: authCode,
      });
      setToken(response.data.data.access_token);
      setRows(response.data.data.accounts);
    } catch (error) {
      alert("Something went wrong while submitting code.Please try later.");
    }
    setLoader(false);
  }, []);

  return (
    <>
      {loader && <FullScreenLoader />}
      <Box sx={{ pt: 5 }}>
        <Grid container>
          <Grid item sm={1.5}></Grid>
          <Grid item sm={9}>
            <Heading heading=" Select your Ad Network" variant="h5" />
            {rows.length !== 0 && (
              <TableContainer
                component={""}
                sx={{ mt: 3, minWidth: "250px", borderRadius: 3 }}
              >
                <Table aria-label="simple table">
                  <TableHead sx={{ backgroundColor: "#6259CA" }}>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "700", color: "white" }}>
                        Name
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: "700", color: "white" }}
                        align="center"
                      >
                        Acount ID
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: "700", color: "white" }}
                        align="center"
                      >
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.advertiser_name}
                        </TableCell>
                        <TableCell align="center">
                          {row.advertiser_id}
                        </TableCell>
                        <TableCell align="center">
                          <Switch
                            onChange={(event) =>
                              handleChange(
                                event,
                                row.advertiser_name,
                                row.advertiser_id
                              )
                            }
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
            {selectedAccounts.length !== 0 && (
              <Button
                sx={{
                  backgroundColor: "#6259CA",
                  color: "white",
                  "&.MuiButton-root": {
                    "&:hover": {
                      backgroundColor: "#6259CA",
                    },
                  },
                }}
                onClick={() => submitAccounts()}
              >
                Connect
              </Button>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PermissionConfirmation;
