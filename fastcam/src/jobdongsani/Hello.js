import React from "react";

function Hello({ name, color, isSpecial }) {
  return (
    <>
      <div style={{ color }}>{isSpecial && "안녕하세요"}</div>
    </>
  );
}

export default Hello;
