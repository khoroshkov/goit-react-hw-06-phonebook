import { createStore, combineReducers, applyMiddleware } from "redux";
import phoneBookReducer from "./phoneBookReducer";
import filterReducer from "./filterReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import contactCheck from "./middleware/contactCheck";
import setLocalStorage from "./middleware/setLocalStorage";

const rootReducer = combineReducers({
  contacts: phoneBookReducer,
  filter: filterReducer
});

const enhancer = applyMiddleware(contactCheck, setLocalStorage);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
