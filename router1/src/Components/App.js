import React from "react";

import Router from "./Router";
// css 영역
import Globalstyle from "../Styles/Globalstyle";

class App extends React.Component {
  render() {
    return (
      <>
        <Router />
        <h1>안녕하세요</h1>
        <Globalstyle />
      </>
    );
  }
}

export default App;
