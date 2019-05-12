import React from "react";

import style from "../../styles/SmartButton.module.scss";

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
  let styleClass;
  if (props.mode === "refresh") {
    styleClass = style.smartRotate;
  } else if (props.accent) {
    styleClass = style.smartAccented;
  } else {
    styleClass = style.smart;
  }
  return (
    <button
      className={styleClass}
      aria-label={props.mode}
      onClick={() =>
        handleClick({
          mode: props.mode,
          child: props.children,
          func: props.function
        })
      }
    >
      {props.children}
    </button>
  );
};

export default Button;
