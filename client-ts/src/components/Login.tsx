import React from "react";

// import { LoginForm, Title, Label, Submit, Error } from "../styles/LoginForm";
import style from '../styles/LoginForm.module.scss'

const Login = (props: {
  message: string;
  cookies: any;
  login: (arg0: any) => any;
  newUser: boolean;
}) => {
  const [userName, setUserName] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [nameError, setNameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

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

  const handleSubmit = (event: any) => {
    event.preventDefault();

    let check;
    if (props.newUser) {
      check =
        checkName(userName) &&
        checkEmail(userEmail) &&
        checkPassword(userPassword);
    } else {
      check = checkEmail(userEmail) && checkPassword(userPassword);
    }
    if (check) {
      const authObj = {
        new: props.newUser,
        fields: {
          name: userName,
          email: userEmail,
          password: userPassword
        }
      };
      props.login(authObj);
    }
  };

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

  const nameEnter = props.newUser ? (
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
  const formStyle = props.newUser ? style.loginTall : style.login;
  const title = props.newUser ? "Register new user" : "Login details";

  const inputErrors = (
    <div className={style.error}>
      {nameError ? <li>{nameError}</li> : null}
      {emailError ? <li>{emailError}</li> : null}
      {passwordError ? <li>{passwordError}</li> : null}
      {props.message ? <li>{props.message}</li> : null}
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
          aria-label={props.newUser ? "Register" : "Login"}
        >
          <input
            type="button"
            value={props.newUser ? "Register" : "Login"}
            id="submit_button"
          />
        </button>
      </form>
    </section>
  );
};

export default Login;
