import React from 'react';
import { FaSyncAlt, FaEye, FaEyeSlash, FaFilter } from 'react-icons/fa';

import Filter from '../../components/Filter/Filter';

import style from './SmartMenu.module.scss';

class SmartMenu extends React.Component {
  toggleModule = event => {
    this.props.moduleToggle(event.target.innerText);
  };
  toggleFilter = () => {
    this.props.toggleFilter();
  };
  render = () => {
    let homeBack = 'HOME';
    let filter = this.props.showFilter ? (
      <Filter
        list={this.props.sources}
        filterClick={this.props.filterClick}
        toggleFilter={() => this.toggleFilter()}
      />
    ) : null;

    let filterButton = (
      <button>
        <FaFilter onClick={() => this.toggleFilter()} />
      </button>
    );

    // showFilter={this.state.showFilter}
    // toggleFilter={this.toggleFilter}
    // filterClick={this.handleFilterClick}

    let showHide = (
      <button>
        {this.props.read ? (
          <FaEye onClick={this.props.readToggle} />
        ) : (
          <FaEyeSlash onClick={this.props.readToggle} />
        )}
      </button>
    );

    if (this.props.mode === 'show') {
      filterButton = null;
      showHide = null;
      homeBack = 'BACK';
    } else if (this.props.mode === 'SOURCES') {
      showHide = null;
      filterButton = null;
    }

    const homeBackButton = (
      <button className={style.text} onClick={this.toggleModule}>
        {homeBack}
      </button>
    );
    return (
      <section className={style.smartMenu}>
        {homeBackButton}
        <button>
          <FaSyncAlt onClick={this.props.refresh} className={style.refresh} />
        </button>
        {showHide}
        {filterButton}
        {filter}
        <button className={style.text} onClick={this.toggleModule}>
          SOURCES
        </button>
      </section>
    );
  };
}
export default SmartMenu;
