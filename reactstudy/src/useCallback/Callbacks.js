import React, { useState, useCallback } from "react";

function Callbacks() {
  const [count, setCount] = useState(0);
  const add = useCallback(() => {
    setCount((cur) => cur + 1);
  }, []);
  const minus = useCallback(() => {
    setCount((cur) => cur - 1);
  }, []);
  console.log(count);

  return (
    <>
      <h2>count:{count}</h2>
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
    </>
  );
}

export default Callbacks;
