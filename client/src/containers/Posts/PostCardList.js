import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { setPosts } from '../../actions';
import { selectPost } from '../../actions';

import PostCard from '../../components/Posts/PostCard';
import Divider from '../../components/Divider/Divider';
import style from './PostCardList.module.scss';
import Error from '../../components/Error/Error';

class PostCardList extends React.Component {
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
    this.props.setPosts().then(data => {});
  };
  selectPostToShow = postId => {
    this.props.selectPost(postId).then(data => {
      this.props.showPost(data);
    });
  };
  render() {
    const message = this.props.posts.message;
    if (message) {
      return <Error message={message} />;
    }
    return (
      <div className={style.grid}>
        {this.props.posts.map(post => {
          if (!this.props.showRead && !post.read) {
            return (
              <div className={style.gridCell} key={post._id}>
                <PostCard selector={this.selectPostToShow} post={post} />
                <Divider card />
              </div>
            );
          } else if (this.props.showRead) {
            return (
              <div className={style.gridCell} key={post._id}>
                <PostCard selector={this.selectPostToShow} post={post} />
                <Divider card />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setPosts, selectPost }, dispatch);
};

const mapStateToProps = state => {
  return {
    posts: state.posts,
    selectPost: state.selectPost,
    selectModule: state.selectModule
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostCardList);
