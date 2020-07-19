import React from "react";

// Components
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";

import Globalstyles from "../Styles/Globalstyles";

class App extends React.Component {
  render() {
    return (
      <>
        <Globalstyles />
        <Header />
        <Section />
        <Footer />
      </>
    );
  }
}

export default App;
