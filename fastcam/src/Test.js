import React, { useState } from "react";

function Test() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((cur) => cur + 1);
  };
  return (
    <>
      <h2>count:{count}</h2>
      <button onClick={add}>+</button>
      <button>-</button>
    </>
  );
}

export default Test;
