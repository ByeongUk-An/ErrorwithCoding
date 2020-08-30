import React from "react";
import { UserConsumer } from "./UserContext";

class Print extends React.Component {
  render() {
    return (
      <UserConsumer>
        {(props) => {
          return <h2>{props.name}</h2>;
        }}
      </UserConsumer>
    );
  }
}

export default Print;
