import { SHOW_MODULE, SET_MESSAGE } from "./types";

export function showModule(module: string) {
  return {
    type: SHOW_MODULE,
    payload: module
  };
}
export function setMessage(message: string) {
  return {
    type: SET_MESSAGE,
    payload: message
  };
}