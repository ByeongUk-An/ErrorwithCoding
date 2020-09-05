import React from "react";
import ContextPro from "../contexts/Context";
import styled from "styled-components";
import Header from "./Header";
import UserList from "./UserList";
import UserForm from "./UserForm";

const Wraper = styled.div`
  width: 600px;
  height: 800px;
  background: powderblue;
  margin: 0 auto;
`;

function App() {
  return (
    <ContextPro>
      <Wraper>
        <Header />
        <UserForm />
        <UserList />
      </Wraper>
    </ContextPro>
  );
}

export default App;
