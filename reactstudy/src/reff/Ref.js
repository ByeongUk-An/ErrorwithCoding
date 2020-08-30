import React from "react";

class Ref extends React.Component {
  constructor(props) {
    this.h2 = React.createRef();
    super(props);
  }

  componentDidMount() {
    console.log(this.h2);
  }

  render() {
    return <h2 ref={this.h2}>안녕</h2>;
  }
}

export default Ref;
