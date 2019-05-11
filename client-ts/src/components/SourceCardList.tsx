import React, { Suspense } from "react";

import { Source } from "../store/source/types";

import SourceCard from "./SourceCard";

import { SourcesList, AddSource } from "../styles/SourceCardList";
import { Button } from "../styles/_uiElements";
const SourceEdit = React.lazy(() => import("./SourceEdit"));

const SourceCardList = (props: {
  sources: Source[];
  submit: (arg0: Source) => any;
  update: (arg0: any) => void;
}) => {
  const [openEditId, setOpenEditId] = React.useState("");
  const [showAddSource, setAddSource] = React.useState(false);

  const toggleShowAddSource = () => {
    setAddSource(!showAddSource);
  };
  const addSource = (
    <Suspense fallback={<div />}>
      <SourceEdit submit={props.submit} close={toggleShowAddSource} />
    </Suspense>
  );
  return (
    <SourcesList>
      {props.sources.map((source: Source) => {
        return (
          <SourceCard
            key={source._id}
            source={source}
            opened={openEditId}
            setOpen={setOpenEditId}
            update={props.update}
          />
        );
      })}
      <AddSource>
        <Button onClick={() => toggleShowAddSource()}>Add source</Button>
      </AddSource>
      {showAddSource ? addSource : null}
    </SourcesList>
  );
};

export default SourceCardList;
