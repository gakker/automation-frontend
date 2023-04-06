import React, { useState, useEffect } from "react";
import {
  TextField,
  Box,
  Typography,
  Grid,
  InputAdornment,
  IconButton,
  Button,
  Link,
} from "@mui/material";
import { useFormik } from "formik";
import Background from "../../assets/images/loginbg.png";
import * as yup from "yup";
import {
  FacebookOutlined,
  Google,
  Lock,
  Person,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import styled from "styled-components";
import { login, reset } from "../../feature/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from "react-router-dom";
import { borderRadius } from "@mui/system";
import SocialLogin from "../../components/Auth/SocialLogin";
import ConnectFacebook from "../../components/Layout/Facebook/ConnectFacebook";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  React.useEffect(() => {
    if (isError) {
    }
    if (isSuccess || user) {
      navigate("/main-dashboard");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);
  const [showPassword, setShowPassword] = useState(false);
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      // alert(JSON.stringify(values, null, 2));
      // dispatch(signinUser(values));
      dispatch(login(values));
    },
  });
  return (
    <>
      <LoginStyles>
        {/* <ConnectFacebook /> */}
        <Grid container component="main" sx={{ height: "100vh" }}>
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
            }}
          >
            {/* <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  position: "absolute",
                  top: "0rem",
                  left: "1rem",
                  // background: "#7b72de",
                  maxWidth: "26rem",
                  textAlign: "center",
                  paddingTop: "3rem",
                  px: 2,
                  color: "#fff",
                }}
              >
                <Typography variant="h5" component="div">
                  New here?
                </Typography>
                <Typography variant="body" component="div">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    my: 2,
                    background: "transparent",
                    border: "2px solid #fff",
                    borderRadius: "25px",
                    "&:hover": {
                      background: "transparent",
                      opacity: 0.7,
                    },
                  }}
                >
                  Sign up
                </Button>
              </Box>
            </Box> */}
          </Grid>
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
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h4" className="text fw_bold">
                Sign in
              </Typography>
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  // autoComplete="off"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
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
                      <Person sx={{ color: "var(--grey-color)" }} />
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
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
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          onMouseDown={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <LoadingButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    className="btn "
                    sx={{
                      mt: 1,
                      mb: 2,
                      width: "40%",
                      borderRadius: "20px",
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
                </Box>
              </form>
              <Box>
                <Typography variant="body" className="text">
                  Or sign with the social platforms
                </Typography>
                {/* <SocialLogin /> */}
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  padding: "10px 0px",
                  width: "100%",
                }}
              >
                <Box>
                  <Link
                    href="#"
                    variant="body2"
                    sx={{ color: "var(--main-color)", mr: 2 }}
                    underline="hover"
                  >
                    Forgot password?
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/sign-up"
                    variant="body2"
                    sx={{ color: "var(--main-color)" }}
                    underline="hover"
                  >
                    Don't have an account?
                  </Link>
                </Box>
              </Box>
              {/* {loading && <div className="progress">Loading....</div>}
            {error && <h5>{error}</h5>} */}
            </Box>
          </Grid>
        </Grid>
      </LoginStyles>
    </>
  );
};

export default Login;

const LoginStyles = styled.section`
  input {
    text-transform: initial;
  }
`;
