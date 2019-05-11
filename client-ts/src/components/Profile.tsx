import React from "react";
import { connect } from "react-redux";
import { AppState } from "../store";

import { checkUser } from "../store/user/actions";
import { CurrentUser } from "../types";
import Content from "../styles/Content";
import { Button } from "../styles/_uiElements";

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
    <Content>
      <Button onClick={() => signOff()}>Log off</Button>
    </Content>
  );
};

const mapStateToProps = (state: AppState) => ({});

export default connect(
  mapStateToProps,
  { checkUser }
)(Profile);
