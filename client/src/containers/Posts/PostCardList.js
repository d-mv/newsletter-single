import React from 'react';

import PostCard from '../../components/Posts/PostCard';
import style from './PostCardList.module.scss';
import Error from '../../components/Error/Error';

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
          selector={[this.selectPostToShow, this.updatePostAction]}
          post={post}
        />
      );
    } else {
      return null;
    }
  };
  render() {
    if (this.props.message) {
      return <Error message={this.props.message} />;
    } else if (this.props.posts.length > 0) {
      return (
        <section className={style.content}>
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
