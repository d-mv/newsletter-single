import {
  SET_POSTS,
  LOAD_POSTS,
  UPDATE_POST,
  SELECT_POST,TOGGLE_SHOW_READ,
  // SystemState,
  Query,
  NewQuery,
  PostId,
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

const emptyPost: PostId = {
  id: ""
};

export function selectPost(
  state = emptyPost,
  action: SystemActionTypes
): PostId {
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
