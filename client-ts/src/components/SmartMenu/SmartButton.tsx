import React from "react";
import { connect } from "react-redux";
import { AppState } from "../../store";

import { apiRequest } from "../../store/user/actions";
import { showModule } from "../../store/app/actions";

import style from "../../styles/SmartButton.module.scss";

const Button = (props: {
  children: any;
  mode: string;
  accent: boolean;
  function?: () => void;
  apiRequest: (arg0?: any) => any;
  thisUser: any;
  module: string;
  showModule: (arg0: string) => any;
}) => {
  const [refresh, toggleRefresh] = React.useState(false);
  console.log(props);

  const handleRefreshClick = () => {
    console.log("refresh clicked");
    toggleRefresh(true);
    // set query object
    const query = {
      token: props.thisUser.token,
      action: ["post", "refresh"]
    };
    // request redux action to query API
    props.apiRequest(query).then((response: any) => {
      toggleRefresh(false);
      console.log(response);
      const message = response.payload.data.message;
      // this.changeMessage(message);
    });
  };

  const handleClick = (cProps: { mode: string; child: any; func: any }) => {
    if (cProps.child === "BACK" || cProps.child === "HOME") {
      // handleShowModuleClick("posts");
      props.showModule("posts");
    } else if (cProps.child === "SOURCES") {
      // handleShowModuleClick("sources");
      props.showModule("sources");
    } else if (props.mode === "profile") {
      // handleShowModuleClick("profile");
      props.showModule("profile");
    } else if (props.mode === "refresh") {
      handleRefreshClick();
    }
  };
  // selectPostToShow = (props: { id: string }) => {
  //   // set query object
  //   const query = {
  //     token: props.thisUser.token,
  //     action: ["post", "show"],
  //     id: props.id
  //   };
  //   // request redux action to query API
  //   props.apiRequest(query).then((res: any) => {
  //     const response = res.payload.data;
  //     if (response.authed) {
  //       this.showModule("post");
  //       this.setState({
  //         showPost: response.post
  //       });
  //     }
  //   });
  // };

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

// export default Button;

const mapStateToProps = (state: AppState) => ({
  thisUser: state.currentUser,
  module: state.module
});

export default connect(
  mapStateToProps,
  { apiRequest, showModule }
)(Button);
