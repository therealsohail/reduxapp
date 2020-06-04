import { combineReducers } from "redux";
import counterReducer from "./counter";
import isLoggedIn from "./loggedIn";

const rootReducers = combineReducers({
  counter: counterReducer,
  isLogged: isLoggedIn,
});

export default rootReducers;
