import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./redux/action";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state, []);

  const onIncrease = () => {
    return dispatch(increase());
  };
  const onDecrease = () => {
    return dispatch(decrease());
  };

  return (
    <>
      <h1>Counter:{counter}</h1>
      <button onClick={onIncrease}>플러스</button>
      <button onClick={onDecrease}>마이너스</button>
    </>
  );
}

export default App;
