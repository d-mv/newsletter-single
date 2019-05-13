import { LOAD_SOURCES, SET_SOURCES, SET_FILTER } from "./types";
import axios from "axios";
import { NewQuery } from "../../types";

const promise = (query: NewQuery) =>
  axios.post("/", {
    query
  });

export function loadSources(token: string) {
  const query = {
    token: token,
    action: ["source", "fetch"]
  };
  const promise = axios
    .post("/", {
      query
    })
    .then(response => response)
    .catch(error => error);

  return {
    type: LOAD_SOURCES,
    payload: promise
  };
}

export function setSources(sources: any) {
  return {
    type: SET_SOURCES,
    payload: sources
  };
}

export function setFilter(id: string) {
  console.log("act " + id);
  return {
    type: SET_FILTER,
    payload: id
  };
}
