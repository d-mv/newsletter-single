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

// export interface UserToken {
//   id: string;
// }
// Describing the different ACTION NAMES available
export const CHECK_USER = "CHECK_USER";
export const API_REQUEST = "API_REQUEST";
// export const UPDATE_POST = "UPDATE_POST";
// export const SELECT_POST = "SELECT_POST";

interface CheckUserAction {
  type: typeof CHECK_USER;
  payload: UserSystemState;
}
interface ApiRequestAction {
  type: typeof API_REQUEST;
  payload: UserSystemState;
}
// interface UpdatePostAction {
//   type: typeof UPDATE_POST;
//   payload: UserQuery;
// }

// interface SelectPostAction {
//   type: typeof SELECT_POST;
//   payload: PostId;
// }

export type SystemActionTypes = CheckUserAction | ApiRequestAction;
// | UpdatePostAction
// | SelectPostAction;
