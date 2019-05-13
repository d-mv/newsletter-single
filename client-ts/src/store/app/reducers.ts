import { SHOW_MODULE, SystemActionTypes } from "./types";


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