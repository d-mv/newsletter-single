import { SHOW_MODULE, SET_MESSAGE, TOGGLE_SHOW_FILTER } from "./types";

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
export function toggleShowFilter(filter:boolean) {
  return {
    type: TOGGLE_SHOW_FILTER,
    payload: !filter
  };
}