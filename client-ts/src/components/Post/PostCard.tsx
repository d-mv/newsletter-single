import React from "react";
import { connect } from "react-redux";

import { AppState } from "../../store";
import { selectPost } from "../../store/post/actions";
import { showModule } from "../../store/app/actions";

import { FaCheck, FaCheckDouble } from "react-icons/fa";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";

import Line from "./PostLine";
import Footer from "./PostFooter";
import { Post } from "../../store/post/types";

import style from "../../styles/PostCard.module.scss";

const PostCard = (props: {
  post: Post;
  update: (arg0: any) => void;
  thisUser: any;
  showModule: (arg0: string) => void;
  selectPost: (arg0: { token: string; id: string }) => void;
}) => {
  const text = `${props.post.text.replace(/<(?:.|\n)*?>/gm, " ")}...`;

  const starButton = props.post.star ? (
    <TiStarFullOutline />
  ) : (
    <TiStarOutline />
  );
  const readButton = props.post.read ? <FaCheckDouble /> : <FaCheck />;

  const selectPost = () => {
    props.selectPost({ token: props.thisUser.token, id: props.post._id });
    props.showModule("post");
  };

  return (
    <article className={style.card}>
      <h3
        className={style.title}
        onClick={() => {
          selectPost();
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
      <main
        className={style.text}
        onClick={() => {
          selectPost();
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

// export default PostCard;

const mapStateToProps = (state: AppState) => ({
  thisUser: state.currentUser
});

export default connect(
  mapStateToProps,
  {
    selectPost,
    showModule
  }
)(PostCard);
