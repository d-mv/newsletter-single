// Describing the different ACTION NAMES available
export const SHOW_MODULE = "SHOW_MODULE";
export const SET_MESSAGE = "SET_MESSAGE";
export const TOGGLE_SHOW_FILTER = "TOGGLE_SHOW_FILTER";


interface ShowModuleAction {
  type: typeof SHOW_MODULE;
  payload: string;
}
interface SetMessageAction {
  type: typeof SET_MESSAGE;
  payload: string;
}
interface ToggleShowFilterAction {
  type: typeof TOGGLE_SHOW_FILTER;
  payload: boolean;
}

export type SystemActionTypes = ShowModuleAction | SetMessageAction | ToggleShowFilterAction
