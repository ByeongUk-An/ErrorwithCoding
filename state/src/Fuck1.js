import React from "react";

class Fuck1 extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };
  add = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    const proInput = {
      ...this.state,
      [name]: value,
    };
    this.setState(proInput);
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
          value={lastName}
          name="lastName"
          onChange={this.add}
        />
        <h2>
          FirstName:{firstName} LastName:{lastName}
        </h2>
        <button>지우기</button>
      </>
    );
  }
}

export default Fuck1;
