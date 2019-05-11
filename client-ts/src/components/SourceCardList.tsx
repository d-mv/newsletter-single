import React from "react";

import { Source } from "../store/source/types";

import SourceCard from "./SourceCard";

import { SourcesList,AddSource } from "../styles/SourceCardList";
import {Button}from '../styles/_uiElements'

const SourceCardList = (props: { sources: Source[] }) => {
  const [openEditId, setOpenEditId] = React.useState('');

  return (
    <SourcesList>
    <AddSource>
      <Button>Add source</Button>
    </AddSource>
      {props.sources.map((source: Source) => {
        return (
          <SourceCard
            key={source._id}
            source={source}
            opened={openEditId}
            setOpen={setOpenEditId}
          />
        );
      })}
    </SourcesList>
  );
};

export default SourceCardList;
