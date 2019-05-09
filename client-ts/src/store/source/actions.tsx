import {
  SET_SOURCES
  // Query,
  // PostId,
  // UPDATE_POST,
  // SELECT_POST
} from "./types";
import axios from "axios";
import { NewQuery } from "../../types";

// const apiUrl = `${process.env.REACT_APP_SERVER}/api`;

export function loadSources(query: NewQuery) {
  const promise = axios
    .post("/", {
      query
    })
    .then(response => response)
    .catch(error => error);
  return {
    type: SET_SOURCES,
    payload: promise
  };
}
