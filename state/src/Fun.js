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
    };
    nextState[name] = value;
    setState(state);
  };

  const { firstName, lastName } = state;

  return (
    <>
      <input name="firstName" type="text" value={firstName} onChange={add} />
      <input name="lastName" type="text" value={lastName} onChange={add} />
      <h3>
        FirstName:{firstName},LastName:{lastName}
      </h3>
      <button>Clear</button>
    </>
  );
}

export default Fun;
