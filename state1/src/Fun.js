import React, { useState } from "react";

function Fun() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
  });

  const add = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    const preInput = {
      ...state,
      //   [name]: value,
    };
    preInput[name] = value;
    setState(preInput);
  };
  const del = () => {
    setState({
      firstName: "",
      lastName: "",
    });
  };

  const { firstName, lastName } = state;
  return (
    <>
      <input type="text" name="firstName" value={firstName} onChange={add} />
      <input type="text" name="lastName" value={lastName} onChange={add} />
      <h2>
        firstName:{firstName} lastName:{lastName}
      </h2>
      <button onClick={del}>Clear</button>
    </>
  );
}

export default Fun;
