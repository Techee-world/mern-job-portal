// src/redux/store.js
import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk }from "redux-thunk";
import authReducer from "./reduce/authReducer";
import adminJobReducer from "./reduce/adminJobApplicationReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  job: adminJobReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
