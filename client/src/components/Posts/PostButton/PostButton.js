import React from 'react';

import style from './PostButton.module.scss';

class PostButton extends React.Component {
  updatePost = () => {
    this.props.action(this.props.type);
  };

  render() {
    let button = '✘';
    let buttonStyle = style.delete;
    switch (this.props.type) {
      case 'star':
        button = '✓';
        buttonStyle = style.button;
        if (this.props.value) {
          buttonStyle = style.on;
        }
        break;
      case 'read':
        button = '◎';
        buttonStyle = style.read;
        if (this.props.value) {
          button = '◉';
          buttonStyle = style.unRead;
        }
        break;
      default:
        break;
    }
    return (
      <button className={buttonStyle} onClick={this.updatePost}>
        {button}
      </button>
    );
  }
}

export default PostButton;
