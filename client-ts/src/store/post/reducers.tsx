import {
  SET_POSTS,
  UPDATE_POST,
  SELECT_POST,
  SystemState,
  Query,
  PostId,
  SystemActionTypes
} from "./types";

const initialState: SystemState = {
  posts: []
};

export function loadPosts(
  state = initialState,
  action: SystemActionTypes
): SystemState {
  switch (action.type) {
    case SET_POSTS: {
      return {
        // ...state,
        ...action.payload
      };
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
