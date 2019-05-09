// Describing the shape of the system's slice of state
import { NewQuery } from "../../types";

export interface Source {
  _id: string;
  name: string;
  url: string;
  home: string;
}

export interface SystemStateSource {
  sources: Source[];
}

// export interface Query {
//   action: [string, string];
//   id: string;
//   fields?: { [index: string]: string };
// }

// export interface PostId {
//   id: string;
// }
// Describing the different ACTION NAMES available
export const SET_SOURCES = "SET_SOURCES";
// export const UPDATE_POST = "UPDATE_POST";
// export const SELECT_POST = "SELECT_POST";

interface SetSourcesAction {
  type: typeof SET_SOURCES;
  payload: NewQuery;
}

// interface UpdatePostAction {
//   type: typeof UPDATE_POST;
//   payload: Query;
// }

// interface SelectPostAction {
//   type: typeof SELECT_POST;
//   payload: PostId;
// }

export type SystemActionTypes = SetSourcesAction;
// | UpdatePostAction
// | SelectPostAction;
