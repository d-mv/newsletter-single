import React from "react";
import { connect } from "react-redux";
import { AppState } from "../store";

import { checkUser } from "../store/user/actions";
import { CurrentUser } from "../types";
// import Content from "../styles/Content";
// import { Button } from "../styles/_uiElements";
import "../styles/_ui.scss";
import style from '../styles/Profile.module.scss'

const Profile = (props: {
  checkUser: (arg0?: any) => any;
  currentUser: CurrentUser;
  signOff: () => void;
}) => {
  const signOff = () => {
    const query = {
      action: ["user", "signOff"],
      fields: props.currentUser
    };
    props.checkUser(query).then((res: any) => {
      const response = res.payload.data;
      if (response.status) {
        props.signOff();
      }
    });
  };
  return (
    <main>
      <div className={style.buttonWrapper}>
        <button className="button" aria-label='Log off' onClick={() => signOff()}>
          Log off
        </button>
      </div>
    </main>
  );
};

const mapStateToProps = (state: AppState) => ({});

export default connect(
  mapStateToProps,
  { checkUser }
)(Profile);
