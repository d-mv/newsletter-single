import React from "react";

import PostCard from "./PostCard";
import { Post } from "../store/post/types";
import { PostListStyle } from "../styles/PostCardList";

const postCardComponent = (props: {
  post: Post;
  update: (arg0: any) => void;
  select: (arg0: any) => void;
}) => {
  return (<PostCard
    key={props.post._id}
    post={props.post}
    update={props.update}
    select={props.select}
  />);
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
        if (props.showRead) {
          return postCardComponent({
            post: post,
            update: props.update,
            select: props.selectPost
          });
        } else {
          if (!post.read) {
            return postCardComponent({
              post: post,
              update: props.update,
              select: props.selectPost
            });
          } else {
            return null
          }
        }
      })}
    </PostListStyle>
  );
};

export default PostCardList;
