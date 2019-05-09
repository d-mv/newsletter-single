import React from "react";
import { connect } from "react-redux";
import { AppState } from "../../store";

import { Post } from "../../store/post/types";
import { CurrentUser } from "../../store/user/types";
import { loadPosts, updatePost, selectPost } from "../../store/post/actions";
import { loadSources } from "../../store/source/actions";
import { checkUser } from "../../store/user/actions";

import { NewQuery } from "../../types";

import Header from "../../components/Header/Header";
import SmartMenu from "../../components/SmartMenu";
import Filter from "../../components/Filter";
import Loading from "../../components/Loading";
import PostCardList from "../../components/PostCardList";
import PostShow from "../../components/PostShow";
import SourceCardList from "../../components/SourceCardList";
import Profile from "../../components/Profile";
import ContentS from "../../styles/Content";

interface props {
  loadPosts: (arg0?: any) => any;
  updatePost: (arg0?: any) => any;
  selectPost: (arg0?: any) => any;
  loadSources: (arg0?: any) => any;
  checkUser: (arg0?: any) => any;
  currentUser: CurrentUser;
  signOff: () => void;
}

interface Content {
  refresher: any;
}

interface IState {
  module: string;
  showRead: boolean;
  showFilter: boolean;
  filterId: string;
  loading: boolean;
  sources: any[];
  posts: any[];
  message: string;
  showPost: Post;
}
const emptyPost: Post = {
  _id: "",
  source: "",
  sourceId: "",
  title: "",
  url: "",
  author: "",
  published: new Date(),
  parsed: new Date(),
  text: "",
  readTime: 0,
  pages: 0,
  read: false,
  star: false
};

class Content extends React.Component<props> {
  state = {
    loading: true,
    module: "posts",
    showRead: false,
    showFilter: false,
    filterId: "",
    sources: [],
    posts: [],
    message: "",
    showPost: emptyPost
  };

  componentDidMount() {
    this.fetchPostsSources();
    this.refresher = setInterval(this.fetchPostsSources, 10000);
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  loadPosts = (query: NewQuery) => {
    this.props.loadPosts(query).then((data: any) => {
      if (data.payload.data.message) {
        this.setState({
          posts: [],
          message: data.payload.data.message,
          loading: false
        });
      } else {
        this.setState({
          posts: data.payload.data,
          loading: false
        });
      }
    });
  };
  loadSources = (query: NewQuery) => {
    this.props.loadSources(query).then((data: any) => {
      if (data.payload.data.message) {
        this.setState({
          sources: [],
          message: data.payload.data.message,
          loading: false
        });
      } else {
        this.setState({
          sources: data.payload.data,
          loading: false
        });
      }
    });
  };

  fetchPostsSources = () => {
    // set queries
    const postQuery = {
      token: this.props.currentUser.token,
      action: ["post", "fetch"]
    };
    const sourceQuery = {
      token: this.props.currentUser.token,
      action: ["source", "fetch"]
    };
    // run requests
    this.loadPosts(postQuery);
    this.loadSources(sourceQuery);
  };

  showModule = (module: string = "posts") => {
    this.setState({ module: module });
  };
  toggleShowRead = () => {
    this.setState({ showRead: !this.state.showRead });
  };
  toggleShowFilter = () => {
    this.setState({ showFilter: !this.state.showFilter });
  };

  // update sources & posts
  chooseFilter = (id: string) => {
    this.toggleShowFilter();
    if (id === "clear") {
      this.setState({
        filterId: ""
      });
    } else {
      this.setState({ filterId: id });
    }
  };

  handleRefreshClick = () => {};
  selectPostToShow = (props: { id: string }) => {
    // this.updatePostAction({
    //   field: "read",
    //   id: props.id
    // });
    this.props
      .selectPost(props.id)
      .then((data: { payload: { data: Post } }) => {
        this.showModule("post");
        this.setState({ showPost: data.payload.data });
      });
  };

  updateStatePosts = (props: { id: string; field: string }) => {
    const newPosts = this.state.posts;
    let oldPostState;
    newPosts
      .filter((post: Post) => post._id === props.id)
      .forEach((post: Post) => {
        if (props.field === "read") {
          oldPostState = post.read;
          post.read = !post.read;
        } else {
          oldPostState = post.star;
          post.star = !post.star;
        }
      });
    this.setState({ posts: newPosts });
    return oldPostState;
  };
  updatePostAction = (props: { field: string; id: string }) => {
    const oldState = this.updateStatePosts({
      id: props.id,
      field: props.field
    });
    let fields: { [index: string]: boolean } = {};
    fields[`${props.field}`] = !oldState;

    const query = {
      action: ["post", "update"],
      id: props.id,
      fields
    };

    this.props
      .updatePost(query)
      .then((response: { [index: string]: string }) => {
        this.setState({ message: response.statusText });
      });
  };

  render() {
    const smartMenu = (
      <SmartMenu
        read={this.state.showRead}
        toggleRead={this.toggleShowRead}
        refresh={this.handleRefreshClick}
        moduleToggle={this.showModule}
        mode={this.state.module}
        showFilter={this.state.filterId !== ""}
        toggleFilter={this.toggleShowFilter}
      />
    );

    const filter =
      this.state.showFilter && this.state.sources ? (
        <Filter
          toggle={this.toggleShowFilter}
          list={this.state.sources}
          choose={this.chooseFilter}
          id={this.state.filterId}
        />
      ) : null;
    let postsList;
    if (this.state.message) {
    } else if (this.state.loading) {
      postsList = <Loading />;
    } else {
      postsList = (
        <PostCardList
          showRead={this.state.showRead}
          posts={this.state.posts}
          selectPost={this.selectPostToShow}
          update={this.updatePostAction}
          filter={this.state.filterId}
        />
      );
    }
    const postShow = (
      <PostShow post={this.state.showPost} update={this.updatePostAction} />
    );

    const sourcesList = (
      <SourceCardList
        sources={this.state.sources}
        //  addSource={this.props.addSource}
        //  deleteSource={this.deleteSource}
        //  updateSource={this.props.updateSource}
      />
    );
    const profile = (
      <Profile
        currentUser={this.props.currentUser}
        signOff={this.props.signOff}
      />
    );
    return (
      <ContentS data-test="app">
        <Header />
        {smartMenu}
        {filter}
        {this.state.module === "posts" ? postsList : null}
        {this.state.module === "post" ? postShow : null}
        {this.state.module === "sources" ? sourcesList : null}
        {this.state.module === "profile" ? profile : null}
      </ContentS>
    );
  }
}
const mapStateToProps = (state: AppState) => ({
  // posts: state.posts,
  // sources: state.sources,
  user: state.user
});

export default connect(
  mapStateToProps,
  { loadPosts, updatePost, selectPost, loadSources, checkUser }
)(Content);
