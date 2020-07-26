import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount((cur) => cur + 1);
  };

  const minus = () => {
    setCount((cur) => cur - 1);
  };

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </>
  );
}

export default Count;
