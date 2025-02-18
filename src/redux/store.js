import { applyMiddleware, createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";
import logger from "redux-logger"; //! npm install redux-logger
const store = createStore(cakeReducer, applyMiddleware(logger));

export default store;
