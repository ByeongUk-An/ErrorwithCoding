import React from "react";
import styled from "styled-components";

const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999px;
  width: 100%;
  height: 100px;
  background-color: #fff;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
`;

const HeadLogo = styled.h1`
  width: 120px;
  height: 100%;
  font-size: 38px;
  display: flex;
  align-items: center;
  color: tomato;
`;
const GnbList = styled.ul`
  width: 550px;
  height: 100%;
  display: flex;
  align-items: center;
`;

const GnbListItem = styled.li`
  color: #777;
  font-size: 18px;
  margin-left: 20px;
  &:first-child {
    color: #222;
    margin-left: 0;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderWrap>
        <HeadLogo>SNOW</HeadLogo>
        <GnbList>
          <GnbListItem>Home</GnbListItem>
          <GnbListItem>Work</GnbListItem>
          <GnbListItem>ABOUT</GnbListItem>
          <GnbListItem>BLOG</GnbListItem>
          <GnbListItem>CONTACT</GnbListItem>
          <GnbListItem>BUY THEME</GnbListItem>
        </GnbList>
      </HeaderWrap>
    );
  }
}

export default Header;
