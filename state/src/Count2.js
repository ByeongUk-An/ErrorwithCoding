import React, { useState } from "react";

function Count2(props) {
  const [state, setState] = useState(0);

  const add = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const proInput = {
      ...state,
      [name]: value,
    };
    setState(proInput);
  };

  const del = (e) => {
    setState({
      firstName: "",
      lastName: "",
    });
  };
  const { firstName, lastName } = state;
  const { clear } = props;
  return (
    <>
      <input type="text" name="firstName" value={firstName} onChange={add} />
      <input type="text" name="lastName" value={lastName} onChange={add} />
      <h2>
        firstName:{firstName} lastName:{lastName}
      </h2>
      <button onClick={del}>{clear}</button>
    </>
  );
}

export default Count2;
