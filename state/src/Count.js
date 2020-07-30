import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);
  // useState() 는 [스테이트변수, 셋스테이트함수] 앞에 변수를 뒤에 함수가 핸들링한다. 초기값은 앞에 변수에 담긴다 즉 useState의 값은 초기 값인데 count에 들어간다.
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
      <h1>ddd</h1>
    </>
  );
}

export default Count;
