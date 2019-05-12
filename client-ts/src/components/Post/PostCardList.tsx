import React from "react";
import { connect } from "react-redux";
import { AppState } from "../../store";

import {
  loadPosts,
  setPosts,
  updatePost,
  selectPost
} from "../../store/post/actions";

import PostCard from "./PostCard";
import { Post } from "../../store/post/types";
import style from "../../styles/PostCardList.module.scss";

const postCardComponent = (props: {
  post: Post;
  update: (arg0: any) => void;
  select: (arg0: any) => void;
}) => {
  return (
    <PostCard
      key={props.post._id}
      post={props.post}
      update={props.update}
      select={props.select}
    />
  );
};

const postCheck = (props: {
  show: boolean;
  filter: string;
  pRead: boolean;
  pSource: string;
}) => {
  if (props.filter) {
    if (props.show) {
      return props.pSource === props.filter;
    } else {
      return props.pRead === props.show && props.pSource === props.filter;
    }
  } else {
    if (props.show) {
      return true;
    } else {
      return props.pRead === props.show;
    }
  }
};

const PostCardList = (props: {
  showRead: boolean;
  posts: any;
  selectPost: (arg0: any) => void;
  update: (arg0: any) => void;
  filter: string;
}) => {
  return (
    <div className={style.list}>
      {props.posts.map((post: Post) => {
        const postCall = postCardComponent({
          post: post,
          update: props.update,
          select: props.selectPost
        });
        return postCheck({
          show: props.showRead,
          filter: props.filter,
          pRead: post.read,
          pSource: post.sourceId
        })
          ? postCall
          : null;
      })}
    </div>
  );
};

export default PostCardList;

// const mapStateToProps = (state: AppState) => ({
//   // posts: state.posts
//   // sources: state.sources,
//   // user: state.user,
//   // thisUser: state.currentUser
// });

// export default connect(
//   mapStateToProps,
//   { loadPosts, updatePost, selectPost }
// )(PostCardList);
