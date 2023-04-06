import React, { useState, useEffect } from "react";
import FacebookLogin from "react-facebook-login";
import { INSTANCE } from "../../../config/axiosInstance";

const ConnectFacebook = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [picture, setPicture] = useState(null);
  const [autoLoad, setAutoLoad] = useState(true);
  const responseFacebook = async (response) => {
    await response;
    console.log(response);
    const abc = localStorage.getItem("fblst_1375745499534181");
    if (abc) {
      // localStorage.setItem("uToken", `Bearer ${response.access_token}`);
      // localStorage.setItem("token", response.access_token);
      setIsLoggedIn(true);
    }
  };
  const componentClicked = async () => console.log("clicked");
  const hello = async (e) => {
    e && e.preventDefault();
    const abc = localStorage.getItem("fblst_1375745499534181");
    console.log(abc);
    // const user_id = 1655456781467954;
    const user_id = 1301131350702958;
    const response = await INSTANCE.delete(
      `https://graph.facebook.com/${user_id}/permissions?access_token=${abc}`
    );
    localStorage.removeItem("fblst_1375745499534181");
    localStorage.clear();
    setIsLoggedIn(false);

    //  const response =
  };

  useEffect(() => {
    // initializeFaceBook();
  }, []);

  var initializeFaceBook = () => {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: "1375745499534181",
        cookie: true,
        xfbml: true,
        version: "v5.0",
      });

      window.FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  };

  const onFacebook = () => {
    window.FB.login(
      (resp) => {
        console.log(resp);
      },
      {
        scope:
          "ads_management,business_management,read_insights,publish_video,pages_show_list,ads_read,pages_read_engagement,pages_manage_ads,pages_manage_posts",
        // return_scopes: true,
      }
    );
  };

  const logout = () => {
    window.FB.getLoginStatus(function (response) {
      if (response && response.status === "connected") {
        window.FB.logout(function (response) {
          console.log(response);
          // document.location.reload();
        });
      }
    });
  };
  return (
    <>
      {/* <div className="btn_full_width" onClick={onFacebook}>
        Continue with Facebook
      </div>
      <div className="btn_full_width" onClick={logout}>
        Logout
      </div> */}
      {isLoggedIn ? (
        " Connected..."
      ) : (
        <FacebookLogin
          appId="1375745499534181"
          autoLoad={true}
          fields="name,email,picture"
          scope="ads_management"
          // scope="ads_management,read_insights,publish_video,pages_show_list,ads_read,pages_read_engagement,pages_manage_ads,pages_manage_posts"
          onClick={componentClicked}
          callback={responseFacebook}
        />
      )}

      <button onClick={() => hello()}>Unlink</button>
    </>
  );
};

export default ConnectFacebook;
