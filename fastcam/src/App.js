import React, { useRef, useState } from "react";
import Input from "./Input";
import Userlist from "./Userlist";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "안병욱",
      email: "quddnr005@naver.com",
      active: true,
    },
    {
      id: 2,
      username: "문현규",
      email: "vins@dev.com",
      active: false,
    },
    {
      id: 3,
      username: "배현아",
      email: "gomdi@naver.com",
      active: false,
    },
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]);
    setInputs({
      username: "",
      email: "",
    });
    console.log(nextId.current); //4
    nextId.current += 1;
  };
  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <>
      <Input
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <Userlist users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
