import React, { Suspense } from "react";
import { connect } from "react-redux";
import { AppState } from "../../store";

import { Post } from "../../store/post/types";
import {
  loadPosts,
  setPosts,
  updatePost,
  selectPost
} from "../../store/post/actions";
import { loadSources } from "../../store/source/actions";
import { apiRequest } from "../../store/user/actions";
import { showModule, setMessage } from "../../store/app/actions";

import { NewQuery } from "../../types";

import Header from "../../components/Header/Header";
import SmartMenu from "../../components/SmartMenu/SmartMenu";
import Loading from "../../components/Loading";
import PostCardList from "../../components/Post/PostCardList";
import "../../styles/_ui.scss";
// import '../../styles/

// lazy loading
const Central = React.lazy(() => import("../../components/Central"));
const Filter = React.lazy(() => import("../../components/Filter"));
const PostShow = React.lazy(() => import("../../components/Post/PostShow"));
const SourceCardList = React.lazy(() =>
  import("../../components/Source/SourceCardList")
);
const Profile = React.lazy(() => import("../../components/Profile"));
const SourceEdit = React.lazy(() =>
  import("../../components/Source/SourceEdit")
);

interface props {
  loadPosts: (arg0?: any) => any;
  updatePost: (arg0?: any) => any;
  selectPost: (arg0?: any) => any;
  loadSources: (arg0?: any) => any;
  apiRequest: (arg0?: any) => any;
  thisUser: any;
  setPosts: (arg0: any) => any;
  posts: any[];
  module: string;
  message: string;
  showModule: (arg0: string) => any;
  setMessage: (arg0: string) => any;
  // signOff: () => void;
}

interface Content {
  refresher: any;
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
      this.props.setPosts(data.payload.data);
      this.setState({
        // posts: data.payload.data,
        loading: false
      });
      // }
    });
  };
  loadSources = (query: NewQuery) => {
    this.props.loadSources(query).then((data: any) => {
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
      token: this.props.thisUser.token,
      action: ["post", "fetch"]
    };
    const sourceQuery = {
      token: this.props.thisUser.token,
      action: ["source", "fetch"]
    };
    // run requests
    this.loadPosts(postQuery);
    this.loadSources(sourceQuery);
  };

  toggleShowRead = () => {
    this.setState({ showRead: !this.state.showRead });
    this.changeMessage(`Show read: ${!this.state.showRead}`);
  };
  toggleShowFilter = () => {
    this.setState({ showFilter: !this.state.showFilter });
  };

  changeMessage = (message: string) => {
    this.props.setMessage(message);
    setTimeout(() => this.props.setMessage(""), 3000);
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
      token: this.props.thisUser.token,
      action: ["post", "refresh"]
    };
    // request redux action to query API
    this.props.apiRequest(query).then((response: any) => {
      const message = response.payload.data.message;
      this.changeMessage(message);
    });
  };

  selectPostToShow = (props: { id: string }) => {
    // set query object
    const query = {
      token: this.props.thisUser.token,
      action: ["post", "show"],
      id: props.id
    };
    // request redux action to query API
    this.props.apiRequest(query).then((res: any) => {
      const response = res.payload.data;
      if (response.authed) {
        this.props.showModule("post");
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
      token: this.props.thisUser.token,
      action: ["post", "update"],
      id: props.id,
      fields
    };

    this.props.updatePost(query).then((response: any) => {
      const message = response.payload.data.message;
      this.changeMessage(message);
    });
  };
  updateSourceInState = (props: { [index: string]: string }) => {
    const newSources = this.state.sources;
    // let oldSourceElement;
    newSources
      .filter((source: any) => source._id === props._id)
      .forEach((source: any) => {
        source.name = props.name;
        source.url = props.url;
        source.homepage = props.homepage;
      });
    this.setState({ source: newSources });
  };

  updateSourceAction = (props: { [index: string]: string }) => {
    // console.log(props);
    const query = {
      token: this.props.thisUser.token,
      action: ["source", "update"],
      fields: props
    };

    this.props.apiRequest(query).then((response: any) => {
      console.log(response);
      const message = response.payload.data.message;
      this.changeMessage(message);
      this.updateSourceInState(props);
    });
  };
  // delete source/post
  deleteAction = (props: { [index: string]: string }) => {
    // console.log(props);
    // {
    // id: '', mode:''
    // }
    // const query = {
    //   token: this.props.currentUser.token,
    //   action: [props.mode, "delete"],
    //   id: props.id
    // };
    // this.props.apiRequest(query).then((response: any) => {
    //   console.log(response);
    //   const message = response.payload.data.message;
    //   // this.setState({ message: message });
    //   this.changeMessage(message);
    //   this.updateSourceInState(props);
    // });
  };

  createSource = (cSprops: any) => {
    // console.log("- create source:");
    // console.log(cSprops);
    // set query object
    const query = {
      token: this.props.thisUser.token,
      action: ["source", "create"],
      fields: cSprops
    };
    let newSource = cSprops;
    newSource._id = "012345";
    const newSourceToArray = [newSource];
    const newState = [...this.state.sources, ...newSourceToArray];
    // request redux action to query API
    this.props.apiRequest(query).then((res: any) => {
      const response = res.payload.data;
      // console.log(response);
      this.changeMessage(response.message);
      this.setState({
        // message: response.message,
        addSource: false,
        sources: newState
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
    if (
      this.checkIfSourcesEmpty() &&
      (this.props.posts === [] || this.props.posts.length === 0)
    ) {
      message = "There are no sources configured.";
    } else if (this.props.posts === [] || this.props.posts.length === 0) {
      message = "The are no posts for now.";
    }
    return message;
  };
  // ui elements
  profile = (
    <Suspense fallback={<Loading />}>
      <Profile />
    </Suspense>
  );
  addSource = (
    <Suspense fallback={<Loading />}>
      <SourceEdit submit={this.createSource} close={this.toggleShowAddSource} />
    </Suspense>
  );
  render() {
    console.log(this.props);
    // postToShow
    const postShow = (
      <Suspense fallback={<Loading />}>
        <PostShow post={this.state.showPost} update={this.updatePostAction} />
      </Suspense>
    );
    // smartmenu
    const smartMenu = (
      <SmartMenu
        read={this.state.showRead}
        toggleRead={this.toggleShowRead}
        refresh={this.handleRefreshClick}
        // mode={this.props.module}
        showFilter={this.state.filterId !== ""}
        toggleFilter={this.toggleShowFilter}
      />
    );
    // filter
    const filter =
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

    // list of posts
    let postsList;
    const messageToShow = this.checkIfPostsSourcesEmpty();
    // console.log(messageToShow);
    // if (this.state.message) {
    //   console.log("smth wrong with state message");
    //   console.log(this.state.message)
    // } else
    if (this.state.loading) {
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
          // showRead={this.state.showRead}
          posts={this.props.posts}
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
            <button className="button" aria-label="Add source">
              Add source
            </button>
          </Central>
        </Suspense>
      );
    } else {
      sourcesList = (
        <Suspense fallback={<Loading />}>
          <SourceCardList
            sources={this.state.sources}
            submit={this.createSource}
            update={this.updateSourceAction}
          />
        </Suspense>
      );
    }

    const messageDisplay = this.props.message ? (
      <section className="message">{this.props.message}</section>
    ) : null;
    return (
      <main data-test="app">
        <Header />
        {smartMenu}
        {filter}
        {messageDisplay}
        {this.props.module === "posts" ? postsList : null}
        {this.props.module === "post" ? postShow : null}
        {this.props.module === "sources" ? sourcesList : null}
        {this.state.addSource ? this.addSource : null}
        {this.props.module === "profile" ? this.profile : null}
      </main>
    );
  }
}
const mapStateToProps = (state: AppState) => ({
  posts: state.posts,
  sources: state.sources,
  user: state.user,
  thisUser: state.currentUser,
  module: state.module,
  message: state.message
});

export default connect(
  mapStateToProps,
  {
    loadPosts,
    setPosts,
    updatePost,
    selectPost,
    loadSources,
    apiRequest,
    showModule,
    setMessage
  }
)(Content);
