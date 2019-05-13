import React from "react";
import { connect } from "react-redux";
import { AppState } from "../../store";

import { apiRequest } from "../../store/user/actions";
import { toggleShowRead, selectPost } from "../../store/post/actions";
import {
  showModule,
  setMessage,
  toggleShowFilter
} from "../../store/app/actions";

import style from "../../styles/SmartButton.module.scss";

const Button = (props: {
  children: any;
  mode: string;
  accent: boolean;
  function?: () => void;
  apiRequest: (arg0?: any) => any;
  thisUser: any;
  module: string;
  showRead: boolean;
  showModule: (arg0: string) => any;
  setMessage: (arg0: string) => any;
  selectPost: (arg0: { token: string; id: string }) => any;

  showFilter: boolean;
  toggleShowFilter: (arg0: boolean) => void;

  toggleShowRead: (current: boolean) => { type: string; payload: boolean };
}) => {
  const [refresh, toggleRefresh] = React.useState(false);

  const handleRefreshClick = () => {
    // start icon rotation
    toggleRefresh(true);
    // set query object
    const query = {
      token: props.thisUser.token,
      action: ["post", "refresh"]
    };
    // request redux action to query API
    props.apiRequest(query).then((response: any) => {
      // stop icon rotation
      toggleRefresh(false);
      // save response message
      props.setMessage(response.payload.data.message);
    });
  };

  const handleClick = (cProps: { mode: string; child: any; func: any }) => {
    if (cProps.child === "BACK" || cProps.child === "HOME") {
      // if back -clear post from state
      switch (cProps.child) {
        case "BACK":
          props.selectPost({ token: "", id: "" });
          break;
      }
      props.showModule("posts");
    } else if (cProps.child === "SOURCES") {
      props.showModule("sources");
    } else if (props.mode === "profile") {
      props.showModule("profile");
    } else if (props.mode === "refresh") {
      handleRefreshClick();
    } else if (props.mode === "showRead") {
      props.toggleShowRead(props.showRead);
    } else if (props.mode === "filter") {
      props.toggleShowFilter(props.showFilter);
    } else {
      cProps.func();
    }
  };

  let styleClass;
  if (props.mode === "refresh") {
    styleClass = refresh ? style.smartRotate : style.smartRefresh;
  } else if (props.accent) {
    styleClass = style.smartAccented;
  } else {
    styleClass = style.smart;
  }
  const func = props.function ? props.function : null;
  return (
    <button
      className={styleClass}
      aria-label={props.mode}
      onClick={() =>
        handleClick({
          mode: props.mode,
          child: props.children,
          func: func
        })
      }
    >
      {props.children}
    </button>
  );
};

const mapStateToProps = (state: AppState) => ({
  thisUser: state.currentUser,
  module: state.module,
  showRead: state.showRead,
  showFilter: state.showFilter
});

export default connect(
  mapStateToProps,
  {
    apiRequest,
    showModule,
    setMessage,
    toggleShowRead,
    selectPost,
    toggleShowFilter
  }
)(Button);
