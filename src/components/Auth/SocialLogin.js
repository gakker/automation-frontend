import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { FacebookOutlined, Google } from "@mui/icons-material";
import { google, facebook } from "../../feature/auth/authSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { INSTANCE } from "../../config/axiosInstance";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/common/FullScreenLoader";
const SocialLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess, socialIsLoading } = useSelector((store) => store.auth);
  const clientId =
    "306056037862-6oj2o3e1dg4923n454dolh8550imqll1.apps.googleusercontent.com";
  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({ clientId: clientId });
    });
  }, []);
  
  var token = gapi?.auth?.getToken()?.access_token;

  const handleFailure = (result) => {
    console.log(result);
  };

  const handleLogin = async (googleData) => {
    const token = { token: googleData?.tokenId };
    dispatch(google(token));
    if (isSuccess) {
      navigate("/main-dashboard");
    }
  };

  const responseFacebook = async (response) => {
    await response;
    const data = {
      user_name: response?.name,
      email: response?.email,
      profile_image: response?.picture?.data?.url,
    };
    dispatch(facebook(data));
  };
  const componentClicked = async (re) => {
    // await re;
    // console.log(re);
  };

  return socialIsLoading ? (
    <Loader />
  ) : (
    <Box
      className="flex"
      sx={{
        my: 2,
        "& .icon": {
          border: " 2px solid var(--grey-color)",
          borderRadius: "50%",
          // padding: "5px 8px",
          cursor: "pointer",
          transition: "0.5s",
          // lineHeight: "18px",
          height: "38px",
          width: "38px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            background: "var(--grey-color)",
          },
          "&:hover svg": {
            color: "#fff",
          },
        },
        svg: {
          transition: "0.5s",
          color: "var(--grey-color)",
        },
      }}
    >
      <GoogleLogin
        clientId={clientId}
        render={(renderProps) => (
          <Box className="icon" sx={{ mr: 2 }} onClick={renderProps.onClick}>
            <Google />
          </Box>
        )}
        onSuccess={handleLogin}
        onFailure={handleFailure}
        cookiePolicy={"single_host_origin"}
        // apna
        // isSignedIn={true}
      ></GoogleLogin>
      <FacebookLogin
        appId="552166863314685"
        autoLoad={false}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
        render={(renderProps) => (
          <Box className="icon" onClick={renderProps.onClick}>
            <FacebookOutlined />
          </Box>
        )}
      />
    </Box>
  );
};

export default SocialLogin;
