import React from "react";

import dateTime from "../../modules/dateTime";

import { Footer, Wrapper } from "../../styles/PostCard";

const PostFooter = (props: { timestamp: Date; readingTime: number }) => {
  const readTime = `~${props.readingTime} mins`;
  return (
    <Footer>
      <Wrapper>{dateTime(props.timestamp)}</Wrapper>
      <Wrapper>{readTime}</Wrapper>
    </Footer>
  );
};

export default PostFooter;
