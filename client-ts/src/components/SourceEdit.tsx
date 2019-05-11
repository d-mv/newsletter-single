import React, { useState } from "react";

import { Source } from "../store/source/types";

import { Menu} from "../styles/Filter";

import {
  Edit,
  Error,
  Submit,
  Add,
  Cancel,
  ButtonsWrapper
} from "../styles/SourceCard";
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
    console.log("form clicked");
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
    if (checkName && newSource !== currentSource) {
      props.submit(newSource);
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
      {errors.name ? <Error>- {errors.name}</Error> : null}
      {errors.url ? <Error>- {errors.url}</Error> : null}
      {errors.home ? <Error>- {errors.home}</Error> : null}
      <ButtonsWrapper>
        <Submit>
          <input
            type="button"
            value={props.source ? "Submit" : "Add"}
            id="submit_button"
          />
        </Submit>
        <Cancel onClick={() => closeForm()}>Cancel</Cancel>
      </ButtonsWrapper>
    </form>
  );

  const editForm = props.source ? (
    <Edit>{formElements}</Edit>
  ) : (
    <Add>{formElements}</Add>
  );
  return editForm;
};

export default SourceEdit;
