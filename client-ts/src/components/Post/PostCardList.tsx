import React, { Suspense } from "react";
import { connect } from "react-redux";

import { AppState } from "../../store";
import { Post } from "../../store/post/types";

import Loading from "../../components/Loading";
import PostCard from "./PostCard";

import style from "../../styles/PostCardList.module.scss";

const Filter = React.lazy(() => import("../../components/Filter"));

const PostCardList = (props: {
  showRead: boolean;
  posts: any;
  filterSourceId: string;
  showFilter: boolean;
  sources: any;
  update: (arg0: any) => any;
}) => {
  const filter =
    props.showFilter && props.sources ? (
      <Suspense fallback={<Loading />}>
        <Filter />
      </Suspense>
    ) : null;

  return (
    <div className={style.list}>
      {/* show filter */}
      {filter}
      {/* show cards */}
      {props.posts.map((post: Post) => {
        // set the component
        const component = (
          <PostCard key={post._id} post={post} update={props.update} />
        );
        // if source filter ON
        if (props.filterSourceId) {
          // if SHOW READ is ON
          if (props.showRead) {
            return post.sourceId === props.filterSourceId ? component : null;
          } else {
            // if SHOW READ is OFF
            return post.read === props.showRead &&
              post.sourceId === props.filterSourceId
              ? component
              : null;
          }
          // if source filter OFF
        } else {
          if (props.showRead) {
            return component;
          } else {
            return post.read === props.showRead ? component : null;
          }
        }
      })}
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  showRead: state.showRead,
  sources: state.sources,
  filterSourceId: state.filterSourceId,
  showFilter: state.showFilter
});

export default connect(
  mapStateToProps,
  {}
)(PostCardList);
