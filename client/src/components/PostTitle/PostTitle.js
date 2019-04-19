import React from 'react';

import style from './PostTitle.module.scss';
class PostTitle extends React.Component {
  handleClick = () => {
    this.props.selector();
  };
  render() {
    let postTitleStyle = style.postTitle;
    if (this.props.mode === 'show') {
      postTitleStyle = style.postTitleShow;
    }
    return (
      <header onClick={this.handleClick} className={postTitleStyle}>
        {this.props.postTitle}
      </header>
    );
  }
}
export default PostTitle;
