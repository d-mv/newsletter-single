import React from "react";

import Style from "../styles/SmartButton";



const Button = (props: {
  children: any;
  accent: boolean;
  function: () => void;
}) => {
  return (
    <Style accent={props.accent} onClick={() => props.function()}>
      {props.children}
    </Style>
  );
};

export default Button;
