import React, { useState } from "react";

import { Source } from "../../store/source/types";

import style from "../../styles/SourceEditAdd.module.scss";

const SourceEdit = (props: {
  source?: Source;
  submit: (arg0: Source) => any;
  close?: () => void;
}) => {

  let currentSource = {
    _id: "",
    name: "",
    url: "",
    home: ""
  };

  if (props.source) {
    currentSource = props.source;
  }

  const [name, setName] = useState(currentSource.name);
  const [url, setUrl] = useState(currentSource.url);
  const [home, setHome] = useState(currentSource.home);
  let errors = {
    name: "",
    url: "",
    home: ""
  };

  const closeForm = () => {
    if (props.close) {
      props.close();
    }
  };

  const checkInput = (props: {
    value: string;
    field: string;
    type: string;
  }) => {
    const regex = new RegExp(
      "^(http://www.|https://www.|http://|https://)?[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$",
      "gm"
    );
    switch (props.field) {
      case "name":
        if (props.value !== "") {
          errors.name = "";
          return true;
        } else {
          errors.name = "Name is not provided";
          return false;
        }
      case "url":
        if (props.value !== "") {
          if (regex.test(props.value)) {
            errors.url = "";
            return true;
          } else {
            errors.url = "The URL is wrong";
            return false;
          }
        } else {
          errors.name = "URL is not provided";
          return false;
        }
      default:
        if (props.value !== "") {
          if (regex.test(props.value)) {
            errors.home = "";
            return true;
          } else {
            errors.home = "The homepage is wrong";
            return false;
          }
        } else {
          errors.home = "Homepage is not provided";
          return false;
        }
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const checkName =
      checkInput({ value: name, field: "name", type: "text" }) &&
      checkInput({ value: url, field: "url", type: "url" }) &&
      checkInput({ value: home, field: "home", type: "url" });
    const newSource = {
      _id: currentSource._id ? currentSource._id : "",
      name,
      url,
      home
    };
    const oldSource = {
      _id: props.source ? props.source._id : "",
      name: props.source ? props.source.name : "",
      url: props.source ? props.source.url : "",
      home: props.source ? props.source.home : ""
    };
    const diff = JSON.stringify(newSource) === JSON.stringify(oldSource);
    if (!diff && checkName && newSource !== currentSource) {
      props.submit(newSource);
      closeForm();
    }
  };

  const handleInputChange = (event: any) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "url":
        setUrl(event.target.value);
        break;
      default:
        setHome(event.target.value);
        break;
    }
  };
  const cancelButton = props.source ? null : (
    <button className={style.cancel} aria-label='Cancel' onClick={() => closeForm()}>
      Cancel
    </button>
  );
  const formElements = (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Source</span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <span>URL</span>
        <input
          type="url"
          name="url"
          value={url}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <span>Homepage</span>
        <input
          type="url"
          name="home"
          value={home}
          onChange={handleInputChange}
        />
      </label>
      {errors.name ? (
        <div className={style.error}>- {errors.name}</div>
      ) : null}
      {errors.url ? <div className={style.error}>- {errors.url}</div> : null}
      {errors.home ? (
        <div className={style.error}>- {errors.home}</div>
      ) : null}
      <div className={style.buttonsWrapper}>
        <button
          className={style.submit}
          aria-label={props.source ? "Submit" : "Add"}
        >
          <input
            type="button"
            value={props.source ? "Submit" : "Add"}
            id="submit_button"
          />
        </button>
        {cancelButton}
      </div>
    </form>
  );
  const editForm = props.source ? (
    <section className={style.edit} data-test="component__source-edit">{formElements}</section>
  ) : (
    <section className={style.add} data-test="component__source-add">{formElements}</section>
  );
  return editForm;
};

export default SourceEdit;
