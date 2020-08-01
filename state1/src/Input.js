import React from "react";

class Input extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };
  add = (e) => {
    const { name, value } = e.target;
    const preInput = {
      ...this.state,
      [name]: value,
      //     preInput[name] = value;
    };
    this.setState(preInput);
  };
  del = (e) => {
    this.setState({
      firstName: "",
      lastName: "",
    });
  };
  render() {
    const { firstName, lastName } = this.state;
    return (
      <>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={this.add}
        />
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={this.add}
        />
        <h2>
          firstName:{firstName} lastName:{lastName}
        </h2>
        <button onClick={this.del}>지우기</button>
      </>
    );
  }
}

export default Input;
