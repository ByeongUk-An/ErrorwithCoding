import React from "react";
import styled from "styled-components";
const DivBox = styled.div`
  color: #123;
  background: blue;
  width: 100px;
  height: 100px;
`;
const DivBox2 = styled(DivBox)``;
const DivBox3 = styled(DivBox)`
  width: 200px;
  height: 200px;
`;

function Hello(props) {
  return (
    <>
      <DivBox />
      <DivBox2 />
      <DivBox3 />
    </>
  );
}

export default Hello;
