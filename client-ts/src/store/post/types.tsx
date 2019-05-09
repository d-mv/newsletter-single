// Describing the shape of the system's slice of state
export interface Post {
  _id: string;
  source: string;
  sourceId: string;
  title: string;
  url: string;
  author: string;
  published: Date;
  parsed: Date;
  text: string;
  readTime: number;
  pages: number;
  read: boolean;
  star: boolean;
}

export interface SystemState {
  posts: Post[];
  token: "";
  action: [];
}

export interface Query {
  action: [string, string];
  id: string;
  fields?: { [index: string]: string };
}
export interface NewQuery {
  token: string;
  action: [string, string];
  id?: string;
  fields?: { [index: string]: string };
}

export interface PostId {
  id: string;
}
// Describing the different ACTION NAMES available
export const SET_POSTS = "SET_POSTS";
export const UPDATE_POST = "UPDATE_POST";
export const SELECT_POST = "SELECT_POST";

interface SetPostsAction {
  type: typeof SET_POSTS;
  payload: NewQuery;
}
interface UpdatePostAction {
  type: typeof UPDATE_POST;
  payload: Query;
}

interface SelectPostAction {
  type: typeof SELECT_POST;
  payload: PostId;
}

export type SystemActionTypes =
  | SetPostsAction
  | UpdatePostAction
  | SelectPostAction;
