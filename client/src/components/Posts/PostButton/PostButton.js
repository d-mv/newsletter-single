import React from 'react';
import { FaCheck, FaCheckDouble, FaTrash } from 'react-icons/fa';
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti';

import style from './PostButton.module.scss';

class PostButton extends React.Component {
  updatePost = () => {
    this.props.action(this.props.type);
  };

  render() {
    let button = <FaTrash />;
    let buttonStyle = style.delete;
    switch (this.props.type) {
      case 'star':
        button = <TiStarOutline />;
        buttonStyle = style.button;
        if (this.props.value) {
          button = <TiStarFullOutline />;
          buttonStyle = style.on;
        }
        break;
      case 'read':
        button = <FaCheck />;
        buttonStyle = style.read;
        if (this.props.value) {
          button = <FaCheckDouble />;
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
