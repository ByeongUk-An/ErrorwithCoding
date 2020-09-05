import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const Context = createContext();

function ContextPro(props) {
  const [todos, setTodos] = useState([
    { text: "안녕하세요", id: 1 },
    { text: "잘가세요", id: 2 },
    { text: "배고파요", id: 3 },
    { text: "저녘 뭐먹지", id: 4 },
  ]);

  const [selecItem, setSelectItem] = useState(null);

  const addTodo = (text) => {
    setTodos([...todos, { text, id: uuid() }]);
  };

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clear = () => {
    setTodos([]);
  };

  const select = (id) => {
    const item = todos.find((todo) => todo.id === id);
    console.log(item);
    setSelectItem(item);
  };

  const edit = (text, id) => {
    const newedit = todos.map((todo) => (todo.id === id ? { text, id } : todo));
    setTodos(newedit);
    setSelectItem(null);
  };

  return (
    <Context.Provider
      value={{ todos, addTodo, onRemove, clear, select, selecItem, edit }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default ContextPro;
