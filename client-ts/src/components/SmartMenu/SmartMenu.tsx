import React from "react";
import { connect } from "react-redux";
import { FaSyncAlt, FaEye, FaEyeSlash, FaFilter, FaUser } from "react-icons/fa";

import { AppState } from "../../store";

import SmartButton from "./SmartButton";

import style from "../../styles/SmartMenu.module.scss";

const buttonElement = (props: {
  element: any;
  mode: string;
  accent: boolean;
  function?: (arg0?: string) => void;
}) => {
  return (
    <SmartButton
      accent={props.accent}
      mode={props.mode}
      function={props.function}
    >
      {props.element}
    </SmartButton>
  );
};

const SmartMenu = (props: {
  showRead: boolean;
  filterSourceId: string;
  // toggleFilter: () => void;
  module: string;
}) => {
  // homeButton
  let homeButton = buttonElement({
    element: props.module === "post" ? "BACK" : "HOME",
    mode: "home",
    accent: false
  });
  // sourcesButton
  let sourcesButton = buttonElement({
    element: "SOURCES",
    mode: "sources",
    accent: false
  });
  // showReadButton;
  let showReadButton =
    props.module === "posts"
      ? buttonElement({
          element: props.showRead ? <FaEye /> : <FaEyeSlash />,
          mode: "showRead",
          accent: props.showRead
        })
      : null;

  // refreshButton;
  let refreshButton =
    props.module === "posts"
      ? buttonElement({
          element: <FaSyncAlt />,
          mode: "refresh",
          accent: false
        })
      : null;
  // filterButton;
  let filterButton =
    props.module === "posts"
      ? buttonElement({
          element: <FaFilter />,
          mode: "filter",
          accent: props.filterSourceId !== ''
        })
      : null;

  const profileButton = buttonElement({
    element: <FaUser />,
    mode: "profile",
    accent: false
  });

  return (
    <nav className={style.menu}>
      {homeButton}
      {sourcesButton}
      {showReadButton}
      {filterButton}
      {refreshButton}
      {profileButton}
    </nav>
  );
};
const mapStateToProps = (state: AppState) => ({
  module: state.module,
  showRead: state.showRead,
  filterSourceId: state.filterSourceId
});

export default connect(mapStateToProps)(SmartMenu);
