import React from 'react';

import * as style from './Filter.module.scss';

const handleClick = (func, element) => {
  func(element);
};

const Filter = props => {
  if (!props.list) return null;
  return (
    <section
      className={style.menuWrapper}
      data-test="container-filter"
      onClick={() => props.toggleFilter()}
    >
      <div>
        {props.list.map(element => {
          return (
            <button
              key={element._id}
              onClick={() => handleClick(props.filterClick, element._id)}
              data-test="component-filter-item"
            >
              {element.name}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Filter;
