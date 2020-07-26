import React from "react";

class Input extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };

  add = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const froInput = {
      ...this.state,
      [name]: value,
    };

    this.setState(froInput);
  };

  del = () => {
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
          name="firstName"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={this.add}
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={this.add}
        />
        <h2>
          FirstName:{firstName} , LastName:{lastName}
        </h2>
        <button onClick={this.del}>Clear</button>
      </>
    );
  }
}
export default Input;
