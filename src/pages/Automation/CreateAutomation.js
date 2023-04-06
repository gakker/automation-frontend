import React, { useState, useEffect } from "react";
import DesktopDrawer from "../../components/Layout/Drawer/DesktopDrawer";
import {
  Box,
  Typography,
  Tab,
  Grid,
  Button,
  FormGroup,
  FormControlLabel,
  Switch,
  Checkbox,
  FormControl,
  TextField,
  Divider,
  Autocomplete,
} from "@mui/material";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import ConnectAccount from "../../components/ConnectAccount/ConnectAccount";
import { useMediaQuery } from "@material-ui/core";

import {
  Facebook,
  Google,
  Email,
  ArrowOutward,
  CallReceived,
  VerticalAlignBottom,
  VerticalAlignTop,
  AddCircle,
  TextFields,
  PlayArrow,
  Pause,
} from "@mui/icons-material";

import BreadCrumbs from "../../components/common/BreadCrums";
import TabsButton from "../../components/common/TabsButton";
import TiktokIcon from "../../components/common/TiktokIcon";
import CustomTextField from "../../components/common/CustomTextField";
import CustomAutoComplete from "../../components/common/AutoComplete";
import Heading from "../../components/common/Heading";
import SelectMenu from "../../components/common/SelectMenu";
import SlackIon from "../../components/common/SlackIon";
import CustomButton from "../../components/common/CustomButton";
import FullScreenLoader from "../../components/common/FullScreenLoader";
import DateHandler from "../../components/common/DateHandler";

import {
  facebookSchedule,
  facebookTags,
  facebookParameters,
  comparisonValues,
  considerDataForm,
  excludeDays,
  matrixTime,
} from "../../helper/Data";

import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import AutoCompleteTwo from "../../components/ConnectAccount/AutoCompleteTwo";
import TextFieldTwo from "../../components/ConnectAccount/TextFieldTwo";
import { Toast } from "../../components/common/Toast";
import dayjs from "dayjs";
import AutomationTabsOptions from "../../components/automation/create automation/AutomationTabsOptions";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { baseURL } from "config/endpoint";
import { INSTANCE } from "../../config/axiosInstance";
import { createAutomation } from "slices/createAutomationSlices";

const newtorkData = [
  {
    heading: "Facebook Ads",
    icon: Facebook,
    position: "start",
    state: "facebook",
  },
  {
    heading: "Google Ads",
    icon: Google,
    position: "start",
    state: "google",
  },
  {
    heading: "Tiktok Ads",
    icon: TiktokIcon,
    position: "start",
    state: "tiktok",
  },
];

const scopeDate = [
  // {
  //   heading: "Account",
  //   position: "start",
  //   state: "account",
  // },
  {
    heading: "Campaign",
    position: "start",
    state: "ALL_ACTIVE_CAMPAIGN",
  },
  {
    heading: "Ad Set",
    position: "start",
    state: "ALL_ACTIVE_AD_GROUP",
  },
  {
    heading: "Ad",
    position: "start",
    state: "ALL_ACTIVE_AD",
  },
  // {
  //   heading: "Name",
  //   position: "start",
  //   state: "name",
  // },
  // {
  //   heading: "Status",
  //   position: "start",
  //   state: "status",
  // },
];

const notifyData = [
  {
    heading: "Email",
    position: "start",
    state: "email",
  },
  {
    heading: "Slack",
    position: "start",
    state: "slack",
  },
];

const data = {
  advertiser_id: "7067431159843569665",
  rules: [
    {
      apply_objects: [
        {
          dimension: "CAMPAIGN",
          dimension_ids: [],
          pre_condition_type: "ALL_INACTIVE_CAMPAIGN",
        },
      ],
      conditions: [
        {
          subject_type: "CLICK",
          range_type: "LIFETIME",
          match_type: "GT",
          values: ["0"],
        },
        {
          subject_type: "CONVERSION",
          range_type: "LIFETIME",
          match_type: "GT",
          values: ["100"],
          pre_condition_operator: "OR", // Use OR operator between the conditions
        },
      ],
      actions: [],
      notification: {
        notification_type: "NOT_NOTIFICATION",
        email_settings: {
          notification_period: "TIME_SCHEDULE",
          email_exec_time: ["12:00"],
        },
      },
      rule_exec_info: {
        exec_time_type: "PER_HALF_HOUR",
      },
      name: "",
      lang: "EN",
    },
  ],
};

const activePauseObj = {
  activeObj: {
    ALL_ACTIVE_CAMPAIGN: ["ALL_ACTIVE_CAMPAIGN", "CAMPAIGN"],
    ALL_ACTIVE_AD_GROUP: ["ALL_ACTIVE_AD_GROUP", "ADGROUP"],
    ALL_ACTIVE_AD: ["ALL_ACTIVE_AD", "AD"],
  },
  pauseObj: {
    ALL_ACTIVE_CAMPAIGN: ["ALL_INACTIVE_CAMPAIGN", "CAMPAIGN"],
    ALL_ACTIVE_AD_GROUP: ["ALL_INACTIVE_AD_GROUP", "ADGROUP"],
    ALL_ACTIVE_AD: ["ALL_INACTIVE_AD", "AD"],
  },
};

const CreateAutomation = () => {
  //GET RESPONSE FROM REDUX REDUCERS
  const { dateSlice, statusSlice, createAutomationSlices } = useSelector(
    (res) => res
  );

  const dispatch = useDispatch();
  const isMdScreen = useMediaQuery("(max-width:760px)");

  const navigate = useNavigate();
  //set Current Scope State
  const [scope, setScope] = useState("ALL_ACTIVE_CAMPAIGN");
  const [notify, setNotify] = useState("email");
  const [editData, setEditData] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [nameTextFieldShow, setNameTextField] = useState(false);
  const [statusFieldShow, setStatusField] = useState(false);

  //AUTOMATION DATA DEFAULT VALUES
  const automationDefaultValues = {
    name: "",
    tag: "",
    time_frame: "",
    automation_range: [],
    set_rules: [
      {
        comparison: "",
        condition: "",
        kpi: "",
        matric: "",
        operator: "",
        isMatric: false,
      },
    ],
    campaign_name: "",
    adset_name: "",
    ad_name: "",
    kpi: "",
    notify: "",
    comparison: "",
    matric: "",
    scope: scope,
    id: nanoid(),
  };

  //Default Object State
  const [automationData, setAutomationData] = useState(automationDefaultValues);

  //GET DATA  FROM LOCAL AND VALUE SET IN FIELDS
  const getDataStorage = () => {
    if (!localStorage.getItem("automationData")) {
      localStorage.setItem("automationData", JSON.stringify([]));
    } else {
      const editId = localStorage.getItem("edit_id");
      if (editId) {
        setIsEdit(true);
        const abc = JSON.parse(localStorage.getItem("automationData"));
        const selectedData = abc.find((data) => data.id === editId);
        setAutomationData(selectedData);
        setScope(selectedData.scope);
        console.log("editDat", selectedData);
      }
    }
  };

  useEffect(() => {
    getDataStorage();
  }, []);

  const [network, setNetwork] = useState("facebook");

  const [isConnected, setIsConnected] = useState(
    JSON.parse(localStorage.getItem("connectedAccounts"))?.connected_accounts
      ?.ad_account_connected
  );
  const [isLoading, setIsLoading] = useState(false);

  const [state, setState] = React.useState({
    checkedA: true,
  });

  const [apiGet, setApiGet] = useState("");

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleSwitchChange = (event, index) => {
    let value = { ...automationData };
    value["set_rules"][index][event.target.name] = event.target.checked;
    setAutomationData(value);
  };

  //Launch Automation
  const launchAutomation = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/existing-automation");
      Toast("success", "Automated Rule Successfully Created");
    }, 1500);
    const data = JSON.parse(localStorage.getItem("automationData"));
    if (isEdit) {
      const id = localStorage.getItem("edit_id");
      const newState = data.map((obj) => {
        if (obj.id === id) {
          return { ...automationData };
        }
        return obj;
      });
      console.log("sdfdsf", newState);
      setIsEdit(false);
      localStorage.setItem("automationData", JSON.stringify(newState));
    } else {
      localStorage.setItem(
        "automationData",
        JSON.stringify([...data, automationData])
      );
      localStorage.setItem("edit_id", "");
      setAutomationData((prevData) => ({
        ...prevData,
        id: nanoid(),
      }));
    }
  };

  const Notify = (value) => {
    setAutomationData((prevData) => ({
      ...prevData,
      notify: value,
    }));
  };

  const [addBoxDiv, setAddBoxDiv] = useState([
    {
      condition: "",
      id: nanoid(),
      kpi: "",
      operator: "",
      matric: "",
      isMatric: false,
    },
  ]);

  const addBox = (condition) => {
    setAddBoxDiv([
      ...addBoxDiv,
      {
        condition,
        id: nanoid(),
        kpi: "",
        operator: "",
        matric: "",
        isMatric: false,
      },
    ]);
    const temp = [];
    temp.push({
      condition: condition,
      id: nanoid(),
      kpi: "",
      operator: "",
      matric: "",
      isMatric: false,
    });
    setAutomationData((prevData) => ({
      ...prevData,
      set_rules: [...prevData.set_rules, ...temp],
    }));
  };

  const [value, setValue] = React.useState(dayjs(new Date()));
  const [customTime, setCustomTime] = useState(false);
  const [customExcludeDays, setCustomExcludeDays] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState("");
  const [exludeData, setExludeData] = useState("");
  const [considerData, setConsiderData] = useState("");

  const onExcludeDaysChange = (event, newValue) => {
    console.log("exluded date from", newValue);
    setExludeData(newValue.label);
    if (newValue.label === "Custom") {
      setCustomExcludeDays(true);
    } else {
      setCustomExcludeDays(false);
    }
  };

  const onConsiderDataFormChange = (event, newValue) => {
    console.log("consider Date From", newValue);
    setConsiderData(newValue.label);
    if (newValue.label === "Custom") {
      setCustomTime(true);
    } else {
      setCustomTime(false);
    }
  };

  const openNameText = () => {
    setNameTextField(!nameTextFieldShow);
    setStatusField(false);
  };
  const openStatusField = () => {
    setStatusField(!statusFieldShow);
    setNameTextField(false);
  };

  //NEW FUNCTION TO CHECK OBJECT AFTER CLICK CUSTOM OBJECT

  const getDataFromStore = async () => {

    let name = automationData.name;
    let kpi = automationData.set_rules[0].kpi;
    let comparison = automationData.set_rules[0].comparison;

    if (name && comparison && kpi) {
      // OBJECT CUSTOM SETTING  //
      let pre_condition_type = "";
      let dimension = "";

      data.rules[0].name = name;

      data.rules[0].conditions = automationData.set_rules;

      const getCurrent = automationData.scope.toString();

      if (statusSlice.status.toString() === "active") {
        pre_condition_type = activePauseObj.activeObj[getCurrent][0];
        dimension = activePauseObj.activeObj[getCurrent][1];
      }

      if (statusSlice.status.toString() === "pause") {
        pre_condition_type = activePauseObj.pauseObj[getCurrent][0];
        dimension = activePauseObj.pauseObj[getCurrent][1];
      }

      data.rules[0].apply_objects[0].dimension = dimension;
      data.rules[0].apply_objects[0].pre_condition_type = pre_condition_type;

      const getAutomationTab = JSON.parse(
        sessionStorage.getItem("doThisTabData")
      );

      const apv = JSON.parse(sessionStorage.getItem("apv"));

      if (getAutomationTab.automation === "status") {
        data.rules[0].actions = [];
        if (getAutomationTab.status === "activate") {
          const newAction = {
            subject_type: "TURN_ON",
          };
          data.rules[0].actions.push(newAction);
        }
        if (getAutomationTab.status === "pause") {
          const newAction = {
            subject_type: "TURN_OFF",
          };
          data.rules[0].actions.push(newAction);
        }
      } else {
        data.rules[0].actions = [];
        const newAction = {
          subject_type: getAutomationTab.automation,
          action_type: getAutomationTab.insideCurrentTab,
          value_type: apv,
          value: { limit: "0.2" },
        };
        data.rules[0].actions.push(newAction);
      }

      console.warn("data", data);
      console.warn("satusSLice", statusSlice);
      console.warn("dateSLice", dateSlice);
      console.log("excludeData", exludeData);
      console.log("considerDate", considerData);

      if (exludeData.toString() === "Custom") {
        console.log("yes custom", dateSlice);
      } else {
        console.log("no custom", exludeData);
      }

      if (considerData.toString() === "Custom") {
        console.log("yes custom", dateSlice);
      } else {
        console.log("no custom", considerData);
      }

      console.warn("Get Final Objects", data.rules[0]);
      console.warn("Condition", automationData.set_rules);
      console.warn("Notify", automationData.notify);
      console.warn("Time Frame", automationData.time_frame);

      // dispatch(createAutomation(data));
      //  console.log("createAutomationSlices",createAutomationSlices);

      //  API CALLING START //
      //   try {
      //     setApiGet("waiting...");
      //     setIsLoading(true);
      //     const res = await INSTANCE.post("/campaign/tiktok/automation/create" ,{data:data})

      //     if(res){
      //       console.log("ressss",res);
      //       Toast("success", "Automated Rule Successfully Created");
      //     }
      //     setIsLoading(false);

      //   }
      //   catch(err){
      //     setIsLoading(false);
      //       console.log(err);
      //     Toast("error", "Automation Not Created Internal Server");
      //  }

      // API CALLING END //
    } else {
      name === "" && Toast("error", "Name is Empty");
      kpi === "" && Toast("error", "Kpi is Empty");
      comparison === "" && Toast("error", "comparison is Empty");
    }
  };

  const sxProps = {
    display: "flex",
    alignItems: "center",
    "& .button": {
      background: "#fff",
      border: "1px solid var(--grey-color)",
      color: "var(--grey-color)",
    },
    ...(isMdScreen && {
      display: "column",
    }),
  };

  return (
    <>
      <DesktopDrawer>
        <BreadCrumbs heading="Automations" link="Create Automation" />

        {isLoading && <FullScreenLoader />}

        {isConnected !== 0 ? (
          <Box sx={{ py: 2 }}>
            <Heading heading=" Select your Ad Network" />
            <Box sx={{ pb: 1 }}>
              {/* Select Your Ad Network Tabs Button */}
              <TabsButton
                value={network}
                setValue={setNetwork}
                data={newtorkData}
              />
            </Box>

            {/* Automation name and tag Cmp */}

            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <Box sx={{ width: "100%" }}>
                  <Heading heading="Automation Name" />

                  <CustomTextField
                    name="name"
                    setValue={setAutomationData}
                    placeholder="Stop-Loss campaign level-Facebook Ads"
                    data={automationData}
                    editData={editData}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Box sx={{ width: "100%" }}>
                    <Heading heading="Automation Tag" />
                    <CustomAutoComplete
                      placeholder="Select Tags"
                      name="tag"
                      setValue={setAutomationData}
                      data={facebookTags}
                      editData={editData}
                      dataTwo={automationData}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* Scope   */}

            <Box>
              <Heading heading="Scope" />

              <Box sx={sxProps}>
                <Box>
                  <TabContext value={scope}>
                    <TabsButton
                      setAutomationData={setAutomationData}
                      value={scope}
                      setValue={setScope}
                      data={scopeDate}
                    />
                  </TabContext>
                </Box>

                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 2,
                      mr: 2,
                      mb: 2,
                      background: "var(--main-color) !important",
                    }}
                    onClick={openNameText}
                  >
                    Name
                  </Button>

                  <Button
                    variant="contained"
                    sx={{
                      mt: 2,
                      mb: 2,
                      background: "var(--main-color) !important",
                    }}
                    onClick={openStatusField}
                  >
                    Status
                  </Button>
                </Box>
              </Box>

              {nameTextFieldShow ? (
                <Grid container spacing={2}>
                  <Grid xs={12} md={6} item>
                    <CustomTextField
                      name="name"
                      setValue={setAutomationData}
                      placeholder="Enter Name"
                      sx={{
                        background: "var(--main-color) !important",
                      }}
                    />
                  </Grid>
                </Grid>
              ) : null}

              {statusFieldShow ? (
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <SelectMenu
                      placeholder="Select Status"
                      setChanged={selectedAccount}
                      data={[
                        {
                          value: "active",
                          name: "active",
                        },
                        {
                          value: "pause",
                          name: "pause",
                        },
                      ]}
                    />
                  </Grid>
                </Grid>
              ) : null}
            </Box>
            {/* Consider Data form   */}
            <Grid container spacing={2} sx={{ mb: 2, mt: 0.5 }}>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Heading heading="Consider Data Form" />
                  <Autocomplete
                    disablePortal
                    // name={name}
                    // value={dataTwo && dataTwo[name]}
                    fullWidth
                    onChange={(e, newValue) =>
                      onConsiderDataFormChange(e, newValue)
                    }
                    options={considerDataForm}
                    className="primary_color "
                    sx={{
                      fieldset: {
                        border: "1px solid",
                        borderRadius: "5px",
                        borderColor: "inherit",
                      },
                      label: {
                        color: "inherit",
                        "&.Mui-focused": {
                          color: "inherit",
                        },
                      },
                      svg: {
                        color: "inherit",
                      },
                      "& .MuiButtonBase-root": {
                        color: "inherit",
                      },
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Select Time Frame"
                        className="pack_man_input "
                        sx={{ label: { top: "-2px" } }}
                        inputProps={{
                          className: "border ",
                          ...params.inputProps,
                        }}
                        InputProps={{
                          ...params.InputProps,
                          className: "text",
                          style: {
                            padding: "6px",
                          },
                        }}
                      />
                    )}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box>
                  <Heading heading="Exclude Days from  interval" />
                  <Autocomplete
                    disablePortal
                    // name={name}
                    // value={dataTwo && dataTwo[name]}
                    fullWidth
                    onChange={(e, newValue) => onExcludeDaysChange(e, newValue)}
                    options={excludeDays}
                    className="primary_color "
                    sx={{
                      fieldset: {
                        border: "1px solid",
                        borderRadius: "5px",
                        borderColor: "inherit",
                      },
                      label: {
                        color: "inherit",
                        "&.Mui-focused": {
                          color: "inherit",
                        },
                      },
                      svg: {
                        color: "inherit",
                      },
                      "& .MuiButtonBase-root": {
                        color: "inherit",
                      },
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Select Time Frame"
                        className="pack_man_input "
                        sx={{ label: { top: "-2px" } }}
                        inputProps={{
                          className: "border ",
                          ...params.inputProps,
                        }}
                        InputProps={{
                          ...params.InputProps,
                          className: "text",
                          style: {
                            padding: "6px",
                          },
                        }}
                      />
                    )}
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              {customTime && (
                <Grid item xs={12} md={4}>
                  <Box>
                    <Heading heading="Select custom time frame" />
                    <DateHandler name="timeFrame" />
                  </Box>
                </Grid>
              )}
              {customExcludeDays && (
                <Grid item xs={12} md={4}>
                  <Box>
                    <Heading heading="Exclude Days from  interval" />
                    <DateHandler name="timeInterval" />
                  </Box>
                </Grid>
              )}
            </Grid>

            {/* Do this tabs  */}

            <AutomationTabsOptions />

            {/* Conditions select menus  */}
            <Box sx={{}}>
              <Heading heading="Select Rules" />
              {automationData.set_rules.map((item, index) => (
                <Box>
                  <Grid container spacing={1} sx={{}}>
                    <Grid item xs={12}>
                      <Heading heading={item.condition} />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <Typography
                          variant="h6"
                          className="text fw_bold"
                          sx={{ mr: 2 }}
                        >
                          IF
                        </Typography>
                        <AutoCompleteTwo
                          dataTwo={automationData}
                          placeholder="Select KPI"
                          name={"kpi"}
                          index={index}
                          setValue={setAutomationData}
                          data={facebookParameters}
                          editData={editData}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <Typography
                          variant="h6"
                          className="text fw_bold"
                          sx={{ mr: 2 }}
                        >
                          IS
                        </Typography>
                        <AutoCompleteTwo
                          dataTwo={automationData}
                          placeholder="Select comparison operator"
                          name={"comparison"}
                          index={index}
                          setValue={setAutomationData}
                          data={comparisonValues}
                          editData={editData}
                        />
                        {/* <SelectMenu placeholder="Select comparison operator" /> */}
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <Typography
                          variant="h6"
                          className="text fw_bold"
                          sx={{ mr: 2 }}
                        >
                          THAN
                        </Typography>

                        <TextFieldTwo
                          name="matric"
                          index={index}
                          setValue={setAutomationData}
                          placeholder="Value"
                          data={automationData}
                          editData={editData}
                        />

                        <Box sx={{ ml: 1, my: 2 }}>
                          <Switch
                            sx={{
                              width: "50px",
                              height: "24px",
                              padding: "0px",
                              "& .MuiSwitch-switchBase": {
                                color: "#818181",
                                padding: "1px",
                                "&.Mui-checked + .MuiSwitch-track": {
                                  backgroundColor: "var(--main-color)",
                                },
                              },
                              "& .MuiSwitch-thumb": {
                                color: "white",
                                width: "20px",
                                height: "20px",
                                margin: "1px",
                              },
                              "& .MuiSwitch-track": {
                                borderRadius: "20px",
                                backgroundColor: "#818181",
                                opacity: "1 !important",
                                "&:after, &:before": {
                                  color: "white",
                                  fontSize: "11px",
                                  position: "absolute",
                                  top: "6px",
                                },
                                "&:after": {
                                  left: "8px",
                                },
                                "&:before": {
                                  right: "7px",
                                },
                              },
                              "& .Mui-checked": {
                                color: "#23bf58 ",
                                transform: "translateX(26px) !important",
                              },
                            }}
                            // checked={item.isMatric}
                            onChange={(event) => {
                              handleSwitchChange(event, index);
                            }}
                            name="isMatric"
                            inputProps={{ "aria-label": "secondary checkbox" }}
                          />
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                  {item.isMatric && (
                    <Grid container spacing={2} sx={{ my: 0.5 }}>
                      <Grid item xs={12} md={6} lg={4}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                          }}
                        >
                          <Typography
                            variant="h6"
                            className="text fw_bold"
                            sx={{ mr: 2 }}
                          >
                            IF
                          </Typography>
                          <AutoCompleteTwo
                            dataTwo={automationData}
                            placeholder="Matrix"
                            name={"kpi"}
                            index={index}
                            setValue={setAutomationData}
                            data={facebookParameters}
                            editData={editData}
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6} lg={4}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                          }}
                        >
                          <Typography
                            variant="h6"
                            className="text fw_bold"
                            sx={{ mr: 2 }}
                          >
                            THAN
                          </Typography>
                          <AutoCompleteTwo
                            dataTwo={automationData}
                            placeholder="Time"
                            name={"matrix"}
                            index={index}
                            setValue={setAutomationData}
                            data={matrixTime}
                            editData={editData}
                          />
                        </Box>
                      </Grid>
                    </Grid>
                  )}
                </Box>
              ))}
            </Box>
            {/* Add Conditions */}
            <Box sx={{ display: "flex", alignItems: "center", py: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", py: 2 }}>
                <Box>
                  <AddCircle sx={{ color: "var(--main-color)", mr: 1 }} />
                </Box>
                <Box>
                  <Typography variant="body" className="text">
                    Add Condition
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ ml: 3 }}>
                <Button
                  variant="contained"
                  className="box_shadow"
                  sx={{
                    background: "#fff",
                    mr: 2,
                    my: 2,
                    color: "var(--grey-color)",
                    "&:hover": {
                      opacity: "0.6",
                      background: "#fff",
                      transition: "0.5s",
                    },
                  }}
                  onClick={() => addBox("and")}
                >
                  AND
                </Button>
                <Button
                  variant="contained"
                  className="box_shadow"
                  sx={{
                    color: "var(--grey-color)",
                    background: "#fff",
                    "&:hover": {
                      opacity: "0.6",
                      background: "#fff",
                      transition: "0.5s",
                    },
                  }}
                  onClick={() => addBox("or")}
                >
                  OR
                </Button>
              </Box>
            </Box>
            {/* Switch button  */}
            <Box sx={{}}>
              <Heading heading="Check it and Execute Every" />
              <Box
                sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
              >
                <Box sx={{ maxWidth: "300px", width: "100%" }}>
                  {/* <SelectMenu placeholder="Select time frame" /> */}
                  <CustomAutoComplete
                    dataTwo={automationData}
                    name="time_frame"
                    placeholder="Select Time Frame"
                    data={facebookSchedule}
                    setValue={setAutomationData}
                    editData={editData}
                  />
                </Box>
                <Box sx={{ mx: 2, my: 2 }}>
                  <Switch
                    sx={{
                      width: "50px",
                      height: "24px",
                      padding: "0px",
                      "& .MuiSwitch-switchBase": {
                        color: "#818181",
                        padding: "1px",
                        "&.Mui-checked + .MuiSwitch-track": {
                          backgroundColor: "var(--main-color)",
                        },
                      },
                      "& .MuiSwitch-thumb": {
                        color: "white",
                        width: "20px",
                        height: "20px",
                        margin: "1px",
                      },
                      "& .MuiSwitch-track": {
                        borderRadius: "20px",
                        backgroundColor: "#818181",
                        opacity: "1 !important",
                        "&:after, &:before": {
                          color: "white",
                          fontSize: "11px",
                          position: "absolute",
                          top: "6px",
                        },
                        "&:after": {
                          content: "'On'",
                          left: "8px",
                        },
                        "&:before": {
                          content: "'Off'",
                          right: "7px",
                        },
                      },
                      "& .Mui-checked": {
                        color: "#23bf58 ",
                        transform: "translateX(26px) !important",
                      },
                    }}
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                </Box>

                <Button
                  variant="contained"
                  className="box_shadow"
                  sx={{
                    my: 2,
                    background: "#fff",
                    border: "1px solid var(--grey-color)",
                    color: "var(--grey-color)",
                    "&:hover": {
                      opacity: "0.6",
                      background: "#fff",
                      transition: "0.5s",
                    },
                  }}
                >
                  Custom Schedule
                </Button>
              </Box>
            </Box>
            {/* Email notice  */}
            <Box sx={{ py: 2 }}>
              <Heading heading="Notify Via" />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  "& .button": {
                    background: "#fff",
                    border: "1px solid var(--grey-color)",
                    color: "var(--grey-color)",
                  },
                }}
              >
                <Box sx={{ mr: 2 }}>
                  {/* <Button
                    variant="contained"
                    startIcon={<Email />}
                    className="button"
                    onClick={(e) => Notify("email")}
                  >
                    Email
                  </Button> */}

                  <TabContext value={notify}>
                    <TabsButton
                      setAutomationData={setAutomationData}
                      value={notify}
                      setValue={setNotify}
                      data={notifyData}
                    />
                  </TabContext>
                </Box>
                <Box>
                  {/* <Button
                    variant="contained"
                    startIcon={<SlackIon />}
                    className="button"
                    onClick={(e) => Notify("slack")}
                  >
                    Slack
                  </Button> */}
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                py: 2,
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
 
              <Box sx={{ mr: 2, my: 2 }}>
                <CustomButton
                  color="var(--main-color)"
                  text="Save Automation"
                />
              </Box>


              {/* onClick={launchAutomation} */}
              <Box>
                <CustomButton
                  color="var(--main-color)"
                  text="Launch Automation"
                />
                <Button
                  onClick={getDataFromStore}
                  sx={{
                    background: "var(--main-color) !important",
                    color: "white",
                    ml: 4,
                  }}
                >
                  Click to check Objects
                </Button>
              </Box>
            </Box>
          </Box>
        ) : (
          <ConnectAccount />
        )}
      </DesktopDrawer>
    </>
  );
};

export default CreateAutomation;
