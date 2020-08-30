import React, { useContext, useState } from "react";

const NumberCotext = React.createContext();
const NumberProvider = NumberCotext.Provider;

function File1() {
  const [use, setUse] = useState(12);
  const onClick = () => {
    setUse((cur) => cur + 1);
  };
  return (
    <NumberProvider value={use}>
      <Text onClick={onClick} />
    </NumberProvider>
  );
}

function Text({ onClick }) {
  const value = useContext(NumberCotext);
  return <h2 onClick={onClick}>{value}</h2>;
}

export default File1;
