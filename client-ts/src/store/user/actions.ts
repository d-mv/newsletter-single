import {
  CHECK_USER,
  UserQuery,
  CURRENT_USER,
  SET_AUTH_STATUS,
  CurrentUser
} from "./types";
import axios from "axios";

export function currentUser(user: CurrentUser) {
  return {
    type: CURRENT_USER,
    payload: user
  };
}
export function setAuthStatus(status: boolean) {
  return {
    type: SET_AUTH_STATUS,
    payload: status
  };
}

export function checkUser(query: UserQuery) {
  const promise = axios
    .post("/", {
      query
    })
    .then(response => response)
    .catch(error => error);

  return {
    type: CHECK_USER,
    payload: promise
  };
}
export function apiRequest(query: UserQuery) {
  const promise = axios
    .post("/", {
      query
    })
    .then(response => response)
    .catch(error => error);

  return {
    type: CHECK_USER,
    payload: promise
  };
}
