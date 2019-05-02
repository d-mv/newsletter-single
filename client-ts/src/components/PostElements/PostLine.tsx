import React from "react";

import Button from "./PostButton";
import { Line, Wrapper } from "../../styles/PostCard";

const PostLine = (props: {
  author: string;
  source: string;
  buttons: { star: any; read?: any; trash?: any };
  update: (arg0: any) => void;
  id: string;
  read: boolean;
  star: boolean;
}) => {
  return (
    <Line>
      <Wrapper>
        {props.author} @ {props.source}
      </Wrapper>
      <Wrapper>
        <Button
          update={props.update}
          id={props.id}
          mode="star"
          status={props.star}
        >
          {props.buttons.star}
        </Button>
        <Button
          update={props.update}
          id={props.id}
          mode="read"
          status={props.read}
        >
          {props.buttons.read}
        </Button>
      </Wrapper>
    </Line>
  );
};

export default PostLine;
