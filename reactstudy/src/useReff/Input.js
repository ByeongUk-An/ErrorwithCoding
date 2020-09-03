import React, { useState, useEffect, useRef } from "react";

function Input() {
  const focus = useRef();
  const [text, setText] = useState({
    name: "",
    nickname: "",
  });
  const { name, nickname } = text;

  const add = (e) => {
    const { name, value } = e.target;

    const nextInputs = {
      ...text,
      [name]: value,
    };
    setText(nextInputs);
  };

  const clear = () => {
    setText({
      name: "",
      nickname: "",
    });
    focus.current.focus();
  };

  return (
    <>
      <input
        type="text"
        placeholder="이름"
        onChange={add}
        name="name"
        value={name}
        ref={focus}
      />
      <input
        type="text"
        placeholder="닉네임"
        onChange={add}
        name="nickname"
        value={nickname}
      />
      <h2>
        input값: {name} ({nickname})
      </h2>
      <button onClick={clear}>초기화</button>
    </>
  );
}

export default Input;
