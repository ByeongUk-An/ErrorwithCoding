import React, { useState } from "react";

function Count1() {
  const [count, setCount] = useState(10);

  const plus = () => {
    setCount((cur) => cur + 1);
  };
  const minus = () => {
    setCount((cur) => cur - 1);
  };
  return (
    <>
      <h3>count:{count}</h3>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </>
  );
}

export default Count1;
