import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import { watchFetch } from "./views/Home/redux/saga";

import HomeReducer from "./views/Home/redux/reducer";
import DetailsReducer from "./views/Details/redux/reducer";
import WatchLaterReducer from "./views/WatchLater/redux/reducer";
import AuthReducer from "./views/Login/redux/reducer";

const rootReducer = combineReducers({
  homeReducer: HomeReducer,
  detailsReducer: DetailsReducer,
  watchLaterReducer: WatchLaterReducer,
  authReducer: AuthReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetch);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
