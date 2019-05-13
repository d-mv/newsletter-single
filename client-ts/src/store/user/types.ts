// Describing the shape of the system's slice of state
export interface User {
  name: string;
  password: string;
  email: string;
}
export interface CurrentUser {
  email: string;
  token: string;
}

export interface UserSystemState {
  user: User;
  currentUser: CurrentUser;
}

export interface UserQuery {
  action: [string, string];
  id: string;
  fields?: { [index: string]: string };
}
// Describing the different ACTION NAMES available
export const CHECK_USER = "CHECK_USER";
export const API_REQUEST = "API_REQUEST";
export const CURRENT_USER = "CURRENT_USER";
export const SET_AUTH_STATUS = "SET_AUTH_STATUS";

interface CheckUserAction {
  type: typeof CHECK_USER;
  payload: UserSystemState;
}
interface ApiRequestAction {
  type: typeof API_REQUEST;
  payload: UserSystemState;
}
interface CurrentUserAction {
  type: typeof CURRENT_USER;
  payload: UserSystemState;
}
interface SetAuthStatusAction {
  type: typeof SET_AUTH_STATUS;
  payload: UserSystemState;
}

export type SystemActionTypes =
  | CheckUserAction
  | ApiRequestAction
  | CurrentUserAction
  | SetAuthStatusAction;
