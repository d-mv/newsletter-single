import {
  // SystemState,
  SET_POSTS,LOAD_POSTS,
  Query,
  PostId,
  UPDATE_POST,TOGGLE_SHOW_READ,
  SELECT_POST
} from "./types";
import { NewQuery } from "../../types";

import axios from "axios";

// const apiUrl = `${process.env.REACT_APP_SERVER}/api`;

export function loadPosts(query: NewQuery) {
  const promise = axios
    .post("/", {
      query
    })
    .then(response => response)
    .catch(error => error);

  return {
    type: LOAD_POSTS,
    payload: promise
  };
}

export function setPosts(posts:any) {
  return {
    type: SET_POSTS,
    payload: posts
  };
}
export function toggleShowRead(current:boolean) {
         return {
           type: TOGGLE_SHOW_READ,
           payload: !current
         };
       }

export function updatePost(query: Query) {
  const promise = axios
    .post("/", {
      query
    })
    .then(response => response)
    .catch(error => error);

  return {
    type: UPDATE_POST,
    payload: promise
  };
}

export function selectPost(postId: PostId) {
  const promise = axios
    .get(`/post/${postId}`)
    .then(response => response)
    .catch(error => error);
  return {
    type: SELECT_POST,
    payload: promise
  };
}

// export function updateSource(query) {
//   const promise = fetch(apiUrl, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ query })
//   })
//     .then(r => r.json())
//     .catch(e => {
//       return e;
//     });

//   return {
//     type: "UPDATE_SOURCE",
//     payload: promise
//   };
// }
// export function refreshPosts() {
//   const promise = fetch(apiUrl, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       query: {
//         action: ["post", "refresh"]
//       }
//     })
//   })
//     .then(r => r.json())
//     .catch(e => {
//       return e;
//     });

//   return {
//     type: "REFRESH_POSTS",
//     payload: promise
//   };
// }
// export function addSource(query) {
//   const promise = fetch(apiUrl, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ query })
//   })
//     .then(r => r.json())
//     .catch(e => {
//       return e;
//     });

//   return {
//     type: "ADD_SOURCE",
//     payload: promise
//   };
// }
// export function deleteSource(query) {
//   if (query.action && query.id) {
//     const promise = fetch(apiUrl, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ query })
//     })
//       .then(r => r)
//       // r.json())
//       .catch(e => {
//         return e;
//       });

//     return {
//       type: "DELETE_SOURCE",
//       payload: promise
//     };
//   } else {
//     return "Missing action and/or id";
//   }
// }

// export function setSources() {
//   const promise = fetch(`${apiUrl}/sources`).then(r => r.json());
//   return {
//     type: "SET_SOURCES",
//     payload: promise
//   };
// }

// export function selectPost(postId) {
//   const promise = fetch(`${apiUrl}/post/${postId}`).then(r => r.json());
//   return {
//     type: "SELECT_POST",
//     payload: promise
//   };
// }

// export function sourceCreateModule(status) {
//   return {
//     type: "SHOW_MODULE",
//     payload: status
//   };
// }
