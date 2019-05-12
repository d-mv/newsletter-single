import React from "react";
import { connect } from "react-redux";

import { AppState } from "../store";
import { checkUser, setAuthStatus } from "../store/user/actions";

import "../styles/_ui.scss";
import style from "../styles/Profile.module.scss";

const Profile = (props: {
  checkUser: (arg0?: any) => any;
  setAuthStatus: (arg0: boolean) => any;
  thisUser: any;
}) => {
  console.log(props);
  const signOff = () => {
    const query = {
      action: ["user", "signOff"],
      fields: props.thisUser
    };
    props.checkUser(query).then((res: any) => {
      const response = res.payload.data;
      if (response.status) {
        props.setAuthStatus(false);
      }
    });
  };
  return (
    <main>
      <div className={style.buttonWrapper}>
        <button
          className="button"
          aria-label="Log off"
          onClick={() => signOff()}
        >
          Log off
        </button>
      </div>
    </main>
  );
};

const mapStateToProps = (state: AppState) => ({
  thisUser: state.currentUser
});

export default connect(
  mapStateToProps,
  { checkUser, setAuthStatus }
)(Profile);
