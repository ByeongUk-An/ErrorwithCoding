import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import { v4 as uuid } from "uuid";

export default function TodoInput() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const onChange = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <div className="row m-2">
        <input
          onChange={onChange}
          value={name}
          type="text"
          className="col form-control"
        />
        <button
          onClick={() => {
            if (name != "") {
              dispatch(
                addTodo({
                  id: uuid(),
                  name: name,
                })
              );
            }
            setName("");
          }}
          className="btn btn-primary mx-2"
        >
          Add
        </button>
      </div>
    </>
  );
}
