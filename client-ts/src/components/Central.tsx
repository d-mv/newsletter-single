import React from "react";

import Center from "../styles/Center";

const Central = (props: {
  message: string;
  children?: any;
  function?: () => void;
  // close?: () => void;
}) => {
  if (props.children) {
  }
  return (
    <Center>
      {props.message}
      {props.children ? (
        <h1 onClick={props.function}>{props.children}</h1>
      ) : null}
    </Center>
  );
};

export default Central;
