import React, { useRef, useState } from "react";
import Input from "./Input";
import Userlist from "./UserList";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "안병욱",
      email: "quddnr005@naver.com",
    },
    {
      id: 2,
      username: "문현규",
      email: "vins@dev.com",
    },
    {
      id: 3,
      username: "배현아",
      email: "gomdi@naver.com",
    },
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    console.log(nextId.current); //4
    nextId.current += 1;
  };

  const onClick = () => {};

  return (
    <>
      <Input />
      <Userlist users={users} />
    </>
  );
}

export default App;
