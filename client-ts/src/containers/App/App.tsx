import React from "react";
import { connect } from "react-redux";
import { AppState } from "../../store";

import { SystemState, Post } from "../../store/post/types";
import { SystemStateSource, Source } from "../../store/source/types";
import { loadPosts, updatePost, selectPost } from "../../store/post/actions";
import { loadSources } from "../../store/source/actions";
import { checkUser } from "../../store/user/actions";

import Home from "../../components/Home";
import Header from "../../components/Header/Header";
import SmartMenu from "../../components/SmartMenu";
import Filter from "../../components/Filter";
import PostCardList from "../../components/PostCardList";
import PostShow from "../../components/PostShow";
import SourceCardList from "../../components/SourceCardList";
import Profile from "../../components/Profile";
import Content from "../../styles/Content";

interface IProps {
  posts: SystemState;
  sources: SystemStateSource;
  loadPosts: (arg0?: any) => any;
  updatePost: (arg0?: any) => any;
  selectPost: (arg0?: any) => any;
  loadSources: (arg0?: any) => any;
  checkUser: (arg0?:any) => any
}

interface App {
  refresher: any;
}

interface IState {
  auth: boolean;
  authId: string;
  module: string;
  showRead: boolean;
  showFilter: boolean;
  filterId: string;
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

class App extends React.Component<IProps> {
  state = {
    auth: false,
    authId: "",
    module: "posts",
    showRead: false,
    showFilter: false,
    filterId: "",
    sources: [],
    posts: [],
    message: "",
    showPost: emptyPost
  };

  componentWillMount() {
    this.fetchPostsSources();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchPostsSources, 10000);
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    clearInterval(this.refresher);
  }
  fetchPostsSources = () => {
    this.props.loadPosts().then((data: any) => {
      if (data.payload.data.message) {
        this.setState({
          posts: [],
          message: data.payload.data.message
        });
      } else {
        this.setState({
          posts: data.payload.data
        });
      }
    });
    this.props.loadSources().then((data: any) => {
      if (data.payload.data.message) {
        this.setState({
          sources: [],
          message: data.payload.data.message
        });
      } else {
        this.setState({
          sources: data.payload.data
        });
      }
    });
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
  // user management
  checkUser = () => {
    // const user = {name: 'Alex', password: 'alexpass', email:"alex@mail.mail"}
    const query = {
      action: ["user","check"],
      id: "",
      fields: {
        name: "Alex",
        password: "alexpass",
        email: "alex@mail"
      }
    };
    this.props.checkUser(query).then((response:any) => console.log(response))
  }
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
  login = (props: any) => {
    console.log(props);
  };
  render() {
    console.log(this.state.module);
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
    const profile = <Profile />;
    const home = (
      <Content data-test="app">
        <Home login={this.login} check={this.checkUser}/>
      </Content>
    );
    const authContent = (
      <Content data-test="app">
        <Header />
        {smartMenu}
        {filter}
        {this.state.module === "posts" ? postsList : null}
        {this.state.module === "post" ? postShow : null}
        {this.state.module === "sources" ? sourcesList : null}
        {this.state.module === "profile" ? profile : null}
      </Content>
    );

    return this.state.auth ? authContent : home;
  }
}
const mapStateToProps = (state: AppState) => ({
  posts: state.posts,
  sources: state.sources,
  user: state.user
});

export default connect(
  mapStateToProps,
  { loadPosts, updatePost, selectPost, loadSources, checkUser }
)(App);
