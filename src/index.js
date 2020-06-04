import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";

//actions
const increment = () => {
  return {
    type: "Increment",
  };
};
const decrement = () => {
  return {
    type: "Decrement",
  };
};
//reducers
const counter = (state = 0, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "Increment":
      return state + 1;

    case "Decrement":
      return state - 1;
  }
};

//store
let store = createStore(counter);

store.subscribe(() => console.log(store.getState()));

//dsipatch
store.dispatch(increment());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
