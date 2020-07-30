import React, { useState } from "react";

function Fun() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
  });

  const add = (e) => {
    const { name, value } = e.target;
    const nextState = {
      ...state,
      // [name]: value,
    };
    nextState[name] = value;
    setState(nextState);
  };
  const del = (e) => {
    setState({
      firstName: "",
      lastName: "",
    });
  };

  const { firstName, lastName } = state;

  return (
    <>
      <input name="firstName" type="text" value={firstName} onChange={add} />
      <input name="lastName" type="text" value={lastName} onChange={add} />
      <h3>
        firstName:{firstName},lastName:{lastName}
      </h3>
      <button onClick={del}>Clear</button>
    </>
  );
}

export default Fun;
