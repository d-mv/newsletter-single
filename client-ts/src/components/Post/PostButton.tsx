import React from "react";

import style from "../../styles/PostButton.module.scss";

const PostButton = (props: {
  update: (arg0: any) => void;
  mode: string;
  id: string;
  children: any;
  status: boolean;
}) => {
  const status = props.status ? (
    <span className={style.onStatus}>{props.children}</span>
  ) : (
    <span className={style.offStatus}>{props.children}</span>
  );
  return (
    <button
      className={style.post}
      aria-label={props.mode}
      onClick={() => props.update({ field: props.mode, id: props.id })}
    >
      {status}
    </button>
  );
};

export default PostButton;
