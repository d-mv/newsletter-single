import React from 'react';

import { FaEdit, FaTrash } from 'react-icons/fa';

import style from './SourceButton.module.scss';

class SourceButton extends React.Component {
  handleClick = () => {
    if (this.props.type === 'add') this.props.show('');
    if (this.props.type === 'delete') this.props.sourceDelete('');
    if (this.props.type === 'refresh') this.props.refresh('');
    if (this.props.type === 'edit')
      this.props.toggleEditSource(this.props.sourceId);
  };
  render() {
    let button = 'Add Source';
    let buttonStyle = style.button;
    switch (this.props.type) {
      case 'edit':
        button = <FaEdit />;
        break;
      case 'refresh':
        button = 'Refresh';
        buttonStyle = style.refreshSource;
        break;
      case 'add':
        buttonStyle = style.addSource;
        break;
      default:
        button = <FaTrash />;
    }
    return (
      <button className={buttonStyle} onClick={this.handleClick}>
        {button}
      </button>
    );
  }
}

export default SourceButton;
