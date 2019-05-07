import React from "react";

import Login from "./Login";

import { AuthObj } from "../types";

import { LogInButton } from "../styles/Home";
import { Menu } from "../styles/Filter";

const Home = (props: { login: (arg0: AuthObj) => any; newUser: boolean }) => {
  const [showLogIn, setLogIn] = React.useState(false);
  return (
    <div>
      <LogInButton onClick={() => setLogIn(!showLogIn)}>
        LogIn button
      </LogInButton>
      {showLogIn ? (
        <Menu>
          <Login login={props.login} newUser={props.newUser} />
        </Menu>
      ) : null}
    </div>
  );
};

export default Home;
