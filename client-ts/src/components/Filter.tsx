import React from "react";

import {
  Menu,
  ButtonsWrapper,
  ButtonClear,
  ButtonSource
} from "../styles/Filter";

// const handleClick = (props:{func:(arg0:string)=>void, id:string}) => {
//   func(id)
// };

const Filter = (props: {
  toggle: () => void;
  list: any[];
  choose: (id: string) => void;
  id: string;
}) => {
  const buttonClear =
    props.id === "" ? null : (
      <ButtonClear onClick={() => props.choose("clear")}>
        Clear Filter
      </ButtonClear>
    );
  const buttons = props.list.map(source => {
    return (
      <ButtonSource
        key={source._id}
        accent={source._id === props.id}
        onClick={() => props.choose(source._id)}
        data-test="component-filter-item"
      >
        {source.name}
      </ButtonSource>
    );
  });
  return (
    <Menu data-test="container-filter" onClick={() => props.toggle()}>
      <ButtonsWrapper>
        {buttonClear}
        {buttons}
      </ButtonsWrapper>
    </Menu>
  );
};

export default Filter;
