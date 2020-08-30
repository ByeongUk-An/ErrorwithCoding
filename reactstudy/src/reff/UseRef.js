import React, { useRef } from "react";

function UseRef() {
  const title = useRef();
  const clc = (e) => {
    console.log(e.target);
    console.log(title.current.innerHTML);
  };
  return (
    <h2 ref={title} onClick={clc}>
      헬로우
    </h2>
  );
}

export default UseRef;
