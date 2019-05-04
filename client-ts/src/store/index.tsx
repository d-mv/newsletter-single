import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import axios from "axios";

// import { Provider } from "react-redux";
// import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";
import reduxPromise from "redux-promise";

// reducers
import { loadPosts } from "./post/reducers";
import { loadSources } from "./source/reducers";
// import sourcesReducer from "./reducers/sources_reducer";
// import addSourceReducer from "./reducers/add_source_reducer";
// import updatePostReducer from "./reducers/update_post_reducer";
// import updateSourceReducer from "./reducers/update_source_reducer";
// import refreshPostsReducer from "./reducers/refresh_posts_reducer";
// import selectPostReducer from "./reducers/select_post_reducer";
// import deleteSourceReducer from "./reducers/delete_source_reducer";

// setup axios
axios.defaults.baseURL = `${process.env.REACT_APP_SERVER}/api`;
axios.defaults.headers.common["Authorization"] = process.env.REACT_APP_TOKEN;

const rootReducer = combineReducers({
  posts: loadPosts,
  sources: loadSources
  // addSource: addSourceReducer,
  // selectPost: selectPostReducer,
  // updatePost: updatePostReducer,
  // updateSource: updateSourceReducer,
  // deleteSource: deleteSourceReducer,
  // refreshPostsReducer: refreshPostsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [reduxPromise, logger];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  // const initialState = {
  //   posts: [],
  //   sources: [],
  //   addSource: "",
  //   updatePost: "",
  //   selectPost: "",
  //   sourceCreateModule: true,
  //   deleteSource: "",
  //   refreshPostsReducer: ""
  // };

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
