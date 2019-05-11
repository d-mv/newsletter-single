import React from "react";
import { FaCheck, FaCheckDouble } from "react-icons/fa";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";

import Line from "./PostLine";
import Footer from "./PostFooter";
import { Post } from "../../store/post/types";

import style from '../../styles/PostCard.module.scss'

const PostCard = (props: {
  post: Post;
  update: (arg0: any) => void;
  select: (arg0: any) => void;
}) => {
  const text = `${props.post.text.replace(/<(?:.|\n)*?>/gm, " ")}...`;

  const starButton = props.post.star ? (
    <TiStarFullOutline />
  ) : (
    <TiStarOutline />
  );
  const readButton = props.post.read ? <FaCheckDouble /> : <FaCheck />;
  return (
    <article className={style.card}>
      <h3 className={style.title}
        onClick={() => {
          props.select({ id: props.post._id });
        }}
      >
        {props.post.title}
      </h3>
      <Line
        mode="card"
        source={props.post.source}
        author={props.post.author}
        buttons={{ star: starButton, read: readButton }}
        read={props.post.read}
        star={props.post.star}
        update={props.update}
        id={props.post._id}
      />
      <main className={style.text}
        onClick={() => {
          props.select({ id: props.post._id });
        }}
      >
        {text}
      </main>
      <Footer
        timestamp={props.post.published}
        readingTime={props.post.readTime}
      />
    </article>
  );
};

export default PostCard;
