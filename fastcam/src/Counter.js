import React, { useState } from "react";

function Counter() {
  const [count, setcount] = useState(0);

  const plus = () => {
    setcount(count + 1);
  };
  const minus = () => {
    setcount((number) => {
      return number - 10;
    });
  };

  return (
    <>
      <h2>Count:{count}</h2>
      <button onClick={plus}>plus</button>
      <button onClick={minus}>minus</button>
    </>
  );
}

export default Counter;
