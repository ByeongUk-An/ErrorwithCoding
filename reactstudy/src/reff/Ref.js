import React from "react";

class Ref extends React.Component {
  constructor(props) {
    super(props);
    this.hello = React.createRef();
  }

  componentDidMount() {
    console.log(this.hello.current);
    const abc = this.hello.current;
    console.log(abc);
  }

  render() {
    return (
      <>
        <h2 ref={this.hello}>안녕</h2>
        <h2>hello</h2>
      </>
    );
  }
}

export default Ref;
