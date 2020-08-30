import React, { useState, useReducer } from "react";

const initState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "plus":
      return { count: state.count + 1 };
    case "minus":
      return { count: state.count - 1 };
    default:
      throw new Error("Err");
  }
}

function Redu() {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "plus" })}>+</button>
      <button onClick={() => dispatch({ type: "minus" })}>-</button>
    </>
  );
}

export default Redu;
