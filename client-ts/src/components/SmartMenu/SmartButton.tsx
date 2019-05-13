import React from "react";
import { connect } from "react-redux";
import { AppState } from "../../store";

import { apiRequest } from "../../store/user/actions";
import { toggleShowRead } from "../../store/post/actions";
import { showModule, setMessage } from "../../store/app/actions";

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
  toggleShowRead: (current: boolean) => { type: string; payload: boolean; };
}) => {
  const [refresh, toggleRefresh] = React.useState(false);
  console.log(props);

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
      props.showModule("posts");
    } else if (cProps.child === "SOURCES") {
      props.showModule("sources");
    } else if (props.mode === "profile") {
      props.showModule("profile");
    } else if (props.mode === "refresh") {
      handleRefreshClick();}
      else if (props.mode === 'showRead') {
        props.toggleShowRead(props.showRead);
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
  showRead: state.showRead
});

export default connect(
  mapStateToProps,
  { apiRequest, showModule, setMessage, toggleShowRead }
)(Button);
