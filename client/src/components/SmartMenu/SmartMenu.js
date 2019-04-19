import React from 'react';

import { FaSyncAlt, FaEye, FaEyeSlash } from 'react-icons/fa';

import style from './SmartMenu.module.scss';

class SmartMenu extends React.Component {
  toggleModule = event => {
    this.props.moduleToggle(event.target.innerText);
  };
  render = () => {
    let homeBack = 'Home';
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
      showHide = null;
      homeBack = 'BACK';
    } else if (this.props.mode === 'Sources') {
      showHide = null;
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
        <button className={style.text} onClick={this.toggleModule}>
          Sources
        </button>
      </section>
    );
  };
}
export default SmartMenu;
