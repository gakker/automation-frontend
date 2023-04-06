import React, { useState, useEffect } from "react";
import DesktopDrawer from "../../components/Layout/Drawer/DesktopDrawer";
import BreadCrums from "../../components/common/BreadCrums";
import { Box, Grid, Typography, Button, IconButton } from "@mui/material";
import styled from "styled-components";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import CustomTextField from "../../components/common/CustomTextField";
import SelectMenu from "../../components/common/SelectMenu";
import SocailCard from "../../components/control center/New Product/SocailCard";
import ValidatonTextField from "../../components/common/ValidationTextField";
import {
  FacebookRounded,
  Email,
  Google,
  PhotoCamera,
} from "@mui/icons-material";
import TiktokIcon from "../../components/common/TiktokIcon";
import CustomButton from "../../components/common/CustomButton";
import Heading from "../../components/common/Heading";
import TabsButton from "../../components/common/TabsButton";
import SlackIon from "../../components/common/SlackIon";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  createProduct,
  reset,
} from "../../feature/Control Center/newProductSlice";
import Loader from "../../components/common/FullScreenLoader";

const AppData = [
  {
    state: "1",
    heading: "App",
  },
  {
    state: "2",
    heading: "Game",
  },
  {
    state: "3",
    heading: "Website",
  },
];

const platformData = [
  {
    name: "IOS",
    value: "ios",
  },
  {
    name: "Android",
    value: "android",
  },
];
const NewProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.newProduct
  );
  const [product, setproduct] = useState("1");
  const [platform, setPlatform] = useState("");
  const [appIcon, setAppIcon] = useState(null);
  const onImageChange = ({ currentTarget: input }) => {
    if (input.files && input.files[0]) {
      const files = input.files[0];
      const name = files.type;
      if (files.name.match(/\.(jpg|jpeg|png|PNG|JPEG|JPG)$/)) {
        const url = URL.createObjectURL(files);
        // setCategoryImg(url);
        // setCategoryImageFile(files);
        setAppIcon(files);
      } else {
        setAppIcon(null);
        // toast.error("You are uploading incorrect format");
      }
    }
  };

  useEffect(() => {
    dispatch(reset());
  }, [isError, isSuccess, message, navigate, dispatch]);
  const validationSchema = yup.object({
    platform_url: yup
      .string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .required("Please enter website"),
    platform_name: yup.string("").required("Game Name is required"),
  });
  const formik = useFormik({
    initialValues: {
      platform_url: "",
      platform_name: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      let data = new FormData();
      data.append("platform_id", product);
      data.append("product_url", values.platform_url);
      data.append("product_name", values.platform_name);
      data.append("icon", appIcon);
      dispatch(createProduct(data));
    },
  });
  return (
    <>
      <DesktopDrawer>
        <NewProductStyled>
          <BreadCrums heading="Control Center" link="New Product" />
          {isLoading && <Loader />}
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ width: "100%", typography: "body1", pt: 3 }}>
              <Typography className="text fw_bold" variant="h6" sx={{ py: 1 }}>
                Product Type
              </Typography>
              <Box>
                <TabsButton
                  value={product}
                  setValue={setproduct}
                  data={AppData}
                />
              </Box>
              <TabContext value={product}>
                <Typography
                  varient="body"
                  className="text"
                  sx={{ opacity: "0.7", py: 1 }}
                >
                  Field labels will vary according to the product type
                </Typography>
                <TabPanel value="1" sx={{ p: 0 }}>
                  <Grid container spacing={2}>
                    {/* <Grid item xs={12} md={6}>
                    <Box>
                      <Heading heading="Select Platform" />
                      <Box>
                        <SelectMenu
                          heading="Enter Game Name"
                          placeholder="Select Platform"
                          data={platformData}
                        />
                      </Box>
                    </Box>
                  </Grid> */}
                    <Grid item xs={12} md={6}>
                      <Box>
                        <Heading heading="App URL" />
                        <ValidatonTextField
                          name="platform_url"
                          formik={formik}
                          placeholder="Enter App URL"
                          type="text"
                        />
                        {/* <CustomTextField
                        heading="Enter Game Link"
                        placeholder="Enter Game Link"
                      /> */}
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <Heading heading="Game Name" />
                        {/* <CustomTextField
                          heading="Enter Game Name"
                          placeholder="Enter Game Name"
                        /> */}
                        <ValidatonTextField
                          name="platform_name"
                          formik={formik}
                          placeholder="Enter Game Name"
                          type="text"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <Heading heading="Upload Icon" />
                        {/* <CustomTextField
                        heading="Upload Icon"
                        placeholder="Upload icon"
                      /> */}
                        <Box className="primary_color border app_logo_warapper">
                          <IconButton
                            color="primary"
                            aria-label="upload picture"
                            component="label"
                          >
                            <input
                              hidden
                              accept="image/*"
                              type="file"
                              onChange={(e) => onImageChange(e)}
                            />
                            <PhotoCamera sx={{ color: "var(--main-color)" }} />
                          </IconButton>
                          <Box className="img_container">
                            {appIcon && (
                              <img
                                src={URL.createObjectURL(appIcon)}
                                alt="app_icon"
                                className="border"
                              />
                            )}
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                  <Box sx={{ py: 2 }}>
                    <Heading heading="Connect Ads Accounts" />
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6} md={4} lg={3}>
                        <SocailCard
                          icon={<FacebookRounded />}
                          heading="Facebook Ads"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} lg={3}>
                        <SocailCard
                          icon={<TiktokIcon />}
                          heading="Tiktok Ads"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} lg={3}>
                        <SocailCard icon={<Google />} heading="Google Ads" />
                      </Grid>
                    </Grid>
                  </Box>
                  <Box sx={{ py: 2 }}>
                    <Heading heading="Connect Reporting Channels" />
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6} md={4} lg={3}>
                        <SocailCard icon={<SlackIon />} heading="Slack" />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} lg={3}>
                        <SocailCard icon={<Email />} heading="E-mail" />
                      </Grid>
                    </Grid>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      py: 3,
                    }}
                  >
                    <Box sx={{ mr: 2, py: 1 }}>
                      <Button
                        variant="contained"
                        sx={{
                          background: "var(--light-grey-color)",
                          "&:hover": {
                            opacity: "0.6",
                            background: "var(--light-grey-color)",
                            transition: "0.5s",
                          },
                        }}
                      >
                        Cancel
                      </Button>
                      {/* <CustomButton
                        text="  Create Product"
                        color="var(--main-color)"
                      /> */}
                    </Box>
                    <Box sx={{ py: 1 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          background: "var(--main-color)",
                          "&:hover": {
                            opacity: "0.6",
                            background: "var(--main-color)",
                            transition: "0.5s",
                          },
                        }}
                      >
                        Create Product
                      </Button>
                      {/* <CustomButton
                        text="Cancel"
                        color="var(--light-grey-color)"
                      /> */}
                    </Box>
                  </Box>
                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
              </TabContext>
            </Box>
          </form>
        </NewProductStyled>
      </DesktopDrawer>
    </>
  );
};

export default NewProduct;

const NewProductStyled = styled.section`
  input {
    text-transform: initial;
  }
  .app_logo_warapper {
    border-radius: 5px;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid;
    .img_container {
      display: flex;
      margin-right: 7px;
      img {
        width: 56px;
        height: 37px;
        object-fit: cover;
        border-radius: 10px;
        border: 1px solid;
      }
    }
  }
`;
