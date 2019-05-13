import React from "react";
import { connect } from "react-redux";
import { AppState } from "../store";

import { setFilter } from "../store/source/actions";
import { toggleShowFilter } from "../store/app/actions";

import style from "../styles/Filter.module.scss";

const Filter = (props: {
  setFilter: (arg0: string) => any;
  filterSourceId: string;
  toggleShowFilter: (arg0: boolean) => void;
  sources: any;
  showFilter: boolean;
}) => {
  const buttonClear =
    props.filterSourceId === "" ? null : (
      <button
        className={style.clear}
        aria-label="Clear filter"
        onClick={() => props.setFilter("")}
      >
        Clear Filter
      </button>
    );
  const buttons = props.sources.data.map((source: any) => {
    const buttonStyle =
      source._id === props.filterSourceId ? style.sourceAccented : style.source;
    return (
      <button
        className={buttonStyle}
        aria-label={source.name}
        key={source._id}
        onClick={() => props.setFilter(source._id)}
        data-test="component-filter-item"
      >
        {source.name}
      </button>
    );
  });
  return (
    <div
      className={style.modal}
      data-test="container-filter"
      onClick={() => props.toggleShowFilter(props.showFilter)}
    >
      <section className={style.buttonsWrapper}>
        {buttonClear}
        {buttons}
      </section>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  filterSourceId: state.filterSourceId,
  sources: state.sources,
  showFilter: state.showFilter
});

export default connect(
  mapStateToProps,
  {
    setFilter,
    toggleShowFilter
  }
)(Filter);
