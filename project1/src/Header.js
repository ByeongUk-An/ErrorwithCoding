import React from "react";
import styled from "styled-components";

const HeaderBox = styled.header`
  width: 100%;
  height: 60px;
  background: rgba(2, 2, 2, 0.6);
  position: fixed;
  top: 0;
  left: 0;
`;

function Header() {
  return (
    <HeaderBox>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </HeaderBox>
  );
}

export default Header;
