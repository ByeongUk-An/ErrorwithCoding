import React, { createRef } from "react";

class EventPractice extends React.Component {
  state = {
    name: "",
    message: "",
  };

  getInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };
  delete = () => {
    this.setState({
      name: "",
      message: "",
    });
  };
  input = React.createRef();

  handleFocus = () => {
    this.input.current.focus();
  };

  render() {
    const { name, message } = this.state;

    return (
      <>
        <input type="text" name="name" value={name} onChange={this.getInput} />
        <input
          type="text"
          name="message"
          value={message}
          onChange={this.getInput}
          ref={this.input}
        />
        <button onClick={this.delete}>지우기</button>
        <h2>
          이름:{name}
          <br />
          하고싶은말:{message}
        </h2>
      </>
    );
  }
}

export default EventPractice;
