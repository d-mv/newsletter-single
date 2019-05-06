import React from "react";

import Login from "./Login";
import { LogInButton } from "../styles/Home";
import {
  Menu,
  ButtonsWrapper,
  ButtonClear,
  ButtonSource
} from "../styles/Filter";

const Home = (props: {
  login: (arg0: any) => void;
  check: (arg0?: any) => void;
}) => {
  const [showLogIn, setLogIn] = React.useState(false);
  console.log(showLogIn);
  return (
    <div>
      <LogInButton onClick={() => setLogIn(!showLogIn)}>
        LogIn button
      </LogInButton>
      <LogInButton onClick={() => props.check()}>
        Check user
      </LogInButton>
      {showLogIn ? (
        <Menu>
          <Login login={props.login} />
        </Menu>
      ) : null}
    </div>
  );
};

export default Home;
