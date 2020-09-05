import React, { useContext, useState, useEffect } from "react";
import { Context } from "../contexts/Context";

function UserForm() {
  const [text, setText] = useState("");
  const { addTodo, clear, edit, selecItem } = useContext(Context);

  const onChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setText(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!selecItem) {
      addTodo(text);
      setText("");
    } else {
      edit(text, selecItem.id);
    }
  };

  useEffect(() => {
    if (selecItem) {
      setText(selecItem.text);
      console.log(text);
    } else {
      setText("");
    }
  }, [selecItem]);

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        required
        onChange={onChange}
        value={text}
        placeholder="값을 넣어주세요"
      />
      <button>등록</button>
      <button onClick={clear}>초기화</button>
    </form>
  );
}

export default UserForm;
