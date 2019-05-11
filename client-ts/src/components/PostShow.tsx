import React from "react";
import { FaTrash } from "react-icons/fa";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";

import { Post } from "../store/post/types";
import Line from "./PostElements/PostLine";
import Footer from "./PostElements/PostFooter";

import { Show, Title, Text } from "../styles/PostShow";

const handleTitleClick = (link: string) => {
  window.open(link, "_blank");
};

const PostShow = (props: { post: Post; update: (arg0: any) => void }) => {
  const starButton = props.post.star ? (
    <TiStarFullOutline />
  ) : (
    <TiStarOutline />
  );
  const trashButton = <FaTrash />;
  // clean text
  const regex = new RegExp("style = '.*'", "gm");
  const removedStyleText = props.post.text.replace(regex, "");
  return (
    <Show>
      <Title
        onClick={() => {
          handleTitleClick(props.post.url);
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
        dangerouslySetInnerHTML={{
          __html: removedStyleText
        }}
      />
      <Footer
        timestamp={props.post.published}
        parsed={props.post.parsed}
        readingTime={props.post.readTime}
      />
    </Show>
  );
};
export default PostShow;
