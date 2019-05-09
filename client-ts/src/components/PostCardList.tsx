import React from "react";

import PostCard from "./PostCard";
import { Post } from "../store/post/types";
import { PostListStyle } from "../styles/PostCardList";

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
    <PostListStyle>
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
    </PostListStyle>
  );
};

export default PostCardList;
