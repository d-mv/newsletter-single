import React from 'react';

import PostCard from '../../components/Posts/PostCard';
import Divider from '../../components/Divider/Divider';
import style from './PostCardList.module.scss';
import Error from '../../components/Error/Error';

class PostCardList extends React.Component {
  selectPostToShow = props => {
    this.props.selectPost(props);
  };
  updatePostAction = props => {
    this.props.updatePost(props);
  };
  render() {
    if (this.props.message) {
      return <Error message={this.props.message} />;
    } else if (this.props.posts.length > 0) {
      return (
        <div className={style.grid}>
          {this.props.posts.map(post => {
            if (!this.props.showRead && !post.read) {
              return (
                <div className={style.gridCell} key={post._id}>
                  <PostCard
                    selector={[this.selectPostToShow, this.updatePostAction]}
                    post={post}
                  />
                  <Divider card />
                </div>
              );
            } else if (this.props.showRead) {
              return (
                <div className={style.gridCell} key={post._id}>
                  <PostCard
                    selector={[this.selectPostToShow, this.updatePostAction]}
                    post={post}
                  />
                  <Divider card />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default PostCardList;
