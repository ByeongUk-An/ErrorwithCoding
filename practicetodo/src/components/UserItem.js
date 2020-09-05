import React, { useContext, useState } from "react";
import { Context } from "../contexts/Context";

function UserItem({ todo }) {
  const { onRemove, select } = useContext(Context);

  return (
    <li>
      <h2>{todo.text}</h2>
      <button onClick={() => select(todo.id)}>수정</button>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </li>
  );
}

export default UserItem;
