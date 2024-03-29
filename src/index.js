import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {legacy_createStore as createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";

import { leaderBoardReducer, gameStateReducer } from "./store/reducers";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware());

const rootReducer = combineReducers({
  leaderBoard: leaderBoardReducer,
  gameState: gameStateReducer,
});

const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
