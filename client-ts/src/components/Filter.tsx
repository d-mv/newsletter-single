import React from "react";

// import {
//   Menu,
//   ButtonsWrapper,
//   ButtonClear,
//   ButtonSource
// } from "../styles/Filter";
import style from "../styles/Filter.module.scss";

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
      <button className={style.clear} onClick={() => props.choose("clear")}>
        Clear Filter
      </button>
    );
  const buttons = props.list.map(source => {
    const buttonStyle = source._id === props.id ? style.sourceAccented : style.source
    return (
      <button
        className={buttonStyle}
        key={source._id}
        onClick={() => props.choose(source._id)}
        data-test="component-filter-item"
      >
        {source.name}
      </button>
    );
  });
  return (
    <div className={style.modal} data-test="container-filter" onClick={() => props.toggle()}>
      <section className={style.buttonsWrapper}>
        {buttonClear}
        {buttons}
      </section>
    </div>
  );
};

export default Filter;
