import React from "react";

import dateTime from "../../modules/dateTime";

import { Footer, Wrapper,Sub } from "../../styles/PostCard";

const PostFooter = (props: {
  timestamp: Date;
  parsed?: Date;
  readingTime: number;
}) => {
  const readTime = `~${props.readingTime} mins`;
  const parsed = props.parsed ? (
    <Wrapper>
      <Sub>parsed: </Sub>
      {dateTime(props.parsed)}
    </Wrapper>
  ) : null;

  return (
    <Footer>
      <Wrapper>
        <Sub>posted: </Sub>{dateTime(props.timestamp)}
      </Wrapper>
      {parsed}
      <Wrapper>{readTime}</Wrapper>
    </Footer>
  );
};

export default PostFooter;
