import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/actions";

function TodoItem({ todo, number }) {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(todo.name);
  const dispatch = useDispatch();
  return (
    <>
      <div className="row mx-3 my-2 align-items-center">
        <div>{number}</div>
        <div className="col text-center">
          {edit ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <h5 className="my-0">{todo.name}</h5>
          )}
        </div>
        <button
          onClick={() => {
            dispatch(
              updateTodo({
                ...todo,
                name: name,
              })
            );

            setName(todo.name);

            setEdit(!edit);
          }}
          className="btn btn-primary m-1"
        >
          {edit ? "Update" : "Edit"}
        </button>
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="btn btn-danger m-1"
        >
          Del
        </button>
      </div>
    </>
  );
}

export default TodoItem;
