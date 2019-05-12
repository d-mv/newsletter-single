import React from "react";

import { withCookies } from "react-cookie";
import { connect } from "react-redux";
import { AppState } from "../store";
import { AuthObj } from "../types";
import {
  CHECK_USER,
  UserQuery,
  CURRENT_USER,
  CurrentUser
} from "../store/user/types";

import { checkUser, currentUser, setAuthStatus } from "../store/user/actions";

import style from "../styles/LoginForm.module.scss";

const Login = (props: {
  checkUser: (arg0?: any) => any;
  currentUser: (arg0: CurrentUser) => any;
  // message: string;
  setAuthStatus: (arg0:boolean)=>any;
  cookies: any;
  // login: (arg0: any) => any;
  // newUser: boolean;
}) => {
  const [userName, setUserName] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [nameError, setNameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const [authNew, setAuthNew] = React.useState(false);
  const [showLogin, setShowLogin] = React.useState(false);
  const [loginMessage, setLoginMessage] = React.useState("");

  const { cookies } = props;

  const checkName = (name: string) => {
    const check = name.length > 3 ? true : false;
    if (check) {
      setNameError("");
    } else {
      setNameError("Name is too short");
    }
    return check;
  };

  const checkEmail = (mail: string) => {
    const check = mail.length > 0 ? true : false;
    if (check) {
      setEmailError("");
    } else {
      setEmailError("Email is missing");
    }
    return check;
  };

  const checkPassword = (pass: string) => {
    const check = pass.length > 6 ? true : false;
    if (check) {
      setPasswordError("");
    } else {
      setPasswordError("Password too short");
    }
    return check;
  };

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
        props.currentUser({
          token: response.user.token,
          email: response.user.email
        });
        props.setAuthStatus(true)
        cookies.set("email", response.user.email, { path: "/" });
        cookies.set("token", response.user.token, { path: "/" });
      } else {
        setLoginMessage(response.data.message);
      }
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    let check;
    if (authNew) {
      check =
        checkName(userName) &&
        checkEmail(userEmail) &&
        checkPassword(userPassword);
    } else {
      check = checkEmail(userEmail) && checkPassword(userPassword);
    }
    if (check) {
      const authObj = {
        new: authNew,
        fields: {
          name: userName,
          email: userEmail,
          password: userPassword
        }
      };
      login(authObj);
    }
  };

  // const test = () => {
  //   props.currentUser({ token: "1234", email: "222@222.222" });
  // };

  // test();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "uName":
        setUserName(event.target.value);
        break;
      case "uPass":
        setUserPassword(event.target.value);
        break;
      default:
        setUserEmail(event.target.value);
        break;
    }
  };

  const nameEnter = authNew ? (
    <label>
      <span className={style.label}>Name</span>
      <input
        type="text"
        name="uName"
        value={userName}
        onChange={handleInputChange}
      />
    </label>
  ) : null;
  const formStyle = authNew ? style.loginTall : style.login;
  const title = authNew ? "Register new user" : "Login details";

  const inputErrors = (
    <div className={style.error}>
      {nameError ? <li>{nameError}</li> : null}
      {emailError ? <li>{emailError}</li> : null}
      {passwordError ? <li>{passwordError}</li> : null}
      {loginMessage ? <li>{loginMessage}</li> : null}
    </div>
  );

  return (
    <section className={formStyle}>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        {nameEnter}
        <label>
          <span className={style.label}>Email</span>
          <input
            type="email"
            name="uMail"
            value={userEmail}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <span className={style.label}>Password</span>
          <input
            type="password"
            name="uPass"
            value={userPassword}
            onChange={handleInputChange}
          />
        </label>
        {inputErrors}
        <button
          className={style.submit}
          aria-label={authNew ? "Register" : "Login"}
        >
          <input
            type="button"
            value={authNew ? "Register" : "Login"}
            id="submit_button"
          />
        </button>
      </form>
    </section>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    user: state.user,
    authStatus: state.authStatus
  };
};

export default connect(
  mapStateToProps,
  { checkUser, currentUser, setAuthStatus }
)(withCookies(Login));
