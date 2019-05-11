import React from "react";

import Title from "./Title";
import DateTime from '../Timestamp'
import style from "../../styles/Header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <Title />
      <DateTime date={new Date()} />
    </header>
  );
};

export default Header;
