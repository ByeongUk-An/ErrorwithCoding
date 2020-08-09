import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  width:100%;
  height: 50px;
  background: #03a9f4;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
`;

const Ullist = styled.ul`
  display: flex;
  height: 100%;
`;
const ListItem = styled.li`
  margin-left: 20px;
  height: 100%;
`;

const CustomLink = styled(Link)`
  width:100%;
  height: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
  color: ${props => (props.current ? "#fff" : "#222")}
`;

export default withRouter(({location: {pathname}}) => (
    <Header>
        <h1>LOGO</h1>
        <Ullist>
            <ListItem>
                <CustomLink current={pathname === "/"} to="/">HOME</CustomLink>
            </ListItem>
            <ListItem>
                <CustomLink current={pathname === "/search"} to="/search">SEARCH</CustomLink>
            </ListItem>
        </Ullist>
    </Header>
));