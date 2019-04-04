import React from 'react';

import style from './Source.module.scss';
class Source extends React.Component {
  render() {
    let sourceStyle = style.source;
    if (this.props.mode === 'show') {
      sourceStyle = style.sourceShow;
    }
    return <div className={sourceStyle}>@ {this.props.source}</div>;
  }
}
export default Source;
