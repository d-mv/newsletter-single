import React from 'react';
// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { updatePost } from '../../actions';
import { setPosts } from '../../actions';
import { selectPost } from '../../actions';
import { refreshPosts } from '../../actions';

import NavMenu from '../../components/NavMenu/NavMenu';
import SmartMenu from '../../components/SmartMenu/SmartMenu';
import PostCardList from '../Posts/PostCardList';
import SourcesList from '../Sources/SourcesList';
import PostShow from '../Posts/PostShow';

import style from './ContentDisplay.module.scss';

class ContentDisplay extends React.Component {
  state = {
    post: {},
    posts: [],
    module: 'Home',
    menuOpen: false,
    showRead: false
  };
  handleRefreshClick = () => {
    this.props.refreshPosts();
  };
  componentWillMount() {
    this.fetchPosts();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchPosts, 5000);
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchPosts = () => {
    this.props.setPosts().then(data => this.setState({ posts: data.payload }));
  };

  updateStatePosts = props => {
    const updatedPosts = [];
    this.state.posts.forEach(post => {
      if (post._id === props.postId) {
        const newPost = post;
        newPost[`${props.field}`] = props.value;
        updatedPosts.push(newPost);
      } else {
        updatedPosts.push(post);
      }
    });
    this.setState({ posts: updatedPosts });
  };

  updatePostAction = props => {
    let action = '';
    switch (props.action) {
      case 'delete':
        action = ['post', 'delete'];
        break;
      default:
        action = ['post', 'update'];
        break;
    }
    let fields = {};
    fields[`${props.field}`] = props.value;
    const query = { id: props.postId, action: action, fields: fields };
    this.updateStatePosts({
      field: props.field,
      value: props.value,
      postId: props.postId
    });
    this.props.updatePost(query);
    if (props.action === 'delete' && props.module === 'show') {
      this.showModule('Home');
    }
  };

  selectPostToShow = postId => {
    console.log('select post to show');
    this.updatePostAction({
      action: 'update',
      field: 'read',
      value: true,
      postId: postId
    });
    this.props.selectPost(postId).then(data => {
      this.showModule('show');
      this.setState({ post: data.payload });
    });
  };

  showModule = module => {
    this.setState({ module: module });
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
        showRead={this.state.showRead}
        posts={this.state.posts}
        message={this.props.posts.message}
        selectPost={this.selectPostToShow}
        updatePost={this.updatePostAction}
      />
    );
    switch (this.state.module) {
      case 'show':
        module = (
          <PostShow
            post={this.state.post}
            star={this.state.post.star}
            updatePost={this.updatePostAction}
          />
        );
        break;
      case 'Sources':
        module = <SourcesList />;
        break;
      default:
        break;
    }

    return (
      <div className={style.contentDisplay}>
        <SmartMenu
          read={this.state.showRead}
          readToggle={this.showRead}
          refresh={this.handleRefreshClick}
          moduleToggle={this.showModule}
          mode={this.state.module}
        />
        {module}
        <NavMenu options={options} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { setPosts, selectPost, updatePost, refreshPosts },
    dispatch
  );
};

const mapStateToProps = state => {
  return {
    posts: state.posts,
    selectPost: state.selectPost,
    selectModule: state.selectModule,
    updatePost: state.updatePost
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentDisplay);
