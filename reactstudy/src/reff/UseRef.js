import React, { useRef, useEffect } from "react";

function UseRef() {
  const title = useRef();
  const clc = (e) => {
    console.log(e.target);
    console.log(title.current.innerHTML);
  };

  const head = useRef();

  useEffect(() => {
    console.log(head.current);
  });
  return (
    <>
      <h2 ref={title} onClick={clc}>
        헬로우
      </h2>
      <h3 ref={head}>hello</h3>
    </>
  );
}

export default UseRef;
