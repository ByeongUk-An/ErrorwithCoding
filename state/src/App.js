import React from "react";
import Count from "./Count";
import Input from "./Input";
import Input02 from "./Input02";
import Fun from "./Fun";
import Fuck from "./Fuck";
class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    this.setState((cur) => ({ count: cur.count + 1 }));
  };
  minus = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <>
        {/* <div>Count: {count}</div>
        <button onClick={this.add}>+</button>
        <button onClick={this.minus}>-</button>
        
        <Count /> */}
        {/* <Input /> */}
        {/* <Input02 /> */}
        {/* <Fun /> */}
        <Fuck />
      </>
    );
  }
}
export default App;
