import React from "react";
import { FaSyncAlt, FaEye, FaEyeSlash, FaFilter } from "react-icons/fa";

import SmartButton from "./SmartButton";
import Style from "../styles/SmartMenu";

const buttonElement = (props: {
  element: any;
  accent: boolean;
  function: (arg0?: string) => void;
}) => {
  return (
    <SmartButton accent={props.accent} function={props.function}>
      {props.element}
    </SmartButton>
  );
};

const SmartMenu = (props: {
  read: boolean;
  toggleRead: () => void;
  refresh: () => void;
  moduleToggle: (arg0?: string) => void;
  mode: string;
  showFilter: boolean;
  toggleFilter: () => void;
}) => {
  // homeButton
  let homeButton = buttonElement({
    element: props.mode === "post" ? "BACK" : "HOME",
    accent: false,
    function: props.moduleToggle
  });
  // sourcesButton
  let sourcesButton = buttonElement({
    element: "SOURCES",
    accent: false,
    function: props.moduleToggle
  });
  // showReadButton;
  let showReadButton = buttonElement({
    element: props.read ? <FaEye /> : <FaEyeSlash />,
    accent: props.read,
    function: props.toggleRead
  });

  // refreshButton;
  let refreshButton = buttonElement({
    element: <FaSyncAlt />,
    accent: false,
    function: props.toggleRead
  });
  // filterButton;
  // const filterAccent = props.showFilter ? false : true;
  let filterButton = buttonElement({
    element: <FaFilter />,
    accent: props.showFilter,
    function: props.toggleFilter
  });

  const profileButton = buttonElement({
    element: "PROFILE",
    accent: false,
    function: props.moduleToggle
  });

  return (
    <Style>
      {homeButton}
      {sourcesButton}
      {profileButton}
      {showReadButton}
      {refreshButton}
      {filterButton}
    </Style>
  );
  // toggleModule = event => {
  //   this.props.moduleToggle(event.target.innerText);
  // };
  // toggleFilter = () => {
  //   this.props.toggleFilter();
  // };
  // render = () => {

  // let homeBack = "HOME";

  // let filter = this.props.showFilter ? (
  //   <Filter
  //     list={this.props.sources}
  //     filterClick={this.props.filterClick}
  //     toggleFilter={() => this.toggleFilter()}
  //   />
  // ) : null;
  // let filterStyle = this.props.filter ? style.on : style.off;
  // let filterButton = (
  //   <button>
  //     <FaFilter className={filterStyle} onClick={() => this.toggleFilter()} />
  //   </button>
  // );
  // let showHide = (
  //   <button>
  //     {this.props.read ? (
  //       <FaEye onClick={this.props.readToggle} />
  //     ) : (
  //       <FaEyeSlash onClick={this.props.readToggle} />
  //     )}
  //   </button>
  // );

  // if (this.props.mode === "show") {
  //   filterButton = null;
  //   showHide = null;
  //   homeBack = "BACK";
  // } else if (this.props.mode === "SOURCES") {
  //   showHide = null;
  //   filterButton = null;
  // }

  // const homeBackButton = (
  //   <button className={style.text} onClick={this.toggleModule}>
  //     {homeBack}
  //   </button>
  // );
  // return (
  //   <section className={style.smartMenu}>
  //     {homeBackButton}
  //     <button className={style.text} onClick={this.toggleModule}>
  //       SOURCES
  //     </button>
  //     <button className={style.text}>PROFILE</button>
  //     <button>
  //       <FaSyncAlt onClick={this.props.refresh} className={style.refresh} />
  //     </button>
  //     {showHide}
  //     {filterButton}
  //     {filter}
  //   </section>
  // );
  // };
};
export default SmartMenu;
