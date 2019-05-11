import {
  CHECK_USER,
  API_REQUEST,
  UserSystemState,
  // UserQuery,
  SystemActionTypes
} from "./types";

const initialState: UserSystemState = {
  user: { name: "", password: "", email: "" },
  currentUser: { email: "", token: "" }
};

export function checkUser(
  state = initialState,
  action: SystemActionTypes
): UserSystemState {
  switch (action.type) {
    case CHECK_USER: {
      return {
        // ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}
export function apiRequest(
  state = initialState,
  action: SystemActionTypes
): UserSystemState {
  switch (action.type) {
    case API_REQUEST: {
      return {
        // ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}

// const emptyState: Query = {
//   action: ["", ""],
//   id: "",
//   fields: { "": "" }
// };

// export function updatePost(
//   state = emptyState,
//   action: SystemActionTypes
// ): Query {
//   switch (action.type) {
//     case UPDATE_POST: {
//       return {
//         ...action.payload
//       };
//     }
//     default:
//       return state;
//   }
// }

// const emptyPost: PostId = {
//   id: ""
// };

// export function selectPost(
//   state = emptyPost,
//   action: SystemActionTypes
// ): PostId {
//   switch (action.type) {
//     case SELECT_POST: {
//       return {
//         ...action.payload
//       };
//     }
//     default:
//       return state;
//   }
// }
