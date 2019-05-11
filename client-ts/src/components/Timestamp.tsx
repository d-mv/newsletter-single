import React from "react";

import dateTime from "../modules/dateTime";

import style from "../styles/Timestamp.module.scss";

const Timestamp = (props: { date: Date }) => {
  return <h3 className={style.title}>{dateTime(props.date)}</h3>;
};

export default Timestamp;
