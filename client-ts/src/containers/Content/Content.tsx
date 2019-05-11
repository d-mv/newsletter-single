import React, { Suspense } from "react";
import { connect } from "react-redux";
import { AppState } from "../../store";

import { Post } from "../../store/post/types";
import { CurrentUser } from "../../store/user/types";
import { loadPosts, updatePost, selectPost } from "../../store/post/actions";
import { loadSources } from "../../store/source/actions";
import { apiRequest } from "../../store/user/actions";

import { NewQuery } from "../../types";

import Header from "../../components/Header/Header";
import SmartMenu from "../../components/SmartMenu";
import Loading from "../../components/Loading";
import PostCardList from "../../components/PostCardList";
import ContentS from "../../styles/Content";
import { Button } from "../../styles/_uiElements";

// lazy loading
const Central = React.lazy(() => import("../../components/Central"));
const Filter = React.lazy(() => import("../../components/Filter"));
const PostShow = React.lazy(() => import("../../components/PostShow"));
const SourceCardList = React.lazy(() =>
  import("../../components/SourceCardList")
);
const Profile = React.lazy(() => import("../../components/Profile"));
const SourceEdit = React.lazy(() => import("../../components/SourceEdit"));

interface props {
  loadPosts: (arg0?: any) => any;
  updatePost: (arg0?: any) => any;
  selectPost: (arg0?: any) => any;
  loadSources: (arg0?: any) => any;
  apiRequest: (arg0?: any) => any;
  currentUser: CurrentUser;
  signOff: () => void;
}

interface Content {
  refresher: any;
}

// interface IState {
//   module: string;
//   showRead: boolean;
//   showFilter: boolean;
//   filterId: string;
//   loading: boolean;
//   sources: any[];
//   posts: any[];
//   message: string;
//   showPost: Post;
// }
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
    showPost: emptyPost,
    addSource: false
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
      // if (data.payload.data.message) {
      //   this.setState({
      //     posts: [],
      //     message: data.payload.data.message,
      //     loading: false
      //   });
      // } else {
      console.log(data.payload.data);
      console.log(this.state);
      this.setState({
        posts: data.payload.data,
        loading: false
      });
      // }
    });
  };
  loadSources = (query: NewQuery) => {
    this.props.loadSources(query).then((data: any) => {
      // if (data.payload.data.message) {
      //   this.setState({
      //     sources: [],
      //     message: data.payload.data.message,
      //     loading: false
      //   });
      // } else {
      this.setState({
        sources: data.payload.data,
        loading: false
      });
      // }
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
    console.log("show module - " + module);
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

  handleRefreshClick = () => {
    // set query object
    const query = {
      token: this.props.currentUser.token,
      action: ["post", "refresh"]
    };
    // request redux action to query API
    this.props.apiRequest(query).then((res: any) => {
      const response = res.payload.data;
    });
  };
  selectPostToShow = (props: { id: string }) => {
    // set query object
    const query = {
      token: this.props.currentUser.token,
      action: ["post", "show"],
      id: props.id
    };
    // request redux action to query API
    this.props.apiRequest(query).then((res: any) => {
      const response = res.payload.data;
      if (response.authed) {
        this.showModule("post");
        this.setState({
          showPost: response.post
        });
      }
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
      token: this.props.currentUser.token,
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
  createSource = (props: any) => {
    console.log("- create source:");
    console.log(props);
    // set query object
    const query = {
      token: this.props.currentUser.token,
      action: ["source", "create"],
      fields: props
    };
    // request redux action to query API
    this.props.apiRequest(query).then((res: any) => {
      const response = res.payload.data;
      console.log(response);
      this.setState({
        message: response.message,
        addSource: false
      });
    });
  };

  toggleShowAddSource = () => {
    this.setState({ addSource: !this.state.addSource });
  };
  checkIfSourcesEmpty = () => {
    const check =
      this.state.sources === [] || this.state.sources.length === 0
        ? true
        : false;
    return check;
  };
  checkIfPostsSourcesEmpty = () => {
    let message;
    console.log(this.checkIfSourcesEmpty());
    if (
      this.checkIfSourcesEmpty() &&
      (this.state.posts === [] || this.state.posts.length === 0)
    ) {
      message = "There are no sources configured.";
    } else if (this.state.posts === [] || this.state.posts.length === 0) {
      message = "The are no posts for now.";
    }
    return message;
  };
  // ui elements
  smartMenu = (
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
  filter =
    this.state.showFilter && this.state.sources ? (
      <Suspense fallback={<Loading />}>
        <Filter
          toggle={this.toggleShowFilter}
          list={this.state.sources}
          choose={this.chooseFilter}
          id={this.state.filterId}
        />
      </Suspense>
    ) : null;
  postShow = (
    <Suspense fallback={<Loading />}>
      <PostShow post={this.state.showPost} update={this.updatePostAction} />
    </Suspense>
  );
  profile = (
    <Suspense fallback={<Loading />}>
      <Profile
        currentUser={this.props.currentUser}
        signOff={this.props.signOff}
      />
    </Suspense>
  );
  addSource = (
    <Suspense fallback={<Loading />}>
      <SourceEdit submit={this.createSource} close={this.toggleShowAddSource} />
    </Suspense>
  );
  render() {
    // list of posts
    let postsList;
    const messageToShow = this.checkIfPostsSourcesEmpty();
    console.log(messageToShow);
    if (this.state.message) {
      console.log("smth wrong with state message");
    } else if (this.state.loading) {
      postsList = <Loading />;
    } else if (messageToShow) {
      postsList = (
        <Suspense fallback={<Loading />}>
          <Central message={messageToShow} />
        </Suspense>
      );
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

    let sourcesList;
    if (this.checkIfSourcesEmpty()) {
      sourcesList = (
        <Suspense fallback={<Loading />}>
          <Central
            message="The are no sources for now."
            function={this.toggleShowAddSource}
          >
            <Button>Add source</Button>
          </Central>
        </Suspense>
      );
    } else {
      sourcesList = (
        <Suspense fallback={<Loading />}>
          <SourceCardList
            sources={this.state.sources}
            //  addSource={this.props.addSource}
            //  deleteSource={this.deleteSource}
            //  updateSource={this.props.updateSource}
          />
        </Suspense>
      );
    }
    // const smartMenu = (
    //   <SmartMenu
    //     read={this.state.showRead}
    //     toggleRead={this.toggleShowRead}
    //     refresh={this.handleRefreshClick}
    //     moduleToggle={this.showModule}
    //     mode={this.state.module}
    //     showFilter={this.state.filterId !== ""}
    //     toggleFilter={this.toggleShowFilter}
    //   />
    // );

    // const filter =
    //   this.state.showFilter && this.state.sources ? (
    //     <Suspense fallback={<Loading />}>
    //       <Filter
    //         toggle={this.toggleShowFilter}
    //         list={this.state.sources}
    //         choose={this.chooseFilter}
    //         id={this.state.filterId}
    //       />
    //     </Suspense>
    //   ) : null;

    // const postShow = (
    //   <Suspense fallback={<Loading />}>
    //     <PostShow post={this.state.showPost} update={this.updatePostAction} />
    //   </Suspense>
    // );
    // const profile = (
    //   <Suspense fallback={<Loading />}>
    //     <Profile
    //       currentUser={this.props.currentUser}
    //       signOff={this.props.signOff}
    //     />
    //   </Suspense>
    // );
    return (
      <ContentS data-test="app">
        <Header />
        {this.smartMenu}
        {this.filter}
        {this.state.module === "posts" ? postsList : null}
        {this.state.module === "post" ? this.postShow : null}
        {this.state.module === "sources" ? sourcesList : null}
        {this.state.addSource ? this.addSource : null}
        {this.state.module === "profile" ? this.profile : null}
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
  { loadPosts, updatePost, selectPost, loadSources, apiRequest }
)(Content);
