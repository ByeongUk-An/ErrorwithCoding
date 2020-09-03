import React, { useRef, useState } from "react";
import InputSample from "./InputSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import Test from "./Test";
import Say from "./Say";
import EventPractice from "./EventPractice";
import ScrollBox from "./ScrollBox";

class App extends React.Component {
  render() {
    return (
      <>
        <ScrollBox ref={(ref) => (this.ScrollBox = ref)} />
        <button onClick={() => this.ScrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </>
    );
  }
}

export default App;
