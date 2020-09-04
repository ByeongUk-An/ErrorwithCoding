import React from "react";

function Input({ username, email, onChange, onCreate }) {
  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        type="text"
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onClick}>등록</button>
    </div>
  );
}

export default Input;
