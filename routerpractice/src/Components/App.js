import React from "react";
import Hi from "./Hi";
import Hello from "./Hello";
import Globalstyles from "../Styles/Globalstyles";

class App extends React.Component {
  render() {
    return (
      <>
        <Hi name="Default" color="blue" />
        <Hello name="Hello" apple="apple" color="steelblue" imgLink="" />
        <Globalstyles />
      </>
    );
  }
}

export default App;
