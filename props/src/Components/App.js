import React from "react";
import Welcome from "./Welcome";
import Hi from "./Hi";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Hi: { author: "Web", name: "hellowhide" },
    };
  }
  render() {
    return (
      <>
        <Welcome name="zzzzzaaa" />
        <Hi
          author={this.state.Hi.author}
          name={this.state.Hi.author}
          color="red"
        />
      </>
    );
  }
}

export default App;
