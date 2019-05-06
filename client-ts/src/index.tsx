// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();

import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import { Provider } from "react-redux";

// load components
import App from "./containers/App/App";
import './index.css'
import configureStore from "./store";
import * as serviceWorker from "./serviceWorker";

// loading fonts
WebFont.load({
  google: {
    families: [
      "Alegreya:400,400i,500,500i,700,700i:cyrillic,cyrillic-ext,latin-ext",
      "Open+Sans:300,300i,400",
      "Roboto+Mono:300"
    ]
  }
});

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();