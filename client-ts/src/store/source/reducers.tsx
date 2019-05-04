import {
  SET_SOURCES,
  // UPDATE_POST,
  // SELECT_POST,
  SystemStateSource,
  // Query,
  // PostId,
  SystemActionTypes
} from "./types";

const initialState: SystemStateSource = {
  sources: []
};

export function loadSources(
         state = initialState,
         action: SystemActionTypes
       ): SystemStateSource {
         switch (action.type) {
           case SET_SOURCES: {
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
