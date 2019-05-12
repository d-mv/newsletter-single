import React, { Suspense } from "react";

import { withCookies } from "react-cookie";
import { connect } from "react-redux";
import { AppState } from "../../store";

import { checkUser, currentUser } from "../../store/user/actions";
import "../../styles/_ui.scss";

import Loading from "../../components/Loading";

// lazy loading
const Home = React.lazy(() => import("../../components/Home"));
const Content = React.lazy(() => import("../Content/Content"));

const App = (props?: any) => {
  console.log(props);

  const [authStatus, setAuthStatus] = React.useState(false);
  const [counter, setCounter] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const { cookies } = props;

  /**
   * Function to toggle authentication status
   * @function toggleAuth
   * @returns {void}
   */
  const toggleAuth = () => {
    setAuthStatus(!authStatus);
  };

  /**
   * Function to verify cookies
   * @function verifyCookies
   * @param {object} cProps - Email/token pair
   * @returns {void}
   */
  const verifyCookies = (cProps: { email: string; token: string }) => {
    // set query object
    const query = {
      token: cProps.token,
      action: ["user", "verifyCookies"],
      fields: { email: cProps.email }
    };
    // request redux action to query API
    props.checkUser(query).then((res: any) => {
      const response = res.payload.data;
      if (response.authed) {
        props.currentUser({
          token: cProps.token,
          email: cProps.email
        });
        toggleAuth();
      } else {
        cookies.set("email", "", { path: "/" });
        cookies.set("token", "", { path: "/" });
      }
      setLoading(false);
    });
  };
  // get local cookies
  const existingCookies = {
    email: cookies.get("email"),
    token: cookies.get("token")
  };

  // if cookies exist > verify or show Home
  if (cookies.get("email") && cookies.get("token") && counter === 0) {
    verifyCookies(existingCookies);
    setCounter(1);
  } else if (counter === 0) {
    setLoading(false);
    setCounter(1);
  }

  /**
   * Function to log off
   * @function logOff
   * @returns {void}
   */
  const logOff = () => {
    cookies.set("email", "", {
      path: "/"
    });
    cookies.set("token", "", {
      path: "/"
    });
    setAuthStatus(false);
  };

  if (loading) {
    // on load
    return <Loading />;
  } else if (props.authStatus) {
    return (
      <Suspense fallback={<Loading />}>
        <Content />
      </Suspense>
    );
  } else {
    // if not authenticated
    return (
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    );
  }
};

const mapStateToProps = (state: AppState) => {
  console.log(state);
  return {
    posts: state.posts,
    sources: state.sources,
    user: state.user,
    thisUser: state.currentUser,
    authStatus: state.authStatus
  };
};

export default connect(
  mapStateToProps,
  { checkUser, currentUser }
)(withCookies(App));
