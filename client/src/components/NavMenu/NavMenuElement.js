import React from 'react';

import style from './NavMenuElement.module.scss';

class NavMenuElement extends React.Component {
  handleClick = () => {
    if (this.props.name === 'Show/Hide Read') {
      this.props.options.showRead('');
      this.props.options.menuOpen('');
    } else {
      if (this.props.name !== 'toggle') {
        this.props.options.menuOpen('');
        this.props.options.show(this.props.name);
      } else {
        this.props.options.menuOpen('');
      }
    }
  };

  render() {
    let elementStyle = style.button;
    let button = this.props.name;
    if (button === 'toggle') {
      button = '⋮';
      if (this.props.options.menuStatus) {
        elementStyle = style.buttonArrowOpen;
      } else {
        elementStyle = style.buttonArrow;
      }
    }
    return (
      <div onClick={this.handleClick} className={elementStyle}>
        {button}
      </div>
    );
  }
}

export default NavMenuElement;
