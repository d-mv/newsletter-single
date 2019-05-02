import React from "react";
import { FaCheck, FaCheckDouble } from "react-icons/fa";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";

import Line from "./PostElements/PostLine";
import Footer from "./PostElements/PostFooter";
import { Post } from "../store/post/types";

import { Card, Title, Text } from "../styles/PostCard";

// const handleClickSelect = (props: {func: (arg:any)=> any, id: string}) => {
//   console.log(props)
//   props.func(props.id)
// }

const PostCard = (props: {
  post: Post;
  update: (arg0: any) => void;
  select: (arg0: any) => void;
}) => {
  const text = `${props.post.text.replace(/<(?:.|\n)*?>/gm, " ")}...`;

  const starButton = props.post.star ? (
    <TiStarFullOutline />
  ) : (
    <TiStarOutline />
  );
  const readButton = props.post.read ? <FaCheckDouble /> : <FaCheck />;
  return (
    <Card>
      <Title
        onClick={() => {
          props.select({ id: props.post._id });
        }}
      >
        {props.post.title}
      </Title>
      <Line
        source={props.post.source}
        author={props.post.author}
        buttons={{ star: starButton, read: readButton }}
        read={props.post.read}
        star={props.post.star}
        update={props.update}
        id={props.post._id}
      />
      <Text
        onClick={() => {
          props.select({ id: props.post._id });
        }}
      >
        {text}
      </Text>
      <Footer
        timestamp={props.post.published}
        readingTime={props.post.readTime}
      />
    </Card>
  );
};

export default PostCard;
