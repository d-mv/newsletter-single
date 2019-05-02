import React from "react";

import { Wrapper } from "../../styles/PostCard";

const PostLine = (props: { children: any }) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
};

export default PostLine;
