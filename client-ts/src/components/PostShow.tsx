import React from "react";
import { FaTrash } from "react-icons/fa";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";

import { Post } from "../store/post/types";
import Line from "./PostElements/PostLine";
import Footer from "./PostElements/PostFooter";

import { Show, Title, Text } from "../styles/PostShow";
import style from "../styles/PostTextStyle.module.scss";

const handleTitleClick = (props: { link: string }) => {};

const PostShow = (props: { post: Post; update: (arg0: any) => void }) => {
  const starButton = props.post.star ? (
    <TiStarFullOutline />
  ) : (
    <TiStarOutline />
  );
  const trashButton = <FaTrash />;
  return (
    <Show>
      <Title
        onClick={() => {
          handleTitleClick({ link: props.post.url });
        }}
      >
        {props.post.title}
      </Title>
      <Line
        mode="show"
        source={props.post.source}
        author={props.post.author}
        buttons={{ star: starButton, trash: trashButton }}
        read={props.post.read}
        star={props.post.star}
        update={props.update}
        id={props.post._id}
      />
      <Text
        className={style.text}
        dangerouslySetInnerHTML={{
          __html: props.post.text
        }}
      />
      <Footer
        timestamp={props.post.published}
        readingTime={props.post.readTime}
      />
    </Show>
  );
};
export default PostShow;
