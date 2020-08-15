import React, { useState } from "react";

function InputSample() {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };
  const clear = (e) => {
    setText("");
  };
  return (
    <>
      <input type="text" onChange={onChange} value={text} />
      <button onClick={clear}>초기화</button>
      <div>
        <b>값:</b>
        {text}
      </div>
    </>
  );
}

export default InputSample;
