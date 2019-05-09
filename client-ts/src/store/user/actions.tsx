import { CHECK_USER, UserQuery } from "./types";
import axios from "axios";

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
