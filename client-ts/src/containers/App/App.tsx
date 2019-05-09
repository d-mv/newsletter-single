import React from "react";
import { withCookies } from "react-cookie";

import Home from "../Home/Home";
import Content from "../Content/Content";

const App = (props?: any) => {
  const [userEmail, setUserEmail] = React.useState("");
  const [userToken, setUserToken] = React.useState("");
  const [authStatus, setAuthStatus] = React.useState(false);
  const { cookies } = props;

  const toggleAuth = () => {
    setAuthStatus(!authStatus);
  };
  const signOff = () => {
    cookies.set("email", "", {
      path: "/"
    });
    cookies.set("token", "", {
      path: "/"
    });
    setUserEmail("");
    setUserToken("");
    setAuthStatus(false);
  };
  return authStatus ? (
    <Content
      currentUser={{ email: userEmail, token: userToken }}
      signOff={signOff}
    />
  ) : (
    <Home
      cookies={props.cookies}
      toggleAuth={toggleAuth}
      setUserEmail={setUserEmail}
      setUserToken={setUserToken}
    />
  );
};

export default withCookies(App);
