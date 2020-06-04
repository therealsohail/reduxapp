import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions/counter";
import { decrement } from "./actions/counter";

function App() {
  let counter = useSelector((state) => state.counter);
  let dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
