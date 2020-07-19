import React from "react";
import styled from "styled-components";

const FooterWrap = styled.div`
  width: 100%;
  height: 100px;
  background: powderblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Footer extends React.Component {
  render() {
    return <FooterWrap>&copy; alight reserve : 안병욱</FooterWrap>;
  }
}

export default Footer;
