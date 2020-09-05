import React from "react";
import styled from "styled-components";

const HeaderWrap = styled.header`
  width: 100%;
  height: 100px;
  background: yellowgreen;
  & > h1 {
    text-align: center;
    line-height: 100px;
  }
`;

function Header() {
  return (
    <HeaderWrap>
      <h1>Todo</h1>
    </HeaderWrap>
  );
}

export default Header;
