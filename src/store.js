import { applyMiddleware, createStore } from "redux";

import rootReducer from "./reducers";
import { thunk } from "redux-thunk";

const configureStore = preloadedState =>
  createStore(rootReducer, preloadedState, applyMiddleware(thunk));

export default configureStore;
