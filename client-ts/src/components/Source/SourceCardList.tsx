import React, { Suspense } from "react";

import { Source } from "../../store/source/types";

import SourceCard from "./SourceCard";

import "../../styles/_ui.scss";
import style from "../../styles/SourceCardList.module.scss";

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
    <main className={style.list}>
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
      <section className={style.addSource}>
        <button className="button" aria-label='Add source' onClick={() => toggleShowAddSource()}>
          Add source
        </button>
      </section>
      {showAddSource ? addSource : null}
    </main>
  );
};

export default SourceCardList;
