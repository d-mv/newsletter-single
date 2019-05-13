import {
  SET_POSTS, LOAD_POSTS,
  UPDATE_POST, TOGGLE_SHOW_READ,
  SELECT_POST
} from "./types";
import { NewQuery } from "../../types";

import axios from "axios";

const promise = (query: NewQuery) => (
  axios
    .post("/", {
      query
    }).then(response => response)
    .catch(error => error))

export function loadPosts(token:string) {
  const query = {
  token: token,
  action: ["post", "fetch"]
};
  const promise = axios
    .post("/", {
      query
    })
    .then(response => response)
    .catch(error => error);

  return {
    type: LOAD_POSTS,
    payload: promise
  };
}

export function setPosts(posts: any) {
  return {
    type: SET_POSTS,
    payload: posts
  };
}

export function toggleShowRead(current: boolean) {
  return {
    type: TOGGLE_SHOW_READ,
    payload: !current
  };
}

export function updatePost(props: { token: string, id: string, fields: any }) {
  const query = {
    token: props.token,
    action: ["post", "update"],
    id: props.id,
    fields: props.fields
  };
  const promise = axios
    .post("/", {
      query
    })
    .then((response:any) => response)
    .catch(error => error);

  return {
    type: UPDATE_POST,
    payload: promise
  };
}

export function selectPost(props: { token: string, id: string }) {
  const query = {
    token: props.token,
    action: ["post", "show"],
    id: props.id
  };
  const request: any = promise(query)
    .then((response: any) => response.data.post || {})
    .catch((error: any) => error);

  let payload = request
  if (props === { token: '', id: '' }) {
    return {
      type: '',
      payload: payload
    };
  } else {
    return {
      type: SELECT_POST,
      payload: payload
    };
  }
}
