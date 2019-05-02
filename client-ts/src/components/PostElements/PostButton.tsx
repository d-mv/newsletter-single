import React from "react";

import { Button, On, Off } from "../../styles/PostButton";

const PostButton = (props: {
  update: (arg0: any) => void;
  mode: string;
  id: string;
  children: any;
  status: boolean;
}) => {
  const status = props.status ? <On>{props.children}</On> : <Off>{props.children}</Off>;
  return (
    <Button onClick={() => props.update({ field: props.mode, id: props.id })}>
      {status}
    </Button>
  );
};

export default PostButton;
