import React from "react";

import Title from "./Title";
import DateTime from '../DateTime'
import Style from "../../styles/Header";

const Header = () => {
  return (
    <Style>
      <Title />
      <DateTime date={new Date()} />
    </Style>
  );
};

export default Header;
