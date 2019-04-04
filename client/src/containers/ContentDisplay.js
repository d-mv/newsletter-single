import React from 'react';
// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { updatePost } from '../actions';

import NavMenu from '../components/NavMenu/NavMenu';
import PostCardList from './Posts/PostCardList';
import SourcesList from './Sources/SourcesList';
import PostShow from '../components/Posts/PostShow';

class ContentDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      module: 'Home',
      menuOpen: false,
      showRead: false
    };
  }
  markRead = postId => {
    let action = ['post', 'update'];
    let fields = { read: true };
    const query = { id: postId, action: action, fields: fields };
    this.props.updatePost(query);
  };

  setPostToShow = post => {
    this.setState({ post: post.payload });
    this.showModule('show');
    this.markRead(post.payload._id);
  };
  showModule = module => {
    this.setState(state => ({ module: module }));
  };
  menuOpen = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };
  showRead = () => {
    this.setState({
      showRead: !this.state.showRead
    });
  };

  render() {
    const options = {
      show: this.showModule,
      menuOpen: this.menuOpen,
      menuStatus: this.state.menuOpen,
      showRead: this.showRead
    };
    let module = (
      <PostCardList
        showPost={this.setPostToShow}
        showRead={this.state.showRead}
      />
    );
    switch (this.state.module) {
      case 'show':
        module = <PostShow post={this.state.post} toggle={this.showModule} />;
        break;
      case 'Sources':
        module = <SourcesList />;
        break;
      default:
        break;
    }
    return (
      <div>
        {module}
        <NavMenu options={options} />
      </div>
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
)(ContentDisplay);
