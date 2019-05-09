import React from "react";
// import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { AppState } from "../../store";

import { checkUser } from "../../store/user/actions";
import Login from "../../components/Login";

import { AuthObj } from "../../types";

import {
  HomeScreen,
  Title,
  SubTitle,
  Screenshot,
  LogInButton
} from "../../styles/Home";
import { Menu } from "../../styles/Filter";

// import Home from "../../components/Home";
// import Content from "../../styles/Content";

interface props {
  checkUser: (arg0?: any) => any;
  toggleAuth: () => void;
  setUserEmail: (arg0: string) => void;
  setUserToken: (arg0: string) => void;
  cookies: any;
}

const Home = (props: props) => {
  const [authNew, setAuthNew] = React.useState(false);
  const [showLogin, setShowLogin] = React.useState(true);
  const [loginMessage, setLoginMessage] = React.useState("");
  const { cookies } = props;

  const cookiesCheck = (cProps: { email: string; token: string }) => {
    const query = {
      action: ["user", "cookiesCheck"],
      fields: cProps
    };
    props.checkUser(query).then((res: any) => {
      const response = res.payload.data;
      if (response.authed) {
        props.setUserEmail(cProps.email);
        props.setUserToken(cProps.token);
        props.toggleAuth();
      }
    });
  };

  const existingCookies = {
    email: cookies.get("email"),
    token: cookies.get("token")
  };
  if (cookies.get("email") && cookies.get("token")) {
    cookiesCheck(existingCookies);
  }

  const login = (lProps: AuthObj) => {
    const action = lProps.new ? "create" : "login";
    const query = {
      action: ["user", lProps.new ? "create" : action],
      id: "",
      fields: lProps.fields
    };
    props.checkUser(query).then((res: any) => {
      const response = res.payload.data;
      if (response.user === "new") {
        setAuthNew(true);
      } else if (response.status) {
        setLoginMessage("");

        props.setUserEmail(response.user.email);
        props.setUserToken(response.user.token);

        cookies.set("email", response.user.email, { path: "/" });
        cookies.set("token", response.user.token, { path: "/" });

        props.toggleAuth();
      } else {
        setLoginMessage(response.data.message);
      }
    });
  };

  return (
    <HomeScreen>
      <Title>The Newsletter</Title>
      <SubTitle>Just information.</SubTitle>
      <Screenshot />
      <LogInButton onClick={() => setShowLogin(!showLogin)}>
        Login or register
      </LogInButton>
      {showLogin ? (
        <Menu>
          <Login
            message={loginMessage}
            cookies={props.cookies}
            login={login}
            newUser={authNew}
          />
        </Menu>
      ) : null}
    </HomeScreen>
  );
};
const mapStateToProps = (state: AppState) => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { checkUser }
)(Home);
