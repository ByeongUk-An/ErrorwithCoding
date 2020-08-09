import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrap = styled.section`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

const Carditem = styled.div`

`;

const Container = ({children, title}) => (
    <Wrap>
        <Title>{title}</Title>
        <Carditem>{children}</Carditem>
    </Wrap>
)

Container.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default Container;