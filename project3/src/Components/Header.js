import React from "react";
import styled from "styled-components";
import images from "../img/1.png";
import images2 from "../img/2.png";
const HeaderWrap = styled.header`
  width: 100%;
  height: 1000px;
  background: url(${images}) no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
`;
const GnbList = styled.ul`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 35px;
  color: #afc67b;
  text-transform: uppercase;
`;
const GnbListItem = styled.li`
  margin-right: 60px;
`;
const SubLogo = styled.div`
  background: url(${images2}) no-repeat;
  width: 147px;
  height: 125px;
  position: absolute;
  top: 167px;
  right: 398px;
`;
const HeaderTitle = styled.div`
  color: #9baf6d;
  text-transform: uppercase;
  position: absolute;
  top: 400px;
  right: 105px;
  width: 436px;
  letter-spacing: 7px;
`;
const HeaderTitleList1 = styled.p`
  font-size: 56px;
`;
const HeaderTitleList2 = styled.p`
  font-size: 78px;
  font-weight: bold;
`;
const HeaderBtn = styled.div`
  width: 388px;
  height: 93px;
  background-color: #4c5242;
  opacity: 0.7;
  color: #afc67b;
  font-size: 49px;
  text-transform: uppercase;
  display: felx;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 666px;
  right: 150px;
  border-radius: 8px;
`;
class Header extends React.Component {
  render() {
    return (
      <HeaderWrap>
        <GnbList>
          <GnbListItem>welcome</GnbListItem>
          <GnbListItem>menu</GnbListItem>
          <GnbListItem>events</GnbListItem>
          <GnbListItem>contact</GnbListItem>
        </GnbList>
        <SubLogo />
        <HeaderTitle>
          <HeaderTitleList1>new opening</HeaderTitleList1>
          <HeaderTitleList2>23rdsept</HeaderTitleList2>
        </HeaderTitle>
        <HeaderBtn>learn more</HeaderBtn>
      </HeaderWrap>
    );
  }
}

export default Header;
