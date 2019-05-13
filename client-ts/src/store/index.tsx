import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import axios from "axios";

import { logger } from "redux-logger";
import reduxPromise from "redux-promise";

// reducers
import { showModule, setMessage } from "./app/reducers";
import { loadPosts, setPosts, toggleShowRead } from "./post/reducers";
import { loadSources } from "./source/reducers";
import { checkUser, currentUser, setAuthStatus } from "./user/reducers";
// setup axios
axios.defaults.baseURL = `${process.env.REACT_APP_SERVER}/api`;
axios.defaults.headers.common["Authorization"] = process.env.REACT_APP_TOKEN;

const rootReducer = combineReducers({
  loadPosts: loadPosts,
  posts: setPosts,
  sources: loadSources,
  user: checkUser,
  currentUser: currentUser,
  authStatus: setAuthStatus,
  module: showModule,
  message: setMessage,
  showRead: toggleShowRead,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [reduxPromise, logger];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  interface state {}

  const initialState: state = {
    posts: [],
    sources: [],
    currentUser: {},
    authStatus: false,
    showRead: false,
    module: 'posts',
    message:'',
    // filterSourceId:'',
  };

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
