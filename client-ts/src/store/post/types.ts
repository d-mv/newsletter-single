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

export const emptyPost: Post = {
  _id: "",
  source: "",
  sourceId: "",
  title: "",
  url: "",
  author: "",
  published: new Date(),
  parsed: new Date(),
  text: "",
  readTime: 0,
  pages: 0,
  read: false,
  star: false
};


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
export const LOAD_POSTS = "LOAD_POSTS";
export const SET_POSTS = "SET_POSTS";
export const UPDATE_POST = "UPDATE_POST";
export const SELECT_POST = "SELECT_POST";

export const TOGGLE_SHOW_READ = "TOGGLE_SHOW_READ";

interface LoadPostsAction {
  type: typeof LOAD_POSTS;
  payload: NewQuery;
}
interface SetPostsAction {
  type: typeof SET_POSTS;
  payload: any;
}
interface UpdatePostAction {
  type: typeof UPDATE_POST;
  payload: Query;
}

interface SelectPostAction {
  type: typeof SELECT_POST;
  payload: PostId;
}

interface ToggleShowReadAction {
  type: typeof TOGGLE_SHOW_READ;
  payload: boolean;
}

export type SystemActionTypes =
  | LoadPostsAction
  | SetPostsAction
  | UpdatePostAction
  | SelectPostAction
  | ToggleShowReadAction;
