import React, { useState, useRef } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });
  const nameInput = useRef();
  const { name, nickname } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const clear = () => {
    setInputs({
      name: "",
      nickname: "",
    });
    nameInput.current.focus();
  };
  return (
    <>
      <input
        type="text"
        placeholder="이름"
        name="name"
        onChange={onChange}
        value={name}
      />
      <input
        type="text"
        placeholder="닉네임"
        name="nickname"
        onChange={onChange}
        value={nickname}
        ref={nameInput}
      />
      <button onClick={clear}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </>
  );
}

export default InputSample;
