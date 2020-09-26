import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function TodoList() {
  let todos = useSelector((state) => state);
  return (
    <div className="my-4">
      {todos.map((item, index) => {
        return <TodoItem key={item.id} todo={item} number={index + 1} />;
      })}
    </div>
  );
}

export default TodoList;
