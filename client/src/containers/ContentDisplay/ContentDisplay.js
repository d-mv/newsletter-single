import React from 'react';
// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { updatePost } from '../../actions';
import { setPosts } from '../../actions';
import { selectPost } from '../../actions';
import { refreshPosts } from '../../actions';
import { setSources } from '../../actions';
import { addSource } from '../../actions';
import { deleteSource } from '../../actions';
import { updateSource } from '../../actions';

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
    sources: [],
    sourceList: [],
    module: 'HOME',
    menuOpen: false,
    showRead: false,
    actionMessage: ''
  };
  handleRefreshClick = () => {
    this.props.refreshPosts().then(() => {
      this.updateMessage('Posts refreshed.');
    });
  };
  componentWillMount() {
    this.fetchPostsSources();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchPostsSources, 5000);
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchPostsSources = () => {
    this.props.setPosts().then(data => {
      this.setState({
        posts: data.payload
      });
      this.updateMessage(data.payload.message);
    });
    this.props.setSources().then(data => {
      this.setState({
        sources: data.payload
      });
      this.updateMessage(data.payload.message);
    });
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
    this.props
      .updatePost(query)
      .then(() => this.updateMessage('Post updated.'));
    if (props.action === 'delete' && props.module === 'show') {
      this.showModule('HOME');
    }
  };

  selectPostToShow = postId => {
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

  updateMessage = message => {
    this.setState({ actionMessage: message });
    setInterval(() => this.setState({ actionMessage: '' }), 6000);
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
        selectPost={this.selectPostToShow}
        updatePost={this.updatePostAction}
      />
    );
    switch (this.state.module) {
      case 'show':
        module = (
          <PostShow post={this.state.post} updatePost={this.updatePostAction} />
        );
        break;
      case 'SOURCES':
        module = (
          <SourcesList
            sources={this.state.sources}
            addSource={this.props.addSource}
            deleteSource={this.props.deleteSource}
            updateSource={this.props.updateSource}
          />
        );
        break;
      default:
        break;
    }

    return (
      <div className={style.contentDisplay}>
        <div className={style.actionMessage}>{this.state.actionMessage}</div>
        <SmartMenu
          read={this.state.showRead}
          readToggle={this.showRead}
          refresh={this.handleRefreshClick}
          moduleToggle={this.showModule}
          mode={this.state.module}
          sources={this.state.sources}
        />
        {module}
        <NavMenu options={options} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setPosts,
      selectPost,
      updatePost,
      refreshPosts,
      setSources,
      addSource,
      deleteSource,
      updateSource
    },
    dispatch
  );
};

const mapStateToProps = state => {
  return {
    posts: state.posts,
    selectPost: state.selectPost,
    selectModule: state.selectModule,
    updatePost: state.updatePost,
    sources: state.sources,
    addSource: state.addSource,
    deleteSource: state.deleteSource,
    updateSource: updateSource
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentDisplay);
