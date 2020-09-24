import React from "react";

function Counter({ diff, number, onSetDiff, onIncrease, onDecrease }) {
  const onChange = (e) => {
    onSetDiff(parseInt(e.target.value));
  };
  return (
    <div>
      <h1>{number}</h1>
      <input type="number" value={diff} onChange={onChange} />
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
}

export default Counter;
