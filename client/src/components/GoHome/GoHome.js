import React from 'react';

import style from './GoHome.module.scss';

class GoHome extends React.Component {
  handleClick = () => {
    this.props.goHome('Home');
  };
  render() {
    return (
      <div className={style.back} onClick={this.handleClick}>
        ⇤
      </div>
    );
  }
}

export default GoHome;
