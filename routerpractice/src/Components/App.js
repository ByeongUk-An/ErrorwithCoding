import React from "react";
import Globalstyles from "../Styles/Globalstyles";
import Router from "./Router";

class App extends React.Component {
  render() {
    return (
      <>
        {/* <Hi name="Default" color="blue" />
        <Hello name="Hello" apple="apple" color="steelblue" imgLink="" /> */}
        <Router />
        <Globalstyles />
      </>
    );
  }
}

export default App;
