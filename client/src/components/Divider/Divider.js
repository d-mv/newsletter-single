import React from 'react';

import style from './Divider.module.scss';
class Divider extends React.Component {
  render() {
    let dividerStyle = style.divider;
    if (this.props.card) dividerStyle = style.dividerCard;
    return <div className={dividerStyle} />;
  }
}
export default Divider;
