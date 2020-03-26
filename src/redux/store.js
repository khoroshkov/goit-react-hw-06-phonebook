import { createStore, combineReducers, applyMiddleware } from "redux";
//import { configureStore } from "@reduxjs/toolkit";
import phoneBookReducer from "./contacts/phoneBookReducer";
import filterReducer from "./filter/filterReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { save, load } from "redux-localstorage-simple";
import contactCheck from "./middleware/contactCheck";

const rootReducer = combineReducers({
  contacts: phoneBookReducer,
  filter: filterReducer
});

const enhancer = applyMiddleware(contactCheck, save());

const store = createStore(rootReducer, load(), composeWithDevTools(enhancer));

export default store;
