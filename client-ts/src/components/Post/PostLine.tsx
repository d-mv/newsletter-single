import React from "react";

import Button from "./PostButton";

import style from "../../styles/PostCard.module.scss";

const PostLine = (props: {
  mode: string;
  author: string;
  source: string;
  buttons: { star: any; read?: any; trash?: any };
  update: (arg0: any) => void;
  id: string;
  read: boolean;
  star: boolean;
}) => {
  const wrapper =
    props.mode === "show"
      ? `${props.author} @ ${props.source}`
      : `@${props.source}`;
  return (
    <section className={style.line} data-test="component__post-line">
      <div className={style.wrapper}>{wrapper}</div>
      <div className={style.wrapper}>
        <Button
          update={props.update}
          id={props.id}
          mode="star"
          status={props.star}
          data-test="component__post-line--button"
        >
          {props.buttons.star}
        </Button>
        <Button
          update={props.update}
          id={props.id}
          mode="read"
          status={props.read}
          data-test="component__post-line--button"
        >
          {props.buttons.read}
        </Button>
      </div>
    </section>
  );
};

export default PostLine;
