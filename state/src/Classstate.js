import React from "react";

class Classstate extends React.Component {
  state = {
    count: 0,
  };
  plus = () => {
    this.setState((cur) => ({ count: this.state.count + 3 }));
  };
  minus = () => {
    this.setState((cur) => ({ count: cur.count - 9 }));
  };
  render() {
    const { count } = this.state;
    return (
      <>
        <div>count:{count}</div>
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>
      </>
    );
  }
}

export default Classstate;
