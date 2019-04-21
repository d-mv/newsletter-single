import React from 'react';

import PostCard from '../../components/Posts/PostCard';
import style from './PostCardList.module.scss';

class PostCardList extends React.Component {
  selectPostToShow = props => {
    this.props.selectPost(props);
  };
  updatePostAction = props => {
    this.props.updatePost(props);
  };

  checkPost = post => {
    if (!this.props.showRead && !post.read) {
      return (
        <PostCard
          key={post._id}
          selector={this.selectPostToShow}
          update={this.updatePostAction}
          post={post}
        />
      );
    } else if (this.props.showRead) {
      return (
        <PostCard
          key={post._id}
          selector={this.selectPostToShow}
          update={this.updatePostAction}
          post={post}
        />
      );
    } else {
      return null;
    }
  };
  render() {
    if (this.props.posts.length > 0) {
      return (
        <section className={style.flex}>
          {this.props.posts.map(post => {
            return this.checkPost(post);
          })}
        </section>
      );
    } else {
      return null;
    }
  }
}

export default PostCardList;
