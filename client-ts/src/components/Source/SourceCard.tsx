import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import { Source } from "../../store/source/types";

import Button from "../Post/PostButton";
import Edit from "./SourceEdit";
import style from '../../styles/SourceCard.module.scss'

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
    <section className={style.source}>
      <div className={style.card} onClick={() => editToggler({ id: props.source._id })}>
        <section className={style.nameWrapper}>
          <div className={style.name}> {props.source.name}</div>
          <div className={style.url}>{props.source.url}</div>
        </section>
        <div className={style.wrapper}>
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
        </div>
      </div>
      {cardEdit}
    </section>
  );
};

export default SourceCard;
