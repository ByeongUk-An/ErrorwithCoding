import React, { useState } from "react";

function Count1() {
  const [state, setState] = useState(0);
  const plus = () => {
    setState((cur) => cur + 1);
  };
  const minus = () => {
    setState((cur) => cur - 1);
  };

  return (
    <>
      <div>Count:{state}</div>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </>
  );
}

export default Count1;
