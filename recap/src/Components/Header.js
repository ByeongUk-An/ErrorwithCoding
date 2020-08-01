import React from 'react';
import styled from 'styled-components';

const HeaderBox = styled.div`
text-align: center;
padding-top: 48px;
font-size: 32px;
font-weight: bold;
`;

function Header() {

    const today = new Date();
    const dates = today.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    });

    return(
        <HeaderBox>
            <h1>Today: {dates}</h1>
        </HeaderBox>

    );
}

export default Header;