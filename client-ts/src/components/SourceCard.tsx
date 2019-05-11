import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import { Source } from "../store/source/types";

import Button from "./PostElements/PostButton";
import Edit from "./SourceEdit";
import {
  Card,
  CardWrapper,
  NameWrapper,
  Name,
  Url
} from "../styles/SourceCard";
import { Wrapper } from "../styles/PostCard";

const SourceCard = (props: {
  source: Source;
  opened: string;
  setOpen: (arg0: any) => void;
  update: (arg0: any) => any;
}) => {
  const editToggler = (toggleProps: any) => {
    props.opened === toggleProps.id
      ? props.setOpen("")
      : props.setOpen(toggleProps.id);
  };

  const submitChanges = (submitProps: any) => {
    editToggler(submitProps._id);
    props.update(submitProps);
  };
  const cardEdit =
    props.opened === props.source._id ? (
      <Edit source={props.source} submit={submitChanges} />
    ) : null;

  return (
    <Card>
      <CardWrapper onClick={() => editToggler({ id: props.source._id })}>
        <NameWrapper>
          <Name> {props.source.name}</Name>
          <Url>{props.source.url}</Url>
        </NameWrapper>
        <Wrapper margin="0.2rem">
          <Button
            update={editToggler}
            mode="edit"
            id={props.source._id}
            status={props.opened === props.source._id}
          >
            <FaEdit />
          </Button>
          <Button
            update={editToggler}
            mode="delete"
            id={props.source._id}
            status={false}
          >
            <FaTrash />
          </Button>
        </Wrapper>
      </CardWrapper>
      {cardEdit}
    </Card>
  );
};

export default SourceCard;
