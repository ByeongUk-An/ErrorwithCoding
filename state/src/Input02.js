import React, { useState } from "react";

function Input02() {
  const [text, setText] = useState("");

  const add = (e) => {
    const { value } = e.target;
    setText(value);
  };
  const del = () => {
    setText("");
  };

  return (
    <>
      <input onChange={add} type="text" value={text} />
      <h3>{text}</h3>
      <button onClick={del}>clear</button>
    </>
  );
}

export default Input02;
