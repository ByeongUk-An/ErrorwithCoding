import React from "react";
import Counter from "./Counter";
import { increase, decrease, setDiff } from "../modules/counter";
import { useDispatch, useSelector } from "react-redux";

function CounterContainer() {
  const { number, diff } = useSelector((state) => ({
    number: state.number,
    diff: state.diff,
  }));
  const dispatch = useDispatch();

  const onSetDiff = (diff) => dispatch(setDiff(diff));
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());

  return (
    <Counter
      number={number}
      diff={diff}
      onSetDiff={onSetDiff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
}

export default CounterContainer;
