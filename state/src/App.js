import React from "react";
import Count from "./Count";
import Input from "./Input";
import Input02 from "./Input02";
import Fun from "./Fun";
import Fun1 from "./Fun1";
import Fuck from "./Fuck";
import Fuck1 from "./Fuck1";
import Count1 from "./Count1";
import Classstate from "./Classstate";
// import Enter from "./Enter";
import Count2 from "./Count2";
import Enter1 from "./Enter1";
import Enter from "./Enter";
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
        {/* <Fun1 /> */}
        {/* <Fun /> */}
        {/* <Fuck /> */}
        {/* <Fuck1 /> */}
        {/* <Count1 /> */}
        {/* <Classstate /> */}
        <Enter/>
        {/* <Count2 clear="clear" /> */}
        {/*<Enter1/>*/}
      </>
    );
  }
}
export default App;
