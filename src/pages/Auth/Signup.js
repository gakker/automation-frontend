import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import {
  Button,
  TextField,
  Container,
  Box,
  Typography,
  Avatar,
  CssBaseline,
  Grid,
  Link,
  Checkbox,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  LockOutlined,
  Person,
  Email,
  Lock,
  FacebookOutlined,
  Google,
} from "@mui/icons-material";
import styled from "styled-components";
import { Toast } from "../../components/common/Toast";
import { useDispatch, useSelector } from "react-redux";
import LoadingButton from "@mui/lab/LoadingButton";
import { register, reset } from "../../feature/auth/authSlice";
import Background from "../../assets/images/registerbg.png";
import { useNavigate } from "react-router-dom";
import SocialLogin from "../../components/Auth/SocialLogin";
const Signup = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect(() => {
  //   Toast("", "ss");
  // }, []);
  useEffect(() => {
    if (isError) {
      // toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/main-dashboard");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const validationSchema = yup.object({
    first_name: yup.string("Enter your name").required("Name is required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum."),
    confirmPassword: yup
      .string("")
      .oneOf([yup.ref("password")], "Password does not match")
      .required("Confirm your password"),
    last_name: yup.string("Sur").required("Required"),
    // phone: yup
    //   .string()
    //   .required("This field is Required")
    //   .matches(
    //     /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    //     "Phone number is not valid"
    //   ),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      first_name: "",
      last_name: "",
      // phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      // alert(JSON.stringify(values, null, 2));
      // dispatch(signinUser(values));
      const data = {
        first_name: values.first_name,
        email: values.email,
        last_name: values.last_name,
        password: values.password,
      };
      dispatch(register(data));
    },
  });
  return (
    <>
      <SignUpStyled>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            elevation={6}
            square
            sx={{ background: "#fff", px: 3 }}
            className="flex"
          >
            <div>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    component="h1"
                    variant="h4"
                    className="text fw_bold"
                  >
                    Sign up
                  </Typography>
                  <form onSubmit={formik.handleSubmit}>
                    {/* className={classes.card} */}
                    <TextField
                      fullWidth
                      name="first_name"
                      placeholder="First Name"
                      value={formik.values.first_name}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.first_name &&
                        Boolean(formik.errors.first_name)
                      }
                      helperText={
                        formik.touched.first_name && formik.errors.first_name
                      }
                      sx={{
                        my: 2,
                        background: "#f1f1f1",
                        borderRadius: "36px",
                        fieldset: {
                          border: "none",
                        },
                        input: {
                          padding: "15px",
                          "&::placeholder": {
                            color: "var(--grey-color) !important",
                          },
                        },
                        "& .MuiFormHelperText-root.Mui-error": {
                          position: "absolute",
                          bottom: "-24px",
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                          <Person sx={{ color: "var(--grey-color)" }} />
                        ),
                      }}
                    />

                    <TextField
                      fullWidth
                      name="last_name"
                      placeholder="Last Name"
                      value={formik.values.last_name}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.last_name &&
                        Boolean(formik.errors.last_name)
                      }
                      helperText={
                        formik.touched.last_name && formik.errors.last_name
                      }
                      sx={{
                        my: 2,
                        background: "#f1f1f1",
                        borderRadius: "36px",
                        fieldset: {
                          border: "none",
                        },
                        input: {
                          padding: "15px",
                          "&::placeholder": {
                            color: "var(--grey-color) !important",
                          },
                        },
                        "& .MuiFormHelperText-root.Mui-error": {
                          position: "absolute",
                          bottom: "-24px",
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                          <Person sx={{ color: "var(--grey-color)" }} />
                        ),
                      }}
                    />
                    <TextField
                      fullWidth
                      id="email"
                      name="email"
                      placeholder="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                      sx={{
                        my: 2,
                        background: "#f1f1f1",
                        borderRadius: "36px",
                        fieldset: {
                          border: "none",
                        },
                        input: {
                          padding: "15px",
                          "&::placeholder": {
                            color: "var(--grey-color) !important",
                          },
                        },
                        "& .MuiFormHelperText-root.Mui-error": {
                          position: "absolute",
                          bottom: "-24px",
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                          <Email sx={{ color: "var(--grey-color)" }} />
                        ),
                      }}
                    />
                    <TextField
                      fullWidth
                      id="password"
                      name="password"
                      placeholder="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                      sx={{
                        my: 2,
                        background: "#f1f1f1",
                        borderRadius: "36px",
                        fieldset: {
                          border: "none",
                        },
                        input: {
                          padding: "15px",
                          "&::placeholder": {
                            color: "var(--grey-color) !important",
                          },
                        },
                        "& .MuiFormHelperText-root.Mui-error": {
                          position: "absolute",
                          bottom: "-24px",
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                          <Lock sx={{ color: "var(--grey-color)" }} />
                        ),
                      }}
                    />
                    <TextField
                      fullWidth
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="confirmPassword"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.confirmPassword &&
                        Boolean(formik.errors.confirmPassword)
                      }
                      helperText={
                        formik.touched.confirmPassword &&
                        formik.errors.confirmPassword
                      }
                      sx={{
                        my: 2,
                        background: "#f1f1f1",
                        borderRadius: "36px",
                        fieldset: {
                          border: "none",
                        },
                        input: {
                          padding: "15px",
                          "&::placeholder": {
                            color: "var(--grey-color) !important",
                          },
                        },
                        "& .MuiFormHelperText-root.Mui-error": {
                          position: "absolute",
                          bottom: "-24px",
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                          <Lock sx={{ color: "var(--grey-color)" }} />
                        ),
                      }}
                    />

                    <LoadingButton
                      type="submit"
                      fullWidth
                      variant="contained"
                      className="btn "
                      sx={{
                        mt: 3,
                        mb: 2,
                        "&.MuiLoadingButton-loading": {
                          color: "transparent  !important",
                        },
                        svg: {
                          color: "#fff",
                        },
                      }}
                      loading={isLoading}
                      disabled={isLoading}
                    >
                      Sign In
                    </LoadingButton>
                    <Box>
                      <Typography
                        variant="body"
                        className="text "
                        sx={{ textAlign: "center" }}
                      >
                        Or sign with the social platforms
                      </Typography>
                      <SocialLogin />
                    </Box>
                    <Grid container sx={{ mb: 3 }}>
                      {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid> */}
                      <Grid item>
                        <Link
                          href="/login"
                          variant="body2"
                          sx={{ color: "var(--main-color)" }}
                          underline="hover"
                        >
                          Already have an account? Sign in
                        </Link>
                      </Grid>
                    </Grid>
                    {/* <Button color="secondary" onClick={handleReset}>
                  CLEAR
                </Button> */}
                  </form>
                  {/* <Toast /> */}
                </Box>
              </Container>
            </div>
          </Grid>
          <Grid
            item
            xs={false}
            sm={12}
            md={7}
            sx={{
              backgroundImage: "url(" + Background + ")",
              backgroundRepeat: "no-repeat",
              backgroundSize: { xs: "cover", lg: "contain" },
              backgroundColor: "#fff",
              backgroundPosition: "right",
            }}
          />
        </Grid>
      </SignUpStyled>
    </>
  );
};

export default Signup;

const SignUpStyled = styled.section`
  input {
    text-transform: initial;
  }
`;

// {
/* <TextField
                  fullWidth
                  id="phone"
                  name="phone"
                  label="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                sx={{
                        my: 2,
                        background: "#f1f1f1",
                        borderRadius: "36px",
                        fieldset: {
                          border: "none",
                        },
                        input: {
                          padding: "15px",
                          "&::placeholder": {
                            color: "var(--grey-color) !important",
                          },
                        },
                        "& .MuiFormHelperText-root.Mui-error": {
                          position: "absolute",
                          bottom: "-24px",
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                          <Person sx={{ color: "var(--grey-color)" }} />
                        ),
                      }}
                /> */
// }
