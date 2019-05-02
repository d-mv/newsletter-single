import React from "react";

import { connect } from "react-redux";
import { AppState } from "../../store";

import { SystemState } from "../../store/post/types";
import { loadPosts } from "../../store/post/actions";

interface PostProps {
  posts: SystemState;
  loadPosts: (arg0?: any) => void;
}

class Content extends React.Component<PostProps> {
  componentWillMount = () => {
    this.props.loadPosts();
  };

  render() {
    console.log(this.props.posts);
    return (
      <div>
        {Object.keys(this.props.posts).map(post => {
          return <div>{post}</div>;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { loadPosts }
)(Content);
