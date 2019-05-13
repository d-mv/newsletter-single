import { SHOW_MODULE, SET_MESSAGE, TOGGLE_SHOW_FILTER,SystemActionTypes } from "./types";


export function showModule(
  state = '',
  action: SystemActionTypes
) {
  switch (action.type) {
    case SHOW_MODULE: {
      return action.payload;
    }
    default:
      return state;
  }
}
export function setMessage(
  state = '',
  action: SystemActionTypes
) {
  switch (action.type) {
    case SET_MESSAGE: {
      return action.payload;
    }
    default:
      return state;
  }
}
export function toggleShowFilter(
  state = false,
  action: SystemActionTypes
) {
  switch (action.type) {
    case TOGGLE_SHOW_FILTER: {
      return action.payload;
    }
    default:
      return state;
  }
}