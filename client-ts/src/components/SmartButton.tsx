import React from "react";

import Style from "../styles/SmartButton";

const handleClick = (props: {
  mode: string;
  child: any;
  func: (arg?: string) => void;
}) => {
  if (props.child === "BACK" || props.child === "HOME") {
    props.func("posts");
  } else if (props.child === "SOURCES") {
    props.func("sources");
  } else if (props.mode === "profile") {
    props.func("profile");
  } else {
    props.func();
  }
};

const Button = (props: {
  children: any;
  mode: string;
  accent: boolean;
  function: () => void;
}) => {
  return (
    <Style
      accent={props.accent}
      onClick={() =>
        handleClick({
          mode: props.mode,
          child: props.children,
          func: props.function
        })
      }
    >
      {props.children}
    </Style>
  );
};

export default Button;
