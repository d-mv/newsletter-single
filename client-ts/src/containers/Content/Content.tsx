import React, { Suspense } from "react";
import { connect } from "react-redux";

import { AppState } from "../../store";
import { Post } from "../../store/post/types";
import { loadPosts, updatePost } from "../../store/post/actions";
import { loadSources } from "../../store/source/actions";
import { apiRequest } from "../../store/user/actions";
import { setMessage } from "../../store/app/actions";

import Header from "../../components/Header/Header";
import SmartMenu from "../../components/SmartMenu/SmartMenu";
import Loading from "../../components/Loading";
import PostCardList from "../../components/Post/PostCardList";

import "../../styles/_ui.scss";

// lazy loading
const Central = React.lazy(() => import("../../components/Central"));
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
  loadSources: (arg0?: any) => any;
  apiRequest: (arg0?: any) => any;
  thisUser: any;
  module: string;
  message: string;
  setMessage: (arg0: string) => any;
  showPost: {};
  sources: any;
}

interface Content {
  refresher: any;
}

class Content extends React.Component<props> {
  state = {
    loading: true,
    sources: [],
    posts: [],
    addSource: false
  };

  // * get posts & sources from API
  componentDidMount() {
    this.fetchPostsSources();
    this.refresher = setInterval(this.fetchPostsSources, 10000);
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchPostsSources = () => {
    this.props.loadPosts(this.props.thisUser.token).then((data: any) => {
      this.setState({
        posts: data.payload.data,
        loading: false
      });
    });
    this.props.loadSources(this.props.thisUser.token).then((data: any) => {
      this.setState({
        sources: data.payload.data,
        loading: false
      });
    });
  };
  // * end-of-get posts/sources

  // ! refactor
  updateStatePosts = (UProps: { id: string; field: string }) => {
    const newPosts = this.state.posts;
    let oldPostState;
    newPosts
      .filter((post: Post) => post._id === UProps.id)
      .forEach((post: Post) => {
        if (UProps.field === "read") {
          oldPostState = post.read;
          post.read = !post.read;
        } else {
          oldPostState = post.star;
          post.star = !post.star;
        }
      });
    const update: any[] = newPosts.map((post: any) => {
      let newPost = post;
      if (post._id === UProps.id) {
        if (UProps.field === "read") {
          newPost.read = !post.read;
        } else {
          newPost.star = !post.star;
        }
      }
      return newPost;
    });
    this.setState({ posts: update });
    return oldPostState;
  };
  updatePostAction = (AProps: { field: string; id: string }) => {
    const update = this.updateStatePosts({
      id: AProps.id,
      field: AProps.field
    });
    let fields: {
      [index: string]: boolean;
    } = {};
    fields[`${AProps.field}`] = !update;

    const query = {
      token: this.props.thisUser.token,
      id: AProps.id,
      fields: fields
    };
    this.props.updatePost(query).then((response: any) => {
      const message = response.payload.data.message;
      this.props.setMessage(message);
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
    const query = {
      token: this.props.thisUser.token,
      action: ["source", "update"],
      fields: props
    };

    this.props.apiRequest(query).then((response: any) => {
      const message = response.payload.data.message;
      this.props.setMessage(message);
      this.updateSourceInState(props);
    });
  };
  // ! end-of-refactor
  // delete source/post
  deleteAction = (props: { [index: string]: string }) => {};

  createSource = (cSprops: any) => {
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
      const message = res.payload.data.message;
      this.props.setMessage(message);
      this.setState({
        addSource: false,
        sources: newState
      });
    });
  };

  toggleShowAddSource = () => {
    this.setState({ addSource: !this.state.addSource });
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

  postShow = (showPost: Post) => (
    <Suspense fallback={<Loading />}>
      <PostShow post={showPost} update={this.updatePostAction} />
    </Suspense>
  );
  checkIfSourcesEmpty = () => {
    const check =
      this.props.sources === [] || this.props.sources.length === 0
        ? true
        : false;
    return check;
  };
  checkIfPostsSourcesEmpty = () => {
    let message;
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

  messageComponent = (message: string) => (
    <Suspense fallback={<Loading />}>
      <Central message={message} />
    </Suspense>
  );

  postCardListComponent = () => (
    <PostCardList posts={this.state.posts} update={this.updatePostAction} />
  );

  noSourcesListComponent = () => (
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

  sourcesListComponent = () => (
    <Suspense fallback={<Loading />}>
      <SourceCardList
        sources={this.state.sources}
        submit={this.createSource}
        update={this.updateSourceAction}
      />
    </Suspense>
  );

  popUpMessageComponent = () => (
    <section className="message">{this.props.message}</section>
  );

  render() {
    if (this.props.message) {
      setTimeout(() => this.props.setMessage(""), 3000);
    }
    // list of posts
    let postsList;
    const messageToShow = this.checkIfPostsSourcesEmpty();

    if (this.state.loading) {
      postsList = <Loading />;
    } else if (messageToShow) {
      postsList = this.messageComponent(messageToShow);
    } else {
      postsList = this.postCardListComponent();
    }
    //  list of sources
    let sourcesList;
    if (this.checkIfSourcesEmpty()) {
      sourcesList = this.noSourcesListComponent();
    } else {
      sourcesList = this.sourcesListComponent();
    }

    return (
      <main data-test="app">
        <Header />
        {<SmartMenu />}
        {this.props.message ? this.popUpMessageComponent() : null}
        {this.props.module === "posts" ? postsList : null}
        {"_id" in this.props.showPost
          ? this.postShow(this.props.showPost)
          : null}
        {this.props.module === "sources" ? sourcesList : null}
        {this.state.addSource ? this.addSource : null}
        {this.props.module === "profile" ? this.profile : null}
      </main>
    );
  }
}
const mapStateToProps = (state: AppState) => ({
  sources: state.sources,
  thisUser: state.currentUser,
  module: state.module,
  message: state.message,
  showPost: state.showPost
});

export default connect(
  mapStateToProps,
  {
    loadPosts,
    updatePost,
    loadSources,
    apiRequest,
    setMessage
  }
)(Content);
