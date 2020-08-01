import React from "react";

class Count extends React.Component {
  state = {
    count: 0,
  };

  plus = () => {
    this.setState((cur) => ({ count: this.state.count + 1 }));
  };
  minus = () => {
    this.setState((qwe) => ({ count: qwe.count - 3 }));
  };
  render() {
    const { count } = this.state;
    return (
      <>
        <h2>Count:{count}</h2>
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>
      </>
    );
  }
}

export default Count;
