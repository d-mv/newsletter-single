import React from "react";

import dateTime from "../bin/dateTime";

import { DateTimeTitle } from "../styles/DateTime";

const DateTime = (props: { date: Date }) => {
  return <DateTimeTitle>{dateTime(props.date)}</DateTimeTitle>;
};

export default DateTime;
