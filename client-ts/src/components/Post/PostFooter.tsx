import React from "react";

import dateTime from "../../modules/dateTime";

import style from "../../styles/PostCard.module.scss";

const PostFooter = (props: {
  timestamp: Date;
  parsed?: Date;
  readingTime: number;
}) => {
  const readTime = `~${props.readingTime} mins`;
  const parsed = props.parsed ? (
    <div className={style.wrapper}>
      <span className={style.span}>parsed: </span>
      {dateTime(props.parsed)}
    </div>
  ) : null;

  return (
    <footer className={style.footer}>
      <div className={style.wrapper}>
        <span className={style.span}>posted: </span>
        {dateTime(props.timestamp)}
      </div>
      {parsed}
      <div className={style.wrapper}>{readTime}</div>
    </footer>
  );
};

export default PostFooter;
