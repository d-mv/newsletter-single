// Describing the different ACTION NAMES available
export const SHOW_MODULE = "SHOW_MODULE";
export const SET_MESSAGE = "SET_MESSAGE";


interface ShowModuleAction {
  type: typeof SHOW_MODULE;
  payload: string;
}
interface SetMessageAction {
  type: typeof SET_MESSAGE;
  payload: string;
}

export type SystemActionTypes = ShowModuleAction | SetMessageAction
