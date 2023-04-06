import React, { useEffect } from "react";
import styled from "styled-components";
import { Box, Grid, Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import Img from "../../assets/images/banner-img.png";
import DesktopDrawer from "../../components/Layout/Drawer/DesktopDrawer";
import ValidationTextField from "../../components/common/ValidationTextField";
import Heading from "../../components/common/Heading";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../../feature/Profile/ProfileSlice";
import FullScreenLoader from "../../components/common/FullScreenLoader";
const user = {
  first_name: "wali",
  last_name: "ahmad",
  email: "wali@gmail.com",
};
const Profile = () => {

  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.profile);

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const validationSchema = yup.object({
    first_name: yup.string("").required("First Name is required"),
    last_name: yup.string("").required("Last Name is required"),
    email: yup
      .string("")
      .email("Enter a valid email")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: user,
    // initialValues: {
    //   first_name: "",
    //   last_name: "",
    //   email: "",
    // },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      // let data = new FormData();
      // data.append("platform_id", product);
      // data.append("product_url", values.platform_url);
      // data.append("product_name", values.platform_name);
      // data.append("icon", appIcon);
      // dispatch(createProduct(data));
    },
  });
  
  const inputHandler = () => {};
  return (
    <>
      <DesktopDrawer>
        <ProfileStyled>
          {isLoading && <FullScreenLoader />}
          <Box
            className="primary_color"
            sx={{ py: 5, px: 3, borderRadius: "5px" }}
          >
            <form onSubmit={formik.handleSubmit}>
              <Box
                className="profile_wrapper"
                sx={{
                  py: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={Img} alt="" />
              </Box>
              <Grid container spacing={3}>
                <Grid item md={6}>
                  <Heading heading="First Name" />
                  <ValidationTextField
                    placeholder="Enter First  Name"
                    formik={formik}
                    type="text"
                    name="first_name"
                    // handleChange={inputHandler}
                  />
                </Grid>
                <Grid item md={6}>
                  <Heading heading="Last Name" />
                  <ValidationTextField
                    placeholder="Enter Last Name"
                    formik={formik}
                    type="text"
                    name="last_name"
                    // handleChange={inputHandler}
                  />
                </Grid>
                <Grid item md={6}>
                  <Heading heading="Email" />
                  <ValidationTextField
                    placeholder="Enter Email"
                    formik={formik}
                    type="text"
                    name="email"
                    // handleChange={inputHandler}
                  />
                </Grid>
              </Grid>
              <Box
                sx={{
                  my: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button type="submit" variant="contained" className="btn">
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </ProfileStyled>
      </DesktopDrawer>
    </>
  );
};

export default Profile;

const ProfileStyled = styled.section`
  input {
    text-transform: initial;
  }
  .profile_wrapper {
    img {
      width: 100%;
      border-radius: 50%;
      object-fit: cover;
      height: 150px;
      width: 150px;
    }
  }
`;
