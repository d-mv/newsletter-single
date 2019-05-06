import React from "react";

import { LoginForm, Label, Submit, Error } from "../styles/LoginForm";

const Login = (props: { login: (arg0: any) => void }) => {
  const [userName, setUserName] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [error, setErrors] = React.useState(false);
  let errors = {
    name: "",
    email: "",
    password: ""
  };

  const checkName = (name: string) => {
    console.log("hi");
    const check = name.length > 3 ? true : false;
    if (check) {
      errors.name = "";
    } else {
      errors.name = "Name is too short";
    }
    return check;
  };

  const checkPassword = (pass: string) => {
    const check = pass.length > 6 ? true : false;
    if (check) {
      errors.password = "";
    } else {
      errors.password = "Password too short";
    }
    return check;
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const check = checkName(userName) && checkPassword(userPassword);
    setErrors(check);

    if (check) {
      const authObj = {
        name: userName,
        email: userEmail,
        pass: userPassword
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
  const errorsBlock = `${errors.name}\n${errors.password}\n${errors.email}`;
  return (
    <LoginForm>
      <form onSubmit={handleSubmit}>
        <label>
          <Label>Name</Label>
          <input
            type="text"
            name="uName"
            value={userName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <Label>Password</Label>
          <input
            type="password"
            name="uPass"
            value={userPassword}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <Label>Email</Label>
          <input
            type="email"
            name="uMail"
            value={userEmail}
            onChange={handleInputChange}
          />
        </label>
        <Error>{errorsBlock}</Error>
        <Submit>
          <input type="button" value="Submit" id="submit_button" />
        </Submit>
      </form>
    </LoginForm>
  );
};

export default Login;
