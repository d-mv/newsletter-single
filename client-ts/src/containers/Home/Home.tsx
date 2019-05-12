import React from "react";
import { connect } from "react-redux";
import { AppState } from "../../store";

import { checkUser } from "../../store/user/actions";
import Login from "../../components/Login";

import { AuthObj } from "../../types";

import style from "../../styles/Home.module.scss";

import "../../styles/_ui.scss";

interface props {
  checkUser: (arg0?: any) => any;
  toggleAuth: () => void;
  setUserEmail: (arg0: string) => void;
  setUserToken: (arg0: string) => void;
  cookies: any;
}

const Home = (props: props) => {
  const [authNew, setAuthNew] = React.useState(false);
  const [showLogin, setShowLogin] = React.useState(false);
  const [loginMessage, setLoginMessage] = React.useState("");
  const { cookies } = props;

  // const cookiesCheck = (cProps: { email: string; token: string }) => {
  //   const query = {
  //     action: ["user", "cookiesCheck"],
  //     fields: cProps
  //   };
  //   props.checkUser(query).then((res: any) => {
  //     const response = res.payload.data;
  //     if (response.authed) {
  //       props.setUserEmail(cProps.email);
  //       props.setUserToken(cProps.token);
  //       props.toggleAuth();
  //     }
  //   });
  // };

  // const existingCookies = {
  //   email: cookies.get("email"),
  //   token: cookies.get("token")
  // };
  // if (cookies.get("email") && cookies.get("token")) {
  //   cookiesCheck(existingCookies);
  // }

  const login = (lProps: AuthObj) => {
    const action = lProps.new ? "create" : "login";
    const query = {
      action: ["user", lProps.new ? "create" : action],
      id: "",
      fields: lProps.fields
    };
    props.checkUser(query).then((res: any) => {
      const response = res.payload.data;
      console.log(response);
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
    <main className={style.home}>
      <h1 className={style.title}>The Newsletter</h1>
      <h2 className={style.subTitle}>Just information.</h2>
      <div className={style.screenshot} />
      <div className={style.buttonWrapper}>
        <button className="button" onClick={() => setShowLogin(!showLogin)}>
          Login or register
        </button>
      </div>
      {showLogin ? (
        <div className="modal">
          <Login
            message={loginMessage}
            cookies={props.cookies}
            login={login}
            newUser={authNew}
          />
        </div>
      ) : null}
    </main>
  );
};
const mapStateToProps = (state: AppState) => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { checkUser }
)(Home);
