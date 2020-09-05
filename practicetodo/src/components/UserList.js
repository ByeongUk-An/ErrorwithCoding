import React, { useContext } from "react";
import { Context } from "../contexts/Context";
import UserItem from "./UserItem";

function UserList() {
  const { todos } = useContext(Context);
  console.log(todos);
  return (
    <ul>
      {todos.map((todo) => {
        return <UserItem todo={todo} key={todo.id} />;
      })}
    </ul>
  );
}

export default UserList;
