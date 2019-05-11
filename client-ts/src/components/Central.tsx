import React from "react";

// import Center from "../styles/Center";
import '../styles/_ui.scss'

const Central = (props: {
  message: string;
  children?: any;
  function?: () => void;
  // close?: () => void;
}) => {
  if (props.children) {
  }
  return (
    <section className="central">
      {props.message}
      {props.children ? (
        <h1 onClick={props.function}>{props.children}</h1>
      ) : null}
    </section>
  );
};

export default Central;
