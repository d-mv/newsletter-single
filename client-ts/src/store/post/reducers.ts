import {
  SET_POSTS,
  LOAD_POSTS,
  UPDATE_POST,
  SELECT_POST, TOGGLE_SHOW_READ,
  Query,
  NewQuery,
  SystemActionTypes
} from "./types";

const emptyQuery: NewQuery = {
  token: "",
  action: ["", ""]
};
export function loadPosts(
  state = emptyQuery,
  action: SystemActionTypes
): NewQuery {
  switch (action.type) {
    case LOAD_POSTS: {
      return {
        ...action.payload
      };
    }
    default:
      return state;
  }
}
export function setPosts(state = [], action: SystemActionTypes) {
  switch (action.type) {
    case SET_POSTS: {
      return action.payload;
    }
    default:
      return state;
  }
}
export function toggleShowRead(state = false, action: SystemActionTypes) {
  switch (action.type) {
    case TOGGLE_SHOW_READ: {
      return action.payload;
    }
    default:
      return state;
  }
}

const emptyState: Query = {
  action: ["", ""],
  id: "",
  fields: { "": "" }
};

export function updatePost(
  state = emptyState,
  action: SystemActionTypes
): Query {
  switch (action.type) {
    case UPDATE_POST: {
      return {
        ...action.payload
      };
    }
    default:
      return state;
  }
}

export function selectPost(
  state = {},
  action: SystemActionTypes
) {
  switch (action.type) {
    case SELECT_POST: {
      return {
        ...action.payload
      };
    }
    default:
      return state;
  }
}