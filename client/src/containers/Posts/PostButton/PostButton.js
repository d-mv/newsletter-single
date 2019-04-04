import React from 'react';
// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { updatePost } from '../../../actions';

import style from './PostButton.module.scss';

class PostButton extends React.Component {
  updatePost = () => {
    let action = '';
    switch (this.props.type) {
      case 'delete':
        action = ['post', 'delete'];
        break;
      default:
        action = ['post', 'update'];
        break;
    }
    let fields = {};
    fields[`${this.props.type}`] = !this.props.value;
    const query = { id: this.props.postId, action: action, fields: fields };
    this.props.updatePost(query);
    if (this.props.toggle) {
      this.props.toggle('Home');
    }
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updatePost: updatePost }, dispatch);
};

const mapStateToProps = state => {
  return {
    updatePost: state.updatePost
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostButton);
