import React from "react";

class Fuck extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };
  render() {
    const { firstName, lastName } = this.state;
    const add = (e) => {
      const { name, value } = e.target;
      const proInput = {
        ...this.state,
        [name]: value,
      };
      this.setState(proInput);
    };
    const del = () => {
      this.setState({
        firstName: "",
        lastName: "",
      });
    };

    return (
      <>
        <input type="text" name="firstName" value={firstName} onChange={add} />
        <input type="text" name="lastName" value={lastName} onChange={add} />
        <h3>
          firstName:{firstName},lastName:{lastName}
        </h3>
        <button onClick={del}>clear</button>
      </>
    );
  }
}

export default Fuck;
